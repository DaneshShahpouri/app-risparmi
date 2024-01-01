<script>
import { store } from '../store.js';
export default {
  name: 'AppStatisticheScorsoMese',


  data() {
    return {
      store,
      meseRiferimentoIndexMesi: '',
      meseRiferimentoIndex: '',
      meseRiferimentoNome: '',
      annoRiferimento: '',
      annoRiferimentoIndex: '',
    }
  },


  props: {
    // msg: String
  },

  methods: {
    ultimeDueCifreQuattroCifre(numero) {
      // Assicurati che il numero sia un intero
      numero = Math.floor(numero);

      // Ottieni le ultime due cifre utilizzando l'operatore modulo
      var ultimeCifre = numero % 100;

      // Se il risultato è inferiore a 10, aggiungi uno zero iniziale
      if (ultimeCifre < 10) {
        ultimeCifre = '0' + ultimeCifre;
      }

      return ultimeCifre;
    },



    save() {
      const myData = this.store.data
      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      //console.log('myData salvato con successo!');
    },
  },

  created() {
    if (this.store.currentMonth == 0) {
      this.meseRiferimentoIndexMesi = 11
      this.meseRiferimentoIndex = 12
      this.annoRiferimento = this.store.currentYear - 1

    } else {
      this.meseRiferimentoIndexMesi = this.store.currentMonth - 1
      this.meseRiferimentoIndex = this.meseRiferimentoIndexMesi + 1
      this.annoRiferimento = this.store.currentYear
    }
    this.meseRiferimentoNome = this.store.mesi[this.meseRiferimentoIndexMesi]

    this.annoRiferimentoIndex = this.ultimeDueCifreQuattroCifre(this.annoRiferimento);



  },

  mounted() {

  },
}
</script>

<template>
  <div class="container_scorsomese" :class="this.store.darkmode ? '' : 'light'">
    <h4>{{ this.meseRiferimentoNome + ' ' + this.annoRiferimento }}</h4>
    <ul>

      <li>
        <span class="_media-text">Stipendio:</span>
        <i class="fa-solid fa-money-bill"></i><span class="_text-primary">
          {{ this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].s.tot.toFixed(2) }}
          <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>

      </li>

      <li><span class="_media-text">Affitto:</span>
        <i class="fa-solid fa-house "></i> <span class="_text-primary">
          {{ this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].sc.tot.toFixed(2) }}
          <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>

      </li>

      <li><span class="_media-text">Bollette:</span>
        <i class="fa-solid fa-newspaper me-2"></i> <span class="_text-primary">
          {{ this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].sb.tot.toFixed(2) }}
          <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>

      </li>

      <li> <span class="_media-text">Alimentari:</span>
        <i class="fa-solid fa-utensils me-2"></i><span class="_text-primary"> {{
          this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].ss.tot.toFixed(2) }}
          <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>

      </li>

      <li><span class="_media-text">Altre Spese:</span><i class="fa-solid fa-martini-glass-citrus me-2"></i> <span
          class="_text-primary">
          {{ this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].sas.tot.toFixed(2) }}
          <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>

      </li>

      <li> <span class="_media-text">Risparmi:</span>
        <i class="fa-solid fa-coins"></i><span class="_text-primary">
          {{ (this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].s.tot -
            (this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].sc.tot +
              this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].sb.tot +
              this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].ss.tot +
              this.store.data.user[this.annoRiferimentoIndex][this.meseRiferimentoIndex].sas.tot)).toFixed(2) }}
          <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.container_scorsomese {
  width: 100%;
  padding: .8em;


}

@media only screen and (max-width: 1154px) {
  .container_scorsomese {
    width: 100%;
  }
}

@media only screen and (max-width: 720px) {
  .container_scorsomese {
    width: 100%;
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
      color: $primary-light;
      background-color: darken($primary-light, 5%);
      box-shadow: 0px 0px 8px #05b0d742;
    }

    &:active {
      border: 1px solid lighten($primary-light, 15%);
      border-color: darken($primary-light, 15%) !important;
      color: $primary-light;
      background-color: lighten($primary-light, 15%);
    }
  }
}
</style>
