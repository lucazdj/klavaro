<script setup lang="ts">

import { ref } from 'vue';
import { useKeyboardStore } from '../stores/keyboard';

const storeKeyboard = useKeyboardStore();

const alphabet: Array<string> = 'qwertyuiopasdfghjklzxcvbnm'.split('');

const keys = ref([...alphabet]);

</script>

<template>
  <ul class="grid grid-cols-10 justify-items-stretch">
    <li v-for="key in keys" :key="key" @click="storeKeyboard.addKey(key)"
      class="cursor-pointer p-2 hover:bg-slate-400 focus:bg-slate-400">
      {{ key }}
    </li>
    <li @click="storeKeyboard.removeKey"
      class="col-start-9 col-end-11 cursor-pointer p-2 hover:bg-slate-400 focus:bg-slate-400">DEL
    </li>
  </ul>
</template>

<style scoped>

</style>
