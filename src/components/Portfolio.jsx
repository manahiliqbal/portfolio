import { useEffect, useMemo, useRef, useState } from 'react';
import {
  about as aboutData,
  certifications,
  education,
  experience,
  hero,
  human,
  navSections,
  projects,
  sectionCopy,
  skillClusters,
} from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import { IconCheck } from './icons';
import SiteNav from './SiteNav';
import NotebookDecor, { PaperPin } from './NotebookDecor';
import EmbeddingScatter from './EmbeddingScatter';
import { sectionDecors } from '../data/sectionDecors';
import '../styles/portfolio.css';

function MixedText({ parts }) {
  return parts.map((part, index) => {
    if (typeof part === 'string') return <span key={index}>{part}</span>;
    if (part.stat) {
      return (
        <span key={index} className="stat">
          {part.stat}
        </span>
      );
    }
    return null;
  });
}

function ProjectAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="project-accordion">
      {items.map((project, i) => {
        const isOpen = openIndex === i;
        return (
          <article
            key={project.name}
            className={`accordion-item${isOpen ? ' accordion-item--open' : ''}`}
          >
            <button
              type="button"
              className="accordion-header"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="accordion-num">{project.num}</span>
              <span className="accordion-heading">
                <span className="accordion-title-row">
                  <span className="accordion-title">{project.name}</span>
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </span>
                <span className="accordion-subtitle">{project.subtitle}</span>
              </span>
              <span className="accordion-toggle" aria-hidden="true">
                {isOpen ? '×' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="accordion-body">
                <p className="accordion-desc">{project.body}</p>
                <div className="accordion-meta">
                  <div className="accordion-meta-col">
                    <p className="accordion-meta-label">Impact</p>
                    <p className="accordion-meta-value">{project.impact}</p>
                  </div>
                  <div className="accordion-meta-col">
                    <p className="accordion-meta-label">Stack</p>
                    <div className="accordion-stack">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill">
                          <span className="pill-mark" aria-hidden="true">+</span> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {(project.links?.github || project.links?.demo || project.links?.live) && (
                  <div className="accordion-links">
                    {project.links.github && (
                      <a
                        className="accordion-link"
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        className="accordion-link"
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo →
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        className="accordion-link"
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live →
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

function RoleAccordion({ roles }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="timeline-roles">
      {roles.map((role, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={role.title}
            className={`timeline-role${isOpen ? ' timeline-role--open' : ''}`}
          >
            <button
              type="button"
              className="timeline-role-header"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="timeline-role-title">{role.title}</span>
              <span className="timeline-role-period">{role.period}</span>
              <span className="timeline-role-toggle" aria-hidden="true">
                {isOpen ? '×' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="timeline-role-body">
                <ul className="timeline-points">
                  {role.points.map((parts, pi) => (
                    <li key={pi}>
                      <MixedText parts={parts} />
                    </li>
                  ))}
                </ul>
                {role.stack && (
                  <div className="timeline-stack">
                    {role.stack.map((tech) => (
                      <span key={tech} className="pill">
                        <span className="pill-mark" aria-hidden="true">+</span> {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SectionHeading({ num, title, subtitle }) {
  return (
    <header className="section-heading">
      <span className="section-num">{num}</span>
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement('textarea');
      field.value = email;
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      document.body.removeChild(field);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={copy}>
        {copied ? 'Copied ✓' : 'Copy email'}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </>
  );
}

function Reveal({ children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${shown ? ' reveal--in' : ''}`}>
      {children}
    </div>
  );
}

function NotebookSurface({ children, className = '', decorKey, bgLayer, reveal = true }) {
  const decors = decorKey ? sectionDecors[decorKey] : null;

  return (
    <div className={`notebook-surface ${className}`.trim()}>
      <div className="notebook-margin" aria-hidden="true" />
      {decors && <NotebookDecor items={decors} />}
      {bgLayer}
      <div className="notebook-content">
        {reveal ? <Reveal>{children}</Reveal> : children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionIds = useMemo(() => navSections.map((s) => s.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav activeId={activeId} />

      <main id="main">
        <section id="home" className="panel panel-hero">
          <NotebookSurface
            className="notebook-surface--hero"
            decorKey="hero"
            bgLayer={<EmbeddingScatter />}
            reveal={false}
          >
            <div className="hero-centered">
              <span className="hero-status-pill">
                <span className="hero-status-dot" aria-hidden="true" />
                {hero.highlights.find((item) => item.label === 'Availability')?.value}
              </span>

              <h1 className="hero-name" aria-label={`${hero.name} ${hero.nameLast}`}>
                <span className="hero-name-first" aria-hidden="true">
                  {[...hero.name].map((ch, i) => (
                    <span key={i} className="hero-letter" style={{ '--i': i }}>
                      {ch}
                    </span>
                  ))}
                </span>{' '}
                <span className="hero-name-last" aria-hidden="true">
                  {[...hero.nameLast].map((ch, i) => (
                    <span key={i} className="hero-letter" style={{ '--i': i + hero.name.length }}>
                      {ch}
                    </span>
                  ))}
                  <svg className="hero-swoosh" viewBox="0 0 300 24" preserveAspectRatio="none">
                    <path
                      d="M3 15 C 50 4, 105 21, 160 10 S 255 5, 297 13"
                      pathLength="1"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="hero-role-line">
                {hero.role} · {hero.highlights.find((item) => item.label === 'Focus')?.value}
              </p>

              <p className="hero-lead">
                {hero.tagline}. {hero.bio}
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View projects
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get in touch
                </button>
                {hero.resumeUrl && (
                  <a className="btn btn-ghost" href={hero.resumeUrl} download>
                    Résumé ↓
                  </a>
                )}
              </div>
            </div>
            <button
              type="button"
              className="scroll-cue"
              aria-label="Scroll to About"
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="scroll-cue-label">scroll</span>
              <span className="scroll-cue-line" aria-hidden="true" />
            </button>
          </NotebookSurface>
        </section>

        <section id="about" className="panel panel-alt">
          <NotebookSurface decorKey="about">
            <SectionHeading
              num="01"
              title={aboutData.title}
              subtitle={aboutData.subtitle}
            />
            <div className="about-grid">
              <div className="about-copy">
                {aboutData.paragraphs.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
              <div className="focus-card">
                <div className="focus-card-pin" aria-hidden="true">
                  <PaperPin color="red" size={32} />
                </div>
                <p className="focus-card-label">Areas of focus</p>
                <ul className="focus-list">
                  {aboutData.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </NotebookSurface>
        </section>

        <section id="skills" className="panel">
          <NotebookSurface decorKey="skills">
            <SectionHeading
              num="02"
              title="Skills & tools"
              subtitle={sectionCopy.skills.subtitle}
            />
            <div className="skills-grid">
              {skillClusters.map((cluster) => (
                <article key={cluster.label} className="skill-card">
                  <h3 className="skill-card-title">{cluster.label}</h3>
                  <div className="skill-pills">
                    {cluster.skills.map((skill) => (
                      <span key={skill} className="pill">
                        <span className="pill-mark" aria-hidden="true">+</span> {skill}
                      </span>
                    ))}
                    {cluster.extra?.skills.map((skill) => (
                      <span key={skill} className="pill">
                        <span className="pill-mark" aria-hidden="true">+</span> {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </NotebookSurface>
        </section>

        <section id="experience" className="panel panel-alt">
          <NotebookSurface decorKey="experience">
            <SectionHeading
              num="03"
              title="Experience"
              subtitle={sectionCopy.experience.subtitle}
            />
            <div className="timeline">
              {experience.map((job) => (
                <article key={job.org} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-meta">
                    {job.period && <span className="timeline-period">{job.period}</span>}
                    <span className="timeline-location">{job.location}</span>
                  </div>
                  <h3 className="timeline-title">{job.org}</h3>
                  <RoleAccordion roles={job.roles} />
                </article>
              ))}
            </div>
          </NotebookSurface>
        </section>

        <section id="projects" className="panel">
          <NotebookSurface decorKey="projects">
            <SectionHeading
              num="04"
              title="Projects"
              subtitle={sectionCopy.projects.subtitle}
            />
            <ProjectAccordion items={projects} />
          </NotebookSurface>
        </section>

        <section id="education" className="panel panel-alt panel-compact">
          <NotebookSurface decorKey="education">
            <SectionHeading
              num="05"
              title="Education"
              subtitle={sectionCopy.education.subtitle}
            />
            <div className="edu-stack">
              <article className="edu-block">
                <p className="edu-school">{education.school}</p>
                <p className="edu-degree">{education.degree}</p>
                <p className="edu-period">{education.period}</p>
                <p className="edu-gpa">
                  <span className="edu-gpa-label">CGPA</span> {education.gpa}
                </p>
              </article>
            </div>
          </NotebookSurface>
        </section>

        <section id="certifications" className="panel panel-compact">
          <NotebookSurface decorKey="certifications">
            <SectionHeading
              num="06"
              title="Certifications"
              subtitle={sectionCopy.certifications.subtitle}
            />
            <div className="edu-stack">
              <article className="edu-block">
                <ul className="cert-list">
                  {certifications.map((cert) => {
                    const Body = cert.url ? 'a' : 'div';
                    return (
                      <li key={`${cert.course}-${cert.provider}`} className="cert-item">
                        <Body
                          className={`cert-body${cert.url ? ' cert-body--link' : ''}`}
                          {...(cert.url
                            ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          <IconCheck className="cert-check" size={14} />
                          <span className="cert-text">
                            <span className="cert-course">{cert.course}</span>
                            <span className="cert-provider">{cert.provider}</span>
                          </span>
                          {cert.url && (
                            <span className="cert-arrow" aria-hidden="true">
                              ↗
                            </span>
                          )}
                        </Body>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </div>
          </NotebookSurface>
        </section>

        {/*
        <section id="life" className="panel">
          <NotebookSurface decorKey="life">
            <SectionHeading
              num="06"
              title={human.title}
              subtitle={sectionCopy.life.subtitle}
            />
            <div className="human-layout">
              <p className="human-intro">{human.intro}</p>

              <div className="human-grid">
                <div className="human-current">
                  <h3 className="human-card-title">Right now</h3>
                  <ul className="human-current-list">
                    {human.currently.map((item) => (
                      <li key={item.label}>
                        <span className="human-current-emoji" aria-hidden="true">
                          {item.emoji}
                        </span>
                        <span>
                          <span className="human-current-label">{item.label}</span>
                          <span className="human-current-value">{item.value}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="human-loves">
                  <h3 className="human-card-title">Also</h3>
                  <ul className="human-loves-list">
                    {human.loves.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </NotebookSurface>
        </section>
        */}

        <section id="contact" className="panel panel-contact">
          <NotebookSurface decorKey="contact">
            <SectionHeading num="07" title="Contact" subtitle={sectionCopy.contact.subtext} />
            <div className="contact-panel">
              <h3 className="contact-headline">{sectionCopy.contact.headline}</h3>
              <a className="contact-email" href={`mailto:${sectionCopy.contact.email}`}>
                {sectionCopy.contact.email}
              </a>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${sectionCopy.contact.email}`}>
                  Send email
                </a>
                <CopyEmailButton email={sectionCopy.contact.email} />
                {hero.resumeUrl && (
                  <a className="btn btn-ghost" href={hero.resumeUrl} download>
                    Résumé ↓
                  </a>
                )}
                <a
                  className="btn btn-ghost"
                  href={hero.contacts.find((c) => c.icon === 'linkedin')?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-ghost"
                  href={hero.contacts.find((c) => c.icon === 'github')?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </NotebookSurface>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          <span className="squiggle">~</span> Manahil Iqbal · AI Engineer · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
