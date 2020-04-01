import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PlainUI from '../src/index.js'


Vue.use(VueRouter);
console.log(PlainUI);

Vue.use(PlainUI);



const router = new VueRouter({
  routes: [
    {
      path: '/slideTab',
      component: (resolve) => require(['./view/slideTab.vue'], resolve)
    },
    {
      path: '/partLoading',
      component: (resolve) => require(['./view/partLoading.vue'], resolve)
    }
  ]
})


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})



