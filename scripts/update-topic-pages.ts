import fs from 'fs';
import path from 'path';

function findTopicDirs(dir: string): { topicPath: string; dirPath: string; topicTitle: string }[] {
  const results: { topicPath: string; dirPath: string; topicTitle: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const hasSlug = fs.existsSync(path.join(fullPath, '[slug]'));
      if (hasSlug) {
        const interviewRoot = path.join(process.cwd(), 'app', 'interview');
        const relDir = path.relative(interviewRoot, fullPath).replace(/\\/g, '/');
        const title = entry.name
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        results.push({ topicPath: relDir, dirPath: fullPath, topicTitle: title });
      } else {
        results.push(...findTopicDirs(fullPath));
      }
    }
  }
  return results;
}

const interviewDir = path.join(process.cwd(), 'app', 'interview');
const topics = findTopicDirs(interviewDir);

console.log(`Found ${topics.length} topic pages to convert to dynamic TopicQuestionList.`);

for (const topic of topics) {
  const pageMdxPath = path.join(topic.dirPath, 'page.mdx');

  const content = `---
asIndexPage: true
---

import TopicQuestionList from '@/components/TopicQuestionList';

# ${topic.topicTitle}

A comprehensive preparation handbook covering core concepts, architectural patterns, and production trade-offs. Click on any question to view its in-depth explanation and code examples.

<TopicQuestionList topicPath="${topic.topicPath}" topicTitle="${topic.topicTitle}" />
`;

  fs.writeFileSync(pageMdxPath, content, 'utf8');
  console.log(`Updated dynamic page.mdx for: ${topic.topicPath}`);
}

console.log('All 24 topic pages are now dynamically rendered from the database!');
