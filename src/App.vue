<script>
//import axios from 'axios';
import { store } from './store.js';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      store,
    }
  },

  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<style lang="scss" scoped></style>
