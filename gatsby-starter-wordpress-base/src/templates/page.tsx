import React from "react";
import { graphql } from "gatsby";
import { BlocksFromJSON } from "../components/blocks";

import Heading from "../components/blocks/core/heading";
import Layout from "../layouts";

export default ({ data }) => {
  const { title, blocks, blocksJSON } = data.wpPage;
  return (
    <Layout>
      <Heading content={title} level={1} />
      <BlocksFromJSON json={blocksJSON} />
    </Layout>
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
