import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import {
  caseStudies,
  profile,
  selectedExperience,
  type CaseStudy,
  type MediaItem,
  type ProcessArtifact,
  type ProjectSlug,
} from "./content";

type Route = { page: "home" } | { page: "case"; slug: ProjectSlug };

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const homeHref = (section?: string) => `${import.meta.env.BASE_URL}${section ? `#${section}` : ""}`;

function parseRoute(): Route {
  const match = window.location.hash.match(/^#\/work\/(dkumoves|humanai|sovi|liberata)$/);
  return match ? { page: "case", slug: match[1] as ProjectSlug } : { page: "home" };
}

function ExternalAnchor({ href, className = "", children }: { href: string; className?: string; children: ReactNode }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href={homeHref()} aria-label="Runchu Wu, home"><span>RW</span><i>—</i>26</a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav is-open" : "nav"} aria-label="Primary navigation">
        <a href={homeHref("work")} onClick={() => setOpen(false)}>Work</a>
        <a href={homeHref("about")} onClick={() => setOpen(false)}>About</a>
        <a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk <ArrowRight /></a>
      </nav>
      {route.page === "case" && <div className="route-marker">Case study</div>}
    </header>
  );
}

function CapabilityMark() {
  return <div className="capability-mark" aria-label="Product, design, and engineering"><span className="mark-product">Product</span><span className="mark-design">Design</span><span className="mark-engineering">Engineering</span><i aria-hidden="true">×</i></div>;
}

function ProjectVisual({ project, compact = false }: { project: CaseStudy; compact?: boolean }) {
  const className = `project-visual visual-${project.slug}${compact ? " is-compact" : ""}`;
  if (project.slug === "dkumoves") {
    return <div className={className}>{project.media.slice(0, 3).map((item, index) => <div className={`device device-${index + 1}`} key={item.src}><span /><img src={asset(item.src)} alt={item.alt} /></div>)}<b className="visual-watermark">MOVE / LOG / BELONG</b></div>;
  }
  if (project.slug === "humanai") {
    return <div className={className}><img className="desktop-panel desktop-panel-main" src={asset(project.media[0].src)} alt={project.media[0].alt} /><img className="desktop-panel desktop-panel-side" src={asset(project.media[1].src)} alt={project.media[1].alt} /><span className="visual-chip chip-a">3 conditions</span><span className="visual-chip chip-b">5 cue modules</span></div>;
  }
  if (project.slug === "sovi") {
    return <div className={className}><div className="sovi-phone"><img src={asset(project.media[0].src)} alt={project.media[0].alt} /></div><div className="sovi-phone sovi-phone-answer"><img src={asset(project.media[1].src)} alt={project.media[1].alt} /></div><div className="sovi-loop-card"><small>SMART PDF PARSING</small>{project.processArtifact.steps.map((step, index) => <span key={step}><i>0{index + 1}</i>{step}</span>)}</div><b className="visual-watermark">READ / ASK / LEARN</b></div>;
  }
  return <div className={className}><img className="desktop-panel desktop-panel-main" src={asset(project.media[0].src)} alt={project.media[0].alt} /><img className="desktop-panel desktop-panel-side" src={asset(project.media[1].src)} alt={project.media[1].alt} /><img className="liberata-mark" src={asset("/work/liberata-logo.png")} alt="Liberata" /></div>;
}

function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-topline"><span>AI product designer + builder</span><span>Durham ↔ Kunshan</span></div>
        <h1>I design the <em>interface</em> and ship the <em>system</em> behind it.</h1>
        <div className="hero-actions"><a href={`mailto:${profile.email}`}>Email <ArrowRight /></a><ExternalAnchor href={profile.linkedin}>LinkedIn</ExternalAnchor><CapabilityMark /></div>
      </section>

      <div className="marquee" aria-hidden="true"><div>{"PRODUCT THINKING  ·  UX/UI SYSTEMS  ·  AI PROTOTYPING  ·  FRONTEND ENGINEERING  ·  ".repeat(3)}</div></div>

      <section className="work shell" id="work">
        <div className="section-label"><span>01</span><p>Selected work</p><i /></div>
        <div className="project-stack">
          {caseStudies.map((project, index) => <article className={`project-feature feature-${project.slug}`} key={project.slug}>
            <a href={`#/work/${project.slug}`} className="feature-visual" aria-label={`Read ${project.title} case study`}><ProjectVisual project={project} compact /></a>
            <div className="feature-copy">
              <span className="feature-index">0{index + 1} / 04</span>
              <div><p>{project.role}</p><p>{project.period}</p></div>
              <h2>{project.title}</h2>
              <p className="feature-line">{project.homeLine}</p>
              <a href={`#/work/${project.slug}`} className="case-link">View case study <ArrowRight /></a>
            </div>
          </article>)}
        </div>
      </section>

      <section className="about-compact shell" id="about">
        <div className="about-photo"><img src={asset("/profile.png")} alt="Portrait of Runchu Wu" /><span>Available for AI web + UX/UI roles</span></div>
        <div className="about-main">
          <div className="section-label"><span>02</span><p>About + capabilities</p><i /></div>
          <h2>Product taste,<br />with implementation depth.</h2>
          <p className="about-bio">{profile.bio}</p>
          <div className="capability-lines"><span>Product strategy · Flows · Prototyping</span><span>UX/UI · Design systems · Research UX</span><span>React · Next.js · React Native · TypeScript</span></div>
          <div className="compact-experience">{selectedExperience.map(item => <article key={item.organization}><div><small>{item.period}</small><h3>{item.organization}</h3></div><p>{item.role}</p></article>)}</div>
          <div className="contact-row"><a href={`mailto:${profile.email}`}><Mail /> Email</a><ExternalAnchor href={profile.github}><Github /> GitHub</ExternalAnchor><ExternalAnchor href={profile.linkedin}><Linkedin /> LinkedIn</ExternalAnchor></div>
        </div>
      </section>
      <section className="contact shell"><p>Have a complex product idea?</p><a href={`mailto:${profile.email}`}>Let’s make it tangible. <ArrowRight /></a></section>
    </main>
  );
}

function SoviStudyFlow() {
  return <div className="study-flow" role="img" aria-label="PDF, text, Word, and presentation materials enter a Sovi AI study folder that creates summaries, knowledge maps, document chat, and quizzes"><div className="study-inputs"><span>PDF</span><span>Text</span><span>Word</span><span>PPT</span></div><ArrowRight /><div className="study-core"><i>AI</i><b>Study folder</b><small>Document context</small></div><ArrowRight /><div className="study-outputs"><span>Summaries</span><span>Knowledge maps</span><span>Document chat</span><span>Quizzes</span></div><p>Flow based on Sovi.AI’s public AI Study feature.</p></div>;
}

function MediaButton({ item, onOpen }: { item: MediaItem; onOpen: (item: MediaItem) => void }) {
  if (item.render === "sovi-study-flow") return <div className={`media-frame media-${item.kind}`}><SoviStudyFlow /></div>;
  return <button className={`media-frame media-${item.kind}`} onClick={() => onOpen(item)} aria-label={`Open full-screen image: ${item.title}`}><img src={asset(item.src ?? "")} alt={item.alt} /><span className="media-expand">↗ View</span></button>;
}

function VisualStory({ project, onOpen }: { project: CaseStudy; onOpen: (item: MediaItem) => void }) {
  return <section className={`visual-story story-${project.slug} shell`}>
    <div className="case-section-head"><span>02</span><h2>Product story</h2></div>
    <div className={`media-grid media-count-${project.media.length}`}>{project.media.map(item => <figure key={item.src}><MediaButton item={item} onOpen={onOpen} /><figcaption><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.caption}</p></figcaption></figure>)}</div>
  </section>;
}

function ProcessVisual({ artifact, onOpen }: { artifact: ProcessArtifact; onOpen: (item: MediaItem) => void }) {
  if (artifact.image) return <div className="process-image"><MediaButton item={artifact.image} onOpen={onOpen} /></div>;
  return <div className={`process-flow process-${artifact.visual}`}>{artifact.steps.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b>{index < artifact.steps.length - 1 && <ArrowRight />}</div>)}</div>;
}

function Lightbox({ item, onClose }: { item: MediaItem | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  useEffect(() => {
    if (!item) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());
    const handler = (event: globalThis.KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", handler); };
  }, [item, onClose]);
  if (!item) return null;
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} onTouchStart={(event) => { touchStart.current = event.touches[0].clientY; }} onTouchEnd={(event) => { if (touchStart.current !== null && Math.abs(event.changedTouches[0].clientY - touchStart.current) > 80) onClose(); touchStart.current = null; }}>
    <button ref={closeRef} className="lightbox-close" onClick={onClose}><X /> Close</button>
    <img src={asset(item.fullSrc ?? item.src ?? "")} alt={item.alt} />
    <div><span>{item.eyebrow}</span><b>{item.title}</b><p>{item.caption}</p></div>
  </div>;
}

function CaseStudyPage({ project }: { project: CaseStudy }) {
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const openLightbox = (item: MediaItem) => { openerRef.current = document.activeElement as HTMLElement; setLightboxItem(item); };
  const closeLightbox = () => { setLightboxItem(null); requestAnimationFrame(() => openerRef.current?.focus()); };
  return <main className={`case-page case-${project.slug}`}>
    <section className="case-hero shell">
      <a className="back-link" href={homeHref("work")}><ArrowLeft /> Back to work</a>
      <div className="case-kicker"><span>{project.type}</span><span>{project.period}</span></div>
      <h1>{project.title}</h1>
      <p className="case-lede">{project.heroLine}</p>
      <div className="case-roles"><div><small>Role</small><p>{project.role}</p></div><div><small>Focus</small><p>{project.focus}</p></div><div><small>Tools</small><p>{project.tools}</p></div></div>
    </section>

    <section className="case-cover shell"><ProjectVisual project={project} /></section>

    <section className="fact-strip shell">{project.summaryFacts.map((fact, index) => <article key={fact.label}><span>0{index + 1} · {fact.label}</span><p>{fact.text}</p></article>)}</section>

    <VisualStory project={project} onOpen={openLightbox} />

    <section className="selected-process shell">
      <div className="case-section-head"><span>03</span><h2>Selected process</h2></div>
      <div className="process-layout"><div><small>{project.processArtifact.visual}</small><h3>{project.processArtifact.title}</h3><p>{project.processArtifact.caption}</p>{project.externalUrl && <ExternalAnchor href={project.externalUrl} className="product-link">Visit product <ExternalLink /></ExternalAnchor>}</div><ProcessVisual artifact={project.processArtifact} onOpen={openLightbox} /></div>
      {project.processArtifact.colors && <div className="process-colors">{project.processArtifact.colors.map(color => <span key={color} style={{ background: color }}><i>{color}</i></span>)}</div>}
    </section>

    <section className="impact shell">
      <div className="case-section-head"><span>04</span><h2>Impact</h2></div>
      <div className="metric-grid">{project.metrics.map(metric => <article key={metric.value}><strong>{metric.value}</strong><p>{metric.label}</p></article>)}</div>
      <div className="scope-note"><b>Scope note</b><p>{project.scopeNote}</p></div>
    </section>

    <section className="next-case shell"><span>Next case study</span><a href={`#/work/${project.nextSlug}`}>{project.nextTitle}<ArrowRight /></a></section>
    <Lightbox item={lightboxItem} onClose={closeLightbox} />
  </main>;
}

function Footer() {
  return <footer className="footer shell"><div className="wordmark"><span>RW</span><i>—</i>26</div><p>Designed and built by Runchu Wu.</p><a href="#top">Back to top ↑</a></footer>;
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseRoute());
  useEffect(() => { const listener = () => setRoute(parseRoute()); window.addEventListener("hashchange", listener); return () => window.removeEventListener("hashchange", listener); }, []);
  useEffect(() => { if (route.page === "case") { window.scrollTo({ top: 0, behavior: "instant" }); return; } const id = window.location.hash.replace("#", ""); if (id && !id.startsWith("/")) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView()); else window.scrollTo({ top: 0, behavior: "instant" }); }, [route]);
  const project = route.page === "case" ? caseStudies.find(item => item.slug === route.slug) : undefined;
  return <div id="top"><Header route={route} />{project ? <CaseStudyPage project={project} /> : <HomePage />}<Footer /></div>;
}
