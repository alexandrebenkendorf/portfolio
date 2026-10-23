export type SectionHeadingVariant = 'label' | 'title';

// 'label' matches the small accent mono uppercase style used where a section
// only needs a lightweight heading (e.g. Skills). 'title' is the larger bold
// style used by sections with a standalone heading (e.g. Experience, Open Source).
export const SECTION_HEADING_CLASSNAME: Record<SectionHeadingVariant, string> = {
  label: 'text-accent-text m-0 font-mono text-sm tracking-[0.12em] uppercase',
  title: 'text-text m-0 text-3xl font-bold tracking-[-0.02em]',
};
