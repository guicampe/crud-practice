<script setup>
import { ref } from 'vue';
import { useUpdateGrade } from "@/composables/useUpdateGrade";
import ConfirmModal from './ConfirmModal.vue';

const props = defineProps({
    subject: { type: Object, required: true },
    userId: { type: [String, Number], required: true }
})

const emit = defineEmits(["updated", "cancel"]);
const { fetchUpdateGrade } = useUpdateGrade();

const form = ref({
    grade1: props.subject.grade1 ?? "",
    grade2: props.subject.grade2 ?? "",
    absences: props.subject.absences ?? ""
});

const showConfirm = ref(false);

const handleConfirm = async () => {
    const updated = await fetchUpdateGrade(props.userId, props.subject.subject_id, form.value);
    emit("updated", {...props.subject, ...updated});
    showConfirm.value = false;
}
</script>

<template>
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div class="bg-white rounded-md shadow-lg p-6 w-96 flex flex-col gap-4">
            <p class="text-gray-800 text-xl font-bold">Editar - {{ subject.subject_name }}</p>
            <div class="grid grid-cols-2 gap-3">
                <label class="flex flex-col gap-1 text-sm text-gray-700">
                    Nota 01
                    <input v-model="form.grade1" type="number" step="0.1" min="0" max="10"
                        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-400" />
                </label>
                <label class="flex flex-col gap-1 text-sm text-gray-700">
                    Nota 02
                    <input v-model="form.grade2" type="number" step="0.1" min="0" max="10"
                        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-400" />
                </label>
                <label class="flex flex-col gap-1 text-sm text-gray-700">
                    Total de Aulas
                    <input v-model="form.total_classes" type="number" min="0"
                        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-400" />
                </label>
                <label class="flex flex-col gap-1 text-sm text-gray-700">
                    Faltas
                    <input v-model="form.absences" type="number" min="0"
                        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-400" />
                </label>
            </div>
            <div class="flex justify-end gap-3">
                <button class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
                    @click="$emit('cancel')">
                    Cancelar
                </button>
                <button class="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white"
                    @click="showConfirm = true">
                    Salvar
                </button>
            </div>
        </div>
    </div>

    <ConfirmModal
        v-if="showConfirm"
        message="Confirmar edição das notas?"
        confirmLabel="Salvar"
        @confirm="handleConfirm"
        @cancel="showConfirm = false"
    />
</template>