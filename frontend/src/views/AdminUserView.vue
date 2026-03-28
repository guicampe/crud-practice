<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from "vue";

const authStore = useAuthStore();
let users = ref([]);

onMounted(async () => {
    const request = await fetch("http://localhost:3000/users/", {
        headers: {
            "Authorization" : `Bearer ${authStore.token}`
        }
    });

    const response = await request.json();
    users.value = response;
})
</script>

<template>
    <p>Você é um ADMIN</p>
    <h1>Em construção...</h1>
    <h1>Lista de usuários</h1>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>