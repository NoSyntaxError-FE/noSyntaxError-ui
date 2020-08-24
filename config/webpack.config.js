const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.NODE_ENV === 'development' ? mode : 'production'
console.log(mode, __dirname)
module.exports = {
  mode,
  entry: './src',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
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
    open: 'Google Chrome',
    contentBase: './dist',
    compress: true
  }
}
