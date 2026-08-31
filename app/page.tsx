import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F5] text-[#111111]">

      {/* Header */}
      <header className="w-full">
        <div className="max-w-6xl mx-auto px-6 py-8">

          <div className="flex items-center justify-between">

            {/* Name */}
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight"
            >
              Minhal Rahman
            </Link>

            {/* Portfolio */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link
                href="/"
                className="text-4xl font-medium tracking-tight"
              >
                Portfolio<span className="text-[#F4B400]">.</span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-7 ml-auto">

              {/* GitHub */}
              <a
                href="https://github.com/Minhal11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#555] hover:text-[#111] transition"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.41-5.29 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/minhal-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#555] hover:text-[#111] transition"
              >
                <svg
                  width="22"
                  height="22"
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
                className="text-[#555] hover:text-[#111] transition"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>

            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-14 mt-12">

            <a
              href="#about"
              className="relative text-[16px] text-[#111] pb-3"
            >
              About
              <span className="absolute left-0 bottom-0 w-6 h-[2px] bg-[#F4B400]" />
            </a>

            <a
              href="#projects"
              className="text-[16px] text-gray-500 hover:text-[#111] transition pb-3"
            >
              Projects
            </a>

            <a
              href="#education"
              className="text-[16px] text-gray-500 hover:text-[#111] transition pb-3"
            >
              Education
            </a>

          </nav>

        </div>
      </header>


      {/* Hero */}
      <section
        id="about"
        className="min-h-[650px] flex items-center"
      >

        <div className="max-w-6xl mx-auto px-6 w-full">

          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-[-4px] leading-[0.95]">
              Hi, I&apos;m Minhal
            </h1>

            <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
              Automation &amp; Instrumentation Engineer
            </h2>

            <p className="mt-8 text-lg md:text-xl text-gray-500 leading-9 max-w-3xl mx-auto">
              Aspiring Automation &amp; Instrumentation Engineer focused on
              industrial control systems, process automation, and engineering
              innovation.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              {/* View Projects */}
              <a
                href="#projects"
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
                  transition
                "
              >
                View Projects
              </a>

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
                  transition
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


      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <p className="text-[12px] tracking-[4px] text-gray-400 uppercase">
          Selected Works
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Projects
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">

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
              transition
            "
          >

            <div className="aspect-[16/10] overflow-hidden bg-[#F2F2ED]">

              <img
                src="/images/liquid-mixer-prototype.jpg"
                alt="Smart Industrial Liquid Mixer"
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-[1.03]
                  transition
                  duration-500
                "
              />

            </div>

            <div className="p-7">

              <p className="text-xs uppercase tracking-[3px] text-gray-400">
                Automation &amp; Instrumentation
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Smart Industrial Liquid Mixer
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Recipe-based liquid dosing and mixing system developed using
                LabVIEW, ESP32 and a web dashboard.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="px-3 py-1 rounded-full bg-[#F5F5F1] text-xs">
                  LabVIEW
                </span>

                <span className="px-3 py-1 rounded-full bg-[#F5F5F1] text-xs">
                  ESP32
                </span>

                <span className="px-3 py-1 rounded-full bg-[#F5F5F1] text-xs">
                  Automation
                </span>

              </div>

            </div>

          </Link>


          {/* Placeholder / Second Project */}
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
              min-h-[420px]
            "
          >

            <div className="text-center">

              <p className="text-xs uppercase tracking-[3px] text-gray-400">
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


      {/* Education */}
      <section
        id="education"
        className="bg-white border-t border-[#EAEAE5]"
      >

        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-[12px] tracking-[4px] text-gray-400 uppercase">
            Academic Background
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Education
          </h2>

          <div className="mt-12">

            <div className="border-l-2 border-[#F4B400] pl-6">

              <p className="text-sm text-gray-400">
                B.Tech
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Electronics &amp; Instrumentation Engineering
              </h3>

              <p className="mt-2 text-gray-500">
                Focused on industrial automation, control systems,
                instrumentation and process engineering.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col sm:flex-row justify-between gap-6">

          <p className="text-sm text-gray-400">
            © 2026 Minhal Rahman
          </p>

          <div className="flex gap-6">

            <a
              href="https://github.com/Minhal11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-[#111] transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/minhal-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-[#111] transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:minhalrahman21@gmail.com"
              className="text-sm text-gray-400 hover:text-[#111] transition"
            >
              Email
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}