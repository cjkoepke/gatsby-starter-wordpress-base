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
