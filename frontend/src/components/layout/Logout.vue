<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
    authStore.logout();
    router.push("/");
}
</script>

<template>
    <div class="mb-5 flex flex-row-reverse p-2">
        <button 
            @click="handleLogout"
            class="flex align-center justify-center gap-1 bg-indigo-500 text-gray-200 p-2 rounded-md cursor-pointer hover:bg-indigo-400 duration-300 ease-in-out"> 
            <span class="material-icons">logout</span>
            Sair
        </button>
    </div>
</template>