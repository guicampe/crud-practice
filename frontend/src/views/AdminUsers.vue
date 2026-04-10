<script setup>
import { onMounted } from "vue";
import { useUsers } from "@/composables/useUsers";
import DataTable from "../components/admin/DataTable.vue";
import Back from "@/components/layout/Back.vue";
import NavCard from "@/components/ui/NavCard.vue";

const { users, fetchUsers } = useUsers();

onMounted(async () => {
    await fetchUsers();
})
</script>

<template>
        <div class="h-screen bg-indigo-100">
            <Back />
            <DataTable
                title="Alunos"
                :items="users"
                :columns="[{ label: 'Nome', key: 'name' }]"
                @row-click="(user) => $router.push(`/admin/${user.id}`)"
            />
        </div>
</template>