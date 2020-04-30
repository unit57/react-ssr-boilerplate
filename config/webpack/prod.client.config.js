const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const config = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  entry: path.resolve(__dirname, '../../src/client/core/index.js'),
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
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../public')
  }
};

module.exports = merge(baseConfig, config);
