<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    label: String,
    path: String,
    icon: String,
    padding: {
        type: String,
        default: "p-4"
    },
})

const emit = defineEmits(["click"]);

const goTo = () => {
    if (props.path) router.push(props.path);
    else emit("click");
}
</script>

<template>
    <div @click="goTo()"
        :class="['bg-blue-500 w-fit h-fit flex justify-center items-center rounded-md shadow-sm text-gray-300 font-bold text-3xl cursor-pointer duration-250 ease hover:bg-blue-400 hover:scale-105', padding]">
        <span v-if="icon" class="material-icons mr-2">{{ icon }}</span>
        <p>{{ label }}</p>
    </div>
</template>