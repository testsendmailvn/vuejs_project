<!-- Khu vực import file -->
<script setup>
import Headers from "../Components/Headers.vue";
import Mobile from "../Components/Mobile.vue";
import Mains from "../Pages/Main.vue";
import Footers from "../Components/Footer.vue";
import Move from "../Components/Move.vue";

</script>

<!-- Khu vực hiển thị dữ liệu ra màn hình -->
<template>
  <Mobile />
  <Headers />  
  <Mains />
  <Footers />
  <Move />
</template>

<!-- Khu vực style giao diện -->
<style scoped></style>
