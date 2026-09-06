"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);


  /* =========================================================
     SCROLL POSITION + ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const currentScroll = window.scrollY;

      setScrollY(currentScroll);

      /*
        Determine which section is currently active.
      */
      const checkpoint = currentScroll + 180;

      let currentSection = "about";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.offsetTop <= checkpoint
        ) {
          currentSection = item.id;
        }
      }

      /*
        Bottom-of-page safeguard.

        This ensures Education becomes active when the visitor
        reaches the actual bottom of the page.
      */
      const scrolledToBottom =
        window.innerHeight + currentScroll >=
        document.documentElement.scrollHeight - 2;

      if (scrolledToBottom) {
        currentSection =
          navItems[navItems.length - 1].id;
      }

      setActiveSection(currentSection);

      ticking = false;
    };


    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateScrollState
        );

        ticking = true;
      }
    };


    updateScrollState();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScrollState
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateScrollState
      );
    };
  }, []);


  /* =========================================================
     HEADER COLLAPSE
     
     DESKTOP:
       Portfolio moves upward.
       Navigation moves upward into its place.

     MOBILE:
       Portfolio stays completely static.
       Navigation stays completely static.
  ========================================================= */

  const collapseProgress = Math.min(
    scrollY / 140,
    1
  );

  /*
    These values are used only by the DESKTOP header.
    The mobile header uses separate static elements below.
  */
  const portfolioY =
    -(collapseProgress * 54);

  const portfolioOpacity =
    1 - collapseProgress;

  const navigationY =
    -(collapseProgress * 47);


  /* =========================================================
     SMOOTH SECTION SCROLL
  ========================================================= */

  const scrollToSection = (id: string) => {

    /*
      About returns to the absolute top.
    */
    if (id === "about") {
      setActiveSection("about");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }


    const element =
      document.getElementById(id);

    if (!element) return;


    /*
      Immediately select the clicked section.
    */
    setActiveSection(id);


    /*
      Fixed header offset.
    */
    const headerOffset = 82;


    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;


    /*
      Never attempt to scroll beyond the document.
    */
    const maxScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;


    const targetPosition =
      Math.min(
        Math.max(
          elementPosition -
            headerOffset,
          0
        ),
        Math.max(maxScroll, 0)
      );


    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };


  return (
    <main className="min-h-screen bg-[#F8F8F5] text-[#111111]">


      {/* =========================================================
          FIXED HEADER
          
          Desktop and mobile use the same overall header,
          but Portfolio and Navigation have separate
          responsive versions.
      ========================================================= */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
          bg-[#F8F8F5]
        "
        style={{
          height: "118px",
        }}
      >


        {/* =====================================================
            TOP ROW
        ===================================================== */}

        <div
          className="
            max-w-6xl
            mx-auto
            h-[68px]
            px-4
            sm:px-6
            md:px-8
          "
        >

          <div
            className="
              grid
              grid-cols-[1fr_auto_1fr]
              items-center
              h-full
            "
          >


            {/* =================================================
                NAME
                NEVER MOVES
            ================================================= */}

            <div
              className="
                justify-self-start
                min-w-0
              "
            >

              <button
                type="button"
                onClick={() =>
                  scrollToSection("about")
                }
                className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-lg
                  font-semibold
                  tracking-tight
                  whitespace-nowrap
                  hover:text-[#555]
                  transition-colors
                "
              >
                Minhal Rahman
              </button>

            </div>


            {/* =================================================
                DESKTOP PORTFOLIO
                 
                Visible from sm and above.
                Keeps the existing desktop scroll animation.
            ================================================= */}

            <div
              className="
                hidden
                sm:block
                justify-self-center
                will-change-transform
              "
              style={{
                transform:
                  `translateY(${portfolioY}px)`,
                opacity:
                  portfolioOpacity,
              }}
            >

              <button
                type="button"
                onClick={() =>
                  scrollToSection("about")
                }
                className="
                  text-[28px]
                  md:text-4xl
                  font-medium
                  tracking-tight
                  whitespace-nowrap
                "
              >
                Portfolio
                <span className="text-[#F4B400]">
                  .
                </span>
              </button>

            </div>


            {/* =================================================
                MOBILE PORTFOLIO
                 
                Completely static.
                Never moves or fades.
            ================================================= */}

            <div
              className="
                sm:hidden
                justify-self-center
              "
            >

              <button
                type="button"
                onClick={() =>
                  scrollToSection("about")
                }
                className="
                  text-[24px]
                  font-medium
                  tracking-tight
                  whitespace-nowrap
                "
              >
                Portfolio
                <span className="text-[#F4B400]">
                  .
                </span>
              </button>

            </div>


            {/* =================================================
                SOCIAL ICONS
                NEVER MOVE
            ================================================= */}

            <div
              className="
                justify-self-end
                flex
                items-center
                gap-3
                sm:gap-5
                md:gap-7
              "
            >


              {/* GitHub */}

              <a
                href="https://github.com/Minhal11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  text-[#555]
                  hover:text-[#111]
                  transition-colors
                "
              >

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >

                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c0-.31-.2-.66-.79-.55C5.4 20.03 4.14 18.08 4.14 18.08c-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.41-5.29 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />

                </svg>

              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/minhal-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  text-[#555]
                  hover:text-[#111]
                  transition-colors
                "
              >

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >

                  <path d="M4.98 3.5A2.49 2.49 0 1 1 5 8.48a2.49 2.49 0 0 1-.02-4.98ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-4.99c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.64V21h-4V9.75Z" />

                </svg>

              </a>


              {/* Email */}

              <a
                href="mailto:minhalrahman21@gmail.com"
                aria-label="Email"
                className="
                  text-[#555]
                  hover:text-[#111]
                  transition-colors
                "
              >

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >

                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="m3 7 9 6 9-6" />

                </svg>

              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            DESKTOP NAVIGATION
             
            Existing collapsing behavior.
            Visible from sm and above.
        ===================================================== */}

        <nav
          className="
            hidden
            sm:flex
            absolute
            left-0
            right-0
            top-[68px]
            justify-center
            px-4
            will-change-transform
          "
          style={{
            transform:
              `translateY(${navigationY}px)`,
          }}
          onMouseLeave={() =>
            setHoveredSection(null)
          }
        >

          <div
            className="
              flex
              items-center
              justify-center
              gap-8
              md:gap-14
            "
          >

            {navItems.map((item) => {

              const isActive =
                activeSection === item.id;

              const isHovered =
                hoveredSection === item.id;


              /*
                Hover temporarily takes priority.
                Active section remains when pointer leaves.
              */
              const showLine =
                isHovered ||
                (isActive && !hoveredSection);


              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  onMouseEnter={() =>
                    setHoveredSection(item.id)
                  }
                  onFocus={() =>
                    setHoveredSection(item.id)
                  }
                  onBlur={() =>
                    setHoveredSection(null)
                  }
                  className={`
                    group
                    relative
                    pb-2
                    whitespace-nowrap
                    text-[14px]
                    md:text-[16px]
                    transition-colors
                    duration-200
                    ${
                      isActive ||
                      isHovered
                        ? "text-[#111]"
                        : "text-gray-500 hover:text-[#111]"
                    }
                  `}
                >

                  <span
                    className="
                      relative
                      inline-block
                    "
                  >

                    {item.label}


                    {/* Individual cursor line */}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        left-0
                        bottom-[-2px]
                        h-[2px]
                        rounded-full
                        bg-[#F4B400]
                        origin-left
                        transition-[width]
                        duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          showLine
                            ? "w-1/2"
                            : "w-0"
                        }
                      `}
                    />

                  </span>

                </button>
              );
            })}

          </div>

        </nav>


        {/* =====================================================
            MOBILE NAVIGATION
             
            Completely static vertically.
            This is the important mobile fix.
        ===================================================== */}

        <nav
          className="
            sm:hidden
            absolute
            left-0
            right-0
            top-[68px]
            flex
            justify-center
            px-4
          "
          onMouseLeave={() =>
            setHoveredSection(null)
          }
        >

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
            "
          >

            {navItems.map((item) => {

              const isActive =
                activeSection === item.id;

              const isHovered =
                hoveredSection === item.id;

              /*
                On touch screens there is normally no hover.
                Active item therefore keeps its indicator.
              */
              const showLine =
                isHovered ||
                (isActive && !hoveredSection);


              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  onMouseEnter={() =>
                    setHoveredSection(item.id)
                  }
                  onFocus={() =>
                    setHoveredSection(item.id)
                  }
                  onBlur={() =>
                    setHoveredSection(null)
                  }
                  className={`
                    group
                    relative
                    pb-2
                    whitespace-nowrap
                    text-[12px]
                    ${
                      isActive ||
                      isHovered
                        ? "text-[#111]"
                        : "text-gray-500"
                    }
                  `}
                >

                  <span
                    className="
                      relative
                      inline-block
                    "
                  >

                    {item.label}


                    {/* Individual cursor line */}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        left-0
                        bottom-[-2px]
                        h-[2px]
                        rounded-full
                        bg-[#F4B400]
                        origin-left
                        transition-[width]
                        duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          showLine
                            ? "w-1/2"
                            : "w-0"
                        }
                      `}
                    />

                  </span>

                </button>
              );
            })}

          </div>

        </nav>

      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="about"
        className="
          min-h-[650px]
          flex
          items-center
          pt-[150px]
          sm:pt-[160px]
          md:pt-[175px]
          pb-20
          scroll-mt-[80px]
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
            px-5
            sm:px-6
            w-full
          "
        >

          <div
            className="
              text-center
              max-w-4xl
              mx-auto
            "
          >

            <h1
              className="
                text-[48px]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-black
                tracking-[-2.5px]
                sm:tracking-[-3px]
                md:tracking-[-4px]
                leading-[0.95]
              "
            >
              Hi, I&apos;m Minhal
            </h1>


            <h2
              className="
                mt-7
                sm:mt-8
                text-[21px]
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                font-medium
                tracking-tight
                leading-tight
              "
            >
              Automation &amp; Instrumentation Engineer
            </h2>


            <p
              className="
                mt-6
                sm:mt-8
                text-[16px]
                sm:text-lg
                md:text-xl
                text-gray-500
                leading-8
                sm:leading-9
                max-w-[680px]
                mx-auto
              "
            >
              Aspiring Automation &amp; Instrumentation Engineer focused on
              industrial control systems, process automation, and engineering
              innovation.
            </p>


            {/* Buttons */}

            <div
              className="
                mt-9
                sm:mt-10
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-3
                sm:gap-4
                px-2
                sm:px-0
              "
            >

              {/* View Projects */}

              <button
                type="button"
                onClick={() =>
                  scrollToSection("projects")
                }
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
                  hover:bg-[#2a2a2a]
                  transition-colors
                "
              >
                View Projects
              </button>


              {/* Download Resume */}

              <a
                href="/Minhal_Rahman_Resume.pdf"
                download
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
                  transition-colors
                  inline-flex
                  items-center
                  justify-center
                "
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-6
          py-20
          sm:py-24
          scroll-mt-[80px]
        "
      >

        <p
          className="
            text-[11px]
            sm:text-[12px]
            tracking-[3px]
            sm:tracking-[4px]
            text-gray-400
            uppercase
          "
        >
          Selected Works
        </p>


        <h2
          className="
            mt-4
            text-3xl
            sm:text-5xl
            font-bold
          "
        >
          Projects
        </h2>


        <div
          className="
            mt-10
            sm:mt-12
            grid
            grid-cols-2
            gap-3
            sm:gap-8
          "
        >

          {/* Liquid Mixer */}

          <Link
            href="/projects/liquid-mixer"
            className="
              group
              rounded-2xl
              sm:rounded-3xl
              border
              border-[#E5E5E0]
              bg-white
              overflow-hidden
              hover:-translate-y-1
              transition-transform
              duration-300
            "
          >

            <div
              className="
                h-[105px]
                sm:aspect-[16/10]
                sm:h-auto
                overflow-hidden
                bg-[#F2F2ED]
              "
            >

              <img
                src="/images/liquid-mixer-prototype.jpg"
                alt="Smart Industrial Liquid Mixer"
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-[1.03]
                  transition-transform
                  duration-500
                "
              />

            </div>


            <div className="p-3 sm:p-7">

              <p
                className="
                  text-[7px]
                  sm:text-xs
                  uppercase
                  tracking-[1.2px]
                  sm:tracking-[3px]
                  leading-3.5
                  text-gray-400
                "
              >
                Automation &amp; Instrumentation
              </p>


              <h3
                className="
                  mt-2
                  text-[13px]
                  sm:text-2xl
                  font-bold
                  leading-[1.2]
                  sm:leading-tight
                "
              >
                Smart Industrial Liquid Mixer
              </h3>


              <p
                className="
                  mt-2.5
                  text-[8.5px]
                  sm:text-base
                  text-gray-500
                  leading-[1.45]
                  sm:leading-7
                  line-clamp-3
                "
              >
                Recipe-based liquid dosing and mixing system developed using
                LabVIEW, ESP32 and a web dashboard.
              </p>


              <div className="mt-3 sm:mt-5 flex flex-wrap gap-1 sm:gap-2">

                <span
                  className="
                    px-2
                    py-0.5
                    sm:px-3
                    sm:py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-[8px]
                    sm:text-xs
                    leading-none
                  "
                >
                  LabVIEW
                </span>


                <span
                  className="
                    px-2
                    py-0.5
                    sm:px-3
                    sm:py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-[8px]
                    sm:text-xs
                    leading-none
                  "
                >
                  ESP32
                </span>


                <span
                  className="
                    px-2
                    py-0.5
                    sm:px-3
                    sm:py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-[8px]
                    sm:text-xs
                    leading-none
                  "
                >
                  Automation
                </span>

              </div>

            </div>

          </Link>


          {/* Smart Warehouse Automation */}

          <Link
            href="/projects/smart-warehouse"
            className="
              group
              rounded-2xl
              sm:rounded-3xl
              border
              border-[#E5E5E0]
              bg-white
              overflow-hidden
              hover:-translate-y-1
              transition-transform
              duration-300
            "
          >

            <div
              className="
                h-[105px]
                sm:aspect-[16/10]
                sm:h-auto
                overflow-hidden
                bg-[#F2F2ED]
              "
            >

              <img
                src="/images/warehouse-hero.jpg"
                alt="PLC-Based Smart Warehouse Automation"
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-[1.03]
                  transition-transform
                  duration-500
                "
              />

            </div>


            <div className="p-3 sm:p-7">

              <p
                className="
                  text-[7px]
                  sm:text-xs
                  uppercase
                  tracking-[1.2px]
                  sm:tracking-[3px]
                  leading-3.5
                  text-gray-400
                "
              >
                PLC Automation &amp; Digital Twin
              </p>


              <h3
                className="
                  mt-2
                  text-[13px]
                  sm:text-2xl
                  font-bold
                  leading-[1.2]
                  sm:leading-tight
                "
              >
                PLC-Based Smart Warehouse Automation
              </h3>


              <p
                className="
                  mt-2.5
                  text-[8.5px]
                  sm:text-base
                  text-gray-500
                  leading-[1.45]
                  sm:leading-7
                  line-clamp-3
                "
              >
                CODESYS-controlled conveyor sorting system with product tracking,
                automated routing, OPC UA communication and a 3D simulation environment.
              </p>


              <div className="mt-3 sm:mt-5 flex flex-wrap gap-1 sm:gap-2">

                <span
                  className="
                    px-2
                    py-0.5
                    sm:px-3
                    sm:py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-[8px]
                    sm:text-xs
                    leading-none
                  "
                >
                  CODESYS
                </span>


                <span
                  className="
                    px-2
                    py-0.5
                    sm:px-3
                    sm:py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-[8px]
                    sm:text-xs
                  "
                >
                  Structured Text
                </span>


                <span
                  className="
                    px-2
                    py-0.5
                    sm:px-3
                    sm:py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-[8px]
                    sm:text-xs
                  "
                >
                  OPC UA
                </span>


                <span
                  className="
                    px-2
                    py-0.5
                    sm:px-3
                    sm:py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-[8px]
                    sm:text-xs
                  "
                >
                  Godot
                </span>

              </div>

            </div>

          </Link>


        </div>

      </section>


      {/* =========================================================
          EDUCATION
      ========================================================= */}

      <section
        id="education"
        className="
          bg-white
          border-t
          border-[#EAEAE5]
          scroll-mt-[80px]
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
            px-5
            sm:px-6
            py-20
            sm:py-24
          "
        >

          <p
            className="
              text-[11px]
              sm:text-[12px]
              tracking-[3px]
              sm:tracking-[4px]
              text-gray-400
              uppercase
            "
          >
            Academic Background
          </p>


          <h2
            className="
              mt-4
              text-4xl
              sm:text-5xl
              font-bold
            "
          >
            Education
          </h2>


          <div
            className="
              mt-10
              sm:mt-12
              grid
              gap-5
            "
          >

            {/* B.Tech */}

            <div
              className="
                relative
                rounded-3xl
                border
                border-[#E5E5E0]
                bg-[#F8F8F5]
                p-3.5
                sm:p-7
                md:p-8
              "
            >

              <div
                className="
                  absolute
                  left-0
                  top-7
                  h-10
                  w-[3px]
                  rounded-r-full
                  bg-[#F4B400]
                "
              />

              <div
                className="
                  flex
                  flex-col
                  gap-7
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                  sm:gap-10
                "
              >

                <div className="min-w-0">

                  <p
                    className="
                      text-[11px]
                      sm:text-xs
                      uppercase
                      tracking-[2.5px]
                      text-gray-400
                    "
                  >
                    B.Tech · 2022 — 2026
                  </p>

                  <h3
                    className="
                      mt-3
                      text-xl
                      sm:text-2xl
                      font-bold
                      leading-tight
                    "
                  >
                    Applied Electronics &amp; Instrumentation
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      sm:text-base
                      text-gray-500
                      leading-7
                    "
                  >
                    Government Engineering College Kozhikode
                  </p>

                </div>

                <div
                  className="
                    shrink-0
                    flex
                    flex-col
                    items-start
                    sm:items-end
                  "
                >

                  <span
                    className="
                      inline-flex
                      w-fit
                      rounded-full
                      border
                      border-[#E5E5E0]
                      bg-white
                      px-3
                      py-1
                      text-[11px]
                      text-gray-500
                    "
                  >
                    Undergraduate
                  </span>

                  <p
                    className="
                      mt-4
                      text-[10px]
                      uppercase
                      tracking-[2.5px]
                      text-gray-400
                    "
                  >
                    Academic Result
                  </p>

                  <p
                    className="
                      mt-1
                      text-base
                      sm:text-lg
                      font-semibold
                      tracking-tight
                      text-[#111111]
                    "
                  >
                    7.24 / 10
                  </p>

                </div>

              </div>

              <div
                className="
                  mt-7
                  border-t
                  border-[#E8E8E3]
                  pt-5
                "
              >
                <p
                  className="
                    max-w-3xl
                    text-sm
                    sm:text-base
                    text-gray-500
                    leading-7
                  "
                >
                  B.Tech in Applied Electronics and Instrumentation with a
                  focus on electronics, instrumentation, industrial automation
                  and control systems.
                </p>
              </div>

            </div>


            {/* Professional Diploma */}

            <div
              className="
                relative
                rounded-3xl
                border
                border-[#E5E5E0]
                bg-[#F8F8F5]
                p-3.5
                sm:p-7
                md:p-8
              "
            >

              <div
                className="
                  absolute
                  left-0
                  top-7
                  h-10
                  w-[3px]
                  rounded-r-full
                  bg-[#F4B400]
                "
              />

              <div
                className="
                  flex
                  flex-col
                  gap-2
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-[11px]
                      sm:text-xs
                      uppercase
                      tracking-[2.5px]
                      text-gray-400
                    "
                  >
                    Currently Pursuing
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      sm:text-2xl
                      font-bold
                    "
                  >
                    Professional Diploma in Industrial Automation
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      sm:text-base
                      text-gray-500
                      leading-7
                    "
                  >
                    IPCS Global
                  </p>

                </div>

                <span
                  className="
                    inline-flex
                    w-fit
                    rounded-full
                    border
                    border-[#E5E5E0]
                    bg-white
                    px-3
                    py-1
                    text-[11px]
                    text-gray-500
                  "
                >
                  In Progress
                </span>

              </div>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  sm:text-base
                  text-gray-500
                  leading-7
                "
              >
                Currently pursuing advanced practical training in PLCs,
                industrial control and automation systems.
              </p>

            </div>


            {/* NPTEL Certification */}

            <div
              className="
                relative
                rounded-3xl
                border
                border-[#E5E5E0]
                bg-[#F8F8F5]
                p-6
                sm:p-7
                md:p-8
              "
            >

              <div
                className="
                  absolute
                  left-0
                  top-7
                  h-10
                  w-[3px]
                  rounded-r-full
                  bg-[#F4B400]
                "
              />

              <div
                className="
                  flex
                  flex-col
                  gap-2
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-[11px]
                      sm:text-xs
                      uppercase
                      tracking-[2.5px]
                      text-gray-400
                    "
                  >
                    NPTEL · 3-Month Course
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      sm:text-2xl
                      font-bold
                    "
                  >
                    Control Engineering
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      sm:text-base
                      text-gray-500
                      leading-7
                    "
                  >
                    IIT Madras
                  </p>

                </div>

                <span
                  className="
                    inline-flex
                    w-fit
                    rounded-full
                    border
                    border-[#E5E5E0]
                    bg-white
                    px-3
                    py-1
                    text-[11px]
                    text-gray-500
                  "
                >
                  Certified
                </span>

              </div>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  sm:text-base
                  text-gray-500
                  leading-7
                "
              >
                Completed a three-month NPTEL course in Control Engineering
                from IIT Madras and earned the course certification.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer
        className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-6
          py-10
          sm:py-12
        "
      >

        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-between
            gap-6
          "
        >

          <p className="text-sm text-gray-400">
            © 2026 Minhal Rahman
          </p>


          <div
            className="
              flex
              flex-wrap
              gap-5
              sm:gap-6
            "
          >

            <a
              href="https://github.com/Minhal11"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm
                text-gray-400
                hover:text-[#111]
                transition
              "
            >
              GitHub
            </a>


            <a
              href="https://www.linkedin.com/in/minhal-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm
                text-gray-400
                hover:text-[#111]
                transition
              "
            >
              LinkedIn
            </a>


            <a
              href="mailto:minhalrahman21@gmail.com"
              className="
                text-sm
                text-gray-400
                hover:text-[#111]
                transition
              "
            >
              Email
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}