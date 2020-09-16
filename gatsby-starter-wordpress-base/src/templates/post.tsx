import React from "react";
import { graphql } from "gatsby";
import { BlocksFromJSON } from "../components/blocks";

import { Container } from "@chakra-ui/core";

export default ({ data }) => {
  const { title, blocksJSON } = data.wpPost;
  return (
    <Container>
      <h1>{title}</h1>
      <BlocksFromJSON json={blocksJSON} />
    </Container>
  );
};

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      authorId
      categories {
        nodes {
          id
        }
      }
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
