const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      hash: true //给引入的js和css添加hash后缀，防止缓存
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
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
