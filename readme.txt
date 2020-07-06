// webpack构建vue项目
// 目标： webpack实现开发环境和生产环境分离
// 开发环境  1. npm i   2. npm run start
// 生产环境  1. npm run build  

-D: —save-dev     -S: —save
npm init -y  
目录结构 src/main.js src/App.vue index.html components views router
npm i webpack@3.6.0 webpack-cli -D
webpack.config.js 中配置加上即可, 否则报错
resolve: {
    alias: {
        vue$: 'vue/dist/vue.esm.js'
    }
}
npm i css-loader style-loader file-loader url-loader@0.5.8 html-webpack-plugin@3.2.0 uglifyjs-webpack-plugin@1.1.1
webpack-dev-server@2.9.1 cross-env -D
npm i vue -S
npm i vue-loader vue-template-compiler -D
webpack.config.js中配置加上, 否则报错
const VueLoaderPlugin = require('vue-loader/lib/plugin');
plugins: [
    new VueLoaderPlugin()
]
// 增加vue-router
npm i vue-router -S
// 增加vuex
npm i vuex -S
// 增加axios请求
npm i axios -S