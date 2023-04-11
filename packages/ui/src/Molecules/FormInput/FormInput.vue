<template>
  <div :class="classes">
    <Atoms.Text ref="label" v-bind="props.atoms.label" />
    <Atoms.Input ref="input" v-bind="props.atoms.input" />
  </div>
</template>

<script lang="ts" setup>
import './FormInput.module.scss'
import {computed, ref, Ref, UnwrapRef} from 'vue';
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

export type FormInputExposedProps = {
  label: Ref<UnwrapRef<Atoms.TextExposedProps | null>>;
  input: Ref<UnwrapRef<Atoms.InputExposedProps | null>>;
};

const props = withDefaults(defineProps<FormInputProps>(), {});

const emit = defineEmits<FormInputEmits>();

const classes = computed(() => ({
  'asm-form__input': true,
}));

const label: Ref<UnwrapRef<Atoms.TextExposedProps | null>> = ref(null);
const input: Ref<UnwrapRef<Atoms.InputExposedProps | null>> = ref(null);

defineExpose<FormInputExposedProps>({ label, input });
</script>