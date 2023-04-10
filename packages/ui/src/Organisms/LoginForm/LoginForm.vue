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
import {computed, onMounted, ref} from "vue"
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
  (name: 'submit', event: SubmitEvent): void;
};

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

const login = ref<Molecules.FormInput>(null);
const password = ref<Molecules.FormInput>(null);

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  console.log({
    login: login?.value,
    password: password?.value,
  });
  emit('submit', event);
};

onMounted(() => {
  console.log({
    login,
    password
  })
})
</script>