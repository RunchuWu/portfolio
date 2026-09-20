import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { caseStudies, profile, type CaseStudy, type MediaItem } from "./content";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const homeHref = (section = "") => `${import.meta.env.BASE_URL}${section ? `#${section}` : ""}`;
const siteTitle = "Runchu Wu · HCI & Responsible AI";

function ExternalAnchor({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight aria-hidden="true" /></a>;
}

function ContactLinks({ full = false }: { full?: boolean }) {
  return <div className="contact-links">
    <a href={`mailto:${profile.email}`}>{full ? profile.email : "Email"}</a>
    <ExternalAnchor href={profile.github}>GitHub</ExternalAnchor>
    <ExternalAnchor href={profile.linkedin}>LinkedIn</ExternalAnchor>
    <ExternalAnchor href={profile.twitter}>{full ? "Twitter / X · @runchuwu" : "Twitter / X"}</ExternalAnchor>
  </div>;
}

function Header() {
  return <header className="site-header shell">
    <a className="wordmark" href={homeHref()}>Runchu Wu</a>
    <nav aria-label="Primary navigation"><a href={homeHref("research")}>Research</a><a href={homeHref("work")}>Other work</a><a href={homeHref("contact")}>Contact</a></nav>
  </header>;
}

function ResearchFigure({ kind }: { kind: "speech" | "cognitive" }) {
  return <figure className="research-figure">
    {kind === "speech" ? <div className="concept-nodes"><div><span>Speech model</span><span aria-hidden="true">→</span><span>Audit</span></div><div><span>Diagnosis</span><span aria-hidden="true">→</span><span>Mitigation</span></div></div> : <div className="concept-nodes"><div>Interaction context</div><div>↓ Cognitive state</div><div>↓ Monitoring</div></div>}
    <figcaption>Research scope · conceptual overview</figcaption>
  </figure>;
}

function HomePage() {
  return <main id="main" className="shell" tabIndex={-1}>
    <section className="intro" aria-labelledby="intro-title">
      <p className="eyebrow">Human-Computer Interaction · Responsible AI</p>
      <h1 id="intro-title">Runchu Wu</h1>
      <p className="bio">{profile.bio}</p>
      <ContactLinks />
    </section>
    <section id="research" className="research" aria-labelledby="research-title">
      <div className="section-heading"><h2 id="research-title">Research</h2><span>Selected areas & projects</span></div>
      <article className="research-row">
        <ResearchFigure kind="speech" />
        <div className="research-copy"><p className="eyebrow">Research area · Responsible AI</p><h3>Speech language model safety</h3><p>Auditing, diagnosing, and mitigating safety risks in speech language models.</p><details><summary>Research scope</summary><p>I am interested in understanding where speech language models fail, diagnosing the sources of safety risks, and investigating mitigation strategies.</p></details></div>
      </article>
      <article className="research-row">
        <figure className="research-figure"><a href="#/work/humanai" aria-label="Explore the HumanAI Trust Calibration Engine"><img src={asset("/work/humanai-participant.jpg")} width="1280" height="720" alt="HumanAI participant interface showing an AI recommendation and the choice to follow or oppose it" /></a><figcaption>HumanAI · participant interface</figcaption></figure>
        <div className="research-copy"><p className="eyebrow">Research tooling · GSoC 2026</p><h3><a href="#/work/humanai">Human–AI trust calibration</a></h3><p>An experiment platform for studying trust calibration, with configurable humanlike cues and traceable participant decisions.</p><a className="project-link" href="#/work/humanai">Explore the project <ArrowUpRight aria-hidden="true" /></a></div>
      </article>
      <article className="research-row">
        <ResearchFigure kind="cognitive" />
        <div className="research-copy"><p className="eyebrow">Research area · Human-Computer Interaction</p><h3>Cognitive state monitoring</h3><p>Investigating cognitive states in the context of human interaction with computing systems.</p><details><summary>Research scope</summary><p>My interests include how cognitive states can be monitored in interaction contexts. The illustration presents the research area rather than a validated measurement pipeline.</p></details></div>
      </article>
    </section>
    <section id="work" className="other-work" aria-labelledby="work-title">
      <div className="section-heading"><h2 id="work-title">Other selected work</h2></div>
      {(["dkumoves", "liberata", "sovi"] as const).map(slug => {
        const project = caseStudies.find(item => item.slug === slug)!;
        const descriptions = { dkumoves: "Campus activity product · Product owner, design & front end", liberata: "Research platform · Authentication & discovery", sovi: "AI learning product · Product management internship" };
        return <article className="work-row" key={slug}><h3><a href={`#/work/${slug}`}>{project.title}<ArrowUpRight aria-hidden="true" /></a></h3><p>{descriptions[slug]}</p><span>{project.period}</span></article>;
      })}
    </section>
    <section id="contact" className="contact-section" aria-labelledby="contact-title"><h2 id="contact-title">Contact</h2><p>For research conversations, collaborations, or a hello.</p><ContactLinks full /></section>
  </main>;
}

function SoviStudyFlow() {
  return <div className="study-flow"><p>PDF · Text · Word · Presentations</p><span aria-hidden="true">↓</span><strong>Document-based study folder</strong><span aria-hidden="true">↓</span><p>Summaries · Knowledge maps · Document chat · Quizzes</p><small>Based on Sovi.AI’s public AI Study feature.</small></div>;
}

function ImageViewer({ item, onClose }: { item: MediaItem | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!item) return;
    const previousOverflow = document.body.style.overflow;
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialogRef.current?.close(); document.body.style.overflow = previousOverflow; };
  }, [item]);
  return <dialog className="image-viewer" ref={dialogRef} aria-label={item?.title ?? "Project image"} onClose={onClose} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
    {item && <><button autoFocus className="viewer-close" onClick={() => dialogRef.current?.close()}><X aria-hidden="true" /> Close</button><img src={asset(item.fullSrc ?? item.src ?? "")} alt={item.alt} /><p>{item.caption}</p></>}
  </dialog>;
}

function CaseStudyPage({ project }: { project: CaseStudy }) {
  const [image, setImage] = useState<MediaItem | null>(null);
  const isResearch = project.slug === "humanai";
  return <main id="main" className="case-page shell" tabIndex={-1}>
    <a className="back-link" href={homeHref(isResearch ? "research" : "work")}><ArrowLeft aria-hidden="true" />{isResearch ? "Back to research" : "Back to other work"}</a>
    <header className="case-intro"><p className="eyebrow">{isResearch ? "Research tooling · Human–AI interaction" : project.type} · {project.period}</p><h1>{project.title}</h1><p className="case-lede">{isResearch ? "An experiment platform for studying how people respond to AI advice." : project.heroLine}</p><dl className="case-facts"><div><dt>My contribution</dt><dd>{project.role}</dd></div><div><dt>Focus</dt><dd>{project.focus}</dd></div><div><dt>Tools</dt><dd>{project.tools}</dd></div></dl>{project.externalUrl && <ExternalAnchor href={project.externalUrl}>Visit product</ExternalAnchor>}</header>
    <section className="overview" aria-labelledby="overview-title"><h2 id="overview-title">{isResearch ? "Research infrastructure" : "Project overview"}</h2><div className="summary-facts">{project.summaryFacts.map(fact => <div key={fact.label}><h3>{fact.label}</h3><p>{fact.text}</p></div>)}</div><aside className="scope-note"><h3>Scope & evidence</h3><p>{project.scopeNote}</p></aside></section>
    <section className="project-materials" aria-labelledby="materials-title"><h2 id="materials-title">{isResearch ? "Experiment interfaces" : "Selected interfaces"}</h2><div className="media-grid">{project.media.map(item => <figure key={item.src ?? item.render} className={`media-item media-${item.kind}`}>{item.render ? <SoviStudyFlow /> : <button className="image-button" onClick={() => setImage(item)} aria-label={`Enlarge ${item.title}`}><img src={asset(item.src!)} alt={item.alt} loading="lazy" /><span>View image ↗</span></button>}<figcaption><h3>{item.title}</h3><p>{item.caption}</p></figcaption></figure>)}</div></section>
    <section className="process-section" aria-labelledby="process-title"><h2 id="process-title">{project.processArtifact.title}</h2><p>{project.processArtifact.caption}</p>{project.processArtifact.image ? <button className="image-button process-image" onClick={() => setImage(project.processArtifact.image!)} aria-label="Enlarge session architecture"><img src={asset(project.processArtifact.image.src!)} alt={project.processArtifact.image.alt} loading="lazy" /><span>View image ↗</span></button> : <ol className="process-steps">{project.processArtifact.steps.map(step => <li key={step}>{step}</li>)}</ol>}<dl className="metrics">{project.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl></section>
    <div className="case-end"><a href={homeHref("research")}>All research & projects</a><a href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight aria-hidden="true" /></a></div>
    <ImageViewer item={image} onClose={() => setImage(null)} />
  </main>;
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => { const update = () => setHash(window.location.hash); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  const project = caseStudies.find(item => hash === `#/work/${item.slug}`);
  useEffect(() => {
    document.title = project ? `${project.title} · Runchu Wu` : siteTitle;
    const frame = requestAnimationFrame(() => {
      const section = !project && hash.startsWith("#") ? document.getElementById(hash.slice(1)) : null;
      if (section) section.scrollIntoView(); else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, project]);
  return <div id="top">
    <a className="skip-link" href="#main" onClick={event => {
      event.preventDefault();
      const main = document.getElementById("main");
      main?.focus({ preventScroll: true });
      main?.scrollIntoView();
    }}>Skip to content</a>
    <Header />
    {project ? <CaseStudyPage key={project.slug} project={project} /> : <HomePage />}
    <footer className="site-footer shell"><span>Runchu Wu · HCI & Responsible AI</span><a href="#top" onClick={event => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "instant" });
    }}>Back to top ↑</a></footer>
  </div>;
}
