export const STATS = [
  ["103", "Researchers selected"],
  ["65+", "Researchers in the jury"],
  ["20+", "Countries"],
  ["1", "Final · Paris"],
] as const;

export const PILLARS = [
  {
    title: "Research, not a hackathon",
    text: "Original AI/ML research papers, judged on rigour, novelty, and contribution.",
  },
  {
    title: "Double-blind review",
    text: "Working researchers, matched by field, review every paper. Anonymous in both directions: nothing public ever links a person to a paper.",
  },
  {
    title: "One final in Paris",
    text: "The strongest entry per country presents live to an international jury.",
  },
] as const;

export const STAGES = [
  {
    step: "01",
    title: "Submit",
    text: "Through your university AI society, from Bachelor's to PhD.",
  },
  {
    step: "02",
    title: "Review",
    text: "Double-blind, by working researchers matched to each paper's field.",
  },
  {
    step: "03",
    title: "National winners",
    text: "The strongest entry from each country advances.",
  },
  {
    step: "04",
    title: "Paris final",
    text: "Live presentations to an international jury. Winner joins OVHai LLM.",
  },
] as const;

export const FINAL_POINTS = [
  {
    title: "One stage",
    text: "The strongest entry from each country presents live at the global final.",
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
