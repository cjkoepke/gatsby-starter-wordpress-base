import React, { ReactNode } from "react";
import HTMLParse from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";
import { UnorderedList, OrderedList, ListItem } from "@chakra-ui/core";

import { ListAttributes } from "./types";

/**
 * Recursively update the nested elements returned by the HTML Parser.
 */
function updateChildren(child: JSX.Element): ReactNode {
  const { type, props } = child;
  if (["ul", "ol"].includes(type)) {
    return (
      <List anchor={props.id} ordered={"ol" === type}>
        {React.Children.map(props.children, updateChildren)}
      </List>
    );
  }

  if ("li" === type) {
    return (
      <ListItem>{React.Children.map(props.children, updateChildren)}</ListItem>
    );
  }

  return child;
}

const List: React.FC<ListAttributes> = ({
  anchor,
  ordered,
  values,
  ...rest
}) => {
  const items = values ? HTMLParse(values, { replace: transformLinks }) : null;

  if (!items) {
    return null;
  }

  const updatedItems = React.Children.map(items, updateChildren);
  const Component = ordered ? OrderedList : UnorderedList;
  return <Component {...rest}>{updatedItems}</Component>;
};

export default List;
