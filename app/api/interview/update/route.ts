import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import path from "path";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { slug, content, topicPath, topic, title, category } = await req.json();

    const targetTopicPath = topicPath || topic || "frontend-ui/JS";

    if (!slug || typeof content !== "string") {
      return NextResponse.json(
        { error: "Missing slug or content" },
        { status: 400 }
      );
    }

    // Extract title from markdown first line if not explicitly provided
    const lines = content.split("\n");
    const extractedTitle = lines[0]?.replace(/^#\s*/, "").trim();
    const finalTitle = title?.trim() || extractedTitle || slug;
    const finalCategory = category?.trim() || path.basename(targetTopicPath);

    // Update in database directly via Prisma
    const updatedArticle = await prisma.article.upsert({
      where: {
        topicPath_slug: {
          topicPath: targetTopicPath,
          slug,
        },
      },
      update: {
        content,
        title: finalTitle,
        ...(category ? { category: finalCategory } : {}),
      },
      create: {
        slug,
        topicPath: targetTopicPath,
        title: finalTitle,
        category: finalCategory,
        content,
      },
    });

    revalidatePath(`/interview/${targetTopicPath}/${slug}`);
    revalidatePath(`/interview/${targetTopicPath}`);
    revalidatePath(`/interview`);

    return NextResponse.json({
      success: true,
      message: "Article updated successfully in database!",
      slug,
      topicPath: targetTopicPath,
      article: updatedArticle,
    });
  } catch (error: any) {
    console.error("Failed to update article:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
