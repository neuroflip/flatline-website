/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')

  },
  devServer: {
    static: './dist'
  },
  module: {
    rules: [{
      test: /(\.s[ac]ss|css)$/i,
      use: ['style-loader',
        'css-loader',
        'sass-loader']
    },
    {
      test: /\.?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript']
        }
      }
    },
    {
      test: /\.(ts)x?/i,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    },
    {
      test: /\.(jpe?g|png|pdf|gif|svg)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.?html$/i,
      exclude: /node_modules/,
      loader: 'html-loader'
    }]
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'static/logo1.png', to: 'logo1.png' },
        { from: 'static/logo2.png', to: 'logo2.png' },
        { from: 'static/logo3.png', to: 'logo3.png' },
        { from: 'static/logo4.png', to: 'logo4.png' },
        { from: 'static/logo5.png', to: 'logo5.png' },
        { from: 'static/logo6.png', to: 'logo6.png' },
        { from: 'static/logo7.png', to: 'logo7.png' },
        { from: 'static/logo8.png', to: 'logo8.png' }
      ],
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'flatline JSLAB JS Experiments',
      filename: './index.html',
      template: 'static/index.html'
    })
  ]
}
