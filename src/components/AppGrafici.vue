
<script>
import { store } from '../store.js';
import AppGraficiSpese from './AppGraficiSpese.vue'
import AppGraficiRisparmi from './AppGraficiRisparmi.vue'
import AppGraficiDodiciMesi from './AppGraficiDodiciMesi.vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'AppGrafici',

  data() {
    return {

      store,
      spesePerMese: [],
      risparmiPerMese: [],

    }
  },

  components: {
    AppGraficiSpese,
    AppGraficiRisparmi,
    AppGraficiDodiciMesi,
  },

  props: {
    // msg: String
  },

  methods: {

  },

  created() {

  },

  mounted() {
    this.store.optionGraph = 'dodici'
  },
}
</script>

<template>
  <div class="_main">

    <div class="_graph-container">
      <AppGraficiDodiciMesi v-if="this.store.optionGraph == 'dodici'"></AppGraficiDodiciMesi>
      <AppGraficiRisparmi v-if="this.store.optionGraph == 'risparmi'"></AppGraficiRisparmi>
      <AppGraficiSpese v-if="this.store.optionGraph == 'spese'"></AppGraficiSpese>
    </div>


  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._main {
  height: calc(100vh - 50px);
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;

  padding-top: 3em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ._graph-container {
    height: 100%;
    width: 100%;

  }
}
</style>
