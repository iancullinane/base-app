const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './app/main.jsx',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public'
  },
  watch: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    contentBase: './public/',
    hot: true
  },
  resolve: {
    modules: [    
      path.resolve('./app'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx']
  },
  module:{
    loaders:[      
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
              presets: ['es2016', 'react'],
              plugins: [
                'transform-class-properties',
                'syntax-async-functions',
                'transform-decorators'
              ]
          }
        }
      }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {exclude: ['index.html','main.bundle.js','main.bundle.js.map']}),
    new HtmlWebpackPlugin({
      title: 'Pesto',
      template: './app/styles/index-template.html',
      inject: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};
