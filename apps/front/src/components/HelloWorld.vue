<script setup lang="ts">
import { ref } from 'vue'
import { Atoms, Organisms, Molecules } from "@asmotym-ts-workspace/ui"

defineProps<{ msg: string }>()

const count = ref(0)

const onSubmit = (detail: any) => console.log(detail);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <br>
    <br>
    <Atoms.Button :label="'count is ' + count" primary @click="count++" />
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div>
    <Organisms.LoginForm @submit="onSubmit" />
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
