const webpack = require('webpack');
const path = require('path');

const options = require('./options');

module.exports = {
  entry: './src/index.js',
  resolve: {
    modules: [
      options.paths.root,
      options.paths.resolve('node_modules')
    ],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': options.paths.resolve('src'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [options.paths.resolve('src'), options.paths.resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [options.paths.resolve('src'), options.paths.resolve('test')]
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /\.styl/, loader: "style-loader!css-loader!stylus-loader"
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },
};
