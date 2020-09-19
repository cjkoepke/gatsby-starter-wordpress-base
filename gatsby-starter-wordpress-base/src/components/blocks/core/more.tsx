import React from "react";
import { Divider, Flex, useTheme } from "@chakra-ui/core";
import { IoIosMore } from "react-icons/io";

import { MoreAttributes } from "./types";

const More: React.FC<MoreAttributes> = ({
  noTeaser,
  anchor,
  id,
  saveContent,
  ...rest
}) => {
  const { colors } = useTheme();
  return (
    <Flex alignItems="center">
      <Divider
        borderBottomWidth={4}
        borderColor="gray.300"
        my={noTeaser ? 3 : 6}
        id={anchor || id || null}
        {...rest}
      />
      <IoIosMore
        size="50px"
        color={colors.gray[600]}
        style={{ margin: "0 20px 0" }}
      />
      <Divider
        borderBottomWidth={4}
        borderColor="gray.300"
        my={noTeaser ? 3 : 6}
        id={anchor || id || null}
        {...rest}
      />
    </Flex>
  );
};

export default More;
