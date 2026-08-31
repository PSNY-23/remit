'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeHero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to Remit';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[68vh] flex flex-col items-center justify-center text-center px-4 select-none">
      {/* Subtle Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--notion-border)] bg-[var(--notion-card-bg)] text-xs text-[var(--notion-text-secondary)] mb-6 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 animate-pulse" />
        <span>All my notes</span>
      </div>

      {/* Animated Big Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--notion-text-primary)] min-h-[1.25em] flex items-center justify-center">
        <span>{displayText}</span>
        <span className="inline-block w-[3px] h-[0.9em] bg-[var(--notion-text-primary)] ml-1 animate-pulse" />
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-[var(--notion-text-secondary)] max-w-xl font-normal leading-relaxed">
        A minimalist repository for Algorithms, Frontend Architecture, Distributed Systems & Interview Mastery.
      </p>

      {/* Action Buttons with High-Contrast Colors */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
        <Link
          href="/dsa-list/full"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-sm font-semibold hover:opacity-90 transition-all shadow-sm !no-underline"
          style={{ color: 'var(--notion-bg)', backgroundColor: 'var(--notion-text-primary)' }}
        >
          <span>Explore 1,001 Problems</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/frontend"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--notion-border-strong)] bg-[var(--notion-card-bg)] hover:bg-[var(--notion-hover)] text-sm font-semibold text-[var(--notion-text-primary)] transition-all !no-underline"
        >
          <span>Frontend Track</span>
        </Link>
      </div>
    </div>
  );
}
