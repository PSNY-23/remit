'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  MASTER_CHAPTERS,
  MASTER_PROBLEMS,
  ProblemItem,
  ChapterGroup,
  TopicGroup,
} from '@/data/masterProblemData';
import {
  Search,
  X,
  Star,
  Copy,
  Check,
  ExternalLink,
  Shuffle,
  Folder,
  Table as TableIcon,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  Globe,
  Table2,
  ArrowRightLeft,
  Binary,
  GitFork,
  GitBranch,
  Layers,
  Network,
  Target,
  Cpu,
  FolderTree,
  Code2,
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PlatformFilter = 'All' | 'LeetCode' | 'GeeksforGeeks' | 'SPOJ' | 'HackerEarth';
type StatusFilter = 'All' | 'Solved' | 'Unsolved' | 'Starred';
type ViewMode = 'accordion' | 'table' | 'cards';

const CHAPTER_ICONS: Record<number, React.ReactNode> = {
  1: <Table2 className="w-4 h-4" />,
  2: <ArrowRightLeft className="w-4 h-4" />,
  3: <Binary className="w-4 h-4" />,
  4: <GitFork className="w-4 h-4" />,
  5: <Search className="w-4 h-4" />,
  6: <GitBranch className="w-4 h-4" />,
  7: <Layers className="w-4 h-4" />,
  8: <Network className="w-4 h-4" />,
  9: <Target className="w-4 h-4" />,
  10: <Cpu className="w-4 h-4" />,
  11: <FolderTree className="w-4 h-4" />,
  12: <Code2 className="w-4 h-4" />,
};

export default function MasterProblemExplorer() {
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('All');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('accordion');

  // Expanded chapters & topics state
  const [openChapters, setOpenChapters] = useState<Record<number, boolean>>({ 1: true });
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});

  // LocalStorage state for Solved & Starred problems
  const [solvedSet, setSolvedSet] = useState<Set<number>>(new Set());
  const [starredSet, setStarredSet] = useState<Set<number>>(new Set());
  const [isClient, setIsClient] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    setIsClient(true);
    try {
      const savedSolved = localStorage.getItem('dsa_master_1001_solved');
      if (savedSolved) {
        setSolvedSet(new Set(JSON.parse(savedSolved)));
      }
      const savedStarred = localStorage.getItem('dsa_master_1001_starred');
      if (savedStarred) {
        setStarredSet(new Set(JSON.parse(savedStarred)));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Save to LocalStorage
  const toggleSolved = useCallback((id: number) => {
    setSolvedSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('dsa_master_1001_solved', JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }, []);

  const toggleStarred = useCallback((id: number) => {
    setStarredSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('dsa_master_1001_starred', JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }, []);

  const copyProblemLink = useCallback((prob: ProblemItem) => {
    navigator.clipboard.writeText(prob.url);
    setCopiedId(prob.id);
    setTimeout(() => setCopiedId(null), 1800);
  }, []);

  const toggleChapter = useCallback((chapterId: number) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  }, []);

  const toggleTopic = useCallback((topicId: string) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topicId]: prev[topicId] === undefined ? false : !prev[topicId],
    }));
  }, []);

  const expandAll = useCallback(() => {
    const allChaps: Record<number, boolean> = {};
    const allTops: Record<string, boolean> = {};
    MASTER_CHAPTERS.forEach((c) => {
      allChaps[c.id] = true;
      c.topics.forEach((t) => {
        allTops[t.id] = true;
      });
    });
    setOpenChapters(allChaps);
    setOpenTopics(allTops);
  }, []);

  const collapseAll = useCallback(() => {
    setOpenChapters({});
    setOpenTopics({});
  }, []);

  // Filter problems
  const filteredProblems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MASTER_PROBLEMS.filter((prob) => {
      // Chapter filter
      if (selectedChapterId !== 'all' && prob.chapterId !== selectedChapterId) {
        return false;
      }

      // Platform filter
      if (platformFilter !== 'All' && prob.platform !== platformFilter) {
        return false;
      }

      // Status filter
      const isSolved = solvedSet.has(prob.id);
      const isStarred = starredSet.has(prob.id);
      if (statusFilter === 'Solved' && !isSolved) return false;
      if (statusFilter === 'Unsolved' && isSolved) return false;
      if (statusFilter === 'Starred' && !isStarred) return false;

      // Search query
      if (query) {
        const matchesTitle = prob.title.toLowerCase().includes(query);
        const matchesId = String(prob.id) === query;
        const matchesTopic = prob.topicTitle.toLowerCase().includes(query);
        const matchesChapter = prob.chapterTitle.toLowerCase().includes(query);
        const matchesPlatform = prob.platform.toLowerCase().includes(query);
        return matchesTitle || matchesId || matchesTopic || matchesChapter || matchesPlatform;
      }

      return true;
    });
  }, [selectedChapterId, platformFilter, statusFilter, searchQuery, solvedSet, starredSet]);

  // Group filtered problems for Accordion view
  const groupedData = useMemo(() => {
    const problemMap = new Map<number, ProblemItem>();
    filteredProblems.forEach((p) => problemMap.set(p.id, p));

    return MASTER_CHAPTERS.map((chap) => {
      if (selectedChapterId !== 'all' && chap.id !== selectedChapterId) {
        return null;
      }

      const matchingTopics = chap.topics
        .map((top) => {
          const matchingProbs = top.problems.filter((p) => problemMap.has(p.id));
          if (matchingProbs.length === 0 && (searchQuery || platformFilter !== 'All' || statusFilter !== 'All')) {
            return null;
          }
          return {
            ...top,
            problems: matchingProbs,
          };
        })
        .filter(Boolean) as TopicGroup[];

      const totalMatchingProbs = matchingTopics.reduce((acc, t) => acc + t.problems.length, 0);

      if (totalMatchingProbs === 0 && (searchQuery || platformFilter !== 'All' || statusFilter !== 'All')) {
        return null;
      }

      return {
        ...chap,
        topics: matchingTopics,
        totalMatchingProbs,
      };
    }).filter(Boolean) as (ChapterGroup & { totalMatchingProbs: number })[];
  }, [filteredProblems, selectedChapterId, searchQuery, platformFilter, statusFilter]);

  // Stats calculation
  const totalCount = MASTER_PROBLEMS.length;
  const solvedCount = solvedSet.size;
  const starredCount = starredSet.size;
  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  // Chapter-wise solved stats
  const chapterStats = useMemo(() => {
    const stats: Record<number, { solved: number; total: number }> = {};
    MASTER_CHAPTERS.forEach((c) => {
      const allProbs = c.topics.flatMap((t) => t.problems);
      const solved = allProbs.filter((p) => solvedSet.has(p.id)).length;
      stats[c.id] = { solved, total: allProbs.length };
    });
    return stats;
  }, [solvedSet]);

  // Pick random unsolved
  const pickRandomUnsolved = () => {
    const unsolvedList = MASTER_PROBLEMS.filter((p) => !solvedSet.has(p.id));
    if (unsolvedList.length === 0) {
      alert('All 1,001 problems marked as solved!');
      return;
    }
    const rand = unsolvedList[Math.floor(Math.random() * unsolvedList.length)];
    setSelectedChapterId(rand.chapterId);
    setSearchQuery(rand.title);
    setOpenChapters((prev) => ({ ...prev, [rand.chapterId]: true }));
    setOpenTopics((prev) => ({ ...prev, [rand.topicId]: true }));
  };

  return (
    <div className="not-prose my-8 font-sans text-[var(--notion-text-primary)]">
      {/* STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl p-4 shadow-2xs flex flex-col justify-between">
          <span className="text-xs uppercase font-medium tracking-wider text-[var(--notion-text-secondary)]">
            Total Problems
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl md:text-3xl font-bold text-[var(--notion-text-primary)]">1,001</span>
            <span className="text-xs md:text-sm text-[var(--notion-text-muted)] font-medium">12 Chapters</span>
          </div>
        </div>

        <div className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl p-4 shadow-2xs flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase font-medium tracking-wider text-[var(--notion-text-secondary)]">
              Solved Progress
            </span>
            <span className="text-sm font-semibold text-[var(--notion-text-primary)]">{progressPercent}%</span>
          </div>
          <div className="mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-bold text-[var(--notion-text-primary)]">
                {isClient ? solvedCount : 0}
              </span>
              <span className="text-xs md:text-sm text-[var(--notion-text-muted)]">/ 1,001</span>
            </div>
            <div className="w-full bg-[var(--notion-divider)] h-2 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[var(--notion-text-primary)] h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl p-4 shadow-2xs flex flex-col justify-between">
          <span className="text-xs uppercase font-medium tracking-wider text-[var(--notion-text-secondary)]">
            Bookmarked
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl md:text-3xl font-bold text-[var(--notion-text-primary)]">
              {isClient ? starredCount : 0}
            </span>
            <span className="text-xs md:text-sm text-[var(--notion-text-muted)]">problems</span>
          </div>
        </div>

        <div className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl p-4 shadow-2xs flex flex-col justify-between">
          <span className="text-xs uppercase font-medium tracking-wider text-[var(--notion-text-secondary)]">
            Quick Practice
          </span>
          <button
            onClick={pickRandomUnsolved}
            className="mt-2 w-full py-2 px-3 bg-[var(--notion-text-primary)] text-[var(--notion-bg)] hover:opacity-90 font-medium text-xs md:text-sm rounded-lg transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Shuffle className="w-4 h-4" />
            <span>Pick Random</span>
          </button>
        </div>
      </div>

      {/* CHAPTER SELECTOR TABS */}
      <div className="mb-6 bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl p-3.5 shadow-2xs">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--notion-text-secondary)]">
              Chapter:
            </span>
            {selectedChapterId !== 'all' && (
              <button
                onClick={() => setSelectedChapterId('all')}
                className="text-xs md:text-sm font-medium text-[var(--notion-text-primary)] hover:underline cursor-pointer"
              >
                (View All)
              </button>
            )}
          </div>
          <span className="text-xs md:text-sm text-[var(--notion-text-muted)]">
            {filteredProblems.length} problem{filteredProblems.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto pb-1.5">
          <button
            onClick={() => setSelectedChapterId('all')}
            className={`flex-shrink-0 px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer flex items-center gap-2 border ${
              selectedChapterId === 'all'
                ? 'bg-[var(--notion-text-primary)] text-[var(--notion-bg)] border-[var(--notion-text-primary)]'
                : 'bg-[var(--tag-gray-bg)] text-[var(--notion-text-secondary)] border-transparent hover:bg-[var(--notion-hover)]'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>All Chapters (1,001)</span>
          </button>

          {MASTER_CHAPTERS.map((ch) => {
            const isSelected = selectedChapterId === ch.id;
            const stats = chapterStats[ch.id] || { solved: 0, total: ch.expectedCount };

            return (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChapterId(ch.id);
                  setOpenChapters((prev) => ({ ...prev, [ch.id]: true }));
                }}
                className={`flex-shrink-0 px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[var(--notion-text-primary)] text-[var(--notion-bg)] border-[var(--notion-text-primary)]'
                    : 'bg-[var(--tag-gray-bg)] text-[var(--notion-text-secondary)] border-transparent hover:bg-[var(--notion-hover)]'
                }`}
              >
                {CHAPTER_ICONS[ch.id] || <Folder className="w-4 h-4" />}
                <span className="truncate max-w-[140px]">{ch.title.split('&')[0]}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                    isSelected
                      ? 'bg-[var(--notion-bg)] text-[var(--notion-text-primary)]'
                      : 'bg-[var(--notion-hover)] text-[var(--notion-text-secondary)]'
                  }`}
                >
                  {stats.solved > 0 ? `${stats.solved}/` : ''}
                  {stats.total}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SEARCH & FILTER TOOLBAR */}
      <div className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl p-3.5 mb-6 shadow-2xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--notion-text-muted)] z-10" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problems by title, topic, platform, or #..."
            className="w-full pl-10 pr-8 h-9 bg-[var(--notion-callout-bg)] border border-[var(--notion-border)] text-sm text-[var(--notion-text-primary)] placeholder-[var(--notion-text-muted)] focus-visible:ring-1 focus-visible:ring-[var(--notion-border-strong)]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] cursor-pointer p-1 z-10"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Selectors & View Toggle */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Platform Selector */}
          <Select
            value={platformFilter}
            onValueChange={(val) => setPlatformFilter(val as PlatformFilter)}
          >
            <SelectTrigger className="w-[140px] h-9 text-xs md:text-sm bg-[var(--notion-callout-bg)] border-[var(--notion-border)]">
              <SelectValue placeholder="All Platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Platforms</SelectItem>
              <SelectItem value="LeetCode">LeetCode</SelectItem>
              <SelectItem value="GeeksforGeeks">GeeksforGeeks</SelectItem>
              <SelectItem value="SPOJ">SPOJ</SelectItem>
              <SelectItem value="HackerEarth">HackerEarth</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Selector */}
          <Select
            value={statusFilter}
            onValueChange={(val) => setStatusFilter(val as StatusFilter)}
          >
            <SelectTrigger className="w-[130px] h-9 text-xs md:text-sm bg-[var(--notion-callout-bg)] border-[var(--notion-border)]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Status</SelectItem>
              <SelectItem value="Unsolved">Unsolved Only</SelectItem>
              <SelectItem value="Solved">Solved Only</SelectItem>
              <SelectItem value="Starred">Starred Only</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode Toggle */}
          <div className="flex bg-[var(--tag-gray-bg)] p-0.5 rounded-lg border border-[var(--notion-border)]">
            <button
              onClick={() => setViewMode('accordion')}
              title="Topics View"
              className={`px-2.5 py-1.5 rounded-md text-xs md:text-sm font-medium transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'accordion'
                  ? 'bg-[var(--notion-card-bg)] text-[var(--notion-text-primary)] shadow-2xs font-semibold'
                  : 'text-[var(--notion-text-secondary)] hover:text-[var(--notion-text-primary)]'
              }`}
            >
              <Folder className="w-4 h-4" />
              <span>Topics</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              title="Table View"
              className={`px-2.5 py-1.5 rounded-md text-xs md:text-sm font-medium transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'table'
                  ? 'bg-[var(--notion-card-bg)] text-[var(--notion-text-primary)] shadow-2xs font-semibold'
                  : 'text-[var(--notion-text-secondary)] hover:text-[var(--notion-text-primary)]'
              }`}
            >
              <TableIcon className="w-4 h-4" />
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              title="Cards Grid View"
              className={`px-2.5 py-1.5 rounded-md text-xs md:text-sm font-medium transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'cards'
                  ? 'bg-[var(--notion-card-bg)] text-[var(--notion-text-primary)] shadow-2xs font-semibold'
                  : 'text-[var(--notion-text-secondary)] hover:text-[var(--notion-text-primary)]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Cards</span>
            </button>
          </div>

          {/* Expand/Collapse All */}
          {viewMode === 'accordion' && (
            <div className="flex gap-1.5 text-xs md:text-sm text-[var(--notion-text-secondary)]">
              <button
                onClick={expandAll}
                className="px-2 py-1 font-medium hover:text-[var(--notion-text-primary)] cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-2 py-1 font-medium hover:text-[var(--notion-text-primary)] cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* PROBLEM LIST DISPLAY */}
      {filteredProblems.length === 0 ? (
        <div className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl p-12 text-center my-6">
          <Search className="w-8 h-8 mx-auto mb-3 text-[var(--notion-text-muted)]" />
          <h3 className="text-base font-semibold text-[var(--notion-text-primary)] mb-1">No Problems Found</h3>
          <p className="text-sm text-[var(--notion-text-secondary)] max-w-md mx-auto mb-4">
            No problems match your current search and filter combination.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setPlatformFilter('All');
              setStatusFilter('All');
              setSelectedChapterId('all');
            }}
            className="px-4 py-2 bg-[var(--notion-text-primary)] text-[var(--notion-bg)] rounded-lg text-sm font-medium hover:opacity-90 transition cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'accordion' ? (
        /* ACCORDION PATTERN VIEW - 100% SINGLE COLUMN */
        <div className="space-y-4">
          {groupedData.map((chap) => {
            const isOpen = openChapters[chap.id] ?? false;
            const stats = chapterStats[chap.id] || { solved: 0, total: chap.expectedCount };
            const chapProgress = stats.total > 0 ? Math.round((stats.solved / stats.total) * 100) : 0;

            return (
              <div
                key={chap.id}
                className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl overflow-hidden transition"
              >
                {/* Chapter Header */}
                <div
                  onClick={() => toggleChapter(chap.id)}
                  className="flex items-center justify-between p-4 cursor-pointer select-none bg-[var(--notion-callout-bg)] hover:bg-[var(--notion-hover)] transition border-b border-[var(--notion-border)]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="p-2 bg-[var(--notion-card-bg)] rounded-lg border border-[var(--notion-border)] text-[var(--notion-text-primary)]">
                      {CHAPTER_ICONS[chap.id] || <Folder className="w-5 h-5" />}
                    </span>
                    <div>
                      <h2 className="text-sm md:text-base font-bold text-[var(--notion-text-primary)] flex items-center gap-2">
                        <span>Chapter {chap.id}: {chap.title}</span>
                      </h2>
                      <div className="text-xs md:text-sm text-[var(--notion-text-secondary)] mt-0.5 flex items-center gap-2 font-normal">
                        <span>{chap.topics.length} Patterns</span>
                        <span>•</span>
                        <span>{chap.totalMatchingProbs} Problems</span>
                        {stats.solved > 0 && (
                          <>
                            <span>•</span>
                            <span className="font-semibold text-[var(--notion-text-primary)]">
                              {stats.solved}/{stats.total} Solved ({chapProgress}%)
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="hidden sm:block w-24 bg-[var(--notion-divider)] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[var(--notion-text-primary)] h-full rounded-full transition-all duration-300"
                        style={{ width: `${chapProgress}%` }}
                      />
                    </div>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-[var(--notion-text-muted)]" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-[var(--notion-text-muted)]" />
                    )}
                  </div>
                </div>

                {/* Chapter Content / Topics */}
                {isOpen && (
                  <div className="p-4 divide-y divide-[var(--notion-border)]">
                    {chap.topics.map((topic) => {
                      const isTopicOpen = openTopics[topic.id] !== false;
                      const topicSolved = topic.problems.filter((p) => solvedSet.has(p.id)).length;

                      return (
                        <div key={topic.id} className="py-3.5 first:pt-1 last:pb-1">
                          {/* Topic Subheader */}
                          <div
                            onClick={() => toggleTopic(topic.id)}
                            className="flex items-center justify-between py-1.5 px-2 rounded-lg cursor-pointer hover:bg-[var(--notion-hover)] transition mb-2"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-xs md:text-sm font-mono font-medium text-[var(--notion-text-muted)]">
                                #{topic.id}
                              </span>
                              <h3 className="text-sm md:text-base font-semibold text-[var(--notion-text-primary)]">
                                {topic.title}
                              </h3>
                              <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--tag-gray-bg)] text-[var(--notion-text-secondary)] font-medium">
                                {topic.problems.length}
                              </span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              {topicSolved > 0 && (
                                <span className="text-xs md:text-sm font-medium text-[var(--notion-text-secondary)]">
                                  {topicSolved}/{topic.problems.length}
                                </span>
                              )}
                              {isTopicOpen ? (
                                <ChevronDown className="w-4 h-4 text-[var(--notion-text-muted)]" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-[var(--notion-text-muted)]" />
                              )}
                            </div>
                          </div>

                          {/* Problem Rows inside Topic - 100% SINGLE COLUMN */}
                          {isTopicOpen && (
                            <div className="flex flex-col space-y-2 pl-2">
                              {topic.problems.map((prob) => {
                                const isSolved = solvedSet.has(prob.id);
                                const isStarred = starredSet.has(prob.id);

                                return (
                                  <div
                                    key={prob.id}
                                    className={`group flex items-center justify-between p-3 rounded-lg border transition duration-150 ${
                                      isSolved
                                        ? 'bg-[var(--notion-callout-bg)] border-[var(--notion-border)] opacity-80'
                                        : 'bg-[var(--notion-card-bg)] border-[var(--notion-border)] hover:border-[var(--notion-border-strong)]'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3 min-w-0 flex-1 mr-3">
                                      <Checkbox
                                        checked={isSolved}
                                        onCheckedChange={() => toggleSolved(prob.id)}
                                        title={isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}
                                        className="flex-shrink-0"
                                      />

                                      <span className="text-xs md:text-sm font-mono text-[var(--notion-text-muted)] flex-shrink-0 w-8">
                                        #{prob.id}
                                      </span>

                                      <a
                                        href={prob.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-sm md:text-base font-medium hover:underline truncate flex-1 ${
                                          isSolved
                                            ? 'text-[var(--notion-text-muted)] line-through'
                                            : 'text-[var(--notion-text-primary)]'
                                        }`}
                                        title={prob.title}
                                      >
                                        {prob.title}
                                      </a>
                                    </div>

                                    <div className="flex items-center gap-2 flex-shrink-0">
                                      <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--tag-gray-bg)] text-[var(--tag-gray-text)] border border-[var(--notion-border)] font-medium">
                                        {prob.platform === 'GeeksforGeeks' ? 'GFG' : prob.platform}
                                      </span>

                                      <button
                                        onClick={() => toggleStarred(prob.id)}
                                        title={isStarred ? 'Remove Bookmark' : 'Bookmark Problem'}
                                        className="p-1.5 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] transition cursor-pointer"
                                      >
                                        <Star
                                          className={`w-4 h-4 ${
                                            isStarred ? 'fill-[var(--notion-text-primary)] text-[var(--notion-text-primary)]' : ''
                                          }`}
                                        />
                                      </button>

                                      <button
                                        onClick={() => copyProblemLink(prob)}
                                        title={copiedId === prob.id ? 'Copied!' : 'Copy Link'}
                                        className="p-1.5 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] transition cursor-pointer"
                                      >
                                        {copiedId === prob.id ? (
                                          <Check className="w-4 h-4 text-[var(--notion-text-primary)]" />
                                        ) : (
                                          <Copy className="w-4 h-4" />
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : viewMode === 'table' ? (
        /* TABLE VIEW */
        <div className="bg-[var(--notion-card-bg)] border border-[var(--notion-border)] rounded-xl overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--tag-gray-bg)] text-[var(--notion-text-secondary)] font-semibold border-b border-[var(--notion-border)]">
                <tr>
                  <th className="py-2.5 px-3.5 w-12 text-center">Status</th>
                  <th className="py-2.5 px-3.5 w-14 font-mono">#</th>
                  <th className="py-2.5 px-3.5">Problem Title</th>
                  <th className="py-2.5 px-3.5">Chapter & Pattern</th>
                  <th className="py-2.5 px-3.5 w-28">Platform</th>
                  <th className="py-2.5 px-3.5 w-20 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--notion-border)] text-[var(--notion-text-primary)]">
                {filteredProblems.map((prob) => {
                  const isSolved = solvedSet.has(prob.id);
                  const isStarred = starredSet.has(prob.id);

                  return (
                    <tr
                      key={prob.id}
                      className={`hover:bg-[var(--notion-hover)] transition ${
                        isSolved ? 'bg-[var(--notion-callout-bg)]' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3.5 text-center">
                        <Checkbox
                          checked={isSolved}
                          onCheckedChange={() => toggleSolved(prob.id)}
                          title={isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}
                        />
                      </td>
                      <td className="py-2.5 px-3.5 font-mono text-[var(--notion-text-muted)] font-medium text-xs md:text-sm">
                        {prob.id}
                      </td>
                      <td className="py-2.5 px-3.5 font-medium text-sm md:text-base">
                        <a
                          href={prob.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`hover:underline ${
                            isSolved ? 'line-through text-[var(--notion-text-muted)]' : 'text-[var(--notion-text-primary)]'
                          }`}
                        >
                          {prob.title}
                        </a>
                      </td>
                      <td className="py-2.5 px-3.5 text-xs md:text-sm text-[var(--notion-text-secondary)]">
                        <div className="font-semibold text-[var(--notion-text-primary)]">
                          Ch {prob.chapterId}: {prob.chapterTitle.split('&')[0]}
                        </div>
                        <div className="text-xs truncate max-w-[220px] text-[var(--notion-text-muted)]">{prob.topicTitle}</div>
                      </td>
                      <td className="py-2.5 px-3.5">
                        <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--tag-gray-bg)] text-[var(--tag-gray-text)] border border-[var(--notion-border)] inline-block font-medium">
                          {prob.platform}
                        </span>
                      </td>
                      <td className="py-2.5 px-3.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => toggleStarred(prob.id)}
                            className="p-1 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] cursor-pointer"
                          >
                            <Star
                              className={`w-4 h-4 ${
                                isStarred ? 'fill-[var(--notion-text-primary)] text-[var(--notion-text-primary)]' : ''
                              }`}
                            />
                          </button>
                          <button
                            onClick={() => copyProblemLink(prob)}
                            className="p-1 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] cursor-pointer"
                          >
                            {copiedId === prob.id ? (
                              <Check className="w-4 h-4 text-[var(--notion-text-primary)]" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* GRID / CARDS VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredProblems.map((prob) => {
            const isSolved = solvedSet.has(prob.id);
            const isStarred = starredSet.has(prob.id);

            return (
              <div
                key={prob.id}
                className={`p-3.5 rounded-xl border flex flex-col justify-between transition ${
                  isSolved
                    ? 'bg-[var(--notion-callout-bg)] border-[var(--notion-border)]'
                    : 'bg-[var(--notion-card-bg)] border-[var(--notion-border)] hover:border-[var(--notion-border-strong)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono text-[var(--notion-text-muted)]">
                      #{prob.id}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--tag-gray-bg)] text-[var(--tag-gray-text)] border border-[var(--notion-border)] font-medium">
                      {prob.platform}
                    </span>
                  </div>

                  <a
                    href={prob.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm md:text-base font-semibold hover:underline block line-clamp-2 mb-2 ${
                      isSolved ? 'line-through text-[var(--notion-text-muted)]' : 'text-[var(--notion-text-primary)]'
                    }`}
                  >
                    {prob.title}
                  </a>

                  <div className="text-xs text-[var(--notion-text-muted)] line-clamp-1 mb-3">
                    {prob.chapterTitle} • {prob.topicTitle}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-[var(--notion-border)] flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs md:text-sm text-[var(--notion-text-secondary)] cursor-pointer">
                    <Checkbox
                      checked={isSolved}
                      onCheckedChange={() => toggleSolved(prob.id)}
                    />
                    <span>{isSolved ? 'Solved' : 'Mark Solved'}</span>
                  </label>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleStarred(prob.id)}
                      className="p-1 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] cursor-pointer"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          isStarred ? 'fill-[var(--notion-text-primary)] text-[var(--notion-text-primary)]' : ''
                        }`}
                      />
                    </button>
                    <button
                      onClick={() => copyProblemLink(prob)}
                      className="p-1 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] cursor-pointer"
                    >
                      {copiedId === prob.id ? (
                        <Check className="w-4 h-4 text-[var(--notion-text-primary)]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={prob.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-[var(--notion-text-muted)] hover:text-[var(--notion-text-primary)] cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
