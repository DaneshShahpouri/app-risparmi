
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
        labels: [],


        datasets: [{ label: 'Risparmi per Mese', data: [] }]
      },
      options: {
        indexAxis: 'x',
        layout: {
          padding: 20
        }
      },
      chartOptions: {
        barThickness: 16,
        responsive: true,
        borderColor: 'rgb(25, 135, 84)',
        borderWidth: 1,
        backgroundColor: 'rgba(25, 135, 84,0.2)',
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
      spesePerMese: [],
      risparmiPerMese: [],
      optionGraph: 'spese',

    }
  },

  components: { Bar },

  props: {
    // msg: String
  },
  methods: {


    createGrap() {
      //console.log(Object.keys(this.store.data.user.mesi))
      // Prints "name Jean-Luc Picard" followed by "rank Captain"
      this.chartData.labels = Object.keys(this.store.data.user.mesi)
      //console.log('this.chartData.datasets[0].data')
      //console.log(this.chartData.datasets[0].data)

      // for (let i = 0; i < this.chartData.labels.length; i++) {
      //   console.log(i)
      // }

      this.spesePerMese = []
      for (const mese in this.store.data.user.mesi) {
        let mesecorrente = this.store.data.user.mesi[mese];


        if (mesecorrente.stipendio != 0 || mesecorrente.stipendioAffitto != 0 || mesecorrente.stipendioAltreSpese != 0 || mesecorrente.stipendoSpesaAlimenti != 0 || mesecorrente.stipendioBollette != 0) {
          let spesePerMeseArray = parseFloat(mesecorrente.stipendio) - (parseFloat(mesecorrente.stipendioAffitto) + parseFloat(mesecorrente.stipendioAltreSpese) + parseFloat(mesecorrente.stipendoSpesaAlimenti) + parseFloat(mesecorrente.stipendioBollette))
          this.spesePerMese.push(spesePerMeseArray)
        } else {
          this.spesePerMese.push(0)
        }
      }
      this.chartData.datasets[0].data = this.spesePerMese

      //console.log(this.chartData.datasets[0].data)
    }
  },

  created() {
    this.createGrap()
  },

  mounted() {

  },
}
</script>

<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;
</style>
