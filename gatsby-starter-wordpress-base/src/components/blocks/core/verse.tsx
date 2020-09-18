import React from "react";
import HTMLParser from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";

import { Box } from "@chakra-ui/core";

type VerseAttributeTypes = {
  anchor?: string;
  id?: string;
  content: string;
};

const Verse: React.FC<VerseAttributeTypes> = ({
  anchor,
  id,
  content,
  ...rest
}) => {
  return (
    <Box
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      whiteSpace="pre-wrap"
      position="relative"
      as="pre"
      id={anchor || id || null}
      fontFamily="body"
      fontStyle="italic"
      {...rest}
    >
      {HTMLParser(content, { replace: transformLinks })}
    </Box>
  );
};

export default Verse;
