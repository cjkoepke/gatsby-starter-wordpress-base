import React from "react";
import { domToReact } from "html-react-parser";

import Link from "../components/Link";

export const transformLinks = (node) => {
  const { type, name, attribs, children } = node;

  // Catch links and replace with Gatsby links.
  if ("tag" === type && "a" === name) {
    return <Link {...attribs}>{domToReact(children)}</Link>;
  }
};
