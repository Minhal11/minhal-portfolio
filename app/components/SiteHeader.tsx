"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  ["projects", "Projects"],
  ["about", "About"],
  ["education", "Education"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const nodes = sections
      .map(([id]) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const onScroll = () => {
      if (window.scrollY < 90) setActive("");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 90) {
          setActive("");
          return;
        }
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <Link
        className="brand"
        href="/"
        onClick={() => setOpen(false)}
        aria-label="Minhal Rahman home"
      >
        <span className="brand-mark">m<span>.</span></span>
        <span>MINHAL RAHMAN<span className="brand-sub">AUTOMATION &amp; INSTRUMENTATION</span></span>
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="site-nav"
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Main navigation"
      >
        {sections.map(([id, label]) => (
          <Link
            href={`${pathname === "/" ? "" : "/"}#${id}`}
            key={id}
            className={active === id ? "is-active" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a className="nav-contact" href="mailto:minhalrahman21@gmail.com">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
