<template>
  <div class="index-banner">
    <div class="index-banner-wapper" :style="bannerStyle"></div>
    <div class="index-banner-body">
      <h1>Vue3 UI</h1>
      <h2>基于 Vue3 + TS + Element Plus 的自定义组件封装</h2>
      <RouterLink to="/Document">进一步了解 ></RouterLink>
      <RouterLink to="/Components">使用组件 ></RouterLink>
    </div>
    <div class="index-select-wapper">
      <h2>功能亮点</h2>
      <div class="index-select-body">
        <div class="index-select-body-content"
          v-for="(light, lIndex) in lightList" :key="lIndex"
        >
          <component :is="light.icon"></component>
          <h3>{{ light.name }}</h3>
        </div>
      </div>
    </div>
    <div class="preload-image-wapper">
      <img class="preload-image" 
        v-for="(image, index) in imageUrlList" :key="index"
        v-show="false"
        :src="image"
      />
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

import Box from '@/components/icons/IconBox.vue'
import Flash from '@/components/icons/IconFlash.vue'
import Custom from '@/components/icons/IconCustom.vue'
import { RouterLink } from 'vue-router';

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

const lightList = ref([
  {
    icon: Box,
    name: '开箱即用'
  },
  {
    icon: Custom,
    name: '丰富定制'
  },
  {
    icon: Flash,
    name: '轻量快速'
  }
])
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
    a {
      text-decoration: none;
      &+a {
        margin-left: 32px;
      }
    }
  }
  .index-select-wapper {
    width: 560px;
    margin: 60px auto 0 auto;
    h2 {
      text-align: center;
    }
    .index-select-body {
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .index-select-body-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          height: 48px;
          width: 48px;
        }
      }
    }
  }
}

</style>
