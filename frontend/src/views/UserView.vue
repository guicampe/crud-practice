<script setup>
import { onMounted } from "vue";
import { useUser } from "@/composables/useUser";
import { useGrades } from "@/composables/useGrades";

const { user, fetchUser } = useUser();
const { grade, fetchGrades } = useGrades();

onMounted(async () => {
    await fetchUser();
    await fetchGrades();
})
</script>

<template>
    <p>Você é um USER</p>
    <h1>Em construção...</h1>
    <p>Bem vindo(a), {{ user?.name }}, ID: {{ user?.id }}</p>
    <p>Nota 1 - {{ grade?.grade1 }}</p>
    <p>Nota 2 - {{ grade?.grade2 }}</p>
    <p>Média - {{ grade?.average }}</p>
    <p>Faltas - {{ grade?.absences }}</p>
    <p>Presença - {{ grade?.attendance }}%</p>
</template>