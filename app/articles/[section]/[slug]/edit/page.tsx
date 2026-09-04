import { notFound } from "next/navigation";
import { getArticle } from "@/lib/content";
import ArticleEditor from "@/components/ArticleEditor";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ section: string; slug: string }>;
}

export default async function EditArticlePage({ params }: Props) {
  const { section, slug } = await params;
  const article = await getArticle(section, slug);

  if (!article) {
    notFound();
  }

  const initialArticle = {
    id: article.id,
    title: article.title,
    slug: article.slug,
    description: article.description,
    content: article.content,
    subjectId: article.subjectId || "",
    chapterId: article.chapterId || null,
    subjectSlug: section,
  };

  return <ArticleEditor initialArticle={initialArticle} mode="edit" />;
}
