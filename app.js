import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { createRouter, createWebHashHistory } from "https://unpkg.com/vue-router@4/dist/vue-router.esm-browser.js";

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