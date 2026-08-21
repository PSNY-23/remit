const fs = require('fs');
const path = require('path');

const mdxPath = path.join(__dirname, '../app/dsa-list/full-300/page.mdx');
const content = fs.readFileSync(mdxPath, 'utf8');
const lines = content.split('\n');

const chapterRegex = /Chapter\s+(\d+):\s+(.*?)\s*\((\d+)\s+Problems?\)/i;
const topicRegex = /Topic\s+(\d+\.\d+):\s+(.*?)\s*\((\d+)\s+Problems?\)/i;
const problemRegex = /-\s*\[\s*\]\s*\[\*\*(.*?)\*\*\]\((.*?)\)\s*(?:—|-)\s*(Easy|Medium|Hard)/i;

const chapterIcons = {
  1: '📦',
  2: '🔗',
  3: '📚',
  4: '🌲',
  5: '⛰️',
  6: '🕸️',
  7: '⚡',
  8: '🔄',
  9: '🌳',
  10: '🧮'
};

let currentChapter = null;
let currentTopic = null;
let chapters = [];
let allProblems = [];
let problemIdCounter = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const chapMatch = line.match(chapterRegex);
  const topMatch = line.match(topicRegex);
  const probMatch = line.match(problemRegex);

  if (chapMatch) {
    const id = parseInt(chapMatch[1]);
    currentChapter = {
      id,
      title: chapMatch[2].trim(),
      expectedCount: parseInt(chapMatch[3]),
      icon: chapterIcons[id] || '💡',
      topics: []
    };
    chapters.push(currentChapter);
    currentTopic = null;
  } else if (topMatch) {
    currentTopic = {
      id: topMatch[1],
      title: topMatch[2].trim(),
      expectedCount: parseInt(topMatch[3]),
      problems: []
    };
    if (currentChapter) {
      currentChapter.topics.push(currentTopic);
    }
  } else if (probMatch) {
    let platform = 'Other';
    const url = probMatch[2].trim();
    if (url.includes('leetcode.com')) platform = 'LeetCode';
    else if (url.includes('geeksforgeeks.org')) platform = 'GeeksforGeeks';
    else if (url.includes('spoj.com')) platform = 'SPOJ';
    else if (url.includes('hackerearth.com')) platform = 'HackerEarth';

    const difficulty = (probMatch[3].trim().charAt(0).toUpperCase() + probMatch[3].trim().slice(1).toLowerCase());

    const prob = {
      id: problemIdCounter++,
      title: probMatch[1].trim(),
      url: url,
      difficulty: difficulty,
      platform: platform,
      chapterId: currentChapter ? currentChapter.id : 0,
      chapterTitle: currentChapter ? currentChapter.title : '',
      topicId: currentTopic ? currentTopic.id : '',
      topicTitle: currentTopic ? currentTopic.title : ''
    };
    allProblems.push(prob);
    if (currentTopic) {
      currentTopic.problems.push(prob);
    }
  }
}

console.log('Chapters count:', chapters.length);
console.log('Total parsed problems:', allProblems.length);

chapters.forEach((c) => {
  const count = c.topics.reduce((acc, t) => acc + t.problems.length, 0);
  console.log(`Ch ${c.id}: ${c.title} -> Expected: ${c.expectedCount}, Topics: ${c.topics.length}, Actual: ${count}`);
});

const outDir = path.join(__dirname, '../data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const fileContent = `export interface CuratedProblemItem {
  id: number;
  title: string;
  url: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: 'LeetCode' | 'GeeksforGeeks' | 'SPOJ' | 'HackerEarth' | 'Other';
  chapterId: number;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
}

export interface CuratedTopicGroup {
  id: string;
  title: string;
  expectedCount: number;
  problems: CuratedProblemItem[];
}

export interface CuratedChapterGroup {
  id: number;
  title: string;
  icon: string;
  expectedCount: number;
  topics: CuratedTopicGroup[];
}

export const CURATED_300_CHAPTERS: CuratedChapterGroup[] = ${JSON.stringify(chapters, null, 2)};

export const CURATED_300_PROBLEMS: CuratedProblemItem[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(path.join(outDir, 'curated300ProblemData.ts'), fileContent, 'utf8');
console.log('Saved to data/curated300ProblemData.ts');
