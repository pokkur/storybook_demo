<template>
  <div class="one">
    <layer-block>
      <HelloWorld message="How is it Storybook?" />
      <ImageFrame path="//incloop.com/blog_neta/test/big.png?data=1" width="200" height="200" />
      <ImageFrame path="//nothing.png" width="150" height="150" />
    </layer-block>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LayerBlock from '@/components/LayerBlock.vue'
import ImageFrame from '@/components/ImageFrame.vue'


export default {
  name: 'One',
  components: {
    HelloWorld,
    LayerBlock,
    ImageFrame
  }
}
</script>

<style lang="scss" scoped>
.one {
    background: hsl(71, 28%, 89%);
}
</style>
