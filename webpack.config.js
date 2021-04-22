const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path');
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
      path:path.join(__dirname,'./dist'),
      filename:'bundle.js'
    },
    plugins:[
      new htmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'
      }),
      new VueLoaderPlugin()
    ],
    mode: 'development',
    module:{
      rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.jpg|png|gif|bmp$/,use:'url-loader?limit=623680&name=[hash:7][name].[ext]'},
        {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},
        {test:/\.js$/,exclude:/node_modules/,use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
      },
        {test:/\.vue$/,use:'vue-loader'},
      ]
    },
    resolve:{
      // alias:{
      //   'vue$':'vue/dist/vue.js'
      // }
    }
  };