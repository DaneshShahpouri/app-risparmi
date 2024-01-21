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
      <div class="_left"></div>
      <div class="_right">
        <div class="_top"></div>
        <div class="_bottom"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

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

  ._main-contain {
    width: 100%;
    height: 100%;
    display: flex;

    ._left,
    ._right {
      width: 50%;
      height: 100%;
      border: 1px solid blue;
      display: flex;
      flex-direction: column;
      gap: 1em;
      align-items: center;
      justify-content: center;
    }

    ._right {

      ._top,
      ._bottom {
        width: 100%;
        height: 50%;
        border: 1px solid red;
      }
    }
  }
}


._main.light {
  ._main-inner {}

}
</style>
