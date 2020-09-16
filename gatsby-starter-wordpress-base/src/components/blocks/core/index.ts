import { BlockLibraryType } from "../supported";

import Paragraph from "./paragraph";
import Heading from "./heading";
import More from "./more";
import Separator from "./separator";
import List from "./list";
import Pre from "./pre";

const library: BlockLibraryType = {
  "core/paragraph": {
    component: Paragraph,
    transformerTag: "p",
  },
  "core/heading": {
    component: Heading,
    transformerTag: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },
  "core/more": {
    component: More,
  },
  "core/separator": {
    component: Separator,
    transformerTag: "hr",
  },
  "core/list": {
    component: List,
    transformerTag: ["ol", "ul"],
  },
  "core/preformatted": {
    component: Pre,
    transformerTag: "pre",
  },
};

export default library;

// Expose modules.
export { default as Paragraph } from "./paragraph";
export { default as Heading } from "./heading";
