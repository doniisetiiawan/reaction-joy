const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {
//   CleanWebpackPlugin,
// } = require('clean-webpack-plugin');

module.exports = {
  entry: './js/app',
  devServer: {
    contentBase: path.join(__dirname, 'js'),
    compress: true,
    port: 8000,
    hot: true,
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'less-loader', // compiles Less to CSS
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js'),
  },
};
