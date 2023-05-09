<template>
  <div class="page-main">
    <Nav />
    <div class="page-body">
      <Wapper>
        <template v-slot:aside>
          <Aside />
        </template>
        <template v-slot:body>
          <RouterView />
        </template>
      </Wapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Wapper from '@/components/Wapper.vue'
import Nav from '@/components/Nav/Nav.vue'
import Aside from '@/components/Aside/Aside.vue'
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
