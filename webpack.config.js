
var webpack = require('webpack')
var path = require('path')

module.exports = {
    // devtool: false,
    // entry 和 output 的绝对位置
    // context: __dirname,
    //页面入口文件配置
    entry: [
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/only-dev-server',
      './src/js/entry.jsx'
    ],
    output: {
        // 资源路径的前缀而已，便于更改cdn
        publicPath: 'http://localhost:3000/',
        // 所有 output 输出的绝对位置，js、jpg 等等
        path: path.resolve('./dist/'),
        filename: "js/bundle.js"
    },
    module: {
      loaders: [
        // { 
        //   test: /\.jsx?$/, 
        //   loader: 'babel-loader',
        //   exclude: /node_modules/,
        //   include: __dirname
        // },
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          exclude: /node_modules/,
          include: __dirname
        },
        {
            test: /\.(otf|eot|svg|ttf|woff)/,
            loader: 'url-loader?limit=68192'
        },
        { test: /\.scss$/, loader: "style!css!sass" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    // require 可以免掉后缀名
    // alias 可以设置别名
    resolve: {
        extensions: ['', '.js', '.json', '.scss', '.jsx'],
        alias: {
          'session': path.join(__dirname, 'src/js/servies/session.js'),
          'errorCatch': path.join(__dirname, 'src/js/servies/errorCatch.js'),
          'ajax': path.join(__dirname, 'src/js/servies/ajax.js'),
          'panel': path.join(__dirname, 'src/js/components/common/panel/panel.jsx')
        }
    },
    // 插件
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
};
