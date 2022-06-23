<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useSubjectStore } from '../stores/subject';
import SubjectElementVue from './SubjectElement.vue';
import CreateSubject from './CreateSubject.vue';

    const title = "Sephir++";
    const store = useSubjectStore();

    const avg = computed(() => {
        let sum = 0;

        store.data.forEach(subject => {
            if (subject.grades.length <= 0)
                return 0;

            const subSum = subject.grades.reduce((sum: number, current: number) => sum + current.number, 0);
            sum = sum + (Math.round(subSum / subject.grades.length * 100) / 100);
        });

        return (Math.round(sum / store.data.length * 100) / 100).toFixed(1);
    });

</script>

<template>
    <div class="my-6 p-4 bg-white rounded-xl shadow flex justify-between items-center flex-wrap">
        <h1 class="font-semibold text-lg">{{ title }}</h1>
        <CreateSubject class="order-3 mx-auto md:order-none md:mx-0" />
        <p class="italic">
            <span class="font-medium mr-1">Ø</span>
            {{ avg }}
        </p>
    </div>
</template>