// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Images: path.resolve(__dirname, 'images/'),
      Redux: path.resolve(__dirname, 'src/redux/'),
      // also update jest.config.js
    },
  },
  devtool: 'source-map',
};
