import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default async function HandwrittenTrackView() {
  const articles = await getArticles('handwritten');
  return <SectionArticleExplorer section="handwritten" articles={articles} />;
}
