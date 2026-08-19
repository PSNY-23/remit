import prisma from './prisma';

export interface ArticleData {
  id?: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  topicPath?: string;
  order?: number;
}

/**
 * Fetch all articles for a given topic path (e.g. 'backend-systems/auth-security') directly from the database.
 */
export async function getTopicArticles(topicPath: string): Promise<ArticleData[]> {
  try {
    const articles = await prisma.article.findMany({
      where: { topicPath },
      orderBy: { order: 'asc' },
    });

    return articles.map((a) => ({
      id: a.id,
      title: a.title,
      slug: a.slug,
      category: a.category,
      content: a.content,
      topicPath: a.topicPath,
      order: a.order,
    }));
  } catch (error) {
    console.error(`[getTopicArticles] Database fetch failed for ${topicPath}:`, error);
    return [];
  }
}

/**
 * Fetch a single article by topicPath and slug directly from the database.
 */
export async function getArticleBySlug(topicPath: string, slug: string): Promise<ArticleData | null> {
  try {
    const article = await prisma.article.findUnique({
      where: {
        topicPath_slug: {
          topicPath,
          slug,
        },
      },
    });

    if (article) {
      return {
        id: article.id,
        title: article.title,
        slug: article.slug,
        category: article.category,
        content: article.content,
        topicPath: article.topicPath,
        order: article.order,
      };
    }
    return null;
  } catch (error) {
    console.error(`[getArticleBySlug] Database fetch failed for ${topicPath}/${slug}:`, error);
    return null;
  }
}
