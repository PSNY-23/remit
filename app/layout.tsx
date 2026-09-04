import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Inter, JetBrains_Mono, IM_Fell_English } from "next/font/google";
import SidebarTopBrand from "@/components/SidebarTopBrand";
import SidebarToggleButton from "@/components/SidebarToggleButton";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import "nextra-theme-docs/style.css";
import "./globals.css";

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

const imFellEnglish = IM_Fell_English({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-im-fell",
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
        return !name.startsWith("[");
      })
      .map((item: any) => {
        const name = item.name || "";
        if (name === "articles") {
          return { ...item, display: "hidden" };
        }
        if (flatSections.has(name)) {
          const { children, ...rest } = item;
          return rest;
        }
        return item;
      });

    return (
      <html
        lang="en"
        className={`${inter.variable} ${jetbrainsMono.variable} ${imFellEnglish.variable}`}
        suppressHydrationWarning
      >
        <Head faviconGlyph="🧠" />

        <body suppressHydrationWarning>
          <SidebarTopBrand />
          <SidebarToggleButton />
          <Layout
            navbar={
              <Navbar
                logoLink="/dsa"
                logo={
                  <div
                    className="navbar-brand-logo"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "5px",
                        backgroundColor: "var(--notion-text-primary)",
                        color: "var(--notion-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: "13px", lineHeight: 1 }}>
                        🧠
                      </span>
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
