<template>
  <div class="page-main-wapper">
    <div class="page-main">
      <Nav />
      <div class="page-body">
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav/Nav.vue'
import Footer from '@/components/Footer/footer.vue'
</script>

<style lang="scss">
.page-main-wapper {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .page-body {
    margin: 0 auto;
    max-width: 1280px;
  }
}
</style>
