exports.GetAllPosts = async graphql => {
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

exports.GetAllPages = async graphql => {
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
