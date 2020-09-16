import React from "react";
import HTMLParse from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";
import { OrderedList, UnorderedList, ListItem } from "@chakra-ui/core";

export type ListAttributeType = {
  anchor?: string;
  ordered: boolean;
  values?: string;
  className?: string;
};

/**
 * Recursively update the nested elements returned by the HTML Parser.
 * @param node JSX.Element
 */
const modifyValues = (node: JSX.Element) => {
  const { type, props } = node;
  if (["ul", "ol"].includes(type)) {
    return (
      <List anchor={props.id} ordered={"ol" === type}>
        {React.Children.map(props.children, modifyValues)}
      </List>
    );
  }

  if ("li" === type) {
    return (
      <ListItem>{React.Children.map(props.children, modifyValues)}</ListItem>
    );
  }

  return node;
};

const List: React.FC<ListAttributeType> = ({
  anchor,
  ordered,
  values,
  children,
  ...rest
}) => {
  const items = values
    ? HTMLParse(values, { replace: transformLinks })
    : children;
  const updatedItems = React.Children.map(items, modifyValues);

  const Component = ordered ? OrderedList : UnorderedList;
  return <Component {...rest}>{updatedItems}</Component>;
};

export default List;
