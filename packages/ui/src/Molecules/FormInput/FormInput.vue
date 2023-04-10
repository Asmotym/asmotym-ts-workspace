<template>
  <div :class="classes">
    <Atoms.Text v-bind="props.atoms.label" />
    <Atoms.Input v-bind="props.atoms.input" />
  </div>
</template>

<script lang="ts" setup>
import './FormInput.module.scss'
import {computed, ref} from "vue";
import * as Atoms from '../../Atoms'

export type FormInputProps = {
  /**
   * Atoms properties
   */
  atoms: {
    label: Atoms.TextProps,
    input: Atoms.InputProps,
  };
};

export type FormInputEmits = {};

const props = withDefaults(defineProps<FormInputProps>(), {});

const emit = defineEmits<FormInputEmits>();

const label = ref<Atoms.Text>(null);
const input = ref<Atoms.Input>(null);

defineExpose({
  label,
  input
})

const classes = computed(() => ({
  'asm-form__input': true,
}));
</script>