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
    rules: [
      {
        test: /\.js$/,
        use: DEBUG ? ['react-hot-loader', 'babel-loader'] : ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|png|jpg)/,
        use: 'url-loader?limit=268192'
      },
      // 外部生成 css
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", use: ["css-loader", "stylus-loader"]
        })
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  // require 可以免掉后缀名
  resolve: {
    extensions: ['.js', '.json', '.styl', '.vue', '.css'],
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
