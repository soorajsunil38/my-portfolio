import React from 'react';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ArrowDown, ArrowRight, ArrowUpRight, Linkedin, Instagram, Github, Twitter, Mail, Phone, X, Menu } from 'lucide-react';
import useReveal from './hooks/useReveal';

const skills = [
  { name: 'Python', detail: 'Pandas · NumPy · Matplotlib · Seaborn' },
  { name: 'SQL', detail: 'MySQL · Queries' },
  { name: 'Power BI', detail: 'Dashboards · DAX' },
  { name: 'Tableau', detail: 'Data Visualisation' },
  { name: 'Microsoft Excel', detail: 'Analysis · Pivot Tables' },
  { name: 'Statistics', detail: 'EDA · Data Insights' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.15 });
    let frame;
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') { setProjectOpen(false); setMenuOpen(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const checkPageEnd = () => {
      const atPageEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      document.body.classList.toggle('contact-visible', atPageEnd);
    };

    window.addEventListener('scroll', checkPageEnd, { passive: true });
    window.addEventListener('resize', checkPageEnd);
    checkPageEnd();

    return () => {
      window.removeEventListener('scroll', checkPageEnd);
      window.removeEventListener('resize', checkPageEnd);
      document.body.classList.remove('contact-visible');
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);


  return (
    <main>
      <header className="mobile-bar">
        <a 
          href="#home" 
          className="mobile-brand" 
          onClick={closeMenu}
        >
          Sooraj.
        </a>
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
      </header>

      <section 
        className="hero" 
        id="home"
      >
        <div className="hero-copy">
          <div className="hero-text" data-reveal>
            <h1>
              Sooraj<span>.</span>
            </h1>
            <p className="hero-subtitle">
              Aspiring Data Analyst
            </p>
            <a className="primary-button" href="#contact">
              GET IN TOUCH 
              <ArrowRight size={18} />
            </a>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>
              SCROLL TO EXPLORE
            </span><ArrowDown size={30} strokeWidth={2} />
          </a>
        </div>
        <div className="hero-image-wrap" aria-label="Portrait of Sooraj">
          <img className="hero-image" src="/assets/image2.webp" alt="Sooraj wearing glasses and a dark striped shirt" fetchPriority="high" />
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-inner">
          <h2 className="section-title" data-reveal>
            About Me
          </h2>
          <div className="about-grid">
            <div className="about-photo-frame" data-reveal>
              <img src="/assets/image3.webp" alt="Sooraj in a light shirt against a warm yellow background" loading="lazy" />
              {/* <span className="photo-caption">A LITTLE ABOUT ME ↗</span> */}
            </div>
            <div className="about-copy" data-reveal>
              <p>
                I'm a passionate and aspiring Data Analyst with a strong interest in transforming raw data into meaningful insights. I enjoy exploring datasets, identifying patterns, and presenting information through clear and interactive visualizations.
              </p>
              <p>
                My technical skills include Python, SQL, Excel, Power BI, Tableau, and statistical analysis. I continuously explore new technologies and work on practical projects to strengthen my analytical and problem-solving abilities.
              </p>
              <p>
                My goal is to turn complex data into actionable insights that support smarter business decisions while continuously growing as a data professional.
              </p>
              {/* <a className="text-link" href="#journey">MORE ABOUT MY JOURNEY <ArrowRight size={15} /></a> */}
            </div>
          </div>
        </div>
      </section>

      <section 
        className="toolkit 
        section-pad" 
        id="skills"
      >
        <div className="section-inner">

          <div className="toolkit-heading" data-reveal>
            <h2 className="section-title">My Technical Toolkit</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
            <article
              className="skill-item"
              key={skill.name}
              // data-reveal
              // style={{ '--delay': `${index * 65}ms` }}
            >
              <div className="skill-content">
                <h3>{skill.name}</h3>
                <p>
                  {skill.detail}
                </p>
              </div>
            </article>
              ))}
          </div>
        </div>
      </section>

      <section 
        className="projects section-pad" 
        id="projects"
      >
        <div className="section-inner">
          <div className="projects-top" data-reveal>
            <div>
              <h2 className="section-title">Projects</h2>
            </div>
            {/* <span className="project-count">01 / FEATURED PROJECT</span> */}
          </div>
          <button className="project-feature" onClick={() => setProjectOpen(true)} data-reveal>
            {/* <span className="project-number">01</span> */}
            <span className="project-name">Customer Behavior Data Analytics<br />End-to-End Analytics Pipeline</span>
            <span className="project-action">VIEW PROJECT <ArrowUpRight size={20} /></span>
          </button>
          {/* <div className="project-bottom" data-reveal>
            <p>Turning customer data into clear, practical business insights.</p>
            <span>PYTHON / SQL / POWER BI</span>
          </div> */}
        </div>
      </section>

      <section className="journey section-pad" id="journey">
        <div className="section-inner journey-inner">
          <div data-reveal>
            <h2 className="section-title">My Journey</h2>
          </div>
          <div className="timeline" data-reveal>
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">
                  2022 – 2026
                </span>
                <h3>Bachelor of Technology (B.Tech)</h3>
                <p>
                  Information Technology <span>· Institute of Engineering and Technology, Calicut University</span>
                </p>
              </div>
              {/* <span className="timeline-type">EDUCATION</span> */}
            </article>
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">
                  2026 – Present
                </span>
                <h3>Data Analyst Intern</h3>
                <p>
                  Techolas Technologies <span>· Palakkad</span>
                </p>
              </div>
              {/* <span className="timeline-type">EXPERIENCE</span> */}
            </article>
          </div>
          {/* <div className="journey-note" data-reveal><span>CURIOUS BY NATURE.</span><span>DRIVEN BY DATA.</span></div> */}
        </div>
      </section>

      <section className="contact-art" aria-label="Say hello">
        <div className="contact-art-inner" data-reveal>
          <img 
            className="hello-cube" 
            src="/assets/image4.webp" 
            alt="Red three-dimensional hello block" 
            loading="lazy" 
          />
          <img 
            className="cursor-art" 
            src="/assets/image5.webp" 
            alt="Pixelated cursor illustration" 
            loading="lazy" 
          />
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-heading" data-reveal>
            <h2>Let's Connect!</h2>
          </div>
          <div className="footer-social" data-reveal>
            <a href="https://www.linkedin.com/in/soorajsunil38" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://www.instagram.com/zooorajjj" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://github.com/soorajsunil38" target="_blank" rel="noreferrer" aria-label="Github"><Github /></a>
            <a href="https://x.com/iamsooraj___" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.636 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.291 19.49h2.039L6.486 3.24H4.298z" />
              </svg>
            </a>
          </div>
          <div className="footer-details" data-reveal>
            <a href="tel:+918590007528" className="contact-detail"><Phone size={17} /><span><strong>Phone</strong><small>+91 8590007528</small></span></a>
            <a href="mailto:soorajsunil38@gmail.com" className="contact-detail"><Mail size={17} /><span><strong>Email</strong><small>soorajsunil38@gmail.com</small></span></a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 SOORAJ SUNIL</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>

      {projectOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setProjectOpen(false); }}>
        <section 
          className="project-modal" 
          role="dialog" aria-modal="true" 
          aria-labelledby="project-modal-title"
        >
          <button 
            className="modal-close" 
            onClick={() => setProjectOpen(false)} 
            aria-label="Close project details"
          >
            <X />
          </button>
          {/* <p className="eyebrow">FEATURED PROJECT · 01</p> */}
          <h2 id="project-modal-title">
            Customer Behavior Data Analytics
          </h2>
          <p className="modal-intro">
            An end-to-end customer analytics project focused on uncovering purchasing patterns through data analysis, developing advanced KPIs, and delivering interactive dashboards for actionable business insights.
          </p>
          <div className="modal-tags">
            <span>Python</span><span>SQL</span><span>Power BI</span><span>Exploratory Data Analysis</span>
          </div>
          {/* <div className="modal-note">Project overview based on the portfolio design. Add a repository or live dashboard URL when it is ready to share.</div> */}
          <a className="primary-button modal-cta" href="https://github.com/soorajsunil38/Data-Analytics-Project">VIEW ON GITHUB <ArrowRight size={16} /></a>
        </section>
      </div>}

      {/* <a className="floating-mail" href="mailto:soorajsunil38@gmail.com" aria-label="Send an email"><Mail size={19} /></a> */}
    </main>
  );
}

export default App;
