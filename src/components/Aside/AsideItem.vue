<template>
  <div class="aside-item"
    v-for="(item, index) in props.asides" :key="index"
  >
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <div class="aside-list">
      <div class="aside-list-item"
        v-for="(aitem, aindex) in item.items" :key="aindex"
        @click="asideItemClick(aitem)"
      >
        <h4>{{ aitem.label }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
export interface Aside {
  name: string,
  description: string,
  items?: Array<AsideItem>
}
export interface AsideItem {
  label: string,
  value?: string
}

const props = defineProps<{
  asides: Array<Aside>
}>()
const router = useRouter()
const asideItemClick = (aitem: AsideItem) => {
  router.push({
    name: aitem.value
  })
}
</script>

<style lang="scss">
.aside-item {
  h3 {
    margin-bottom: 0;
  }
  .aside-list {
    .aside-list-item {
      h4 {
        cursor: pointer;
        padding: 8px 12px;
        font-weight: 500;
        border-radius: 4px;
        margin: 0;
        @include list-hover();
      }
      &+.aside-list-item {
        margin-top: 4px;
      }
    }
  }
}
</style>
