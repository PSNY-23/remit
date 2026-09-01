import { notFound } from 'next/navigation';
import { getArticle, getAllArticleSlugs } from '@/lib/content';
import ArticleViewer from '@/components/ArticleViewer';

interface Props {
  params: Promise<{ section: string; slug: string }>;
}

export async function generateStaticParams() {
  const sections = ['frontend', 'backend', 'databases', 'system-design', 'others', 'dsa'];
  const params: { section: string; slug: string }[] = [];
  for (const section of sections) {
    const slugs = getAllArticleSlugs(section);
    for (const slug of slugs) {
      params.push({ section, slug });
    }
  }
  return params;
}

export default async function GenericArticlePage({ params }: Props) {
  const { section, slug } = await params;
  const article = await getArticle(section, slug);

  if (!article) {
    notFound();
  }

  const formattedSection = section
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <ArticleViewer
      article={article}
      backHref={`/${section}`}
      backLabel={`Back to ${formattedSection}`}
    />
  );
}
