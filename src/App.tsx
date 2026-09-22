import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, X } from "lucide-react";
import { caseStudies, profile, type CaseStudy, type MediaItem } from "./content";
import { researchProjects } from "./research";
import { ResearchPage } from "./ResearchPage";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const homeHref = (section = "") => `${import.meta.env.BASE_URL}${section ? `#${section}` : ""}`;
const siteTitle = "Runchu Wu · HCI & Responsible AI";

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

function ProjectStory({ project }: { project: CaseStudy }) {
  return <section className={`project-story story-${project.slug}`} aria-label={`${project.title} images`}>

    {project.media.map(item => <figure className="story-chapter" key={item.src ?? item.render}>
      <div className={`story-stage${item.render ? " story-stage-diagram" : ""}`}>
        {item.render ? <SoviStudyFlow /> : <div className="story-image"><img src={asset(item.src!)} alt={item.alt} loading="lazy" /></div>}
      </div>
      <figcaption className="story-caption">
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
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
  return <main id="main" className="case-page selected-project shell" tabIndex={-1}>
    <header className="case-intro"><h1>{project.title}</h1></header>
    <section className="project-overview" aria-labelledby="overview-title"><h2 id="overview-title">Overview</h2><p>{project.overview}</p></section>
    <ProjectStory project={project} />
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
    {researchProject && <ImageViewer item={researchImage} onClose={() => setResearchImage(null)} />}
  </div>;
}
