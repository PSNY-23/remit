import React from 'react';
import { getArticles } from '@/lib/content';
import SectionArticleExplorer from '@/components/SectionArticleExplorer';

export default function SystemDesignTrackView() {
  const articles = getArticles('system-design');
  return <SectionArticleExplorer section="system-design" articles={articles} />;
}
