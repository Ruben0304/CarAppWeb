<template>
  <div class="w-full min-h-screen bg-gradient-custom from-bg-gradient-start to-bg-gradient-end dark:from-dark-main dark:to-primary-dark transition-colors duration-1000">
    <FlotatingNavBar />
    <div class="pt-20"> <!-- Añadimos padding-top aquí -->
      <NuxtPage />
    </div>
    <DownloadFAB/>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
html, body {
  min-height: 100vh;
}
</style>