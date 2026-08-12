import { useEffect, useState, type ReactNode } from "react";
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
import { caseStudies, experience, profile, type CaseStudy, type ProjectSlug } from "./content";

type Route = { page: "home" } | { page: "case"; slug: ProjectSlug };

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const homeHref = (section?: string) => `${import.meta.env.BASE_URL}${section ? `#${section}` : ""}`;

function parseRoute(): Route {
  if (window.location.hash === "#/work/dkumoves") return { page: "case", slug: "dkumoves" };
  if (window.location.hash === "#/work/humanai") return { page: "case", slug: "humanai" };
  if (window.location.hash === "#/work/liberata") return { page: "case", slug: "liberata" };
  return { page: "home" };
}

function ExternalAnchor({ href, className = "", children }: { href: string; className?: string; children: ReactNode }) {
  return <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a>;
}

function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href={homeHref()} aria-label="Runchu Wu, home">
        <span>RW</span><i>—</i>26
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav is-open" : "nav"} aria-label="Primary navigation">
        <a href={homeHref("work")} onClick={() => setOpen(false)}>Work</a>
        <a href={homeHref("approach")} onClick={() => setOpen(false)}>Approach</a>
        <a href={homeHref("about")} onClick={() => setOpen(false)}>About</a>
        <a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk <ArrowRight /></a>
      </nav>
      {route.page === "case" && <div className="route-marker">Case study</div>}
    </header>
  );
}

function Marquee() {
  const text = "PRODUCT THINKING  ·  UX/UI SYSTEMS  ·  AI PROTOTYPING  ·  FRONTEND ENGINEERING  ·  ";
  return <div className="marquee" aria-label="Product thinking, UX/UI systems, AI prototyping, frontend engineering"><div>{text.repeat(3)}</div></div>;
}

function CapabilityMark() {
  return (
    <div className="capability-mark" aria-label="Product, design, and engineering">
      <span className="mark-product">Product</span>
      <span className="mark-design">Design</span>
      <span className="mark-engineering">Engineering</span>
      <i aria-hidden="true">×</i>
    </div>
  );
}

function PhoneFrame({ screen }: { screen: "home" | "challenge" }) {
  return (
    <div className={`phone phone-${screen}`} aria-label={`DKU Moves ${screen} interface reconstruction`}>
      <div className="phone-speaker" />
      <div className="phone-status"><span>9:41</span><span>● ●</span></div>
      {screen === "home" ? (
        <div className="phone-content">
          <div className="phone-head"><div><small>TODAY AT DKU</small><h4>Hi, Runchu</h4></div><b>R</b></div>
          <div className="points-card"><small>Total points</small><strong>4,280</strong><div><span><b>186.4</b> km</span><span><b>9</b> days</span><span><b>#12</b> rank</span></div><button>Log activity</button></div>
          <div className="phone-section"><b>Active challenge</b><span>All</span></div>
          <div className="mini-card"><b>Lake Loop Month</b><p>Collect 60 km around campus.</p><div className="progress"><i /></div><small>43.5 / 60 km</small></div>
          <div className="phone-section"><b>Recent activity</b><span>Profile</span></div>
          <div className="activity-row"><i>RUN</i><div><b>Running</b><small>6.2 km · 36 min</small></div><strong>+145</strong></div>
        </div>
      ) : (
        <div className="phone-content">
          <div className="phone-page-title"><small>MOVE TOGETHER</small><h4>Challenges</h4><p>Turn weekly movement into shared progress.</p></div>
          <div className="challenge-card active"><small>JOINED · 386 PEOPLE</small><h4>Lake Loop Month</h4><p>Collect 60 km around campus before the end of May.</p><div className="progress"><i /></div><b>72% complete</b></div>
          <div className="challenge-card"><small>JOINED · 214 PEOPLE</small><h4>Dorm Streak Sprint</h4><p>Stay active for 14 days with your residential college.</p><div className="progress second"><i /></div><b>9 / 14 active days</b></div>
          <div className="challenge-card upcoming"><small>UP NEXT</small><h4>Summer Points Kickoff</h4><button>Join challenge</button></div>
        </div>
      )}
      <div className="phone-tabs"><span>⌂</span><span>◎</span><span>＋</span><span>♜</span></div>
    </div>
  );
}

function ProjectVisual({ project }: { project: CaseStudy }) {
  if (project.slug === "dkumoves") {
    return <div className="dku-visual"><PhoneFrame screen="home" /><PhoneFrame screen="challenge" /><span className="visual-note">Built as an Expo + React Native MVP</span></div>;
  }
  if (project.slug === "humanai") return (
    <div className="humanai-visual">
      <img src={asset(project.cover)} alt="HumanAI participant operations task" />
      <div className="condition-chip">3 conditions</div>
      <div className="cue-chip">5 cue modules</div>
    </div>
  );
  return (
    <div className="liberata-visual">
      <div className="liberata-browser">
        <div className="browser-chrome"><i /><i /><i /><span>liberata.info</span></div>
        <div className="liberata-shell">
          <aside><img src={asset(project.cover)} alt="Liberata" /><span>Discover</span><span>Reading list</span><span>Collections</span></aside>
          <div className="liberata-main"><img src={asset(project.cover)} alt="" /><div className="liberata-search">Search title, author, institution, or tag <b>⌕</b></div><div className="liberata-paper"><small>OPEN ACCESS · RESEARCH ARTICLE</small><b>Rethinking how scholarly contribution is represented</b><p>Browse and evaluate work before connecting a researcher identity.</p></div><div className="liberata-paper second"><small>TOPIC · ACADEMIC PUBLISHING</small><b>Quality control beyond a single review event</b></div></div>
        </div>
      </div>
      <span className="visual-note">Production platform · contribution-scoped case study</span>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-topline"><span>AI product designer + builder</span><span>Durham ↔ Kunshan</span></div>
        <h1>I design the <em>interface</em> and ship the <em>system</em> behind it.</h1>
        <div className="hero-bottom">
          <p>I work where product decisions, interaction design, and frontend engineering meet—turning ambiguous ideas into clear, testable experiences.</p>
          <CapabilityMark />
        </div>
      </section>
      <Marquee />

      <section className="work shell" id="work">
        <div className="section-label"><span>01</span><p>Selected work</p><i /></div>
        <div className="work-intro"><h2>Three products.<br />Three kinds of complexity.</h2><p>From campus behavior change and academic discovery to controlled AI research, I design the product logic, the interface language, and the implementation path.</p></div>
        <div className="project-grid">
          {caseStudies.map((project, index) => (
            <article className={`project-card project-${project.slug}`} key={project.slug}>
              <a href={`#/work/${project.slug}`} className="project-visual-link" aria-label={`Read ${project.title} case study`}><ProjectVisual project={project} /></a>
              <div className="project-card-copy">
                <div className="project-index">0{index + 1} / 03</div>
                <div className="project-meta">{project.type}<span>{project.period}</span></div>
                <h3>{project.title}</h3>
                <p>{project.oneLiner}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={`#/work/${project.slug}`} className="case-link">View case study <ArrowRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach shell" id="approach">
        <div className="section-label light"><span>02</span><p>How I work</p><i /></div>
        <div className="approach-head"><h2>Build alignment into the artifact.</h2><p>I use prototypes as a shared language between users, product managers, designers, researchers, and engineers.</p></div>
        <div className="process-grid">
          {[['Frame','Turn goals, constraints, and fuzzy requests into a decision-ready problem.'],['Prototype','Make the interaction tangible early enough for honest feedback.'],['Align','Expose tradeoffs through flows, states, schemas, and testable acceptance criteria.'],['Ship','Implement the highest-risk path, verify behavior, and leave clean integration seams.']].map(([title,copy],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="experience shell">
        <div className="section-label"><span>03</span><p>Selected experience</p><i /></div>
        <div className="experience-list">
          {experience.map(item => <article key={item.company}><div><small>{item.period}</small><h3>{item.company}</h3></div><strong>{item.role}</strong><p>{item.detail}</p></article>)}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-photo"><img src={asset('/profile.png')} alt="Portrait of Runchu Wu" /><span>Available for AI web coding + UX/UI opportunities</span></div>
        <div className="about-copy"><div className="section-label"><span>04</span><p>About</p><i /></div><h2>Product taste,<br />with implementation depth.</h2><p>{profile.bio}</p><div className="skill-lines"><span>Product strategy · User flows · Prototyping</span><span>React · Next.js · React Native · TypeScript</span><span>Figma · Design systems · Instrumentation</span></div><div className="contact-row"><a href={`mailto:${profile.email}`}><Mail /> Email</a><ExternalAnchor href={profile.github}><Github /> GitHub</ExternalAnchor><ExternalAnchor href={profile.linkedin}><Linkedin /> LinkedIn</ExternalAnchor></div></div>
      </section>

      <section className="contact shell"><p>Have a complex product idea?</p><a href={`mailto:${profile.email}`}>Let’s make it tangible. <ArrowRight /></a></section>
    </main>
  );
}

function FlowDiagram({ items }: { items: string[] }) {
  return <div className="flow-diagram">{items.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><b>{item}</b>{index < items.length-1 && <ArrowRight />}</div>)}</div>;
}

function CaseStudyPage({ project }: { project: CaseStudy }) {
  return (
    <main className={`case-page case-${project.slug}`}>
      <section className="case-hero shell">
        <a className="back-link" href={homeHref("work")}><ArrowLeft /> Back to work</a>
        <div className="case-kicker"><span>{project.type}</span><span>{project.period}</span></div>
        <h1>{project.title}</h1>
        <p className="case-lede">{project.caseLede}</p>
        <div className="case-roles"><div><small>Role</small><p>{project.role}</p></div><div><small>Focus</small><p>{project.focus}</p></div><div><small>Stack</small><p>{project.stack}</p></div></div>
      </section>

      <section className="case-cover shell"><ProjectVisual project={project} /></section>

      <section className="case-overview shell">
        <div className="case-aside"><span>THE BRIEF</span></div>
        <div><h2>{project.challengeTitle}</h2>{project.challenge.map(p=><p key={p}>{p}</p>)}</div>
      </section>

      <section className="case-principles shell">
        <div className="case-section-head"><span>01</span><h2>{project.strategyTitle}</h2></div>
        <p className="section-deck">{project.strategyIntro}</p>
        <FlowDiagram items={project.flow} />
        <div className="principle-grid">{project.principles.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </section>

      {project.slug === "dkumoves" ? <DkuShowcase /> : project.slug === "humanai" ? <HumanAiShowcase /> : <LiberataShowcase />}

      <section className="case-build shell">
        <div className="case-section-head"><span>03</span><h2>From interface decisions to implementation.</h2></div>
        <div className="build-grid"><div><p className="section-deck">{project.buildIntro}</p><ul>{project.buildPoints.map(item=><li key={item}>{item}</li>)}</ul></div><div className="architecture-card"><small>IMPLEMENTATION MODEL</small>{project.architecture.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><b>{item}</b></div>)}</div></div>
      </section>

      <section className="case-collaboration shell">
        <div><span className="huge-number">04</span><h2>Communication is part of the design.</h2></div>
        <div>{project.collaboration.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </section>

      <section className="case-outcome shell">
        <div className="case-section-head"><span>05</span><h2>Outcome & reflection</h2></div>
        <div className="outcome-grid"><p className="section-deck">{project.outcome}</p><div>{project.evidence.map(item=><article key={item.value}><strong>{item.value}</strong><p>{item.label}</p></article>)}</div></div>
        <div className="honesty-note"><b>Scope note</b><p>{project.scopeNote}</p></div>
      </section>

      <section className="next-case shell"><span>Next case study</span><a href={`#/work/${project.nextSlug}`}>{project.nextTitle}<ArrowRight /></a></section>
    </main>
  );
}

function DkuShowcase() {
  return (
    <section className="showcase dku-showcase shell">
      <div className="case-section-head"><span>02</span><h2>A campus movement system, not another fitness tracker.</h2></div>
      <div className="dku-screen-stage"><PhoneFrame screen="home" /><div className="screen-callouts"><article><span>A</span><h3>One dashboard, one next action</h3><p>Points, progress, active challenge, and recent activity answer “where am I?” before asking users to log more.</p></article><article><span>B</span><h3>Visible feedback after every action</h3><p>Estimated points, review status, streaks, and progress make an administrative workflow feel responsive.</p></article></div><PhoneFrame screen="challenge" /></div>
      <div className="design-system"><div><small>PRODUCT PALETTE</small><h3>DKU energy without varsity clichés.</h3><p>Deep campus green establishes trust; warm gold makes rewards and milestones feel earned; blue is reserved for comparison and ranking.</p></div><div className="swatches"><span style={{background:'#163f2c'}}><i>#163F2C</i></span><span style={{background:'#1f7a4d'}}><i>#1F7A4D</i></span><span style={{background:'#f2b84b'}}><i>#F2B84B</i></span><span style={{background:'#3b7dd8'}}><i>#3B7DD8</i></span></div></div>
    </section>
  );
}

function HumanAiShowcase() {
  return (
    <section className="showcase humanai-showcase shell">
      <div className="case-section-head"><span>02</span><h2>One system, two radically different users.</h2></div>
      <div className="dual-surface"><figure><img src={asset('/work/humanai-participant.jpg')} alt="Participant-facing AI operations supervision task" /><figcaption><span>PARTICIPANT SURFACE</span><b>Clarity under decision pressure</b><p>Staged disclosure, balanced actions, visible progress, and the ability to review earlier trials.</p></figcaption></figure><figure><img src={asset('/work/humanai-researcher.jpg')} alt="Researcher debug interface with condition and cue controls" /><figcaption><span>RESEARCHER SURFACE</span><b>Control without contaminating the study</b><p>Condition forcing, cue inspection, screen jumps, run summaries, and export tools remain outside participant mode.</p></figcaption></figure></div>
      <div className="cue-system"><div><small>MODULAR CONDITION SYSTEM</small><h3>Humanlike cues became composable design variables.</h3></div><div>{['Agent name','Tone + warmth','Avatar','Personality','Confidence + explanation'].map((cue,index)=><span key={cue}><i>0{index+1}</i>{cue}</span>)}</div></div>
    </section>
  );
}

function ScreenshotPlaceholder({ title, note }: { title: string; note: string }) {
  return <div className="screenshot-placeholder"><span>REAL WORKFLOW CAPTURE</span><h3>{title}</h3><p>{note}</p><small>Screenshot will be captured from the live product once browser access is connected.</small></div>;
}

function LiberataShowcase() {
  return (
    <section className="showcase liberata-showcase shell">
      <div className="case-section-head"><span>02</span><h2>One discovery journey, with identity introduced progressively.</h2></div>
      <div className="liberata-workflow">
        <figure><ScreenshotPlaceholder title="01 · Browse as a guest" note="The public experience demonstrates value through real literature before requesting account commitment." /><figcaption><b>Lower the first-use barrier</b><p>Guest mode preserves the same discovery language while making identity-dependent actions explicit.</p></figcaption></figure>
        <figure><ScreenshotPlaceholder title="02 · Search in researcher language" note="Fielded search and partial tag matching connect visible controls to safe server and database behavior." /><figcaption><b>Make precision approachable</b><p>Title, author, institution, and topic become clear entry points instead of exposing query complexity.</p></figcaption></figure>
        <figure><ScreenshotPlaceholder title="03 · Connect ORCID when it matters" note="Authentication appears at the transition from browsing to durable, researcher-specific participation." /><figcaption><b>Let the action explain the sign-in</b><p>The user encounters ORCID with context, rather than as an unexplained front door.</p></figcaption></figure>
      </div>
      <div className="liberata-access-model"><div><small>PROGRESSIVE ACCESS MODEL</small><h3>Guest → connected researcher → member</h3><p>Three user states share one product language and one traceable session foundation.</p></div><ExternalAnchor href="https://liberata.info" className="live-product-link">Visit Liberata.info <ExternalLink /></ExternalAnchor></div>
    </section>
  );
}

function Footer() {
  return <footer className="footer shell"><div className="wordmark"><span>RW</span><i>—</i>26</div><p>Designed and built by Runchu Wu.</p><a href="#top">Back to top ↑</a></footer>;
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseRoute());
  useEffect(() => { const listener=()=>setRoute(parseRoute()); window.addEventListener('hashchange',listener); return()=>window.removeEventListener('hashchange',listener); }, []);
  useEffect(() => { if(route.page==='case'){window.scrollTo({top:0,behavior:'instant'}); return;} const id=window.location.hash.replace('#',''); if(id&&!id.startsWith('/')) requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView()); else window.scrollTo({top:0,behavior:'instant'}); }, [route]);
  const project = route.page === "case" ? caseStudies.find(item => item.slug === route.slug) : undefined;
  return <div id="top"><Header route={route} />{project ? <CaseStudyPage project={project} /> : <HomePage />}<Footer /></div>;
}
