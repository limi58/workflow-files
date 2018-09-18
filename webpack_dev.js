const common = require('./webpack_common')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = merge(common, {
  devtool: 'cheap-module-source-map',

  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    crossOriginLoading: 'anonymous',
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true,
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    overlay: true,
    compress: false,
    // hot: true,
    // hotOnly: true,
    inline: true,
    host: "0.0.0.0",
    port: 3005,
    clientLogLevel: "info",
    historyApiFallback: true,
    stats: 'errors-only',
    disableHostCheck: true,
  },

  performance: {
    hints: false,
  },

  plugins: [
    // new BundleAnalyzerPlugin()
  ],
})
