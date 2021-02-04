import $ from "jquery";
import './css/1.css'
import './css/1.less'
import './css/1.scss'
// 1.导入Vue构造函数
import Vue from 'vue'
// 2.导入APP根组件
import App from './components/App.vue'

$(function () {
    $("li:odd").css("background", "pink");
    $("li:even").css("background", "orange");
})

class Person {
    static name = "xxc";
}

console.log(Person.name);

const vm = new Vue({
    // 3.指定vm实例要控制的页面区域
    el: '#app',
    // 4.通过render函数，把指定的组件渲染到el区域中
    render: h => h(App),
})