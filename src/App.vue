<template>
  <div id="app">
    <check-devices></check-devices>
  </div>
</template>

<script>
import CheckDevices from './components/CheckDevices.vue'

export default {
  name: 'App',
  components: {
    CheckDevices
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
