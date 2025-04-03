const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Import components
import Home from './home.js';
import About from './about.js';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

createApp({}).use(router).mount('#app');