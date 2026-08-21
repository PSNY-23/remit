const fs = require('fs');
const path = require('path');

const mdxPath = path.join(__dirname, '../app/dsa-list/full/page.mdx');
const content = fs.readFileSync(mdxPath, 'utf8');
const lines = content.split('\n');

const chapterRegex = /^\s*(\d+)\.\s+(.*?)\s*\((\d+)\s+Problems?\)/i;
const topicRegex = /^\s*(\d+\.\d+)\s+(.*?)\s*\((\d+)\s+Problems?\)/i;
const problemRegex = /^\s*(\d+)\.\s+\[(.*?)\]\((.*?)\)/;

const chapterIcons = {
  1: '📦',
  2: '🔍',
  3: '🔗',
  4: '📚',
  5: '🌲',
  6: '⛰️',
  7: '🕸️',
  8: '⚡',
  9: '🔄',
  10: '🌳',
  11: '🧮',
  12: '🎯'
};

let currentChapter = null;
let currentTopic = null;
let chapters = [];
let allProblems = [];
let inDetails = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.includes('<details')) inDetails = true;
  if (!inDetails) continue; // Skip TOC before the details blocks

  const chapMatch = line.match(chapterRegex);
  const topMatch = line.match(topicRegex);
  const probMatch = line.match(problemRegex);

  if (chapMatch && !topMatch) {
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
    const url = probMatch[3].trim();
    if (url.includes('leetcode.com')) platform = 'LeetCode';
    else if (url.includes('geeksforgeeks.org')) platform = 'GeeksforGeeks';
    else if (url.includes('spoj.com')) platform = 'SPOJ';
    else if (url.includes('hackerearth.com')) platform = 'HackerEarth';

    const prob = {
      id: parseInt(probMatch[1]),
      title: probMatch[2].trim(),
      url: url,
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

const outDir = path.join(__dirname, '../data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const fileContent = `export interface ProblemItem {
  id: number;
  title: string;
  url: string;
  platform: 'LeetCode' | 'GeeksforGeeks' | 'SPOJ' | 'HackerEarth' | 'Other';
  chapterId: number;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
}

export interface TopicGroup {
  id: string;
  title: string;
  expectedCount: number;
  problems: ProblemItem[];
}

export interface ChapterGroup {
  id: number;
  title: string;
  icon: string;
  expectedCount: number;
  topics: TopicGroup[];
}

export const MASTER_CHAPTERS: ChapterGroup[] = ${JSON.stringify(chapters, null, 2)};

export const MASTER_PROBLEMS: ProblemItem[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(path.join(outDir, 'masterProblemData.ts'), fileContent, 'utf8');
console.log('Data written successfully to data/masterProblemData.ts');
