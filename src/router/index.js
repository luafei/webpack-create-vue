import Vue from 'vue';
import VueRouter from 'vue-router';
import Cart from '../views/cart/Cart';
import Category from '../views/category/Category';
import Home from '../views/home/Home';
import Profile from '../views/profile/Profile';


Vue.use(VueRouter);

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile }
];

const router = new VueRouter({
    routes
});

export default router;