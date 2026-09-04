"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";
import { ArrowLeft, Save, Plus, ChevronDown } from "lucide-react";
import Link from "next/link";

export interface InitialArticleData {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  subjectId: string;
  chapterId: string | null;
  subjectSlug?: string;
}

interface ArticleEditorProps {
  initialArticle?: InitialArticleData;
  mode?: "create" | "edit";
}

interface SubjectData {
  id: string;
  title: string;
  slug: string;
  chapters: { id: string; title: string; slug: string }[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ArticleEditor({
  initialArticle,
  mode = "create",
}: ArticleEditorProps) {
  const router = useRouter();
  const isEdit = mode === "edit" && Boolean(initialArticle);

  // Form state
  const [title, setTitle] = useState(initialArticle?.title || "");
  const [slug, setSlug] = useState(initialArticle?.slug || "");
  const [description, setDescription] = useState(initialArticle?.description || "");
  const [content, setContent] = useState(initialArticle?.content || "");

  // Subject & Chapter state
  const [subjects, setSubjects] = useState<SubjectData[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    initialArticle?.subjectId || ""
  );
  const [selectedChapterId, setSelectedChapterId] = useState(
    initialArticle?.chapterId || ""
  );
  const [newSubjectName, setNewSubjectName] = useState("");
  const [newChapterName, setNewChapterName] = useState("");
  const [showNewSubject, setShowNewSubject] = useState(false);
  const [showNewChapter, setShowNewChapter] = useState(false);

  // UI state
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [splitPercent, setSplitPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Load subjects
  useEffect(() => {
    fetch("/api/subjects")
      .then((r) => r.json())
      .then((data) => {
        setSubjects(data.subjects || []);
        if (isEdit && initialArticle) {
          setSelectedSubjectId(initialArticle.subjectId);
          if (initialArticle.chapterId) {
            setSelectedChapterId(initialArticle.chapterId);
          }
        }
      })
      .catch(console.error);
  }, [isEdit, initialArticle]);

  // Auto-generate slug from title ONLY in create mode (in edit mode keep existing unless user wants to change)
  useEffect(() => {
    if (!isEdit) {
      setSlug(slugify(title));
    }
  }, [title, isEdit]);

  // Chapters for selected subject
  const chapters = useMemo(() => {
    const sub = subjects.find((s) => s.id === selectedSubjectId);
    return sub?.chapters || [];
  }, [subjects, selectedSubjectId]);

  // Live preview
  const preview = useMemo(() => {
    if (!content) return "";
    try {
      return marked.parse(content, { gfm: true, breaks: true }) as string;
    } catch {
      return "";
    }
  }, [content]);

  // Line numbers
  const lineCount = useMemo(() => {
    return content.split("\n").length;
  }, [content]);

  // Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const percent = ((e.clientX - rect.left) / rect.width) * 100;
      setSplitPercent(Math.min(80, Math.max(20, percent)));
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Tab key support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue = content.substring(0, start) + "  " + content.substring(end);
      setContent(newValue);
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      });
    }
  };

  // Sync scroll
  const handleEditorScroll = () => {
    if (!textareaRef.current || !previewRef.current) return;
    const textarea = textareaRef.current;
    const scrollRatio =
      textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight || 1);
    const preview = previewRef.current;
    preview.scrollTop =
      scrollRatio * (preview.scrollHeight - preview.clientHeight);
  };

  // Save / Update
  const handleSave = async () => {
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (!content.trim()) {
      setError("Content is required");
      return;
    }
    if (!selectedSubjectId && !newSubjectName.trim()) {
      setError("Select a subject or create a new one");
      return;
    }

    setSaving(true);
    try {
      if (isEdit && initialArticle) {
        // Edit mode: PUT /api/articles/[id]
        const body: any = {
          title: title.trim(),
          slug: slug.trim() || slugify(title),
          description: description.trim(),
          content,
          subjectId: selectedSubjectId,
          chapterId: selectedChapterId || null,
        };

        const res = await fetch(`/api/articles/${initialArticle.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Failed to update article");
          return;
        }

        const subject = subjects.find((s) => s.id === selectedSubjectId);
        const subjectSlug = subject?.slug || initialArticle.subjectSlug || "backend";
        router.refresh();
        router.push(`/articles/${subjectSlug}/${body.slug}`);
      } else {
        // Create mode: POST /api/articles
        const body: any = {
          title: title.trim(),
          slug: slug.trim() || slugify(title),
          description: description.trim(),
          content,
        };

        if (newSubjectName.trim()) {
          body.newSubjectName = newSubjectName.trim();
        } else {
          body.subjectId = selectedSubjectId;
        }

        if (newChapterName.trim()) {
          body.newChapterName = newChapterName.trim();
        } else if (selectedChapterId) {
          body.chapterId = selectedChapterId;
        }

        const res = await fetch("/api/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Failed to save article");
          return;
        }

        router.refresh();
        router.push(data.redirectUrl);
      }
    } catch (err: any) {
      setError(err.message || "Failed to save article");
    } finally {
      setSaving(false);
    }
  };

  const backHref = isEdit && initialArticle?.subjectSlug
    ? `/articles/${initialArticle.subjectSlug}/${initialArticle.slug}`
    : "/";

  return (
    <div className="create-editor-fullscreen">
      {/* Top Toolbar */}
      <div className="editor-toolbar">
        <div className="editor-toolbar-left">
          <Link
            href={backHref}
            className="editor-back-btn"
            style={{ textDecoration: "none" }}
            title="Go Back"
          >
            <ArrowLeft size={16} />
          </Link>

          {/* Subject Selector */}
          <div className="editor-field-group">
            {showNewSubject ? (
              <input
                type="text"
                placeholder="New subject name..."
                value={newSubjectName}
                onChange={(e) => setNewSubjectName(e.target.value)}
                className="editor-input"
                autoFocus
              />
            ) : (
              <div className="editor-select-wrapper">
                <select
                  value={selectedSubjectId}
                  onChange={(e) => {
                    setSelectedSubjectId(e.target.value);
                    setSelectedChapterId("");
                  }}
                  className="editor-select"
                >
                  <option value="">Select Subject</option>
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <ChevronDown size={12} className="editor-select-icon" />
              </div>
            )}
            <button
              onClick={() => {
                setShowNewSubject(!showNewSubject);
                if (showNewSubject) setNewSubjectName("");
              }}
              className="editor-add-btn"
              title={showNewSubject ? "Cancel" : "New Subject"}
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Chapter Selector */}
          <div className="editor-field-group">
            {showNewChapter ? (
              <input
                type="text"
                placeholder="New chapter name..."
                value={newChapterName}
                onChange={(e) => setNewChapterName(e.target.value)}
                className="editor-input"
              />
            ) : (
              <div className="editor-select-wrapper">
                <select
                  value={selectedChapterId}
                  onChange={(e) => setSelectedChapterId(e.target.value)}
                  className="editor-select"
                  disabled={!selectedSubjectId && !newSubjectName}
                >
                  <option value="">Select Chapter</option>
                  {chapters.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
                <ChevronDown size={12} className="editor-select-icon" />
              </div>
            )}
            <button
              onClick={() => {
                setShowNewChapter(!showNewChapter);
                if (showNewChapter) setNewChapterName("");
              }}
              className="editor-add-btn"
              title={showNewChapter ? "Cancel" : "New Chapter"}
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        <div className="editor-toolbar-right">
          {error && <span className="editor-error">{error}</span>}
          <button
            onClick={handleSave}
            disabled={saving}
            className="editor-save-btn"
          >
            <Save size={14} />
            <span>{saving ? (isEdit ? "Updating..." : "Saving...") : (isEdit ? "Update" : "Save")}</span>
          </button>
        </div>
      </div>

      {/* Title & Description Bar */}
      <div className="editor-meta-bar">
        <input
          type="text"
          placeholder="Article title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="editor-title-input"
        />
        <input
          type="text"
          placeholder="Short description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="editor-desc-input"
        />
        {slug && (
          <span className="editor-slug-preview">
            slug: <code>{slug}</code>
          </span>
        )}
      </div>

      {/* Split Pane */}
      <div
        ref={containerRef}
        className="editor-split-container"
        style={{ cursor: isDragging ? "col-resize" : undefined }}
      >
        {/* Left: Editor */}
        <div
          className="editor-pane editor-pane-left"
          style={{ width: `${splitPercent}%` }}
        >
          <div className="editor-with-gutter">
            <div className="editor-gutter" aria-hidden="true">
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="editor-line-number">
                  {i + 1}
                </div>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              onScroll={handleEditorScroll}
              className="editor-textarea"
              placeholder="Write your markdown here..."
              spellCheck={false}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className="editor-divider"
          onMouseDown={handleMouseDown}
          onDoubleClick={() => setSplitPercent(50)}
        />

        {/* Right: Preview */}
        <div
          className="editor-pane editor-pane-right"
          style={{ width: `${100 - splitPercent}%` }}
        >
          <div
            ref={previewRef}
            className="article-viewer-container editor-preview-content"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </div>
      </div>
    </div>
  );
}
