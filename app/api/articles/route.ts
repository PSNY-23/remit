import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { renderMarkdown } from "@/lib/markdown";
import { revalidatePath } from "next/cache";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * GET /api/articles?subjectId=xxx&chapterId=yyy
 * Returns articles, optionally filtered.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const subjectId = searchParams.get("subjectId");
  const chapterId = searchParams.get("chapterId");

  const where: any = {};
  if (subjectId) where.subjectId = subjectId;
  if (chapterId) where.chapterId = chapterId;

  const articles = await prisma.article.findMany({
    where,
    include: {
      subject: { select: { slug: true, title: true } },
      chapter: { select: { slug: true, title: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ articles });
}

/**
 * POST /api/articles
 * Creates a new article.
 * Body: {
 *   title, slug?, description?, content,
 *   subjectId?, chapterId?,
 *   newSubjectName?, newChapterName?
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let {
      title,
      slug,
      description,
      content,
      subjectId,
      chapterId,
      newSubjectName,
      newChapterName,
    } = body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }
    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    // Auto-create Subject if newSubjectName is provided
    if (newSubjectName && !subjectId) {
      const subjectSlug = slugify(newSubjectName);
      let subject = await prisma.subject.findUnique({
        where: { slug: subjectSlug },
      });
      if (!subject) {
        const maxOrder = await prisma.subject.aggregate({
          _max: { order: true },
        });
        subject = await prisma.subject.create({
          data: {
            title: newSubjectName.trim(),
            slug: subjectSlug,
            description: "",
            order: (maxOrder._max.order ?? -1) + 1,
          },
        });
      }
      subjectId = subject.id;
    }

    if (!subjectId) {
      return NextResponse.json(
        { error: "subjectId or newSubjectName is required" },
        { status: 400 }
      );
    }

    // Verify subject exists
    const subject = await prisma.subject.findUnique({
      where: { id: subjectId },
    });
    if (!subject) {
      return NextResponse.json(
        { error: "Subject not found" },
        { status: 404 }
      );
    }

    // Auto-create Chapter if newChapterName is provided
    if (newChapterName && !chapterId) {
      const chapterSlug = slugify(newChapterName);
      let chapter = await prisma.chapter.findUnique({
        where: {
          subjectId_slug: { subjectId, slug: chapterSlug },
        },
      });
      if (!chapter) {
        const maxOrder = await prisma.chapter.aggregate({
          where: { subjectId },
          _max: { order: true },
        });
        chapter = await prisma.chapter.create({
          data: {
            title: newChapterName.trim(),
            slug: chapterSlug,
            subjectId,
            order: (maxOrder._max.order ?? -1) + 1,
          },
        });
      }
      chapterId = chapter.id;
    }

    // Generate slug
    const articleSlug =
      slug ||
      slugify(title);

    // Check for duplicate
    const existing = await prisma.article.findUnique({
      where: { subjectId_slug: { subjectId, slug: articleSlug } },
    });
    if (existing) {
      return NextResponse.json(
        { error: "An article with this slug already exists in this subject" },
        { status: 409 }
      );
    }

    // Render HTML with rich markdown (KaTeX math, syntax highlighting, Mermaid)
    const html = renderMarkdown(content);

    const article = await prisma.article.create({
      data: {
        title: title.trim(),
        slug: articleSlug,
        description: description || "",
        content,
        html,
        subjectId,
        chapterId: chapterId || null,
      },
      include: {
        subject: { select: { slug: true } },
      },
    });

    // Revalidate relevant pages
    try {
      revalidatePath(`/articles/${article.subject.slug}/${article.slug}`);
      revalidatePath(`/${article.subject.slug}`);
    } catch {
      // revalidatePath may not work outside of request context in some builds
    }

    return NextResponse.json(
      {
        success: true,
        article,
        redirectUrl: `/articles/${article.subject.slug}/${article.slug}`,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /api/articles error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
