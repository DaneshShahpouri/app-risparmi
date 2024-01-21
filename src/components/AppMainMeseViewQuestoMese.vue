<script>
import { store } from '../store.js';
export default {
  name: 'AppMainMeseViewQuestoMese',

  data() {
    return {
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

  props: {
    // msg: String
  },
  methods: {


    setSpesaMaggioreCategoria() {

      for (const key in this.store.data.user[this.store.anno][this.meseIndex]) {
        this.speseGrandi[key] = 0;
        for (const key2 in this.store.data.user[this.store.anno][this.meseIndex][key].mag.pre) {

          const valoreMag = this.store.data.user[this.store.anno][this.meseIndex][key].mag.pre[key2];


          console.log('this.speseGrandi[key] = ' + this.speseGrandi[key] + ' quando il valore di ckeck è ' + valoreMag + ' in ' + key + ' e la chiave è ' + key2)
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
  }
}


._main.light {
  ._main-inner {}

}
</style>
