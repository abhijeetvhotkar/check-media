import Vue from 'vue'
import App from './App.vue'
import DetectRTC from 'detectrtc';

Vue.config.productionTip = false;
Vue.use(DetectRTC);

new Vue({
  render: h => h(App),
}).$mount('#app')
