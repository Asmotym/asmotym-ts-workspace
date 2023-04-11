<template>
  <p ref="paragraph" :class="classes">{{ text }}</p>
</template>

<script lang="ts" setup>
import './Text.module.scss'
import {computed, ref, Ref, UnwrapRef} from "vue";

export type TextProps = {
  /**
   * Text to display
   */
  text: string;
};

export type TextEmits = {};

export type TextExposedProps = {
  paragraph: Ref<UnwrapRef<HTMLParagraphElement | null>>;
};

const props = withDefaults(defineProps<TextProps>(), {});

const emit = defineEmits<TextEmits>();

const paragraph: Ref<UnwrapRef<HTMLParagraphElement | null>> = ref(null);

const classes = computed(() => ({
  'asm-text': true,
}));

defineExpose<TextExposedProps>({ paragraph });
</script>