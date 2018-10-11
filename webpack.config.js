const path = require('path');

module.exports = {
  entry: {
    // 'mid-autumn-style': './public/modules/mid-autumn/style.less',
    // 'mid-autumn-main': './public/modules/mid-autumn/index.js',
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
  ],
  // devtool: 'source-map',
};
