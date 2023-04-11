<template>
  <form
      :class="classes"
      @submit="onSubmit"
  >
    <Molecules.FormInput ref="login" v-bind="props.molecules.login" />
    <Molecules.FormInput ref="password" v-bind="props.molecules.password" />
    <Atoms.Button :label="'Click'" type="submit" />
  </form>
</template>

<script lang="ts" setup>
import './LoginForm.module.scss'
import {computed, ref, Ref, UnwrapRef} from "vue"
import * as Molecules from '../../Molecules'
import * as Atoms from '../../Atoms'

export type LoginFormProps = {
  /**
   * Molecules options for the login & password input
   */
  molecules?: {
    login?: Molecules.FormInputProps;
    password?: Molecules.FormInputProps;
  };
};

export type LoginFormEmits = {
  (e: 'submit', event: { event: SubmitEvent, login: string, password: string }): void;
};

export type LoginFormExposedProps = {};

const props = withDefaults(defineProps<LoginFormProps>(), {
  molecules: {
    // @ts-ignore
    login: {
      atoms: {
        label: { text: 'Login' },
      },
    },
    password: {
      atoms: {
        label: { text: 'Password' },
      },
    },
  },
});

const emit = defineEmits<LoginFormEmits>();

const classes = computed(() => ({
  'asm-login__form': true,
}));

const login: Ref<UnwrapRef<Molecules.FormInputExposedProps>> = ref(null);
const password: Ref<UnwrapRef<Molecules.FormInputExposedProps>> = ref(null);

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  emit('submit', {
    event: event,
    login: login.value?.input?.input.value,
    password: password.value?.input?.input.value,
  });
};

defineExpose<LoginFormExposedProps>();
</script>