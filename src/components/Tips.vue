<template>
  <div class="tips">
    <h4>
      {{ props.title }}
    </h4>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '提示'
})
</script>

<style lang="scss">
.tips {
  padding: 16px;
  margin-bottom: 16px;
  background-color: $primary-light-color;
  position: relative;
  h4 {
    margin: 0 0 16px 0;
  }
  p {
    margin: 0;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: $primary-color;
  }
}
</style>
