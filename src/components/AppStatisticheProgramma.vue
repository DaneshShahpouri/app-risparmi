<script>
import { store } from '../store.js';
export default {
  name: 'AppStatisticheProgramma',


  data() {
    return {
      store,
    }
  },


  props: {
    // msg: String
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
  <div class="container_programma"></div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.container_programma {
  width: 100%;
}

@media only screen and (max-width: 1154px) {
  .container_programma {
    width: 100%;
  }
}

@media only screen and (max-width: 720px) {
  .container_programma {
    width: 100%;
  }
}
</style>
