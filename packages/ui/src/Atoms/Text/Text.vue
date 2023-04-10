<template>
  <p :class="classes">{{ text }}</p>
</template>

<script lang="ts" setup>
import './Text.module.scss'
import {computed, ref} from "vue";

export type TextProps = {
  /**
   * Text to display
   */
  text: string;
};

export type TextEmits = {};

const props = withDefaults(defineProps<TextProps>(), {});

const emit = defineEmits<TextEmits>();

const paragraph = ref<HTMLParagraphElement>();

defineExpose({
  paragraph,
})

const classes = computed(() => ({
  'asm-text': true,
}));
</script>