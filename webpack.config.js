var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');

var paths = {
  public: '/dist',
  dist: path.resolve(__dirname, 'dist'),
  js: {
    index: path.resolve(__dirname, './index.js'),
    app: path.resolve(__dirname, './app')
  },
  styles: path.resolve(__dirname, './app/assets/styles'),
  images: path.resolve(__dirname, './app/assets/img'),
  modules: path.resolve(__dirname, './node_modules'),
  vendor: path.resolve(__dirname, './vendor')
}

module.exports = {  
  entry: {
    app: [
      paths.js.index
    ]
  },

  output: {
    path: paths.dist,
    filename: '[name].js',
    publicPath: paths.public,
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [paths.js.index, paths.js.app, paths.vendor],
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        include: [paths.styles, paths.modules, paths.vendor],
        loader: ExtractTextPlugin.extract('style','css!postcss')
      },
      { 
        test: /\.styl$/,
        include: paths.styles,
        loader: ExtractTextPlugin.extract('style','css!postcss!stylus') 
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: paths.images,
        loader: 'file'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  postcss: function(){
    return [autoprefixer]
  },

  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
    extensions: ['', '.js', '.jsx', '.css', '.styl'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css")
  ],

  devServer: {
    publicPath: paths.public,
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true
  }
};