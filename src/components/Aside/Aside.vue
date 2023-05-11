<template>
  <div class="index-aside">
    <AsideItem :asides="asideList"  />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Aside } from './AsideItem.vue'
import AsideItem from './AsideItem.vue';

const asideList = ref<Array<Aside>>([
  {
    name: 'Basic 基础组件',
    description: '基础不牢，地动山摇。',
    items: [
      {
        label: '按钮 Button',
        value: 'Button'
      },
      {
        label: '输入框 Input',
        value: 'Input'
      },
      {
        label: '选择框 Select',
        value: 'Select'
      }
    ]
  }
])
</script>

<style lang="scss">
.index-aside {
  z-index: 1;
  h2, p {
    margin-bottom: 8px;
    margin-top: 8px;
  }
}
</style>
