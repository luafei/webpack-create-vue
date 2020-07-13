const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

const config = merge(base, {
    module: {
      rules: [
          // {
          //     test:/\.js$/,
          //     exclude:/(node_modules|bower_components)/,//排除掉node_module目录
          //     use:{
          //         loader:'babel-loader',
          //         options:{
          //             presets:['env'], //转码规则
          //             plugins:['transform-runtime']
          //         }
          //     }
          // }
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJsWebpackPlugin()
    ]
});

module.exports = config;
