<template>
   <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"          
    >
       <div class="pt-2"> 
      <a-menu-item key="admin-users" class="px-4">        
        <router-link :to="{name:'admin-users'}">
            <span > Tài khoản </span>
        </router-link>
      </a-menu-item>
      </div>
      <div class="pt-2"> 
      <a-menu-item key="admin-roles" class="px-4 my-2">        
        <router-link :to="{name:'admin-roles'}">
            <span class="">
                Vai trò
            </span>
        </router-link>
      </a-menu-item>
      </div> 
      <div class="py-2"> 
        <a-menu-item key="admin-settings">        
            <router-link :to="{name:'admin-settings'} " class="px-4">
                <span>
                    Cài đặt
                </span>
            </router-link>
        </a-menu-item>
      </div> 
    </a-menu>
 
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({      
      selectedKeys: ['admin-users'],
      openKeys: []      
    });
    
    return { 
        ...toRefs(state),
      
    };
  },

});
</script>