import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { MediaItem } from "./content";
import { profile } from "./content";
import { researchFigures, researchProjects, type ResearchSlug } from "./research";

const sectionNames = ["RQ", "Methodology", "My Contribution", "Dataset", "Main Result"];
const sectionIds = ["rq", "methodology", "contribution", "dataset", "result"];
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
type OpenImage = (item: MediaItem) => void;

function Section({ slug, index, children }: { slug: ResearchSlug; index: number; children: ReactNode }) {
  return <section className="research-section" id={`${slug}-${sectionIds[index]}`} aria-labelledby={`${slug}-${sectionIds[index]}-title`}>
    <div className="research-section-label"><span aria-hidden="true">0{index + 1}</span><h2 id={`${slug}-${sectionIds[index]}-title`}>{sectionNames[index]}</h2></div>
    <div className="research-section-body">{children}</div>
  </section>;
}

function Figure({ name, onOpen, narrow = false }: { name: string; onOpen: OpenImage; narrow?: boolean }) {
  const item = researchFigures[name];
  return <figure className={`evidence-figure${narrow ? " evidence-narrow" : ""}`}>
    <button className="evidence-image" onClick={() => onOpen(item)} aria-label={`Enlarge ${item.title}`}>
      <img src={asset(item.src!)} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
      <span aria-hidden="true">View full size <ArrowUpRight /></span>
    </button>
    <figcaption><strong>{item.title}.</strong> {item.caption}</figcaption>
  </figure>;
}

function SpeechSections({ onOpen }: { onOpen: OpenImage }) {
  return <>
    <Section slug="speech" index={0}>
      <p className="research-question">How can we mitigate speech language model failures when safety, privacy or fairness concerns are carried by implicit audio cues?</p>
      <p>A child’s voice asking how to change a light bulb can carry a safety concern that the words alone do not reveal. This project develops a mitigation pipeline and investigates where failures arise.</p>
      <div className="research-questions"><div><h3>Mitigation</h3><p>How can non-text cues help a speech LM produce a more appropriate response?</p></div><div><h3>Failure diagnosis</h3><p>Does the failure arise in implicit cue detection, policy binding or policy making?</p></div></div>
    </Section>
    <Section slug="speech" index={1}>
      <h3>Pipeline design</h3>
      <ol className="process-steps speech-pipeline"><li>Audio</li><li>Free caption</li><li>Router</li><li>Expert</li><li>Output</li><li>Evaluator</li></ol>
      <p>The free-form caption describes non-text cues in the audio. A probe and/or LLM router uses cue information to select an expert policy, which guides the response. An external evaluator then scores the output.</p>
      <ul className="research-list">
        <li><strong>Router:</strong> an acoustic probe and an LLM router provide cue and policy-selection signals.</li>
        <li><strong>Expert policies:</strong> safety, including child voice and impairment; fairness; and privacy, including relevant background sounds.</li>
        <li><strong>Metrics:</strong> SKIP, Awareness, RtA and DAR. Awareness combines cue-aware warnings with answers (WAR) and cue-aware refusals or protective redirection (RtA); DAR captures direct answers without the required adaptation. SKIP denotes responses that do not qualify under the rubric.</li>
      </ul>
      <Figure name="pipeline" onOpen={onOpen} />
      <h3>Problem: weak Child Presence / Child Voice performance</h3>
      <p>Poor performance in these groups motivated a targeted mitigation: train an acoustic probe on Child Voice / Child Presence data to improve cue-detection accuracy and provide a stronger signal to the router.</p>
      <details className="research-details"><summary>Inspect the six diagnosis conditions</summary>
        <p>The C0–C5 experiment holds query and cached caption fixed while varying cue and policy sources. Every final answer uses a text interface.</p>
        <div className="research-table-wrap"><table className="research-table"><caption>C0–C5 response-interface interventions</caption><thead><tr><th scope="col">Condition</th><th scope="col">Additional cue</th><th scope="col">Policy</th></tr></thead><tbody>
          {[["C0", "None", "General"], ["C1", "Gold", "General"], ["C2", "Gold", "Oracle task policy"], ["C3", "Gold", "Routed policy set"], ["C4", "Predicted", "Oracle task policy"], ["C5", "Predicted", "Routed policy set"]].map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}
        </tbody></table></div>
        <p>C2 and C4 use task labels to select a policy. The expert module supplies policy content; the target speech LM is not fine-tuned in this comparison.</p>
      </details>
    </Section>
    <Section slug="speech" index={2}>
      <p>Mainly independent study with faculty supervision.</p>
      <ul className="research-list">
        <li><strong>Identify the problem:</strong> investigate failures on implicit safety, privacy and fairness cues, including weak Child Presence / Child Voice performance.</li>
        <li><strong>Design the experiment:</strong> develop the mitigation pipeline, probe-based routing and controlled cue/policy comparisons.</li>
        <li><strong>Analyze the data:</strong> compare responses and evaluation metrics across conditions to investigate where performance changes.</li>
      </ul>
    </Section>
    <Section slug="speech" index={3}>
      <h3 className="finding-title">VoxSafeBench</h3>
      <p>Approximately 20,000 utterances across fairness, privacy and safety categories, covering five subcategories. The benchmark provides the audio and implicit cues used to investigate speech LM failures.</p>
      <p>The six-condition results shown here use a four-task subset: Child Voice, Child Presence, Impaired Capacity and Audio Privacy. Formal793 contains 793 matched items per model; two models across six conditions yield 9,516 response labels.</p>
      <details className="research-details"><summary>View the experiment data inventory</summary>
        <div className="research-table-wrap"><table className="research-table"><caption>Experiment records · 21 September 2026</caption><thead><tr><th scope="col">Panel</th><th scope="col">Scoring files</th><th scope="col">Response labels</th></tr></thead><tbody>
          <tr><th scope="row">Pilot50</th><td>24</td><td>1,200</td></tr>
          <tr><th scope="row">Formal793 · six conditions</th><td>48</td><td>9,516</td></tr>
          <tr><th scope="row">Context × Policy</th><td>32</td><td>640</td></tr>
        </tbody></table></div>
        <p>These counts describe model-response labels, not additional utterances or human participants. Source-hash and task-macro checks establish record consistency, not evaluator validity.</p>
      </details>
    </Section>
    <Section slug="speech" index={4}>
      <h3 className="finding-title">The findings point beyond cue detection to policy binding and policy making.</h3>
      <p>Supplying the implicit cue alone has little effect in the matched experiment. Pairing that cue with the correct task policy produces a much larger improvement in benchmark awareness. This makes the connection between a detected cue and an appropriate policy the central diagnosis question.</p>
      <div className="research-table-wrap"><table className="research-table"><caption>Matched change in task-macro Aware/All · percentage points</caption><thead><tr><th scope="col">Contrast</th><th scope="col">Qwen3-Omni</th><th scope="col">Kimi-Audio, corrected</th></tr></thead><tbody>
        <tr><th scope="row">C1 − C0 · add gold cue</th><td>−0.3</td><td>+0.0</td></tr>
        <tr><th scope="row">C2 − C1 · supply task policy</th><td>+57.1</td><td>+31.3</td></tr>
      </tbody></table></div>
      <Figure name="heatmap" onOpen={onOpen} />
      <aside className="research-note"><h3>Unsolved: improvement or answer matching?</h3><p>The pipeline relies on text captions and text-based evaluation. Higher scores may reflect closer alignment with the evaluator’s expected answer rather than a genuine improvement in behavior. These interface-level interventions support a working diagnosis, but cannot rule out cue-detection failures or establish where an internal failure occurs.</p></aside>
    </Section>
  </>;
}

function TrustSections({ onOpen }: { onOpen: OpenImage }) {
  return <>
    <Section slug="humanai" index={0}>
      <p className="research-question">How do humanlike cues in AI affect the way people weigh its advice and calibrate their trust?</p>
      <p>I focus on the person in the loop: their initial judgment, their response to an agent’s suggestion and their final decision. The research platform turns “humanness” into explicit variables that other researchers can manipulate and inspect.</p>
    </Section>
    <Section slug="humanai" index={1}>
      <p>A controlled pipeline presents advice through Sarah, Alex or Assistant. Three modes vary humanness and friendliness; six cues have five configurable levels: agent name, tone, avatar, personality, framing and expressed confidence.</p>
      <ol className="decision-sequence"><li><span>01</span><strong>Independent judgment</strong><small>Record initial confidence</small></li><li><span>02</span><strong>AI suggestion</strong><small>Present the assigned cue condition</small></li><li><span>03</span><strong>Final decision</strong><small>Record final confidence</small></li></ol>
      <p>The measurement framework tracks lean rate, change rate and oracle comparisons alongside confidence. These measures describe responses to advice; they do not, by themselves, establish that greater reliance means better calibration.</p>
      <Figure name="modes" onOpen={onOpen} />
    </Section>
    <Section slug="humanai" index={2}>
      <p>I designed the dataset and task structure, operationalized the humanlike cues and built the open-source infrastructure for running the experiment and recording decisions.</p>
      <div className="contribution-detail"><Figure name="controls" onOpen={onOpen} narrow /><div>
        <h3>Cue and experiment design</h3><p>Translate appearance and language into configurable conditions, with a catalog that makes each manipulation explicit.</p>
        <h3>Research infrastructure</h3><p>Build the participant flow and researcher controls around the same experiment model, preserving decisions and confidence for analysis.</p>
        <h3>Collaboration and ownership</h3><p>My mentor proposed the original research idea and leads the human-subject experiment. My contribution centers on the dataset, cue operationalization, experiment design and platform implementation.</p>
      </div></div>
      <details className="research-details"><summary>View the complete six-cue catalog</summary><Figure name="catalog" onOpen={onOpen} /></details>
    </Section>
    <Section slug="humanai" index={3}>
      <p className="finding-title">V1 exposed a measurement problem. I rebuilt the dataset as V2.</p>
      <p>V1 questions had determinate answers, which risked turning a trust study into a test of getting the answer right. V2 moved to open everyday judgments where AI output is a suggestion to consider. Numerical judgments also offer a direction for more explicit measurement.</p>
      <dl className="research-inventory"><div><dt>Task inventory</dt><dd>12 + 2</dd></div><div><dt>Interface modes</dt><dd>3</dd></div><div><dt>Cues × levels</dt><dd>6 × 5</dd></div></dl>
      <p className="research-status-note">12 main tasks and 2 practice tasks, confirmed against the current platform. Tasks and interface configurations are design counts, not participant sample sizes.</p>
      <details className="research-details"><summary>View the dataset task list</summary><Figure name="tasks" onOpen={onOpen} narrow /></details>
    </Section>
    <Section slug="humanai" index={4}>
      <h3 className="finding-title">The platform and V2 rebuild are complete. The human study is currently running.</h3>
      <p>The completed GSoC 2026 contribution is a research instrument: configurable cues, a controlled advice pipeline and a decision-recording workflow that supports human studies. The V1 failure led to a concrete dataset rebuild.</p>
      <aside className="research-note"><h3>Behavioral findings are pending</h3><p>Human research and data analysis remain in progress. I do not yet claim that any persona or cue improves trust calibration. Participant counts and effect estimates will be added once confirmed for reporting.</p></aside>
    </Section>
  </>;
}

export function ResearchPage({ slug, activeSection, onOpen }: { slug: ResearchSlug; activeSection?: string; onOpen: OpenImage }) {
  const project = researchProjects.find(item => item.slug === slug)!;
  return <main id="main" className="case-page research-page shell" tabIndex={-1}>
    <a className="back-link" href={`${import.meta.env.BASE_URL}#research`}><ArrowLeft aria-hidden="true" />Back to research</a>
    <header className="case-intro research-intro"><p className="eyebrow">{project.area}</p><h1>{project.title}</h1><p className="case-lede">{project.description}</p><div className="research-meta"><p>{project.role}</p><p>{project.status}</p><span>Research update · September 2026</span></div></header>
    <nav className="research-contents" aria-label="Research project sections">{sectionNames.map((name, index) => <a key={name} href={`#/research/${slug}/${sectionIds[index]}`} aria-current={activeSection === sectionIds[index] ? "location" : undefined}><span aria-hidden="true">0{index + 1}</span>{name}</a>)}</nav>
    {slug === "speech" ? <SpeechSections onOpen={onOpen} /> : <TrustSections onOpen={onOpen} />}
    <div className="case-end"><a href={`#/research/${slug === "speech" ? "humanai" : "speech"}`}>{slug === "speech" ? "Next: Human–AI trust calibration" : "Next: Speech LM mitigation & diagnosis"} <ArrowUpRight aria-hidden="true" /></a><a href={`mailto:${profile.email}`}>Discuss this research <ArrowUpRight aria-hidden="true" /></a></div>
  </main>;
}
