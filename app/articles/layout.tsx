import React from "react";
import { useMDXComponents } from "@/mdx-components";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { wrapper: Wrapper } = useMDXComponents({});

  return (
    <Wrapper toc={[]} metadata={{}}>
      {children}
    </Wrapper>
  );
}
