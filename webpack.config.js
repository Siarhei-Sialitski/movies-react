/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function (env, args) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'inline-source-map',
    entry: {
      app: './src/index.tsx',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            env.production ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png)$/i,
          type: 'asset',
        },
      ],
    },
    devServer: {
      port: 3000,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      open: true,
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html'),
        favicon: './public/favicon.ico',
      }),
      new CompressionPlugin(),
      new webpack.ProgressPlugin(),
    ].concat(env.production ? [new MiniCssExtractPlugin()] : []),
  };
};
