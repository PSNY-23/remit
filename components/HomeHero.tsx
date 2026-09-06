'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      <Badge
        variant="outline"
        className="gap-2 px-3.5 py-1.5 rounded-full border-[var(--notion-border)] bg-[var(--notion-card-bg)] text-xs text-[var(--notion-text-secondary)] mb-6 shadow-xs font-normal"
      >
        <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 animate-pulse" />
        <span>All my notes</span>
      </Badge>

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
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto rounded-xl px-6 py-3 h-auto text-sm font-semibold shadow-sm !no-underline"
          style={{ color: 'var(--notion-bg)', backgroundColor: 'var(--notion-text-primary)' }}
        >
          <Link href="/dsa-list/full">
            <span>Explore 1,001 Problems</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full sm:w-auto rounded-xl px-6 py-3 h-auto border-[var(--notion-border-strong)] bg-[var(--notion-card-bg)] hover:bg-[var(--notion-hover)] text-sm font-semibold text-[var(--notion-text-primary)] !no-underline"
        >
          <Link href="/frontend">
            <span>Frontend Track</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
