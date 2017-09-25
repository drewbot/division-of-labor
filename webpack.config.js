'use strict';

var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill();

module.exports = {
  entry: './public/main.js',

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
