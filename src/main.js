// 测试导入 es6语法 export import
// import { add, mul } from './js/mathUtil';
// console.log(add(100,200));
// console.log(mul(100,200));

// 测试css
// require('./css/style.css');
// const elemnt = document.createElement('div');
// elemnt.innerHTML = 'test-css';
// elemnt.classList.add('hello');
// document.body.appendChild(elemnt);

// 根据环境不同，引入不同的配置文件
import Config from '../config';
console.log('main/config');
console.log(Config);

// import common
import {add, pAsync, Person} from './common/utils'
console.log(add(100,200));
console.log(pAsync());
let person = new Person(100, 200);
console.log(person.toString());

// 测试引用vue
import Vue from 'vue';
// 代码分离 z最终到App.js文件中
// const App = {
//     template: `
//         <div>
//             <h2>{{message}}</h2>
//             <button v-on:click="mybutton('mmmm')">按钮</button>
//             <p>{{date}}</p>
//         </div>
//     `,
//     data() {
//         return {
//             message: 'vue hello',
//             date: new Date()
//         }
//     },
//     methods: {
//         mybutton: function (param) {
//             window.alert('按钮！' + param);
//         }
//     }
//
// };
// 分离前
// new Vue({
//     el: '#app',
//     template: `
//         <div>
//             <h2>{{message}}</h2>
//             <button v-on:click="mybutton('mmmm')">按钮</button>
//             <p>{{date}}</p>
//         </div>
//     `,
//     data: {
//         message: 'vue hello',
//         date: new Date()
//     },
//     methods: {
//         mybutton: function (param) {
//             window.alert('按钮！' + param);
//         }
//     }
// });

// 分离后  el和template关系  template会替换el所对应的html
// import App from './vue/app';  //导入App.js文件
import App from './App'                       // 导入App.vue文件
import router from './router';

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    },
    router
});

