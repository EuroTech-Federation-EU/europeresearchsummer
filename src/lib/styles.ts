// Shared class strings for the small set of repeated visual primitives.
// Dark editorial-brutalist world: deep navy ground, hairline rules, massive
// display type, monospace micro-labels, sharp near-rectangular actions.
// Cyan is the single working accent. Every pressable element answers on
// press (active:scale); transitions name exact properties.

export const kicker =
  "font-mono text-label font-medium tracking-label text-muted uppercase";

// Running text and small mono labels. Both name a step of the ramp in
// `global.css`, which carries the leading, so neither can drift per component.
export const bodyCopy = "text-copy text-muted";

export const microLabel =
  "font-mono text-label tracking-label text-muted uppercase";

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center rounded-xs bg-body px-6 py-3 font-mono text-ui font-semibold tracking-label text-navy uppercase transition-[transform,background-color] duration-150 ease-snap hover:bg-white active:scale-[0.97]";

export const btnGhost =
  "inline-flex min-h-11 items-center justify-center rounded-xs border border-line px-6 py-3 font-mono text-ui font-semibold tracking-label text-body uppercase transition-[transform,border-color,background-color] duration-150 ease-snap hover:border-body/40 hover:bg-body/5 active:scale-[0.97]";

export const displayTitle =
  "text-headline font-bold tracking-heading text-body uppercase md:text-display";
