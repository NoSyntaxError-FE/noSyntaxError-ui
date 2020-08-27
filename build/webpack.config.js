const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js' // 定义 vue 的重命名
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      hash: true //给引入的js和css添加hash后缀，防止缓存
    }),
    new VueLoaderPlugin(), //将定义的 .js 、 .css 规则应用到 .vue 文件中
    new webpack.DefinePlugin({
      THEME: JSON.stringify('default')
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    contentBase: './dist',
    compress: true
  }
}
