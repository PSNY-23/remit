"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PanelLeft, PanelLeftClose } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

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
      <Button
        onClick={toggleSidebar}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        type="button"
        variant="outline"
        size="icon"
        className="h-[30px] w-[30px] rounded-md border-[var(--notion-border)] bg-[var(--notion-card-bg)] text-[var(--notion-text-primary)] hover:bg-[var(--notion-hover)] shadow-xs"
      >
        {isCollapsed ? (
          <PanelLeft
            className="w-4 h-4 text-[var(--notion-text-primary)]"
            strokeWidth={2}
          />
        ) : (
          <PanelLeftClose
            className="w-4 h-4 text-[var(--notion-text-primary)]"
            strokeWidth={2}
          />
        )}
      </Button>
    </div>,
    target
  );
}
