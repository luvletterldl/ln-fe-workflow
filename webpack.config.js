const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      '@babel/core',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
      '@babel/preset-env',
      '@babel/runtime',
      'autoprefixer',
      'babel-loader',
      'clean-webpack-plugin',
      'css-loader',
      'express',
      'file-loader',
      'happypack',
      'html-webpack-plugin',
      'mini-css-extract-plugin',
      'optimize-css-assets-webpack-plugin',
      'postcss',
      'postcss-loader',
      'sass-loader',
      'style-loader',
      'stylus',
      'stylus-loader',
      'uglifyjs-webpack-plugin',
      'webpack',
      'webpack-bundle-analyzer',
      'webpack-cli',
      'webpack-dev-middleware',
      'webpack-dev-server',
      'webpack-merge',
      'vue',
      'vue-loader',
      'vue-style-loader',
      'vue-template-compiler',
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      // DllPlugin的name属性需要和libary保持一致
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      // context需要和webpack.config.js保持一致
      context: __dirname,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]_[hash]',
  }
};