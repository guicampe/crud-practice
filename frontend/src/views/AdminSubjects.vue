<script setup>
import { onMounted } from "vue";
import { useSubjects } from "@/composables/useSubjects";
import Back from "@/components/layout/Back.vue";
import DataTable from "@/components/admin/DataTable.vue";


const { subjects, fetchSubjects } = useSubjects();

onMounted(async () => {
    await fetchSubjects();
})
</script>

<template>
    <div class="h-screen bg-indigo-100">
        <Back />
        <DataTable
            title="Matérias"
            :items="subjects",
            :columns="[{ label: 'Matéria', key:'name' }]"
            @row-click="(subject) => $router.push(`/subjects/${subject.id}`)"
        />
    </div>
</template>