<script>
import { store } from '../store.js';
import AppStatisticheMeseCorrente from './AppStatisticheMeseCorrente.vue'
import AppStatisticheProgramma from './AppStatisticheProgramma.vue'

export default {
  name: 'AppStatistiche',

  data() {
    return {
      store,
      clockDiv: true,

      questoMese: '',
      mesePassato: '',
      mesiPassati: [],

      speseAffittoDodiciMesi: [],
      speseBolletteDodiciMesi: [],
      speseAlimentariDodiciMesi: [],
      speseAltreSpeseDodiciMesi: [],
      stipendiDodiciMesi: [],
      risparmiDodiciMesi: [],

      mediaAffitto: 0,
      mediaBollette: 0,
      mediaAlimentari: 0,
      mediaAltreSpese: 0,
      mediaStipendi: 0,
      mediaRisparmi: 0,

      mensilitaCalcolo: 12,
    }
  },

  components: {
    AppStatisticheMeseCorrente,
    AppStatisticheProgramma,
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
    <!-- TOP LEFT -->
    <div class="_top-left">
      <AppStatisticheProgramma></AppStatisticheProgramma>
    </div>

    <!-- TOP RIGHT -->
    <div class=" _top-right">
      <AppStatisticheMeseCorrente></AppStatisticheMeseCorrente>
    </div>

    <!-- BOTTOM LEFT -->
    <div class="degub _bottom-left"></div>

    <!-- BOTTOM RIGHT -->
    <div class="degub _bottom-right"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

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
    padding: .5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    flex-wrap: nowrap;

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



// ANIMATION
@keyframes uparrow {
  0% {
    top: 50%;
    opacity: .8;
  }



  100% {
    top: 40%;
    opacity: 1;
  }

}

// MEDIAQUERY
@media only screen and (max-width: 720px) {
  ._main {


    ._top-right,
    ._bottom-left,
    ._bottom-right,
    ._top-left {
      width: 100%;
      height: 100%;
      order: 2;
      margin-bottom: 5em;
      padding-bottom: 2em;
      border-bottom: 1px solid $primary;
    }

    ._top-right {
      order: 1;
      min-height: 700px;
    }

  }

}
</style>
