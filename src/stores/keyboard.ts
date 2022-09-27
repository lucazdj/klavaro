import { ref } from 'vue'
import { defineStore } from 'pinia';

export const useKeyboardStore = defineStore('keyboard', () => {
  const currentText = ref('');

  function addKey(key?: string): void {
    currentText.value += key;
  }

  function removeKey(): void {
    currentText.value = currentText.value.slice(0, -1);
  }

  function updateText(text: string): void {
    currentText.value = text;
  }

  return {
    currentText, addKey, removeKey, updateText,
  }

});