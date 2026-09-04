import { prisma } from "./prisma";
import { marked } from "marked";

export interface ArticleMeta {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  section?: string;
}

export interface ArticleDetail extends ArticleMeta {
  content: string;
  html: string;
  subjectId?: string;
  chapterId?: string | null;
}

/**
 * Get all articles for a given subject (section), grouped by chapter.
 */
export async function getArticles(section: string): Promise<ArticleMeta[]> {
  const subject = await prisma.subject.findUnique({
    where: { slug: section },
  });
  if (!subject) return [];

  const articles = await prisma.article.findMany({
    where: { subjectId: subject.id },
    include: { chapter: true },
    orderBy: [{ chapter: { order: "asc" } }, { createdAt: "asc" }],
  });

  return articles.map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    category: a.chapter?.title || "General",
    description: a.description || "",
    section,
  }));
}

/**
 * Get a single article by subject slug and article slug.
 */
export async function getArticle(
  section: string,
  slug: string,
): Promise<ArticleDetail | null> {
  const subject = await prisma.subject.findUnique({
    where: { slug: section },
  });
  if (!subject) return null;

  const article = await prisma.article.findUnique({
    where: { subjectId_slug: { subjectId: subject.id, slug } },
    include: { chapter: true },
  });
  if (!article) return null;

  // If HTML is not pre-rendered, render and cache it
  let html = article.html || "";
  if (!html) {
    html = await marked.parse(article.content, { gfm: true, breaks: true });
    await prisma.article.update({
      where: { id: article.id },
      data: { html },
    });
  }

  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    category: article.chapter?.title || "General",
    description: article.description || "",
    section,
    content: article.content,
    html,
    subjectId: article.subjectId,
    chapterId: article.chapterId,
  };
}

/**
 * Get all article slugs for a given subject (for static generation).
 */
export async function getAllArticleSlugs(section: string): Promise<string[]> {
  const subject = await prisma.subject.findUnique({
    where: { slug: section },
  });
  if (!subject) return [];

  const articles = await prisma.article.findMany({
    where: { subjectId: subject.id },
    select: { slug: true },
  });

  return articles.map((a) => a.slug);
}

/**
 * Get all subject slugs (section names).
 */
export async function getAllSections(): Promise<string[]> {
  const subjects = await prisma.subject.findMany({
    select: { slug: true },
    orderBy: { order: "asc" },
  });
  return subjects.map((s) => s.slug);
}

/**
 * Get all subjects with their chapters (for navigation & editor dropdowns).
 */
export async function getSubjectsAndChapters() {
  return prisma.subject.findMany({
    include: {
      chapters: {
        orderBy: { order: "asc" },
      },
      _count: {
        select: { articles: true },
      },
    },
    orderBy: { order: "asc" },
  });
}
