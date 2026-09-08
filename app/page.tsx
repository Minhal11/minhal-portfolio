import Image from "next/image";
import Link from "next/link";
import SystemDiagram from "./components/SystemDiagram";

const projects = [
  {
    number: "01",
    type: "PLC AUTOMATION · DIGITAL TWIN",
    title: "Intelligent movement.\nPrecise control.",
    name: "Smart Warehouse Automation",
    description:
      "From barcode detection to the right destination. A PLC-controlled conveyor system brought to life in a connected 3D simulation.",
    image: "/images/warehouse-hero.jpg",
    href: "/projects/smart-warehouse",
    tags: ["CODESYS", "Structured Text", "OPC UA", "Godot"],
    status: "Simulation project",
  },
  {
    number: "02",
    type: "EMBEDDED SYSTEMS · PROCESS CONTROL",
    title: "The right mix.\nEvery time.",
    name: "Smart Industrial Liquid Mixer",
    description:
      "From LabVIEW logic to a working prototype. An ESP32-based system for gravimetric dosing, automated mixing, and live monitoring.",
    image: "/images/liquid-mixer-prototype.jpg",
    href: "/projects/liquid-mixer",
    tags: ["ESP32", "LabVIEW", "PWM Control", "Web Dashboard"],
    status: "Hardware prototype",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="portfolio">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> ASPIRING AUTOMATION &
            INSTRUMENTATION ENGINEER
          </p>
          <h1>
            Making systems
            <br />
            smarter<span className="orange">.</span>
            <br />
            <span className="muted-heading">By design.</span>
          </h1>
          <p className="hero-intro">
            Hi, I’m <strong>Minhal Rahman.</strong> I connect code, control, and
            hardware to turn engineering ideas into systems that work.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="resume-link"
              href="/Minhal_Rahman_Resume.pdf"
              download
            >
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <SystemDiagram />
        <div className="hero-foot">
          <span>BUILT ON CURIOSITY. DRIVEN BY PRECISION.</span>
          <a href="#projects">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <div className="discipline-strip">
        <div className="wrap">
          <span>PLC PROGRAMMING</span>
          <b>✳</b>
          <span>PROCESS AUTOMATION</span>
          <b>✳</b>
          <span>EMBEDDED SYSTEMS</span>
          <b>✳</b>
          <span>DIGITAL TWINS</span>
        </div>
      </div>
      <section id="projects" className="work-section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Ideas put into motion<span className="orange">.</span>
            </h2>
          </div>
          <p>
            Real builds. Practical learning.
            <br />A closer look at how I engineer.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-card"
              href={project.href}
              key={project.number}
            >
              <div className={`project-image project-image-${project.number}`}>
                <div className="project-image-label">
                  <span>PROJECT / {project.number}</span>
                  <span>{project.status}</span>
                </div>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
                <span className="project-open" aria-label="Read case study">
                  ↗
                </span>
              </div>
              <div className="project-details">
                <p className="eyebrow">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-bottom">
                  <span>Explore case study</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">02 / THE ENGINEER BEHIND THE WORK</p>
            <h2>
              Curious mind.
              <br />
              Hands-on approach<span className="orange">.</span>
            </h2>
            <div className="about-signature">
              Minhal Rahman<span>CODE. CONNECT. CONTROL.</span>
            </div>
          </div>
          <div className="about-content">
            <p className="about-lead">
              I’m fascinated by what happens when the physical world meets
              intelligent control.
            </p>
            <p>
              My background in Applied Electronics & Instrumentation shapes how
              I approach problems — understand the process, design the logic,
              and bring it to life through hardware and software.
            </p>
            <p>
              From simulating warehouse automation to building a liquid-mixing
              prototype, I’m developing practical experience in industrial
              control systems, process automation, and embedded engineering.
            </p>
            <div className="focus-grid">
              <div>
                <span>01</span>
                <h3>Industrial automation</h3>
                <p>
                  PLC programming, sequencing, interlocks, and OPC UA
                  communication.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>Embedded & control</h3>
                <p>
                  ESP32, sensor integration, LabVIEW, and feedback-driven
                  processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="education-section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / A STRONG FOUNDATION</p>
            <h2>
              Always learning.
              <br />
              Always building<span className="orange">.</span>
            </h2>
          </div>
          <p>The theory behind the practice.</p>
        </div>
        <div className="education-list">
          <article>
            <div className="education-date">
              2022 — 2026<span>B.TECH</span>
            </div>
            <div>
              <h3>Applied Electronics & Instrumentation</h3>
              <p>Government Engineering College Kozhikode</p>
            </div>
            <span className="education-badge">CGPA · 7.24 / 10</span>
          </article>
          <article>
            <div className="education-date">
              IN PROGRESS<span>PROFESSIONAL DIPLOMA</span>
            </div>
            <div>
              <h3>Industrial Automation</h3>
              <p>
                IPCS Global · Practical training in PLCs and industrial control
              </p>
            </div>
            <span className="education-badge">
              <i /> Currently pursuing
            </span>
          </article>
          <article>
            <div className="education-date">
              3-MONTH COURSE<span>NPTEL CERTIFICATION</span>
            </div>
            <div>
              <h3>Control Engineering</h3>
              <p>IIT Madras</p>
            </div>
            <span className="education-badge">Certified ↗</span>
          </article>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="wrap">
          <p className="eyebrow">04 / WHAT’S NEXT?</p>
          <div className="contact-heading">
            <h2>
              Let’s build
              <br />
              something <em>smart.</em>
            </h2>
            <a
              className="contact-arrow"
              href="mailto:minhalrahman21@gmail.com"
              aria-label="Email Minhal"
            >
              ↗
            </a>
          </div>
          <div className="contact-bottom">
            <p>
              Have an opportunity in automation or instrumentation?
              <br />
              I’d love to start a conversation.
            </p>
            <a href="mailto:minhalrahman21@gmail.com">
              minhalrahman21@gmail.com ↗
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer wrap">
        <a className="footer-name" href="#main-content">
          Minhal Rahman<span className="orange">.</span>
        </a>
        <span>© 2026 · Engineered with intention.</span>
        <div>
          <a
            href="https://github.com/Minhal11"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/minhal-rahman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="/Minhal_Rahman_Resume.pdf" download>
            Résumé ↓
          </a>
        </div>
      </footer>
    </main>
  );
}
