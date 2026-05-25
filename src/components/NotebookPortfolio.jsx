import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconFolder,
  IconMail,
  IconMapPin,
  IconUser,
} from './icons';
import {
  certifications,
  education,
  experience,
  hero,
  navItems,
  projects,
  skillClusters,
} from '../data/portfolioData';
import '../styles/NotebookPortfolio.css';

const RULED_LINE_START = 44;
const RULED_LINE_STEP = 24;
const RULED_LINE_COUNT = 40;

const contactIcons = {
  mail: IconMail,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  map: IconMapPin,
};

const navIcons = {
  folder: IconFolder,
  user: IconUser,
  mail: IconMail,
};

function RuledBackground() {
  const tops = Array.from(
    { length: RULED_LINE_COUNT },
    (_, i) => RULED_LINE_START + i * RULED_LINE_STEP,
  );

  return (
    <div className="ruled-bg" aria-hidden="true">
      <div className="margin-line" />
      {tops.map((top) => (
        <div key={top} className="h-line" style={{ top: `${top}px` }} />
      ))}
    </div>
  );
}

function MixedText({ parts }) {
  return parts.map((part, index) => {
    if (typeof part === 'string') {
      return <span key={index}>{part}</span>;
    }
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

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function NotebookPortfolio() {
  const handleNav = (id) => {
    if (id === 'contact') {
      window.location.href = 'mailto:manahiliqbal0511@gmail.com';
      return;
    }
    scrollToSection(id);
  };

  return (
    <article className="page-wrap">
      <h1 className="sr-only">Notebook-style portfolio for Manahil Iqbal, AI Engineer</h1>

      <RuledBackground />

      <div className="content">
        <section id="about" className="section hero-section">
          <div className="doodle-stars" aria-hidden="true">
            * &nbsp; *<br />
            &nbsp; * *<br />
            * &nbsp; &nbsp;
          </div>

          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h2 className="hero-name">
            {hero.name} <span>{hero.nameAccent}</span>
          </h2>
          <div className="hero-underline" aria-hidden="true" />
          <p className="hero-bio">
            AI Engineer building things that actually work —{' '}
            <span className="ink">RAG pipelines, LLM integrations,</span> agentic workflows, and
            full-stack backends. Currently at PureLogics, Lahore. 3.96 GPA. Chronic over-achiever.
            Open to freelance.
          </p>

          <div className="contact-row">
            {hero.contacts.map((contact) => {
              const Icon = contactIcons[contact.icon];
              const Tag = contact.href ? 'a' : 'span';
              return (
                <Tag
                  key={contact.label}
                  className="contact-chip"
                  {...(contact.href
                    ? {
                        href: contact.href,
                        target: contact.icon !== 'mail' ? '_blank' : undefined,
                        rel: contact.icon !== 'mail' ? 'noopener noreferrer' : undefined,
                      }
                    : {})}
                >
                  <Icon size={13} />
                  {contact.label}
                </Tag>
              );
            })}
          </div>
        </section>

        <section className="section">
          <h3 className="section-label">skills &amp; tools</h3>
          {skillClusters.map((cluster) => (
            <div key={cluster.label} className="skill-cluster">
              <p className="skill-cluster-label">
                <span className="squiggle">~</span> {cluster.label}
              </p>
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
            </div>
          ))}
        </section>

        <section className="section">
          <h3 className="section-label">experience</h3>
          {experience.map((job) => (
            <div key={job.title} className="exp-item">
              <div className="exp-dot" aria-hidden="true" />
              <p className="exp-title">{job.title}</p>
              <p className="exp-company">{job.company}</p>
              <p className="exp-desc">
                <MixedText parts={job.description} />
              </p>
            </div>
          ))}
        </section>

        <section id="projects" className="section">
          <h3 className="section-label">projects</h3>
          <div className="proj-grid">
            {projects.map((project) => (
              <div key={project.name} className="proj-card">
                {project.starred && (
                  <span className="corner-star" aria-hidden="true">
                    *
                  </span>
                )}
                <p className="proj-num">{project.num}</p>
                <p className="proj-name">{project.name}</p>
                <p className="proj-desc">
                  {project.descBefore && <>{project.descBefore}</>}
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
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3 className="section-label">education</h3>
          <div className="edu-row">
            <div>
              <p className="edu-school">{education.school}</p>
              <p className="edu-detail">{education.detail}</p>
            </div>
            <p className="edu-gpa">{education.gpa}</p>
          </div>
        </section>

        <section className="section">
          <h3 className="section-label">certifications</h3>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert} className="cert-item">
                <IconCheck className="cert-check" size={12} />
                {cert}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3 className="section-label">a little more</h3>
          <p className="about-note">
            I like shipping systems that feel simple on the surface — retrieval pipelines, agent
            workflows, and APIs that teams can actually maintain. When I am not debugging embeddings,
            you will find me mentoring students or sketching the next side project in the margin.
          </p>
        </section>
      </div>

      <nav className="nav-footer" aria-label="Portfolio shortcuts">
        {navItems.map((item) => {
          const Icon = navIcons[item.icon];
          return (
            <button
              key={item.id}
              type="button"
              className="nav-item"
              onClick={() => handleNav(item.id)}
            >
              <Icon size={13} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </article>
  );
}
