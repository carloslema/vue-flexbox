const merge = require('deep-assign');
const webpack = require('webpack');

const base = require('./webpack.base.js');
const options = require('./options');

const config = merge(base, {
  entry: options.paths.resolve('src/index.js'),

  output: {
    filename: 'vue-flexbox.js',
    path: options.paths.output.dist,
    library: 'VueFlexbox',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    // Set the production environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // Minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      drop_console: true,
      compress: {
        warnings: false
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin()
  ],
});

module.exports = config;
