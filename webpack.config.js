var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:3600',
    'webpack/hot/only-dev-server',
    './app/app',
  ],
  output: {
    publicPath: '/',
    filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
      },
      { test : /\.scss$/, loader : 'style!css!sass' },
      { test : /\.css$/, loader : 'style!css' },
      { test : /\.(png|jpg)$/, loader : 'url?limit=125000' },
    ]
  },
  devServer: {
    contentBase: "./app"
  }
};