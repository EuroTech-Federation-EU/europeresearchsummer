// Shared class strings for the small set of repeated visual primitives.
// Dark editorial-brutalist world: deep navy ground, hairline rules, massive
// display type, monospace micro-labels, sharp near-rectangular actions.
// Cyan is the single working accent. Every pressable element answers on
// press (active:scale); transitions name exact properties.

export const kicker =
  "font-mono text-xs font-medium tracking-[0.2em] text-muted uppercase";

export const btnPrimary =
  "inline-block rounded-xs bg-body px-6 py-3 font-mono text-sm font-semibold tracking-wider text-navy uppercase transition-[transform,background-color] duration-150 ease-snap hover:bg-white active:scale-[0.97]";

export const btnGhost =
  "inline-block rounded-xs border border-line px-6 py-3 font-mono text-sm font-semibold tracking-wider text-body uppercase transition-[transform,border-color,background-color] duration-150 ease-snap hover:border-body/40 hover:bg-body/5 active:scale-[0.97]";

export const displayTitle =
  "text-4xl font-bold tracking-[-0.01em] text-body uppercase md:text-5xl md:leading-[0.95]";
