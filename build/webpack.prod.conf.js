const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

const config = merge(base, {
    plugins: [
        new UglifyJsWebpackPlugin()
    ]
});

console.log('webpack.prod.config.js', config);
module.exports = config;
