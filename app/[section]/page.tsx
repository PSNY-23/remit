import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getArticles } from "@/lib/content";
import SectionArticleExplorer from "@/components/SectionArticleExplorer";
import { useMDXComponents } from "@/mdx-components";

interface Props {
  params: Promise<{ section: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const subject = await prisma.subject.findUnique({
    where: { slug: section },
  });
  if (!subject) return { title: "Not Found" };
  return {
    title: `${subject.title} — Remit`,
    description:
      subject.description ||
      `Master ${subject.title} concepts and interview preparation.`,
  };
}

export default async function DynamicSubjectPage({ params }: Props) {
  const { section } = await params;
  const subject = await prisma.subject.findUnique({
    where: { slug: section },
  });

  if (!subject) {
    notFound();
  }

  const articles = await getArticles(section);
  const { wrapper: Wrapper } = useMDXComponents({});

  return (
    <Wrapper toc={[]} metadata={{ title: subject.title }}>
      <div className="w-full max-w-none">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-(--notion-text-primary)">
          {subject.title}
        </h1>
        {subject.description ? (
          <p className="text-base text-(--notion-text-secondary) mb-6">
            {subject.description}
          </p>
        ) : (
          <div className="h-2" />
        )}
        <SectionArticleExplorer section={section} articles={articles} />
      </div>
    </Wrapper>
  );
}
