<script setup>
defineProps({
    message: { type: String, required: true },
    confirmLabel: { type: String, default: "Confirmar" },
    confirmClass: { type: String, default: "bg-indigo-500 hover:bg-indigo-600" }
})

defineEmits(["confirm", "cancel"]);
</script>

<template>
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]">
        <div class="bg-white rounded-md shadow-lg p-6 w-80 flex flex-col gap-4">
            <p class="text-gray-800 text-lg font-semibold text-center">{{ message }}</p>
            <div class="flex justify-center gap-3">
                <button class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
                    @click="$emit('cancel')">
                    Cancelar
                </button>
                <button :class="confirmClass"
                    class="px-4 py-2 rounded text-white"
                    @click="$emit('confirm')">
                    {{ confirmLabel }}
                </button>
            </div>
        </div>
    </div>
</template>