
<script>
import { store } from '../store.js';
import AppGraficiSpese from './AppGraficiSpese.vue'
import AppGraficiRisparmi from './AppGraficiRisparmi.vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'AppGrafici',

  data() {
    return {

      store,
      spesePerMese: [],
      risparmiPerMese: [],
      optionGraph: 'spese',
    }
  },

  components: {
    AppGraficiSpese,
    AppGraficiRisparmi,
  },

  props: {
    // msg: String
  },

  methods: {
    setGraph(parametro) {
      this.optionGraph = parametro;
    },

  },

  created() {

  },

  mounted() {

  },
}
</script>

<template>
  <div class="_main">

    <div class="_bott-wrapper d-flex justify-content-center w-100 gap-2">
      <button class="btn btn-outline-danger badge rounded-pill text-danger text-white"
        @click="this.setGraph('spese')">Spese</button>
      <button class="btn btn-outline-success badge rounded-pill text-success text-white"
        @click="this.setGraph('risparmi')">Risparmi</button>
    </div>

    <div class="_graph-container">
      <AppGraficiRisparmi v-if="this.optionGraph == 'risparmi'"></AppGraficiRisparmi>
      <AppGraficiSpese v-if="this.optionGraph == 'spese'"></AppGraficiSpese>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._main {
  height: 80vh;
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;



  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ._graph-container {
    height: 90%;
    width: 90%;
  }
}
</style>
