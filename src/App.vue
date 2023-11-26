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

    // console.log('localStorage:')
    // console.log(localStorage)
    // console.log('this.store.data.user')
    // console.log(this.store.data.user)
    // //this.salvaMyData()

  },

  mounted() {

  },
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="_app">
    <h1 class="text-center mb-4"> <strong>Save Money</strong></h1>
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss" scoped>
._app {
  background-color: rgb(11, 11, 11);
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  margin: 0
}
</style>
