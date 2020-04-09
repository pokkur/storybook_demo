<template>
  <div>
    <head-line :level="1">{{ message }}</head-line>
    <block-button shape="rounded">button</block-button>
  </div>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue'
import BlockButton from '@/components/BlockButton.vue'
export default {
  name: 'HelloWorld',
  components: {
    HeadLine,
    BlockButton
  },
  props: {
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
