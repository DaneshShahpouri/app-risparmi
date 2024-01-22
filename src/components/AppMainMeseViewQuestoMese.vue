<script>
import { store } from '../store.js';

import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'AppMainMeseViewQuestoMese',

  data() {
    return {
      chartData: {
        labels: ["RISPARMI", "AFFITTO", "BOLLETTE", "ALIMENTI", "ALTRO"],
        datasets: [
          {
            data: [0], // Imposta a 0 per ora
            backgroundColor: ['rgba(42, 149, 3, .7)', 'rgba(209, 209, 50,.7)', 'rgba(217, 146, 15,.7)', 'rgba(217, 15, 214,.7)', 'rgba(32, 191, 169, .7)'],
            //borderColor: ['rgba(1, 1, 4, 0.8)', 'rgba(42, 149, 3, 1)', 'rgba(209, 209, 50, 1)', 'rgba(217, 146, 15, 1)', 'rgba(217, 15, 214, 1)', 'rgb(32, 191, 169)'],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label.toUpperCase();
                let value = parseFloat(context.parsed.toFixed(2))

                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += value + '%';
                }
                return label;
              }
            }
          },
          hover: {
            mode: 'index',
            intersect: false
          }

        },
      },






      store,
      anno: '',
      mese: '',
      meseIndex: '',

      speseGrandi: {
        s: 0,
        sb: 0,
        sc: 0,
        ss: 0,
        sas: 0,
      },
      entrate: 0,
      bollette: 0,
      affitto: 0,
      alimenti: 0,
      altro: 0,
    }
  },
  components: { Doughnut },
  props: {
    // msg: String
  },

  watch: {
    'store.viewGraph': function () {
      this.createDoughnut()
    },
  },

  methods: {
    createDoughnut() {

      this.entrate = this.store.data.user[this.anno - 2000][this.meseIndex].s.tot;
      this.bollette = this.store.data.user[this.anno - 2000][this.meseIndex].sb.tot;
      this.affitto = this.store.data.user[this.anno - 2000][this.meseIndex].sc.tot;
      this.alimenti = this.store.data.user[this.anno - 2000][this.meseIndex].ss.tot;
      this.altro = this.store.data.user[this.anno - 2000][this.meseIndex].sas.tot;


      if ((((this.entrate - (this.bollette + this.affitto + this.alimenti + this.altro)) / this.entrate) * 100) < 0) {
        this.chartData.datasets[0].backgroundColor[0] = 'rgb(203, 24, 60)'
        this.chartData.labels[0] = 'PERDITE'
      }

      // Imposta i dati proporzionali
      this.chartData.datasets[0].data = [

        ((this.entrate - (this.bollette + this.affitto + this.alimenti + this.altro)) / this.entrate) * 100,
        (this.affitto / this.entrate) * 100,
        (this.bollette / this.entrate) * 100,
        (this.alimenti / this.entrate) * 100,
        (this.altro / this.entrate) * 100,
      ];

      console.log('eseguito creazione grafico torta')
    },



    setSpesaMaggioreCategoria() {

      for (const key in this.store.data.user[this.store.anno][this.meseIndex]) {
        this.speseGrandi[key] = 0;
        for (const key2 in this.store.data.user[this.store.anno][this.meseIndex][key].mag.pre) {

          const valoreMag = this.store.data.user[this.store.anno][this.meseIndex][key].mag.pre[key2];


          //console.log('this.speseGrandi[key] = ' + this.speseGrandi[key] + ' quando il valore di ckeck è ' + valoreMag + ' in ' + key + ' e la chiave è ' + key2)
          if (parseInt(valoreMag) > parseInt(this.speseGrandi[key])) {
            this.speseGrandi[key] = { nome: this.store.data.user[this.store.anno][this.meseIndex][key].mag.art[key2], valore: valoreMag };
          }
        }
      }

    }
  },

  created() {
    let date = new Date;
    this.anno = date.getFullYear()
    this.mese = this.store.mesi[date.getMonth()]
    this.meseIndex = date.getMonth() + 1

    this.setSpesaMaggioreCategoria()
    this.createDoughnut();

  },

  mounted() {
  },
}
</script>

<template>
  <div class="_main-inner">
    <div class="header">
      <h5>Questo Mese</h5>
    </div>
    <div class="_main-contain">
      <div class="_left"></div>
      <div class="_right">
        <div class="_top">
          <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" v-if="this.store.viewGraph" />
          <div class="_infobox">
            INFO GENERICHE
          </div>
        </div>
        <div class="_bottom">
          <div class="upper-info">
            <p>Grafico della tua situazione attuale del mese corrente.</p>
          </div>
          <div class="_downer-info-legend">

            <div class="_single-legend">
              <div class="_box" style="background-color: rgb(34, 105, 9);"></div>
              <div class="_label">Risparmi: <b>{{ (((this.entrate - (this.bollette + this.affitto + this.alimenti +
                this.altro)) / this.entrate) * 100).toFixed(2)
              }} %</b></div>
            </div>

            <div class="_single-legend">
              <div class="_box" style="background-color:rgb(168, 168, 13);"></div>
              <div class="_label">Affitto: <b>{{ ((this.affitto / this.entrate) * 100).toFixed(2) }} %</b></div>
            </div>

            <div class="_single-legend">
              <div class="_box" style="background-color:rgb(155, 104, 9);"></div>
              <div class="_label">Bollette: <b>{{ ((this.bollette / this.entrate) * 100).toFixed(2) }}%</b></div>
            </div>

            <div class="_single-legend">
              <div class="_box" style="background-color:rgb(135, 8, 132);"></div>
              <div class="_label">Alimenti: <b>{{ ((this.alimenti / this.entrate) * 100).toFixed(2) }}%</b></div>
            </div>

            <div class="_single-legend">
              <div class="_box" style="background-color:rgb(9, 149, 130)"></div>
              <div class="_label">Altro: <b>{{ ((this.altro / this.entrate) * 100).toFixed(2) }}%</b></div>
            </div>



          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._main-inner {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 285px);
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h5 {
      display: flex;
      justify-content: flex-start;
      padding: .4em;
      padding-left: 1em;
      text-transform: uppercase;
    }
  }

  ._main-contain {
    width: 100%;
    height: 100%;
    display: flex;

    ._left,
    ._right {
      width: 50%;
      height: 100%;

      display: flex;
      flex-direction: column;
      gap: 1em;
      align-items: center;
      justify-content: center;
    }

    ._right {

      align-items: center;
      justify-content: space-between;
      align-content: center;
      height: calc(100vh - 290px);


      ._top,
      ._bottom {
        width: 100%;


        display: flex;
        justify-content: center;
        align-items: center;
      }

      ._top {
        height: 60%;
        position: relative;


        #my-chart-id {
          position: relative;
          z-index: 10;
        }

        ._infobox {
          width: 100px;
          height: 50px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid;
          z-index: 2;
        }
      }

      ._bottom {
        height: 35%;
        flex-direction: column;
        justify-content: flex-end;


        .upper-info {
          height: 30%;
          padding-top: 2em;


          p {
            text-align: center;
          }
        }

        ._downer-info-legend {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          height: 60%;
          gap: .5em;
          flex-wrap: wrap;


          ._single-legend {
            width: 100px;
            height: 35px;
            display: flex;
            gap: .5em;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: .4em;

            ._box {
              width: 20px;
              height: 10px;
              border-radius: 0px;
              transform: rotate(0deg);
              border: 1px solid;
            }

            ._label {
              font-size: .6em;
            }
          }
        }
      }
    }
  }
}


._main.light {
  ._main-inner {}

}
</style>
