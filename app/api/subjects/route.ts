import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/subjects
 * Returns all subjects with their chapters and article counts.
 */
export async function GET() {
  const subjects = await prisma.subject.findMany({
    include: {
      chapters: {
        include: {
          _count: { select: { articles: true } },
        },
        orderBy: { order: "asc" },
      },
      _count: { select: { articles: true } },
    },
    orderBy: { order: "asc" },
  });

  return NextResponse.json({ subjects });
}

/**
 * POST /api/subjects
 * Creates a new subject.
 * Body: { title: string, slug?: string, description?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, description } = body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const subjectSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[&]/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    // Check for duplicate
    const existing = await prisma.subject.findUnique({
      where: { slug: subjectSlug },
    });
    if (existing) {
      return NextResponse.json(
        { error: "A subject with this slug already exists" },
        { status: 409 }
      );
    }

    const maxOrder = await prisma.subject.aggregate({ _max: { order: true } });

    const subject = await prisma.subject.create({
      data: {
        title: title.trim(),
        slug: subjectSlug,
        description: description || "",
        order: (maxOrder._max.order ?? -1) + 1,
      },
    });

    return NextResponse.json({ subject }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/subjects error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
