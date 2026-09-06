import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { renderMarkdown } from "@/lib/markdown";
import { revalidatePath } from "next/cache";

interface Params {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/articles/[id]
 */
export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const article = await prisma.article.findUnique({
    where: { id },
    include: {
      subject: true,
      chapter: true,
    },
  });

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json({ article });
}

/**
 * PUT /api/articles/[id]
 * Update an article.
 */
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, slug, description, content, subjectId, chapterId } = body;

    const existing = await prisma.article.findUnique({
      where: { id },
      include: { subject: { select: { slug: true } } },
    });
    if (!existing) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    const updateData: any = {};
    if (title !== undefined) updateData.title = title.trim();
    if (slug !== undefined) updateData.slug = slug;
    if (description !== undefined) updateData.description = description;
    if (subjectId !== undefined) updateData.subjectId = subjectId;
    if (chapterId !== undefined) updateData.chapterId = chapterId || null;

    // If content changed, re-render HTML with rich markdown (KaTeX math, syntax highlighting, Mermaid)
    if (content !== undefined) {
      updateData.content = content;
      updateData.html = renderMarkdown(content);
    }

    const article = await prisma.article.update({
      where: { id },
      data: updateData,
      include: { subject: { select: { slug: true } } },
    });

    // Revalidate
    try {
      revalidatePath(
        `/articles/${article.subject.slug}/${article.slug}`
      );
      revalidatePath(`/${article.subject.slug}`);
      // Also revalidate old path if subject changed
      if (existing.subject.slug !== article.subject.slug) {
        revalidatePath(`/${existing.subject.slug}`);
      }
    } catch {
      // safe to ignore outside request context
    }

    return NextResponse.json({ success: true, article });
  } catch (error: any) {
    console.error("PUT /api/articles/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/articles/[id]
 */
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const existing = await prisma.article.findUnique({
      where: { id },
      include: { subject: { select: { slug: true } } },
    });
    if (!existing) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    await prisma.article.delete({ where: { id } });

    try {
      revalidatePath(`/${existing.subject.slug}`);
    } catch {
      // safe to ignore
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE /api/articles/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
