<script>
import { store } from '../store.js';
export default {
  name: 'AppMain',

  data() {
    return {
      store,
      risparmi: {
        Gennaio: '',
        Febbraio: '',
        Marzo: '',
        Aprile: '',
        Maggio: '',
        Giugno: '',
        Luglio: '',
        Agosto: '',
        Settembre: '',
        Ottobre: '',
        Novembre: '',
        Dicembre: '',
      }
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
          mesi: {
            Gennaio: {
              stipendio: this.store.data.user.mesi.Gennaio.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Gennaio.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Gennaio.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Gennaio.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Gennaio.stipendioAltreSpese,
            },
            Febbraio: {
              stipendio: this.store.data.user.mesi.Febbraio.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Febbraio.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Febbraio.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Febbraio.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Febbraio.stipendioAltreSpese,

            },
            Marzo: {
              stipendio: this.store.data.user.mesi.Marzo.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Marzo.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Marzo.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Marzo.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Marzo.stipendioAltreSpese,

            },
            Aprile: {
              stipendio: this.store.data.user.mesi.Aprile.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Aprile.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Aprile.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Aprile.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Aprile.stipendioAltreSpese,

            },
            Maggio: {
              stipendio: this.store.data.user.mesi.Maggio.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Maggio.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Maggio.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Maggio.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Maggio.stipendioAltreSpese,

            },
            Giugno: {
              stipendio: this.store.data.user.mesi.Giugno.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Giugno.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Giugno.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Giugno.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Giugno.stipendioAltreSpese,

            },
            Luglio: {
              stipendio: this.store.data.user.mesi.Luglio.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Luglio.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Luglio.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Luglio.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Luglio.stipendioAltreSpese,

            },
            Agosto: {
              stipendio: this.store.data.user.mesi.Agosto.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Agosto.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Agosto.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Agosto.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Agosto.stipendioAltreSpese,

            },
            Settembre: {
              stipendio: this.store.data.user.mesi.Settembre.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Settembre.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Settembre.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Settembre.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Settembre.stipendioAltreSpese,

            },
            Ottobre: {
              stipendio: this.store.data.user.mesi.Ottobre.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Ottobre.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Ottobre.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Ottobre.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Ottobre.stipendioAltreSpese,

            },
            Novembre: {
              stipendio: this.store.data.user.mesi.Novembre.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Novembre.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Novembre.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Novembre.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Novembre.stipendioAltreSpese,

            },
            Dicembre: {
              stipendio: this.store.data.user.mesi.Dicembre.stipendio,
              stipendioAffitto: this.store.data.user.mesi.Dicembre.stipendioAffitto,
              stipendoSpesaAlimenti: this.store.data.user.mesi.Dicembre.stipendoSpesaAlimenti,
              stipendioBollette: this.store.data.user.mesi.Dicembre.stipendioBollette,
              stipendioAltreSpese: this.store.data.user.mesi.Dicembre.stipendioAltreSpese,

            },
          }

        }
      };

      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      console.log('myData salvato con successo!');
    },

    //Reset
    resetData() {
      const myData = {
        user: {
          nome: 'Danesh',
          cognome: 'Shahpouri',
          eta: 30,
          sesso: 'M',
          mesi: {
            Gennaio: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Febbraio: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Marzo: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Aprile: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Maggio: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Giugno: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Luglio: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Agosto: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Settembre: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Ottobre: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Novembre: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },
            Dicembre: {
              stipendio: 1200,
              stipendioAffitto: 330,
              stipendoSpesaAlimenti: 350,
              stipendioBollette: 30,
              stipendioAltreSpese: 200,

            },

          }
        }
      };

      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      console.log('myData Reset!');
    },

    calcRisparmio() {
      console.log('calcola risparmio')
      this.risparmi.Gennaio = this.store.data.user.mesi.Gennaio.stipendio - this.store.data.user.mesi.Gennaio.stipendioAffitto - this.store.data.user.mesi.Gennaio.stipendoSpesaAlimenti - this.store.data.user.mesi.Gennaio.stipendioBollette - this.store.data.user.mesi.Gennaio.stipendioAltreSpese;
      this.risparmi.Febbraio = this.store.data.user.mesi.Febbraio.stipendio - this.store.data.user.mesi.Febbraio.stipendioAffitto - this.store.data.user.mesi.Febbraio.stipendoSpesaAlimenti - this.store.data.user.mesi.Febbraio.stipendioBollette - this.store.data.user.mesi.Febbraio.stipendioAltreSpese;
      this.risparmi.Marzo = this.store.data.user.mesi.Marzo.stipendio - this.store.data.user.mesi.Marzo.stipendioAffitto - this.store.data.user.mesi.Marzo.stipendoSpesaAlimenti - this.store.data.user.mesi.Marzo.stipendioBollette - this.store.data.user.mesi.Marzo.stipendioAltreSpese;
      this.risparmi.Aprile = this.store.data.user.mesi.Aprile.stipendio - this.store.data.user.mesi.Aprile.stipendioAffitto - this.store.data.user.mesi.Aprile.stipendoSpesaAlimenti - this.store.data.user.mesi.Aprile.stipendioBollette - this.store.data.user.mesi.Aprile.stipendioAltreSpese;
      this.risparmi.Maggio = this.store.data.user.mesi.Maggio.stipendio - this.store.data.user.mesi.Maggio.stipendioAffitto - this.store.data.user.mesi.Maggio.stipendoSpesaAlimenti - this.store.data.user.mesi.Maggio.stipendioBollette - this.store.data.user.mesi.Maggio.stipendioAltreSpese;
      this.risparmi.Giugno = this.store.data.user.mesi.Giugno.stipendio - this.store.data.user.mesi.Giugno.stipendioAffitto - this.store.data.user.mesi.Giugno.stipendoSpesaAlimenti - this.store.data.user.mesi.Giugno.stipendioBollette - this.store.data.user.mesi.Giugno.stipendioAltreSpese;
      this.risparmi.Luglio = this.store.data.user.mesi.Luglio.stipendio - this.store.data.user.mesi.Luglio.stipendioAffitto - this.store.data.user.mesi.Luglio.stipendoSpesaAlimenti - this.store.data.user.mesi.Luglio.stipendioBollette - this.store.data.user.mesi.Luglio.stipendioAltreSpese;
      this.risparmi.Agosto = this.store.data.user.mesi.Agosto.stipendio - this.store.data.user.mesi.Agosto.stipendioAffitto - this.store.data.user.mesi.Agosto.stipendoSpesaAlimenti - this.store.data.user.mesi.Agosto.stipendioBollette - this.store.data.user.mesi.Agosto.stipendioAltreSpese;
      this.risparmi.Settembre = this.store.data.user.mesi.Settembre.stipendio - this.store.data.user.mesi.Settembre.stipendioAffitto - this.store.data.user.mesi.Settembre.stipendoSpesaAlimenti - this.store.data.user.mesi.Settembre.stipendioBollette - this.store.data.user.mesi.Settembre.stipendioAltreSpese;
      this.risparmi.Ottobre = this.store.data.user.mesi.Ottobre.stipendio - this.store.data.user.mesi.Ottobre.stipendioAffitto - this.store.data.user.mesi.Ottobre.stipendoSpesaAlimenti - this.store.data.user.mesi.Ottobre.stipendioBollette - this.store.data.user.mesi.Ottobre.stipendioAltreSpese;
      this.risparmi.Novembre = this.store.data.user.mesi.Novembre.stipendio - this.store.data.user.mesi.Novembre.stipendioAffitto - this.store.data.user.mesi.Novembre.stipendoSpesaAlimenti - this.store.data.user.mesi.Novembre.stipendioBollette - this.store.data.user.mesi.Novembre.stipendioAltreSpese;
      this.risparmi.Dicembre = this.store.data.user.mesi.Dicembre.stipendio - this.store.data.user.mesi.Dicembre.stipendioAffitto - this.store.data.user.mesi.Dicembre.stipendoSpesaAlimenti - this.store.data.user.mesi.Dicembre.stipendioBollette - this.store.data.user.mesi.Dicembre.stipendioAltreSpese;

    }
  },

  created() {
    this.calcRisparmio();
  },

  mounted() {
    let data = new Date;
    console.log(data.getMonth())
  },
}
</script>

<template>
  <div class="_main bg-dark">
    <!-- INFO -->
    <div class="_info-input row">
      <input type="text" class="col-4" v-model="this.store.data.user.nome">
      <input type="text" class="col-4" v-model="this.store.data.user.cognome">
      <input type="text" class="col-2" v-model="this.store.data.user.eta">
      <input type="text" class="col-2" v-model="this.store.data.user.sesso">

    </div>

    <div class="table-responsive _tabella-wrapper">
      <table class="table table-striped table-dark">
        <thead>
          <tr class="table-light">
            <th scope="row"></th>
            <th scope="row">Stipendio</th>
            <th scope="row">Bollette</th>
            <th scope="row">Affitto</th>
            <th scope="row">Spesa</th>
            <th scope="row">Altre Spese</th>
            <th scope="row">Risparmio</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(mese, key) in this.store.data.user.mesi" :key="mese">
            <th>{{ key }}</th>
            <td><input @change="this.calcRisparmio()" class=" _input-table" type="text" v-model="mese.stipendio"></td>
            <td><input @change="this.calcRisparmio()" class=" _input-table" type="text" v-model="mese.stipendioBollette">
            </td>
            <td><input @change="this.calcRisparmio()" class=" _input-table" type="text" v-model="mese.stipendioAffitto">
            </td>
            <td><input @change="this.calcRisparmio()" class=" _input-table" type="text"
                v-model="mese.stipendoSpesaAlimenti"></td>
            <td><input @change="this.calcRisparmio()" class=" _input-table" type="text"
                v-model="mese.stipendioAltreSpese">
            </td>
            <td><input class=" _input-table text-white" type="text" disabled v-model="this.risparmi[key]">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- BOTTON -->
    <div class="">
      <button class="btn btn-primary" @click="salvaMyData()">Save</button>
      <button class="btn btn-primary" @click="resetData()">Reset</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
._main {
  height: 80vh;
  width: 100%;
  overflow-y: auto;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ._info-input {
    --bs-gutter-x: 0rem;
    width: 95%;
    margin: 0.2em auto;
  }

  ._tabella-wrapper {
    width: 95%;

    table {
      thead {

        th {
          border-right: 1px solid rgb(75, 75, 75);
          background-color: rgba(11, 11, 11, 0.377) !important;
          color: white;
          text-transform: uppercase;
        }
      }

      tbody {

        tr {

          td {
            text-align: center;

            input {
              border: none;
              background: none;
              text-align: center;
              width: 60%;
            }
          }
        }
      }
    }
  }

}
</style>
