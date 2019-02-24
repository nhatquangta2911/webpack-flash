const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: [
      '.js'
    ]
  }


};
