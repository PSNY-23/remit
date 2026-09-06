"use client";

import mermaid from "mermaid";

let isInitialized = false;

/**
 * Initialize Mermaid with sleek dark/light theme options matching our design system.
 */
export function initializeMermaid() {
  if (typeof window === "undefined" || isInitialized) return;
  try {
    const isDark =
      document.documentElement.classList.contains("dark") ||
      document.body.classList.contains("dark");

    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose",
      fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      flowchart: {
        htmlLabels: true,
        useMaxWidth: true,
        curve: "basis",
        padding: 18,
        nodeSpacing: 50,
        rankSpacing: 50,
      },
      themeVariables: isDark
        ? {
            darkMode: true,
            background: "#18181b",
            primaryColor: "#27272a",
            primaryTextColor: "#f4f4f5",
            primaryBorderColor: "#3f3f46",
            lineColor: "#71717a",
            secondaryColor: "#1e1e24",
            tertiaryColor: "#27272a",
            noteBkgColor: "#27272a",
            noteTextColor: "#f4f4f5",
            fontSize: "13.5px",
          }
        : {
            background: "#ffffff",
            primaryColor: "#f4f4f5",
            primaryTextColor: "#18181b",
            primaryBorderColor: "#e4e4e7",
            lineColor: "#a1a1aa",
            fontSize: "13.5px",
          },
    });
    isInitialized = true;
  } catch (err) {
    console.warn("Failed to initialize Mermaid:", err);
  }
}

/**
 * Renders all Mermaid diagrams found within the given container element.
 * Safely validates syntax first so that live typing never crashes or throws uncaught errors.
 */
export async function renderMermaidDiagrams(container: HTMLElement | null) {
  if (!container || typeof window === "undefined") return;

  initializeMermaid();

  // Find all mermaid blocks
  const blocks = container.querySelectorAll<HTMLElement>(".mermaid-block");
  if (blocks.length === 0) return;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const pre = block.querySelector("pre.mermaid");
    // Get raw code from pre text or cached attribute
    const code = pre
      ? pre.textContent || ""
      : block.getAttribute("data-raw-code") || "";

    if (!code.trim()) continue;

    // Check if already rendered for this exact code
    if (block.getAttribute("data-rendered-code") === code.trim()) {
      continue;
    }

    try {
      // Validate syntax before rendering
      const isValid = await mermaid.parse(code.trim()).catch(() => false);
      if (!isValid) {
        // User might be actively typing syntax, leave the text block as is
        continue;
      }

      const id = `mermaid_svg_${Date.now()}_${i}_${Math.random().toString(36).substring(2, 7)}`;
      const { svg } = await mermaid.render(id, code.trim());

      block.setAttribute("data-raw-code", code.trim());
      block.setAttribute("data-rendered-code", code.trim());
      block.innerHTML = `<div class="mermaid-diagram-container">${svg}</div>`;
    } catch {
      // Gracefully ignore render errors during dynamic live editing
    }
  }
}
