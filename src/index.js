
import Vue from 'vue'
import SlideTab from './components/slideTab/index.js';
import PartLoading from './components/partLoading/index.js';


const components = [
    SlideTab,
    PartLoading
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// window.vue ??

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// Vue.component('SlideTab', SlideTab);

export default {
    install,
    SlideTab,
    PartLoading
};
