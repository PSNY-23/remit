'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SubTopic {
  title: string;
  href: string;
  badge?: string;
}

interface SectionDirectory {
  id: string;
  title: string;
  category: string;
  desc: string;
  mainHref: string;
  badge: string;
  color: string;
  borderHover: string;
  iconBg: string;
  icon: React.ReactNode;
  topics: SubTopic[];
}

export default function LandingHero() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'DSA & Problems',
    'System Design',
    'Backend & DB',
    'Frontend & Web',
    'DevOps & Cloud',
    'Career & Leadership',
  ];

  const directory: SectionDirectory[] = [
    {
      id: 'dsa-core',
      title: 'Data Structures & Algorithms',
      category: 'DSA & Problems',
      desc: 'Master fundamental data structures, graph traversals, dynamic programming, and complexity intuition.',
      mainHref: '/dsa',
      badge: 'Core DSA',
      color: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      borderHover: 'hover:border-blue-500/50',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      topics: [
        { title: 'Graph Algorithms', href: '/dsa/graph' },
        { title: 'Binary Trees & BST', href: '/dsa/tree' },
        { title: 'Heap & Priority Queue', href: '/dsa/heap' },
        { title: 'Hash Maps & Tables', href: '/dsa/map' },
        { title: 'Set Operations', href: '/dsa/set' },
        { title: 'Stack Patterns', href: '/dsa/stack' },
        { title: 'Queue & Deque', href: '/dsa/queue' },
        { title: 'Curated Full Problem List', href: '/dsa-list/full', badge: 'List' },
        { title: 'Top 300 FAANG Problems', href: '/dsa-list/full-300', badge: '300+' },
      ],
    },
    {
      id: 'system-design',
      title: 'System Design & Distributed Systems',
      category: 'System Design',
      desc: 'High-level architecture blueprints, distributed caching, partitioning, consensus, and fault tolerance.',
      mainHref: '/interview/system-design',
      badge: 'Architecture',
      color: 'from-purple-500/20 via-pink-500/10 to-transparent',
      borderHover: 'hover:border-purple-500/50',
      iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      topics: [
        { title: 'System Design Case Studies', href: '/interview/system-design', badge: 'HLD' },
        { title: 'Microservices Architecture', href: '/interview/patterns/microservices' },
        { title: 'Distributed Systems Principles', href: '/interview/patterns/distributed-systems' },
        { title: 'Backend Architecture & Clean Design', href: '/interview/patterns/backend-architecture' },
        { title: 'Software Design Patterns', href: '/interview/patterns/design-patterns' },
      ],
    },
    {
      id: 'backend-systems',
      title: 'Backend Systems & Internals',
      category: 'Backend & DB',
      desc: 'High-throughput APIs, node event loop, session security, Redis caching, and memory profiling.',
      mainHref: '/interview/backend-systems',
      badge: 'Backend Core',
      color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderHover: 'hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      topics: [
        { title: 'Authentication & Security (JWT, OAuth)', href: '/interview/backend-systems/auth-security' },
        { title: 'Caching Strategies & Redis', href: '/interview/backend-systems/caching' },
        { title: 'REST APIs & Idempotency', href: '/interview/backend-systems/rest-apis' },
        { title: 'Node.js Runtime & Event Loop', href: '/interview/backend-systems/nodejs' },
        { title: 'Observability & OpenTelemetry', href: '/interview/backend-systems/observability' },
        { title: 'Performance & Profiling', href: '/interview/backend-systems/performance-debugging' },
        { title: 'Automated Testing Strategies', href: '/interview/backend-systems/testing' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Storage Engines',
      category: 'Backend & DB',
      desc: 'Relational vs NoSQL trade-offs, indexing B-Trees, transaction isolation, and query optimization.',
      mainHref: '/interview/databases-data',
      badge: 'Databases',
      color: 'from-amber-500/20 via-orange-500/10 to-transparent',
      borderHover: 'hover:border-amber-500/50',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 3.6 3.6 8 3.6s8-1.6 8-3.6V7M4 7c0 2 3.6 3.6 8 3.6s8-1.6 8-3.6M4 7c0-2 3.6-3.6 8-3.6s8 1.6 8 3.6" />
        </svg>
      ),
      topics: [
        { title: 'PostgreSQL Internals & Optimization', href: '/interview/databases-data/postgresql' },
        { title: 'MongoDB & Document Modeling', href: '/interview/databases-data/mongodb' },
      ],
    },
    {
      id: 'frontend-ui',
      title: 'Frontend Engineering & Web Platform',
      category: 'Frontend & Web',
      desc: 'TypeScript type gymnastics, React reconciler deep-dive, Next.js App Router, and browser rendering mechanics.',
      mainHref: '/interview/frontend-ui',
      badge: 'Frontend Core',
      color: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      borderHover: 'hover:border-cyan-500/50',
      iconBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      topics: [
        { title: 'TypeScript Advanced Types', href: '/interview/frontend-ui/typescript' },
        { title: 'React State & Reconciliation', href: '/interview/frontend-ui/react' },
        { title: 'Next.js App Router & Server Actions', href: '/interview/frontend-ui/nextjs' },
        { title: 'Modern JavaScript (ES6+)', href: '/interview/frontend-ui/JS' },
        { title: 'Web Performance & Browser API', href: '/interview/frontend-ui/frontend-web' },
      ],
    },
    {
      id: 'devops-infra',
      title: 'DevOps, CI/CD & Event Queues',
      category: 'DevOps & Cloud',
      desc: 'Containerization, Kubernetes fundamentals, asynchronous message streaming with Kafka & RabbitMQ.',
      mainHref: '/interview/devops',
      badge: 'Infra & Cloud',
      color: 'from-sky-500/20 via-indigo-500/10 to-transparent',
      borderHover: 'hover:border-sky-500/50',
      iconBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      topics: [
        { title: 'DevOps & Cloud Deployment', href: '/interview/devops/devops-cloud' },
        { title: 'Message Queues & Event Streaming', href: '/interview/devops/queues-events' },
      ],
    },
    {
      id: 'career-leadership',
      title: 'Senior Judgment & Interview Defense',
      category: 'Career & Leadership',
      desc: 'Staff-level trade-off analysis, deep-dive project defense tactics, and behavioral leadership frameworks.',
      mainHref: '/interview/career-interviews',
      badge: 'Staff & Senior',
      color: 'from-rose-500/20 via-red-500/10 to-transparent',
      borderHover: 'hover:border-rose-500/50',
      iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      topics: [
        { title: 'Senior Engineering Judgment', href: '/interview/career-interviews/senior-judgment' },
        { title: 'Production Project Defense', href: '/interview/career-interviews/project-defense' },
        { title: 'Behavioral & Leadership Stories', href: '/interview/career-interviews/behavioral' },
      ],
    },
    {
      id: 'others',
      title: 'Tooling & Documentation Setup',
      category: 'DevOps & Cloud',
      desc: 'Custom documentation system setups, MDX extensions, and platform configurations.',
      mainHref: '/others/nextra-setup',
      badge: 'Tooling',
      color: 'from-zinc-500/20 via-zinc-500/10 to-transparent',
      borderHover: 'hover:border-zinc-500/50',
      iconBg: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      topics: [
        { title: 'Nextra Setup Guide', href: '/others/nextra-setup' },
      ],
    },
  ];

  const filteredDirectory = useMemo(() => {
    if (selectedCategory === 'All') return directory;
    return directory.filter((sec) => sec.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div data-landing="true" className="relative w-full overflow-hidden pb-20 font-sans">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-125 w-full max-w-6xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Hero Header */}
      <div className="mx-auto max-w-5xl pt-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/70 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs backdrop-blur-md dark:border-blue-400/20 dark:bg-blue-950/50 dark:text-blue-300">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span>The Engineering & Interview Master Knowledge Base</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Master{' '}
          <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
            Data Structures, Systems
          </span>
          <br className="hidden sm:inline" /> & Architecture
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
          A high-signal, zero-fluff engineering repository curated for software engineers. Browse below to jump directly into any chapter, algorithm topic, or system design blueprint.
        </p>
      </div>

      {/* Creator Spotlight */}
      <div className="mx-auto mt-14 max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white/90 to-zinc-50/90 p-6 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:from-zinc-900/90 dark:to-zinc-950/90 sm:p-8">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="relative shrink-0">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-2xl border-2 border-white/80 p-1 shadow-2xl ring-4 ring-blue-500/20 dark:border-zinc-700 dark:ring-blue-400/20">
                <Image
                  src="/pankaj.png"
                  alt="Pankaj"
                  fill
                  sizes="128px"
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full border border-emerald-500/30 bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-md">
                Author
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Pankaj</h2>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  • Software Engineer & Architect
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Welcome to <strong>Remit</strong>. This repository is built as a complete reference covering full-stack internals, distributed architectures, algorithmic problem types, and real-world system design trade-offs.
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <span className="inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                  ⚡ Distributed Systems
                </span>
                <span className="inline-flex items-center rounded-lg border border-purple-200 bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 dark:border-purple-900/60 dark:bg-purple-950/40 dark:text-purple-300">
                  🏛️ System Design
                </span>
                <span className="inline-flex items-center rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                  🧩 DSA Library
                </span>
                <span className="inline-flex items-center rounded-lg border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-300">
                  🚀 Scalable Backend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIRECTORY EXPLORER HUB */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            Knowledge Base Directory
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Jump directly to any section, topic, or curated interview playbook.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'border border-zinc-200 bg-white/70 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Directory Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredDirectory.map((sec) => (
            <div
              key={sec.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/80 ${sec.borderHover}`}
            >
              {/* Card Ambient Glow */}
              <div className={`pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-bl ${sec.color} blur-2xl opacity-60 transition-opacity group-hover:opacity-100`} />

              <div>
                {/* Section Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${sec.iconBg}`}>
                      {sec.icon}
                    </div>
                    <Link
                      href={sec.mainHref}
                      className="text-base font-bold text-zinc-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                    >
                      {sec.title}
                    </Link>
                  </div>
                  <span className="shrink-0 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-bold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
                    {sec.badge}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {sec.desc}
                </p>

                {/* Sub-Topics & Direct Links */}
                <div className="mt-4 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
                  <div className="mb-2 text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                    Topics & Chapters
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sec.topics.map((topic, i) => (
                      <Link
                        key={i}
                        href={topic.href}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-all hover:border-blue-400 hover:bg-blue-50/70 hover:text-blue-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
                      >
                        <span>{topic.title}</span>
                        {topic.badge && (
                          <span className="rounded bg-blue-100 px-1 text-[9px] font-bold text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                            {topic.badge}
                          </span>
                        )}
                        <span className="text-[10px] text-zinc-400 opacity-60 group-hover:opacity-100">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Jump Link */}
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <Link href={sec.mainHref} className="inline-flex items-center gap-1 hover:underline">
                  <span>Open Full Section & Sidebar</span>
                  <span>→</span>
                </Link>
                <span className="text-[11px] text-zinc-400">
                  {sec.topics.length} {sec.topics.length === 1 ? 'module' : 'modules'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Box */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-center text-white shadow-xl sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          <h2 className="relative text-2xl font-extrabold sm:text-3xl">
            Ready to dive deep into engineering?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
            Choose any section above to open the complete documentation environment with the dedicated chapter sidebar.
          </p>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/interview"
              className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-md transition-all hover:bg-blue-50 active:scale-95"
            >
              Browse All Topics
            </Link>
            <Link
              href="/dsa"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            >
              DSA Notes & Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
