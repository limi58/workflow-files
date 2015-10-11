// npm install --save react react-router
// npm install -D react-hot-loader babel-loader style-loader css-loader less-loader webpack webpack-dev-server

var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: false,
    context: __dirname,
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/js/entry.jsx'
    ],
    output: {
        publicPath: 'http://localhost:3000/dist/images',
        path: './dist',
        filename: "/js/bundlewp.js"
    },
    module: {
      loaders: [
        { 
          test: /\.jsx?$/, 
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: __dirname
        },
        // {
        //   test: /\.jsx?$/,
        //   loaders: ['react-hot', 'babel'],
        //   exclude: /node_modules/,
        //   include: __dirname
        // },
        {
            test: /\.(otf|eot|svg|ttf|woff)/,
            loader: 'url-loader?limit=68192'
        },
        { test: /\.less$/, loader: "style!css!less" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoErrorsPlugin()
    ]
};