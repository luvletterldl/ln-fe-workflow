const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const HappyPack = require('happypack')
// const os = require('os')

// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    // new HappyPack({
    //   // 这个HappyPack的“名字”就叫做happyBabel，和楼上的查询参数遥相呼应
    //   id: 'happyBabel',
    //   //指定线程池
    //   ThreadPool: happyThreadPool,
    //   loader: ['babel-loader?cacheDirectory']
    // }),
    new HtmlWebpackPlugin({
      title: 'Production',
      // <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
      meta: [{
        name: 'viewport',
        content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      }],
    })
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
          // 'happypack/loader?id=happyBabel',
          'babel-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};