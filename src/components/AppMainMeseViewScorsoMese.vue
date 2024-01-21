<script>
import { store } from '../store.js';
export default {
  name: 'AppMainMeseViewScorsoMese',

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
  <div class="_main-inner">
    <div class="header">
      <h5>Scorso Mese</h5>
    </div>
    <div class="_main-contain">

    </div>
  </div>
</template>

<style lang="scss" scoped>
._main-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h5 {
      display: flex;
      justify-content: flex-start;
      padding: .4em;
      padding-left: 1em;
      text-transform: uppercase;
    }
  }
}


._main.light {
  ._main-inner {}

}
</style>
