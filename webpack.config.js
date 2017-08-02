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
  // cache
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: ["react", "manifest"],
  //   minChunks: Infinity,
  // }),
  // new webpack.HashedModuleIdsPlugin(),
]

module.exports = {
  devtool: DEBUG ? 'cheap-module-source-map' : '',

  entry: {
    // cache
    // react: ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'react-router-dom'],
    scroll: path.join(__dirname, 'scroll.js'),
  },

  output: {
    // library: 'libname',
    // libraryTarget: 'umd',
    publicPath: 'http://localhost:3000/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: "[name].[chunkhash].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: DEBUG ? ['react-hot-loader', 'babel-loader', 'eslint-loader'] : ['babel-loader'],
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

  resolve: {
    extensions: ['.js', '.json', '.styl', '.vue', '.css'],
    alias: {
      '_config': path.join(__dirname, 'config.js')
    }
  },

  plugins: DEBUG ? basePlugins.concat(
    [new webpack.HotModuleReplacementPlugin()]
  ) : basePlugins.concat([
    new ExtractTextPlugin(path.join('[name].css')),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
  ]),

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    overlay: true,
    compress: false,
    hot: true,
    hotOnly: true,
    inline: true,
    host: "0.0.0.0",
    port: 8080,
    clientLogLevel: "info",
  },
}
