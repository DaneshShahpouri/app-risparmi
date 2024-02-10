<script>
import { store } from '../store.js';
export default {
  name: 'AppStatisticheObiettivi',


  data() {
    return {
      store,
      dynamicProgress: [],
    }
  },
  watch: {
    'store.darkmode': function () {
      this.createBar()
    }
  },

  props: {
    // msg: String
  },


  computed: {

  },


  methods: {
    createBar() {
      this.setPerc();

      // console.log(rgbToHsl('rgb(95, 95, 211)'))

      // CREA TROFEI OBBIETTIVI MEDAGLIE PERCENTUALE
      //style="  background: conic-gradient(${course.color} ${3.6 * course.percent}deg, #fff 0deg);"
      let elColor = document.getElementById('app')
      let backgroundValue = getComputedStyle(elColor.querySelector('._app')).getPropertyValue('border-left-color')
      function caratteriTraParentesi(inputString) {
        const startIndex = inputString.indexOf('(');
        const endIndex = inputString.indexOf(')');

        if (startIndex !== -1 && endIndex !== -1) {
          return inputString.slice(startIndex + 1, endIndex);
        } else {
          return null; // Parentesi non trovate
        }
      }

      const progressGroups = document.querySelectorAll(".progress-group");

      let progessTimer = []

      progressGroups.forEach((progress, index) => {
        let backgrounds = [];
        backgrounds.push(backgroundValue)

        let progressStartValue = 0;

        let progressStartEnd = parseInt(this.dynamicProgress[index]);
        if (progressStartEnd >= 100 || progressStartEnd == Infinity) {
          progressStartEnd = 100;
          backgrounds[index] = '250, 176, 5'
        } else if (progressStartEnd < 0) {
          progressStartEnd = 0;

        } else {
          backgrounds[index] = getComputedStyle(elColor.querySelector('._app')).getPropertyValue('border-left-color')

          if (this.store.darkmode == false) {
            backgrounds[index] = getComputedStyle(elColor.querySelector('._app')).getPropertyValue('border-right-color')
            if (progressStartEnd <= 50) {
              backgrounds[index] = getComputedStyle(elColor.querySelector('._app')).getPropertyValue('border-bottom-color')
            }
          }

          if (progressStartEnd <= 50 && this.store.darkmode) {
            backgrounds[index] = getComputedStyle(elColor.querySelector('._app')).getPropertyValue('border-top-color')
          }


          backgrounds[index] = caratteriTraParentesi(backgrounds[index])
        }

        let speed = 7;
        progessTimer[index] = setInterval(() => {
          progressStartValue++;
          if (progressStartValue == progressStartEnd) {
            clearInterval(progessTimer[index]);
          }

          progress.querySelector(".circular-progress").style.background = `
          conic-gradient(rgb(${backgrounds[index]}) ${3.6 * progressStartValue}deg, rgba(${backgrounds[index]}, 0.1) 0deg)`;

          if (this.store.totaleRisparmi >= 0) {

            progress.querySelector(".course-value").innerHTML = progressStartValue + "%";
          }
        }, speed);

      });
    },

    addObbEl() {
      let object = { n: 'Aggiungi Nome', p: 0 }

      this.store.data.o.push(object)
      this.save();
    },


    setPerc() {
      this.dynamicProgress = [];
      this.store.data.o.forEach(element => {
        let percentuale = (this.store.totaleRisparmi / element.p) * 100;
        if (element.p == 0) {
          percentuale = 100
        }
        this.dynamicProgress.push(percentuale)
      });

      //console.log(this.dynamicProgress)
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
    this.setPerc()
    this.createBar()
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

            <li v-for="(element, key) in this.store.data.o" :key="key" @click.stop="">

              <div>
                <button class="_btn-delete" @click.stop="this.store.data.o.splice(key, 1); save(); createBar()">
                  <i class="fa-solid fa-circle-minus"></i>
                </button>
                <input type="text" v-model="element.n" @change.stop="save(); createBar()">
                <input type="num" v-model="element.p" @change.stop="save(); createBar()">
                <span>€</span>
              </div>
            </li>

          </ul>

          <div class="no-ob" v-else>
            <span class="text-center">Fissa un nuovo obiettivo cliccando qui sotto.</span>
          </div>

          <div class="_botton-wrapper" v-if="this.store.data.o.length < 6">
            <button class="btn _btn-outline-primary-darkness-hover" @click.stop="addObbEl(); createBar()">
              <i class="fa-solid fa-circle-plus"></i>
            </button>
          </div>

        </div>

      </div>

      <!-- Obiettivi Progressi -->
      <div class="right-side">

        <div class="progress-bar-container" v-if="this.store.data.o.length > 0">

          <div class=" o_container">
            <div class="progress-group" v-for="( element, key ) in  this.store.data.o " :key="key">
              <i class="fa-solid fa-award" :class="this.dynamicProgress[key] >= 100 ? 'show' : 'hide'"></i>
              <div class="circular-progress">
                <span class="course-value">0%</span>
              </div>
              <label class="text">{{ element.n == 'Aggiungi Nome' ? ' - ' : element.n }}</label>
              <div v-if="element.p > 0">
                <span v-if="element.p - this.store.totaleRisparmi > 0">Ti mancano: <span class="_text-primary">{{
                  element.p
                  - this.store.totaleRisparmi }}</span>€</span>
                <span class="_text-primary" v-else>Hai raggiunto l'obiettivo!</span>
              </div>
              <span v-else>Buona fortuna per il tuo nuovo obiettivo.</span>
            </div>
          </div>

        </div>

        <div v-else>
          <p class="ms-4">
            Aggiungi fino a sei obiettivi da raggiungere e controllane il progresso per il raggiungimento.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/variables' as *;

.container_obiettivi {
  width: 100%;
  height: 30vh;

  ._principale {
    height: calc(((100vh - 80px) / 12 * 4));
    display: flex;

    .left-side {
      width: 30vw;
      margin: .2em;
      background: rgb(32 32 32 / 2%);
      border-radius: 6px;
      box-shadow: inset 0px 0px 5px rgb(0 0 0 / 45%);



      h4 {
        text-align: center;
        margin: 0.2em;
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
          height: 20.5vh;
          flex-wrap: wrap;
          align-content: center;
          justify-content: flex-start;
          align-items: center;
          padding: 0em;
          gap: 0em;
          margin: 0;
          width: 100%;

          li {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .8em;
            cursor: pointer;
            transition: all .5s;
            padding: .2em;
            border-radius: 10px;
            width: 90%;

            div {
              cursor: pointer;
              display: flex;
              justify-content: center;
            }

            &:hover {
              background-color: rgba($color-light, 5%);
              cursor: pointer;
            }

            input,
            select {
              background-color: transparent;
              border: none;
              padding: 0 .3em;
              border-radius: 14px;
              color: $primary;
              border: 1px solid rgba($primary, 0.4);
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
            margin-bottom: 0.5em;
            position: relative;
            width: 30px;
            height: 33px;

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
      display: flex;
      justify-content: center;
      align-items: center;

      .o_container {
        display: flex;
        gap: 10px;


        .progress-group {
          width: calc((70vw / 6) - 10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 5px;
          position: relative;

          i {
            transition: all 1.3s;
            transform: scale(1.5);
            color: grey;
            text-shadow: 1px 2px 1px rgb(0 0 0 / 15%);

            &.hide {
              position: absolute;
              top: 10px;
              opacity: 0;

            }

            &.show {
              position: absolute;
              top: -25px;
              opacity: 1;
              color: #eeb302;
            }
          }



          .circular-progress {
            height: calc((70vw / 6) - 35px);
            width: calc((70vw / 6) - 35px);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transition: 0.5s;
            box-shadow: inset 0px 0px 8px 2px $background;
            //color: rgba(29, 150, 210, 0.142);

          }

          .circular-progress::before {
            content: "";
            position: absolute;
            height: calc((70vw / 6) - 75px);
            width: calc((70vw / 6) - 75px);
            border-radius: 50%;
            background-color: lighten($background, 5%);
            box-shadow: 0px 0px 8px 2px $background;
          }

          .course-value {
            position: relative;
            color: white;
            font-size: 35px;
            font-weight: 100;
          }

          .text {
            margin-top: 8px;
            font-size: 1em;
            font-weight: 500;
            color: white;
            text-align: center;
          }

          div {
            text-align: center;

            span {
              text-align: center;
              font-size: .9em;
            }
          }
        }

      }
    }

  }

}




@media only screen and (max-width: 1154px) {
  .container_obiettivi {
    width: 100%;
    padding: 0em;

    ._principale {
      height: calc(((100vh - 80px) / 12 * 4));
      display: flex;

      .left-side {
        width: 30vw;

        ._title-wrapper {

          ul {

            li {

              input,
              select {
                max-width: 120px;

              }
            }
          }
        }
      }

      .right-side {

        .o_container {

          .progress-group {

            .circular-progress {
              height: calc((70vw / 6) - 25px);
              width: calc((70vw / 6) - 25px);

            }

            .circular-progress::before {
              height: calc((70vw / 6) - 45px);
              width: calc((70vw / 6) - 45px);

            }

            .text {
              font-size: .8em;
            }

            span {
              font-size: .8em;

            }

          }
        }

      }

    }
  }
}

@media only screen and (max-width: 720px) {
  .container_obiettivi {
    width: 100%;
    padding: 0em;
    height: 100%;

    ._principale {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;

      .left-side {
        width: 100%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        border-right: 0;
        margin-bottom: 4em;

        ._title-wrapper {

          ul {
            height: auto;
            margin-bottom: 1em;

            li {

              input,
              select {
                max-width: 220px;

              }
            }
          }
        }
      }

      .right-side {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;


        .o_container {
          gap: 12px;
          flex-direction: row;
          flex-wrap: wrap;

          .progress-group {
            height: 100%;
            width: calc((100vw / 3) - 28px);
            margin-bottom: 2.5em;

            .circular-progress {
              height: calc((100vw / 3) - 25px);
              width: calc((100vw / 3) - 25px);

            }

            .circular-progress::before {
              height: calc((100vw / 3) - 65px);
              width: calc((100vw / 3) - 65px);

            }

            .text {
              font-size: .9em;
              text-align: center;
            }

            span {
              font-size: .9em;
              text-align: center;

            }

          }
        }

      }

    }
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
        background: rgb(255 255 255 / 11%);
        border-radius: 6px;
        box-shadow: inset 0px 0px 9px rgb(0 0 0 / 10%);

        ._title-wrapper {


          ul {


            li {
              &:hover {
                background-color: rgba($color-dark, 10%);
              }

              input,
              select {
                border: 1px solid $primary-light;
                color: $primary-light;

                &:hover {
                  background-color: rgba($primary-light, 50%);
                  color: white;
                }

              }

            }
          }


        }
      }

      .right-side {


        .o_container {


          .progress-group {
            .circular-progress {

              box-shadow: inset 0px 0px 8px 2px rgb(11 11 11 / 20%);
            }

            .circular-progress::before {
              background-color: $background-light;
              box-shadow: 0px 0px 8px 2px rgb(11 11 11 / 20%);
            }

            .course-value {
              color: $color-dark;
            }

            .text {
              margin-top: 18px;
              font-size: 1em;
              font-weight: 500;
              color: rgb(35, 35, 35);
            }
          }
        }
      }
    }


  }
}
</style>
