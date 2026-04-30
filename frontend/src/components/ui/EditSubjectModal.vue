<script setup>
import { ref } from 'vue';
import { useUpdateSubject } from '@/composables/useUpdateSubject';
import ConfirmModal from '@/components/ui/ConfirmModal.vue';

const props = defineProps({
    subject: { type: Object, required: true }
})

const emit = defineEmits(["updated", "cancel"]);
const { fetchUpdateSubject } = useUpdateSubject();

const name = ref(props.subject.name);
const showConfirm = ref(false);

const handleConfirm = async () => {
    await fetchUpdateSubject(props.subject.id, name.value);
    emit("updated", { ...props.subject, name: name.value });
    showConfirm.value = false;
}
</script>

<template>
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div class="bg-white rounded-md shadow-lg p-6 w-80 flex flex-col gap-4">
            <p class="text-gray-800 text-xl font-bold">Editar matéria</p>
            <input
                v-model="name"
                type="text"
                class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-400"
                placeholder="Nome da matéria"
            />
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

    <Teleport to="body">
        <ConfirmModal
            v-if="showConfirm"
            message="Confirmar edição da matéria?"
            confirmLabel="Salvar"
            @confirm="handleConfirm"
            @cancel="showConfirm = false"
        />
    </Teleport>
</template>