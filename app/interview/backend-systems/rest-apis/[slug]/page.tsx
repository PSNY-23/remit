import { notFound } from 'next/navigation';
import ArticleViewer from './ArticleViewer';
import { getArticleBySlug } from '@/lib/articles';

export const dynamic = 'force-dynamic';

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topicPath = 'backend-systems/rest-apis';
  const question = await getArticleBySlug(topicPath, slug);

  if (!question) {
    notFound();
  }

  return <ArticleViewer slug={slug} initialContent={question.content} topicPath={topicPath} />;
}
