'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Brain } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function SidebarTopBrand() {
  const [sidebarEl, setSidebarEl] = useState<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = document.querySelector('aside.nextra-sidebar') as HTMLElement;
    if (el) {
      setSidebarEl(el);
    }
  }, [pathname]);

  if (!sidebarEl) return null;

  return createPortal(
    <div
      style={{
        order: -1,
        height: '48px',
        minHeight: '48px',
        maxHeight: '48px',
        padding: '0 14px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--notion-border)',
        backgroundColor: 'var(--notion-sidebar-bg)',
        width: '100%',
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      <Link
        href="/dsa"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
        }}
      >
        <div
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '5px',
            backgroundColor: 'var(--notion-text-primary)',
            color: 'var(--notion-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Brain size={16} strokeWidth={2.2} />
        </div>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--notion-text-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          Remit
        </span>
      </Link>
    </div>,
    sidebarEl
  );
}
