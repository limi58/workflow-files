const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack_common')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = merge(common, {
  devtool: 'none',

  mode: 'production',

  output: {
    path: path.resolve(__dirname, './public/spa'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: "js/[name].[chunkhash].js",
    publicPath: "https://staticqc.xiaoxiafm.com/",
    crossOriginLoading: 'anonymous',
  },

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader?minimize=true", "postcss-loader", "stylus-loader"],
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new BundleAnalyzerPlugin(),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        cache: true,
      })
    ],
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '_',
      name: true,
      cacheGroups: {
          vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
          },
          default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
          }
      }
    },
  },
  
  stats: 'errors-only',
})
