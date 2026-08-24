export const STATS = [
  ["103", "Researchers selected"],
  ["65+", "Researchers in the jury"],
  ["20+", "Countries"],
  ["1", "Final · Paris"],
] as const;

export const PILLARS = [
  {
    title: "Research, not a hackathon",
    text: "You write a real paper. It is judged on rigour, novelty and contribution, and nothing else.",
  },
  {
    title: "Double-blind review",
    text: "Researchers in your field read your paper. They never learn your name.",
  },
  {
    title: "One final in Paris",
    text: "The strongest paper in your country goes to Paris and presents live.",
  },
] as const;

// `count` drives the funnel bar in HowItWorks and is plotted on a linear
// scale, so the last stage is honestly a sliver: that narrowing is the point.
// Every figure here is one already published elsewhere on the site (the cohort
// note in `cohort.ts` and STATS above); none is derived or estimated.
export const STAGES = [
  {
    step: "01",
    title: "Submit",
    text: "You submit through your university AI society, from Bachelor's to PhD.",
    count: 220,
    countLabel: "220 applicants",
  },
  {
    step: "02",
    title: "Review",
    text: "Working researchers matched to your field read it. Neither side sees a name.",
    count: 103,
    countLabel: "103 selected",
  },
  {
    step: "03",
    title: "National winners",
    text: "The strongest paper in each country advances.",
    count: 20,
    countLabel: "One per country",
  },
  {
    step: "04",
    title: "Paris final",
    text: "You present live to an international jury. The winner joins OVHai LLM.",
    count: 1,
    countLabel: "One winner",
  },
] as const;

// The double-blind mechanic, which is the programme's distinguishing rule and
// the reason the whole site shows aggregates only. `redacted` marks the two
// ends that never see each other.
export const BLIND_REVIEW = [
  {
    role: "Author",
    redacted: true,
    text: "You submit through your AI society. Your name never travels with the paper.",
  },
  {
    role: "The paper",
    redacted: false,
    text: "Read on rigour, novelty and contribution. Nothing else is visible.",
  },
  {
    role: "Reviewer",
    redacted: true,
    text: "A working researcher in your field. Their name is never published either.",
  },
] as const;

export const FINAL_POINTS = [
  {
    title: "One stage",
    text: "One paper per country makes it to the stage.",
  },
  {
    title: "International jury",
    text: "Working researchers judge the presentations in person.",
  },
  {
    title: "The prize",
    text: "The winner receives an internship with OVHai LLM. AWS provides compute support for the programme.",
  },
] as const;

export const AREAS = [
  { title: "LLMs & Agents", tag: "Language models · agentic systems" },
  { title: "Safety & Interpretability", tag: "Fairness · trustworthy AI" },
  { title: "Health & Life Sciences", tag: "Clinical AI · computational biology" },
  { title: "Vision & Robotics", tag: "Perception · embodied AI" },
  { title: "AI for Science", tag: "Physics · energy · climate" },
  { title: "ML Theory & Methods", tag: "Foundations · geometric ML" },
] as const;

export const EUROTECH_SIGNALS = [
  "170+ Fellows selected from 2,000+ applications",
  "YC companies and acquisitions among Fellows",
  "PhDs at Cambridge, Oxford, Imperial, EPFL, ELLIS",
  "CERN research, Forbes Under 30, high-citation work",
] as const;
