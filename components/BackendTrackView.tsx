import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default function BackendTrackView() {
  const articles = getArticles('backend');
  return <SectionArticleExplorer section="backend" articles={articles} />;
}
