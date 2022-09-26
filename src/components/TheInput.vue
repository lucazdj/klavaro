<script setup lang="ts">
import { useKeyboardStore } from '../stores/keyboard';

const storeKeyboard = useKeyboardStore();

</script>

<template>
  <input type="textarea" :value="storeKeyboard.currentText"
    @input="storeKeyboard.updateText(($event.target as HTMLTextAreaElement).value)"
    class="p-4 border border-amber-800" />
</template>

<style scoped>

</style>
