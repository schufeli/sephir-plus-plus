<script setup lang="ts">
import { useSubjectStore } from '../stores/subject';

    const store = useSubjectStore();

    function addSubject(name: string) {
        store.addSubject({ id: store.data.length + 1, name: name });
    }
</script>

<template>
    <div class="p-4 bg-white rounded-xl">
        <div class="" v-for="subject of store.data">
            <p>{{ subject.name }}</p>
            <div>
                <p v-for="grade of subject.grades">
                    {{ grade.number }}
                </p>
            </div>
        </div>

        <button class="mt-10 bg-green-50" @click="addSubject('WUUUUUURRRR')">Update</button>
    </div>
</template>