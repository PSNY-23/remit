'use client';

import React from 'react';
import Link from 'next/link';
import {
  Network,
  GitFork,
  Layers,
  Table2,
  Binary,
  ArrowRightLeft,
  Target,
  Star,
  Trophy,
  Folder,
  ArrowUpRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface DsaTopic {
  id: string;
  title: string;
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
  description: string;
  href: string;
  complexity: string;
  subtopics: string[];
}

export default function DsaHub() {
  const topics: DsaTopic[] = [
    {
      id: 'graph',
      title: 'Graph Algorithms',
      icon: <Network size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Non-Linear',
      tagColor: 'notion-tag-gray',
      description: 'Adjacency lists, DFS, BFS, Dijkstra, Topological Sort, and Union-Find.',
      href: '/dsa/graph',
      complexity: 'O(V + E)',
      subtopics: ['DFS/BFS Traversals', 'Shortest Paths', 'Bipartite Graphs', 'Cycle Detection'],
    },
    {
      id: 'tree',
      title: 'Binary Tree & BST',
      icon: <GitFork size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Non-Linear',
      tagColor: 'notion-tag-gray',
      description: 'Pre/In/Post/Level-order traversals, BST operations, diameter, LCA, and views.',
      href: '/dsa/tree',
      complexity: 'O(N) / O(log N)',
      subtopics: ['DFS & BFS Patterns', 'Lowest Common Ancestor', 'Path Sum Problems', 'Serialization'],
    },
    {
      id: 'heap',
      title: 'Heap & Priority Queue',
      icon: <Layers size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Non-Linear',
      tagColor: 'notion-tag-gray',
      description: 'Min/Max heaps, Top K elements, Two Heaps median, and Dijkstra priority.',
      href: '/dsa/heap',
      complexity: 'O(log N) insert/pop',
      subtopics: ['Top K Frequent Elements', 'Find Median in Stream', 'Kth Largest in Stream'],
    },
    {
      id: 'map',
      title: 'Hash Map & Hash Table',
      icon: <Table2 size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Linear',
      tagColor: 'notion-tag-gray',
      description: 'Frequency counting, index lookups, grouping anagrams, and caching.',
      href: '/dsa/map',
      complexity: 'O(1) average lookup',
      subtopics: ['Two Sum Pattern', 'Subarray Sum Equals K', 'Group Anagrams', 'LRU Cache'],
    },
    {
      id: 'stack',
      title: 'Stack Patterns',
      icon: <Binary size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Linear',
      tagColor: 'notion-tag-gray',
      description: 'Monotonic stack, valid parentheses, daily temperatures, and largest histogram.',
      href: '/dsa/stack',
      complexity: 'O(1) push/pop',
      subtopics: ['Next Greater Element', 'Largest Rectangle in Histogram', 'Valid Parentheses'],
    },
    {
      id: 'queue',
      title: 'Queue & Monotonic Deque',
      icon: <ArrowRightLeft size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Linear',
      tagColor: 'notion-tag-gray',
      description: 'BFS queue, multi-source BFS, sliding window maximum with monotonic deque.',
      href: '/dsa/queue',
      complexity: 'O(1) enqueue/dequeue',
      subtopics: ['Sliding Window Maximum', 'Rotting Oranges', 'Moving Average'],
    },
    {
      id: 'set',
      title: 'Set Operations & Hash Sets',
      icon: <Target size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Linear',
      tagColor: 'notion-tag-gray',
      description: 'Deduplication, membership testing, union, intersection, and difference.',
      href: '/dsa/set',
      complexity: 'O(1) lookup',
      subtopics: ['Longest Consecutive Sequence', 'Contains Duplicate', 'Intersection of Arrays'],
    },
    {
      id: 'curated-300',
      title: 'Top 300 FAANG List',
      icon: <Star size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Lists',
      tagColor: 'notion-tag-gray',
      description: 'Carefully curated set of 300 high-frequency interview coding challenges.',
      href: '/dsa-list/full-300',
      complexity: 'Curated 300+',
      subtopics: ['FAANG High-Frequency', 'Topic Filtering', 'Difficulty Progress Checkboxes'],
    },
    {
      id: 'master-list',
      title: 'Master DSA Explorer',
      icon: <Trophy size={24} style={{ color: 'var(--notion-text-primary)' }} />,
      tag: 'Lists',
      tagColor: 'notion-tag-gray',
      description: 'Complete master problem database with interactive search and difficulty filters.',
      href: '/dsa-list/full',
      complexity: 'Complete Archive',
      subtopics: ['Complete Problem Archive', 'Blind 75 & Grind 169', 'Tags & Companies'],
    },
  ];

  return (
    <div style={{ marginTop: '1.5rem', marginBottom: '3rem' }}>
      {/* Quick Launchpad / Dashboard Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '12px',
          marginBottom: '28px',
        }}
      >
        <Link
          href="/dsa-list/full-300"
          className="notion-card"
          style={{
            padding: '14px 16px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Star size={20} style={{ color: 'var(--notion-text-primary)' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--notion-text-primary)' }}>
              Top 300 FAANG
            </div>
            <div style={{ fontSize: '11px', color: 'var(--notion-text-muted)' }}>
              Targeted high-signal problems
            </div>
          </div>
        </Link>

        <Link
          href="/dsa-list/full"
          className="notion-card"
          style={{
            padding: '14px 16px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Trophy size={20} style={{ color: 'var(--notion-text-primary)' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--notion-text-primary)' }}>
              Master Problem Database
            </div>
            <div style={{ fontSize: '11px', color: 'var(--notion-text-muted)' }}>
              Search & filter all problems
            </div>
          </div>
        </Link>
      </div>

      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          paddingBottom: '10px',
          borderBottom: '1px solid var(--notion-border)',
          marginBottom: '16px',
        }}
      >
        <Folder size={15} style={{ color: 'var(--notion-text-muted)' }} />
        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--notion-text-primary)' }}>
          Data Structures & Playbooks
        </span>
        <Badge variant="secondary" className="text-[11px] font-medium px-2 py-0.5">
          {topics.length} modules
        </Badge>
      </div>

      {/* Notion Database Gallery Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
          gap: '16px',
        }}
      >
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={topic.href}
            className="notion-card"
            style={{
              padding: '18px',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '180px',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div>{topic.icon}</div>
                <Badge variant="outline" className="text-[11px] font-medium">
                  {topic.tag}
                </Badge>
              </div>

              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--notion-text-primary)', marginBottom: '6px' }}>
                {topic.title}
              </div>

              <div style={{ fontSize: '12.5px', color: 'var(--notion-text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                {topic.description}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
                {topic.subtopics.slice(0, 2).map((sub, i) => (
                  <Badge
                    key={i}
                    variant="notion"
                    className="text-[10.5px] px-1.5 py-0 font-normal"
                  >
                    {sub}
                  </Badge>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '10px',
                  borderTop: '1px solid var(--notion-border)',
                  fontSize: '11.5px',
                  color: 'var(--notion-text-muted)',
                }}
              >
                <span>{topic.complexity}</span>
                <span style={{ color: 'var(--notion-text-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                  Open Guide <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
