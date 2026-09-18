import HomeHero from "@/components/HomeHero";
import { useMDXComponents } from "@/mdx-components";

export default function Page() {
  const { wrapper: Wrapper } = useMDXComponents({});

  return (
    <Wrapper
      toc={[]}
      metadata={{
        title: "Welcome to Remit",
        filePath: "app/page.tsx",
      }}
      sourceCode=""
    >
      <HomeHero />
    </Wrapper>
  );
}
