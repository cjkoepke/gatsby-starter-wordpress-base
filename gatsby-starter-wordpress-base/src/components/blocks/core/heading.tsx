import React from "react";
import HTMLParser from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";
import { Heading as CoreHeading } from "@chakra-ui/core";

import {
  HeadingClassesFunction,
  HeadingLevels,
  HeadingAttributes,
} from "./types";

const getFontSize: HeadingClassesFunction = (level: HeadingLevels) => {
  switch (level) {
    case 1:
      return `2xl`;
    case 2:
      return `xl`;
    case 3:
      return `lg`;
    case 4:
      return `md`;
    case 5:
      return `sm`;
    case 6:
      return `xs`;
  }
};

const Heading: React.FC<HeadingAttributes> = ({
  level = 1,
  anchor,
  id,
  content,
  ...rest
}) => {
  return (
    <CoreHeading
      id={anchor || id || null}
      as={`h${level}`}
      size={getFontSize(level)}
      mb={4}
      {...rest}
    >
      {HTMLParser(content, { replace: transformLinks })}
    </CoreHeading>
  );
};

export default Heading;
