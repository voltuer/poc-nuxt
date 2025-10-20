<script setup lang="ts">
import {ref} from 'vue';

const bla = ref('tu');
</script>

<template>
  <b>hola</b>
  <br>
  <div class="w-30">
    <a-input v-model:value="bla"/>
  </div>
  <div class="p-4 w-1/3 m-auto border border-green-400 h-20 bg-green-200 rounded-lg mt-10">
    <p class="">Page: hola {{ bla }}</p>
  </div>
</template>

<style scoped></style>
