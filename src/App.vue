<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue'
import ViewMain from './views/ViewMain.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader/>
  <main class="grow">
    <ViewMain/>
  </main>
  <TheFooter/>
</template>

