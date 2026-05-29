import { useEffect, useState } from 'react';
import { navSections } from '../data/portfolioData';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function SiteNav({ activeId }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const handleClick = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="site-nav">
      {open && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="site-nav-inner">
        <button
          type="button"
          className="nav-brand"
          onClick={() => handleClick('home')}
          aria-label="Scroll to top"
        >
          <span className="nav-brand-star" aria-hidden="true">
            ✦
          </span>
          <span className="nav-brand-text">Manahil Iqbal</span>
        </button>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="sr-only">Toggle menu</span>
        </button>

        <nav
          id="site-nav-links"
          className={`nav-links${open ? ' nav-links--open' : ''}`}
          aria-label="Main"
        >
          {navSections.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link${activeId === item.id ? ' nav-link--active' : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="nav-cta"
            onClick={() => handleClick('contact')}
          >
            Say hello
          </button>
        </nav>
      </div>
    </header>
  );
}
