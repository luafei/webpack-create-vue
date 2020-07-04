const merge = require('webpack-merge');
const base = require('./webpack.base.conf');

const config = merge(base, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
});

console.log('webpack.dev.config.js', config);
module.exports = config;
