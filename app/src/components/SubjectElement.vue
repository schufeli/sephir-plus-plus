<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useSubjectStore } from '../stores/subject';
    const props = defineProps(['subject'])
    const store = useSubjectStore();

    const avg = computed(() => {
        const sum = props.subject.grades.reduce((sum: number, current: number) => sum + current.number, 0);
        return (Math.round(sum / props.subject.grades.length * 100) / 100).toFixed(2);
    });

    function removeGrade(grade: { id: any; }) {
        props.subject.grades.splice(props.subject.grades.findIndex(e => e.id === grade.id), 1)
        store.updateSubject(props.subject);
    }
</script>

<template>
    <article class="bg-white rounded mt-5 p-4">
        <!-- subject name and avg -->
        <div class="flex justify-between items-center">
            <h2 class="font-medium">{{ subject.name }}</h2>
            <p><span class="font-medium mr-1">Ø</span>{{ avg }}</p>
        </div>
        <!-- grade information -->
        <section class="my-4 flex flex-wrap">
            <div class="p-2 mr-2 bg-gray-200 hover:bg-red-300 cursor-pointer" v-for="grade of subject.grades" @click="removeGrade(grade)">
                <p>{{grade.number.toFixed(2)}}</p>
            </div>
        </section>
        <!-- add new grade -->
        <div class="my-2 flex items-center">
            <input type="number" placeholder="6.0" min="1.0" max="6.0" class="w-16 block input" />
            <button type="button" class="icon-btn ml-2">+</button>
        </div>
    </article>
</template>