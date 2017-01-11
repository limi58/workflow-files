const webpack = require('webpack')
const path = require('path')
const DEBUG = process.env.NODE_ENV !== 'production'
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const basePlugins = [
  new ExtractTextPlugin(path.join('[name].css')),
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body',
  }),
]

module.exports = {
  debug: DEBUG,
  devtool: DEBUG ? 'source-map' : '',
  entry: {
    scroll: path.join(__dirname, 'scroll.js'),
  },
  // entry: DEBUG ? [
  //   // 'webpack-dev-server/client?http://localhost:3000/',
  //   // 'webpack/hot/only-dev-server',
  //   './src/libname.js'
  // ] : './src/libname.js',
  output: {
    library: 'libname',
    libraryTarget: 'umd',
    // 资源路径的前缀而已，便于更改cdn
    // publicPath: 'http://localhost:3000/',
    // // 所有 output 输出的绝对位置，js、jpg 等等
    path: path.join(__dirname, 'dist'),
    filename: "libname.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: DEBUG ? ['react-hot', 'babel'] : ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|png|jpg)/,
        loader: 'url-loader?limit=268192'
      },
      // 外部生成 css
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!styl-loader") },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  // require 可以免掉后缀名
  resolve: {
    extensions: ['', '.js', '.json', '.styl', '.vue', '.css'],
    // alias 设置别名
    alias: {
      '_config': path.join(__dirname, 'config.js')
    }
  },
  plugins: DEBUG ? basePlugins.concat(
    [new webpack.HotModuleReplacementPlugin()]
  ) : basePlugins.concat([
    new ExtractTextPlugin(path.join('[name].css')),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ])
}
