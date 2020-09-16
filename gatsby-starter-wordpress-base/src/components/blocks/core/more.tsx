import React from "react";
import { Divider } from "@chakra-ui/core";

export type MoreAttributesType = {
  noTeaser: boolean;
  id?: string;
  anchor?: string;
};

const More: React.FC<MoreAttributesType> = ({
  noTeaser,
  anchor,
  id,
  ...rest
}) => (
  <Divider
    borderBottomWidth={4}
    borderColor="gray.300"
    my={noTeaser ? 3 : 6}
    id={anchor || id || null}
    {...rest}
  />
);

export default More;
