<template>
  <span class="border">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.border {
  color: $text-color;
  padding: 2px 4px;
  border-radius: $background-border-radius;
  border: 1px solid $border-light-color;
  background-color: $border-light-color;
  margin: 0 4px;
}
</style>
