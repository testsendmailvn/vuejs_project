import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import {
    List,
    Menu
} from 'ant-design-vue';
const app = createApp(App);

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import './assets/css/style.css';
import './assets/vendor/boxicons/css/boxicons.min.css';


app.use(router);
app.use(Menu);
app.use(List);
app.mount('#app');

app.config.globalProperties.$message = message; 