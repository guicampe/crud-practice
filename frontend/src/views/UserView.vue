<script setup>
import { onMounted } from "vue";
import { useUser } from "@/composables/useUser";
import { useGrades } from "@/composables/useGrades";
import UserAppHeader from "@/components/layout/UserAppHeader.vue";

const { user, fetchUser } = useUser();
const { grade, fetchGrades } = useGrades();

onMounted(async () => {
    await fetchUser();
    await fetchGrades();
})
</script>

<template>
    <UserAppHeader 
        :userName="user?.name"
        :userRa="user?.id"
    />
    <p>Nota 1 - {{ grade?.grade1 }}</p>
    <p>Nota 2 - {{ grade?.grade2 }}</p>
    <p>Média - {{ grade?.average }}</p>
    <p>Faltas - {{ grade?.absences }}</p>
    <p>Presença - {{ grade?.attendance }}%</p>
</template>