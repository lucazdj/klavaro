<script lang="ts" setup>
import { useKeyboardStore } from '@/stores/keyboard';

const storeKeyboard = useKeyboardStore();

function handleInput(event: Event) {
  storeKeyboard.updateText((<HTMLInputElement>event.target).value);
}

</script>

<template>
  <textarea :value="storeKeyboard.currentText" class="p-4 border border-amber-800"
         type="text"
         @input="handleInput"/>
</template>

<style scoped>

</style>
