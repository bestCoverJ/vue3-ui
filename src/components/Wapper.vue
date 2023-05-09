<template>
  <div class="wapper">
    <div class="aside">
      <slot name="aside"></slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.wapper {
  display: flex;
  min-height: 100vh;
  >div {
    padding: 8px;
  }

  .aside {
    width: 240px;
    height: 100vh;
    position: fixed;
    top: 56px;
    border-right: 1px solid $border-color;
  }

  .body {
    margin-left: 240px;
    padding: 0 32px;
    flex: 1;
    h3 {
      margin-top: 32px;
    }
  }
}
</style>
