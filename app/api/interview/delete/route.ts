import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { slug, topicPath, topic } = await req.json();

    const targetTopicPath = topicPath || topic;

    if (!slug || !targetTopicPath) {
      return NextResponse.json(
        { error: "Missing slug or topicPath" },
        { status: 400 },
      );
    }

    const topicDir = path.join(
      process.cwd(),
      "app",
      "interview",
      ...targetTopicPath.split("/"),
    );

    const dataFilePath = path.join(topicDir, "questions-data.json");
    const mainPagePath = path.join(topicDir, "page.mdx");

    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json(
        { error: `Database file at '${targetTopicPath}' not found` },
        { status: 404 },
      );
    }

    let questions: any[] = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    const initialCount = questions.length;

    questions = questions.filter((q) => q.slug !== slug);

    if (questions.length === initialCount) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    // Save updated database
    fs.writeFileSync(dataFilePath, JSON.stringify(questions, null, 2), "utf8");

    // Reconstruct page.mdx with asIndexPage: true and clean sequential numbering
    const topicTitle = path.basename(topicDir);
    const categories = [
      ...new Set(questions.map((q) => q.category || topicTitle)),
    ];

    let pageMdx = `---\nasIndexPage: true\n---\n\n# ${topicTitle}\n\nA comprehensive preparation handbook covering core concepts, architectural patterns, and production trade-offs. Click on any question to view its in-depth explanation and code examples.\n\n<div style={{ margin: "1.25rem 0" }}>\n  <a\n    href="/interview/${targetTopicPath}/new"\n    style={{\n      display: "inline-flex",\n      alignItems: "center",\n      gap: "0.5rem",\n      padding: "0.6rem 1.2rem",\n      backgroundColor: "#3b82f6",\n      color: "#ffffff",\n      borderRadius: "8px",\n      fontWeight: 600,\n      fontSize: "0.95rem",\n      textDecoration: "none",\n      boxShadow: "0 2px 4px rgba(59, 130, 246, 0.2)"\n    }}\n  >\n    ➕ Add New Question / Article\n  </a>\n</div>\n\n---\n\n`;

    categories.forEach((cat) => {
      pageMdx += `## ${cat}\n\n`;
      const catQuestions = questions.filter(
        (q) => (q.category || topicTitle) === cat,
      );
      catQuestions.forEach((q, i) => {
        pageMdx += `${i + 1}. [${q.title}](/interview/${targetTopicPath}/${q.slug})\n`;
      });
      pageMdx += `\n---\n\n`;
    });

    fs.writeFileSync(mainPagePath, pageMdx, "utf8");

    revalidatePath(`/interview/${targetTopicPath}`);
    revalidatePath(`/interview/${targetTopicPath}/${slug}`);

    return NextResponse.json({
      success: true,
      message: "Article deleted successfully!",
      slug,
      topicPath: targetTopicPath,
    });
  } catch (error: any) {
    console.error("Failed to delete article:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
