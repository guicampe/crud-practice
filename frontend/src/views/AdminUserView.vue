<script setup>
import { onMounted } from "vue";
import { useUser } from "@/composables/useUser";
import Logout from "@/components/layout/Logout.vue";
import AdminHome from "@/views/AdminHome.vue";

const { user, fetchUser } = useUser();

onMounted(async () => {
    await fetchUser();
})
</script>

<template>
    <Logout />
    <AdminHome
        :userName="user?.name"
    />
</template>