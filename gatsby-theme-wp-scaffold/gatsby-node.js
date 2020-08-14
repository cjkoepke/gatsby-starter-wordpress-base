const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// Queries
const {
  GetAllPosts
} = require('./node/queries');

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, 'src/assets/images')
  ];

  dirs.forEach(dir => {
    if ( !fs.existsSync(dir) ) {
      reporter.info(`Building the ${dir} path.`);
      mkdirp.sync(dir);
    }
  });
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const posts = await GetAllPosts(graphql, reporter);
  posts && posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id
      }
    })
  })
}
