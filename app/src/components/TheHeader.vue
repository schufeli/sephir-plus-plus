<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useSubjectStore } from '../stores/subject';
import SubjectElementVue from './SubjectElement.vue';

    const title = "Sephir++";
    const store = useSubjectStore();

    const avg = computed(() => {
        let sum = 0;

        store.data.forEach(subject => {
            const subSum = subject.grades.reduce((sum: number, current: number) => sum + current.number, 0);
            sum = sum + (Math.round(subSum / subject.grades.length * 100) / 100);
        });

        return (Math.round(sum / store.data.length * 100) / 100).toFixed(1);
    });

</script>

<template>
    <div class="my-6 p-4 bg-white rounded-xl shadow flex justify-between items-center">
        <h1 class="font-semibold text-lg">{{ title }}</h1>
        <p class="italic">
            <span class="font-medium mr-1">Ø</span>
            {{ avg }}
        </p>
    </div>
</template>