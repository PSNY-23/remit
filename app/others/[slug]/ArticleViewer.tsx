'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ArticleViewerProps {
  slug: string;
  initialContent: string;
  topicPath: string;
}

export default function ArticleViewer({ slug, initialContent, topicPath }: ArticleViewerProps) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [editorText, setEditorText] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [previewTab, setPreviewTab] = useState<'edit' | 'preview'>('edit');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const lines = content.split('\n');
  const title = lines[0].replace(/^#\s*/, '');
  const body = lines.slice(1).join('\n');

  async function handleSave() {
    setIsSaving(true);
    setSaveStatus('idle');

    try {
      const res = await fetch('/api/interview/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, content: editorText, topicPath }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setContent(editorText);
        setSaveStatus('success');
        setTimeout(() => {
          setIsEditing(false);
          setSaveStatus('idle');
        }, 800);
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      'Are you sure you want to delete "' + title + '"?\n\nThis action will remove the article permanently from the database.'
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const res = await fetch('/api/interview/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, topicPath }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        router.push(topicPath === 'others' ? '/others' : '/interview/' + topicPath);
      } else {
        alert(data.error || 'Failed to delete article');
        setIsDeleting(false);
      }
    } catch (err) {
      console.error(err);
      alert('Network error while deleting article');
      setIsDeleting(false);
    }
  }

  function insertText(text: string) {
    setEditorText((prev) => {
      const textarea = textareaRef.current || (document.getElementById('article-editor-textarea') as HTMLTextAreaElement);
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

  function insertFormatting(prefix: string, suffix: string = '') {
    const textarea = textareaRef.current || (document.getElementById('article-editor-textarea') as HTMLTextAreaElement);
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = editorText.substring(start, end) || 'text';
    const replacement = prefix + selected + suffix;

    const newText = editorText.substring(0, start) + replacement + editorText.substring(end);
    setEditorText(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
    }, 50);
  }

  async function uploadImageFile(file: File) {
    setIsUploading(true);
    setUploadMessage('⏳ Uploading to Vercel Blob...');
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

  const backUrl = topicPath === 'others' ? '/others' : `/interview/${topicPath}`;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem 1rem' }}>
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid rgba(125,125,125,0.2)',
        }}
      >
        <Link
          href={backUrl}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            color: 'var(--nextra-primary-hue, #3b82f6)',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          ← Back to Others Overview
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {!isEditing ? (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => {
                  setEditorText(content);
                  setIsEditing(true);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.9rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                ✏️ Edit Article
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: isDeleting ? 'wait' : 'pointer',
                }}
              >
                {isDeleting ? 'Deleting...' : '🗑️ Delete'}
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setIsEditing(false)}
                disabled={isSaving || isUploading || isDeleting}
                style={{
                  padding: '0.45rem 0.9rem',
                  background: 'rgba(125, 125, 125, 0.1)',
                  color: 'inherit',
                  border: '1px solid rgba(125, 125, 125, 0.3)',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: (isSaving || isUploading || isDeleting) ? 'not-allowed' : 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving || isUploading || isDeleting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 1rem',
                  background: saveStatus === 'success' ? '#10b981' : '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: (isSaving || isUploading || isDeleting) ? 'wait' : 'pointer',
                }}
              >
                {isSaving ? 'Saving...' : saveStatus === 'success' ? '✓ Saved!' : '💾 Save Changes'}
              </button>
            </div>
          )}
        </div>
      </div>

      {isEditing ? (
        <div style={{ border: '1px solid rgba(125,125,125,0.25)', borderRadius: '8px', overflow: 'hidden' }}>
          <div
            style={{
              padding: '0.6rem 1rem',
              background: 'rgba(125,125,125,0.08)',
              borderBottom: '1px solid rgba(125,125,125,0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button type="button" onClick={() => insertFormatting('**', '**')} style={btnStyle}><b>B</b></button>
              <button type="button" onClick={() => insertFormatting('*', '*')} style={btnStyle}><i>I</i></button>
              <button type="button" onClick={() => insertFormatting('\n## ', '\n')} style={btnStyle}>H2</button>
              <button type="button" onClick={() => insertFormatting('\n### ', '\n')} style={btnStyle}>H3</button>
              <button type="button" onClick={() => insertFormatting('`', '`')} style={btnStyle}>`code`</button>
              <button type="button" onClick={() => insertFormatting('\n```typescript\n', '\n```\n')} style={btnStyle}>```ts</button>
              <button type="button" onClick={() => insertFormatting('\n> **💡 Note:** ', '\n')} style={btnStyle}>💡 Note</button>
              <button type="button" onClick={() => insertFormatting('\n| Feature | Description |\n| :--- | :--- |\n| Item 1 | Details |\n')} style={btnStyle}>Table</button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                style={{
                  ...btnStyle,
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#3b82f6',
                  fontWeight: 600,
                }}
              >
                {isUploading ? '⏳ Uploading...' : '🖼️ Insert Image (Vercel Blob)'}
              </button>
              {uploadMessage && (
                <span style={{ fontSize: '0.8rem', color: uploadMessage.startsWith('✓') ? '#10b981' : '#3b82f6', fontWeight: 600 }}>
                  {uploadMessage}
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

          <div style={{ padding: '1rem', position: 'relative' }}>
            {previewTab === 'edit' ? (
              <div>
                <textarea
                  id="article-editor-textarea"
                  ref={textareaRef}
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  onPaste={handlePaste}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  rows={24}
                  placeholder="Type markdown content here... (Paste screenshots directly with Ctrl+V / Cmd+V or drag & drop image files!)"
                  style={{
                    width: '100%',
                    fontFamily: 'monospace',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    padding: '0.75rem',
                    border: '1px solid rgba(125,125,125,0.2)',
                    borderRadius: '6px',
                    background: 'transparent',
                    color: 'inherit',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                />
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.4rem' }}>
                  💡 <b>Tip:</b> Paste screenshots directly (Ctrl+V / Cmd+V), drag & drop image files, or click <b>🖼️ Insert Image</b>.
                </div>
              </div>
            ) : (
              <div
                style={{ minHeight: '400px', padding: '1rem' }}
                dangerouslySetInnerHTML={{ __html: formatMarkdown(editorText) }}
              />
            )}
          </div>
        </div>
      ) : (
        <article className="nextra-content">
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
            {title}
          </h1>

          <div
            style={{ lineHeight: 1.75, fontSize: '1.05rem' }}
            dangerouslySetInnerHTML={{ __html: formatMarkdown(body) }}
          />
        </article>
      )}

      <div style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(125,125,125,0.2)' }}>
        <Link
          href={backUrl}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.95rem',
            color: 'var(--nextra-primary-hue, #3b82f6)',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          ← Return to Others Overview
        </Link>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: '0.25rem 0.55rem',
  fontSize: '0.8rem',
  background: 'rgba(125,125,125,0.12)',
  border: '1px solid rgba(125,125,125,0.2)',
  borderRadius: '4px',
  color: 'inherit',
  cursor: 'pointer',
};

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
