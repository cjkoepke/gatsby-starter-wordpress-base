const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

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
