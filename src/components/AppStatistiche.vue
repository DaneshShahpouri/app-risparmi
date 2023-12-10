<script>
import { store } from '../store.js';
export default {
  name: 'AppStatistiche',

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
  <div class="_main">
    <div class="degub _top-left"></div>

    <div class="degub _top-right">
      <div class="degub _top-right-top"></div>
      <div class="degub _top-right-bottom"></div>
    </div>

    <div class="degub _bottom-left"></div>
    <div class="degub _bottom-right"></div>
  </div>
</template>

<style lang="scss" scoped>
.degub {
  border: 1px solid green;
}

._main {
  height: calc(100vh - 131px);
  width: 95%;
  margin: 0 auto;
  padding-top: 1em;
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


  ._top-left {
    width: 30%;
    height: calc((100vh - 150px) / 12 * 8);
  }

  ._top-right {
    width: 70%;
    height: calc((100vh - 150px) / 12 * 8);
  }

  ._bottom-left {
    width: 50%;
    height: calc((100vh - 150px) / 12 * 4);
  }

  ._bottom-right {
    width: 50%;
    height: calc((100vh - 150px) / 12 * 4);
  }


}

@media only screen and (max-width: 720px) {
  ._main {


    ._top-right,
    ._bottom-left,
    ._bottom-right,
    ._top-left {
      width: 100%;
      height: 100%;
    }





  }

}
</style>
