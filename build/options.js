const path = require('path');

module.exports = {
  paths: {
    root: path.join(__dirname, '..'),

    src: {
      main: path.join(__dirname, '..', 'src'),
    },

    output: {
      dist: path.join(__dirname, '..', 'dist'),
    },

    resolve(location) {
      return path.join(__dirname, '..', location);
    }
  }
};
