# Research portfolio sources

Updated 22 September 2026, using the user's 21 September research summary and the supplied interview deck. These notes support future maintenance; source research repositories and raw study records are not bundled into this website.

## Interview deck assets

Source: the author’s interview presentation, supplied on 22 September 2026. Embedded PNGs were extracted without modifying their content or proportions.

| Website asset | Source |
| --- | --- |
| `public/research/trust/cue-controls.png` | Slide 5, `ppt/media/image1.png` |
| `public/research/trust/cue-catalog.png` | Slide 6, `ppt/media/image2.png` |
| `public/research/trust/task-list-snapshot.png` | Slide 7, `ppt/media/image3.png` |
| `public/research/trust/persona-modes.png` | Slide 8, `ppt/media/image4.png` |
| `public/research/speech/six-condition-heatmap.png` | Slide 11, `ppt/media/image9.png` |
| `public/research/speech/pipeline.png` | Slide 11, `ppt/media/image10.png` |

The deck supplies visual assets. The user’s latest correction frames the current project as Speech Language Model Mitigation & Failure Diagnosis, covering implicit cue detection, policy binding and policy making. Future auditing and English-accent study plans are excluded from the current project page. The text-caption/text-evaluation bias remains an explicit unresolved limitation.

## Speech LM evidence

The latest user brief supplies the overall VoxSafeBench scope: approximately 20,000 utterances across safety, privacy and fairness, covering five subcategories. This is distinct from the four-task Formal793 subset shown in the result figure. The broader expert-policy description includes fairness; the deck pipeline figure illustrates the tested safety/privacy subset. Probe training is presented as the targeted mitigation for Child Voice / Child Presence, without claiming an unreported accuracy gain.

Result values and figure interpretations were checked against the author’s 21 September research-asset review, pipeline documentation and figure guide.

- Pilot50: 24 scoring files / 1,200 labels.
- Formal793: 48 scoring files / 9,516 labels; 793 items × 2 models × 6 conditions.
- Context × Policy: 32 scoring files / 640 labels.
- C1−C0: Qwen −0.3 pp; corrected Kimi +0.0 pp.
- C2−C1: Qwen +57.1 pp; corrected Kimi +31.3 pp.
- Formal793's primary rate is the unweighted four-task macro Aware/All, not a pooled rate or a safety-success rate. The retained benchmark labels are DAR, WAR, RtA and SKIP.
- The six matched answer conditions receive text. Acoustic processing is upstream. The expert module is policy content, not a fine-tuned specialist model; Formal793 does not use a post-generation verifier.
- The 9/21 verification receipts establish record consistency, not automatic-judge validity. This website update does not rerun the experiments or label validation.
- The adult-recording pilot, accent-quality rubric and new behavioral study remain planned. Do not publish draft recruitment/sample-size proposals as completed data.

## Human–AI trust evidence

The brief and deck identify the user's contribution as dataset/task design, cue operationalization, experiment design and infrastructure. The deck credits the mentor with the original proposal and human-subject experiment.

The user reports GSoC infrastructure complete and human research currently running. No participant count or behavioral effect is supplied.

Resolved version discrepancy: the initial brief said 16 + 1 tasks. On 22 September the user explicitly confirmed using the current platform’s 12 main tasks + 2 practices, matching the supplied deck. The page and task-list caption use 12 + 2.
