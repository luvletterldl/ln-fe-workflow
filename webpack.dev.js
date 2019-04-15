const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const portfinder = require('portfinder');

let port = null
portfinder.getPort(function (err, port) {
  if (port) {
    port = port
    console.log(`webpack-dev-server监听${port}端口`);
  }
  if (err) {
    console.log(`暂时没有空闲端口`);
  }
});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    // 手机和电脑连接统一局域网可用手机调试
    host: '0.0.0.0',
    port: port,
    disableHostCheck: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  }
});