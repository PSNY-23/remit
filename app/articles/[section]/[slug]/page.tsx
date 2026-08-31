import { notFound } from 'next/navigation';
import { getArticle, getAllArticleSlugs } from '@/lib/content';
import ArticleViewer from '@/components/ArticleViewer';

interface Props {
  params: Promise<{ section: string; slug: string }>;
}

export async function generateStaticParams() {
  const frontendSlugs = getAllArticleSlugs('frontend').map(slug => ({
    section: 'frontend',
    slug,
  }));
  return frontendSlugs;
}

export default async function GenericArticlePage({ params }: Props) {
  const { section, slug } = await params;
  const article = await getArticle(section, slug);

  if (!article) {
    notFound();
  }

  const capitalizedSection = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <ArticleViewer
      article={article}
      backHref={`/${section}`}
      backLabel={`Back to ${capitalizedSection}`}
    />
  );
}
