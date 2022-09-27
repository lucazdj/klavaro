<script lang="ts" setup>

import { ref } from 'vue';
import { useKeyboardStore } from '@/stores/keyboard';

const storeKeyboard = useKeyboardStore();


interface Key {
  id: string,
  states: Array<string>,
  action?: (key?: string) => void,
}

interface Keyboard {
  theme?: string,
  language?: string,
  keys: Array<Key>,
}

const qwerty: Array<Key> = [];

let i;
for (i = 65; i <= 90; i++) {
  qwerty.push({
    id: 'KEY-' + i,
    states: [
      String.fromCharCode(i + 32),
      String.fromCharCode(i)
    ],
    action: (key?: string) => storeKeyboard.addKey(key),
  });
}

qwerty.push({
  id: 'KEY-' + i,
  states: [
      '<-',
  ],
  action: () => storeKeyboard.removeKey(),
})

const alphabet: Array<string> = 'qwertyuiopasdfghjklzxcvbnm'.split('');

const keys = ref(qwerty);

function handleClick(event: Event) {
  const target = <HTMLInputElement>event.target;
  target.blur();
  const key = qwerty.find((key) => key.id === target.id));
  key.action && key.action(target.value);
}

</script>

<template>
  <div class="grid grid-cols-10 justify-items-stretch">
    <button v-for="key in keys" :key="key.id" :id="key.id" :value="key.states[0]" class="cursor-pointer p-2 hover:bg-slate-400 focus:bg-slate-400"
            type="button"
            @click="handleClick">
      {{ key.states[0] }}
    </button>
  </div>
</template>

<style scoped>

</style>
