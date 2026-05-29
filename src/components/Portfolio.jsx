import { useMemo } from 'react';
import {
  about,
  certifications,
  education,
  experience,
  hero,
  human,
  navSections,
  projects,
  sectionCopy,
  skillClusters,
  about as aboutData,
} from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconMail,
  IconMapPin,
} from './icons';
import SiteNav from './SiteNav';
import NotebookDecor, { PaperPin } from './NotebookDecor';
import { sectionDecors } from '../data/sectionDecors';
import '../styles/portfolio.css';

const contactIcons = {
  mail: IconMail,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  map: IconMapPin,
};

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

function NotebookSurface({ children, className = '', decorKey }) {
  const decors = decorKey ? sectionDecors[decorKey] : null;
  const scatter = decorKey === 'hero' ? 'high' : decorKey ? 'normal' : false;

  return (
    <div className={`notebook-surface ${className}`.trim()}>
      <div className="notebook-margin" aria-hidden="true" />
      {decors && <NotebookDecor items={decors} scatter={scatter} />}
      <div className="notebook-content">{children}</div>
    </div>
  );
}

export default function Portfolio() {
  const sectionIds = useMemo(() => navSections.map((s) => s.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="portfolio">
      <SiteNav activeId={activeId} />

      <main>
        <section id="home" className="panel panel-hero">
          <NotebookSurface className="notebook-surface--hero" decorKey="hero">
            <div className="hero-layout">
              <div className="hero-main">
                <div className="doodle-cluster doodle-cluster--left" aria-hidden="true">
                  <span className="deco-char">✦</span> <span className="deco-char">*</span>{' '}
                  <span className="deco-char">✦</span>
                  <br />
                  <span className="deco-char">*</span> <span className="deco-char">*</span>
                  <br />
                  <span className="deco-char">✦</span> <span className="deco-char">*</span>
                </div>
                <div className="doodle-cluster doodle-cluster--mid" aria-hidden="true">
                  * ~ ✦<br />★ *
                </div>
                <div className="hero-copy">
                  <p className="hero-eyebrow">{hero.eyebrow}</p>
                  <p className="hero-role">{hero.role}</p>
                  <h1 className="hero-name">
                    <span className="hero-name-first">{hero.name}</span>{' '}
                    <span className="hero-name-last">{hero.nameLast}</span>
                  </h1>
                  <div className="hero-underline" aria-hidden="true" />
                  <p className="hero-tagline">{hero.tagline}</p>
                  <p className="hero-bio">{hero.bio}</p>

                  <ul className="hero-highlights" aria-label="Quick facts">
                    {hero.highlights.map((item) => (
                      <li key={item.label} className="hero-highlight">
                        <span className="hero-highlight-label">{item.label}</span>
                        <span className="hero-highlight-value">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                </div>
              </div>

              <aside className="hero-aside" aria-label="Contact links">
                <div className="doodle-cluster" aria-hidden="true">
                  <span className="deco-char">*</span> <span className="deco-char">✦</span>
                  <br />
                  <span className="deco-char">*</span> <span className="deco-char">*</span>
                  <br />
                  <span className="deco-char">*</span>
                </div>
                <p className="aside-label">Contact</p>
                <ul className="contact-list">
                  {hero.contacts.map((item) => {
                    const Icon = contactIcons[item.icon];
                    const Tag = item.href ? 'a' : 'span';
                    return (
                      <li key={item.label}>
                        <Tag
                          className="contact-card"
                          {...(item.href
                            ? {
                                href: item.href,
                                target: item.icon !== 'mail' ? '_blank' : undefined,
                                rel: item.icon !== 'mail' ? 'noopener noreferrer' : undefined,
                              }
                            : {})}
                        >
                          <Icon size={16} />
                          <span>
                            <span className="contact-card-label">{item.label}</span>
                            <span className="contact-card-value">{item.value}</span>
                          </span>
                        </Tag>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </div>
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

        <section id="life" className="panel">
          <NotebookSurface decorKey="life">
            <SectionHeading
              num="02"
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

        <section id="skills" className="panel panel-alt">
          <NotebookSurface decorKey="skills">
            <SectionHeading
              num="03"
              title="Skills & tools"
              subtitle={sectionCopy.skills.subtitle}
            />
            <div className="skills-grid">
              {skillClusters.map((cluster) => (
                <article key={cluster.label} className="skill-card">
                  <h3 className="skill-card-title">{cluster.label}</h3>
                  <div className="skill-pills">
                    {cluster.skills.map((skill) => (
                      <span key={skill} className={`pill pill-${cluster.variant}`}>
                        {skill}
                      </span>
                    ))}
                    {cluster.extra?.skills.map((skill) => (
                      <span key={skill} className={`pill pill-${cluster.extra.variant}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </NotebookSurface>
        </section>

        <section id="experience" className="panel">
          <NotebookSurface decorKey="experience">
            <SectionHeading
              num="04"
              title="Experience"
              subtitle={sectionCopy.experience.subtitle}
            />
            <div className="timeline">
              {experience.map((job) => (
                <article key={`${job.title}-${job.org}`} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-location">{job.location}</span>
                  </div>
                  <h3 className="timeline-title">
                    {job.title} <span className="timeline-org">@ {job.org}</span>
                  </h3>
                  <p className="timeline-desc">
                    <MixedText parts={job.description} />
                  </p>
                </article>
              ))}
            </div>
          </NotebookSurface>
        </section>

        <section id="projects" className="panel panel-alt">
          <NotebookSurface decorKey="projects">
            <SectionHeading
              num="05"
              title="Projects"
              subtitle={sectionCopy.projects.subtitle}
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                >
                  {project.featured && (
                    <span className="corner-star deco-anim-twinkle" aria-hidden="true">
                      ✦
                    </span>
                  )}
                  <div className="project-card-head">
                    <span className="project-num">{project.num}</span>
                    {project.badge && <span className="project-badge">{project.badge}</span>}
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  {project.aside && (
                    <p className="project-aside">
                      <span className="project-aside-mark">~</span> {project.aside}
                    </p>
                  )}
                  <p className="project-desc">
                    {project.descBefore}
                    <span className="proj-highlight">{project.highlight}</span>
                    {project.descAfter}
                  </p>
                  <div className="proj-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="proj-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </NotebookSurface>
        </section>

        <section id="education" className="panel panel-compact">
          <NotebookSurface decorKey="education">
            <SectionHeading
              num="06"
              title="Education & certifications"
              subtitle={sectionCopy.education.subtitle}
            />
            <div className="edu-stack">
              <article className="edu-block">
                <h3 className="subsection-title">Degree</h3>
                <p className="edu-school">{education.school}</p>
                <p className="edu-degree">{education.degree}</p>
                <p className="edu-period">{education.period}</p>
                <p className="edu-gpa">
                  <span className="edu-gpa-label">GPA</span> {education.gpa}
                </p>
              </article>

              <article className="edu-block">
                <h3 className="subsection-title">Certifications</h3>
                <ul className="cert-list">
                  {certifications.map((cert) => (
                    <li key={`${cert.course}-${cert.provider}`} className="cert-item">
                      <IconCheck className="cert-check" size={14} />
                      <span className="cert-text">
                        <span className="cert-course">{cert.course}</span>
                        <span className="cert-provider">{cert.provider}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </NotebookSurface>
        </section>

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
                <a
                  className="btn btn-ghost"
                  href="https://www.linkedin.com/in/manahil-iqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/manahiliqbal"
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
