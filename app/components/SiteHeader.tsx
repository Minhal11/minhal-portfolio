"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
        {[
          ["projects", "Selected work"],
          ["about", "About"],
          ["education", "Education"],
        ].map(([id, label]) => (
          <Link
            href={`${pathname === "/" ? "" : "/"}#${id}`}
            key={id}
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
