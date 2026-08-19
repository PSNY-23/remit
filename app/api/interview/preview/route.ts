import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetPath = searchParams.get("path"); // e.g. "/interview/frontend-ui/JS/closures"

    if (!targetPath) {
      return NextResponse.json(
        { error: "Missing path parameter" },
        { status: 400 }
      );
    }

    const cleanPath = targetPath
      .replace(/^\/interview\//, "")
      .replace(/^\//, "");
    const segments = cleanPath.split("/");

    if (segments.length < 2) {
      return NextResponse.json(
        { error: "Invalid interview path" },
        { status: 400 }
      );
    }

    const slug = segments.pop()!;
    const topicPath = segments.join("/");

    const article = await prisma.article.findUnique({
      where: {
        topicPath_slug: {
          topicPath,
          slug,
        },
      },
    });

    if (!article) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    const lines = article.content.split("\n");
    const title = lines[0].replace(/^#\s*/, "") || article.title;
    const body = lines.slice(1).join("\n");

    return NextResponse.json({
      title: article.title || title,
      slug: article.slug,
      content: article.content,
      body,
      category: article.category,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
