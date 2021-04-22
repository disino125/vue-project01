import Vue from 'vue'
import App from './components/App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import router from './routes'
import axios from 'axios'

Vue.prototype.$http = axios.create({
    baseURL:'http://127.0.0.1:8081/'
})


Vue.use(MintUI)
Vue.use(VueRouter)
const vm = new Vue({
    el:'#app',
    render:c=>c(App),
    router
})