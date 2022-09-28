<script lang="ts" setup>
import { useKeyboardStore } from '@/stores/keyboard';

const storeKeyboard = useKeyboardStore();

function handleInput(event: Event) {
  storeKeyboard.updateText((<HTMLInputElement>event.target).value);
}

</script>

<template>
  <textarea id="kb-input"
      class="resize-none rounded-md h-40 scroll-smooth w-1/2 p-2 border border-b-cyan-300 caret-rose-500"
            type="text"
            v-bind:value="storeKeyboard.currentText"
            v-on:input="handleInput" autofocus/>
</template>

<style scoped>

</style>
