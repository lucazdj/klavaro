<script setup lang="ts">
import { useKeyboardStore } from '@/stores/keyboard';

const storeKeyboard = useKeyboardStore();

</script>

<template>
  <input :value="storeKeyboard.currentText" class="p-4 border border-amber-800"
         type="text"
         @input="storeKeyboard.updateText(($event.target as HTMLTextAreaElement).value)"/>
</template>

<style scoped>

</style>
