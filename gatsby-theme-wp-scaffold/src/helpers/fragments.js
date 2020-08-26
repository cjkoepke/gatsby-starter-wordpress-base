import { graphql } from 'gatsby';

export const AllPosts = graphql`
  fragment AllPosts on Query {
    allWpPost(filter: {status: {eq: "publish"}}) {
      nodes {
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
        content
        date
        featuredImageId
        slug
      }
    }
  }
`
