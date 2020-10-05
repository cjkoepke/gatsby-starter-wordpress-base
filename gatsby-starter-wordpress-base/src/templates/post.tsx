import React from 'react'
import { graphql } from 'gatsby'

import Blocks from '../components/blocks'
import Layout from '../layouts'

export default ({ data }) => {
  const { title, blocksJSON } = data.wpPost
  return (
    <Layout>
      <h1>{title}</h1>
      <Blocks json={blocksJSON} />
    </Layout>
  )
}

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
`
