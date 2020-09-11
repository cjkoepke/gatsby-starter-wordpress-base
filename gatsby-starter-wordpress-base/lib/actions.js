const {
    GetAllPostsQuery,
    GetAllPagesQuery
} = require('./queries');

exports.createPosts = async ({ actions, reporter, graphql }) => {
    const posts = await GetAllPostsQuery(graphql, reporter);
    posts.forEach(post => {
      actions.createPage({
        path: post.slug,
        component: require.resolve(`../src/templates/post.tsx`),
        context: {
          id: post.id
        }
      })
    });
}

exports.createPages = async ({ actions, reporter, graphql }) => {
    const pages = await GetAllPagesQuery(graphql, reporter);
    pages.forEach(page => {
      actions.createPage({
        path: page.slug,
        component: require.resolve(`../src/templates/page.tsx`),
        context: {
          id: page.id
        }
      })
    });
}