<template>
    <h1 v-if="level === 1">
        <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
        <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
        <slot></slot>
    </h3>
</template>

<script>
export default {
    name: 'HeadLine',
    props: {
        level: {
            type: Number,
            validator: function(value) {
                return [1, 2, 3].indexOf(value) !== -1
            },
            default: 1
        }
    }
}
</script>

<style scoped lang="scss">
h1 {
    font-size: 40px;
    font-weight: 800;
    text-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.3);
}

h2 {
    font-size: 36px;
    font-weight: 800;
}

h3 {
    font-size: 26px;
    font-weight: 800;
}
</style>
