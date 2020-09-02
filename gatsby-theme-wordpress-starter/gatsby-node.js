const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const deepmerge = require('deepmerge');

// Queries
const {
  GetAllPosts,
  GetAllPages
} = require('./node/queries');

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();
  const images = path.join(program.directory, 'src/assets/images');

  if ( !fs.existsSync(images) ) {
    reporter.info(`Building the images path.`);
    mkdirp.sync(images);
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const posts = await GetAllPosts(graphql, reporter);
  posts && posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve('./src/templates/post.tsx'),
      context: {
        id: post.id
      }
    })
  })

  const pages = await GetAllPages(graphql, reporter);
  pages && pages.forEach(page => {
    actions.createPage({
      path: page.slug,
      component: require.resolve('./src/templates/page.tsx'),
      context: {
        id: page.id
      }
    })
  })
}
