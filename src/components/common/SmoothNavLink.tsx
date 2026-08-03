"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SmoothNavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id || id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function waitForElement(id: string, attempts = 24): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    let left = attempts;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        resolve(el);
        return;
      }
      left -= 1;
      if (left <= 0) {
        resolve(null);
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

/** In-page hash links without full reloads; soft-navigates from other routes. */
export function SmoothNavLink({
  href,
  children,
  className,
  onNavigate,
  ...rest
}: SmoothNavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHashLink = href.startsWith("/#") || href.startsWith("#");
  const hash = isHashLink ? (href.startsWith("/#") ? href.slice(1) : href) : "";

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (!isHashLink) return;

    event.preventDefault();

    if (pathname === "/") {
      scrollToHash(hash);
      window.history.replaceState(null, "", hash === "#home" ? "/" : hash);
      return;
    }

    const id = hash.replace(/^#/, "");
    router.push("/");
    const el = await waitForElement(id === "home" ? "home" : id);
    if (id === "home" || !el) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.history.replaceState(null, "", hash === "#home" ? "/" : hash);
  };

  if (isHashLink) {
    return (
      <a
        href={href.startsWith("/") ? href : `/${href}`}
        className={cn(className)}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(className)} onClick={onNavigate} prefetch {...rest}>
      {children}
    </Link>
  );
}
