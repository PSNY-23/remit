import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default function HandwrittenTrackView() {
  const articles = getArticles('handwritten');
  return <SectionArticleExplorer section="handwritten" articles={articles} />;
}
