// tavaline HTML:

let el = document.getElementById('title');
el.innerHTML = "Hello pure js"

import Vue from 'vue/dist/vue.common.js';

import Demo from './demo.vue';
Vue.component('demo', Demo);

let app = new Vue ({
    el: '#app',
    data: {
        message:"hello vue"
    }

})

// require('bulma');

// console.log('hello node');
// const module = require('./module.js');
// module.hello();
// module.goodbye();

// import common from './module.js';
// common.hello();
// common.goodbye();

// let num = 1;
// console.log(num) 

// require('./main.ts');