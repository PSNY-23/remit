import fs from 'fs';
import path from 'path';

function findSlugPages(dir: string): { topicPath: string; filePath: string }[] {
  const results: { topicPath: string; filePath: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '[slug]') {
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const interviewRoot = path.join(process.cwd(), 'app', 'interview');
          const relDir = path.relative(interviewRoot, dir).replace(/\\/g, '/');
          results.push({ topicPath: relDir, filePath: pageFile });
        }
      } else {
        results.push(...findSlugPages(fullPath));
      }
    }
  }
  return results;
}

const interviewDir = path.join(process.cwd(), 'app', 'interview');
const slugPages = findSlugPages(interviewDir);

console.log(`Found ${slugPages.length} [slug]/page.tsx files to update.`);

for (const item of slugPages) {
  const code = `import { notFound } from 'next/navigation';
import ArticleViewer from './ArticleViewer';
import { getArticleBySlug } from '@/lib/articles';

export const dynamic = 'force-dynamic';

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topicPath = '${item.topicPath}';
  const question = await getArticleBySlug(topicPath, slug);

  if (!question) {
    notFound();
  }

  return <ArticleViewer slug={slug} initialContent={question.content} topicPath={topicPath} />;
}
`;

  fs.writeFileSync(item.filePath, code, 'utf8');
  console.log(`Updated ${item.filePath}`);
}

console.log('All [slug]/page.tsx files updated successfully without JSON dependencies!');
