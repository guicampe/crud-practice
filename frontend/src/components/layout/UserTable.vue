<script setup>
import { onMounted } from "vue";
import { useGrades } from "@/composables/useGrades";

const { grade, fetchGrades } = useGrades();

onMounted(async () => {
    await fetchGrades();
})
</script>

<template>
    <table class="bg-white p-6 mb-4 mt-4 w-9/10 mx-auto shadow-md">
        <thead class="bg-indigo-400 h-12 text-gray-200 text-lg">
            <tr>
                <th>Matéria</th>
                <th>Nota 01</th>
                <th>Nota 02</th>
                <th>Média</th>
                <th>Faltas</th>
                <th>Presença</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="subject in grade" class="text-center text-gray-800 h-10 odd:bg-white even:bg-gray-100">
                <td>{{ subject.subject_name }}</td>
                <td>{{ subject.grade1 ?? "-" }}</td>
                <td>{{ subject.grade2 ?? "-" }}</td>
                <td class="font-bold">{{ subject.average ?? "-" }}</td>
                <td>{{ subject.absences ?? "-" }}</td>
                <td class="font-bold">{{ subject.attendance ?? "-" }}%</td>
            </tr>
        </tbody>
    </table>
</template>