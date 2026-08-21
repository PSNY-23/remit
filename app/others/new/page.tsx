'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewOtherArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Guides & Tooling');
  const [content, setContent] = useState(
    '## Summary\n\nExplain the guide or tooling overview here...\n\n---\n\n## Implementation & Configuration\n\n```bash\n# Example command or configuration\n```\n\n---\n\n## Key Takeaways & Best Practices\n- Point 1\n- Point 2\n'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [previewTab, setPreviewTab] = useState<'edit' | 'preview'>('edit');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setTitle(val);
    const autoSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    setSlug(autoSlug);
  }

  function insertText(text: string) {
    setContent((prev) => {
      const textarea = textareaRef.current || (document.getElementById('new-article-textarea') as HTMLTextAreaElement);
      if (!textarea) return prev + '\n' + text;

      const start = textarea.selectionStart ?? prev.length;
      const end = textarea.selectionEnd ?? prev.length;
      const next = prev.substring(0, start) + text + prev.substring(end);

      setTimeout(() => {
        if (textarea) {
          textarea.focus();
          textarea.setSelectionRange(start + text.length, start + text.length);
        }
      }, 50);
      return next;
    });
  }

  async function uploadImageFile(file: File) {
    setIsUploading(true);
    setUploadMessage('⏳ Uploading image to Vercel Blob...');
    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('/api/interview/upload-image', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (res.ok && json.url) {
        const alt = file.name ? file.name.replace(/\.[^/.]+$/, '') : 'Image';
        const imageMarkdown = '\n![' + alt + '](' + json.url + ')\n';
        insertText(imageMarkdown);
        setUploadMessage('✓ Uploaded to Vercel Blob!');
        setTimeout(() => setUploadMessage(''), 2500);
      } else {
        alert(json.error || 'Failed to upload image');
        setUploadMessage('');
      }
    } catch (err) {
      console.error('Image upload failed:', err);
      alert('Network error while uploading image');
      setUploadMessage('');
    } finally {
      setIsUploading(false);
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith('image/')) {
        const file = items[i].getAsFile();
        if (file) {
          e.preventDefault();
          uploadImageFile(file);
          return;
        }
      }
    }
  }

  function handleDrop(e: React.DragEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    if (files && files.length > 0 && files[0].type.startsWith('image/')) {
      uploadImageFile(files[0]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !content.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const fullContent = '# ' + title.trim() + '\n\n' + content;
      const res = await fetch('/api/interview/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim(),
          category: category.trim(),
          content: fullContent,
          topicPath: 'others',
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/others/' + data.slug);
      } else {
        setErrorMessage(data.error || 'Failed to create article');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error occurred');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            uploadImageFile(e.target.files[0]);
            e.target.value = '';
          }
        }}
      />

      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/others" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 500 }}>
          ← Back to Others Overview
        </Link>
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
        ➕ Add New Article / Guide (Others)
      </h1>

      {errorMessage && (
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderRadius: '6px', marginBottom: '1.5rem' }}>
          ⚠️ {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Article Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="e.g. Setting up Docker and Turborepo"
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid rgba(125,125,125,0.3)', background: 'transparent', color: 'inherit' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>URL Slug *</label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="e.g. setting-up-docker-and-turborepo"
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid rgba(125,125,125,0.3)', background: 'transparent', color: 'inherit' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Category / Topic Group</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Guides & Tooling, Infrastructure, CI/CD"
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid rgba(125,125,125,0.3)', background: 'transparent', color: 'inherit' }}
          />
        </div>

        <div style={{ border: '1px solid rgba(125,125,125,0.25)', borderRadius: '8px', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <div style={{ padding: '0.6rem 1rem', background: 'rgba(125,125,125,0.08)', borderBottom: '1px solid rgba(125,125,125,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                style={{
                  padding: '0.3rem 0.75rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#3b82f6',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '4px',
                  cursor: isUploading ? 'wait' : 'pointer',
                }}
              >
                {isUploading ? '⏳ Uploading...' : '🖼️ Insert Image (Vercel Blob)'}
              </button>
              {uploadMessage ? (
                <span style={{ fontSize: '0.8rem', color: uploadMessage.startsWith('✓') ? '#10b981' : '#3b82f6', fontWeight: 600 }}>
                  {uploadMessage}
                </span>
              ) : (
                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                  (Paste screenshots via Ctrl+V / Cmd+V or drag & drop!)
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <button
                type="button"
                onClick={() => setPreviewTab('edit')}
                style={{
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: previewTab === 'edit' ? '#3b82f6' : 'transparent',
                  color: previewTab === 'edit' ? '#fff' : 'inherit',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Editor
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('preview')}
                style={{
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: previewTab === 'preview' ? '#3b82f6' : 'transparent',
                  color: previewTab === 'preview' ? '#fff' : 'inherit',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Live Preview
              </button>
            </div>
          </div>

          <div style={{ padding: '1rem' }}>
            {previewTab === 'edit' ? (
              <textarea
                id="new-article-textarea"
                ref={textareaRef}
                rows={18}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onPaste={handlePaste}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                placeholder="Type markdown content here... (Paste screenshots directly with Ctrl+V / Cmd+V or drag & drop image files!)"
                style={{ width: '100%', fontFamily: 'monospace', fontSize: '0.95rem', lineHeight: '1.6', border: '1px solid rgba(125,125,125,0.2)', borderRadius: '6px', background: 'transparent', color: 'inherit', padding: '0.75rem' }}
              />
            ) : (
              <div
                style={{ minHeight: '300px', padding: '0.5rem' }}
                dangerouslySetInnerHTML={{ __html: formatMarkdown('# ' + (title || 'Title Preview') + '\n\n' + content) }}
              />
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Link href="/others" style={{ padding: '0.6rem 1.25rem', borderRadius: '6px', border: '1px solid rgba(125,125,125,0.3)', color: 'inherit', textDecoration: 'none' }}>
            Cancel
          </Link>
          <button type="submit" disabled={isSubmitting || isUploading} style={{ padding: '0.6rem 1.5rem', borderRadius: '6px', background: '#3b82f6', color: '#fff', border: 'none', fontWeight: 600, cursor: (isSubmitting || isUploading) ? 'wait' : 'pointer' }}>
            {isSubmitting ? 'Publishing...' : '🚀 Publish Article'}
          </button>
        </div>
      </form>
    </div>
  );
}

function formatMarkdown(md: string): string {
  if (!md) return '';
  let html = md.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div style="margin: 1.5rem 0; text-align: center;"><img src="$2" alt="$1" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(125,125,125,0.25); box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: inline-block;" /><div style="font-size: 0.82rem; color: #94a3b8; margin-top: 0.4rem;">$1</div></div>');

  // Code blocks
  html = html.replace(/\`\`\`([a-z]*)\n([\s\S]*?)\`\`\`/g, (_, lang, code) => `<pre style="background: rgba(125,125,125,0.1); padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 0.95rem; margin: 1.5rem 0; border: 1px solid rgba(125,125,125,0.2); overflow-x: auto;"><code>${code}</code></pre>`);
  html = html.replace(/\`([^\`]+)\`/g, '<code style="background: rgba(125,125,125,0.15); padding: 0.15rem 0.35rem; border-radius: 4px; font-family: monospace; font-size: 0.9em;">$1</code>');
  html = html.replace(/^### (.*$)/gim, '<h3 style="font-size: 1.3rem; font-weight: 700; margin: 1.5rem 0 0.75rem;">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 style="font-size: 1.6rem; font-weight: 700; margin: 2rem 0 1rem; border-bottom: 1px solid rgba(125,125,125,0.2); padding-bottom: 0.5rem;">$1</h2>');
  
  // Tables
  html = html.replace(/\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g, (_, header, rows) => {
    const ths = header.split('|').map((h: string) => h.trim()).filter(Boolean).map((h: string) => `<th style="border: 1px solid rgba(125,125,125,0.25); padding: 0.6rem 1rem; background: rgba(125,125,125,0.08);">${h}</th>`).join('');
    const trs = rows.trim().split('\n').map((row: string) => {
      const tds = row.split('|').map((td: string) => td.trim()).filter(Boolean).map((td: string) => `<td style="border: 1px solid rgba(125,125,125,0.2); padding: 0.6rem 1rem;">${td}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');
    return `<div style="overflow-x: auto; margin: 1.5rem 0;"><table style="width: 100%; border-collapse: collapse; text-align: left;"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  });
  
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/^&gt;\s+(.*$)/gim, '<blockquote style="border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; margin: 1.25rem 0; background: rgba(59, 130, 246, 0.05); border-radius: 0 6px 6px 0; font-style: italic;">$1</blockquote>');
  html = html.replace(/^---$/gim, '<hr style="border: 0; border-top: 1px solid rgba(125,125,125,0.2); margin: 2rem 0;" />');
  html = html.replace(/\n\n/g, '<br /><br />');
  return html;
}
