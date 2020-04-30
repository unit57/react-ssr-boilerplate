const path = require('path');
const webPackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const config = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '../../src/server/index.js'),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'isomorphic-style-loader'
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
  externals: [webPackNodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../build')
  }
};

module.exports = merge(baseConfig, config);
