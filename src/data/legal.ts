// Legal notice content. Factual only: publisher, hosting, data practices.
import { CONTACT_EMAIL } from "./site";

export const LEGAL_SECTIONS = [
  {
    title: "Publisher",
    body: `This website is published by EuroTech Federation, the pan-European deep-tech federation behind the Europe Research Summer programme. Contact: ${CONTACT_EMAIL}.`,
  },
  {
    title: "Hosting",
    body: "This website is hosted by Vercel Inc. (vercel.com).",
  },
  {
    title: "Cookies & analytics",
    body: "This website sets no cookies. Audience is measured with Vercel Web Analytics, a cookieless tool: it stores nothing on your device, collects no personal data, and cannot follow you across sites. That is why no consent banner is required.",
  },
  {
    title: "Personal data",
    body: "This website collects no personal data. Cohort figures shown on this site are aggregate ranges only and can never be linked to an individual. If you write to us by email, your message is used solely to answer you.",
  },
  {
    title: "Intellectual property",
    body: "Logos of partner organisations, universities, and student societies belong to their respective owners and are shown to describe aggregate affiliations only. All other content © EuroTech Federation.",
  },
] as const;
