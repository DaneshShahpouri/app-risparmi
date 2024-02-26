<script>
import { store } from '../store.js';
export default {
  name: 'AppMainMeseViewRisparmio',

  data() {
    return {
      store,

      totaleRisparmiAspettativa: 0,

    }
  },

  props: {
    mediaAlimenti: Number,
    mediaAffitto: Number,
    mediaBollette: Number,
    mediaAltreSpese: Number,
  },
  methods: {
    getTotaleAspettative() {
      let totale = 0;
      for (let chiave in this.store.data.asp) {
        let valore = parseFloat(this.store.data.asp[chiave]);
        totale += valore
      }
      this.totaleRisparmiAspettativa = totale;

    },
    salva(key) {
      //KEY è un parametro che mi passo da  getTotaleAspettative(key) e corrisponde alla key delle aspettative (asp)

      //ciclo su oggett per trovare 'sas' 'ss' etc
      for (const tipodispesa in this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1]) {

        //Escludo lo stipendio
        if (tipodispesa != 's') {

          //Creo due variabili per associarle al totale delle spese e alla voce dell'oggetto aspettativa
          let totalePerTipologia = this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].tot
          let spesaprogrammata = ''
          switch (tipodispesa) {
            case 'sb':
              spesaprogrammata = this.store.data.asp.bo
              break;
            case 'sc':
              spesaprogrammata = this.store.data.asp.af
              break;
            case 'ss':
              spesaprogrammata = this.store.data.asp.al
              break;
            case 'sas':
              spesaprogrammata = this.store.data.asp.as
              break;
          }

          //Aggiungi o rimuovi voci solo per il campo destinatario
          if (spesaprogrammata == this.store.data.asp[key]) {


            if (this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].mag.art.includes('ASPETTATIVA')) {
              var indiceChk = this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].mag.art.indexOf('ASPETTATIVA');
              let prezzoAspettativaDifferenza = this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].mag.pre[indiceChk]
              totalePerTipologia = totalePerTipologia - prezzoAspettativaDifferenza
            }

            if (spesaprogrammata > totalePerTipologia || spesaprogrammata <= totalePerTipologia) {


              var arrayStringhe = this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].mag.art;
              var arrayNumeri = this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].mag.pre;

              // Cerca l'indice dell'elemento 'ASPETTATIVE' nell'array delle stringhe
              var indice = arrayStringhe.indexOf('ASPETTATIVA');

              // Se l'elemento è presente nell'array delle stringhe, rimuovilo da entrambi gli array
              if (indice !== -1) {
                arrayStringhe.splice(indice, 1); // Rimuovi dall'array delle stringhe
                arrayNumeri.splice(indice, 1); // Rimuovi anche dall'array dei numeri
              }
            }
            if (spesaprogrammata > totalePerTipologia) {
              //Se aggiungi


              let differenza = spesaprogrammata - totalePerTipologia;
              this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].mag.art.unshift('ASPETTATIVA')
              this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1][tipodispesa].mag.pre.unshift(differenza)
            }
            //console.log(this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1])
          }
        }
        //calcolo per aggiungere/togliere voci

        this.store.AppMainMeseViewRisparmioSalva = true;
        setTimeout(() => {
          this.store.AppMainMeseViewRisparmioSalva = false
        }, 200);
      }
    },

    isInteger(value) {
      return Number.isInteger(value);
    },

    getDecimalPart(value) {
      const decimalPart = value.toString().split('.')[1];

      if (decimalPart) {
        if (decimalPart.slice(0, 2).length == 1) {
          return '0'
        } else {
          return ''
        }
      } else if (value.toString().endsWith('.')) {
        return '00'
      } else {
        return '.00'
      }

    },

    filterInput(key, event) {
      // Rimuove tutti i caratteri non numerici tranne il punto
      this.store.data.asp[key] = event.target.value.replace(/[^0-9.]/g, '').replace(/^0+(?=\d)/, '');
      if (this.store.data.asp[key] == '' || parseFloat(this.store.data.asp[key]) < 0) {
        this.store.data.asp[key] = 0
      }
    },

    focusOnInput(key) {

      let key2 = 0
      switch (key) {
        case 'af':
          key2 = 0
          break;
        case 'bo':
          key2 = 1
          break;
        case 'al':
          key2 = 2
          break;
        case 'as':
          key2 = 3
          break;
        default:
        // Codice da eseguire se variabile non corrisponde a nessun caso
      }
      let array = document.querySelectorAll('.input-num')
      array[key2].focus()
    },


    setCalcRisp() {
      this.store.calcRisparmio = true
      setTimeout(() => {
        this.store.calcRisparmio = false
      }, 200);
    }
  },

  created() {

  },

  mounted() {
    this.getTotaleAspettative();
    //console.log(this.store.data.user[this.store.currentYear - 2000][this.store.currentMonth + 1])
  },
}
</script>

<template>
  <div class="_main-inner">
    <div class="header">
      <h5>Risparmio</h5>
    </div>
    <div class="_main-contain">

      <div class="_left">
        <div class="_left-scroll">
          <div class="_left-title">
            <h6 class="_text-primary">Impostazioni di Risparmio</h6>
          </div>
          <ul>
            <!-- Singola Card Aspettativa -->
            <li v-for="(val, key) in    this.store.data.asp   " :key="key">
              <!-- LEFT -->
              <div class="_left-li">

                <div class="title-card">{{ key == 'af' ? 'Affitto' : (key == 'bo' ? 'Bollette' : (key == 'as' ? 'Altro' :
                  'Alimenti')) }}</div>
                <div>
                  <input class="input-num" type="text" v-model="this.store.data.asp[key]"
                    :style="{ width: (store.data.asp[key].toString().length * 9) + 5 + 'px' }"
                    @input="filterInput(key, $event), getTotaleAspettative()" @change="salva(key), setCalcRisp()">
                  <span @click="focusOnInput(key)" v-if="!isInteger(store.data.asp[key])">{{
                    getDecimalPart(store.data.asp[key]) }}€</span>
                  <span @click="focusOnInput(key)" v-else>.00€</span>
                </div>

              </div>
              <!-- RIGHT -->
              <div class="_right-li">
                <div class="title-card _text-thirdary">MEDIA</div>
                <div>
                  <span class="_text-thirdary">
                    {{ key == 'af' ? this.mediaAffitto.toFixed(2) : (key == 'bo' ? this.mediaBollette.toFixed(2) : (key ==
                      'as' ?
                      this.mediaAltreSpese.toFixed(2) :
                      this.mediaAlimenti.toFixed(2))) }}
                  </span>
                  <span>€</span>
                </div>

              </div>

            </li>

            <!-- TOTALE -->
            <li class="totale-aspettative">
              <div class="_left-li">

                <div class="title-card">Totale</div>
                <div>{{ this.totaleRisparmiAspettativa.toFixed(2) }}€</div>

              </div>
            </li>
          </ul>
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
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100vh - 235px);
  position: relative;


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
    position: relative;
    z-index: 100;
    display: flex;
    height: 100%;

    ._left {
      width: 50%;
      height: calc(100vh - 285px);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      align-content: center;

      ._left-scroll {
        width: calc(100% - 1em);
        height: calc(100vh - 310px);
        border-radius: 10px;
        display: flex;
        overflow: auto;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: .5em;


        ._left-title {
          text-align: left;
          width: 100%;
          padding: 0em .5em;
          padding-top: 0.5em;
          border-bottom: 1px solid rgba(95, 95, 95, 0.2);
        }

        ul {
          margin: 0;
          padding: 0em .5em;
          display: flex;
          flex-direction: column;
          gap: 0.3em;
          width: 100%;
          margin-top: 0.5em;
          justify-content: space-around;
          align-items: center;
          height: 100%;

          li {
            width: 100%;
            padding: 0.4em 0.9em;
            // background: rgb(6 50 78);
            background: rgba($primary, .05);
            box-shadow: inset 0px 0px 19px rgba($primary, .1);
            border-radius: 10px;
            transition: all .3s;
            height: calc((100% / 5) - .5em);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-content: center;
            align-items: center;



            &:hover {
              background: rgba($primary, .15);
              box-shadow: inset 0px 0px 19px rgba($primary, .2);
            }

            ._right-li,
            ._left-li {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-content: center;
              align-items: center;
              width: 50%;
              height: 100%;
            }

            .title-card {
              text-align: center;
              text-transform: uppercase;
              color: $primary;
              font-weight: 700;
            }

            .input-num {
              background-color: transparent;
              border: none;
              text-align: right;
              color: inherit;

            }

            .input-num::-webkit-outer-spin-button,
            .input-num::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            .input-num {
              /* Utilizzato per garantire la compatibilità con altri browser */
              -moz-appearance: textfield;
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
      position: relative;
      z-index: 100;
      display: flex;
      height: 100%;

      ._left {
        width: 50%;
        height: calc(100vh - 285px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        align-content: center;

        ._left-scroll {

          ul {

            li {
              background: rgba($primary-light, .05);
              box-shadow: inset 0px 0px 19px lighten(rgba($primary-light, .1), 20%);

              &:hover {
                background: rgba($primary-light, .2);
                box-shadow: inset 0px 0px 19px lighten(rgba($primary-light, .3), 20%);
              }
            }
          }
        }
      }
    }
  }

}
</style>
