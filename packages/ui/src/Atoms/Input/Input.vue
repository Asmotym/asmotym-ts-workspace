<template>
  <input
      type="text"
      :class="classes"
      :style="style"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="onInput"
  />
</template>

<script lang="ts" setup>
import './Input.module.scss';
import {computed, ref} from "vue";

export type InputProps = {
  /**
   * Default placeholder
   */
  placeholder?: string;
  /**
   * Size of the input
   */
  size?: 'default' | 'large';
  /**
   * Disable the input
   */
  disabled?: boolean;
  /**
   * Default pre-filled value
   */
  value?: string;
};

export type InputEmits = {
  (name: 'input', event: InputEvent): void;
};

const props = withDefaults(defineProps<InputProps>(), {
  size: 'default',
});

const emit = defineEmits<InputEmits>();

const classes = computed(() => ({
  'asm-input': true,
  'asm-input--large': props.size === 'large',
}));

const style = computed(() => ({}));

const input = ref<HTMLInputElement>();

defineExpose({
  input,
})

const onInput = (event: InputEvent) => {
  emit("input", event)
}
</script>