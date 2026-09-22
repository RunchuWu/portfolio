import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Github, Linkedin, Mail, X } from "lucide-react";
import { caseStudies, profile, type CaseStudy, type MediaItem } from "./content";
import { researchProjects } from "./research";
import { ResearchPage } from "./ResearchPage";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const homeHref = (section = "") => `${import.meta.env.BASE_URL}${section ? `#${section}` : ""}`;
const siteTitle = "Runchu Wu · HCI & Responsible AI";

function ExternalAnchor({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight aria-hidden="true" /></a>;
}

function ContactLinks() {
  return <div id="contact" className="contact-links contact-icons">
    <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} title={profile.email}><Mail aria-hidden="true" /></a>
    <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github aria-hidden="true" /></a>
    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin aria-hidden="true" /></a>
    <a href={profile.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X · @runchuwu" title="Twitter / X · @runchuwu"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.487 3.24H4.3l13.31 17.403Z" /></svg></a>
  </div>;
}

function Header() {
  return <header className="site-header shell">
    <nav aria-label="Primary navigation"><a href={homeHref("research")}>Research</a><a href={homeHref("work")}>Other work</a><a href={homeHref("contact")}>Contact</a></nav>
  </header>;
}

function ResearchFigure() {
  return <figure className="research-figure" aria-label="Conceptual overview of cognitive state monitoring"><div className="concept-nodes"><div>Interaction context</div><div>↓ Cognitive state</div><div>↓ Monitoring</div></div></figure>;
}

function ProjectCover({ project }: { project: CaseStudy }) {
  const hasArtDirection = project.slug === "dkumoves" || project.slug === "sovi";
  const item = project.media[project.slug === "sovi" ? 1 : 0];
  return <div className={`work-cover cover-${project.slug}`}>
    {hasArtDirection ? <div className="cover-composition">
      <div className="cover-type" aria-hidden="true">
        <span>{project.slug === "dkumoves" ? "DKU MOVES" : "Sovi.AI"}</span>
        <p>{project.slug === "dkumoves" ? <>Move,<br /><em>together.</em></> : <>A clearer<br />way to<br /><em>learn.</em></>}</p>
      </div>
      <div className="cover-focus"><img src={asset(item.src!)} alt={item.alt} loading="lazy" decoding="async" /></div>
    </div> : <div className="cover-images"><img src={asset(item.src!)} alt={item.alt} loading="lazy" decoding="async" /></div>}
    <span className="cover-action" aria-hidden="true"><ArrowUpRight /></span>
  </div>;
}

function HomePage() {
  return <main id="main" className="shell" tabIndex={-1}>
    <section className="intro" aria-labelledby="intro-title">
      <h1 id="intro-title">Runchu Wu</h1>
      <p className="bio">{profile.bio}</p>
      <ContactLinks />
    </section>
    <section id="research" className="research" aria-labelledby="research-title">
      <div className="section-heading"><h2 id="research-title">Research</h2></div>
      {researchProjects.map(project => <article className="research-row" key={project.slug}>
        <figure className="research-figure research-preview"><a href={`#/research/${project.slug}`} aria-label={`Explore ${project.title}`}><img src={asset(project.cover)} alt={project.coverAlt} width={project.coverWidth} height={project.coverHeight} loading="lazy" /></a></figure>
        <div className="research-copy"><h3><a href={`#/research/${project.slug}`}>{project.title}</a></h3></div>
      </article>)}
      <article className="research-row">
        <ResearchFigure />
        <div className="research-copy"><h3>Cognitive state monitoring</h3></div>
      </article>
    </section>
    <section id="work" className="other-work" aria-labelledby="work-title">
      <div className="section-heading"><h2 id="work-title">Other selected work</h2></div>
      <div className="work-grid">{(["dkumoves", "liberata", "sovi"] as const).map(slug => {
        const project = caseStudies.find(item => item.slug === slug)!;
        return <article className="work-card" key={slug}>
          <a className="work-card-link" href={`#/work/${slug}`} aria-labelledby={`work-${slug}-title`}>
            <ProjectCover project={project} />
            <div className="work-card-copy">
              <h3 id={`work-${slug}-title`}>{project.title}</h3>
            </div>
          </a>
        </article>;
      })}</div>
    </section>
  </main>;
}

function SoviStudyFlow() {
  return <div className="study-flow"><p>PDF · Text · Word · Presentations</p><span aria-hidden="true">↓</span><strong>Document-based study folder</strong><span aria-hidden="true">↓</span><p>Summaries · Knowledge maps · Document chat · Quizzes</p><small>Based on Sovi.AI’s public AI Study feature.</small></div>;
}

function ProjectStory({ project, onOpen }: { project: CaseStudy; onOpen: (item: MediaItem) => void }) {
  return <section className={`project-story story-${project.slug}`} aria-labelledby="materials-title">
    <div className="story-heading"><h2 id="materials-title">{project.slug === "dkumoves" ? "A rhythm for campus life" : "From a question to understanding"}</h2><p>Inside the experience</p></div>
    {project.media.map(item => <figure className="story-chapter" key={item.src ?? item.render}>
      <div className={`story-stage${item.render ? " story-stage-diagram" : ""}`}>
        {item.render ? <SoviStudyFlow /> : <button className="story-image" onClick={() => onOpen(item)} aria-label={`Enlarge ${item.title}`}><img src={asset(item.src!)} alt={item.alt} loading="lazy" /></button>}
      </div>
      <figcaption className="story-caption">
        <span className="eyebrow">{item.eyebrow}</span>
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
        {!item.render && <button className="story-inspect" onClick={() => onOpen(item)}>Inspect interface <ArrowUpRight aria-hidden="true" /></button>}
        {project.slug === "sovi" && !item.render && <small>Official Sovi.AI product imagery</small>}
      </figcaption>
    </figure>)}
  </section>;
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
    {item && <><button autoFocus className="viewer-close" onClick={() => dialogRef.current?.close()}><X aria-hidden="true" /> Close</button><img src={asset(item.fullSrc ?? item.src ?? "")} alt={item.alt} /><p>{item.caption}</p><a className="viewer-original" href={asset(item.fullSrc ?? item.src ?? "")} target="_blank" rel="noopener noreferrer">Open original image <ArrowUpRight aria-hidden="true" /></a></>}
  </dialog>;
}

function CaseStudyPage({ project }: { project: CaseStudy }) {
  const [image, setImage] = useState<MediaItem | null>(null);
  return <main id="main" className="case-page shell" tabIndex={-1}>
    <a className="back-link" href={homeHref("work")}><ArrowLeft aria-hidden="true" />Back to other work</a>
    <header className="case-intro"><p className="eyebrow">{project.type} · {project.period}</p><h1>{project.title}</h1><p className="case-lede">{project.heroLine}</p><dl className="case-facts"><div><dt>My contribution</dt><dd>{project.role}</dd></div><div><dt>Focus</dt><dd>{project.focus}</dd></div><div><dt>Tools</dt><dd>{project.tools}</dd></div></dl>{project.externalUrl && <ExternalAnchor href={project.externalUrl}>Visit product</ExternalAnchor>}</header>
    <section className="overview" aria-labelledby="overview-title"><h2 id="overview-title">Project overview</h2><div className="summary-facts">{project.summaryFacts.map(fact => <div key={fact.label}><h3>{fact.label}</h3><p>{fact.text}</p></div>)}</div><aside className="scope-note"><h3>Scope & evidence</h3><p>{project.scopeNote}</p></aside></section>
    {project.slug === "dkumoves" || project.slug === "sovi" ? <ProjectStory project={project} onOpen={setImage} /> : <section className="project-materials" aria-labelledby="materials-title"><h2 id="materials-title">Selected interfaces</h2><div className="media-grid">{project.media.map(item => <figure key={item.src ?? item.render} className={`media-item media-${item.kind}`}>{item.render ? <SoviStudyFlow /> : <button className="image-button" onClick={() => setImage(item)} aria-label={`Enlarge ${item.title}`}><img src={asset(item.src!)} alt={item.alt} loading="lazy" /><span>View image ↗</span></button>}<figcaption><h3>{item.title}</h3><p>{item.caption}</p></figcaption></figure>)}</div></section>}
    <section className="process-section" aria-labelledby="process-title"><h2 id="process-title">{project.processArtifact.title}</h2><p>{project.processArtifact.caption}</p>{project.processArtifact.image ? <button className="image-button process-image" onClick={() => setImage(project.processArtifact.image!)} aria-label="Enlarge session architecture"><img src={asset(project.processArtifact.image.src!)} alt={project.processArtifact.image.alt} loading="lazy" /><span>View image ↗</span></button> : <ol className="process-steps">{project.processArtifact.steps.map(step => <li key={step}>{step}</li>)}</ol>}<dl className="metrics">{project.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl></section>
    <div className="case-end"><a href={homeHref("research")}>All research & projects</a><a href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight aria-hidden="true" /></a></div>
    <ImageViewer item={image} onClose={() => setImage(null)} />
  </main>;
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => { const update = () => setHash(window.location.hash); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  const [researchImage, setResearchImage] = useState<MediaItem | null>(null);
  const route = hash.split("/");
  const researchProject = researchProjects.find(item =>
    (route[1] === "research" && route[2] === item.slug) ||
    (hash === "#/work/humanai" && item.slug === "humanai")
  );
  const activeSection = researchProject && route[1] === "research" ? route[3] : undefined;
  const project = caseStudies.find(item => hash === `#/work/${item.slug}`);
  useEffect(() => {
    document.title = researchProject ? `${researchProject.title} · Runchu Wu` : project ? `${project.title} · Runchu Wu` : siteTitle;
    const frame = requestAnimationFrame(() => {
      const section = researchProject && activeSection ? document.getElementById(`${researchProject.slug}-${activeSection}`) : !project && !researchProject && hash.startsWith("#") ? document.getElementById(hash.slice(1)) : null;
      if (section) section.scrollIntoView(); else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, project, researchProject, activeSection]);
  useEffect(() => { setResearchImage(null); }, [hash]);
  return <div id="top">
    <a className="skip-link" href="#main" onClick={event => {
      event.preventDefault();
      const main = document.getElementById("main");
      main?.focus({ preventScroll: true });
      main?.scrollIntoView();
    }}>Skip to content</a>
    <Header />
    {researchProject ? <ResearchPage key={researchProject.slug} slug={researchProject.slug} activeSection={activeSection} onOpen={setResearchImage} /> : project ? <CaseStudyPage key={project.slug} project={project} /> : <HomePage />}
    <ImageViewer item={researchImage} onClose={() => setResearchImage(null)} />
    <footer className="site-footer shell"><a href="#top" onClick={event => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "instant" });
    }}>Back to top ↑</a></footer>
  </div>;
}
