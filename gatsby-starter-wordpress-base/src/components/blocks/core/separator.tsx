import React from "react";
import { removeClassesFromArray } from "../../../helpers/functions";
import { Divider, DividerProps } from "@chakra-ui/core";

import { SeparatorAttributes } from "./types";

const Separator: React.FC<SeparatorAttributes> = ({
  anchor,
  id,
  className,
  ...rest
}) => {
  const dividerProps: DividerProps = {
    borderStyle:
      className && className.includes("is-style-dots") ? "dotted" : "solid",
    color: "gray.300",
    my: 6,
    borderBottomWidth: 4,
    width: className && className.includes("is-style-wide") ? "100%" : "50%",
  };

  return <Divider id={anchor || id || null} {...dividerProps} {...rest} />;
};

export default Separator;
