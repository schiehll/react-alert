var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
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

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [paths.js.index, paths.js.dev],
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        include: paths.styles,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: paths.images,
        use: 'url-loader?limit=80000'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl']
  },

  externals: webpackUMDExternal({
    'react': 'react',
    'react-dom': 'react-dom',
    'react-addons-css-transition-group': 'react-addons-css-transition-group'
  })
};