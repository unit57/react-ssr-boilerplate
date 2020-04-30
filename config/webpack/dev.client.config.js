const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const config = {
  entry: path.resolve(__dirname, '../../src/client/core/index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../public')
  }
};

module.exports = merge(baseConfig, config);
