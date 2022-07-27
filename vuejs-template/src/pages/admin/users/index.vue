<template>
    Đây là Trang quản lý Users
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);
    },
}
</script>