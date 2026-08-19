import React from 'react';
import Link from 'next/link';
import { getTopicArticles } from '@/lib/articles';
import HoverPreviewLink from './HoverPreviewLink';

export default async function TopicQuestionList({
  topicPath,
  topicTitle,
}: {
  topicPath: string;
  topicTitle?: string;
}) {
  const articles = await getTopicArticles(topicPath);
  const displayTitle = topicTitle || topicPath.split('/').pop() || 'Topic';

  // Group by category
  const categories = Array.from(
    new Set(articles.map((a) => a.category || displayTitle))
  );

  return (
    <div style={{ marginTop: '1.25rem' }}>
      <div style={{ margin: '1.25rem 0' }}>
        <Link
          href={`/interview/${topicPath}/new`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
          }}
        >
          ➕ Add New Question / Article
        </Link>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid rgba(125,125,125,0.2)', margin: '1.5rem 0' }} />

      {categories.length === 0 ? (
        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
          No questions yet in this topic. Click above to add the first one!
        </p>
      ) : (
        categories.map((cat) => {
          const catArticles = articles.filter(
            (a) => (a.category || displayTitle) === cat
          );

          return (
            <div key={cat} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '1.5rem 0 0.75rem' }}>
                {cat}
              </h2>
              <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {catArticles.map((a) => (
                  <li key={a.slug || a.title} style={{ fontSize: '0.98rem', lineHeight: '1.6' }}>
                    <HoverPreviewLink href={`/interview/${topicPath}/${a.slug}`}>
                      {a.title}
                    </HoverPreviewLink>
                  </li>
                ))}
              </ol>
            </div>
          );
        })
      )}
    </div>
  );
}
