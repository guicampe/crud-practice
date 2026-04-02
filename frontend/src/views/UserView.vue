<script setup>
import { onMounted } from "vue";
import { useUser } from "@/composables/useUser";
import { useGrades } from "@/composables/useGrades";
import UserAppHeader from "@/components/layout/UserAppHeader.vue";
import UserTable from "@/components/layout/UserTable.vue";

const { user, fetchUser } = useUser();
const { grades, fetchGrades } = useGrades();

onMounted(async () => {
    await fetchUser();
    await fetchGrades();
})
</script>

<template>
    <UserAppHeader 
        :userName="user?.name"
        :userRa="user?.id"
    />
    <UserTable :grades="grades" />
</template>