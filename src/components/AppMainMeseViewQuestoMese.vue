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
        s: { nome: '', valore: 0 },
        sb: { nome: '', valore: 0 },
        sc: { nome: '', valore: 0 },
        ss: { nome: '', valore: 0 },
        sas: { nome: '', valore: 0 },
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

      //console.log('eseguito creazione grafico torta')
    },



    setSpesaMaggioreCategoria() {

      for (const key in this.store.data.user[this.store.anno][this.meseIndex]) {


        for (const key2 in this.store.data.user[this.store.anno][this.meseIndex][key].mag.pre) {

          const valoreMag = this.store.data.user[this.store.anno][this.meseIndex][key].mag.pre[key2];

          //console.log(this.speseGrandi[key].valore)
          //console.log('this.speseGrandi[key] = ' + this.speseGrandi[key] + ' quando il valore di ckeck è ' + valoreMag + ' in ' + key + ' e la chiave è ' + key2)
          if (parseInt(valoreMag) > parseInt(this.speseGrandi[key].valore)) {
            //console.log(valoreMag)
            this.speseGrandi[key] = { nome: this.store.data.user[this.store.anno][this.meseIndex][key].mag.art[key2], valore: valoreMag };
            this.speseGrandi[key].valore = parseFloat(this.speseGrandi[key].valore).toFixed(2)
          }
        }

      }


    }
  },

  created() {
    let date = new Date;
    // console.log('giorno settato: ' + (this.store.data.day))
    // console.log('giorno corrente: ' + date.getDate())
    // console.log('mese corrente: ' + date.getMonth())

    if (this.store.data.day <= date.getDate()) {
      this.mese = this.store.mesi[date.getMonth()]
      this.meseIndex = date.getMonth() + 1
      this.anno = date.getFullYear()
    } else {
      this.mese = this.store.mesi[date.getMonth() - 1]
      this.meseIndex = date.getMonth()

      if (date.getMonth() == 0) {
        this.meseIndex = 12
        this.anno = date.getFullYear() - 1
      } else {
        this.anno = date.getFullYear()

      }
    }

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
      <h5>{{ this.mese + ' ' + this.anno }}</h5>
      <span>Questo Mese</span>
    </div>

    <div class="_main-contain">

      <!-- INFO -->
      <div class="_left" style=" margin-top: 1.5em;">

        <div class="_top-info _mycard">

          <h5>Spese - <span class="_text-thirdary">{{ (this.affitto + this.bollette + this.alimenti +
            this.altro).toFixed(2) }}</span> €</h5>
          <h5>Entrate - <span class="_text-primary">{{ this.entrate.toFixed(2) }}</span> €</h5>

        </div>

        <div class="_info-center _mycard">
          <h5 style="margin-top:1em">Spese Maggiori:</h5>
          <ul>

            <li class="_mycardhover">
              <span class="title-span">Affitto:</span>
              <span class="_text-secondary">{{ this.speseGrandi['sc'].nome + ' ' }} </span>
              <span class="text-euro">
                <span class="_text-primary">{{ (this.speseGrandi['sc'].valore) }}</span>
                <span>€</span>
              </span>
            </li>
            <li class="_mycardhover">
              <span class="title-span">Bollette:</span>
              <span class="_text-secondary">{{ this.speseGrandi['sb'].nome + ' ' }} </span>
              <span class="text-euro">
                <span class="_text-primary">{{ (this.speseGrandi['sb'].valore) }}</span>
                <span>€</span>
              </span>
            </li>
            <li class="_mycardhover">
              <span class="title-span">Alimenti:</span>
              <span class="_text-secondary">{{ this.speseGrandi['ss'].nome + ' ' }} </span>
              <span class="text-euro">
                <span class="_text-primary">{{ (this.speseGrandi['ss'].valore) }}</span>
                <span>€</span>
              </span>
            </li>
            <li class="_mycardhover">
              <span class="title-span">Altro:</span>
              <span class="_text-secondary">{{ this.speseGrandi['sas'].nome + ' ' }} </span>
              <span class="text-euro">
                <span class="_text-primary">{{ (this.speseGrandi['sas'].valore) }}</span>
                <span>€</span>
              </span>
            </li>

          </ul>
        </div>

        <div class="_mycard" style="width: 100%; padding:1em; margin:.5em">
          <div class="_mycardhover" style=" padding:1em; display: flex; justify-content: center;">

            <span class="title-span"
              style="margin-right:.5em; text-transform: uppercase; font-weight: 800;">Risparmio:</span>
            <span class="text-euro">
              <span class="_text-primary">{{ (this.entrate - (this.affitto + this.bollette + this.alimenti +
                this.altro)).toFixed(2) }}</span>
              <span>€</span>
            </span>
          </div>
        </div>

      </div>

      <!-- GRAFICO -->
      <div class="_right">
        <div class="_top">
          <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" v-if="this.store.viewGraph" />
          <div class="_infobox">
            <!-- SI potrebbe mettere l'icona informativa e all'hover mostrare una descrizione del grafico -->
            le tue spese
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
              }}%</b></div>
            </div>

            <div class="_single-legend">
              <div class="_box" style="background-color:rgb(168, 168, 13);"></div>
              <div class="_label">Affitto: <b>{{ ((this.affitto / this.entrate) * 100).toFixed(2) }}%</b></div>
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
    align-items: flex-start;
    flex-direction: column;

    h5 {
      display: flex;
      justify-content: flex-start;
      padding: .4em;
      padding-left: 1em;
      text-transform: uppercase;
      height: 15px;
    }

    span {
      padding-left: 1.3em;
      height: 10px;
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

    ._left {
      ._top-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: calc(100% - 8px);
        margin-left: 8px;
        height: 15%;
        padding-left: .8em;
        border-radius: 8px;
      }

      ._info-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: calc(100% - 8px);
        margin-left: 0px;
        height: 65%;
        padding-left: 0em;
        border-radius: 8px;

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: .5em;
          padding: 0;
          margin: 0;
          padding-top: 1em;
          width: 100%;

          li {
            padding: 0.9em;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            margin: auto;



            .title-span {
              display: inline-block;
              width: 70px;
              border-radius: 5px;
              text-align: left;
              text-transform: uppercase;
              font-weight: 800;
            }

            ._text-secondary {
              width: 30%;

              text-align: center;
            }

            .text-euro {
              width: 70px;
              display: flex;

              text-align: center;
              justify-content: flex-end;

            }
          }
        }
      }
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

          z-index: 2;
        }
      }

      ._bottom {
        height: 35%;
        flex-direction: column;
        justify-content: flex-end;


        .upper-info {
          height: 30%;
          padding: .5em 1em;


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
            width: 120px;
            height: 20px;
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
  ._main-inner {
    ._main-contain {
      ._left {

        ._top-info,
        ._info-center {
          background-color: rgba(248, 248, 248, 0.3);
        }

      }
    }
  }

}
</style>
