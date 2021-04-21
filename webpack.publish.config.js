const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:{
      app:path.join(__dirname,'./src/main.js'),
      vendors:['jquery']
    },
    output:{
      path:path.join(__dirname,'./dist'),
      filename:'js/[name].js'
    },
    plugins:[
      new htmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        'myVal':'"I am jehova witness!"'
      })
    ],
    optimization: {
      splitChunks: {
          cacheGroups: {
              commons: {
                  name:'common',
                  chunks: 'initial',
                  minChunks: 1
              }
          }
      }
    },
  
    mode: 'development',
    module:{
      rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.jpg|png|gif|bmp$/,use:'url-loader?limit=623680&name=images/[hash:7][name].[ext]'},
        {test:/\.js$/,exclude:/node_modules/,use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }},
      ]
    }
  };