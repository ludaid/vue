import {createWebHistory,createRouter} from 'vue-router'
import Home from "./components/home.vue";
import Profile from "./components/profile.vue";
import login from "./components/login.vue";

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Login',
        path:'/login',
        component:login
    },
    {
        name:'Profile',
        path:'/profile',
        component:Profile
    },
];
const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router;