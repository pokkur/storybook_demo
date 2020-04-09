<template>
  <div class="one">
    <layer-block>
      <HelloWorld message="How is it Storybook?" />
    </layer-block>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LayerBlock from '@/components/LayerBlock.vue'

export default {
  name: 'One',
  components: {
    HelloWorld,
    LayerBlock
  }
}
</script>

<style lang="scss" scoped>
.one {
    background: hsl(71, 28%, 89%);
}
</style>
