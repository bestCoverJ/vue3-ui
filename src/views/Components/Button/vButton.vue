<template>
  <button class="v-button"
    :class="buttonClass"
    :disabled="props.disabled"
  >
    <slot name="loading">
      <Spinner v-if="props.loading" 
        line-fg-color="#409EFF"
        line-bg-color="#ecf5ff"
        line-size="2"
        size="14" 
      />
    </slot>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Spinner from 'vue-simple-spinner/src'

export interface vBotton {
  type: string,
  disabled?: boolean,
  text?: boolean,
  loading?: boolean
}
const props = withDefaults(defineProps<vBotton>(), {
  type: 'normal',
  disabled: false,
  text: false,
  loading: false
})
const buttonClass = computed(() => {
  const { type, disabled, text, loading } = props
  let buttonClass = ''
  if (text) {
    buttonClass = `v-button-text-${type}`
  } else {
    buttonClass = `v-button-${type}`
  }
  if (disabled) {
    buttonClass += ' v-button-disabled'
  }
  if (loading) {
    buttonClass += ' v-button-loading'
  }
  return buttonClass
})
</script>

<style lang="scss">
.v-button {
}
</style>
