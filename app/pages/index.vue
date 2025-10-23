<script setup lang="ts">

import {useUserStore} from "~~/stores/user";

const userStore = useUserStore()

const isLogging = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// Computed para el nombre que usa la acción setName
const userName = computed({
  get: () => userStore.name,
  set: (value: string) => userStore.setName(value)
})

// Computed para la edad que usa la acción setAge
const userAge = computed({
  get: () => userStore.age,
  set: (value: number) => userStore.setAge(value)
})

async function logHello() {
  isLogging.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    // $fetch is a powerful Nuxt utility for making internal requests.
    // It automatically prefixes the URL with /api and handles parsing.
    const response = await $fetch('/api/hello') as { message: string };

    successMessage.value = response.message;
    console.log('Client-side response:', response); // This logs to the BROWSER console

  } catch (error: any) {
    errorMessage.value = error.message || 'An unknown error occurred.';
    console.error('Client-side error:', error);
  } finally {
    isLogging.value = false;
  }
}

onMounted(() => {
  userStore.initFromLocalStorage()
})

</script>

<template>
  <b>hola</b>
  <br>
  <div>
    <AButton @click="logHello">decir hello</AButton>
  </div>
  <div class="space-y-4 w-80">
    <AInput
      v-model:value="userName"
      placeholder="Tu nombre"
      class="w-full"
    />
    <AInputNumber
      v-model:value="userAge"
      placeholder="Tu edad"
      :min="0"
      :max="120"
      class="w-full"
    />
  </div>
  <UserInfoBox />
  <div class="mt-4 space-x-2">
    <AButton @click="userStore.resetUser()" type="default">
      Limpiar datos
    </AButton>
  </div>
</template>

<style scoped></style>
