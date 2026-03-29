<script setup>
import { onMounted } from "vue";
import { useUsers } from "@/composables/useUsers";

const { users, fetchUsers } = useUsers();

onMounted(async () => {
    await fetchUsers();
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