'use client';

import React from 'react';
import Link from 'next/link';

interface HoverPreviewLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: React.ReactNode;
}

export default function HoverPreviewLink({ href, children, className, style, ...props }: HoverPreviewLinkProps) {
  if (!href) {
    return <a className={className} style={style} {...props}>{children}</a>;
  }

  return (
    <Link
      href={href}
      className={`interview-article-link ${className || ''}`}
      style={{
        color: 'var(--notion-text-primary)',
        fontWeight: 500,
        textDecoration: 'none',
        ...style,
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
