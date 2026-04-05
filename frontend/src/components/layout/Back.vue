<script setup></script>

<template>
    <div class="mb-5 flex flex-row p-2">
        <button 
            @click="$router.back()"
            class="flex align-center justify-center gap-1 bg-indigo-500 text-gray-200 p-2 rounded-md cursor-pointer hover:bg-indigo-400 duration-300 ease-in-out"> 
            <span class="material-icons">arrow_back</span>
        </button>
    </div>
</template>