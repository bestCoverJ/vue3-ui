<template>
  <div class="page-main">
    <Nav />
    <div class="page-body">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav/Nav.vue'

</script>

<style lang="scss">
.page-main {
  margin: 0 auto;
  .page-body {
    margin: 0 auto;
    max-width: 1280px;
  }
}
</style>
