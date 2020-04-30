const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webPackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const config = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
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
              sourceMap: false
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
