import { ref } from 'vue'
import { defineStore } from 'pinia';

export const useKeyboardStore = defineStore('keyboard', () => {
  const currentText = ref('');

  function addKey(key: string) {
    currentText.value += key;
  }

  function removeKey() {
    currentText.value = currentText.value.slice(0, -1);
  }

  function updateText(text: string) {
    currentText.value = text;
  }

  return {
    currentText, addKey, removeKey, updateText,
  }

});