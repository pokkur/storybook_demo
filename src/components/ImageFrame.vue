<template>
  <transition appear>
    <img :src="formedPath" @load="onLoad" @error="onError" />
  </transition>
</template>

<script>
import PLACEHOLDER_PATH from "@/assets/logo.png";

export default {
  name: 'ImageFrame',
  props: {
    path: {
      type: String,
      default: null,
      require: true
    }
  },
  data() {
    return {
      formedPath: this.path
    }
  },
  methods: {
    onLoad() {
      // TODO: loaded処理なんらか
    },
    onError() {
      this.$el.src = PLACEHOLDER_PATH // TODO: 代替画像
      this.$el.classList.add('unloaded')
    }
  }
}
</script>

<style scoped lang="scss">
img {
  display: inline-block;
  border: 0;
  max-width: 100%;
  background: #fff url(../assets/91.gif) no-repeat center center; // TODO: ローダーのパス仮

  &.unloaded {
    background: none;
  }
}
</style>
