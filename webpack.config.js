const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app-style': './public/modules/app/style.js',
    'app-main': './public/modules/app/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'scripts/[name].js',
  },
  module: {
    rules: [{
      test: [/\.js$/],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env'],
        plugins: ['@babel/plugin-transform-async-to-generator', '@babel/plugin-proposal-optional-chaining'],
      },
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }],
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
        options: {
          paths: [
            path.resolve(__dirname, 'node_modules')
          ],
        },
      }],
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader',
    }, {
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: 'jQuery',
      }, {
        loader: 'expose-loader',
        options: '$',
      }],
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime',
    }),
  ],
  devtool: 'source-map',
};
