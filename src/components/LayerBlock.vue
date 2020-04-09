<template>
    <section class="layer">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'LayerBlock'
}
</script>

<style scoped lang="scss">
.layer {
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, calc(-50% - 50px));
    background: rgba(255, 255, 255, 0);
}
</style>
