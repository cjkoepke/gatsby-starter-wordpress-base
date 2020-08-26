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

export type AllPostsType =  {
  allWpPost?: {
    nodes?: {
      authorDatabaseId?: number,
      authorId?: number,
      blocksJSON?: string,
      content?: string,
      title?: string,
      categories?: {
        nodes?: {
          id?: number
        }
      },
      commentCount?: number,
      comments?: {
        nodes?: {
          id?: number
        }
      },
      date?: string,
      featuredImageId?: number,
      slug?: string
    }[]
  }
}
