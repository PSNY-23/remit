import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default function DatabasesTrackView() {
  const articles = getArticles('databases');
  return <SectionArticleExplorer section="databases" articles={articles} />;
}
