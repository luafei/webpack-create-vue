'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const dev = merge(prodEnv, {
    NODE_ENV: '"development"'
});

module.exports = dev;