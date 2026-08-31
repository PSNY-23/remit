'use client';

import React, { useState, useEffect } from 'react';
import { PanelLeft, PanelLeftClose } from 'lucide-react';
import { setMenu, useMenu } from 'nextra-theme-docs';

export default function SidebarToggleButton() {
  const isMobileMenuOpen = useMenu();
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && isDesktopCollapsed) {
        document.documentElement.classList.remove('sidebar-collapsed');
        setIsDesktopCollapsed(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isDesktopCollapsed]);

  const toggleSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof window === 'undefined') return;

    if (window.innerWidth < 768) {
      setMenu((prev: boolean) => !prev);
    } else {
      setIsDesktopCollapsed((prev) => {
        const next = !prev;
        document.documentElement.classList.toggle('sidebar-collapsed', next);
        return next;
      });
    }
  };

  if (!mounted) return null;

  const leftPosition = isMobile
    ? '14px'
    : isDesktopCollapsed
    ? '16px'
    : 'calc(var(--sidebar-width, 260px) + 16px)';

  return (
    <div
      style={{
        position: 'fixed',
        top: '9px',
        left: leftPosition,
        zIndex: 9999,
        transition: 'left 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <button
        onClick={toggleSidebar}
        title={isDesktopCollapsed || (!isMobile && isMobileMenuOpen) ? 'Open sidebar' : 'Close sidebar'}
        aria-label="Toggle Sidebar"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '30px',
          height: '30px',
          borderRadius: '6px',
          border: '1px solid var(--notion-border)',
          backgroundColor: 'var(--notion-card-bg)',
          color: 'var(--notion-text-primary)',
          cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.12s ease-in-out',
        }}
      >
        {isDesktopCollapsed || isMobileMenuOpen ? (
          <PanelLeft size={16} strokeWidth={2} style={{ color: 'var(--notion-text-primary)' }} />
        ) : (
          <PanelLeftClose size={16} strokeWidth={2} style={{ color: 'var(--notion-text-primary)' }} />
        )}
      </button>
    </div>
  );
}
