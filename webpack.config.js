const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: '/src/index.ts',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    environment: { // 不允许对打包后的文件使用箭头函数
      arrowFunction: false,
      const: false
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',  // MiniCssExtractPlugin.loader
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    { // 支持主流浏览器的最新三个版本，如 ie 10 11
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      'chrome': '55',
                      'ie': '9'
                    },
                    'corejs': '3',
                    'useBuiltIns': 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'snake | game page',
      template: './src/asserts/index.html'
    })
  ],
}