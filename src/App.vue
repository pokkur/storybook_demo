<template>
  <div id="app">
    <page-switcher />
    <transition mode="out-in">
      <router-view class="page" />
    </transition>
  </div>
</template>

<script>
import PageSwitcher from '@/components/PageSwitcher.vue'

export default {
    name: 'HelloWorld',
    components: {
        PageSwitcher
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
}

.page {
    position: fixed;
    top: 0;
    /* padding-top: 50px; */
    width: 100vw;
    min-height: 100vh;
}

.v-enter {
    transform: scale(1.05);
    opacity: 0;
}

.v-enter-to {
    opacity: 1;
}

.v-enter-active {
    transition: all 0.4s 0s ease;
}

.v-leave {
    transform: scale(0);
    opacity: 1;
}

.v-leave-to {
    transform: scale(1.05);
    opacity: 0;
}

.v-leave-active {
    transition: all 0.3s 0s ease;
}
</style>
