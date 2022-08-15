import {createRouter, createWebHistory} from 'vue-router';
import menu from './menu.js';

const routes = [...menu];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;