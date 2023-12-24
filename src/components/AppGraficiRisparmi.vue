
<script>
import { store } from '../store.js';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'AppGraficiRisparmi',

  data() {
    return {
      chartData: {
        labels: ["risparmi"],
        datasets: [
          {
            label: "risparmi",
            type: 'line',

            backgroundColor: 'rgba(42, 149, 3, .7)',
            borderColor: 'rgba(42, 149, 3, 1)',

            //pointStyle: 'rectRot',
            backgroundShadowColor: 'rgba(42, 149, 3, 1)',

            data: [20, 200],
            options: {
              plugins: {
                legend: {
                  display: false
                },
              }
            },
          },
        ],


      },
      options: {
        spanGaps: true,
        indexAxis: 'x',
        layout: {
          padding: 10,
        },


      },
      chartOptions: {
        plugins: {
          legend: {
            display: false
          },
        },

        scales: {
          x: {
            grid: {
              color: 'rgb(11,11,11)',
              borderColor: 'rgb(11,11,11)',
              tickColor: 'rgb(11,11,11)'
            },
            ticks: {
              color: 'white',
            }
          },
          y: {
            grid: {
              color: 'rgb(40, 40, 40)',
              borderColor: 'rgb(40, 40, 40)',
              tickColor: 'rgb(40, 40, 40)'
            },
            ticks: {
              color: 'white',
            }
          },
        }

      },

      store,

      risparmi: [],


      //variabili dispaly CHARTJS

      displayRisparmi: 1,
      displayType: 'line',
      displayLineWight: 0.5,

      optionGraph: 'spese',

    }
  },

  components: { Bar },

  props: {
    // msg: String
  },

  watch: {
    'store.anno': function () {

      this.changeGraphFunc();
      this.createGrap();
    }
  },

  methods: {

    createGrap(type = this.displayType, borderWidth = this.displayLineWight, array = [this.displayRisparmi]) {

      this.chartData.labels = this.store.mesi


      //Array temporanei
      this.risparmi = []


      for (const mese in this.store.data.user[this.store.anno]) {
        let mesecorrente = this.store.data.user[this.store.anno][mese];


        if (mesecorrente.s.tot != 0 || mesecorrente.sb.tot != 0 || mesecorrente.sc.tot != 0 || mesecorrente.ss.tot != 0 || mesecorrente.sas.tot != 0) {
          let risparmiPerMese = parseFloat(mesecorrente.s.tot) - (parseFloat(mesecorrente.sc.tot) + parseFloat(mesecorrente.sas.tot) + parseFloat(mesecorrente.ss.tot) + parseFloat(mesecorrente.sb.tot))
          this.risparmi.push(risparmiPerMese)

        } else {
          this.risparmi.push(0)
        }

      }


      //console.log('array[0]')
      //console.log(array[0])
      if (array) {
        if (array[0] == 1) {
          this.chartData.datasets[0].data = this.risparmi
          this.chartData.datasets[0].type = type
          this.chartData.datasets[0].borderWidth = borderWidth + 0.5
        } else {
          this.chartData.datasets[0].data = []
          this.chartData.datasets[0].type = ''
          this.chartData.datasets[0].borderWidth = 0
        }
      }

    },

    changeGraphFunc() {

      if (this.store.changeGraph) {
        this.store.changeGraph = false
      } else {
        this.store.changeGraph = true
      }
    },


    changeType() {
      if (this.displayType == 'line') {
        this.displayType = 'bar';
        this.displayLineWight = 1;
      } else {
        this.displayType = 'line';
        this.displayLineWight = 0.5;
      }

      this.changeGraphFunc()
      this.createGrap()

    },

    changeArray(arrayEl, value) {
      if (arrayEl == value) {
        arrayEl = 'NO'
      } else {
        arrayEl = value
      }

      return arrayEl
    },

    setGraph(parametro) {
      this.store.optionGraph = parametro;
    },

  },
  created() {
    this.createGrap()

  },

  mounted() {

  },
}
</script>

<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" v-if="this.store.changeGraph == true" />
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" v-else />

  <div class="console_legend">
    <div class="first">
      <!-- CAMBIA TIPO -->
      <button @click="setGraph('spese')" class="btn _btn-outline-primary-darkness-hover">
        <i class="fa-solid fa-arrow-trend-down"></i>
      </button>
      <!-- CAMBIA TIPO -->
      <button @click="changeType()" class="btn _btn-outline-primary-darkness-hover">
        <i :class="this.displayType == 'line' ? 'fa-solid fa-chart-simple' : 'fa-solid fa-chart-line'"></i>
      </button>
    </div>

    <div class="second">

      <!-- SHOW SPESE ALTRE SPESE -->
      <button class="_btn" :class="this.displayRisparmi == 'NO' ? '' : ' _btn-risparmi'"
        @click="() => { this.displayRisparmi = changeArray(this.displayRisparmi, 1); this.changeGraphFunc(); this.createGrap(); }">Risparmi</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.console_legend {
  width: 100%;
  height: 40px;
  //border: 1px solid red;

  margin-top: 1em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  .first,
  .second {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  ._btn {
    font-size: .8em;
  }

  ._btn-spesemensili {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    box-shadow: 0px 0px 8px lighten(rgb(118, 3, 11), 20%);
    border: 1px solid lighten(rgb(118, 3, 11), 20%);
    color: white;
    background-color: darken(rgb(118, 3, 11), 15%);

    &:hover {
      background-color: rgb(118, 3, 11);
    }
  }


  ._btn-risparmi {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    box-shadow: 0px 0px 8px lighten(rgb(42, 149, 3), 20%);
    border: 1px solid lighten(rgb(42, 149, 3), 20%);
    color: white;
    background-color: darken(rgb(42, 149, 3), 15%);

    &:hover {
      background-color: rgb(42, 149, 3);
    }
  }
}
</style>
