"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import LabviewGallery from "./projects/liquid-mixer/LabviewGallery";
const navItems = ["About", "Projects", "Education"];

const projects = [
  {
    number: "01",
    title: "Smart Industrial Liquid Mixer",
    subtitle: "Industrial automation project for intelligent batch mixing",
    description:
      "Designed and developed a smart liquid mixing system capable of automated recipe control, process monitoring, and safe batch operations. Implemented using a LabVIEW digital twin, ESP32 hardware prototype, and web-based monitoring dashboard.",
    tags: ["LabVIEW", "ESP32", "Digital Twin", "Process Control", "Automation", "Web Dashboard"],
    status: null,
    link: "/projects/liquid-mixer",   // ← add this
  },
  {
    number: "02",
    title: "Smart Parking System",
    subtitle: "Industrial parking slot management using CODESYS logic control",
    description:
      "Developing a smart parking automation system with real-time slot indication and industrial control logic using CODESYS programming environment.",
    tags: ["CODESYS", "PLC Logic", "Automation", "Sensors", "Control Systems"],
    status: "In Progress",
    link: null,                        // ← add this
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="flex gap-0 border-t border-[#E5E5E0] transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Yellow left accent */}
      <div className="w-[3px] bg-[#F4B400] rounded-full mr-10 my-6 self-stretch" />

      {/* Content */}
      <div className="flex-1 py-10 pr-6 md:pr-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[12px] font-medium tracking-[0.2em] text-[#999]">
                {project.number}
              </span>
              {project.status && (
                <span className="text-[11px] font-medium tracking-[0.15em] text-[#F4B400] border border-[#F4B400]/40 px-2.5 py-0.5 rounded-full">
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="text-[24px] md:text-[28px] font-bold tracking-[-0.5px] text-[#111] leading-tight">
              {project.title}
            </h3>

            <p className="mt-2 text-[14px] text-[#888] font-medium tracking-wide">
              {project.subtitle}
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[#666] max-w-xl">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-medium text-[#555] border border-[#E0E0DA] px-3 py-1 rounded-full tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
<div className="flex items-center gap-5 mt-7">
  {project.link ? (
    <Link
      href={project.link}
      className="text-[13px] font-medium text-[#111] border border-[#222] px-5 py-2 rounded-full hover:bg-[#111] hover:text-white transition duration-300"
    >
      View Details
    </Link>
  ) : (
    <button
      disabled
      className="text-[13px] font-medium text-[#999] border border-[#DDD] px-5 py-2 rounded-full cursor-not-allowed"
    >
      Coming Soon
    </button>
  )}
  <button className="text-[13px] font-medium text-[#777] hover:text-[#111] transition duration-300 flex items-center gap-1.5">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    GitHub
  </button>
</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("About");
  const [hovered, setHovered] = useState<string | null>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);

  const scrollTo = (section: string) => {
    setActive(section);
    if (section === "Projects") projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "Education") educationRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "About") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { ref: sectionLabelRef, inView: sectionLabelInView } = useInView();

  return (
    <main className="min-h-screen bg-[#F8F8F5] text-[#111111]">

      {/* HEADER */}
      <header className="relative flex items-center justify-between px-8 md:px-16 py-8">

        <h2 className="text-[15px] font-semibold tracking-wide text-[#111]">
          Minhal Rahman
        </h2>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-[28px] md:text-[32px] font-medium tracking-tight">
            Portfolio<span className="text-[#F4B400]">.</span>
          </h1>
        </div>

        <div className="flex items-center gap-7">
          <button className="text-[#555] hover:text-[#F4B400] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </button>
          <button className="text-[#555] hover:text-[#F4B400] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
          </button>
          <button className="text-[#555] hover:text-[#F4B400] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </button>
        </div>

      </header>

      {/* NAVIGATION */}
      <div className="flex justify-center mt-2">
        <div className="flex items-center gap-10 md:gap-14 text-[15px] text-[#666]">
          {navItems.map((item) => {
            const isActive = active === item;
            const isHovered = hovered === item;
            const showLine = isActive || isHovered;
            return (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                className="relative pb-2 transition-colors duration-200"
                style={{ color: isActive ? "#111111" : "#666666" }}
              >
                {isActive ? <span className="font-medium">{item}</span> : item}
                <span
                  className="absolute left-0 bottom-0 h-[2px] bg-[#F4B400] rounded-full"
                  style={{
                    width: showLine ? "24px" : "0px",
                    transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 md:pt-40 pb-24">

        <h1 className="text-[64px] md:text-[78px] font-black tracking-[-2px] leading-[0.95] text-[#111111]">
          {"Hi, I'm Minhal"}
        </h1>

        <h2 className="mt-5 text-[22px] md:text-[28px] font-medium tracking-[-1px] text-[#222222]">
          Automation & Instrumentation Engineer
        </h2>

        <p className="mt-4 max-w-2xl text-[18px] leading-[1.8] text-[#666666]">
          Aspiring Automation & Instrumentation Engineer focused on industrial control systems, process automation, and engineering innovation.
        </p>

        <div className="mt-8 flex items-center gap-5">
          <button
            onClick={() => scrollTo("Projects")}
            className="bg-[#111] text-white px-8 py-3.5 rounded-full text-[14px] font-medium hover:opacity-80 transition"
          >
            View Projects
          </button>
          <button className="border border-[#DDD] px-8 py-3.5 rounded-full text-[14px] font-medium hover:border-[#111] transition">
            Download Resume
          </button>
        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section ref={projectsRef} className="max-w-5xl mx-auto px-8 md:px-16 pb-28">

        {/* Section label */}
        <div
          ref={sectionLabelRef}
          className="mb-12 transition-all duration-700"
          style={{
            opacity: sectionLabelInView ? 1 : 0,
            transform: sectionLabelInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-[11px] font-medium tracking-[0.25em] text-[#999] uppercase mb-3">
            Selected Works
          </p>
          <h2 className="text-[28px] md:text-[34px] font-bold tracking-[-0.5px] text-[#111]">
            Projects<span className="text-[#F4B400]">.</span>
          </h2>
          <p className="mt-2 text-[15px] text-[#888] max-w-lg">
            Focused on industrial automation, control systems and intelligent engineering.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
          <div className="border-t border-[#E5E5E0]" />
        </div>

      </section>

      {/* EDUCATION PLACEHOLDER */}
      <section ref={educationRef} className="max-w-5xl mx-auto px-8 md:px-16 pb-28">
        <p className="text-[11px] font-medium tracking-[0.25em] text-[#999] uppercase mb-3">
          Background
        </p>
        <h2 className="text-[28px] md:text-[34px] font-bold tracking-[-0.5px] text-[#111]">
          Education<span className="text-[#F4B400]">.</span>
        </h2>
      </section>

    </main>
  );
}