<script setup>
import { useCreateSubject } from '@/composables/useCreateSubject';
import Loader from '../ui/Loader.vue';

const emit = defineEmits(["created"]);
const { name, loading, fetchCreateSubject } = useCreateSubject();

async function handleCreate() {
    if (!name.value.trim()) return;
    await fetchCreateSubject();
    name.value = "";
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
        <button
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-gray-100 hover:bg-indigo-600 disabled:opcaity-50"
            :disabled="loading"
            @click="handleCreate"
        >
        <Loader v-if="loading" />
        {{ loading ? "Salvando..." : "Adicionar" }}
        </button>
    </div>
</template>