<script>
import { store } from '../store.js';
export default {
  name: 'AppStatisticheObiettivi',


  data() {
    return {
      store,
    }
  },


  props: {
    // msg: String
  },

  methods: {
    addObbEl() {
      let object = { n: 'Aggiungi Nome', p: 0 }

      this.store.data.o.push(object)
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
    console.log(this.store.data.o.length)
  },

  mounted() {

  },
}
</script>

<template>
  <div class="container_obiettivi" :class="this.store.darkmode ? '' : 'light'">
    <div class="_principale">

      <div class="left-side">
        <h4>Obiettivi</h4>

        <!-- Obiettivi Nomi -->
        <div class="_title-wrapper">

          <ul v-if="this.store.data.o.length > 0">

            <li v-for="(element, key) in this.store.data.o" :key="key" @click.stop="console.log('aprimi')">
              <button class="_btn-delete" @click.stop="this.store.data.o.splice(key, 1); save()">
                <i class="fa-solid fa-circle-minus"></i>
              </button>

              <div>
                <input type="text" v-model="element.n" @change.stop="save()">
                <span> - </span>
                <input type="num" v-model="element.p" @change.stop="save()">
                <span>€</span>
              </div>
            </li>

          </ul>

          <div class="no-ob" v-else>
            <span class="text-center">Fissa un nuovo obiettivo e controlla gli sviluppi.</span>
          </div>

          <div class="_botton-wrapper" v-if="this.store.data.o.length < 6">
            <button class="btn _btn-outline-primary-darkness-hover" @click.stop="addObbEl()">
              <i class="fa-solid fa-circle-plus"></i>
            </button>
          </div>

        </div>

      </div>

      <!-- Obiettivi Progressi -->
      <div class="right-side">

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.container_obiettivi {
  width: 100%;
  padding: .8em 0em;

  ._principale {
    height: calc(((100vh - 80px) / 12 * 4) - 1.6em);
    display: flex;

    .left-side {
      width: 30vw;
      border-right: 1px solid darken($primary, 20%);

      h4 {
        text-align: center;
        margin-bottom: .5em;
      }

      ._title-wrapper {

        .no-ob {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          height: 18vh;
          flex-wrap: wrap;
        }

        ul {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          height: 18vh;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 0.3em;
          gap: 0.2em;
          margin: 0;

          li {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .8em;
            cursor: pointer;
            transition: all .5s;
            padding: .2em;
            border-radius: 10px;

            div {
              cursor: pointer;
              display: flex;
              justify-content: center;
            }

            &:hover {
              background-color: darken($thirdary, 28%);
              cursor: pointer;
            }

            input,
            select {
              background-color: transparent;
              border: none;
              padding: 0 .3em;
              border-radius: 14px;
              color: $primary;
              border: 1px solid $primary;
              margin: 0 .3em;
              color: white;
              transition: all .5s;

              &:hover {
                background-color: darken($primary, 40%);
              }

              &:focus-visible {
                outline: none;
              }
            }

            input[type=num] {
              width: 20%;
              max-width: 100px;
              text-align: end;
            }


            ._btn-delete {
              opacity: 1;
              padding: 1em;
              font-size: .7em;
              transition: all .5s;
              margin-right: 0.5em;
              border-radius: 10px;
              border: none;
              background: transparent;
              color: white;
              position: relative;

              i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                color: $thirdary;
                font-size: 2em;
                cursor: pointer;
                transition: all .5s;
              }

              &:hover {

                i {
                  color: darken($thirdary, 20%);

                }
              }
            }
          }
        }


        ._botton-wrapper {
          display: flex;
          gap: 1em;
          align-items: center;
          justify-content: center;


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

    .right-side {
      width: 70vw;
    }

  }


}

@media only screen and (max-width: 1154px) {
  .container_obiettivi {
    width: 100%;
  }
}

@media only screen and (max-width: 720px) {
  .container_obiettivi {
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

  .container_obiettivi {

    ._principale {

      .left-side {
        border-right: 1px solid lighten($primary-light, 20%);

        ._title-wrapper {


          ul {


            li {
              &:hover {
                background-color: lighten($primary-light, 62%);
              }

              input,
              select {
                border: 1px solid $primary-light;
                color: $primary-light;

                &:hover {
                  background-color: lighten($primary-light, 40%);
                }

              }

            }
          }


        }
      }

      .right-side {}

    }


  }
}
</style>
