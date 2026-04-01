<script setup>
import { onMounted } from "vue";
import { useUser } from "@/composables/useUser";
import UserAppHeader from "@/components/layout/UserAppHeader.vue";
import UserTable from "@/components/layout/UserTable.vue";

const { user, fetchUser } = useUser();

onMounted(async () => {
    await fetchUser();
})
</script>

<template>
    <UserAppHeader 
        :userName="user?.name"
        :userRa="user?.id"
    />
    <UserTable />
</template>