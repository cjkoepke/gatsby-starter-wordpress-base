import React from 'react';
import { graphql } from 'gatsby';
import Blocks from '../blocks';

export default ({ data }) => {
  const { title, blocksJSON } = data.wpPost;
  return (
    <div>
      <h1>{title}</h1>
      <Blocks json={blocksJSON} />
    </div>
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
