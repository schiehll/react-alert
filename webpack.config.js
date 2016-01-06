var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var webpackUMDExternal = require('webpack-umd-external');

var paths = {
  public: '/dist',
  dist: path.resolve(__dirname, 'dist'),
  js: {
    index: path.resolve(__dirname, './index.js'),
    dev: path.resolve(__dirname, './dev')
  },
  styles: path.resolve(__dirname, './dev/assets/styles'),
  images: path.resolve(__dirname, './dev/assets/img'),
  modules: path.resolve(__dirname, './node_modules')
}

module.exports = {  
  entry: {
    alert: [
      paths.js.index
    ]
  },

  output: {
    path: paths.dist,
    filename: '[name].js',
    publicPath: paths.public,
    devtoolModuleFilenameTemplate: '../[resource-path]',
    libraryTarget: 'umd',
    library: 'react-alert'
  },

  postcss: function(){
    return [autoprefixer]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [paths.js.index, paths.js.dev],
        loader: 'babel'
      },
      { 
        test: /\.styl$/,
        include: paths.styles,
        loader: 'style!css!postcss!stylus'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: paths.images,
        loader: 'url?limit=80000'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.styl']
  },

  externals: webpackUMDExternal({
    'react': 'react',
    'react-dom': 'react-dom',
    'react-addons-css-transition-group': 'react-addons-css-transition-group'
  })
};