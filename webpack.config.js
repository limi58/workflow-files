// npm install --save react react-router
// npm install -D react-hot-loader babel-loader style-loader css-loader less-loader webpack webpack-dev-server

var webpack = require('webpack');


module.exports = {
    devtool: false,
    // entry 和 output 的绝对位置
    context: __dirname,
    //页面入口文件配置
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/js/entry.jsx'
    ],
    output: {
        // 资源路径的前缀而已，便于更改cdn
        publicPath: 'http://localhost:3000/dist/images',
        // 所有 output 输出的绝对位置，js、jpg 等等
        path: './dist',
        filename: "/js/bundle.js"
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
    // require 可以免掉后缀名
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
    },
    // 插件
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoErrorsPlugin()
    ]
};