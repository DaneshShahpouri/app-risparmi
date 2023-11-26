<script>
import { store } from '../store.js';
export default {
  name: 'AppMain',

  data() {
    return {
      store,
    }
  },

  props: {
    // msg: String
  },
  methods: {
    // Funzione per salvare myData in localStorage
    salvaMyData() {
      const myData = {
        user: {
          nome: this.store.data.user.nome,
          cognome: this.store.data.user.cognome,
          eta: this.store.data.user.eta,
          sesso: 'M',
          stipendio: this.store.data.user.stipendio,
          stipendioAffitto: this.store.data.user.stipendioAffitto,
          stipendoSpesaAlimenti: this.store.data.user.stipendoSpesaAlimenti,
          stipendioBollette: this.store.data.user.stipendioBollette,
          stipendioAltreSpese: this.store.data.user.stipendioAltreSpese,
          stipendioRisparmio: this.store.data.user.stipendioRisparmio
        }
      };

      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      console.log('myData salvato con successo!');
    },
    resetData() {
      const myData = {
        user: {
          nome: 'Danesh',
          cognome: 'Shahpouri',
          eta: 30,
          sesso: 'M',
          stipendio: 1200,
          stipendioAffitto: 330,
          stipendoSpesaAlimenti: 350,
          stipendioBollette: 30,
          stipendioAltreSpese: 200,
          stipendioRisparmio: 0
        }
      };

      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      console.log('myData Reset!');
    },
  },

  created() {

  },

  mounted() {

  },
}
</script>

<template>
  <form action="#">
    <input type="text" v-model="this.store.data.user.nome">
    <button @click="salvaMyData()">salva Nome</button>
    <button @click="resetData()">reset</button>
  </form>
</template>

<style lang="scss" scoped></style>
