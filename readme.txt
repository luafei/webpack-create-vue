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

// 处理babel
npm install --save-dev babel-loader@7.1.1 babel-core@6.22.1 babel-preset-env@1.3.2
npm install --save-dev babel-polyfill    // 这样会在打包的时候提供一个垫脚片用以兼容低版本浏览器中不支持的API（兼容低版本浏览器的一个方法）
npm install babel-plugin-transform-runtime --save-dev
npm install babel-runtime --save
//  transform-runtime解决代码重复问题
//  在打包的过程中，babel会在包里提供一些工具函数，而这些工具函数可能会重复的出现在多个模块。
// 这样会导致打包的体积过大，所以babel提供了babel-transform-runtime解决这个体积过大的问题