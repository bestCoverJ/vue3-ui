<template>
  <div class="components-button">
    <h2>按钮 Button</h2>
    <p>安慰也是一剂良药。</p>
    <!--  -->
    <h3>基础用法</h3>
    <p>按下它，然后期待事情发生。</p>
    <p>使用<Border>type</Border>属性来指定按钮类型。</p>
    <div class="flex">
      <vButton type="normal">默认按钮</vButton>
      <vButton type="primary">主要按钮</vButton>
      <vButton type="success">成功按钮</vButton>
      <vButton type="info">信息按钮</vButton>
      <vButton type="warning">警告按钮</vButton>
      <vButton type="danger">危险按钮</vButton>
    </div>
    <div>
      <highlightjs language="HTML" :autodetect="true" :code="code1" />
    </div>
    <!--  -->
    <h3>禁用状态</h3>
    <p>不可以点这里哦~</p>
    <p>指定<Border>disabled</Border>即可设置为禁用状态。</p>
    <div class="flex">
      <vButton type="normal" disabled>默认按钮</vButton>
      <vButton type="primary" disabled>主要按钮</vButton>
      <vButton type="success" disabled>成功按钮</vButton>
      <vButton type="info" disabled>信息按钮</vButton>
      <vButton type="warning" disabled>警告按钮</vButton>
      <vButton type="danger" disabled>危险按钮</vButton>
    </div>
    <div>
      <highlightjs language="HTML" :autodetect="true" :code="code2" />
    </div>
    <!--  -->
    <h3>加载状态</h3>
    <p>它们还没准备好。</p>
    <p>指定<Border>loading</Border>即可设置为加载状态，也可以使用一个图标占位。</p>
    <Tips>如果你添加了loading内容，那么默认的加载效果将不起作用。</Tips>
    <div class="flex">
      <vButton type="normal" loading>默认加载</vButton>
      <vButton type="normal" loading>
        <template v-slot:loading>
          <IconLoadingLine2 class="icon-loading" />
        </template>
        换个图标
      </vButton>
      <vButton type="normal" loading>
        <template v-slot:loading>
          <IconLoading class="icon-loading" />
        </template>
        这个风格也不错
      </vButton>
      <vButton type="normal" loading>
        <template v-slot:loading>
          <IconLollipop class="icon-loading" />
        </template>
        等这个棒棒糖
      </vButton>
    </div>
    <div>
      <highlightjs language="HTML" :autodetect="true" :code="code3" />
    </div>
    <!--  -->
    <h3>文字按钮</h3>
    <p>常用来操作列表项，当然你也可以用作超链接使用。</p>
    <p>指定<Border>text</Border>即可切换为文字按钮。</p>
    <div class="flex">
      <vButton type="normal" text>默认按钮</vButton>
      <vButton type="primary" text>主要按钮</vButton>
      <vButton type="success" text>成功按钮</vButton>
      <vButton type="info" text>信息按钮</vButton>
      <vButton type="warning" text>警告按钮</vButton>
      <vButton type="danger" text>危险按钮</vButton>
    </div>
    <div>
      <highlightjs language="HTML" :autodetect="true" :code="code4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import vButton from './vButton.vue'
import Border from '@/components/Border.vue'
import Tips from '@/components/Tips.vue'
import IconLoading from '@/components/icons/IconLoading.vue'
import IconLoadingLine2 from '@/components/icons/IconLoadingLine2.vue'
import IconLollipop from '@/components/icons/IconLollipop.vue'
const code1 = `<vButton type="normal">默认按钮</vButton>
<vButton type="primary">主要按钮</vButton>
<vButton type="success">成功按钮</vButton>
<vButton type="info">信息按钮</vButton>
<vButton type="warning">警告按钮</vButton>
<vButton type="danger">危险按钮</vButton>
`
const code2 = `<vButton type="normal" disabled>默认按钮</vButton>
<vButton type="primary" disabled>主要按钮</vButton>
<vButton type="success" disabled>成功按钮</vButton>
<vButton type="info" disabled>信息按钮</vButton>
<vButton type="warning" disabled>警告按钮</vButton>
<vButton type="danger" disabled>危险按钮</vButton>
`
const code3 = `<vButton type="normal" loading>默认加载</vButton>
<vButton type="normal" loading>
  <template v-slot:loading>
    <IconLoadingLine2 />
  </template>
  换个图标
</vButton>
<vButton type="normal" loading>
  <template v-slot:loading>
    <IconLoading />
  </template>
  这个风格也不错
</vButton>
<vButton type="normal" loading>
  <template v-slot:loading>
    <IconLollipop />
  </template>
  等这个棒棒糖
</vButton>
`
const code4 = `<vButton type="normal" text>默认按钮</vButton>
<vButton type="primary" text>主要按钮</vButton>
<vButton type="success" text>成功按钮</vButton>
<vButton type="info" text>信息按钮</vButton>
<vButton type="warning" text>警告按钮</vButton>
<vButton type="danger" text>危险按钮</vButton>
`
</script>

<style lang="scss">
.components-button {
  .icon-loading {
    height: 14px;
    width: 14px;
  }
}
</style>
