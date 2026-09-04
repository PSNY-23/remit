import React from 'react';
import { getArticles } from '@/lib/content';
import FrontendArticleExplorer from '@/components/FrontendArticleExplorer';

export default async function FrontendTrackView() {
  const articles = await getArticles('frontend');
  return <FrontendArticleExplorer articles={articles} />;
}
