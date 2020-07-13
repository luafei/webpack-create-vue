const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const webpack = require('webpack');

const config = merge(base, {
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;
