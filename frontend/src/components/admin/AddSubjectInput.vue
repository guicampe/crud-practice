<script setup>
import Loader from '../ui/Loader.vue';
import { useCreateSubject } from '@/composables/useCreateSubject';

const emit = defineEmits(["created"]);
const { name, total_classes, loading, fetchCreateSubject } = useCreateSubject();

async function handleCreate() {
    if (!name.value.trim() || !total_classes.value) return;

    await fetchCreateSubject();

    name.value = "";
    total_classes.value = "";

    emit("created");
}
</script>

<template>
    <div class="flex gap-3">
        <input 
            v-model="name" 
            type="text" 
            placeholder="Nome da matéria"
            class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            @keyup.enter="handleCreate" 
        />
        <input 
            v-model="total_classes" 
            type="number" 
            min="0"
            placeholder="Total de aulas"
            class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            @keyup.enter="handleCreate" 
        />
        <button
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-gray-100 hover:bg-indigo-600 disabled:opacity-50"
            :disabled="loading"
            @click="handleCreate"
        >
            <Loader v-if="loading" />
            <span class="material-icons">playlist_add</span>
            Adicionar
        </button>
    </div>
</template>