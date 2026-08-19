import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
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
        { status: 400 },
      );
    }

    const cleanSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const topicDir = path.join(
      process.cwd(),
      "app",
      "interview",
      ...targetTopicPath.split("/"),
    );
    if (!fs.existsSync(topicDir)) {
      fs.mkdirSync(topicDir, { recursive: true });
    }

    const dataFilePath = path.join(topicDir, "questions-data.json");
    const mainPagePath = path.join(topicDir, "page.mdx");

    let questions: any[] = [];
    if (fs.existsSync(dataFilePath)) {
      questions = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    }

    const existingIndex = questions.findIndex((q) => q.slug === cleanSlug);
    if (existingIndex !== -1) {
      return NextResponse.json(
        { error: "An article with this slug already exists." },
        { status: 409 },
      );
    }

    // Determine category: if category is empty or generic 'Core Concepts', adopt the existing category of the topic
    const topicTitle = path.basename(topicDir);
    let defaultCat = topicTitle;
    if (questions.length > 0) {
      const existingCats = [
        ...new Set(questions.map((q) => q.category).filter(Boolean)),
      ];
      if (existingCats.length === 1) {
        defaultCat = existingCats[0];
      } else {
        defaultCat = questions[questions.length - 1].category || topicTitle;
      }
    }

    const finalCategory =
      category && category.trim() && category.trim() !== "Core Concepts"
        ? category.trim()
        : defaultCat;

    const fullContent = content.startsWith("#")
      ? content
      : `# ${title}\n\n${content}`;

    questions.push({
      title: title.trim(),
      slug: cleanSlug,
      category: finalCategory,
      content: fullContent,
    });

    fs.writeFileSync(dataFilePath, JSON.stringify(questions, null, 2), "utf8");

    // Reconstruct clean page.mdx with asIndexPage: true and clean title
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
    revalidatePath(`/interview/${targetTopicPath}/${cleanSlug}`);

    return NextResponse.json({
      success: true,
      message: "Article created successfully!",
      slug: cleanSlug,
      topicPath: targetTopicPath,
    });
  } catch (error: any) {
    console.error("Failed to create article:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
