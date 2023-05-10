<template>
  <button class="v-button"
    :class="buttonClass"
    :disabled="props.disabled"
  >
    <span v-if="props.loading" class="v-button-loading-icon">
      <slot name="loading">
        <IconLoadingLine class="icon-loading" />
      </slot>
    </span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconLoadingLine from '@/components/icons/IconLoadingLine.vue'

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
