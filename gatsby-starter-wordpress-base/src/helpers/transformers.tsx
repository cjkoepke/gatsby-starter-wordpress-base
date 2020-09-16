import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { getSiteMetadata } from "./hooks";
import { domToReact } from "html-react-parser";

import { Link } from "@chakra-ui/core";

export const transformLinks = (node) => {
  const { type, name, attribs, children } = node;

  // Catch links and replace with Gatsby links.
  if ("tag" === type && "a" === name) {
    const { href, target, ...rest } = attribs;
    const { baseUrl } = getSiteMetadata();
    const url = new URL(href);
    if (url.hostname === baseUrl) {
      return (
        <Link
          color="blue.400"
          fontWeight="bold"
          as={GatsbyLink}
          key={`${href}-${name}`}
          to={url.pathname}
          {...rest}
        >
          {domToReact(children)}
        </Link>
      );
    } else {
      return (
        <Link
          href={href}
          color="blue.400"
          fontWeight="bold"
          isExternal={"_blank" === target}
          {...rest}
        >
          {domToReact(children)}
        </Link>
      );
    }
  }
};
