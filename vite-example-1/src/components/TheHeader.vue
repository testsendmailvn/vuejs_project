<template>
    <div class="containter">
        <div class="row py-3" style="background-color:#000">
            <div class="col-1 text-light align-items-center d-flex d-sm-none justify-content-center">
                <span class="px-2" @click="showDrawer()">
                      X
                </span>
            </div>

            <div class="col-10 col-sm-10 align-items-center d-flex justify-content-center justify-content-sm-start">
                <img src="../assets/logo.png" width="2%" class="ms-3 me-3"/>
                <span class="text-light" style="font-weight:bold;">
                    QUẢN TRỊ
                </span>
            </div>
            <div class="col-sm-2 d-none d-sm-flex justify-content-sm-end  align-items-center ">                
                <span class="text-light" style="font-weight:500;">
                    Administrator
                </span>
            </div>


            <div class="col-1 text-light align-items-center d-flex d-sm-none justify-content-center">
                <span @click="showDrawerUser()">
                    X
                </span>
            </div>
        </div>
    </div>

<a-drawer v-model:visible="visible" title="DANH MỤC"  placement="left">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
</a-drawer>

<a-drawer v-model:visible="visible_user" title="Administrator"  placement="right">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
</a-drawer>

</template>



<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(false);
    const visible_user = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };

     const showDrawerUser = () => {
      visible_user.value = true;
    };
    return {
      visible,            
      showDrawer,
      visible_user,            
      showDrawerUser,
    };
  },

});
</script>