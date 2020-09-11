exports.GetAllPostsQuery = async (graphql, reporter) => {
  const result = await graphql(`
    query {
      allWpPost(filter: {status: {eq: "publish"}}) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if ( result.errors ) {
    reporter.panic(`Error loading posts.`, result.errors)
  }

  return result.data.allWpPost.nodes;
}

exports.GetAllPagesQuery = async (graphql, reporter) => {
  const result = await graphql(`
    query {
      allWpPage(filter: {status: {eq: "publish"}}) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if ( result.errors ) {
    reporter.panic(`Error loading pages.`, result.errors)
  }

  return result.data.allWpPage.nodes;
}
