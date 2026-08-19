import questions from '../questions-data.json';
import { notFound } from 'next/navigation';
import ArticleViewer from './ArticleViewer';

export function generateStaticParams() {
  return questions.map((q: any) => ({
    slug: q.slug,
  }));
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const question = questions.find((q: any) => q.slug === slug);

  if (!question) {
    notFound();
  }

  return <ArticleViewer slug={slug} initialContent={question.content} topicPath="devops/queues-events" />;
}
