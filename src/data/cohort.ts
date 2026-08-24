// Aggregated, anonymised cohort data. Counts are shown as ranges only,
// never expose anything that could link an individual to a paper.

export interface CountryPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  participants: number;
  reviewers: number;
}

// x/y are centroids in the coordinate space of assets/europe-paths.svg.
export const COUNTRIES: CountryPoint[] = [
  { id: "DE", name: "Germany", x: 281, y: 556, participants: 20, reviewers: 4 },
  { id: "GB", name: "United Kingdom", x: 187, y: 512, participants: 17, reviewers: 9 },
  { id: "FR", name: "France", x: 227, y: 606, participants: 15, reviewers: 8 },
  { id: "IT", name: "Italy", x: 295, y: 647, participants: 10, reviewers: 15 },
  { id: "ES", name: "Spain", x: 170, y: 690, participants: 8, reviewers: 7 },
  { id: "IE", name: "Ireland", x: 156, y: 533, participants: 5, reviewers: 0 },
  { id: "GR", name: "Greece", x: 372, y: 680, participants: 4, reviewers: 5 },
  { id: "HU", name: "Hungary", x: 342, y: 599, participants: 4, reviewers: 0 },
  { id: "RO", name: "Romania", x: 379, y: 610, participants: 3, reviewers: 0 },
  { id: "UA", name: "Ukraine", x: 420, y: 585, participants: 3, reviewers: 0 },
  { id: "AT", name: "Austria", x: 301, y: 594, participants: 2, reviewers: 0 },
  { id: "DK", name: "Denmark", x: 289, y: 501, participants: 2, reviewers: 3 },
  { id: "NL", name: "Netherlands", x: 246, y: 548, participants: 2, reviewers: 6 },
  { id: "PL", name: "Poland", x: 340, y: 548, participants: 2, reviewers: 2 },
  { id: "FI", name: "Finland", x: 388, y: 415, participants: 1, reviewers: 0 },
  { id: "HR", name: "Croatia", x: 322, y: 625, participants: 1, reviewers: 0 },
  { id: "PT", name: "Portugal", x: 143, y: 690, participants: 1, reviewers: 1 },
  { id: "CH", name: "Switzerland", x: 266, y: 603, participants: 1, reviewers: 2 },
  { id: "BE", name: "Belgium", x: 241, y: 565, participants: 1, reviewers: 2 },
  { id: "BG", name: "Bulgaria", x: 382, y: 641, participants: 1, reviewers: 0 },
  { id: "SE", name: "Sweden", x: 327, y: 460, participants: 0, reviewers: 2 },
  { id: "NO", name: "Norway", x: 300, y: 445, participants: 0, reviewers: 1 },
];

// Bucketed display: circle radius and label range, never exact counts.
export const BUCKETS = [
  { max: 2, r: 8, label: "1–2" },
  { max: 5, r: 12, label: "3–5" },
  { max: 10, r: 17, label: "6–10" },
  { max: 25, r: 23, label: "11–20" },
] as const;

export function bucketFor(count: number) {
  return BUCKETS.find((bucket) => count <= bucket.max) ?? BUCKETS[BUCKETS.length - 1];
}
