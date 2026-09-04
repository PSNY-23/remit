import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/chapters
 * Creates a new chapter under a subject.
 * Body: { title: string, subjectId: string, slug?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, subjectId, slug } = body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    if (!subjectId) {
      return NextResponse.json(
        { error: "subjectId is required" },
        { status: 400 }
      );
    }

    // Verify subject exists
    const subject = await prisma.subject.findUnique({
      where: { id: subjectId },
    });
    if (!subject) {
      return NextResponse.json(
        { error: "Subject not found" },
        { status: 404 }
      );
    }

    const chapterSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[&]/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    // Check for duplicate
    const existing = await prisma.chapter.findUnique({
      where: { subjectId_slug: { subjectId, slug: chapterSlug } },
    });
    if (existing) {
      return NextResponse.json(
        { error: "A chapter with this slug already exists in this subject" },
        { status: 409 }
      );
    }

    const maxOrder = await prisma.chapter.aggregate({
      where: { subjectId },
      _max: { order: true },
    });

    const chapter = await prisma.chapter.create({
      data: {
        title: title.trim(),
        slug: chapterSlug,
        subjectId,
        order: (maxOrder._max.order ?? -1) + 1,
      },
    });

    return NextResponse.json({ chapter }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/chapters error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
