// Logo walls are aggregate views of affiliations across the cohort and the
// jury network. Never pair a logo or organisation with an individual.

import type { ImageMetadata } from "astro";

import aws from "../assets/logos/aws.png";
import bristol from "../assets/logos/bristol.png";
import cambridge from "../assets/logos/cambridge.png";
import centralesupelec from "../assets/logos/centralesupelec.png";
import dtu from "../assets/logos/dtu.png";
import epfl from "../assets/logos/epfl.png";
import harvard from "../assets/logos/harvard.png";
import imperial from "../assets/logos/imperial.png";
import kcl from "../assets/logos/kcl.png";
import kth from "../assets/logos/kth.png";
import kuleuven from "../assets/logos/kuleuven.png";
import manchester from "../assets/logos/manchester.png";
import meta from "../assets/logos/meta.png";
import nokia from "../assets/logos/nokia.png";
import ovhaiLlm from "../assets/logos/ovhai-llm.jpg";
import oxford from "../assets/logos/oxford.png";
import parisSaclay from "../assets/logos/paris-saclay.png";
import pasteur from "../assets/logos/pasteur.png";
import polito from "../assets/logos/polito.png";
import radboud from "../assets/logos/radboud.png";
import sanofi from "../assets/logos/sanofi.png";
import sapienza from "../assets/logos/sapienza.png";
import tcd from "../assets/logos/tcd.png";
import thales from "../assets/logos/thales.png";
import tudelft from "../assets/logos/tudelft.png";
import tum from "../assets/logos/tum.png";
import uva from "../assets/logos/uva.png";
import aaltoAi from "../assets/logos/societies/aalto-ai.svg";
import epflAiTeam from "../assets/logos/societies/epfl-ai-team.svg";
import ethAnalyticsClub from "../assets/logos/societies/eth-analytics-club.png";
import fortyTwoAi from "../assets/logos/societies/42-ai.png";
import bainsa from "../assets/logos/societies/bainsa.jpg";
import oxai from "../assets/logos/societies/oxai.png";
import imperialAiGroup from "../assets/logos/societies/imperial-ai-group.png";

export interface Logo {
  src: ImageMetadata;
  alt: string;
}

export const PARTNER_LOGOS: Logo[] = [
  { src: aws, alt: "AWS" },
  { src: ovhaiLlm, alt: "OVHai LLM" },
];

export const PARTICIPANT_AFFILIATIONS: Logo[] = [
  { src: oxford, alt: "University of Oxford" },
  { src: cambridge, alt: "University of Cambridge" },
  { src: imperial, alt: "Imperial College London" },
  { src: kcl, alt: "King's College London" },
  { src: tum, alt: "Technical University of Munich" },
  { src: centralesupelec, alt: "CentraleSupélec" },
  { src: parisSaclay, alt: "Université Paris-Saclay" },
  { src: tudelft, alt: "TU Delft" },
  { src: kuleuven, alt: "KU Leuven" },
  { src: uva, alt: "University of Amsterdam" },
  { src: dtu, alt: "Technical University of Denmark" },
  { src: tcd, alt: "Trinity College Dublin" },
  { src: sanofi, alt: "Sanofi" },
  { src: nokia, alt: "Nokia" },
  { src: thales, alt: "Thales" },
];

export const REVIEWER_AFFILIATIONS: Logo[] = [
  { src: epfl, alt: "EPFL" },
  { src: harvard, alt: "Harvard University" },
  { src: meta, alt: "Meta AI" },
  { src: kth, alt: "KTH Royal Institute of Technology" },
  { src: sapienza, alt: "Sapienza University of Rome" },
  { src: polito, alt: "Politecnico di Torino" },
  { src: pasteur, alt: "Institut Pasteur" },
  { src: radboud, alt: "Radboud University" },
  { src: manchester, alt: "University of Manchester" },
  { src: bristol, alt: "University of Bristol" },
];

// University AI societies partnering on the programme. `tone` picks the tile
// background that matches each logo file (some have baked backgrounds).
export interface SocietyLogo extends Logo {
  href: string;
  tone: "light" | "dark" | "panel";
}

export const SOCIETY_LOGOS: SocietyLogo[] = [
  { src: oxai, alt: "Oxford Artificial Intelligence Society", href: "https://www.oxai.org/", tone: "dark" },
  { src: ethAnalyticsClub, alt: "Analytics Club at ETH", href: "https://www.analytics-club.org/", tone: "panel" },
  { src: epflAiTeam, alt: "EPFL AI Team", href: "https://epflaiteam.ch/", tone: "panel" },
  { src: imperialAiGroup, alt: "Imperial AI Group", href: "https://aiimperial-5c431d8c8891.herokuapp.com/", tone: "light" },
  { src: bainsa, alt: "BAINSA — Bocconi AI & Neuroscience Student Association", href: "https://bainsa.ai/", tone: "dark" },
  { src: aaltoAi, alt: "Aalto AI", href: "https://www.aaltoai.com/", tone: "panel" },
  { src: fortyTwoAi, alt: "42 AI", href: "https://42-ai.github.io/", tone: "light" },
];

