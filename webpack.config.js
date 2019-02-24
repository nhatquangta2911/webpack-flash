const path = require('path');
const webpack = require('webpack');

module.exports = {

  watch: true,
  mode: "development",

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
      },
      {
       test: /\.css$/,
       use: [
         { loader: "style-loader" },
         { loader: "css-loader" }
       ]
     },
     {
       test: /\.scss$/,
       use: [
         { loader: "style-loader" },
         { loader: "css-loader" },
         { loader: "sass-loader" }
       ]
     }
   ],

  // resolve: {
  //   extensions: [
  //     ' ', '.js', '.jsx', '.css'
  //   ]
  // }

  }
};
