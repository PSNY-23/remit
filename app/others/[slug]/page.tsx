import { notFound } from 'next/navigation';
import ArticleViewer from './ArticleViewer';
import { getArticleBySlug } from '@/lib/articles';

export const dynamic = 'force-dynamic';

export default async function OtherArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topicPath = 'others';
  const article = await getArticleBySlug(topicPath, slug);

  if (!article) {
    notFound();
  }

  return <ArticleViewer slug={slug} initialContent={article.content} topicPath={topicPath} />;
}
