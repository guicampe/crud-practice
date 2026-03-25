<script setup>
import { ref } from 'vue';

const emit = defineEmits(["goToRegister"]);

const email = ref("");
const password = ref("");

const handleSubmit = () => { };
</script>

<template>
    <form @submit.prevent="handleSubmit" class="w-full">
        <input v-model="email" type="email" placeholder="E-mail"
            class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500" />
        <input v-model="password" type="password" placeholder="Senha"
            class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500 mt-3" />
        <button type="submit"
            class="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-2 rounded-md transition-colors cursor-pointer">
            Entrar
        </button>
        <p class="w-full text-center text-sm mt-1">
            Não tem conta?
            <span @click="emit('goToRegister')" class="text-indigo-600 cursor-pointer hover:underline">Cadastrar</span>
        </p>
    </form>
</template>