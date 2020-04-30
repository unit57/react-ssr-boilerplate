const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, '../../config'),
      '@components': path.resolve(
        __dirname,
        '../../src/client/core/components'
      ),
      '@pages': path.resolve(__dirname, '../../src/client/core/pages'),
      '@redux': path.resolve(__dirname, '../../src/client/state/redux'),
      '@custom-types': path.resolve(__dirname, '../../src/client/ts-types'),
      '@mocks': path.resolve(__dirname, '../../src/client/state/mocks'),
      styles: path.resolve(__dirname, '../../src/client/core/styles'),
      '@assets': path.resolve(__dirname, '../../src/client/core/assets')
    },
    extensions: ['*', '.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '../../.env'),
      safe: false
    }),
    new Dotenv({
      systemvars: true,
      expand: true
    }),
    new webpack.DefinePlugin({
      NODE_ENV:
        JSON.stringify(process.env.NODE_ENV) || JSON.stringify('develop')
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
