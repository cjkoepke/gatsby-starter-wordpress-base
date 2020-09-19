import React from "react";
import HTMLParser from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";
import { Text } from "@chakra-ui/core";

import { ParagraphAttributes } from "./types";

const Paragraph: React.FC<ParagraphAttributes> = ({
  dropCap,
  content,
  anchor,
  id,
  ...rest
}) => {
  return (
    <Text mb={4} fontSize="md" {...rest} id={anchor || id || null}>
      {HTMLParser(content, {
        replace: transformLinks,
      })}
    </Text>
  );
};

export default Paragraph;
