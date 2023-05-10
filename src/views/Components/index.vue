<template>
  <div class="index-page">
    <Wapper>
      <template v-slot:aside>
        <Aside />
      </template>
      <template v-slot:body>
        <RouterView />
      </template>
    </Wapper>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Wapper from '@/components/Wapper.vue'
import Aside from '@/components/Aside/Aside.vue'
</script>

<style lang="scss">
.index-page {}
</style>
