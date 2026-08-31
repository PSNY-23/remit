'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '5px',
          border: '1px solid var(--notion-border)',
          backgroundColor: 'var(--notion-card-bg)',
        }}
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle Theme"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '28px',
        height: '28px',
        borderRadius: '5px',
        border: '1px solid var(--notion-border)',
        backgroundColor: 'var(--notion-card-bg)',
        color: 'var(--notion-text-primary)',
        cursor: 'pointer',
        transition: 'all 0.12s ease-in-out',
      }}
    >
      {isDark ? (
        <Sun size={15} strokeWidth={2} style={{ color: 'var(--notion-text-primary)' }} />
      ) : (
        <Moon size={15} strokeWidth={2} style={{ color: 'var(--notion-text-primary)' }} />
      )}
    </button>
  );
}
