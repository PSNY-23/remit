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

    // Update in database directly via Prisma
    await prisma.article.upsert({
      where: {
        topicPath_slug: {
          topicPath: targetTopicPath,
          slug,
        },
      },
      update: {
        content,
        ...(title ? { title: title.trim() } : {}),
        ...(category ? { category: category.trim() } : {}),
      },
      create: {
        slug,
        topicPath: targetTopicPath,
        title: title?.trim() || slug,
        category: category?.trim() || path.basename(targetTopicPath),
        content,
      },
    });

    revalidatePath(`/interview/${targetTopicPath}/${slug}`);
    revalidatePath(`/interview/${targetTopicPath}`);

    return NextResponse.json({
      success: true,
      message: "Article updated successfully in database!",
      slug,
      topicPath: targetTopicPath,
    });
  } catch (error: any) {
    console.error("Failed to update article:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
