var config = require('./webpack.config.js');

config.entry = {
  'flexbox-grid-vue': './src/main.js'
};

config.output = {
  filename: './dist/[name].js',
  library: 'VueComponents',
  libraryTarget: 'umd'
};

module.exports = config;
