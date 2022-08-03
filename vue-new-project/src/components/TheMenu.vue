<template>
  <a-menu 
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 327px;background-color: black; color: #fff;border:0px;"
    mode="inline"
    @click="handleClick"
  >    
    <a-sub-menu key="sub1" @titleClick="titleClick" > 
      <template #icon><HomeOutlined /></template>
      <template #title>Home</template>             
    </a-sub-menu>    
    <a-sub-menu key="sub2" @titleClick="titleClick">
      <template #icon><EditOutlined /></template>
      <template #title>Factorys</template>      
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <template #icon><UserOutlined /></template>
      <template #title>About</template>      
    </a-sub-menu>
    <a-sub-menu key="sub4" @titleClick="titleClick">
      <template #icon><MenuOutlined /></template>
      <template #title>Skills</template>            
    </a-sub-menu>
    <a-sub-menu key="sub5" @titleClick="titleClick">
      <template #icon><FileOutlined /></template>
      <template #title>Resume</template>      
    </a-sub-menu>
    <a-sub-menu key="sub6">
      <template #icon><PieChartOutlined /></template>
      <template #title>Portfolio</template>      
    </a-sub-menu>
    <a-sub-menu key="sub7">
      <template #icon><SettingOutlined /></template>
      <template #title>Services</template>      
    </a-sub-menu>

  </a-menu>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import { SettingOutlined, HomeOutlined, EditOutlined, UserOutlined, MenuOutlined, FileOutlined,PieChartOutlined} from '@ant-design/icons-vue';
export default defineComponent({
  components: {   
    HomeOutlined,
    EditOutlined,
    UserOutlined,
    MenuOutlined, 
    FileOutlined,
    PieChartOutlined,
    SettingOutlined

  },

  setup() {
    const selectedKeys = ref(['1']);
    const openKeys = ref(['sub1']);

    const handleClick = e => {
      console.log('click', e);
    };

    const titleClick = e => {
      console.log('titleClick', e);
    };

    watch(() => openKeys, val => {
      console.log('openKeys', val);
    });
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
    };
  },

});
</script>
