<script setup lang="ts">
import { useUserStore } from "~~/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div class="p-4 w-1/3 m-auto border border-green-400 h-auto bg-green-400 rounded-lg mt-10">
    <p class="">{{ userStore.getFullInfo }}</p>
    <p v-if="userStore.name" class="text-sm mt-2">
      {{ userStore.isAdult ? 'Eres mayor de edad' : 'Eres menor de edad' }}
    </p>
  </div>
</template>

<style scoped></style>
