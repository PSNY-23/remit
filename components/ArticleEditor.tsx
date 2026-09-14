"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { renderMarkdown } from "@/lib/markdown";
import { renderMermaidDiagrams } from "@/lib/mermaid";
import {
  ArrowLeft,
  Save,
  Plus,
  Eye,
  PenLine,
  FolderPlus,
  ImagePlus,
  UploadCloud,
  Loader2,
  X,
  Image as ImageIcon,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Topic creation dialog state
  const [isCreateTopicOpen, setIsCreateTopicOpen] = useState(false);
  const [createModalTab, setCreateModalTab] = useState<"chapter" | "subject">(
    selectedSubjectId ? "chapter" : "subject"
  );
  const [modalParentSubjectId, setModalParentSubjectId] = useState(
    selectedSubjectId || ""
  );
  const [newSubjectTitle, setNewSubjectTitle] = useState("");
  const [newSubjectFirstChapter, setNewSubjectFirstChapter] = useState("");
  const [newChapterTitle, setNewChapterTitle] = useState("");
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalError, setModalError] = useState("");

  // UI state
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [splitPercent, setSplitPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Image Upload Dialog & Drag/Paste state
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [imageModalTab, setImageModalTab] = useState<"upload" | "url">("upload");
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [imageAltText, setImageAltText] = useState("");
  const [directImageUrl, setDirectImageUrl] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imageUploadError, setImageUploadError] = useState("");
  const [isDraggingOverEditor, setIsDraggingOverEditor] = useState(false);
  const [globalUploadStatus, setGlobalUploadStatus] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup preview URL on unmount or change
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  // Insert markdown snippet at current textarea cursor position
  const insertMarkdownAtCursor = useCallback((textToInsert: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setContent((prev) => (prev ? prev + "\n\n" : "") + textToInsert);
      return;
    }
    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const prevContent = textarea.value;
    const nextContent =
      prevContent.substring(0, start) + textToInsert + prevContent.substring(end);
    setContent(nextContent);
    requestAnimationFrame(() => {
      textarea.focus();
      const pos = start + textToInsert.length;
      textarea.setSelectionRange(pos, pos);
    });
  }, []);

  // Upload file to /api/upload (Vercel Blob)
  const uploadImageFile = async (file: File): Promise<{ url: string; filename: string }> => {
    if (!file.type.startsWith("image/")) {
      throw new Error("Only image files (JPEG, PNG, WebP, GIF, SVG, AVIF) are allowed.");
    }
    if (file.size > 10 * 1024 * 1024) {
      throw new Error(`File size is ${(file.size / (1024 * 1024)).toFixed(1)}MB. Maximum allowed is 10MB.`);
    }
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || "Failed to upload image to Vercel Blob.");
    }
    return { url: data.url, filename: data.filename || file.name };
  };

  // Select file in modal
  const handleFileSelect = (file: File) => {
    setImageUploadError("");
    if (!file.type.startsWith("image/")) {
      setImageUploadError("Please choose an image file (JPEG, PNG, WebP, GIF, SVG).");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setImageUploadError(`File is ${(file.size / (1024 * 1024)).toFixed(1)}MB. Maximum size is 10MB.`);
      return;
    }
    setSelectedImageFile(file);
    const objectUrl = URL.createObjectURL(file);
    setImagePreviewUrl(objectUrl);
    if (!imageAltText) {
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      setImageAltText(cleanName);
    }
  };

  // Submit from Image Modal (Upload Tab)
  const handleDialogUploadSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!selectedImageFile || isUploadingImage) return;

    setIsUploadingImage(true);
    setImageUploadError("");

    try {
      const result = await uploadImageFile(selectedImageFile);
      const alt = imageAltText.trim() || selectedImageFile.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      insertMarkdownAtCursor(`\n![${alt}](${result.url})\n`);
      setSelectedImageFile(null);
      setImagePreviewUrl(null);
      setImageAltText("");
      setIsImageDialogOpen(false);
    } catch (err: any) {
      setImageUploadError(err.message || "Failed to upload image.");
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Submit from Image Modal (URL Tab)
  const handleDialogUrlSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!directImageUrl.trim()) return;

    const alt = imageAltText.trim() || "image";
    insertMarkdownAtCursor(`\n![${alt}](${directImageUrl.trim()})\n`);
    setDirectImageUrl("");
    setImageAltText("");
    setIsImageDialogOpen(false);
  };

  // Handle Paste from Clipboard (Ctrl+V) in Editor
  const handleTextareaPaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        const file = item.getAsFile();
        if (!file) return;

        const placeholder = `\n![Uploading screenshot...]()\n`;
        insertMarkdownAtCursor(placeholder);
        setGlobalUploadStatus("Uploading image to Vercel Blob...");

        try {
          const result = await uploadImageFile(file);
          setContent((prev) =>
            prev.replace(placeholder, `\n![screenshot](${result.url})\n`)
          );
        } catch (err: any) {
          setContent((prev) => prev.replace(placeholder, ""));
          setError(err.message || "Failed to upload pasted image.");
        } finally {
          setGlobalUploadStatus("");
        }
        return;
      }
    }
  };

  // Handle Drag & Drop over Editor
  const handleTextareaDragOver = (e: React.DragEvent<HTMLTextAreaElement>) => {
    if (e.dataTransfer?.types?.includes("Files")) {
      e.preventDefault();
      setIsDraggingOverEditor(true);
    }
  };

  const handleTextareaDragLeave = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsDraggingOverEditor(false);
  };

  const handleTextareaDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    const files = e.dataTransfer?.files;
    if (!files || files.length === 0) return;

    const imageFiles = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (imageFiles.length === 0) return;

    e.preventDefault();
    setIsDraggingOverEditor(false);

    for (const file of imageFiles) {
      const placeholder = `\n![Uploading ${file.name}...]()\n`;
      insertMarkdownAtCursor(placeholder);
      setGlobalUploadStatus(`Uploading ${file.name} to Vercel Blob...`);

      try {
        const result = await uploadImageFile(file);
        const alt = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
        setContent((prev) =>
          prev.replace(placeholder, `\n![${alt}](${result.url})\n`)
        );
      } catch (err: any) {
        setContent((prev) => prev.replace(placeholder, ""));
        setError(err.message || `Failed to upload ${file.name}.`);
      } finally {
        setGlobalUploadStatus("");
      }
    }
  };

  // Load subjects
  useEffect(() => {
    fetch("/api/subjects")
      .then(async (r) => {
        if (!r.ok) return { subjects: [] };
        return r.json().catch(() => ({ subjects: [] }));
      })
      .then((data) => {
        setSubjects(data?.subjects || []);
        if (isEdit && initialArticle) {
          setSelectedSubjectId(initialArticle.subjectId);
          setModalParentSubjectId(initialArticle.subjectId);
          if (initialArticle.chapterId) {
            setSelectedChapterId(initialArticle.chapterId);
          }
        }
      })
      .catch((err) => {
        console.warn("Could not fetch subjects:", err);
      });
  }, [isEdit, initialArticle]);

  // Keep modalParentSubjectId in sync with selected subject
  useEffect(() => {
    if (selectedSubjectId) {
      setModalParentSubjectId(selectedSubjectId);
    }
  }, [selectedSubjectId]);

  // Auto-generate slug from title ONLY in create mode
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

  // Live preview with KaTeX, syntax highlighting, and Mermaid
  const preview = useMemo(() => {
    if (!content) return "";
    return renderMarkdown(content);
  }, [content]);

  // Dynamic Mermaid diagrams rendering on preview update
  useEffect(() => {
    if (previewRef.current) {
      renderMermaidDiagrams(previewRef.current);
    }
  }, [preview]);

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
    const prev = previewRef.current;
    prev.scrollTop =
      scrollRatio * (prev.scrollHeight - prev.clientHeight);
  };

  // Create new Subject via dialog
  const handleCreateSubjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubjectTitle.trim() || modalSubmitting) return;

    setModalSubmitting(true);
    setModalError("");

    try {
      const res = await fetch("/api/subjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newSubjectTitle.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setModalError(data.error || "Failed to create subject");
        setModalSubmitting(false);
        return;
      }

      const createdSubject = data.subject;
      let createdChapter = null;

      if (newSubjectFirstChapter.trim()) {
        const chRes = await fetch("/api/chapters", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: newSubjectFirstChapter.trim(),
            subjectId: createdSubject.id,
          }),
        });
        const chData = await chRes.json();
        if (chRes.ok) {
          createdChapter = chData.chapter;
        }
      }

      const newSubjectEntry: SubjectData = {
        id: createdSubject.id,
        title: createdSubject.title,
        slug: createdSubject.slug,
        chapters: createdChapter
          ? [
              {
                id: createdChapter.id,
                title: createdChapter.title,
                slug: createdChapter.slug,
              },
            ]
          : [],
      };

      setSubjects((prev) => [...prev, newSubjectEntry]);
      setSelectedSubjectId(createdSubject.id);
      if (createdChapter) {
        setSelectedChapterId(createdChapter.id);
      } else {
        setSelectedChapterId("");
      }

      // Reset & close
      setNewSubjectTitle("");
      setNewSubjectFirstChapter("");
      setIsCreateTopicOpen(false);
    } catch (err: any) {
      setModalError(err.message || "Failed to create subject");
    } finally {
      setModalSubmitting(false);
    }
  };

  // Create new Chapter via dialog
  const handleCreateChapterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChapterTitle.trim() || !modalParentSubjectId || modalSubmitting) return;

    setModalSubmitting(true);
    setModalError("");

    try {
      const res = await fetch("/api/chapters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newChapterTitle.trim(),
          subjectId: modalParentSubjectId,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setModalError(data.error || "Failed to create chapter");
        setModalSubmitting(false);
        return;
      }

      const createdChapter = data.chapter;

      setSubjects((prev) =>
        prev.map((s) =>
          s.id === modalParentSubjectId
            ? {
                ...s,
                chapters: [
                  ...s.chapters,
                  {
                    id: createdChapter.id,
                    title: createdChapter.title,
                    slug: createdChapter.slug,
                  },
                ],
              }
            : s
        )
      );

      setSelectedSubjectId(modalParentSubjectId);
      setSelectedChapterId(createdChapter.id);

      // Reset & close
      setNewChapterTitle("");
      setIsCreateTopicOpen(false);
    } catch (err: any) {
      setModalError(err.message || "Failed to create chapter");
    } finally {
      setModalSubmitting(false);
    }
  };

  // Save / Update Article
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
    if (!selectedSubjectId) {
      setError("Select a subject for your article");
      return;
    }

    setSaving(true);
    try {
      if (isEdit && initialArticle) {
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
        const body: any = {
          title: title.trim(),
          slug: slug.trim() || slugify(title),
          description: description.trim(),
          content,
          subjectId: selectedSubjectId,
        };

        if (selectedChapterId) {
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
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0"
            asChild
            title="Go Back"
          >
            <Link href={backHref}>
              <ArrowLeft size={15} />
            </Link>
          </Button>

          {/* Subject Select */}
          <Select
            value={selectedSubjectId || ""}
            onValueChange={(val) => {
              setSelectedSubjectId(val);
              setSelectedChapterId("");
            }}
          >
            <SelectTrigger className="w-[125px] sm:w-[155px] h-8 text-xs">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Subjects</SelectLabel>
                {subjects.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Chapter Select */}
          <Select
            value={selectedChapterId || ""}
            onValueChange={(val) => setSelectedChapterId(val)}
            disabled={!selectedSubjectId}
          >
            <SelectTrigger className="w-[125px] sm:w-[155px] h-8 text-xs">
              <SelectValue
                placeholder={
                  selectedSubjectId ? "Select Chapter" : "Choose Subject First"
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Chapters</SelectLabel>
                {chapters.length === 0 ? (
                  <div className="py-3 px-2 text-xs text-[var(--notion-text-muted)] text-center">
                    No chapters yet
                  </div>
                ) : (
                  chapters.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.title}
                    </SelectItem>
                  ))
                )}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Create Subject or Chapter Dialog */}
          <Dialog open={isCreateTopicOpen} onOpenChange={setIsCreateTopicOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1 text-xs px-2.5 shrink-0"
                title="Create New Subject or Chapter"
                onClick={() => {
                  setIsCreateTopicOpen(true);
                  setCreateModalTab(selectedSubjectId ? "chapter" : "subject");
                  setModalError("");
                }}
              >
                <Plus size={13} />
                <span className="hidden sm:inline">New Topic</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base">
                  <FolderPlus size={18} />
                  <span>Add Subject or Chapter</span>
                </DialogTitle>
                <DialogDescription>
                  Create a new subject track or a chapter under an existing subject.
                </DialogDescription>
              </DialogHeader>

              <Tabs
                value={createModalTab}
                onValueChange={(val) => {
                  setCreateModalTab(val as "subject" | "chapter");
                  setModalError("");
                }}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="chapter">New Chapter</TabsTrigger>
                  <TabsTrigger value="subject">New Subject</TabsTrigger>
                </TabsList>

                {modalError && (
                  <div className="mt-2 text-xs text-red-500 bg-red-500/10 p-2 rounded-md border border-red-500/20">
                    {modalError}
                  </div>
                )}

                {/* Chapter Creation Tab */}
                <TabsContent value="chapter" className="space-y-3 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--notion-text-muted)]">
                      Parent Subject *
                    </label>
                    <Select
                      value={modalParentSubjectId || ""}
                      onValueChange={setModalParentSubjectId}
                    >
                      <SelectTrigger className="w-full h-9 text-xs">
                        <SelectValue placeholder="Select parent subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--notion-text-muted)]">
                      Chapter Title *
                    </label>
                    <Input
                      placeholder="e.g. Caching Strategies, Indexing..."
                      value={newChapterTitle}
                      onChange={(e) => setNewChapterTitle(e.target.value)}
                      autoFocus
                      className="h-9 text-sm"
                    />
                  </div>
                  <DialogFooter className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsCreateTopicOpen(false)}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleCreateChapterSubmit}
                      disabled={
                        modalSubmitting ||
                        !newChapterTitle.trim() ||
                        !modalParentSubjectId
                      }
                    >
                      {modalSubmitting ? "Creating..." : "Create Chapter"}
                    </Button>
                  </DialogFooter>
                </TabsContent>

                {/* Subject Creation Tab */}
                <TabsContent value="subject" className="space-y-3 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--notion-text-muted)]">
                      Subject Title *
                    </label>
                    <Input
                      placeholder="e.g. Distributed Systems, Kubernetes..."
                      value={newSubjectTitle}
                      onChange={(e) => setNewSubjectTitle(e.target.value)}
                      autoFocus
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--notion-text-muted)]">
                      First Chapter (Optional)
                    </label>
                    <Input
                      placeholder="e.g. Architecture Overview (optional)"
                      value={newSubjectFirstChapter}
                      onChange={(e) => setNewSubjectFirstChapter(e.target.value)}
                      className="h-9 text-sm"
                    />
                    <p className="text-[11px] text-[var(--notion-text-muted)]">
                      Optionally create the first chapter under this subject right away.
                    </p>
                  </div>
                  <DialogFooter className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsCreateTopicOpen(false)}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleCreateSubjectSubmit}
                      disabled={modalSubmitting || !newSubjectTitle.trim()}
                    >
                      {modalSubmitting ? "Creating..." : "Create Subject"}
                    </Button>
                  </DialogFooter>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          {/* Insert Image Dialog */}
          <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1 text-xs px-2.5 shrink-0"
                title="Upload or Insert Image"
                onClick={() => {
                  setIsImageDialogOpen(true);
                  setImageUploadError("");
                  setSelectedImageFile(null);
                  setImagePreviewUrl(null);
                  setImageAltText("");
                  setDirectImageUrl("");
                }}
              >
                <ImagePlus size={13} />
                <span className="hidden sm:inline">Add Image</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[460px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base">
                  <ImageIcon size={18} />
                  <span>Insert Image</span>
                </DialogTitle>
                <DialogDescription>
                  Upload an image to Vercel Blob storage or insert an external image URL.
                </DialogDescription>
              </DialogHeader>

              <Tabs
                value={imageModalTab}
                onValueChange={(val) => {
                  setImageModalTab(val as "upload" | "url");
                  setImageUploadError("");
                }}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload Image</TabsTrigger>
                  <TabsTrigger value="url">Image URL</TabsTrigger>
                </TabsList>

                {imageUploadError && (
                  <div className="mt-2 text-xs text-red-500 bg-red-500/10 p-2.5 rounded-md border border-red-500/20 leading-relaxed">
                    {imageUploadError}
                  </div>
                )}

                {/* Upload Image Tab */}
                <TabsContent value="upload" className="space-y-3 pt-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelect(file);
                    }}
                    accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml,image/avif"
                    className="hidden"
                  />

                  {!selectedImageFile ? (
                    <div
                      className="image-dropzone"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.add("dragover");
                      }}
                      onDragLeave={(e) => {
                        e.currentTarget.classList.remove("dragover");
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.remove("dragover");
                        const file = e.dataTransfer.files?.[0];
                        if (file) handleFileSelect(file);
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                        <UploadCloud size={20} />
                      </div>
                      <div className="text-xs font-semibold text-[var(--notion-text-primary)]">
                        Click to browse or drag & drop image here
                      </div>
                      <div className="text-[11px] text-[var(--notion-text-muted)]">
                        Supports PNG, JPG, WebP, GIF, SVG (up to 10MB)
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="image-preview-wrapper">
                        {imagePreviewUrl && (
                          <img
                            src={imagePreviewUrl}
                            alt="Preview"
                            className="max-h-[160px] object-contain"
                          />
                        )}
                        <button
                          type="button"
                          className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-colors"
                          onClick={() => {
                            setSelectedImageFile(null);
                            setImagePreviewUrl(null);
                            setImageAltText("");
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          title="Remove file"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[var(--notion-text-muted)] px-1">
                        <span className="truncate max-w-[260px] font-medium text-[var(--notion-text-secondary)]">
                          {selectedImageFile.name}
                        </span>
                        <span>
                          {(selectedImageFile.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--notion-text-muted)]">
                      Alt Text / Caption (Optional)
                    </label>
                    <Input
                      placeholder="e.g. Architecture Diagram"
                      value={imageAltText}
                      onChange={(e) => setImageAltText(e.target.value)}
                      className="h-9 text-sm"
                    />
                  </div>

                  <DialogFooter className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsImageDialogOpen(false)}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleDialogUploadSubmit}
                      disabled={!selectedImageFile || isUploadingImage}
                      className="gap-1.5"
                    >
                      {isUploadingImage ? (
                        <>
                          <Loader2 size={13} className="animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <UploadCloud size={13} />
                          <span>Upload & Insert</span>
                        </>
                      )}
                    </Button>
                  </DialogFooter>
                </TabsContent>

                {/* Direct Image URL Tab */}
                <TabsContent value="url" className="space-y-3 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--notion-text-muted)]">
                      Image URL *
                    </label>
                    <Input
                      placeholder="https://example.com/image.png"
                      value={directImageUrl}
                      onChange={(e) => setDirectImageUrl(e.target.value)}
                      autoFocus
                      className="h-9 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--notion-text-muted)]">
                      Alt Text (Optional)
                    </label>
                    <Input
                      placeholder="e.g. Diagram description"
                      value={imageAltText}
                      onChange={(e) => setImageAltText(e.target.value)}
                      className="h-9 text-sm"
                    />
                  </div>

                  <DialogFooter className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsImageDialogOpen(false)}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleDialogUrlSubmit}
                      disabled={!directImageUrl.trim()}
                    >
                      Insert Image
                    </Button>
                  </DialogFooter>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>

        <div className="editor-toolbar-right">
          {globalUploadStatus && (
            <div className="flex items-center gap-1.5 text-xs text-blue-500 animate-pulse bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
              <Loader2 size={12} className="animate-spin" />
              <span>{globalUploadStatus}</span>
            </div>
          )}
          {error && <span className="editor-error">{error}</span>}
          <Button
            onClick={handleSave}
            disabled={saving}
            size="sm"
            className="h-8 gap-1.5 text-xs font-semibold px-3"
          >
            <Save size={13} />
            <span>
              {saving ? (isEdit ? "Updating..." : "Saving...") : isEdit ? "Update" : "Save"}
            </span>
          </Button>
        </div>
      </div>

      {/* Title Bar */}
      <div className="editor-meta-bar">
        <label htmlFor="article-title-input" className="editor-title-label">
          Title:
        </label>
        <Input
          id="article-title-input"
          type="text"
          placeholder="Enter article title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="editor-title-input border-0 shadow-none px-1 h-auto py-1 focus-visible:ring-0 text-base font-semibold"
        />
      </div>

      {/* Mobile Mode Switcher Bar */}
      <div className="editor-mobile-mode-bar">
        <span className="editor-mode-status-text">
          {mobileTab === "edit" ? "Markdown Editor" : "Live Preview"}
        </span>
        <div className="editor-mode-segmented">
          <button
            type="button"
            onClick={() => setMobileTab("edit")}
            className={`editor-mode-pill ${mobileTab === "edit" ? "active" : ""}`}
          >
            <PenLine size={13} />
            <span>Edit</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("preview")}
            className={`editor-mode-pill ${mobileTab === "preview" ? "active" : ""}`}
          >
            <Eye size={13} />
            <span>Preview</span>
          </button>
        </div>
      </div>

      {/* Split Pane */}
      <div
        ref={containerRef}
        className={`editor-split-container mobile-view-${mobileTab}`}
        style={{ cursor: isDragging ? "col-resize" : undefined }}
      >
        {/* Left: Editor */}
        <div
          className="editor-pane editor-pane-left"
          style={{ width: `${splitPercent}%` }}
        >
          <div className="editor-with-gutter relative">
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
              onPaste={handleTextareaPaste}
              onDrop={handleTextareaDrop}
              onDragOver={handleTextareaDragOver}
              onDragLeave={handleTextareaDragLeave}
              onScroll={handleEditorScroll}
              className="editor-textarea"
              placeholder="Write your markdown here... (Drag & drop or paste images here)"
              spellCheck={false}
            />
            {isDraggingOverEditor && (
              <div className="editor-drop-overlay">
                <UploadCloud size={36} className="text-blue-500 animate-bounce mb-2" />
                <span className="font-semibold text-sm text-white">
                  Drop image to upload to Vercel Blob
                </span>
                <span className="text-xs text-white/70 mt-1">
                  Supports PNG, JPG, WebP, GIF, SVG
                </span>
              </div>
            )}
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
          >
            {title && (
              <div className="editor-preview-doc-header">
                <h1 className="editor-preview-doc-title">{title}</h1>
              </div>
            )}
            <div
              className="prose prose-neutral dark:prose-invert max-w-none text-[var(--notion-text-body)]"
              dangerouslySetInnerHTML={{ __html: preview }}
            />

            <div className="editor-mobile-back-to-edit-container">
              <Button
                variant="default"
                size="sm"
                className="rounded-full shadow-lg gap-2 text-xs font-semibold px-4 py-2"
                onClick={() => setMobileTab("edit")}
              >
                <PenLine size={14} />
                <span>Back to Editor</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
