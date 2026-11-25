import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Braces, Database, BrainCircuit, GraduationCap, Award,
  Send, CheckCircle2, AlertCircle, MapPin, Phone, ExternalLink
} from 'lucide-react'
import { profile, skills, projects, education, certifications } from './data'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState({ loading: false, message: '', error: false })

  const closeMenu = () => setMenuOpen(false)

  async function submitContact(event) {
    event.preventDefault()
    setFormState({ loading: true, message: '', error: false })
    try {
      const response = await fetch(`${API_BASE}/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.detail || data.message || 'Could not send your message.')
      setForm({ name: '', email: '', message: '' })
      setFormState({ loading: false, message: 'Thanks! Your message has been submitted.', error: false })
    } catch (error) {
      setFormState({
        loading: false,
        message: API_BASE.includes('127.0.0.1')
          ? 'The contact API is not connected yet. You can email me directly instead.'
          : error.message,
        error: true,
      })
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A</span><span>ajay<span className="accent">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES</div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>{profile.fullName}<span className="accent">.</span></h1>
            <h2>I build <span className="gradient-text">useful digital experiences.</span></h2>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Contact me <Mail size={16} /></a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>}
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative developer code illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>developer.py</small></div>
              <div className="code-content">
                <p><span className="code-purple">class</span> <span className="code-blue">Developer</span>:</p>
                <p className="indent"><span className="code-purple">def</span> <span className="code-yellow">build</span>(self):</p>
                <p className="indent-two">skills = [</p>
                <p className="indent-three code-green">'Python', 'React',</p>
                <p className="indent-three code-green">'Django', 'AI'</p>
                <p className="indent-two">]</p>
                <p className="indent-two"><span className="code-purple">return</span> skills</p>
                <p className="cursor-line">▍</p>
              </div>
              <div className="code-footer"><span><span className="status-dot" /> Available to collaborate</span><span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-python"><Braces size={16} /> Python</div>
            <div className="floating-chip chip-react"><Code2 size={16} /> React</div>
            <div className="floating-chip chip-django"><Database size={16} /> Django</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Building with curiosity." text="A developer focused on learning, problem-solving and turning ideas into working applications." />
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon"><Code2 /></div>
              <h3>Development mindset</h3>
              <p>I enjoy working across the application stack — shaping clean user interfaces, connecting APIs and working with data.</p>
            </div>
            <div className="about-card">
              <div className="about-icon"><BrainCircuit /></div>
              <h3>AI & problem solving</h3>
              <p>My AI & ML background has given me experience exploring machine learning, computer vision and AI-powered automation.</p>
            </div>
            <div className="about-card about-location">
              <div className="about-icon"><MapPin /></div>
              <h3>Based in India</h3>
              <p>{profile.location}. Interested in opportunities to learn, contribute and grow with engineering teams.</p>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies." text="Tools and technologies represented in my learning and project work." />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-card" key={group.group}>
                <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><Braces size={19} /></div>
                <h3>{group.group}</h3>
                <div className="tag-list">{group.items.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects I've worked on." text="A selection of academic and personal projects. Live demos and repository links will be added after deployment." />
          <div className="projects-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-title-row"><h3>{project.title}</h3><span className="project-status">{project.status}</span></div>
                  <p className="project-description">{project.description}</p>
                  <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
                  <div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    {project.repo
                      ? <a href={project.repo} target="_blank" rel="noreferrer">Source code <Github size={15} /></a>
                      : <span className="link-pending">Repository link to be added</span>}
                    {project.demo
                      ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>
                      : <span className="link-pending">Live demo to be added</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionHeading eyebrow="LEARNING JOURNEY" title="Education & certifications." />
          <div className="education-card">
            <div className="education-icon"><GraduationCap /></div>
            <div className="education-content"><span className="eyebrow">2022 — 2026</span><h3>{education.degree}</h3><p>{education.college}</p><strong>{education.score}</strong></div>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, index) => <div className="cert-card" key={cert}><Award size={19} /><span>{cert}</span><small>0{index + 1}</small></div>)}
          </div>
        </section>

        <section className="section-wrap section-block contact-section" id="contact">
          <SectionHeading eyebrow="GET IN TOUCH" title="Have a project in mind?" text="I'm open to conversations about software development opportunities, collaboration and interesting ideas." />
          <div className="contact-grid">
            <div className="contact-info">
              <a href={`mailto:${profile.email}`} className="contact-method"><span><Mail /></span><div><small>EMAIL ME</small><strong>{profile.email}</strong></div><ArrowUpRight /></a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`} className="contact-method"><span><Phone /></span><div><small>CALL ME</small><strong>{profile.phone}</strong></div><ArrowUpRight /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-method"><span><Github /></span><div><small>GITHUB</small><strong>PulyalaAjay</strong></div><ArrowUpRight /></a>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-row">
                <label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" /></label>
                <label>Your email<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email address" /></label>
              </div>
              <label>Message<textarea required rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your message..." /></label>
              <button className="button button-primary submit-button" disabled={formState.loading}>{formState.loading ? 'Sending...' : 'Send message'} <Send size={16} /></button>
              {formState.message && <p className={formState.error ? 'form-feedback error' : 'form-feedback'}>{formState.error ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}{formState.message}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark">A</span><span>ajay<span className="accent">.</span></span></a>
        <p>Designed & built by {profile.fullName}.</p>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    </>
  )
}

export default App
