<script lang="ts" setup>
import { useKeyboardStore } from '@/stores/keyboard';

const storeKeyboard = useKeyboardStore();

function handleInput(event: Event) {
  storeKeyboard.updateText((<HTMLInputElement>event.target).value);
}

</script>

<template>
  <textarea id="kb-input"
            autofocus
            class="resize-none rounded-md focus:outline focus:ring ring-green-300 outline-2 outline-offset-0 outline-emerald-500 h-40 scroll-smooth w-1/2 p-2 border border-emerald-500"
            type="text"
            v-bind:value="storeKeyboard.currentText" v-on:input="handleInput"/>
</template>

<style scoped>

</style>
