<script setup>
import { ref } from 'vue';

const emit = defineEmits(["goToLogin"]);

const name = ref("");
const email = ref("");
const password = ref("");

const handleRegister = () => {};
</script>

<template>
    <form @submit.prevent="handleRegister" class="w-full">
        <input v-model="name" type="text" placeholder="Nome"
            class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500">
        <input v-model="email" type="email" placeholder="E-mail"
            class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500 mt-3" />
        <input v-model="password" type="password" placeholder="Senha"
            class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500 mt-3" />
        <button type="submit"
            class="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-2 rounded-md transition-colors cursor-pointer">
            Cadastrar
        </button>
        <p class="text-center text-sm mt-1">
            Já tem conta?
            <span @click="emit('goToLogin')" class="text-indigo-600 cursor-pointer hover:underline">Entrar</span>
        </p>
    </form>
</template>