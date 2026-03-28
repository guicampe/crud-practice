<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
let user = ref(null);

onMounted(async () => {
    if (!authStore.token) return;

    user.value = null;

    const request = await fetch(`http://localhost:3000/users/${authStore.id}`, {
        headers: {
            "Authorization": `Bearer ${authStore.token}`
        }
    });
    const data = await request.json();
    user.value = data;
})
</script>

<template>
    <p>Você é um USER</p>
    <h1>Em construção...</h1>
    <p>Bem vindo(a), {{ user?.name }}, ID: {{ user?.id }}</p>
</template>