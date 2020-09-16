import React from "react";
import { graphql } from "gatsby";
import { BlocksFromJSON } from "../components/blocks";

import Heading from "../components/blocks/core/heading";
import { Container } from "@chakra-ui/core";

export default ({ data }) => {
  const { title, blocksJSON } = data.wpPage;
  return (
    <Container>
      <Heading content={title} level={1} />
      <BlocksFromJSON json={blocksJSON} />
    </Container>
  );
};

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      authorId
      commentCount
      comments {
        nodes {
          id
        }
      }
      blocksJSON
      content
      date
      featuredImageId
      slug
    }
  }
`;
