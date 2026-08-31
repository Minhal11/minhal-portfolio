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

        We use a fixed checkpoint rather than IntersectionObserver
        so the active indicator doesn't flicker during smooth scroll.
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

      setActiveSection(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);


  /* =========================================================
     HEADER COLLAPSE
     
     The header itself NEVER changes height.
     Only Portfolio and Navigation move internally.
  ========================================================= */

  const collapseProgress = Math.min(
    scrollY / 140,
    1
  );

  /*
    Portfolio moves upward and fades away.
  */
  const portfolioY =
    -(collapseProgress * 54);

  const portfolioOpacity =
    1 - collapseProgress;


  /*
    Navigation starts underneath Portfolio
    and moves into its position.
  */
  const navigationY =
    -(collapseProgress * 47);


  /* =========================================================
     SMOOTH SECTION SCROLL
  ========================================================= */

  const scrollToSection = (id: string) => {
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

    setActiveSection(id);

    const headerOffset = 82;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;

    const targetPosition = Math.max(
      elementPosition - headerOffset,
      0
    );

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };


  /* =========================================================
     ACTIVE NAVIGATION INDEX
  ========================================================= */

  const activeIndex = Math.max(
    navItems.findIndex(
      (item) => item.id === activeSection
    ),
    0
  );


  /*
    The nav has 3 equal columns.

    The underline is positioned at the CENTER
    of the active column.

    This means it is always centered under the
    corresponding text on every screen size.
  */
  const underlineLeft =
    `${((activeIndex + 0.5) / navItems.length) * 100}%`;


  return (
    <main className="min-h-screen bg-[#F8F8F5] text-[#111111]">

      {/* =========================================================
          FIXED HEADER

          Minimal
          Futuristic
          No blur
          No separator line
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

            <div className="justify-self-start min-w-0">

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
                PORTFOLIO
                SCROLL LINKED
            ================================================= */}

            <div
              className="
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
                  text-[24px]
                  sm:text-[28px]
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
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2-.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.41-5.29 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
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
            NAVIGATION

            Equal-width columns
            One shared underline
            Underline moves horizontally only
        ===================================================== */}

        <nav
          className="
            absolute
            left-0
            right-0
            top-[68px]
            flex
            justify-center
            px-4
            will-change-transform
          "
          style={{
            transform:
              `translateY(${navigationY}px)`,
          }}
        >

          <div
            className="
              relative
              grid
              grid-cols-3
              items-center
              w-[240px]
              sm:w-[280px]
              md:w-[330px]
            "
          >

            {navItems.map((item) => {

              const isActive =
                activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className={`
                    h-8
                    flex
                    items-start
                    justify-center
                    pb-2
                    whitespace-nowrap
                    text-[12px]
                    sm:text-[14px]
                    md:text-[16px]
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-[#111]"
                        : "text-gray-500 hover:text-[#111]"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}


            {/* =================================================
                SHARED UNDERLINE
                 
                Vertical position is locked permanently.
                Only horizontal position changes.
            ================================================= */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                w-5
                sm:w-6
                h-[2px]
                rounded-full
                bg-[#F4B400]
                -translate-x-1/2
                transition-[left]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
              style={{
                left: underlineLeft,
              }}
            />

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

          <div className="text-center max-w-4xl mx-auto">

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
            text-4xl
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
            md:grid-cols-2
            gap-6
            sm:gap-8
          "
        >

          {/* Liquid Mixer */}

          <Link
            href="/projects/liquid-mixer"
            className="
              group
              rounded-3xl
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
                aspect-[16/10]
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


            <div className="p-6 sm:p-7">

              <p
                className="
                  text-[11px]
                  sm:text-xs
                  uppercase
                  tracking-[2px]
                  sm:tracking-[3px]
                  text-gray-400
                "
              >
                Automation &amp; Instrumentation
              </p>


              <h3
                className="
                  mt-3
                  text-xl
                  sm:text-2xl
                  font-bold
                "
              >
                Smart Industrial Liquid Mixer
              </h3>


              <p
                className="
                  mt-3
                  text-sm
                  sm:text-base
                  text-gray-500
                  leading-7
                "
              >
                Recipe-based liquid dosing and mixing system developed using
                LabVIEW, ESP32 and a web dashboard.
              </p>


              <div className="mt-5 flex flex-wrap gap-2">

                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-xs
                  "
                >
                  LabVIEW
                </span>

                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-xs
                  "
                >
                  ESP32
                </span>

                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-[#F5F5F1]
                    text-xs
                  "
                >
                  Automation
                </span>

              </div>

            </div>

          </Link>


          {/* More Projects */}

          <div
            className="
              rounded-3xl
              border
              border-[#E5E5E0]
              bg-white
              p-8
              flex
              items-center
              justify-center
              min-h-[360px]
              md:min-h-[420px]
            "
          >

            <div className="text-center">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[3px]
                  text-gray-400
                "
              >
                More Projects
              </p>


              <h3 className="mt-4 text-2xl font-bold">
                Coming Soon
              </h3>


              <p className="mt-3 text-gray-500">
                More engineering and automation projects will be added here.
              </p>

            </div>

          </div>

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


          <div className="mt-10 sm:mt-12">

            <div
              className="
                border-l-2
                border-[#F4B400]
                pl-5
                sm:pl-6
              "
            >

              <p className="text-sm text-gray-400">
                B.Tech
              </p>


              <h3
                className="
                  mt-2
                  text-xl
                  sm:text-2xl
                  font-bold
                "
              >
                Electronics &amp; Instrumentation Engineering
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
                Focused on industrial automation, control systems,
                instrumentation and process engineering.
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