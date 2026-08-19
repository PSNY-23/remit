import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function findQuestionDataFiles(dir: string): Promise<{ topicPath: string; filePath: string }[]> {
  const results: { topicPath: string; filePath: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findQuestionDataFiles(fullPath)));
    } else if (entry.name === 'questions-data.json') {
      // Relative path from app/interview
      const interviewRoot = path.join(process.cwd(), 'app', 'interview');
      const relDir = path.relative(interviewRoot, path.dirname(fullPath)).replace(/\\/g, '/');
      results.push({ topicPath: relDir, filePath: fullPath });
    }
  }
  return results;
}

async function main() {
  console.log('🚀 Starting Neon DB migration/seeding from local JSON files...');
  const interviewDir = path.join(process.cwd(), 'app', 'interview');
  
  if (!fs.existsSync(interviewDir)) {
    console.log('No app/interview directory found.');
    return;
  }

  const dataFiles = await findQuestionDataFiles(interviewDir);
  console.log(`Found ${dataFiles.length} topic datasets to sync.`);

  let totalSynced = 0;

  for (const file of dataFiles) {
    try {
      const raw = fs.readFileSync(file.filePath, 'utf8');
      const questions = JSON.parse(raw);

      if (!Array.isArray(questions)) continue;

      const topicTitle = path.basename(path.dirname(file.filePath));

      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        if (!q.slug || !q.title) continue;

        const category = q.category || topicTitle;
        const content = q.content || `# ${q.title}\n\nNo content yet.`;

        await prisma.article.upsert({
          where: {
            topicPath_slug: {
              topicPath: file.topicPath,
              slug: q.slug,
            },
          },
          update: {
            title: q.title,
            category,
            content,
            order: i,
          },
          create: {
            title: q.title,
            slug: q.slug,
            topicPath: file.topicPath,
            category,
            content,
            order: i,
          },
        });
        totalSynced++;
      }
      console.log(`✅ Synced ${questions.length} articles for topic: ${file.topicPath}`);
    } catch (err) {
      console.error(`❌ Error syncing file ${file.filePath}:`, err);
    }
  }

  console.log(`🎉 Seeding complete! Total articles in DB: ${totalSynced}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
