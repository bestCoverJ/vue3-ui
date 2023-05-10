<template>
  <div class="index-banner">
    <div class="index-banner-wapper" :style="bannerStyle"></div>
    <div class="index-banner-body">
      <h1>Vue3 UI</h1>
      <h2>基于 Vue3 + TS + Element Plus 的自定义组件封装</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import image1 from '@/assets/images/banner/0eac57a8-ace0-40a4-b1f0-627e660483a2.webp'
import image2 from '@/assets/images/banner/1cec0fc3-9cb6-407d-adf7-6cf582ba1d18.webp'
import image3 from '@/assets/images/banner/87e39e57-8a6e-419d-aa43-f04ca348d7bf.webp'
import image4 from '@/assets/images/banner/916acb7e-c347-4174-b8c2-d4a132c3b31e.webp'
import image5 from '@/assets/images/banner/83943930-71cc-4b33-a74a-d7bdbc9e37db.webp'
import image6 from '@/assets/images/banner/a8244ff6-57a0-4cc2-bdcf-0d86a89e443d.webp'

const imageUrlList = ref<Array<string>>([
  image1, image2, image3, image4, image5, image6
])
const imageIndex = ref<number>(0)
const imageUrl = ref<string>(imageUrlList.value[imageIndex.value])
const addIndex = () => {
  imageIndex.value ++
  imageUrl.value = imageUrlList.value[imageIndex.value % 6]
}
let timer: NodeJS.Timeout | null
const bannerStyle = computed(() => {
  return {
    backgroundImage: `url(${imageUrl.value})`
  }
})
onMounted(() => {
  timer = setInterval(addIndex, 5000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss">
.index-banner {
  position: relative;
  .index-banner-wapper {
    height: 600px;
    background-size: 100%;
    background-position: 50px 80px;
    filter: blur(6px);
    transition: background-image 1s ease-out;
  }
  .index-banner-body {
    top: 0;
    width: 100%;
    position: absolute;
    background: transparent;
    backdrop-filter: blur(4px);
    text-align: center;
    h1 {
      font-family: 'SF Mono Bold';
      font-size: 40px;
      margin: 140px 0 0 0;
    }
  }
}

</style>
