import { Marked } from "marked";
import markedKatex from "marked-katex-extension";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const markedInstance = new Marked(
  markedKatex({
    throwOnError: false,
    nonStandard: true,
  }),
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      if (lang === "mermaid") return code;
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
  {
    gfm: true,
    breaks: true,
    renderer: {
      code(token) {
        const text = typeof token === "object" ? token.text : token;
        const lang = typeof token === "object" ? token.lang : arguments[1];
        if (lang === "mermaid") {
          return `<div class="mermaid-block"><pre class="mermaid">${text}</pre></div>\n`;
        }
        return false;
      },
    },
  }
);

/**
 * Render Markdown with MathJax/KaTeX math, syntax highlighting, and Mermaid support.
 */
export function renderMarkdown(content: string): string {
  if (!content) return "";
  try {
    return markedInstance.parse(content) as string;
  } catch (err) {
    console.error("Markdown parse error:", err);
    return content;
  }
}
