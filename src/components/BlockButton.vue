<template>
  <button :class="[theme, shape, size]" :disabled="isDisabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'block-button',
  props: {
    theme: {
        type: String,
        validator: function(_) {
            return ['filled', 'wired'].indexOf(_) !== -1
        },
        default: 'filled'
    },
    shape: {
        type: String,
        validator: function(_) {
            return ['squared', 'rounded'].indexOf(_) !== -1
        },
        default: 'squared'
    },
    size: {
        type: String,
        validator: function(_) {
            return ['small', 'medium', 'large'].indexOf(_) !== -1
        },
        default: 'medium'
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('click') // Vueでは子から親コンポーネントにpropsを渡すのに$emitを使うのです。
    }
  }
}
</script>

<style scoped lang="scss">
$color: (
    main: hsl(291, 64%, 42%),
    sub: hsl(340, 82%, 52%)
);

button {
    display: inline-block;
    width: auto;
    height: 40px;
    line-height: 40px;
    margin: 0 8px;
    padding: 0 1em;
    white-space: nowrap;
    border: none;
    text-align: center;
    color: #fff;
    cursor: pointer;
    outline: none;
    font-weight: 700;
}

button + button {
    margin-left: 0;
}

button[disabled] {
  pointer-events: none;
  filter: grayscale(1);
  opacity: .5;
}

.small {
    width: auto;
    height: 24px;
    line-height: 24px;
    font-size: 10px;
}

.medium {
    min-width: 120px;
    font-size: 13px;
}

.large {
    min-width: 120px;
    font-size: 15px;
    font-weight: 800;
}

.squared {
    border-radius: 0%;
}

.rounded {
    border-radius: 100px;
}

.squircle {
    width: 88px;
    height: 88px;
}

.filled {
    background: map-get($color, main);
    transition: background .3s ease-in-out;

    &:hover {
      background: lighten(map-get($color, main), 5%);
    }
}

.wired {
  background: rgba(255, 255, 255, 0);
  color: map-get($color, sub);
  box-shadow: inset 0 0 0 5px #e92063, 0 2px 1px 1px rgba(0, 0, 0, 0.1);
  transition: all .2s ease-in-out;

  &:hover {
    background: #e92063;
    color: #fff;
    box-shadow: inset 0 0 0 5px #fff, 0 0 10px 0 rgba(255, 255, 255, 0.1);
  }
}
</style>
