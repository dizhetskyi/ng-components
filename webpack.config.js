var path = require('path');

module.exports = {

  entry: path.resolve(__dirname + '/src'),

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel'
      }
    ]
  },

  devServer: {
    port: 8790,
    contentBase: path.resolve(__dirname + '/src')
  }

}