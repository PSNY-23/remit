import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import path from "path";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { title, slug, category, content, topicPath, topic } =
      await req.json();

    const targetTopicPath = topicPath || topic || "frontend-ui/JS";

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    const cleanSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const topicTitle = path.basename(targetTopicPath);
    const finalCategory =
      category && category.trim() && category.trim() !== "Core Concepts"
        ? category.trim()
        : topicTitle;

    const fullContent = content.startsWith("#")
      ? content
      : `# ${title}\n\n${content}`;

    // Check for existing article
    const existing = await prisma.article.findUnique({
      where: {
        topicPath_slug: {
          topicPath: targetTopicPath,
          slug: cleanSlug,
        },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "An article with this slug already exists in this topic." },
        { status: 409 }
      );
    }

    // Get current max order in this topic
    const count = await prisma.article.count({
      where: { topicPath: targetTopicPath },
    });

    // Save directly to database
    await prisma.article.create({
      data: {
        title: title.trim(),
        slug: cleanSlug,
        topicPath: targetTopicPath,
        category: finalCategory,
        content: fullContent,
        order: count,
      },
    });

    revalidatePath(`/interview/${targetTopicPath}`);
    revalidatePath(`/interview/${targetTopicPath}/${cleanSlug}`);

    return NextResponse.json({
      success: true,
      message: "Article created successfully in database!",
      slug: cleanSlug,
      topicPath: targetTopicPath,
    });
  } catch (error: any) {
    console.error("Failed to create article:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
