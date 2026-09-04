"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Folder, FileText, ChevronRight } from "lucide-react";
import { ArticleMeta } from "@/lib/content";

interface Props {
  section: string;
  articles: ArticleMeta[];
}

export default function SectionArticleExplorer({ section, articles }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => set.add(a.category));
    return ["All", ...Array.from(set)];
  }, [articles]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length };
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, [articles]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      return selectedCategory === "All" || a.category === selectedCategory;
    });
  }, [articles, selectedCategory]);

  const grouped = useMemo(() => {
    const map = new Map<string, ArticleMeta[]>();
    filtered.forEach((a) => {
      if (!map.has(a.category)) map.set(a.category, []);
      map.get(a.category)!.push(a);
    });
    return map;
  }, [filtered]);

  return (
    <div className="space-y-6 mt-6">
      {/* Category Filter Blocks */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[var(--notion-hover)] border-[var(--notion-text-primary)] text-[var(--notion-text-primary)] font-semibold shadow-xs"
                  : "bg-[var(--notion-card-bg)] border-[var(--notion-border)] text-[var(--notion-text-secondary)] hover:bg-[var(--notion-hover)] hover:text-[var(--notion-text-primary)] hover:border-[var(--notion-border-strong)]"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[11px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-md font-semibold transition-colors ${
                  isSelected
                    ? "bg-[var(--notion-text-primary)] text-[var(--notion-bg)]"
                    : "bg-[var(--tag-gray-bg)] text-[var(--notion-text-muted)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between text-xs text-[var(--notion-text-muted)] px-1 pt-1 border-t border-[var(--notion-border)]">
        <span>
          Showing {filtered.length} of {articles.length} questions
        </span>
        {selectedCategory !== "All" && (
          <span>Filtered by {selectedCategory}</span>
        )}
      </div>

      {/* Articles Categorized List */}
      <div className="space-y-6">
        {Array.from(grouped.entries()).map(([cat, list]) => (
          <div key={cat} className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--notion-text-secondary)] pb-1 border-b border-[var(--notion-border)]">
              <Folder className="w-3.5 h-3.5" />
              <span>{cat}</span>
              <span className="text-[var(--notion-text-muted)] font-normal">
                ({list.length})
              </span>
            </div>

            <div className="flex flex-col space-y-1.5">
              {list.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${section}/${article.slug}`}
                  className="group flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[var(--notion-border)] bg-[var(--notion-card-bg)] hover:bg-[var(--notion-hover)] hover:border-[var(--notion-border-strong)] transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2 flex-1 overflow-hidden">
                    <FileText className="w-4 h-4 text-[var(--notion-text-muted)] group-hover:text-[var(--notion-text-primary)] transition-colors shrink-0" />
                    <span className="text-sm md:text-base font-medium text-[var(--notion-text-primary)] group-hover:underline truncate block">
                      {article.title}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--notion-text-muted)] group-hover:text-[var(--notion-text-primary)] shrink-0 transition-transform group-hover:translate-x-0.5 ml-2" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
