<script setup lang="ts">
import { useSubjectStore } from '../stores/subject';
import SubjectElement from './SubjectElement.vue';
    const store = useSubjectStore();
</script>

<template>
    <div v-for="subject of store.data">
        <SubjectElement :subject="subject" />
    </div>
</template>