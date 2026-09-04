import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleDetail } from "@/lib/content";

interface Props {
  article: ArticleDetail;
  backHref: string;
  backLabel: string;
}

export default function ArticleViewer({ article, backHref, backLabel }: Props) {
  return (
    <div className="article-viewer-container w-full max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-8 box-border">
      {/* Top Back Navigation */}
      <div>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-xs text-(--notion-text-secondary) hover:text-(--notion-text-primary) transition-colors mb-2 no-underline! font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{backLabel}</span>
        </Link>
      </div>

      {/* Article Content Rendered */}
      <div
        className="prose prose-neutral dark:prose-invert max-w-none text-[var(--notion-text-body)] overflow-hidden"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />

      {/* Footer Back Navigation */}
      <div className="pt-8 mt-12 border-t border-[var(--notion-border)]">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--notion-border)] bg-[var(--notion-card-bg)] hover:bg-[var(--notion-hover)] text-sm font-medium text-[var(--notion-text-primary)] transition-all !no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{backLabel}</span>
        </Link>
      </div>
    </div>
  );
}
