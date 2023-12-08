
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
  <div class="_bott-wrapper d-flex justify-content-center w-100 gap-2">
    <button class="btn btn-outline-danger badge rounded-pill text-danger text-white"
      @click="this.setGraph('spese')">Spese</button>
    <button class="btn btn-outline-success badge rounded-pill text-success text-white"
      @click="this.setGraph('risparmi')">Risparmi</button>
  </div>
  <div class="_main">
    <AppGraficiRisparmi v-show="this.optionGraph == 'risparmi'"></AppGraficiRisparmi>
    <AppGraficiSpese v-show="this.optionGraph == 'spese'"></AppGraficiSpese>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._main {
  height: calc(80vh - .5em);
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background: rgba(80, 80, 80, 0.664);
  //color: white;
  margin-bottom: .5em;
}
</style>
