import { BlockProps } from "../../types";

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingClassesFunction = (
  level: HeadingLevels
) => "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

export interface HeadingAttributes extends BlockProps {
  level: HeadingLevels;
  content: string;
  anchor?: string;
  id?: string;
}

export interface ImageAttributes extends BlockProps {
  align: "left" | "center" | "right";
  alt: string;
  anchor?: string;
  caption?: string;
  href?: string;
  id: number;
  linkClass?: string;
  linkDestination?: string;
  linkTarget?: string;
  rel?: string;
  title?: string;
  url: string;
  savedContent: string;
}

export interface ListAttributes extends BlockProps {
  anchor?: string;
  ordered: boolean;
  values?: string;
}

export interface MoreAttributes extends BlockProps {
  noTeaser: boolean;
  id?: string;
  anchor?: string;
}

export interface ParagraphAttributes extends BlockProps {
  dropCap: boolean;
  content: string;
  id?: string;
  anchor: string;
  className: string;
}

export interface PreAttributes extends BlockProps {
  anchor?: string;
  id?: string;
  content: string;
}

export interface SeparatorAttributes extends BlockProps {
  anchor: string;
  className?: string;
  id?: string;
}

export interface VerseAttributes extends BlockProps {
  anchor?: string;
  id?: string;
  content: string;
}
