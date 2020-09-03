import React from 'react';
import { graphql } from 'gatsby';
import { BlocksFromJSON } from '../components/blocks';
import Layout from '../components/layout';

export default ({ data }) => {
  const { title, blocksJSON } = data.wpPost;
  return (
    <Layout>
      <h1>{title}</h1>
      <BlocksFromJSON json={blocksJSON} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPost (id: {eq: $id}) {
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
`
