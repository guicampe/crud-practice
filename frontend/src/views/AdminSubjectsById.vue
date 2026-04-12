<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSubjectsById } from '@/composables/useSubjectsById';
import DataList from '@/components/admin/DataList.vue';
import Back from '@/components/layout/Back.vue';

const route = useRoute();
const { subjects, fetchSubjectsById } = useSubjectsById();
const subjectName = computed(() => subjects.value[0]?.subject_name ?? "");

onMounted(async () => {
    await fetchSubjectsById(route.params.id);
})
</script>

<template>
    <main class="h-screen bg-indigo-100">
        <Back />
        <DataList
            v-if="subjects.length"
            :title="subjectName"
            :items="subjects"
            :columns="[{ label: 'Aluno', key: 'user_name' }]"
        >
        </DataList>
        <p v-else class="text-center font-bold text-3xl text-gray-800">Nenhum aluno matriculado nessa matéria.</p>
    </main>
</template>