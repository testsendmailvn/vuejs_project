<script setup>
import TheMenu from '../components/TheMenu.vue';
</script>

<template>
  <header style="width:330px; height: 1199px; border: 1px solid #f1eeee; background-color: #000;">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center pt-4" style="vertical-align: middle;">
          <img src="../assets/logo.svg" alt="logo" id="logo" />
          <div class=" py-4">
            <span class="text-white">
              <strong class="text-success">
                TÀI KHOẢN NGƯỜI DÙNG
              </strong>
            </span>
          </div>
        </div>
        <div class="col-12 text-center py-2 mx-0 px-0">
          <a-list size="small" :data-source="data" style="width: 326px;background-color: green  ;">
            <template #renderItem="{ item }">
              <a-list-item>{{ item }}</a-list-item>
            </template>
            <template #header style="border:0 ;">
              <span style="font-weight:bold; color:#fff;font-size: 20px;">BẢNG ĐIỀU KHIỂN</span>
            </template>           
              <TheMenu />
          </a-list>
        </div>
       
      </div>
    </div>
    <!-- <HelloWorld /> -->
  </header>

  <main>
    <!-- <TheWelcome /> -->

  </main>

</template>


<style>
#logoDiv {
  border: 0.5px solid #fff;
  width: 70%;
}

#logo {
  width: 30%;
}
.ant-menu-submenu-arrow {
  display: none;
}
.ant-list-split .ant-list-header {
  border:0;
}
</style>

