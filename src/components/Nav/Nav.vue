<template>
  <div class="index-nav">
    <div class="nav-wapper">
      <div class="nav-logo">
        <Icon3DBox class="logo" />
        <h1>Vue3 UI</h1>
      </div>
      <div class="nav-item">
        <NavMenu :menus="menuList" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon3DBox from '@/components/icons/Icon3DBox.vue'
import NavMenu from '@/components/Nav/NavMenu.vue'
import { ref } from 'vue';

const menuList = ref([
  {
    label: '首页',
    value: 0
  },
  {
    label: '文档',
    value: 1
  },
  {
    label: '组件',
    value: 2
  }
])
</script>

<style lang="scss">
.index-nav {
  height: 56px;
  border-bottom: 1px solid $border-color;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  z-index: 1000;
  .nav-wapper {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-logo {
      height: 56px;
      display: flex;
      align-items: center;
      .logo {
        width: 48px;
        height: 48px;
        margin-right: 8px;
      }
    }
  }
}
</style>
