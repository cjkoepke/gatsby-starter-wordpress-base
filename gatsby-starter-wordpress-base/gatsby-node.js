const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// Helper functions.
const { createPages, createPosts } = require('./lib/actions');

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();
  const images = path.join(program.directory, 'src/assets/images');

  if ( !fs.existsSync(images) ) {
    reporter.info(`Building the images path.`);
    mkdirp.sync(images);
  }
}

exports.createPages = async context => {
  await createPages(context);
  await createPosts(context);
}
