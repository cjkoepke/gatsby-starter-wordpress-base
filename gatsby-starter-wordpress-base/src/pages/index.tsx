import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { allWpPageType } from "../types/wpgraphql";

import { Container } from "@chakra-ui/core";

export default ({ data }: PageProps) => {
  const {
    allWpPage: { nodes },
  }: allWpPageType = data;
  return (
    <Container>
      <h1>Home!</h1>
      {nodes ? (
        <ul>
          {nodes.map((node) => (
            <li key={node.slug}>
              <h4>{node.title}</h4>
              <Link to={node.slug}>Read More</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Looks like you need to publish some posts!</p>
      )}
    </Container>
  );
};

export const query = graphql`
  query Home {
    ...AllPages
  }
`;
