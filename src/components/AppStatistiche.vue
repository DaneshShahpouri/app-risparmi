<script>
import { store } from '../store.js';
import AppStatisticheMeseCorrente from './AppStatisticheMeseCorrente.vue'
import AppStatisticheProgramma from './AppStatisticheProgramma.vue'
import AppStatisticheScorsoMese from './AppStatisticheScorsoMese.vue'
import AppStatisticheObiettivi from './AppStatisticheObiettivi.vue'

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
    AppStatisticheScorsoMese,
    AppStatisticheObiettivi,
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
  <div class="_main" :class="this.store.darkmode ? '' : 'light'">
    <!-- TOP LEFT -->
    <div class="_top-left">
      <AppStatisticheProgramma></AppStatisticheProgramma>
    </div>

    <!-- TOP RIGHT -->
    <div class=" _top-right">
      <AppStatisticheMeseCorrente></AppStatisticheMeseCorrente>
    </div>

    <!-- BOTTOM LEFT -->
    <div class="degub _bottom-left">
      <AppStatisticheScorsoMese></AppStatisticheScorsoMese>
    </div>

    <!-- BOTTOM RIGHT -->
    <div class="_bottom-right">
      <AppStatisticheObiettivi></AppStatisticheObiettivi>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.degub {
  border: 1px solid green;
}

._main {
  height: calc(100vh - 50px);
  padding-top: .5em;
  width: 95%;
  margin: 0 auto;
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


  ._top-left {
    width: 30%;
    height: calc((100vh - 80px) / 12 * 8);
    overflow: auto;
  }

  ._top-right {
    width: 70%;
    height: calc((100vh - 80px) / 12 * 8);
    padding: .5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    flex-wrap: nowrap;
    overflow: auto;

  }

  ._bottom-left {
    width: 50%;
    //PARAGRAFO NON VISIBILE MESE SCORSO
    display: none;
    height: calc((100vh - 80px) / 12 * 4);
    overflow: auto;
  }

  ._bottom-right {
    width: 100%;
    height: calc((100vh - 80px) / 12 * 4);
    overflow: auto;
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
      min-height: 730px;
    }

    ._bottom-right {
      min-height: 1000px;
    }

  }

}

.light {

  ._btn-outline-primary-darkness-hover {
    border: 1px solid darken($primary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    border: 1px solid $primary-light;
    color: $primary-light;
    background-color: transparent;
    box-shadow: 0px 0px 8px #05b0d742;
    text-shadow: 0px 0px 8px white;
    transition: all 1s;

    &:hover {
      border: 1px solid $primary-light;
      color: $primary-light;
      background-color: darken($primary-light, 5%);
      box-shadow: 0px 0px 8px #05b0d742;
    }

    &:active {
      border: 1px solid lighten($primary-light, 15%);
      border-color: darken($primary-light, 15%) !important;
      color: $primary-light;
      background-color: lighten($primary-light, 15%);
    }
  }
}
</style>
