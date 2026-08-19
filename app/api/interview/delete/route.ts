import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { slug, topicPath, topic } = await req.json();

    const targetTopicPath = topicPath || topic;

    if (!slug || !targetTopicPath) {
      return NextResponse.json(
        { error: "Missing slug or topicPath" },
        { status: 400 }
      );
    }

    // Delete from database via Prisma
    try {
      await prisma.article.delete({
        where: {
          topicPath_slug: {
            topicPath: targetTopicPath,
            slug,
          },
        },
      });
    } catch (dbErr) {
      console.warn("Prisma article delete note (may already have been deleted):", dbErr);
    }

    revalidatePath(`/interview/${targetTopicPath}`);
    revalidatePath(`/interview/${targetTopicPath}/${slug}`);

    return NextResponse.json({
      success: true,
      message: "Article deleted successfully from database!",
      slug,
      topicPath: targetTopicPath,
    });
  } catch (error: any) {
    console.error("Failed to delete article:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
