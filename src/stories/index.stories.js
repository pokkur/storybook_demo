/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

import BlockButton from '@/components/BlockButton.vue'

export default {
  component: BlockButton,
  title: 'BlockButton',
  decorators: [withKnobs]
}

const sizeOptions = {
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
  None: null
}

const themeOptions = {
  Large: 'filled',
  Medium: 'wired'
}

export const Normal = () => ({
  components: { BlockButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    },
    text: {
      default: text('Text', 'BUTTON')
    },
    size: {
      default: select('Size', sizeOptions, 'medium')
    },
    theme: {
      default: select('Themeeeee', themeOptions, 'filled')
    }
  },
  template: `<BlockButton shape="rounded" :theme="wired" :size="size" :isDisabled="isDisabled">{{ text }}</BlockButton>`
});

export const Disabled = () => ({
  components: { BlockButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', true)
    },
    text: {
      default: text('Text', 'BUTTON')
    },
    size: {
      default: select('Size', sizeOptions, 'medium')
    }
  },
  template: `<BlockButton shape="rounded" :size="size" :isDisabled="isDisabled">{{ text }}</BlockButton>`
});
