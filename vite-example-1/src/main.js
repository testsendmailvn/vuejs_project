import { createApp } from 'vue'
import router from './router/index.js'
import { 
     List,
     Drawer,
     Button,
     message } 
from 'ant-design-vue';
import App from './App.vue'


//Bổ sung
//Dùng hai bootstap này giảm kích thước và tăng tốc load bootstrap
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app  = createApp(App);
app.use(router);
app.use(Drawer);
app.use(Button);
app.use(List);
app.mount('#app');

app.config.globalProperties.$message = message;