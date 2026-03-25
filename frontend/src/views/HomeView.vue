<script setup>
import { ref } from "vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import RegsiterForm from "@/components/auth/RegsiterForm.vue";

const isLogin = ref(true);
</script>

<template>
    <main class="flex h-screen">
        <div class="w-3/5 p-5 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <h1 class="text-5xl font-bold text-gray-100">Praticando um CRUD completo</h1>
            <p class="text-gray-400 mt-4">Projeto desenvolvido para praticar a criação de um CRUD, tanto no back-end quanto no front-end. Além de praticas com login e autenticação. O projeto ainda conta com o uso de vue no front-end.</p>
        </div>

        <div class="w-2/5 p-5 bg-gray-100 flex flex-col items-center justify-center">
            <LoginForm v-if="isLogin" @go-to-register="isLogin = false" />
            <RegsiterForm v-else @go-to-login="isLogin = true" />
        </div>
    </main>
</template>