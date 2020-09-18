import React from "react";
import HTMLParser from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";
import { Heading as CoreHeading } from "@chakra-ui/core";

type LevelsType = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingAttributeType = {
  level: LevelsType;
  content: string;
  anchor?: string;
  id?: string;
};

const getFontSize = (level: LevelsType): string => {
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

const Heading: React.FC<HeadingAttributeType> = ({
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
