### Cài đặt VueJS Router
npm install vue-router@4
### Các bước cấu hình
# Thiết lập router view trong App.vue
Thực hiện hóa hết dữ liệu cũ trong App.vue và copy đoạn code sau:
    <template>
        <router-view></router-view>
    </template>
Thực tạo 2 folder payouts và pages trong src
    - Trong layouts tạo admin.vue
    - Trong pages tạo thử mục theo đường dẫn: admin\users sau đó tạo index.vue trong thư mục users vửa tạo
    - Tạo thư mục router sau đó rồi tạo file:
        --> tạo thư mục admin.js
        --> tạo thư mục index.js
    - Trong file main.js thực hiện dòng lệnh như sau: 
            import { createApp } from 'vue'
            import './style.css'
            import App from './App.vue'
            import router from './router/index.js'

            const app  = createApp(App);
            app.use(router);
            app.mount('#app');
    - Thực hiện chạy thử npm run dev
Thực cài đặt bootstrap cho vue: 
    - Cài đặt bằng dòng lệnh: npm i bootstrap@5.2.0
    - Sử dụng bootstrap: Vào fie main.js import thực hiện thêm một số file CSS như sau:
    (Dùng thằng này để giảm kích thước để load bootstrap nhanh hơn)
        import 'bootstrap/dist/css/bootstrap-grid.min.css';
        import 'bootstrap/dist/css/bootstrap-utilities.min.css';
Thực hiện tạo component header: 
    - Thực hiện xóa file HelloWorld.vue trong src\Components
    - Thực hiện tạo file TheHeader.vue trong scr\Components     
    - Thực hiện tạo file TheMenu.vue trong scr\Components

Thực hiện import header vào file admin.vue trong Layouts
    <template>
        <TheHeader />
        <router-view></router-view>
    </template>

    <script>
        import TheHeader from '../components/TheHeader.vue';

        export default {
            components: {
                TheHeader
            }
        }
        
    </script>
Kết hợp bootstrap và Ant Design thiết kế thanh Header đa giao diện
Cài đặt Antdv: npm i --save ant-design-vue
Khai báo: vào main.js import như sau:
    import { Button, message } from 'ant-design-vue';
Khai báo CSS của design vue: 
    import 'ant-design-vue/dist/antd.css';
Khai báo config message: 
app.config.globalProperties.$message = message;




