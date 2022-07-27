<template>
  <TheHeader />
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-sm-3 d-none d-sm-flex">
        <a-list bordered style="width: 100%">
          <TheMenu />
          <template #header>
            <div>
              <strong> BẢNG ĐIỀU KHIỂN </strong>
            </div>
          </template>
        </a-list>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheMenu from "../components/TheMenu.vue";

export default {
  components: {
    TheHeader,
    TheMenu
  },
};
</script>
