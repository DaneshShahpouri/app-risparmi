
<script>
import { store } from '../store.js';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Chart, PointElement } from 'chart.js';

Chart.register(PointElement);
import 'chart.js/auto'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'AppGraficiSpese',

  data() {
    return {
      chartData: {
        labels: ["Spese Totali", "Affitto", "Bollette", "Spesa Alimentari", "Altre spese"],
        datasets: [
          {
            label: "Spese Totali",
            type: 'line',

            backgroundColor: 'rgba(161, 22, 32,.7)',
            borderColor: 'rgba(161, 22, 32, 1)',

            //pointStyle: 'rectRot',
            backgroundShadowColor: 'rgba(161, 22, 32, 1)',

            data: [],
            options: {
              plugins: {
                legend: {
                  display: false
                },
              }
            },
          },
          {
            label: "Affitto",
            type: 'line',

            backgroundColor: 'rgba(209, 209, 50,.7)',
            borderColor: 'rgba(209, 209, 50, 1)',

            //pointStyle: 'rectRot',
            backgroundShadowColor: 'rgba(209, 209, 50, 1)',

            data: [],
          },
          {
            label: "Bollette",
            type: 'line',

            backgroundColor: 'rgba(217, 146, 15,.7)',
            borderColor: 'rgba(217, 146, 15, 1)',

            //pointStyle: 'rectRot',
            backgroundShadowColor: 'rgba(217, 146, 15, 1)',

            data: [],
          },
          {
            label: "Alimentari",
            type: 'line',

            backgroundColor: 'rgba(217, 15, 214,.7)',
            borderColor: 'rgba(217, 15, 214, 1)',

            //pointStyle: 'rectRot',
            backgroundShadowColor: 'rgba(217, 15, 214, 1)',
            data: [],
          },
          {
            label: "Altre spese",
            type: 'line',

            backgroundColor: 'rgba(69, 217, 15,.7)',
            borderColor: 'rgba(69, 217, 15, 1)',

            //pointStyle: 'rectRot',
            backgroundShadowColor: 'rgba(69, 217, 15, 1)',
            data: [],
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

      anno: 23,
      spesePerMese: [],
      affitto: [],
      bollette: [],
      alimentari: [],
      altreSpese: [],
      risparmiPerMese: [],

      //variabili dispaly CHARTJS
      displaySpesePerMese: 1,
      displayAffitto: 2,
      displayBollette: 3,
      displayAlimentari: 4,
      displayAltreSpese: 5,
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

    createGrap(type = this.displayType, borderWidth = this.displayLineWight, array = [this.displaySpesePerMese, this.displayAffitto, this.displayBollette, this.displayAlimentari, this.displayAltreSpese]) {
      //console.log(Object.keys(this.store.data.user[this.store.anno][1]))
      //console.log('createChart')
      //console.log(type)
      //this.chartData.labels = Object.keys(this.store.data.user[this.store.anno])
      this.chartData.labels = this.store.mesi


      //Array temporanei
      this.spesePerMese = []
      this.affitto = []
      this.bollette = []
      this.alimentari = []
      this.altreSpese = []

      for (const mese in this.store.data.user[this.store.anno]) {
        let mesecorrente = this.store.data.user[this.store.anno][mese];


        if (mesecorrente.s.tot != 0 || mesecorrente.sb.tot != 0 || mesecorrente.sc.tot != 0 || mesecorrente.ss.tot != 0 || mesecorrente.sas.tot != 0) {
          let spesePerMeseArray = (parseFloat(mesecorrente.sc.tot) + parseFloat(mesecorrente.sas.tot) + parseFloat(mesecorrente.ss.tot) + parseFloat(mesecorrente.sb.tot))
          this.spesePerMese.push(spesePerMeseArray)

        } else {
          this.spesePerMese.push(0)
        }

        this.affitto.push(mesecorrente.sc.tot)
        this.bollette.push(mesecorrente.sb.tot)
        this.alimentari.push(mesecorrente.ss.tot)
        this.altreSpese.push(mesecorrente.sas.tot)

      }



      if (array) {
        if (array[0] == 1) {
          this.chartData.datasets[0].data = this.spesePerMese
          this.chartData.datasets[0].type = type

          this.chartData.datasets[0].borderWidth = borderWidth + 0.5
        } else {
          this.chartData.datasets[0].data = []
          this.chartData.datasets[0].type = ''
          this.chartData.datasets[0].borderWidth = 0
        }

        if (array[1] == 2) {
          this.chartData.datasets[1].data = this.affitto
          this.chartData.datasets[1].type = type
          this.chartData.datasets[1].borderWidth = borderWidth
        } else {
          this.chartData.datasets[1].data = []
          this.chartData.datasets[1].type = ''
          this.chartData.datasets[1].borderWidth = 0
        }

        if (array[2] == 3) {
          this.chartData.datasets[2].data = this.bollette
          this.chartData.datasets[2].type = type
          this.chartData.datasets[2].borderWidth = borderWidth
        } else {
          this.chartData.datasets[2].data = []
          this.chartData.datasets[2].type = ''
          this.chartData.datasets[2].borderWidth = 0
        }

        if (array[3] == 4) {
          this.chartData.datasets[3].data = this.alimentari
          this.chartData.datasets[3].type = type
          this.chartData.datasets[3].borderWidth = borderWidth
        } else {
          this.chartData.datasets[3].data = []
          this.chartData.datasets[3].type = ''
          this.chartData.datasets[3].borderWidth = 0
        }

        if (array[4] == 5) {
          this.chartData.datasets[4].data = this.altreSpese
          this.chartData.datasets[4].type = type
          this.chartData.datasets[4].borderWidth = borderWidth
        } else {
          this.chartData.datasets[4].data = []
          this.chartData.datasets[4].type = ''
          this.chartData.datasets[4].borderWidth = 0
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
      <button @click="setGraph('risparmi')" class="btn _btn-outline-primary-darkness-hover">
        Income
      </button>
      <!-- CAMBIA TIPO -->
      <button @click="changeType()" class="btn _btn-outline-primary-darkness-hover me-5">
        <i :class="this.displayType == 'line' ? 'fa-solid fa-chart-simple' : 'fa-solid fa-chart-line'"></i>
      </button>
    </div>


    <div class="second">

      <!-- SHOW SPESE MENSILI -->
      <button class="_btn" :class="this.displaySpesePerMese == 'NO' ? '' : ' _btn-spesemensili'"
        @click="() => { this.displaySpesePerMese = this.changeArray(this.displaySpesePerMese, 1); this.changeGraphFunc(); this.createGrap(); }">Totale</button>

      <!-- SHOW SPESE AFFITTO -->
      <button class="_btn" :class="this.displayAffitto == 'NO' ? '' : ' _btn-affitto'"
        @click="() => { this.displayAffitto = changeArray(this.displayAffitto, 2); this.changeGraphFunc(); this.createGrap(); }">Affitto</button>

      <!-- SHOW SPESE BOLLETTE -->
      <button class="_btn" :class="this.displayBollette == 'NO' ? '' : ' _btn-bollette'"
        @click="() => { this.displayBollette = changeArray(this.displayBollette, 3); this.changeGraphFunc(); this.createGrap(); }">
        Bollette</button>

      <!-- SHOW SPESE ALIMENTARI -->
      <button class="_btn" :class="this.displayAlimentari == 'NO' ? '' : ' _btn-alimentari'"
        @click="() => { this.displayAlimentari = changeArray(this.displayAlimentari, 4); this.changeGraphFunc(); this.createGrap(); }">
        Alimenti</button>

      <!-- SHOW SPESE ALTRE SPESE -->
      <button class="_btn" :class="this.displayAltreSpese == 'NO' ? '' : ' _btn-altrespese'"
        @click="() => { this.displayAltreSpese = changeArray(this.displayAltreSpese, 5); this.changeGraphFunc(); this.createGrap(); }">
        Altro</button>
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

  ._btn-affitto {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    box-shadow: 0px 0px 8px lighten(rgb(162, 162, 7), 20%);
    border: 1px solid lighten(rgb(162, 162, 7), 20%);
    color: white;
    background-color: darken(rgb(162, 162, 7), 15%);

    &:hover {
      background-color: rgb(162, 162, 7);
    }
  }

  ._btn-bollette {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    box-shadow: 0px 0px 8px lighten(rgb(149, 98, 3), 20%);
    border: 1px solid lighten(rgb(149, 98, 3), 20%);
    color: white;
    background-color: darken(rgb(149, 98, 3), 15%);

    &:hover {
      background-color: rgb(149, 98, 3);
    }
  }

  ._btn-alimentari {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    box-shadow: 0px 0px 8px lighten(rgb(149, 3, 146), 20%);
    border: 1px solid lighten(rgb(149, 3, 146), 20%);
    color: white;
    background-color: darken(rgb(149, 3, 146), 15%);

    &:hover {
      background-color: rgb(149, 3, 146);
    }
  }

  ._btn-altrespese {
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

@media only screen and (max-width: 720px) {
  .console_legend {
    width: 100%;
    height: 100px;
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
      flex-wrap: wrap;
      margin-top: 2em;
    }
  }
}
</style>
