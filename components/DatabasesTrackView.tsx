import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default async function DatabasesTrackView() {
  const articles = await getArticles('databases');
  return <SectionArticleExplorer section="databases" articles={articles} />;
}
