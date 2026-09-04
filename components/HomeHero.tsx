'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeHero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Pankaj's Notebook";

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
    <div className="w-full max-w-2xl mx-auto min-h-[62vh] flex flex-col items-center justify-center text-center px-2 sm:px-4 py-8 select-none">
      {/* Subtle Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--notion-border)] bg-[var(--notion-card-bg)] text-xs text-[var(--notion-text-secondary)] mb-6 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 animate-pulse" />
        <span>All my notes</span>
      </div>

      {/* Animated Big Title with harmonious text and cursor sizing */}
      <h1
        className="w-full flex items-center justify-center font-bold tracking-tight text-[var(--notion-text-primary)] min-h-[1.25em] leading-none select-none my-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        style={{
          fontWeight: 700,
          fontFamily:
            '"Cabin Sketch", "Kalam", "Dekko", "Yatra One", cursive, sans-serif',
        }}
      >
        <span>{displayText}</span>
        <span className="inline-block w-[3px] sm:w-[5px] md:w-[8px] h-[0.85em] bg-[var(--notion-text-primary)] ml-1.5 sm:ml-2.5 animate-pulse align-middle" />
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-[var(--notion-text-secondary)] max-w-xl font-normal leading-relaxed">
        A minimalist repository for Algorithms, Frontend Architecture, Distributed Systems &amp; Interview Mastery.
      </p>

      {/* Action Buttons with High-Contrast Colors */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
        <Link
          href="/dsa-list/full"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-sm font-semibold hover:opacity-90 transition-all shadow-sm !no-underline"
          style={{ color: 'var(--notion-bg)', backgroundColor: 'var(--notion-text-primary)' }}
        >
          <span>Explore 1,001 Problems</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/frontend"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--notion-border-strong)] bg-[var(--notion-card-bg)] hover:bg-[var(--notion-hover)] text-sm font-semibold text-[var(--notion-text-primary)] transition-all !no-underline"
        >
          <span>Frontend Track</span>
        </Link>
      </div>
    </div>
  );
}
