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
    id: 'Key-' + i,
    states: [
      String.fromCharCode(i + 32),
      String.fromCharCode(i)
    ],
    action: (key?: string) => storeKeyboard.addKey(key),
  });
}

qwerty.push({
  id: 'Key-' + i++,
  states: [
    '←',
  ],
  action: () => storeKeyboard.removeKey(),
});

qwerty.push({
  id: 'Key-' + i++,
  states: [
    '__',
  ],
  action: () => storeKeyboard.addKey(' '),
});

qwerty.push({
  id: 'Key-' + i++,
  states: [
    'C',
  ],
  action: () => storeKeyboard.removeAll(),
});

const keyboard: Keyboard = {
  keys: qwerty,
}

const keys = ref(keyboard.keys);

function handleClick(event: Event) {
  const input = <HTMLInputElement>document.querySelector('#kb-input');
  input.focus();
  const target = <HTMLInputElement>event.target;
  target.blur();
  const key: Key = qwerty.find(el => el.id === target.id) ?? <Key>{};
  key.action && key.action(target.value);
}

</script>

<template>
  <div class="grid grid-cols-10 justify-items-stretch gap-1 p-2 shadow-md bg-white rounded">
    <button v-for="key in keys" v-bind:id="key.id" v-bind:key="key.id"
            class="cursor-pointer p-2 border border-emerald-300  focus:outline focus:ring ring-green-300 outline-2 outline-offset-0 outline-emerald-500 rounded hover:bg-green-200 focus:bg-green-400 select-none"
            type="button"
            v-bind:value="key.states[0]"
            v-on:mousedown.prevent="handleClick">
      {{ key.states[0] }}
    </button>
  </div>
</template>

<style scoped>

</style>
