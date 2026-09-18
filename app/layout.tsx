import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import SidebarTopBrand from "@/components/SidebarTopBrand";
import SidebarToggleButton from "@/components/SidebarToggleButton";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Brain } from "lucide-react";
import { prisma } from "@/lib/prisma";
import "nextra-theme-docs/style.css";
import "katex/dist/katex.min.css";
import "./globals.css";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  title: "Remit — Engineering Second Brain",
  description:
    "Master knowledge base for Data Structures, Distributed Systems & Engineering Interviews",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const rawPageMap = await getPageMap();

    // Ensure all top-level sections are clean flat links without cached sub-items
    const flatSections = new Set([
      "frontend",
      "backend",
      "databases",
      "nodejs",
      "system-design",
      "handwritten",
    ]);

    const pageMap = rawPageMap
      .filter((item: any) => {
        const name = item.name || item.route || "";
        return (
          !name.startsWith("[") &&
          name !== "create" &&
          item.route !== "/create" &&
          name !== "articles" &&
          item.route !== "/articles"
        );
      })
      .map((item: any) => {
        const name = item.name || "";
        if (item.route === "/" || name === "index") {
          return {
            ...item,
            type: "doc",
            frontMatter: {
              ...(item.frontMatter || {}),
              sidebar: true,
              theme: {
                ...(item.frontMatter?.theme || {}),
                sidebar: true,
              },
            },
            theme: {
              ...(item.theme || {}),
              sidebar: true,
            },
          };
        }
        if (flatSections.has(name)) {
          const { children, ...rest } = item;
          return rest;
        }
        if (item.children) {
          return {
            ...item,
            theme: { ...(item.theme || {}), collapsed: true },
          };
        }
        return item;
      });

    // Fetch all database subjects so user-created subjects appear in sidebar
    try {
      const dbSubjects = await prisma.subject.findMany({
        select: { slug: true, title: true },
        orderBy: { order: "asc" },
      });

      const existingNames = new Set(
        pageMap.map((item: any) => item.name || item.route?.replace(/^\//, "")),
      );

      for (const sub of dbSubjects) {
        if (!existingNames.has(sub.slug)) {
          pageMap.push({
            name: sub.slug,
            route: `/${sub.slug}`,
            title: sub.title,
            frontMatter: {
              title: sub.title,
            },
          });
        }
      }
    } catch (dbErr) {
      console.error("Error fetching db subjects for sidebar:", dbErr);
    }

    return (
      <html
        lang="en"
        className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}
        suppressHydrationWarning
      >
        <Head faviconGlyph="🧠">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Kalam:wght@700&family=Dekko&family=Yatra+One&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body suppressHydrationWarning>
          <SidebarTopBrand />
          <SidebarToggleButton />
          <Layout
            sidebar={{
              defaultMenuCollapseLevel: 1,
              autoCollapse: true,
            }}
            navbar={
              <Navbar
                logoLink="/dsa"
                logo={
                  <div
                    className="mobile-only-logo"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "5px",
                        backgroundColor: "var(--notion-text-primary)",
                        color: "var(--notion-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Brain size={16} strokeWidth={2.2} />
                    </div>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "var(--notion-text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Remit
                    </span>
                  </div>
                }
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <ThemeToggleButton />
                </div>
              </Navbar>
            }
            pageMap={pageMap}
            footer={null}
          >
            {children}
          </Layout>
        </body>
      </html>
    );
  } catch (err: any) {
    console.error("ROOT_LAYOUT_ERROR:", err);
    throw err;
  }
}
