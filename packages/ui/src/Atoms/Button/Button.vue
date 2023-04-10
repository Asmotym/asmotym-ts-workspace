<template>
  <button
      type="button"
      :class="classes"
      :style="style"
      :label="label"
      :disabled="disabled"
      @click="onClick"
  >{{ label }} </button>
</template>

<script lang="ts" setup>
import './Button.module.scss';
import { computed } from 'vue';

export type ButtonProps = {
  /**
   * The label of the button
   */
  label: string,
  /**
   * primary or secondary button
   */
  primary?: boolean,
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * background color of the button
   */
  backgroundColor?: string,
  /**
   * disable button
   */
  disabled?: boolean,
};

export type ButtonEmits = {
  (e: 'click', id: number): void;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
  disabled: false,
});

const emit = defineEmits<ButtonEmits>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const onClick = () => {
  emit("click", 1)
};

</script>