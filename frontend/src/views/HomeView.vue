<script setup>
    import { ref } from "vue";
    
    const isLogin = ref(true);

    const name = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {};
    const handleRegister = () => {};
</script>

<template>
    <main class="flex h-screen">
        <div class="w-3/5 p-5 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <h1 class="text-5xl font-bold text-gray-100">Praticando um CRUD completo</h1>
            <p class="text-gray-400 mt-4">Projeto desenvolvido para praticar a criação de um CRUD, tanto no back-end quanto no front-end. Além de praticas com login e autenticação. O projeto ainda conta com o uso de vue no front-end.</p>
        </div>

        <div class="w-2/5 p-5 bg-gray-100 flex flex-col items-center justify-center">
            <form @submit.prevent="handleSubmit" v-if="isLogin">
                <input v-model="email" type="email" placeholder="E-mail" class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500"/>
                <input v-model="password" type="password" placeholder="Senha" class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500 mt-3"/>
                <button type="submit" class="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-2 rounded-md transition-colors cursor-pointer">Entrar</button>
            </form>
                
            <form @submit.prevent="handleRegister" v-else>
                <input v-model="name" type="text" placeholder="Nome" class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500">
                <input v-model="email" type="email" placeholder="E-mail" class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500 mt-3"/>
                <input v-model="password" type="password" placeholder="Senha" class="border border-gray-300 rounded-md p-2 w-full outline-none focus:border-indigo-500 mt-3"/>
                <button type="submit" class="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-2 rounded-md transition-colors cursor-pointer">Cadastrar</button>
            </form>
            <p class="w-full text-center text-sm mt-1">
                    Não tem conta? 
                    <span @click="isLogin = false" class="text-indigo-600 cursor-pointer hover:underline">Cadastrar</span>
                </p>
        </div>
    </main>
</template>