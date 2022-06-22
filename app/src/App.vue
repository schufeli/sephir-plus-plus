<script setup lang="ts">
import { useSubjectStore } from './stores/subject';

  const store = useSubjectStore();

  store.data.forEach(element => console.log(element.name));

</script>

<template>
  <router-view></router-view>
</template>
