
<script>
import { store } from '../store.js';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Chart, PointElement } from 'chart.js';

Chart.register(PointElement);
import 'chart.js/auto'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'AppGraficiDodiciMesi',

  data() {
    return {
      chartData: {
        labels: ["Spese Totali", "Affitto", "Bollette", "Spesa Alimentari", "Altre spese", "Risparmi"],
        datasets: [
          {
            label: "Spese Totali",
            type: 'line',

            backgroundColor: 'rgba(161, 22, 32,.7)',
            borderColor: 'rgba(161, 22, 32, 1)',
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

            backgroundColor: 'rgba(32, 191, 169, .7)',
            borderColor: 'rgb(32, 191, 169)',

            backgroundShadowColor: 'rgb(32, 191, 169)',
            data: [],
          },
          {
            label: "Risparmi",
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

      spesePerMese: [],
      affitto: [],
      bollette: [],
      alimentari: [],
      altreSpese: [],
      risparmiPerMese: [],
      risparmi: [],

      //variabili dispaly CHARTJS
      displaySpesePerMese: 1,
      displayAffitto: 2,
      displayBollette: 3,
      displayAlimentari: 4,
      displayAltreSpese: 5,
      displayRisparmi: 6,
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

    createGrap(type = this.displayType, borderWidth = this.displayLineWight, array = [this.displaySpesePerMese, this.displayAffitto, this.displayBollette, this.displayAlimentari, this.displayAltreSpese, this.displayRisparmi]) {
      let mesiindex = this.store.currentMonth
      //Array temporanei
      this.spesePerMese = []
      this.affitto = []
      this.bollette = []
      this.alimentari = []
      this.altreSpese = []
      this.risparmi = []

      let index = this.store.currentMonth + 1
      let anno = this.store.currentYear.toString().substring(2, 4)
      let labels = []


      for (let i = 12; i > 0; i--) {
        labels.push(this.store.mesi[mesiindex] + ' - 20' + anno)

        let mesecorrente = this.store.data.user[anno][index];

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
        this.risparmi.push(mesecorrente.s.tot - (mesecorrente.sc.tot + mesecorrente.sb.tot + mesecorrente.ss.tot + mesecorrente.sas.tot))


        if (index == 1) {
          index = 12
          anno--

        } else {
          index--
        }


        if (mesiindex == 0) {
          mesiindex = 11
        } else {
          mesiindex--
        }

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

        if (array[5] == 6) {
          this.chartData.datasets[5].data = this.risparmi
          this.chartData.datasets[5].type = type
          this.chartData.datasets[5].borderWidth = borderWidth
        } else {
          this.chartData.datasets[5].data = []
          this.chartData.datasets[5].type = ''
          this.chartData.datasets[5].borderWidth = 0
        }
        this.chartData.labels = labels
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
  <div class="graph-container " :class="this.store.darkmode ? '' : 'light'">
    <Bar class="_mycard" id="my-chart-id" :options="chartOptions" :data="chartData"
      v-if="this.store.changeGraph == true" />
    <Bar class="_mycard" id="my-chart-id" :options="chartOptions" :data="chartData" v-else />

    <div class="console_legend _mycard">

      <div class="first">

        <!-- CAMBIA Dodici Mesi-->
        <button @click="setGraph('dodici')" class="btn _btn-outline-primary-darkness-hover">
          <i class="fa-solid fa-y"></i>
        </button>
        <!-- CAMBIA TIPO -->
        <button @click="setGraph('risparmi')" class="btn _btn-outline-primary-darkness-hover">
          <i class="fa-solid fa-arrow-trend-up"></i>
        </button>
        <!-- CAMBIA TIPO -->
        <button @click="changeType()" class="btn _btn-outline-primary-darkness-hover ">
          <i :class="this.displayType == 'line' ? 'fa-solid fa-chart-simple' : 'fa-solid fa-chart-line'"></i>
        </button>
      </div>


      <div class="second">

        <!-- SHOW SPESE MENSILI -->
        <button class="_btn" :class="this.displaySpesePerMese == 'NO' ? '' : ' _btn-spesemensili'"
          @click="() => { this.displaySpesePerMese = this.changeArray(this.displaySpesePerMese, 1); this.changeGraphFunc(); this.createGrap(); }"><i
            class="fa-solid fa-money-bill-wave"></i> <span class="span-icon">Totale</span> </button>

        <!-- SHOW SPESE AFFITTO -->
        <button class="_btn" :class="this.displayAffitto == 'NO' ? '' : ' _btn-affitto'"
          @click="() => { this.displayAffitto = changeArray(this.displayAffitto, 2); this.changeGraphFunc(); this.createGrap(); }">
          <i class="fa-solid fa-house "></i><span class="span-icon">Affitto</span> </button>

        <!-- SHOW SPESE BOLLETTE -->
        <button class="_btn" :class="this.displayBollette == 'NO' ? '' : ' _btn-bollette'"
          @click="() => { this.displayBollette = changeArray(this.displayBollette, 3); this.changeGraphFunc(); this.createGrap(); }">
          <i class="fa-solid fa-newspaper"></i><span class="span-icon">Bollette</span> </button>

        <!-- SHOW SPESE ALIMENTARI -->
        <button class="_btn" :class="this.displayAlimentari == 'NO' ? '' : ' _btn-alimentari'"
          @click="() => { this.displayAlimentari = changeArray(this.displayAlimentari, 4); this.changeGraphFunc(); this.createGrap(); }">
          <i class="fa-solid fa-utensils"></i><span class="span-icon">Alimenti</span> </button>

        <!-- SHOW SPESE ALTRE SPESE -->
        <button class="_btn" :class="this.displayAltreSpese == 'NO' ? '' : ' _btn-altrespese'"
          @click="() => { this.displayAltreSpese = changeArray(this.displayAltreSpese, 5); this.changeGraphFunc(); this.createGrap(); }">
          <i class="fa-solid fa-martini-glass-citrus"></i><span class="span-icon">Altro</span> </button>

        <!-- SHOW SPESE ALTRE SPESE -->
        <button class="_btn" :class="this.displayRisparmi == 'NO' ? '' : ' _btn-risparmi'"
          @click="() => { this.displayRisparmi = changeArray(this.displayRisparmi, 6); this.changeGraphFunc(); this.createGrap(); }">
          <i class="fa-solid fa-coins"></i><span class="span-icon">Risparmi</span> </button>
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
  }
}

.console_legend {
  width: 100%;
  height: 60px;
  margin-top: 2em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;


  padding: 8px;
  border-radius: 12px;


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
    box-shadow: 0px 0px 8px lighten(rgb(32, 191, 169), 20%);
    border: 1px solid lighten(rgb(32, 191, 169), 20%);
    color: white;
    background-color: darken(rgb(32, 191, 169), 15%);

    &:hover {
      background-color: rgb(13, 168, 147) !important;
    }
  }

  ._btn-risparmi {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    box-shadow: 0px 0px 8px lighten(rgb(42, 149, 3), 20%);
    border: 1px solid lighten(rgb(42, 149, 3), 20%);
    background-color: darken(rgb(42, 149, 3), 15%);
    color: white;

    &:hover {
      color: white !important;
      background-color: rgb(42, 149, 3) !important;
    }
  }
}

.graph-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 105px);
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

    ._btn-altrespese {
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
