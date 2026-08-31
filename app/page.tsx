"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navItems = ["About", "Projects", "Education"];

const projects = [
  {
    number: "01",
    title: "Smart Industrial Liquid Mixer",
    subtitle: "Industrial automation project for intelligent batch mixing",
    description:
      "Designed and developed a smart liquid mixing system capable of automated recipe control, process monitoring, and safe batch operations. Implemented using a LabVIEW digital twin, ESP32 hardware prototype, and web-based monitoring dashboard.",
    tags: [
      "LabVIEW",
      "ESP32",
      "Digital Twin",
      "Process Control",
      "Automation",
      "Web Dashboard",
    ],
    status: null,
    link: "/projects/liquid-mixer",
  },
  {
    number: "02",
    title: "Smart Parking System",
    subtitle:
      "Industrial parking slot management using CODESYS logic control",
    description:
      "Developing a smart parking automation system with real-time slot indication and industrial control logic using CODESYS programming environment.",
    tags: [
      "CODESYS",
      "PLC Logic",
      "Automation",
      "Sensors",
      "Control Systems",
    ],
    status: "In Progress",
    link: "#",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    obs.observe(element);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
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
      {/* Yellow accent */}
      <div className="w-[3px] shrink-0 bg-[#F4B400] rounded-full mr-5 sm:mr-8 md:mr-10 my-6 self-stretch" />

      {/* Content */}
      <div className="flex-1 py-8 sm:py-10 pr-0 md:pr-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1 min-w-0">
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

            <h3 className="text-[23px] sm:text-[24px] md:text-[28px] font-bold tracking-[-0.5px] text-[#111] leading-tight">
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
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-7">
              {project.link !== "#" ? (
                <Link
                  href={project.link}
                  className="text-[13px] font-medium text-[#111] border border-[#222] px-5 py-2 rounded-full hover:bg-[#111] hover:text-white transition duration-300"
                >
                  View Details
                </Link>
              ) : (
                <button className="text-[13px] font-medium text-[#777] border border-[#DDD] px-5 py-2 rounded-full cursor-default">
                  In Progress
                </button>
              )}

              <button className="text-[13px] font-medium text-[#777] hover:text-[#111] transition duration-300 flex items-center gap-1.5">
                <GithubIcon />
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

    if (section === "Projects") {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (section === "Education") {
      educationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (section === "About") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const { ref: sectionLabelRef, inView: sectionLabelInView } = useInView();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F8F8F5] text-[#111111]">
      {/* ================= HEADER ================= */}
      <header className="w-full px-5 sm:px-8 md:px-16 py-6 sm:py-8">
        <div className="flex items-center justify-between gap-4">
          {/* Name */}
          <button
            onClick={() => scrollTo("About")}
            className="shrink-0 text-[15px] sm:text-[16px] font-semibold tracking-wide text-[#111] whitespace-nowrap"
          >
            Minhal Rahman
          </button>

          {/* Portfolio logo */}
          <button
            onClick={() => scrollTo("About")}
            className="text-[25px] sm:text-[28px] md:text-[32px] font-medium tracking-tight leading-none"
          >
            Portfolio<span className="text-[#F4B400]">.</span>
          </button>

          {/* Social icons */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-7 shrink-0">
            <a
              href="https://github.com/Minhal11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#555] hover:text-[#F4B400] transition duration-300"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#555] hover:text-[#F4B400] transition duration-300"
            >
              <LinkedinIcon />
            </a>

            <a
              href="mailto:"
              aria-label="Email"
              className="text-[#555] hover:text-[#F4B400] transition duration-300"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </header>

      {/* ================= NAVIGATION ================= */}
      <div className="flex justify-center mt-1 sm:mt-2 px-4">
        <div className="flex items-center gap-8 sm:gap-10 md:gap-14 text-[15px] text-[#666]">
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
                className="relative pb-2 whitespace-nowrap transition-colors duration-200"
                style={{
                  color: isActive ? "#111111" : "#666666",
                }}
              >
                {isActive ? (
                  <span className="font-medium">{item}</span>
                ) : (
                  item
                )}

                <span
                  className="absolute left-0 bottom-0 h-[2px] bg-[#F4B400] rounded-full"
                  style={{
                    width: showLine ? "24px" : "0px",
                    transition:
                      "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center justify-center text-center px-5 sm:px-6 pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-24">
        <h1
          className="
            text-[52px]
            leading-[0.92]
            tracking-[-2.5px]
            sm:text-[62px]
            md:text-[78px]
            font-black
            text-[#111111]
            max-w-full
          "
        >
          <span className="sm:whitespace-nowrap">
            Hi, I'm Minhal
          </span>
        </h1>

        <h2
          className="
            mt-6
            text-[21px]
            leading-[1.25]
            sm:text-[22px]
            md:text-[28px]
            font-medium
            tracking-[-0.8px]
            text-[#222222]
            max-w-[700px]
          "
        >
          Automation & Instrumentation Engineer
        </h2>

        <p
          className="
            mt-5
            max-w-[680px]
            px-2
            text-[17px]
            sm:text-[18px]
            leading-[1.75]
            text-[#666666]
          "
        >
          Aspiring Automation & Instrumentation Engineer focused on industrial
          control systems, process automation, and engineering innovation.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex w-full max-w-[390px] flex-col sm:flex-row sm:max-w-none items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => scrollTo("Projects")}
            className="
              w-full
              sm:w-auto
              bg-[#111]
              text-white
              px-8
              py-4
              rounded-full
              text-[14px]
              font-medium
              hover:opacity-80
              transition
            "
          >
            View Projects
          </button>

          <button
            className="
              w-full
              sm:w-auto
              border
              border-[#DDD]
              px-8
              py-4
              rounded-full
              text-[14px]
              font-medium
              hover:border-[#111]
              transition
            "
          >
            Download Resume
          </button>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        ref={projectsRef}
        className="max-w-5xl mx-auto px-5 sm:px-8 md:px-16 pb-24 sm:pb-28"
      >
        {/* Section label */}
        <div
          ref={sectionLabelRef}
          className="mb-10 sm:mb-12 transition-all duration-700"
          style={{
            opacity: sectionLabelInView ? 1 : 0,
            transform: sectionLabelInView
              ? "translateY(0)"
              : "translateY(20px)",
          }}
        >
          <p className="text-[11px] font-medium tracking-[0.25em] text-[#999] uppercase mb-3">
            Selected Works
          </p>

          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.5px] text-[#111]">
            Projects<span className="text-[#F4B400]">.</span>
          </h2>

          <p className="mt-2 text-[15px] text-[#888] max-w-lg">
            Focused on industrial automation, control systems and intelligent
            engineering.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}

          <div className="border-t border-[#E5E5E0]" />
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section
        ref={educationRef}
        className="max-w-5xl mx-auto px-5 sm:px-8 md:px-16 pb-24 sm:pb-28"
      >
        <p className="text-[11px] font-medium tracking-[0.25em] text-[#999] uppercase mb-3">
          Background
        </p>

        <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.5px] text-[#111]">
          Education<span className="text-[#F4B400]">.</span>
        </h2>
      </section>
    </main>
  );
}