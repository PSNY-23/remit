"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PanelLeft, PanelLeftClose } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SidebarToggleButton() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    // Initial check of collapsed state
    const saved =
      typeof window !== "undefined" &&
      localStorage.getItem("remit-sidebar-collapsed") === "true";
    if (saved && window.innerWidth >= 768) {
      document.documentElement.classList.add("sidebar-collapsed");
      setIsCollapsed(true);
    } else {
      setIsCollapsed(
        document.documentElement.classList.contains("sidebar-collapsed")
      );
    }

    const attach = () => {
      const navEl = document.querySelector(
        "header.nextra-navbar nav"
      ) as HTMLElement;
      if (navEl) {
        setTarget(navEl);
      }
    };

    attach();
    const timer = setTimeout(attach, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  const toggleSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const next = !isCollapsed;
    setIsCollapsed(next);
    document.documentElement.classList.toggle("sidebar-collapsed", next);
    try {
      localStorage.setItem("remit-sidebar-collapsed", String(next));
    } catch {}
  };

  if (!mounted || !target) return null;

  return createPortal(
    <div className="sidebar-desktop-toggle-button">
      <button
        onClick={toggleSidebar}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        type="button"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30px",
          height: "30px",
          borderRadius: "6px",
          border: "1px solid var(--notion-border)",
          backgroundColor: "var(--notion-card-bg)",
          color: "var(--notion-text-primary)",
          cursor: "pointer",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
          transition: "all 0.12s ease-in-out",
        }}
      >
        {isCollapsed ? (
          <PanelLeft
            size={16}
            strokeWidth={2}
            style={{ color: "var(--notion-text-primary)" }}
          />
        ) : (
          <PanelLeftClose
            size={16}
            strokeWidth={2}
            style={{ color: "var(--notion-text-primary)" }}
          />
        )}
      </button>
    </div>,
    target
  );
}
