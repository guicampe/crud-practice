<script setup>
import AddSubjectToUser from '@/components/admin/AddSubjectToUser.vue';
import { useDeleteGrade } from '@/composables/useDeleteGrade';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
    subjects: {
        type: Array,
        required: true,
    },
    userId: {
        type: [String, Number],
        required: true,
    }
})

const emit = defineEmits(["created", "row-click", "delete-subject"]);
const { fetchDeleteGrade } = useDeleteGrade();
const openMenuId = ref(null);

const localSubjects = ref([...props.subjects]);

watch(() => props.subjects, (val) => {
    localSubjects.value = [...val];
})

const handleDelete = async (subjectId) => {
    await fetchDeleteGrade(props.userId, subjectId);
    localSubjects.value = localSubjects.value.filter(s => s.subject_id !== subjectId);
    emit("delete-subject", subjectId);
}

onMounted(() => {
    document.addEventListener("click", () => openMenuId.value = null);
})

onBeforeUnmount(() => {
    document.removeEventListener("click", () => openMenuId.value = null);
})
</script>

<template>
    <div class="p-10">
        <h1 class="text-gray-800 text-4xl font-bold mb-10 text-shadow-md">Boletim</h1>
        <div class="flex flex-col gap-1 border-2 border-indigo-400 p-2 bg-gray-200 rounded-md shadow-md">
            <table v-if="localSubjects?.length > 0" class="shadow-md">
                <thead class="bg-indigo-400 h-12 text-gray-200 text-lg">
                    <tr>
                        <th>Matéria</th>
                        <th>Nota 01</th>
                        <th>Nota 02</th>
                        <th>Faltas</th>
                        <th>Presença</th>
                        <th>Média</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subject in localSubjects" :key="subject.subject_id" class="text-center text-gray-800 
                        h-10 odd:bg-white even:bg-gray-100">
                        <td class="text-left p-2">
                            {{ subject.subject_name }}
                        </td>
                        <td>{{ subject.grade1 }}</td>
                        <td>{{ subject.grade2 }}</td>
                        <td>{{ subject.absences }}</td>
                        <td class="font-bold">{{ subject.attendance != null ? subject.attendance + "%" : "-" }}</td>
                        <td class="font-bold">{{ subject.average }}</td>
                        <td class="relative">
                            <div class="flex items-center justify-center">
                                <button
                                    @click.stop="openMenuId = openMenuId === subject.subject_id ? null : subject.subject_id"
                                    class="material-icons text-indigo-500 transition hover:text-black rounded-full hover:bg-indigo-500">
                                    more_vert
                                </button>
                                <div v-if="openMenuId === subject.subject_id"
                                    class="absolute right-0 top-6 w-32 bg-white border rounded shadow-md z-10">
                                    <button class="w-full text-left px-3 py-2 hover:bg-gray-100"
                                        @click.stop="$emit('row-click', subject)">
                                        Editar
                                    </button>
                                    <button class="w-full text-left px-3 py-2 text-red-500 hover:bg-red-100"
                                        @click.stop="handleDelete(subject.subject_id)">
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p v-else class="text-gray-800 font-bold text-2xl">Ainda não há matérias cadastradas</p>
            <AddSubjectToUser @created="$emit('created')" class="mt-2" />
        </div>
    </div>
</template>