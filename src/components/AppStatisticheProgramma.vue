<script>
import { store } from '../store.js';
export default {
  name: 'AppStatisticheProgramma',


  data() {
    return {
      store,
    }
  },


  props: {
    // msg: String
  },

  methods: {
    addProEl() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let object = { n: 'Aggiungi Nome', s: 0, f: 'om', d: year + '-' + month + '-' + day, c: 'sas' }

      this.store.data.sp.push(object)
      this.save();

    },

    save() {
      const myData = this.store.data
      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      //console.log('myData salvato con successo!');
    },
  },

  created() {
  },

  mounted() {

  },
}
</script>

<template>
  <div class="container_programma" :class="this.store.darkmode ? '' : 'light'">
    <!-- TITLE E INFO -->
    <div class="title mb-2">
      <h4>Spese Programmate</h4>
    </div>
    <!-- <div class="info">
      <p>Hai delle spese fisse? aggiungle qui sotto per non pensarci più.</p>
    </div> -->

    <div class="main_programma">

      <div class="_elenco">

        <ul class="spesefisse" v-if="this.store.data.sp.length > 0">
          <li v-for="(el, key) in this.store.data.sp" :key="key">

            <!-- Nome SPESA FISSA -->
            <div class="nome_wrapper">
              <div>
                <button class="_btn-delete" @click="this.store.data.sp.splice(key, 1); save()">Delete</button>
              </div>
              <input class="nome" type="text" v-model="el.n" @change.stop="save()">
            </div>

            <!-- INFO SPESA FISSA -->
            <div class="spesefisse-info">
              <span class="spesa">
                <input class="" type="num" v-model="el.s" @change.stop="save()">
                <span class="me-2">€</span>
              </span>

              <span class="categoria  pe-1">
                <select type="text" v-model="el.c" @change.stop="save()">
                  <option value="s">Stipendio</option>
                  <option value="sc">Affitto</option>
                  <option value="sb">Bollette</option>
                  <option value="ss">Alimentari</option>
                  <option value="sas">Altre Spese</option>
                </select>
              </span>

              <span class="frequenza">
                <span>{{ el.f != 'om' ? 'ogni ' : '' }}</span>
                <input type="num" v-model="el.f" class="frequenza_input" @change.stop="save()">
                <span>{{ el.f != 'om' ? ' mesi' : ' - Ogni mese' }}</span>
              </span>

            </div>


          </li>
        </ul>
        <p class="_info-para" v-else>
          Aggiungi le spese programmate per il tuo conto.
          Definisci la spesa, la frequenza e la categoria di appartenenza e poi dai un nome alla tua spesa programmata per
          dimenticartene e lasciare che si aggiorni automaticamente.
        </p>

      </div>

      <div class="_botton-wrapper">
        <button class="btn _btn-outline-primary-darkness-hover" @click="addProEl()"><i
            class="fa-solid fa-circle-plus"></i></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.container_programma {
  width: 100%;
  padding: .8em;

  .title {
    text-align: center;
    //border-bottom: 1px solid $primary;
  }

  .info {
    margin-top: 1em;

    p {
      font-size: .8em;
    }
  }

  .main_programma {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;

    ._info-para {
      text-align: center;
      font-size: .9em;
      font-weight: 100;
    }

    ._elenco {
      .spesefisse {
        padding: 0;

        max-height: 365px;
        overflow: auto;



        li {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-bottom: .8em;
          padding: 0;
          padding-bottom: .4em;
          border-bottom: 1px solid darken($primary, 40%);

          .nome_wrapper {
            position: relative;
            display: flex;

            input.nome {
              font-weight: 900;
              background-color: transparent;
              text-align: center;
              border: 1px solid darken($primary, 30%);
              border-radius: 10px;
              margin-bottom: .4em;
            }
          }

          .spesefisse-info {
            text-align: center;
            font-size: .8em;


            input,
            select {
              background-color: transparent;
              border: none;
              padding: 0 .3em;
              border-radius: 14px;
              color: $primary;
              border: 1px solid;
              margin: 0 .3em;

              &:hover {
                background-color: darken($primary, 40%);
              }

              &:focus-visible {
                outline: none;
              }
            }

            input[type=num] {
              width: 15%;
              text-align: end;
            }

            option {
              background-color: $background;
              color: white;
              transition: all .5s;

              &:hover {
                background-color: $primary;
                color: $background;
              }

            }

            .frequenza {
              .frequenza_input {
                width: 35px;
                text-align: center;
              }
            }
          }

          ._btn-delete {
            opacity: 1;
            padding: 0.1em;
            font-size: .7em;
            transition: all .5s;
            margin-right: 0.5em;
            border-radius: 10px;
            border: 1px solid $thirdary;
            background: transparent;
            color: $thirdary;
          }

          &:hover {
            ._btn-delete {
              opacity: 1;

              &:hover {

                background: $thirdary;
                color: white;
              }
            }
          }
        }
      }
    }

    ._botton-wrapper {
      display: flex;
      gap: 1em;

      .btn {
        border-radius: 50%;
        margin-bottom: .5em;
        position: relative;
        width: 37px;
        height: 37px;

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        &:active {
          background-color: rgb(116, 116, 116);
        }
      }

    }
  }
}

@media only screen and (max-width: 1154px) {
  .container_programma {
    width: 100%;
  }
}

@media only screen and (max-width: 720px) {
  .container_programma {
    width: 100%;
  }
}


.light {
  .container_programma .main_programma ._elenco .spesefisse li .nome_wrapper input.nome {
    color: $primary;
  }

  .container_programma .main_programma ._elenco .spesefisse li .spesefisse-info input[data-v-3db7df0c]:hover,
  .container_programma .main_programma ._elenco .spesefisse li .spesefisse-info select:hover {
    background: darken($background-light, 3%);
  }

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
