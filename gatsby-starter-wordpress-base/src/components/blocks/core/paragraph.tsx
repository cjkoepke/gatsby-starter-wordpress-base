import React from "react";
import HTMLParser from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";
import { Text } from "@chakra-ui/core";

export type ParagraphAttributeType = {
  dropCap: boolean;
  content: string;
  id?: string;
  anchor: string;
  className: string;
};

const Paragraph: React.FC<ParagraphAttributeType> = ({
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
