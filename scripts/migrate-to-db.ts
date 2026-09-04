/**
 * Migration Script: content/ markdown files -> PostgreSQL via Prisma
 *
 * Run with: npx tsx scripts/migrate-to-db.ts
 *
 * 1. Reads all .md files from content/[subject]/
 * 2. Creates Subject and Chapter records
 * 3. Inserts all articles with pre-rendered HTML
 * 4. Reports migration stats
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const contentRoot = path.join(process.cwd(), "content");

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  console.log("🚀 Starting migration from content/ to PostgreSQL...\n");

  if (!fs.existsSync(contentRoot)) {
    console.error("❌ content/ directory not found.");
    process.exit(1);
  }

  const subjectDirs = fs
    .readdirSync(contentRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let totalArticles = 0;
  let totalSubjects = 0;
  let totalChapters = 0;

  for (const subjectSlug of subjectDirs) {
    const subjectDir = path.join(contentRoot, subjectSlug);
    const mdFiles = fs
      .readdirSync(subjectDir)
      .filter((f) => f.endsWith(".md"));

    if (mdFiles.length === 0) continue;

    // Create or find the Subject
    const subjectTitle = subjectSlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const subject = await prisma.subject.upsert({
      where: { slug: subjectSlug },
      update: {},
      create: {
        title: subjectTitle,
        slug: subjectSlug,
        description: "",
        order: totalSubjects,
      },
    });

    totalSubjects++;
    console.log(`📁 Subject: ${subject.title} (${subjectSlug})`);

    // Track chapters for this subject
    const chapterMap = new Map<string, string>(); // title -> id

    for (const file of mdFiles) {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(subjectDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const title = data.title || slug;
      const category = data.category || "General";
      const description = data.description || "";

      // Create or find the Chapter
      let chapterId: string;
      if (chapterMap.has(category)) {
        chapterId = chapterMap.get(category)!;
      } else {
        const chapterSlug = slugify(category);
        const chapter = await prisma.chapter.upsert({
          where: {
            subjectId_slug: { subjectId: subject.id, slug: chapterSlug },
          },
          update: {},
          create: {
            title: category,
            slug: chapterSlug,
            subjectId: subject.id,
            order: chapterMap.size,
          },
        });
        chapterId = chapter.id;
        chapterMap.set(category, chapter.id);
        totalChapters++;
        console.log(`  📂 Chapter: ${category}`);
      }

      // Render HTML
      const html = await marked.parse(content, { gfm: true, breaks: true });

      // Create the Article
      await prisma.article.upsert({
        where: {
          subjectId_slug: { subjectId: subject.id, slug },
        },
        update: {
          title,
          description,
          content,
          html,
          chapterId,
        },
        create: {
          title,
          slug,
          description,
          content,
          html,
          subjectId: subject.id,
          chapterId,
        },
      });

      totalArticles++;
      console.log(`    📄 ${title}`);
    }
  }

  console.log("\n✅ Migration complete!");
  console.log(`   Subjects: ${totalSubjects}`);
  console.log(`   Chapters: ${totalChapters}`);
  console.log(`   Articles: ${totalArticles}`);

  // Verify
  const dbCount = await prisma.article.count();
  console.log(`\n📊 Database article count: ${dbCount}`);

  if (dbCount === totalArticles) {
    console.log("✅ Verification passed! All articles migrated successfully.");
  } else {
    console.log(
      `⚠️  Mismatch: expected ${totalArticles}, got ${dbCount} in database.`
    );
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("❌ Migration failed:", e);
  prisma.$disconnect();
  process.exit(1);
});
