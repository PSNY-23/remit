import React from 'react';
import { getArticles } from '@/lib/content';
import FrontendArticleExplorer from '@/components/FrontendArticleExplorer';

export default function FrontendTrackView() {
  const articles = getArticles('frontend');
  return <FrontendArticleExplorer articles={articles} />;
}
