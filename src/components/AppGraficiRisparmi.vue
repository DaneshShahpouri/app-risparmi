
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
              color: 'rgba(11,11,11,0)',
              borderColor: 'rgba(11,11,11,0)',
              tickColor: 'rgba(11,11,11,0)'
            },
            ticks: {
              color: 'grey',
            }
          },
          y: {
            grid: {
              color: 'rgb(40, 40, 40)',
              borderColor: 'rgb(40, 40, 40)',
              tickColor: 'rgb(40, 40, 40)'
            },
            ticks: {
              color: 'grey',
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
  <div class="graph-container" :class="this.store.darkmode ? '' : 'light'">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" v-if="this.store.changeGraph == true" />
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" v-else />

    <div class="console_legend">
      <div class="first">
        <!-- CAMBIA Dodici Mesi-->
        <button @click="setGraph('dodici')" class="btn _btn-outline-primary-darkness-hover">
          <i class="fa-solid fa-y"></i>
        </button>
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
          @click="() => { this.displayRisparmi = changeArray(this.displayRisparmi, 6); this.changeGraphFunc(); this.createGrap(); }">
          <i class="fa-solid fa-coins"></i><span class="span-icon">Risparmi</span></button>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.graph-container {
  #my-chart-id {
    padding: 8px;
    border-radius: 12px;
    background-color: rgba(128, 128, 128, 0.094);
  }
}

.console_legend {
  width: 100%;
  height: 60px;
  //border: 1px solid red;

  margin-top: 1em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;


  padding: 8px;
  border-radius: 12px;
  background-color: rgba(128, 128, 128, 0.094);

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

.graph-container {
  display: flex;
  flex-direction: column;
  height: calc(90vh - 80px);

  align-content: center;
  justify-content: space-between;
  align-items: center;

  #my-chart-id {
    height: 50vw;
    width: 90vw;
  }


}

@media only screen and (max-width: 720px) {
  .console_legend {
    width: 100%;
    height: auto;

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
      flex-direction: column;

    }

    .second {
      width: 50%;
      flex-direction: row !important;
      gap: 2em !important;
    }

    .span-icon {
      display: none;
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
      color: white;
      background-color: darken($primary-light, 5%);
      box-shadow: 0px 0px 8px #05b0d742;
    }

    &:active {
      border: 1px solid lighten($primary-light, 15%);
      border-color: darken($primary-light, 15%) !important;
      color: white;
      background-color: lighten($primary-light, 15%);
    }
  }

  .console_legend {


    ._btn-spesemensili {
      box-shadow: 0px 0px 8px lighten(rgba(118, 3, 11, .3), 20%);
      border: 1px solid lighten(rgb(118, 3, 11), 20%);
      color: rgb(118, 3, 11);
      background-color: transparent;

      &:hover {
        background-color: rgb(118, 3, 11);
        color: white;
      }
    }

    ._btn-affitto {
      box-shadow: 0px 0px 8px lighten(rgba(162, 162, 7, .3), 20%);
      border: 1px solid lighten(rgb(162, 162, 7), 20%);
      color: rgb(162, 162, 7);
      background-color: transparent;

      &:hover {
        background-color: rgb(162, 162, 7);
        color: white;
      }
    }

    ._btn-bollette {
      box-shadow: 0px 0px 8px lighten(rgba(149, 98, 3, .3), 20%);
      border: 1px solid lighten(rgb(149, 98, 3), 20%);
      color: rgb(149, 98, 3);
      background-color: transparent;

      &:hover {
        background-color: rgb(149, 98, 3);
        color: white;
      }
    }

    ._btn-alimentari {
      box-shadow: 0px 0px 8px lighten(rgba(149, 3, 146, .3), 20%);
      border: 1px solid lighten(rgb(149, 3, 146), 20%);
      color: rgb(149, 3, 146);
      background-color: transparent;

      &:hover {
        background-color: rgb(149, 3, 146);
        color: white;
      }
    }

    ._btn-risparmi {
      box-shadow: 0px 0px 8px lighten(rgba(42, 149, 3, .3), 20%);
      border: 1px solid lighten(rgb(42, 149, 3), 20%);
      color: rgb(42, 149, 3);
      background-color: transparent;

      &:hover {
        background-color: rgb(42, 149, 3);
        color: white;
      }
    }
  }

  ._btn {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    background-color: transparent;
    border-color: transparent;
    color: rgb(116, 116, 116);

    &:hover {
      background-color: rgb(237 237 237);
      color: rgb(78 78 78);
    }
  }
}
</style>
