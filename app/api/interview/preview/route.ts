import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Memory cache for questions
const dbCache: Record<string, any[]> = {};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetPath = searchParams.get("path"); // e.g. "/interview/frontend-ui/JS/closures"

    if (!targetPath) {
      return NextResponse.json(
        { error: "Missing path parameter" },
        { status: 400 },
      );
    }

    const cleanPath = targetPath
      .replace(/^\/interview\//, "")
      .replace(/^\//, "");
    const segments = cleanPath.split("/");

    if (segments.length < 2) {
      return NextResponse.json(
        { error: "Invalid interview path" },
        { status: 400 },
      );
    }

    const slug = segments.pop()!;
    const topicRelPath = segments.join("/");

    const dataFilePath = path.join(
      process.cwd(),
      "app",
      "interview",
      ...segments,
      "questions-data.json",
    );

    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json(
        { error: "Topic database not found" },
        { status: 404 },
      );
    }

    let questions = dbCache[topicRelPath];
    if (!questions) {
      const raw = fs.readFileSync(dataFilePath, "utf8");
      questions = JSON.parse(raw);
      dbCache[topicRelPath] = questions;
    }

    const question = questions.find((q: any) => q.slug === slug);

    if (!question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 },
      );
    }

    const lines = question.content.split("\n");
    const title = lines[0].replace(/^#\s*/, "");
    const body = lines.slice(1).join("\n");

    return NextResponse.json({
      title,
      slug,
      content: question.content,
      body,
      category: segments
        .map((s) => s.replace(/-/g, " "))
        .join(" → ")
        .toUpperCase(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 },
    );
  }
}
