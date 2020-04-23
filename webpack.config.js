const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {
//   CleanWebpackPlugin,
// } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
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
        use: ['style-loader', 'css-loader', 'less-loader'], // compiles Less to CSS
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
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js'),
    publicPath: '/',
  },
};
