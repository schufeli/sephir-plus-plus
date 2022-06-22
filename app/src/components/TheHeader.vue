<script setup lang="ts">
    const title = "Sephir++";
    const average = 5.4;
</script>

<template>
    <div class="my-6 p-4 bg-white rounded-xl shadow flex justify-between items-center">
        <h1 class="font-semibold text-lg">{{ title }}</h1>
        <p class="italic">
            <span class="font-medium mr-1">Ø</span>
            {{ average }}
        </p>
    </div>
</template>