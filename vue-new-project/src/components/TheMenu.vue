<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 327px; background-color: #040b14; color: #fff; border: 0px"
    mode="inline"
    @click="handleClick"
  >
    <a-menu-item key="hero">
      <router-link :to="{ name: 'hero' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Home </span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="about">
      <router-link :to="{ name: 'about' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> About </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="facts">
      <router-link :to="{ name: 'facts' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Facts </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="resume">
      <router-link :to="{ name: 'resume' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Resume </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="portfolio">
      <router-link :to="{ name: 'portfolio' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Portfolio </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="services">
      <router-link :to="{ name: 'services' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Services </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="skills">
      <router-link :to="{ name: 'skills' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Skills </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="testimonials">
      <router-link :to="{ name: 'testimonials' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Testimonials </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="contacts">
      <router-link :to="{ name: 'contacts' }" style="color: #fff">
        <span> <HomeOutlined class="me-1" /> Contacts </span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import {
  SettingOutlined,
  HomeOutlined,
  EditOutlined,
  UserOutlined,
  MenuOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    HomeOutlined,
    EditOutlined,
    UserOutlined,
    MenuOutlined,
    FileOutlined,
    PieChartOutlined,
    SettingOutlined,
  },

  setup() {
    const selectedKeys = ref(["1"]);
    const openKeys = ref(["sub1"]);

    const handleClick = (e) => {
      console.log("click", e);
    };

    const titleClick = (e) => {
      console.log("titleClick", e);
    };

    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
    };
  },
});
</script>
