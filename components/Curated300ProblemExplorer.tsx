'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  CURATED_300_CHAPTERS,
  CURATED_300_PROBLEMS,
  CuratedProblemItem,
  CuratedChapterGroup,
  CuratedTopicGroup,
} from '@/data/curated300ProblemData';

type DifficultyFilter = 'All' | 'Easy' | 'Medium' | 'Hard';
type PlatformFilter = 'All' | 'LeetCode' | 'GeeksforGeeks' | 'SPOJ' | 'HackerEarth';
type StatusFilter = 'All' | 'Solved' | 'Unsolved' | 'Starred';
type ViewMode = 'accordion' | 'table' | 'cards';

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  Easy: { bg: 'rgba(16, 185, 129, 0.12)', text: '#10b981', border: 'rgba(16, 185, 129, 0.3)', dot: '🟢' },
  Medium: { bg: 'rgba(245, 158, 11, 0.12)', text: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)', dot: '🟡' },
  Hard: { bg: 'rgba(239, 68, 68, 0.12)', text: '#ef4444', border: 'rgba(239, 68, 68, 0.3)', dot: '🔴' },
};

const PLATFORM_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  LeetCode: { bg: 'rgba(245, 158, 11, 0.12)', text: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' },
  GeeksforGeeks: { bg: 'rgba(34, 197, 94, 0.12)', text: '#22c55e', border: 'rgba(34, 197, 94, 0.3)' },
  SPOJ: { bg: 'rgba(168, 85, 247, 0.12)', text: '#a855f7', border: 'rgba(168, 85, 247, 0.3)' },
  HackerEarth: { bg: 'rgba(59, 130, 246, 0.12)', text: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' },
  Other: { bg: 'rgba(148, 163, 184, 0.12)', text: '#94a3b8', border: 'rgba(148, 163, 184, 0.3)' },
};

export default function Curated300ProblemExplorer() {
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('All');
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
      const savedSolved = localStorage.getItem('dsa_curated_377_solved');
      if (savedSolved) {
        setSolvedSet(new Set(JSON.parse(savedSolved)));
      }
      const savedStarred = localStorage.getItem('dsa_curated_377_starred');
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
        localStorage.setItem('dsa_curated_377_solved', JSON.stringify(Array.from(next)));
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
        localStorage.setItem('dsa_curated_377_starred', JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }, []);

  const copyProblemLink = useCallback((prob: CuratedProblemItem) => {
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
    CURATED_300_CHAPTERS.forEach((c) => {
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

    return CURATED_300_PROBLEMS.filter((prob) => {
      // Chapter filter
      if (selectedChapterId !== 'all' && prob.chapterId !== selectedChapterId) {
        return false;
      }

      // Difficulty filter
      if (difficultyFilter !== 'All' && prob.difficulty !== difficultyFilter) {
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
        const matchesDifficulty = prob.difficulty.toLowerCase().includes(query);
        return matchesTitle || matchesId || matchesTopic || matchesChapter || matchesPlatform || matchesDifficulty;
      }

      return true;
    });
  }, [selectedChapterId, difficultyFilter, platformFilter, statusFilter, searchQuery, solvedSet, starredSet]);

  // Group filtered problems for Accordion view
  const groupedData = useMemo(() => {
    const problemMap = new Map<number, CuratedProblemItem>();
    filteredProblems.forEach((p) => problemMap.set(p.id, p));

    return CURATED_300_CHAPTERS.map((chap) => {
      if (selectedChapterId !== 'all' && chap.id !== selectedChapterId) {
        return null;
      }

      const matchingTopics = chap.topics
        .map((top) => {
          const matchingProbs = top.problems.filter((p) => problemMap.has(p.id));
          if (
            matchingProbs.length === 0 &&
            (searchQuery || difficultyFilter !== 'All' || platformFilter !== 'All' || statusFilter !== 'All')
          ) {
            return null;
          }
          return {
            ...top,
            problems: matchingProbs,
          };
        })
        .filter(Boolean) as CuratedTopicGroup[];

      const totalMatchingProbs = matchingTopics.reduce((acc, t) => acc + t.problems.length, 0);

      if (
        totalMatchingProbs === 0 &&
        (searchQuery || difficultyFilter !== 'All' || platformFilter !== 'All' || statusFilter !== 'All')
      ) {
        return null;
      }

      return {
        ...chap,
        topics: matchingTopics,
        totalMatchingProbs,
      };
    }).filter(Boolean) as (CuratedChapterGroup & { totalMatchingProbs: number })[];
  }, [filteredProblems, selectedChapterId, searchQuery, difficultyFilter, platformFilter, statusFilter]);

  // Stats calculation
  const totalCount = CURATED_300_PROBLEMS.length;
  const solvedCount = solvedSet.size;
  const starredCount = starredSet.size;
  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  // Difficulty breakdown stats
  const difficultyStats = useMemo(() => {
    const easyTotal = CURATED_300_PROBLEMS.filter((p) => p.difficulty === 'Easy').length;
    const easySolved = CURATED_300_PROBLEMS.filter((p) => p.difficulty === 'Easy' && solvedSet.has(p.id)).length;
    const medTotal = CURATED_300_PROBLEMS.filter((p) => p.difficulty === 'Medium').length;
    const medSolved = CURATED_300_PROBLEMS.filter((p) => p.difficulty === 'Medium' && solvedSet.has(p.id)).length;
    const hardTotal = CURATED_300_PROBLEMS.filter((p) => p.difficulty === 'Hard').length;
    const hardSolved = CURATED_300_PROBLEMS.filter((p) => p.difficulty === 'Hard' && solvedSet.has(p.id)).length;

    return {
      Easy: { solved: easySolved, total: easyTotal },
      Medium: { solved: medSolved, total: medTotal },
      Hard: { solved: hardSolved, total: hardTotal },
    };
  }, [solvedSet]);

  // Chapter-wise solved stats
  const chapterStats = useMemo(() => {
    const stats: Record<number, { solved: number; total: number }> = {};
    CURATED_300_CHAPTERS.forEach((c) => {
      const allProbs = c.topics.flatMap((t) => t.problems);
      const solved = allProbs.filter((p) => solvedSet.has(p.id)).length;
      stats[c.id] = { solved, total: allProbs.length };
    });
    return stats;
  }, [solvedSet]);

  // Pick random unsolved
  const pickRandomUnsolved = () => {
    const unsolvedList = CURATED_300_PROBLEMS.filter((p) => !solvedSet.has(p.id));
    if (unsolvedList.length === 0) {
      alert('Congratulations! You have mastered all 377 high-frequency interview questions! 🎉');
      return;
    }
    const rand = unsolvedList[Math.floor(Math.random() * unsolvedList.length)];
    setSelectedChapterId(rand.chapterId);
    setSearchQuery(rand.title);
    setOpenChapters((prev) => ({ ...prev, [rand.chapterId]: true }));
    setOpenTopics((prev) => ({ ...prev, [rand.topicId]: true }));
  };

  return (
    <div className="not-prose my-8 font-sans text-slate-800 dark:text-slate-100">
      {/* 🌟 STATS & DIFFICULTY OVERVIEW CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-6">
        <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
            Curated 300 Roadmap
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">377</span>
            <span className="text-xs text-blue-500 font-medium">10 Chapters • 45 Patterns</span>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
              Solved Progress
            </span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{progressPercent}%</span>
          </div>
          <div className="mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {isClient ? solvedCount : 0}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">/ 377</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
            Difficulty Distribution
          </span>
          <div className="flex items-center gap-2 mt-2 text-xs font-semibold">
            <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-800">
              🟢 {isClient ? difficultyStats.Easy.solved : 0}/{difficultyStats.Easy.total}
            </span>
            <span className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-1 rounded border border-amber-200 dark:border-amber-800">
              🟡 {isClient ? difficultyStats.Medium.solved : 0}/{difficultyStats.Medium.total}
            </span>
            <span className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-1 rounded border border-rose-200 dark:border-rose-800">
              🔴 {isClient ? difficultyStats.Hard.solved : 0}/{difficultyStats.Hard.total}
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl p-4 text-white shadow-sm flex flex-col justify-between">
          <span className="text-xs uppercase font-semibold text-indigo-100 tracking-wider">
            High-Frequency Practice
          </span>
          <button
            onClick={pickRandomUnsolved}
            className="mt-2 w-full py-2 px-3 bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-xs md:text-sm rounded-lg transition shadow flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>🎲</span> Pick Random Unsolved
          </button>
        </div>
      </div>

      {/* 🧭 CHAPTER SELECTOR TABS */}
      <div className="mb-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Select Chapter:
            </span>
            {selectedChapterId !== 'all' && (
              <button
                onClick={() => setSelectedChapterId('all')}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
              >
                (View All Chapters)
              </button>
            )}
          </div>
          <span className="text-xs text-slate-400">
            {filteredProblems.length} problem{filteredProblems.length === 1 ? '' : 's'} matching
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
          <button
            onClick={() => setSelectedChapterId('all')}
            className={`flex-shrink-0 px-3.5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
              selectedChapterId === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span>🌐</span>
            <span>All Chapters (377)</span>
          </button>

          {CURATED_300_CHAPTERS.map((ch) => {
            const isSelected = selectedChapterId === ch.id;
            const stats = chapterStats[ch.id] || { solved: 0, total: ch.expectedCount };
            const isCompleted = stats.solved === stats.total && stats.total > 0;

            return (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChapterId(ch.id);
                  setOpenChapters((prev) => ({ ...prev, [ch.id]: true }));
                }}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : isCompleted
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-transparent hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{ch.icon}</span>
                <span className="truncate max-w-[130px]">{ch.title.split('&')[0]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-indigo-700 text-indigo-100'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
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

      {/* 🔍 SEARCH & ADVANCED FILTER TOOLBAR */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 mb-6 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 377 high-frequency problems by title, pattern, or difficulty..."
            className="w-full pl-9 pr-8 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white placeholder-slate-400 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm cursor-pointer p-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Selectors & Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Difficulty Selector */}
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value as DifficultyFilter)}
            className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">🟢 Easy (54)</option>
            <option value="Medium">🟡 Medium (253)</option>
            <option value="Hard">🔴 Hard (70)</option>
          </select>

          {/* Platform Selector */}
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value as PlatformFilter)}
            className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="All">All Platforms</option>
            <option value="LeetCode">LeetCode</option>
            <option value="GeeksforGeeks">GeeksforGeeks</option>
            <option value="SPOJ">SPOJ</option>
            <option value="HackerEarth">HackerEarth</option>
          </select>

          {/* Status Selector */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Unsolved">⏳ Unsolved Only</option>
            <option value="Solved">✅ Solved Only</option>
            <option value="Starred">⭐ Starred Only</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode('accordion')}
              title="Accordion / Pattern View"
              className={`px-2 py-1 rounded text-xs font-medium transition cursor-pointer ${
                viewMode === 'accordion'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
              }`}
            >
              📂 Topics
            </button>
            <button
              onClick={() => setViewMode('table')}
              title="Table View"
              className={`px-2 py-1 rounded text-xs font-medium transition cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
              }`}
            >
              📋 Table
            </button>
            <button
              onClick={() => setViewMode('cards')}
              title="Cards Grid View"
              className={`px-2 py-1 rounded text-xs font-medium transition cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
              }`}
            >
              🎴 Cards
            </button>
          </div>

          {/* Expand/Collapse All */}
          {viewMode === 'accordion' && (
            <div className="flex gap-1">
              <button
                onClick={expandAll}
                className="px-2 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                title="Expand All Chapters"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-2 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                title="Collapse All Chapters"
              >
                Collapse All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🚀 PROBLEM LIST DISPLAY */}
      {filteredProblems.length === 0 ? (
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-12 text-center my-6">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">No Problems Found</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4">
            No problems match your current search and filter combination. Try clearing some filters or searching for another keyword.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setDifficultyFilter('All');
              setPlatformFilter('All');
              setStatusFilter('All');
              setSelectedChapterId('all');
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : viewMode === 'accordion' ? (
        /* ACCORDION PATTERN VIEW */
        <div className="space-y-4">
          {groupedData.map((chap) => {
            const isOpen = openChapters[chap.id] ?? false;
            const stats = chapterStats[chap.id] || { solved: 0, total: chap.expectedCount };
            const chapProgress = stats.total > 0 ? Math.round((stats.solved / stats.total) * 100) : 0;

            return (
              <div
                key={chap.id}
                className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm transition hover:border-slate-300 dark:hover:border-slate-700"
              >
                {/* Chapter Header */}
                <div
                  onClick={() => toggleChapter(chap.id)}
                  className="flex items-center justify-between p-4 cursor-pointer select-none bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl p-2 bg-white dark:bg-slate-800 rounded-lg shadow-xs border border-slate-200 dark:border-slate-700">
                      {chap.icon}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>Chapter {chap.id}: {chap.title}</span>
                      </h2>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
                        <span>{chap.topics.length} Pattern Groups</span>
                        <span>•</span>
                        <span>{chap.totalMatchingProbs} Problems</span>
                        {stats.solved > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                              {stats.solved}/{stats.total} Solved ({chapProgress}%)
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Chapter mini progress bar */}
                    <div className="hidden sm:block w-24 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${chapProgress}%` }}
                      />
                    </div>
                    <span className="text-slate-400 text-lg transition-transform duration-200 font-mono">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {/* Chapter Content / Topics */}
                {isOpen && (
                  <div className="p-4 pt-2 divide-y divide-slate-100 dark:divide-slate-800/60">
                    {chap.topics.map((topic) => {
                      const isTopicOpen = openTopics[topic.id] !== false; // default open
                      const topicSolved = topic.problems.filter((p) => solvedSet.has(p.id)).length;

                      return (
                        <div key={topic.id} className="py-3 first:pt-2 last:pb-1">
                          {/* Topic Subheader */}
                          <div
                            onClick={() => toggleTopic(topic.id)}
                            className="flex items-center justify-between py-1.5 px-2 rounded-lg cursor-pointer hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition mb-2"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                                Topic {topic.id}
                              </span>
                              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                {topic.title}
                              </h3>
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                                {topic.problems.length} problems
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {topicSolved > 0 && (
                                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                                  {topicSolved}/{topic.problems.length}
                                </span>
                              )}
                              <span className="text-slate-400 text-xs font-mono">
                                {isTopicOpen ? '▾' : '▸'}
                              </span>
                            </div>
                          </div>

                          {/* Problem Rows inside Topic */}
                          {isTopicOpen && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 pr-1">
                              {topic.problems.map((prob) => {
                                const isSolved = solvedSet.has(prob.id);
                                const isStarred = starredSet.has(prob.id);
                                const diffColor = DIFFICULTY_COLORS[prob.difficulty] || DIFFICULTY_COLORS.Medium;
                                const platColor = PLATFORM_COLORS[prob.platform] || PLATFORM_COLORS.Other;

                                return (
                                  <div
                                    key={prob.id}
                                    className={`group flex items-center justify-between p-2.5 rounded-lg border transition duration-150 ${
                                      isSolved
                                        ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40'
                                        : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-white dark:hover:bg-slate-800'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
                                      {/* Solved Checkbox */}
                                      <input
                                        type="checkbox"
                                        checked={isSolved}
                                        onChange={() => toggleSolved(prob.id)}
                                        title={isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}
                                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 dark:border-slate-600 dark:bg-slate-700 cursor-pointer flex-shrink-0 accent-emerald-600"
                                      />

                                      {/* Problem # badge */}
                                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 flex-shrink-0 w-8">
                                        #{prob.id}
                                      </span>

                                      {/* Problem Title & Direct Link */}
                                      <a
                                        href={prob.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xs md:text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 truncate flex-1 ${
                                          isSolved
                                            ? 'text-slate-500 dark:text-slate-400 line-through'
                                            : 'text-slate-800 dark:text-slate-200'
                                        }`}
                                        title={prob.title}
                                      >
                                        {prob.title}
                                      </a>
                                    </div>

                                    {/* Difficulty, Platform & Actions */}
                                    <div className="flex items-center gap-1.5 flex-shrink-0">
                                      {/* Difficulty Badge */}
                                      <span
                                        style={{
                                          backgroundColor: diffColor.bg,
                                          color: diffColor.text,
                                          borderColor: diffColor.border,
                                        }}
                                        className="text-[10px] font-semibold px-2 py-0.5 rounded border"
                                      >
                                        {prob.difficulty}
                                      </span>

                                      {/* Platform badge */}
                                      <span
                                        style={{
                                          backgroundColor: platColor.bg,
                                          color: platColor.text,
                                          borderColor: platColor.border,
                                        }}
                                        className="text-[10px] font-semibold px-1.5 py-0.5 rounded border hidden sm:inline-block"
                                      >
                                        {prob.platform === 'GeeksforGeeks' ? 'GFG' : prob.platform}
                                      </span>

                                      {/* Star Bookmark */}
                                      <button
                                        onClick={() => toggleStarred(prob.id)}
                                        title={isStarred ? 'Remove Bookmark' : 'Bookmark Problem'}
                                        className="p-1 text-xs text-slate-400 hover:text-amber-500 transition cursor-pointer"
                                      >
                                        {isStarred ? '⭐' : '☆'}
                                      </button>

                                      {/* Copy Link */}
                                      <button
                                        onClick={() => copyProblemLink(prob)}
                                        title={copiedId === prob.id ? 'Copied!' : 'Copy Link'}
                                        className="p-1 text-xs text-slate-400 hover:text-indigo-500 transition cursor-pointer"
                                      >
                                        {copiedId === prob.id ? '✓' : '🔗'}
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
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3 px-3 w-12 text-center">Status</th>
                  <th className="py-3 px-3 w-14 font-mono">#</th>
                  <th className="py-3 px-3">Problem Title</th>
                  <th className="py-3 px-3 w-28">Difficulty</th>
                  <th className="py-3 px-3">Chapter & Pattern</th>
                  <th className="py-3 px-3 w-28">Platform</th>
                  <th className="py-3 px-3 w-20 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                {filteredProblems.map((prob) => {
                  const isSolved = solvedSet.has(prob.id);
                  const isStarred = starredSet.has(prob.id);
                  const diffColor = DIFFICULTY_COLORS[prob.difficulty] || DIFFICULTY_COLORS.Medium;
                  const platColor = PLATFORM_COLORS[prob.platform] || PLATFORM_COLORS.Other;

                  return (
                    <tr
                      key={prob.id}
                      className={`hover:bg-slate-50 dark:hover:bg-slate-800/60 transition ${
                        isSolved ? 'bg-emerald-50/20 dark:bg-emerald-950/10' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3 text-center">
                        <input
                          type="checkbox"
                          checked={isSolved}
                          onChange={() => toggleSolved(prob.id)}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 dark:border-slate-600 cursor-pointer accent-emerald-600"
                        />
                      </td>
                      <td className="py-2.5 px-3 font-mono text-slate-400 dark:text-slate-500 font-medium">
                        {prob.id}
                      </td>
                      <td className="py-2.5 px-3 font-medium">
                        <a
                          href={prob.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline ${
                            isSolved ? 'line-through text-slate-400' : ''
                          }`}
                        >
                          {prob.title}
                        </a>
                      </td>
                      <td className="py-2.5 px-3">
                        <span
                          style={{
                            backgroundColor: diffColor.bg,
                            color: diffColor.text,
                            borderColor: diffColor.border,
                          }}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded border inline-block"
                        >
                          {prob.difficulty}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-xs text-slate-500 dark:text-slate-400">
                        <div className="font-semibold text-slate-700 dark:text-slate-300">
                          Ch {prob.chapterId}: {prob.chapterTitle.split('&')[0]}
                        </div>
                        <div className="text-[11px] truncate max-w-[200px] text-slate-400">{prob.topicTitle}</div>
                      </td>
                      <td className="py-2.5 px-3">
                        <span
                          style={{
                            backgroundColor: platColor.bg,
                            color: platColor.text,
                            borderColor: platColor.border,
                          }}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded border inline-block"
                        >
                          {prob.platform}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => toggleStarred(prob.id)}
                            className="p-1 text-slate-400 hover:text-amber-500 cursor-pointer"
                          >
                            {isStarred ? '⭐' : '☆'}
                          </button>
                          <button
                            onClick={() => copyProblemLink(prob)}
                            className="p-1 text-slate-400 hover:text-indigo-500 cursor-pointer"
                          >
                            {copiedId === prob.id ? '✓' : '🔗'}
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
            const diffColor = DIFFICULTY_COLORS[prob.difficulty] || DIFFICULTY_COLORS.Medium;
            const platColor = PLATFORM_COLORS[prob.platform] || PLATFORM_COLORS.Other;

            return (
              <div
                key={prob.id}
                className={`p-3.5 rounded-xl border flex flex-col justify-between transition ${
                  isSolved
                    ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      #{prob.id}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        style={{
                          backgroundColor: diffColor.bg,
                          color: diffColor.text,
                          borderColor: diffColor.border,
                        }}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded border"
                      >
                        {prob.difficulty}
                      </span>
                      <span
                        style={{
                          backgroundColor: platColor.bg,
                          color: platColor.text,
                          borderColor: platColor.border,
                        }}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded border"
                      >
                        {prob.platform}
                      </span>
                    </div>
                  </div>

                  <a
                    href={prob.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 block line-clamp-2 mb-2 ${
                      isSolved ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-100'
                    }`}
                  >
                    {prob.title}
                  </a>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-3">
                    {prob.chapterTitle} • {prob.topicTitle}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <label className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSolved}
                      onChange={() => toggleSolved(prob.id)}
                      className="w-3.5 h-3.5 rounded text-emerald-600 accent-emerald-600"
                    />
                    <span>{isSolved ? 'Solved' : 'Mark Solved'}</span>
                  </label>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleStarred(prob.id)}
                      className="p-1 text-xs text-slate-400 hover:text-amber-500 cursor-pointer"
                    >
                      {isStarred ? '⭐' : '☆'}
                    </button>
                    <button
                      onClick={() => copyProblemLink(prob)}
                      className="p-1 text-xs text-slate-400 hover:text-indigo-500 cursor-pointer"
                    >
                      {copiedId === prob.id ? '✓' : '🔗'}
                    </button>
                    <a
                      href={prob.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-xs text-indigo-500 hover:text-indigo-700 cursor-pointer"
                    >
                      ↗
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
