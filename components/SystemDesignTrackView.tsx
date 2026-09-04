import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default async function SystemDesignTrackView() {
  const articles = await getArticles('system-design');
  return <SectionArticleExplorer section="system-design" articles={articles} />;
}
