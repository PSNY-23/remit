'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface HoverPreviewLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: React.ReactNode;
}

interface FullPreviewData {
  title: string;
  slug: string;
  content: string;
  body: string;
  category: string;
}

// Global client-side memory cache
const previewCache: Record<string, FullPreviewData> = {};

export default function HoverPreviewLink({ href, children, className, style, ...props }: HoverPreviewLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<FullPreviewData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; placeAbove: boolean }>({
    top: 0,
    left: 0,
    placeAbove: false,
  });

  const openTimerRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const isInterviewQuestion =
    href &&
    !href.endsWith('/new') &&
    ((href.startsWith('/interview/') && href.split('/').length >= 4) ||
      (href.startsWith('/others/') && href.split('/').length >= 3));

  const calculatePosition = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // If space below is less than 240px and there's more space above, place above
      const placeAbove = spaceBelow < 260 && rect.top > 260;

      const cardWidth = Math.min(660, window.innerWidth - 32);
      let left = rect.left;
      if (left + cardWidth > window.innerWidth - 20) {
        left = window.innerWidth - cardWidth - 20;
      }
      left = Math.max(16, left);

      setCoords({
        top: placeAbove ? rect.top - 8 : rect.bottom + 8,
        left,
        placeAbove,
      });
    }
  };

  const handleMouseEnter = () => {
    if (!isInterviewQuestion || !href) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

    openTimerRef.current = setTimeout(async () => {
      calculatePosition();
      setIsOpen(true);

      if (previewCache[href]) {
        setData(previewCache[href]);
      } else {
        setIsLoading(true);
        try {
          const res = await fetch(`/api/interview/preview?path=${encodeURIComponent(href)}`);
          if (res.ok) {
            const json = await res.json();
            previewCache[href] = json;
            setData(json);
          }
        } catch (err) {
          console.error('Failed to load article preview:', err);
        } finally {
          setIsLoading(false);
        }
      }
    }, 180);
  };

  const handleMouseLeave = () => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  const handlePopupMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handlePopupMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  if (!href) {
    return <a className={className} style={style} {...props}>{children}</a>;
  }

  const isButtonLink = href.endsWith('/new');

  const linkStyle: React.CSSProperties = isButtonLink
    ? (style || {})
    : {
        color: '#2563eb',
        fontWeight: 500,
        textDecoration: 'underline',
        textDecorationColor: 'rgba(37, 99, 235, 0.45)',
        textUnderlineOffset: '3px',
        transition: 'color 0.15s ease, text-decoration-color 0.15s ease',
        cursor: 'pointer',
        ...style,
      };

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <Link
        ref={linkRef}
        href={href}
        className={`interview-article-link ${className || ''}`}
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Link>

      {isOpen && isInterviewQuestion && (
        <div
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
          style={{
            position: 'fixed',
            top: coords.placeAbove ? 'auto' : `${coords.top}px`,
            bottom: coords.placeAbove ? `${window.innerHeight - coords.top}px` : 'auto',
            left: `${coords.left}px`,
            width: '660px',
            maxWidth: 'calc(100vw - 32px)',
            height: 'auto',
            maxHeight: 'min(500px, 78vh)',
            zIndex: 99999,
            backgroundColor: 'var(--nextra-bg, rgba(17, 24, 39, 0.96))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(59, 130, 246, 0.35)',
            borderRadius: '12px',
            boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(59, 130, 246, 0.15)',
            animation: 'fadeInCard 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Sticky Header */}
          <div
            style={{
              padding: '0.7rem 1rem',
              borderBottom: '1px solid rgba(125, 125, 125, 0.2)',
              backgroundColor: 'rgba(125, 125, 125, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  padding: '0.2rem 0.45rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  whiteSpace: 'nowrap',
                }}
              >
                {data?.category || 'INTERVIEW'}
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#94a3b8',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {data?.title}
              </span>
            </div>

            <Link
              href={href}
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#3b82f6',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                textDecoration: 'none',
                padding: '0.25rem 0.55rem',
                borderRadius: '4px',
                backgroundColor: 'rgba(59, 130, 246, 0.12)',
                whiteSpace: 'nowrap',
              }}
            >
              Open Full Page ↗
            </Link>
          </div>

          {/* Dynamic Scrollable Article Body */}
          <div
            className="article-preview-scroll"
            style={{
              flex: '1 1 auto',
              minHeight: 0,
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              padding: '1rem 1.25rem',
              fontSize: '0.92rem',
              lineHeight: 1.65,
              color: 'inherit',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {isLoading && !data ? (
              <div
                style={{
                  padding: '2rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  color: '#94a3b8',
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    border: '2px solid #3b82f6',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 0.6s linear infinite',
                  }}
                />
                Loading complete article...
              </div>
            ) : data ? (
              <div>
                <h2
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    margin: '0 0 0.85rem 0',
                    lineHeight: 1.3,
                    color: 'inherit',
                  }}
                >
                  {data.title}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: formatMarkdown(data.body) }} />
              </div>
            ) : (
              <div style={{ padding: '1rem', color: '#ef4444' }}>Unable to load article content.</div>
            )}
          </div>
        </div>
      )}
    </span>
  );
}

function formatMarkdown(md: string): string {
  if (!md) return '';
  let html = md.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div style="margin: 1rem 0; text-align: center;"><img src="$2" alt="$1" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid rgba(125,125,125,0.25); box-shadow: 0 4px 12px rgba(0,0,0,0.2); display: inline-block;" /><div style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.3rem;">$1</div></div>');

  // Fenced Code Blocks
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre style="background: rgba(0, 0, 0, 0.35); padding: 0.85rem 1rem; border-radius: 8px; font-family: monospace; font-size: 0.84rem; margin: 1rem 0; border: 1px solid rgba(255, 255, 255, 0.08); overflow-x: auto; color: #38bdf8;"><code>${code}</code></pre>`;
  });

  // Inline Code
  html = html.replace(/`([^`]+)`/g, '<code style="background: rgba(125,125,125,0.18); padding: 0.15rem 0.35rem; border-radius: 4px; font-family: monospace; font-size: 0.88em; color: #60a5fa;">$1</code>');

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h4 style="font-size: 1.05rem; font-weight: 700; margin: 1.25rem 0 0.5rem; color: inherit;">$1</h4>');
  html = html.replace(/^## (.*$)/gim, '<h3 style="font-size: 1.25rem; font-weight: 700; margin: 1.5rem 0 0.75rem; border-bottom: 1px solid rgba(125,125,125,0.2); padding-bottom: 0.35rem; color: inherit;">$1</h3>');

  // Tables
  html = html.replace(/\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g, (_, header, rows) => {
    const ths = header.split('|').map((h: string) => h.trim()).filter(Boolean).map((h: string) => `<th style="border: 1px solid rgba(125,125,125,0.25); padding: 0.45rem 0.75rem; background: rgba(125,125,125,0.1); font-size: 0.82rem;">${h}</th>`).join('');
    const trs = rows.trim().split('\n').map((row: string) => {
      const tds = row.split('|').map((td: string) => td.trim()).filter(Boolean).map((td: string) => `<td style="border: 1px solid rgba(125,125,125,0.2); padding: 0.45rem 0.75rem; font-size: 0.82rem;">${td}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');
    return `<div style="overflow-x: auto; margin: 1rem 0;"><table style="width: 100%; border-collapse: collapse; text-align: left;"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  });

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Blockquotes
  html = html.replace(/^&gt;\s+(.*$)/gim, '<blockquote style="border-left: 3px solid #3b82f6; padding: 0.5rem 0.85rem; margin: 1rem 0; background: rgba(59, 130, 246, 0.08); border-radius: 0 4px 4px 0; font-size: 0.88rem;">$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr style="border: 0; border-top: 1px solid rgba(125,125,125,0.2); margin: 1.25rem 0;" />');

  // Line breaks
  html = html.replace(/\n\n/g, '<br /><br />');

  return html;
}
