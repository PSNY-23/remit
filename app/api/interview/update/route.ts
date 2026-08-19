import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { slug, content, topicPath, topic } = await req.json();

    const targetTopicPath = topicPath || topic || "frontend-ui/JS";

    if (!slug || typeof content !== "string") {
      return NextResponse.json(
        { error: "Missing slug or content" },
        { status: 400 },
      );
    }

    const dataFilePath = path.join(
      process.cwd(),
      "app",
      "interview",
      ...targetTopicPath.split("/"),
      "questions-data.json",
    );

    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json(
        { error: `Database file at '${targetTopicPath}' not found` },
        { status: 404 },
      );
    }

    const fileRaw = fs.readFileSync(dataFilePath, "utf8");
    const questions = JSON.parse(fileRaw);

    const questionIndex = questions.findIndex((q: any) => q.slug === slug);

    if (questionIndex === -1) {
      questions.push({ slug, content });
    } else {
      questions[questionIndex].content = content;
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(questions, null, 2), "utf8");

    revalidatePath(`/interview/${targetTopicPath}/${slug}`);
    revalidatePath(`/interview/${targetTopicPath}`);

    return NextResponse.json({
      success: true,
      message: "Article updated successfully!",
      slug,
      topicPath: targetTopicPath,
    });
  } catch (error: any) {
    console.error("Failed to update article:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
