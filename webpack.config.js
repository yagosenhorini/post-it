const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
};