const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: "development",
  module:{
    rules:[      
      {
        test:/\.css$/,
        // the are used in reverse order, output of sass-loader->css-loader->
        // stlye->loader injects it into the html
        use:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            query: {
              // If you set something here, also set it in .babelrc
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                'transform-class-properties',
                'syntax-async-functions',
                // 'transform-decorators'
              ]
          }
        }
      }]
  },

});
