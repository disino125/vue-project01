import VueRouter from 'vue-router'
import tabbarHomepage from './components/tabbars/homepage.vue'
import tabbarCart from './components/tabbars/cart.vue'
import tabbarContact from './components/tabbars/contact.vue'
import tabbarSearch from './components/tabbars/search.vue'
// import '../src/myFont/myStyle.css'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/tabbarHomepage'},
        {path:'/tabbarHomepage',component:tabbarHomepage},
        {path:'/tabbarCart',component:tabbarCart},
        {path:'/tabbarContact',component:tabbarContact},
        {path:'/tabbarSearch',component:tabbarSearch},
    ],
    linkActiveClass:'mui-active',
})


export default router