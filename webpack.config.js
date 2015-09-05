// npm install --save react 
// npm install -D react-hot-loader babel-loader style-loader css-loader less-loader webpack webpack-dev-server

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './entry'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style!css" },
        {
          test: /\.js?$/,
          loaders: ['react-hot', 'babel'],
          exclude: /node_modules/,
          include: __dirname
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};