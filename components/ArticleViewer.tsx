"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleDetail } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { renderMermaidDiagrams } from "@/lib/mermaid";

interface Props {
  article: ArticleDetail;
  backHref: string;
  backLabel: string;
}

export default function ArticleViewer({ article, backHref, backLabel }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      renderMermaidDiagrams(containerRef.current);
    }
  }, [article.html]);

  return (
    <div
      ref={containerRef}
      className="article-viewer-container w-full max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-8 box-border"
    >
      {/* Top Back Navigation */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="h-7 px-2 text-xs text-[var(--notion-text-secondary)] hover:text-[var(--notion-text-primary)] -ml-2"
        >
          <Link href={backHref} className="gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{backLabel}</span>
          </Link>
        </Button>
      </div>

      {/* Article Content Rendered */}
      <div
        className="prose prose-neutral dark:prose-invert max-w-none text-[var(--notion-text-body)] overflow-hidden"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />

      {/* Footer Back Navigation */}
      <div className="pt-8 mt-12 border-t border-[var(--notion-border)]">
        <Button variant="outline" asChild className="gap-2">
          <Link href={backHref}>
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
