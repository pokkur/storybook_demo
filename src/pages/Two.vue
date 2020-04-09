<template>
  <div class="two">
    <layer-block>
      <head-line :level="2">HeadLine Lv.2</head-line>
      <block-button shape="rounded" theme="wired" size="large">button</block-button>
    </layer-block>
  </div>
</template>

<script>
import LayerBlock from '@/components/LayerBlock.vue'
import HeadLine from '@/components/HeadLine.vue'
import BlockButton from '@/components/BlockButton.vue'

export default {
    name: 'two',
    components: {
        LayerBlock,
        HeadLine,
        BlockButton
    }
}
</script>

<style lang="scss" scoped>
.two {
    background: hsl(210, 100%, 20%);
    color: #fff;
}
</style>
