import Image from "next/image";
import Link from "next/link";

export function ProjectHero({
  number,
  title,
  category,
  description,
  image,
  tags,
  status,
  hasResources = true,
}: {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  hasResources?: boolean;
}) {
  return (
    <>
      <div className="wrap project-breadcrumb">
        <Link href="/#projects">← Selected work</Link>
        <span>PROJECT / {number}</span>
      </div>
      <section className="wrap case-hero">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> {category}
          </p>
          <h1>
            {title}
            <span className="orange">.</span>
          </h1>
          <p className="case-intro">{description}</p>
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a className="resume-link case-explore" href="#overview">
            Explore the project <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="case-cover">
          <div className="diagram-top">
            <span>PROJECT / {number}</span>
            <span>{status}</span>
          </div>
          <Image
            src={image}
            alt={title}
            width={1400}
            height={900}
            loading="eager"
            sizes="(max-width: 700px) 100vw, 50vw"
          />
          <figcaption className="diagram-bottom">
            <span>{category}</span>
            <span>MINHAL RAHMAN</span>
          </figcaption>
        </figure>
      </section>
      <nav className="case-index" aria-label="Project sections">
        <div className="wrap">
          <span>INSIDE THE PROJECT</span>
          <a href="#overview">Overview ↘</a>
          <a href="#engineering">Engineering ↘</a>
          <a href="#gallery">Gallery ↘</a>
          {hasResources && <a href="#resources">Resources ↘</a>}
        </div>
      </nav>
    </>
  );
}

export function SectionTitle({
  number,
  title,
  eyebrow,
}: {
  number: string;
  title: string;
  eyebrow?: string;
}) {
  return (
    <div className="case-section-heading">
      <p className="eyebrow">
        {number} / {eyebrow || "PROJECT NOTES"}
      </p>
      <h2>
        {title}
        <span className="orange">.</span>
      </h2>
    </div>
  );
}

export function ProjectEnd({
  href,
  title,
  number,
}: {
  href: string;
  title: string;
  number: string;
}) {
  return (
    <>
      <section className="case-next">
        <Link href={href} className="wrap">
          <div>
            <p className="eyebrow">KEEP EXPLORING / PROJECT {number}</p>
            <h2>
              {title}
              <span className="orange">.</span>
            </h2>
          </div>
          <span className="contact-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      </section>
      <footer className="site-footer wrap">
        <Link className="footer-name" href="/">
          Minhal Rahman<span className="orange">.</span>
        </Link>
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
          <a href="mailto:minhalrahman21@gmail.com">Email ↗</a>
        </div>
      </footer>
    </>
  );
}
