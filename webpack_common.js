const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry: {
    main: './src/index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'/*, 'eslint-loader'*/],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|png|jpg|gif|mp3)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'image/[name].[hash].[ext]'
          },
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.styl', '.css'],
    alias: {
      '_config': path.resolve(__dirname, 'src/config'),
      '_page': path.resolve(__dirname, 'src/page'),
      '_service': path.resolve(__dirname, 'src/service'),
      '_utils': path.resolve(__dirname, 'src/utils'),
      '_image': path.resolve(__dirname, 'src/image'),
      '_component': path.resolve(__dirname, 'src/component'),
      '_base': path.resolve(__dirname, 'src/component/base'),
    }
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/main.[contenthash].css' }),
    // new CleanWebpackPlugin(['public/spa']),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      inject: false,
    }),
  ],

}