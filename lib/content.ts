import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface ArticleMeta {
  slug: string;
  title: string;
  category: string;
  description: string;
  section?: string;
}

export interface ArticleDetail extends ArticleMeta {
  content: string;
  html: string;
}

const contentRoot = path.join(process.cwd(), 'content');

export function getArticles(section: string): ArticleMeta[] {
  const dir = path.join(contentRoot, section);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  const articles: ArticleMeta[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    articles.push({
      slug,
      title: data.title || slug,
      category: data.category || 'General',
      description: data.description || '',
      section,
    });
  }

  return articles;
}

export async function getArticle(section: string, slug: string): Promise<ArticleDetail | null> {
  const filePath = path.join(contentRoot, section, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const html = await marked.parse(content, { gfm: true, breaks: true });

  return {
    slug,
    title: data.title || slug,
    category: data.category || 'General',
    description: data.description || '',
    section,
    content,
    html,
  };
}

export function getAllArticleSlugs(section: string): string[] {
  const dir = path.join(contentRoot, section);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

export function getAllSections(): string[] {
  if (!fs.existsSync(contentRoot)) return [];
  return fs.readdirSync(contentRoot, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}
