import { defineStore } from 'pinia';

export const useKeyboardStore = defineStore({
  id: 'keyboard',
  state: () => ({
    currentText: ''
  }),
  actions: {
    addKey(key: string) {
      this.currentText += key;
    },
    removeKey() {
      this.currentText = this.currentText.slice(0, -1);
    },
    updateText(text: string) {
      this.currentText = text;
    }
  }
});