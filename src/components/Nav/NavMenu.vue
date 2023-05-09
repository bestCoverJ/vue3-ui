<template>
  <div class="nav-menu">
    <div class="nav-menu-item"
      v-for="(item, index) in props.menus" :key="index"
      :class="{'actived' : activedId === item.value}"
      @click="clickNavMenu(item)"
    >
      <h4>{{ item.label }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface NavMenu {
  label: string,
  value: string | number
}
const props = defineProps<{
  menus: Array<NavMenu>
}>()
const activedId = ref<string | number>(props.menus[0].value)
const clickNavMenu = (item: NavMenu) => {
  activedId.value = item.value
}
</script>

<style lang="scss">
.nav-menu {
  height: 56px;
  display: flex;
  align-items: center;
  .nav-menu-item {
    cursor: pointer;
    &+.nav-menu-item {
      margin-left: 32px;
    }
    &:hover {
      @include text-hover;
    }
    &.actived {
      position: relative;
      &::after {
        position: absolute;
        bottom: 0;
        content: '';
        height: 2px;
        width: 100%;
        background-color: $primary-color;
        border-radius: 2px;
      }
    }
  }
}
</style>
