<script setup lang="ts">
import { ref } from 'vue';
import { useSubjectStore } from '../stores/subject';

    const store = useSubjectStore();
    const input = ref('');
    const formError = ref(false);


    function newSubject(name: string) {
        if (name !== "") {
            const subject = {
                id: store.data.length + 1,
                name: name,
                grades: []
            }
            store.addSubject(subject);
            input.value = "";
            formError.value = false;
        } else {
            formError.value = true;
        }
    }
</script>

<template>
    <div class="my-2 flex items-center flex-wrap">
        <input v-model="input" type="text" placeholder="Subject name" class="block input" :class="{ 'focus:border-red-500': formError }" 
               @keyup.enter="newSubject(input)"/>
        <button type="button" class="icon-btn mx-2" @click="newSubject(input)">+</button>
        <p class="text-red-500" v-show="formError">Subject name cannot be empty</p>
    </div>
</template>