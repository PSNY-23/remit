import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default async function BackendTrackView() {
  const articles = await getArticles('backend');
  return <SectionArticleExplorer section="backend" articles={articles} />;
}
