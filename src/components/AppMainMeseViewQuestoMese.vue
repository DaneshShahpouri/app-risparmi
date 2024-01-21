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
    }
  },
  components: { Doughnut },
  props: {
    // msg: String
  },
  methods: {
    createDoughnut() {

      let entrate = this.store.data.user[this.anno - 2000][this.meseIndex].s.tot;
      let bollette = this.store.data.user[this.anno - 2000][this.meseIndex].sb.tot;
      let affitto = this.store.data.user[this.anno - 2000][this.meseIndex].sc.tot;
      let alimenti = this.store.data.user[this.anno - 2000][this.meseIndex].ss.tot;
      let altro = this.store.data.user[this.anno - 2000][this.meseIndex].sas.tot;


      if ((((entrate - (bollette + affitto + alimenti + altro)) / entrate) * 100) < 0) {
        this.chartData.datasets[0].backgroundColor[0] = 'rgb(203, 24, 60)'
        this.chartData.labels[0] = 'PERDITE'
      }

      // Imposta i dati proporzionali
      this.chartData.datasets[0].data = [

        ((entrate - (bollette + affitto + alimenti + altro)) / entrate) * 100,
        (affitto / entrate) * 100,
        (bollette / entrate) * 100,
        (alimenti / entrate) * 100,
        (altro / entrate) * 100,
      ];
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
          <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
          <div class="_infobox">
            INFO GENERICHE
          </div>
        </div>
        <div class="_bottom"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._main-inner {
  width: 100%;
  height: 100%;
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

      ._top,
      ._bottom {
        width: 100%;


        display: flex;
        justify-content: center;
        align-items: center;
      }

      ._top {
        height: 65%;
        position: relative;

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
        }
      }

      ._bottom {
        height: 35%
      }
    }
  }
}


._main.light {
  ._main-inner {}

}
</style>
