<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useUserById } from '@/composables/useUserById';
import Back from '../layout/Back.vue';
import UserPersonalInfo from '../ui/UserPersonalInfo.vue';

const route = useRoute();
const { userById, fetchUserById } = useUserById();

onMounted(async () => {
    await fetchUserById(route.params.id);
})
</script>

<template>
    <main class="h-screen bg-indigo-100">
        <Back />
        <UserPersonalInfo 
            :name="userById?.name"
            :id="userById?.id"
            :email="userById?.email"
        />
    </main>
</template>