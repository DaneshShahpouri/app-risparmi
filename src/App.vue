<script>
//import axios from 'axios';
import { store } from './store.js';
// import HelloWorld from './components/HelloWorld.vue'
import AppMain from './components/AppMain.vue'

export default {
  data() {
    return {
      store,
    }
  },

  name: 'App',

  components: {
    // HelloWorld
    AppMain,
  },

  methods: {

  },

  created() {

  },

  mounted() {

  },
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
