import React from "react";
import { removeClassesFromArray } from "../../../helpers/functions";
import { Divider, DividerProps } from "@chakra-ui/core";

export type SeparatorAttributeType = {
  anchor: string;
  className?: string;
  id?: string;
};

const Separator: React.FC<SeparatorAttributeType> = ({
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
