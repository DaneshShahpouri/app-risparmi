<script>
//import axios from 'axios';
import { store } from './store.js';

import AppMain from './components/AppMain.vue'
import AppGrafici from './components/AppGrafici.vue'
import AppStatistiche from './components/AppStatistiche.vue'

export default {
  data() {
    return {
      store,
      showNavInfo: false,
      navMenuToggle: 'open',
      animationModule: false,

    }
  },

  name: 'App',

  components: {
    // HelloWorld
    AppMain,
    AppGrafici,
    AppStatistiche,
  },

  watch: {
    'store.viewModule': function () {

      this.animationModule = true;
      // console.log('partito')
      setTimeout(() => {
        this.store.viewModule = false;
      }, 1800);
      setTimeout(() => {
        this.animationModule = false;
      }, 2500);
    },
    'store.confermReset': function () {

      if (this.store.confermReset == true) {
        this.store.animationReset = true;

        setTimeout(() => {
          this.store.viewModuleReset = false;
        }, 2200);

        setTimeout(() => {
          this.store.animationReset = false;
        }, 2700);
      }

    },
  },

  methods: {
    navPage(direction) {
      let lenghtArray = JSON.parse(JSON.stringify(this.store.pages)).length;

      if (direction == 'next') {
        this.store.contatorePage++
        if (this.store.contatorePage >= lenghtArray) {
          this.store.contatorePage = 0;
        }
      } else {
        this.store.contatorePage--
        if (this.store.contatorePage < 0) {
          this.store.contatorePage = lenghtArray - 1;
        }
      }

      this.store.currentPage = this.store.pages[this.store.contatorePage]

    },

    changeVariables() {
      if (this.showNavInfo == true) {
        this.showNavInfo = false
      } else {
        this.showNavInfo = true
      }
      console.log(this.showNavInfo)
    },

    setAnno(anno) {
      this.store.anno = anno;

    },

    openNav() {
      if (this.navMenuToggle == 'close') {
        this.navMenuToggle = 'open'
      } else {
        this.navMenuToggle = 'close'
      }
    },

    closeNav() {
      this.navMenuToggle = 'open'
      this.showNavInfo = false

    },

    resetData() {
      this.store.confermReset = true;
      setTimeout(() => {
        this.store.confermReset = false
        //console.log(this.store.confermReset)
      }, 500);
      //console.log(this.store.confermReset)
    },


  },

  created() {
    // Ottieni la dimensione totale dello spazio di archiviazione locale
    function VediLocalStorage() {
      function getLocalStorageSize() {
        let totalSize = 0;

        for (let key in localStorage) {
          if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
            totalSize += (localStorage[key].length * 2); // moltiplicato per 2 per considerare la rappresentazione in byte di una stringa UTF-16
          }
        }

        return totalSize;
      }

      // Ottieni la dimensione massima dello spazio di archiviazione locale
      function getMaxLocalStorageSize() {
        // Dimensione massima consentita dal browser (5 MB di solito)
        const maxQuota = 5 * 1024 * 1024; // 5 MB in byte
        const usedSpace = getLocalStorageSize();

        return {
          maxQuota,
          usedSpace,
          remainingSpace: maxQuota - usedSpace
        };
      }

      // Esempio di utilizzo
      const localStorageInfo = getMaxLocalStorageSize();
      console.log(`Dimensione massima di localStorage: ${localStorageInfo.maxQuota} byte`);
      console.log(`Spazio utilizzato in localStorage: ${localStorageInfo.usedSpace} byte`);
      console.log(`Spazio rimanente in localStorage: ${localStorageInfo.remainingSpace} byte`);
    }
    VediLocalStorage()


    //Set DATE
    //------------------------------------------------------
    let date = new Date();
    this.store.currentYear = date.getFullYear();
    this.store.currentMonth = date.getMonth();
    this.store.currentDay = date.getDate();
    this.store.currentHours = date.getHours();
    this.store.currentMin = date.getMinutes();
    this.store.currentWeekDay = this.store.week[date.getDay()];


    setInterval(() => {
      let date = new Date();
      this.store.currentYear = date.getFullYear();
      this.store.currentMonth = date.getMonth();
      this.store.currentDay = date.getDate();
      this.store.currentHours = date.getHours();
      this.store.currentMin = date.getMinutes();
      this.store.currentWeekDay = this.store.week[date.getDay()];
    }, 5000);
    //------------------------------------------------------
    this.store.anno = this.store.currentYear.toString().substring(2, 4)
  },

  mounted() {

  },
}
</script>

<template>
  <div class="_app" @click="closeNav()" :class="this.store.darkmode ? '' : 'light'">

    <div class="_top">
      <!-- NAVBAR -->
      <nav class="navbar d-flex justify-content-between navbar-expand-lg navbar logo">

        <div class="navbar d-flex justify-content-between">
          <a class="navbar-brand" href="#">
            <!-- LOGO -->
            <!-- <img alt="Vue logo" src="./assets/logo2.png"> -->
            <i class="fa-solid fa-euro-sign"></i>
            <button class="menubtn" @click.stop="openNav()">III</button>
          </a>
          <ul class=" navbar-nav mr-auto mt-2 mt-lg-0" :class="this.navMenuToggle == 'open' ? '_open' : ''">
            <!-- LOGO small screen -->
            <a class="navbar-brand brand_menu_hidden" href="#">
              <!-- <img alt="Vue logo" src="./assets/logo2.png"> -->
              <i class="fa-solid fa-euro-sign"></i>
              <button class="menubtn" @click.stop="openNav()">III</button>
            </a>


            <li class="nav-item " :class="this.store.currentPage == this.store.pages[0] ? 'active-link' : ''"
              @click.stop="this.store.currentPage = this.store.pages[0]">
              <a class="nav-link" href="#"><i class="fa-solid fa-house me-1"></i><span> Home</span></a>
            </li>
            <li class="nav-item" :class="this.store.currentPage == this.store.pages[1] ? 'active-link' : ''"
              @click.stop="this.store.currentPage = this.store.pages[1]">
              <a class="nav-link" href="#"><i class="fa-solid fa-chart-column me-1"></i><span>Grafici</span></a>
            </li>
            <li class="nav-item" :class="this.store.currentPage == this.store.pages[2] ? 'active-link' : ''"
              @click.stop="this.store.currentPage = this.store.pages[2]">
              <a class="nav-link " href="#"><i class="fa-solid fa-diagram-project me-1"></i><span> Statistiche</span></a>
            </li>
          </ul>
          <!-- BORDERNAV -->
          <div class="_border-nav"></div>

        </div>

        <!-- INFO -->
        <div class="_info-input" style="position:relative; position: relative; height: 40px; width: 80px;" @click.stop="">

          <div class="_btn_wrapper" @click="changeVariables()"
            :class="this.showNavInfo ? '_border-primary _light-primary' : ''">
            <div class="circle_fisso" :class="this.showNavInfo ? '_border-white' : ''"></div>
            <div class="wrapper-icon" :class="this.showNavInfo ? 'start_animated_gear' : ''">
              <i class="fa-solid fa-gear" :class="this.showNavInfo ? '_color-primary' : ''"></i>
            </div>
          </div>

          <div class="_module-btn" :class="this.showNavInfo ? 'start_animated' : 'end_animated'">

            <!-- DARK MODE -->



            <!-- SFONDO -->
            <div class="bg-theme">
              <div class="mattina" :class="this.store.darkmode ? 'dis' : ''">
                <img src="./assets/darkmode/mattina-sfondo.png" alt="">
                <img src="./assets/darkmode/mattina-nuvole.png" alt="" class="_nuvole">
                <img src="./assets/darkmode/mattina-montagne.png" alt="">
                <!-- <img src="./assets/darkmode/mattina-1.png" alt="" style="transform: translateX(-50%) translateY(-58%);"> -->
              </div>
              <div class="sera" :class="this.store.darkmode ? '' : 'dis'">
                <img src="./assets/darkmode/sera-sfondo.png" alt="">
                <img src="./assets/darkmode/sera-nuvole.png" alt="" class="_nuvole">
                <img src="./assets/darkmode/sera-montagne.png" alt="">
                <!-- <img src="./assets/darkmode/sera-1.png" alt=""> -->
              </div>
              <!-- <div class="bg-sfumato"></div> -->
            </div>
            <!-- SFONDO -->
            <div class="_theme-wrapper"
              @click="(this.store.darkmode ? this.store.darkmode = false : this.store.darkmode = true), (this.store.darkmode ? this.store.bordercolor = 'rgba(42, 149, 3, 1)' : this.store.bordercolor = 'rgba(42, 149, 3, 0.1)')">

              <div class="_bg-theme-switch" :class="this.store.darkmode ? 'moon' : 'sun'">
                <i class="fa-solid fa-sun"></i>
                <i class="fa-solid fa-moon"></i>
              </div>
            </div>

            <div class="info-wrapper d-flex">
              <h6 style="font-size:0.9em">Ciao <span class=" _text-primary" style="font-size:1.2em">{{
                this.store.data.user.nome + ' ' + this.store.data.user.cognome
              }}</span>. </h6>
            </div>

            <fieldset class="d-flex align-items-center gap-2 " style="justify-content: space-between;">
              <label style="font-size:.5em;" for="nome">Nome.</label>
              <input type="text" name="nome" v-model="this.store.data.user.nome">
            </fieldset>

            <fieldset class="d-flex align-items-center gap-2 " style="justify-content: space-between;">
              <label style="font-size:.5em;" for="cognome">Cognome.</label>
              <input type="text" name="cognome" v-model="this.store.data.user.cognome">
            </fieldset>

            <fieldset class="d-flex align-items-center gap-2 " style="justify-content: space-between;">
              <label style="font-size:.5em;" for="eta">Età.</label>
              <input type="text" name="eta" v-model="this.store.data.user.eta">
            </fieldset>

            <fieldset class="d-flex align-items-center gap-2 " style="justify-content: space-between;">
              <label style="font-size:.5em;" for="sesso">Sesso.</label>
              <input type="text" name="sesso" v-model="this.store.data.user.sesso">
            </fieldset>

            <div class="info-wrapper-money mt-3 pe-1 d-flex flex-column">
              <!-- 
              <span style="font-size: .7em; margin-top: 1em; margin-bottom: 1em">Entrate Tot: <span
                  style="font-size: 1.2em;" class="mx-2 _text-secondary">{{
                    this.store.totaleEntrate.toFixed(2) }} </span> €</span>

              <span style="font-size: .7em; margin-bottom: 1em;">Uscite Tot: <span style="font-size: 1.2em;"
                  class="mx-2 _text-thirdary">{{
                    this.store.totaleSpese.toFixed(2) }} </span> €</span> -->

              <span style=" text-align: center; margin-top: 1em;">Credito: <span style="font-size: 1.2em;"
                  class="mx-2 _text-primary">{{
                    this.store.totaleRisparmi.toFixed(2) }} </span> €</span>
            </div>
          </div>
        </div>
      </nav>

      <!-- ANNO -->
      <div class="d-flex gap-1 container justify-content-around  _btn-container m-auto">
        <button class="btn px-2 py-0 my-0" :class="this.store.anno == 23 ? '_btn-outline-primary-darkness' : ' _btn'"
          @click="setAnno(23)">2023</button>
        <button class="btn px-2 py-0 my-0" :class="this.store.anno == 24 ? '_btn-outline-primary-darkness' : ' _btn'"
          @click="setAnno(24)">2024</button>
        <button class="btn px-2 py-0 my-0" :class="this.store.anno == 25 ? '_btn-outline-primary-darkness' : ' _btn'"
          @click="setAnno(25)">2025</button>
        <button class="btn px-2 py-0 my-0" :class="this.store.anno == 26 ? '_btn-outline-primary-darkness' : ' _btn'"
          @click="setAnno(26)">2026</button>
      </div>

    </div>


    <!-- MAIN -->
    <div id="carouselExampleControlsNoTouching" class="carousel slide _main-pri" data-bs-touch="false">
      <div class="carousel-inner">
        <div class="" v-if="this.store.currentPage == 'home'">
          <AppMain></AppMain>
        </div>
        <div class="" v-if="this.store.currentPage == 'graph'">
          <AppGrafici></AppGrafici>
        </div>
        <div class="" v-if="this.store.currentPage == 'stat'">
          <AppStatistiche></AppStatistiche>
        </div>

      </div>

      <!-- BUTTONS NEXT PREV -->
      <button class="carousel-control-prev btn_pages" type="button" @click="this.navPage('prev')"
        style="justify-content: start; border-radius: 20px 0px 0px 20px; ">
        <i class="fa-solid fa-caret-left" style="left: 55%;"></i>
      </button>
      <button class="carousel-control-next btn_pages" type="button" @click="this.navPage('next')"
        style="justify-content: flex-end; border-radius: 0px 20px 20px 0px; margin-right:.2em; ">
        <i class="fa-solid fa-caret-right" style="left: 45%;"></i>
      </button>
    </div>

  </div>

  <!-- MODULO SAVE E RESET -->

  <div :class="this.store.darkmode ? '' : 'light'">
    <!-- SAVE -->
    <div class="_modulo_save" :class="this.store.viewModule ? 'open' : 'close'">
      <div class="_icons_animation">
        <!-- CIRCLE -->
        <div class="circle_wrapper" :class="this.animationModule ? 'animated' : ''">
          <div class="_circle"></div>
        </div>
        <!-- ICONS -->
        <i class="fa-solid fa-arrow-down _freccia" :class="this.animationModule ? 'animated' : ''"></i>
        <i class="fa-regular fa-floppy-disk _disk" :class="this.animationModule ? 'animated' : ''"></i>
      </div>
      <!-- TEXT -->
      <div class="messages">
        <span class="_text-primary">SALVATO!</span>
      </div>
    </div>
    <div class=" bg"></div>

    <!-- RESET -->
    <div class="_modulo_save" :class="this.store.viewModuleReset ? 'open ' : 'close'">
      <div class="_wrapper" v-if="this.store.animationReset == false">
        <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">Vuoi davvero cancellare tutti i dati?</span>
        <p>L'eliminazione dei dati sarà permanenete e non si potrà tornare indietro. Clicca su 'NO' per tornare
          all'applicazione.</p>
        <div class="btn-wrapper m-5 d-flex justify-content-center gap-4">
          <button class="_btn-outline-secondary-darkness-hover" @click="this.store.viewModuleReset = false">NO</button>
          <button class="_btn-outline-thirdary-darkness-hover" @click="resetData()">SI</button>
        </div>
      </div>
      <div class="_wrapper-reset" v-else>
        <div class="_icons_animation">
          <!-- CIRCLE -->
          <div class="circle_wrapper" :class="this.animationModule ? 'animated' : ''">
            <div class="_circle"></div>
          </div>

          <div class="_folder-disapper">
            <i class="fa-solid fa-folder-minus"></i>
            <div class="_disapper"> </div>

          </div>
          <i class="fa-solid fa-check _conferm"></i>
          <span class="_text-thirdary _deleted">Deleted</span>
        </div>
      </div>
    </div>

    <div class="bg"></div>
  </div>
</template>

<style lang="scss" scoped>
@use './scss/variables' as *;


._app {
  background-color: $background;
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 0em;
  padding-top: 0;
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: start;

  ._top {
    width: 100vw;
    height: 130px;
    //border: 1px solid red;
    padding: 1em 0em;

    width: 100vw;
    height: 130px;
    padding: 1em 0em;
    display: flex;
    gap: 1em;
    flex-direction: column;

    .menubtn {
      display: none;
    }

    .navbar {
      position: relative;

      ._border-nav {
        position: absolute;
        width: 315px;
        height: 34px;
        border: 1px solid darken($primary, 40%);
        box-shadow: 0px 0px 6px darken($primary, 40%);
        border-left: none;
        border-radius: 0px 40px 0px 0px;
        top: 12px;
        left: 48px;
        z-index: 0;
      }

      ul {
        position: relative;
        z-index: 2;

        .brand_menu_hidden {
          display: none
        }

        ._info-input-small {
          position: absolute;
          top: 25px;
          right: 2px;
          display: none;
        }
      }
    }

    .navbar-nav {
      .nav-item {
        a {

          transition: all .4s;
          border: 2px solid transparent !important;
          border-radius: 20px;
          color: darken($secondary, 20%) !important;
        }
      }

      .nav-link {
        transition: all .4s;
        border: 2px solid transparent !important;
        border-radius: 20px;
        font-size: .9em;
        //font-weight: 200;

        a {
          transition: all 1s;
          color: grey;
          font-weight: 400;
          text-shadow: 0px 0px 5px #37a9e200;
        }

        span {
          cursor: pointer;
        }

        &:hover {
          color: lighten(white, 5%) !important;

        }
      }

      .active-link {
        //color: lighten($primary, 5%) !important;
        //font-weight: 600;

        a {
          color: lighten($primary, 5%) !important;
          // font-weight: 600;
          text-shadow: 0px 0px 5px #37a9e2;
        }

        &:hover {

          //background-color: $primary;
          a {
            color: lighten($primary, 15%) !important;
          }

        }

      }
    }

    ._btn_wrapper {
      border: 1px solid rgb(63, 63, 63);
      color: rgb(211, 211, 211);
      transition: all .5s;
      padding: 0;
      width: 60px;
      height: 30px;
      text-align: center;
      border-radius: 50px;
      cursor: pointer;
      background-color: $background;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      position: absolute;
      top: 0px;
      right: 20px;
      bottom: -15px;
      z-index: 2;

      * {
        cursor: pointer;
      }

      &:hover {
        color: white;
        border: 1px solid rgb(183, 182, 182);
        background-color: $background;

        .wrapper-icon {

          i {
            //color: rgb(215, 215, 215);
          }
        }

        .circle_fisso {
          border: 1px solid $primary;
        }
      }

      .circle_fisso {
        position: absolute;
        top: -1px;
        right: 29px;
        width: 30px;
        height: 30px;
        border: 1px solid darken($primary, 35%);
        border-radius: 50%;
        transition: all .45s;
      }

      .wrapper-icon {
        position: absolute;
        top: 2px;
        right: 0;
        width: 30px;
        height: 30px;
        transform: (rotate(0deg));
        transition: all 1s;
        transition-timing-function: ease-in-out;

        i {
          transition: all 1s;
          transition-timing-function: ease-in-out;
          object-fit: cover;
          object-position: center;
          transform: scale(1.6) (rotate(0deg));
          color: rgb(76, 76, 76);
        }
      }

      .start_animated_gear {
        right: 29px;
        top: -5px;
        transform: (rotate(-180deg));


        i {
          color: $primary;
        }
      }

    }

    ._module-btn {
      overflow-y: hidden;
      position: absolute;
      z-index: 20;
      top: -5px;
      opacity: 0;
      right: 20px;
      background-color: rgb(16, 16, 16);
      width: 340px;
      padding: 0em 2em;
      border-radius: 10px;
      box-shadow: -3px 4px 10px #00000091;
      max-height: 0px;

      transition: all 1s;
      z-index: 1;

      .bg-theme {
        position: absolute;
        top: -10%;
        left: -4%;

        width: 164px;
        height: 87px;
        overflow: hidden;



        .bg-sfumato {
          transition: all .6s;
          position: absolute;
          top: -131px;
          width: 250px;
          height: 200px;

          right: -1px;
          background: radial-gradient(circle at center, rgba(255, 0, 0, 0) 20%, rgb(16, 16, 16) 75%);
        }

        ._nuvole {
          animation: 40s infinite linear nuvole;
        }

        .sera,
        .mattina {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%) scale(3.5);
          transition: all 1.2s;
          opacity: 1;


          &.dis {
            opacity: 0;
          }

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }

        }
      }

      ._theme-wrapper {
        background-color: transparent;
        border: 1px solid $primary;
        border-radius: 20px;
        position: relative;
        margin: .2em auto;
        width: 60px;
        height: 30px;
        cursor: pointer;
        margin-bottom: 1em;
        overflow: hidden;



        ._bg-theme-switch {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 1px solid;
          border-radius: 50%;
          top: 1px;
          transition: all .5s;
          cursor: pointer;

          &:hover {
            background-color: rgba(255, 255, 255, 0.155);
          }

          &.sun {
            left: 1px;

            .fa-sun {
              opacity: 1;

            }

            .fa-moon {
              opacity: 0;

            }
          }

          &.moon {
            left: 31px;

            .fa-sun {
              opacity: 0;
            }

            .fa-moon {
              opacity: 1;
            }
          }

          i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            transition: all .2s;
            background-color: transparent;
            cursor: pointer;

          }
        }
      }


      .info-wrapper {
        border-bottom: 1px solid $primary;
        margin-bottom: 1em;
      }

      .info-wrapper-money {
        border-top: 1px solid $primary;
        margin-top: 1em;
      }

      fieldset {
        display: flex;
        justify-content: space-between;

        input {
          background-color: transparent;
          border: none;
          width: 150px;
        }
      }


    }

    .start_animated {
      max-height: 400px;
      padding: 1em 2em;
      top: 0px;
      opacity: 1;
    }
  }

  ._main-pri {
    height: calc(100vh - 130px);
    //border: 1px solid blue;

    .carousel-inner {
      height: calc(100% - 1px)
    }
  }

  .navbar-brand {
    height: 30px;
    border: 1px solid lighten($primary, 0%);
    border-radius: 50px;
    background: darken($primary, 40%);

    position: relative;
    width: 30px;
    transform: scale(1.2);
    margin-left: 1em;

    left: 7px;
    top: 0px;
    z-index: 20;

    i {
      position: absolute;
      font-size: 1.8em;
      top: -3.5px;
      left: -5px;
      transform: rotate(0deg);
      color: rgb(11, 11, 11);
      text-shadow: 0px 0px 3px rgb(33 159 223);
    }
  }

  .logo {
    width: 100%;
    height: 50px;
    padding: 0 1em;

    margin-top: .2em;
    margin-bottom: 1em;

    position: relative;
    margin: 0;
    //margin-bottom: 1em;

    h3 {

      text-shadow: 1px 2px 2px black;
    }

    img {
      height: 30px;
      top: 2px;

    }
  }



  .btn_pages {
    top: 50%;
    width: 35px;
    height: 70vh;
    border: 1px solid;
    transform: translateY(-50%);
    opacity: 0;
    transition: all .5s;

    i {
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 3em;
      transition: all .5s;
      color: $primary;
    }

    &:hover {
      opacity: 1;
      background: darken($primary, 46%);
      color: $primary;

    }

    &:active {
      background: $primary;

      i {
        color: white;
      }
    }
  }
}


//------------------------------------------------
//MODULO SAVE _ RESET
//------------------------------------------------

._modulo_save {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: darken($background, 10%);
  z-index: 201;

  border-radius: 50px;
  //box-shadow: 0px 0px 6px darken($primary, 40%);
  box-shadow: 0px 0px 16px darken(black, 40%);

  transform: scale(1) translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  transition: all .8s;

  &+.bg {
    transition: all .4s;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 200;

    transform: translateX(-50%) translateY(-50%);
  }

  ._icons_animation {
    height: 40vh;
    width: 30vw;
    position: relative;
    padding: 2em;

    i {
      font-size: 5em;
      position: absolute;
      color: white;
      z-index: 3;
    }

    ._freccia {
      top: 40%;
      left: 50%;
      transform: scale(1) translateX(-50%) translateY(-50%);
      color: lighten($primary, 40%);
      transition: all .5s;
    }

    ._disk {
      top: 75%;
      left: 50%;
      font-size: 6em;
      transform: scale(1) translateX(-50%) translateY(-50%);
      transition: all .5s;
    }

    ._freccia.animated {
      animation: 2.2s arrowAnimation;
      opacity: 1
    }

    ._disk.animated {
      animation: 2.2s diskAnimation;
      opacity: 1
    }

    .circle_wrapper {
      width: 100px;
      height: 100px;
      border: 5px solid transparent;
      border-radius: 50%;
      background-color: $primary;
      position: absolute;
      transform: translateX(-50%) translateY(-50%) scale(3);
      top: 60%;
      left: 50%;
      z-index: 1;

      &.animated {
        animation: 2.2s lightCircle;

        ._circle {
          animation: 2.2s rotateCircle;
        }
      }


      ._circle {
        background: darken($background, 30%);
        width: 105px;
        height: 105px;
        position: absolute;
        transform: translateX(-50%) translateY(-50%) rotate(0deg);
        top: 50%;
        left: 50%;
        border-radius: 50%;

      }
    }
  }

  .messages {
    height: 20%;
    font-size: 1em;
    color: white;
    //text-shadow: 1px 1px 2px $primary;
    width: 30vw;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
    top: 20px;

    transition: all 2s;
  }

  //RESET
  ._wrapper {
    position: relative;
    width: 40vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {

      margin: 1em auto;
      color: rgb(255, 255, 255);
      font-size: 1.1em;
      text-align: center;
      text-transform: uppercase;
    }

    p {
      width: 60%;
      margin: 1em auto;
      color: rgb(167, 167, 167);
      font-size: .8em;
      text-align: center;
    }

  }

  ._wrapper-reset {
    ._icons_animation {
      position: relative;

      .circle_wrapper {
        top: 42%;
        background-color: $thirdary;
        animation: 2.2s lightCircleRed;


        ._circle {

          animation: 2.2s rotateCircle;
        }


      }

      ._folder-disapper {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) scale(1.2);

        //debug
        width: 81px;
        height: 77px;
        // border: 1px solid blue;
        z-index: 210;

        ._disapper {
          position: absolute;
          width: 90px;
          height: 150px;
          top: 0px;
          left: -1px;
          //background-color: darken($background, 10%);
          background-image: linear-gradient(to bottom, darken($background, 10%) 50%, transparent);
          z-index: 210;

          animation: 2.6s desapear;

        }

        i {
          animation: 2s colored;
        }

      }


    }

    ._conferm {
      position: absolute;
      font-size: 10em;
      z-index: 230;
      color: darken($thirdary, 20%);
      text-shadow: 0px 0px 7px $thirdary;
      transform: translateX(-50%) translateY(-50%) scale(1);
      top: 41%;
      left: 50%;
      opacity: 0;

      animation: 2.6s conferm;
    }

    ._deleted {
      position: absolute;
      top: 63%;
      left: 50%;
      font-size: 1.5em;
      z-index: 230;
      text-align: center;
      transform: translateX(-50%) translateY(-50%) scale(1);
      animation: 2.6s conferm;
    }
  }
}

._modulo_save.open {
  width: 40vw;
  height: 50vh;
  opacity: 1;

  &+.bg {
    opacity: 1;
    display: block;
  }


  .messages {
    opacity: 1;
  }
}

._modulo_save.close {
  width: 0vw;
  height: 0vh;
  opacity: 0;

  &+.bg {
    opacity: 0;
    display: none;
  }

  .messages {
    opacity: 0;
  }

  ._icons_animation {}
}

//ANIMATION MODULE
@keyframes arrowAnimation {
  0% {
    top: 40%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
    color: white;
  }

  5% {
    top: 40%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
  }

  15% {
    top: 36%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
    color: white;
  }

  36% {
    color: white;

  }

  80% {
    top: 45%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
    color: lighten($primary, 10%);
  }

  100% {
    top: 40%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
    color: $primary;
  }
}

@keyframes diskAnimation {
  0% {
    top: 75%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
    color: white;
  }

  35% {
    top: 75%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
    color: white;
  }

  42% {
    top: 75%;
    left: 49%;
    transform: scale(.95) translateX(-50%) translateY(-50%);
  }

  80% {
    top: 75%;
    left: 52%;
    transform: scale(1.2) translateX(-50%) translateY(-50%);
    text-shadow: 0px 0px 2px $primary;
  }

  100% {
    top: 75%;
    left: 50%;
    transform: scale(1) translateX(-50%) translateY(-50%);
    color: $primary;
    text-shadow: 0px 0px 10px $primary;
  }
}

@keyframes lightCircle {


  60% {
    box-shadow: 0px 0px 0px darken($primary, 20%);
  }


  80% {
    box-shadow: 0px 0px 6px darken($primary, 20%);

  }

  100% {
    box-shadow: 0px 0px 6px darken($primary, 20%);

  }
}

@keyframes lightCircleRed {


  60% {
    box-shadow: 0px 0px 0px darken($thirdary, 20%);
  }


  80% {
    box-shadow: 0px 0px 6px darken($thirdary, 20%);

  }

  100% {
    box-shadow: 0px 0px 6px darken($thirdary, 20%);

  }
}

@keyframes rotateCircle {
  0% {
    width: 150px;
    height: 110px;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    top: 50%;
    left: 50%;
  }

  10% {
    width: 150px;
    height: 110px;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    top: 51%;
    left: 50%;
  }


  80% {
    width: 98px;
    height: 98px;
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
    top: 50%;
    left: 50%;
  }

  100% {
    width: 98px;
    height: 98px;
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
    top: 50%;
    left: 50%;
  }
}

//RESET
@keyframes desapear {
  0% {
    height: 0px;
    background-image: linear-gradient(to bottom, darken($background, 10%) 50%, transparent);
  }


  80% {
    height: 150px;
    background-image: linear-gradient(to bottom, darken($background, 10%) 50%, transparent);
  }

  100% {
    height: 150px;
    background-image: linear-gradient(to bottom, darken($background, 10%) 50%, transparent);
  }
}

@keyframes desapear-light {
  0% {
    height: 0px;
    background-image: linear-gradient(to bottom, $background-light 50%, transparent);
  }


  80% {
    height: 150px;
    background-image: linear-gradient(to bottom, $background-light 50%, transparent);
  }

  100% {
    height: 150px;
    background-image: linear-gradient(to bottom, $background-light 50%, transparent);
  }
}

@keyframes conferm {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes colored {
  0% {
    color: white;
  }


  100% {
    color: rgb(200, 0, 0);
  }
}

//------------------------------------------------
//MEDIAQUERY
//------------------------------------------------
@media only screen and (max-width: 992px) {
  ._app {

    ._top {


      nav {
        .navbar {
          position: relative;

          ._border-nav {
            display: none;
          }

          .navbar-brand {
            position: relative;

          }

          .menubtn {
            display: block;
            position: absolute;
            top: -6px;
            left: -7px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            opacity: 0;
          }

          ul {
            position: absolute;
            left: 0;
            top: -10px;
            width: calc(100vw - 40px);
            padding: 0.7em 3em;
            max-height: 200px;
            transition: all 1s;
            background: rgba(11, 11, 11, 1);
            padding: 0.7em 7em;
            z-index: 200;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            overflow: hidden;

            transition: all 1s;
            box-shadow: 1px 1px 20px black;

            &._open {
              max-height: 0px;
              padding: 0 7em;
            }

            .brand_menu_hidden {
              display: block;
              position: absolute;
              background: rgb(48, 48, 48);
              top: 10px;
              left: 7px;
              border: 1px solid white;

              i {
                text-shadow: 0px 0px 2px white;
              }
            }

            ._info-input-small {
              position: absolute;
              top: 25px;
              right: 2px;
              display: block;

              ._btn_wrapper {
                border: 1px solid darken($primary, 30%);

                .circle_fisso {
                  border: 1px solid rgb(141, 141, 141);
                }
              }

              ._module-btn {
                background: #dadada;
                color: black;

                input {
                  color: black;
                }
              }
            }

            li {
              border-left: 1px solid $background;
              border-right: 1px solid $background;
              width: 110px;
              text-align: center;
              border-radius: 25px;
              background: $background;
              transition: all .4s;
            }

            li.active-link {
              //border-left: 1px solid $primary;
              //border-right: 1px solid $primary;
              width: 120px;
              text-align: center;
              border-radius: 25px;
              background: darken(white, 93%);
            }
          }
        }
      }
    }
  }

  ._app.light {
    ._top {

      nav {
        .navbar {
          position: relative;

          ul {
            background: $background-light;
            box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.313);

            .brand_menu_hidden {
              background: rgb(210, 210, 210);
              border: 1px solid rgb(74, 74, 74);

              i {
                text-shadow: 0px 0px 2px rgb(153, 153, 153);
              }
            }

            ._info-input-small {

              ._btn_wrapper {
                border: 1px solid darken($primary-light, 30%);

                .circle_fisso {
                  border: 1px solid rgb(141, 141, 141);
                }
              }


            }

            li {
              border-left: 1px solid $background-light;
              border-right: 1px solid $background-light;
              background: $background-light;
            }

            li.active-link {
              background: lighten(rgb(1, 1, 1), 93%);
            }
          }
        }
      }
    }

  }
}

@media only screen and (max-width: 520px) {
  ._app {

    ._top {

      ._module-btn {
        width: calc(100vw - 70px);
      }

      nav {
        .navbar {
          position: relative;

          .navbar-brand {
            position: relative;

          }

          .menubtn {
            display: block;
            position: absolute;
            top: -6px;
            left: -7px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            opacity: 0;
          }

          ul {
            position: absolute;
            top: -10px;
            left: 0;
            width: calc(100vw - 30px);


            max-height: 200px;
            transition: all 1s;

            &._open {
              max-height: 0px;
              padding: 0 3em;
            }
          }
        }
      }
    }
  }

  .btn_pages {
    display: none;
  }

  ._modulo_save {
    ._wrapper-reset {
      ._deleted {
        top: 78%;
      }
    }
  }

  ._modulo_save.open {
    height: 61vh;
    width: 100vw;

    ._wrapper {
      width: 90vw;
    }
  }
}

//LIGHT MODE
._app.light {
  background-color: $background-light;
  color: #777777;

  ._top {

    .navbar {

      ._border-nav {
        border: 1px solid #035e737a;
        box-shadow: 0px 0px 6px #c2e7f0;

      }

    }

    .navbar-nav {
      .nav-item {
        a {
          color: rgb(184, 198, 211) !important;
        }
      }

      .nav-link {

        a {

          color: rgb(204, 204, 204);

          text-shadow: 0px 0px 5px $background-light;
        }


        &:hover {
          color: lighten(rgb(103, 103, 103), 5%) !important;

        }
      }

      .active-link {

        a {
          color: lighten($primary-light, 5%) !important;

          text-shadow: 0px 0px 5px #dcdcdc;
        }

        &:hover {

          a {
            color: lighten($primary-light, 15%) !important;
          }

        }

      }
    }

    ._btn_wrapper {
      border: 1px solid black;
      color: rgb(67, 67, 67);
      background-color: $background-light;

      &:hover {
        color: rgb(199, 199, 199);
        border: 1px solid rgb(43, 43, 43);
        background-color: $background-light;

        .circle_fisso {
          border: 1px solid $primary-light;
        }
      }

      .circle_fisso {
        border: 1px solid black;
      }

      .wrapper-icon {

        i {
          color: rgb(108, 108, 108);
        }
      }


    }

    ._module-btn {
      background-color: $background-light;
      color: rgb(75, 75, 75);
      box-shadow: -3px 4px 10px #00000044;

      .bg-theme {


        .bg-sfumato {

          background: radial-gradient(circle at center, rgba(255, 0, 0, 0) 20%, rgb(247, 247, 247) 75%);
        }
      }

      ._theme-wrapper {
        background-color: transparent;
        border: 1px solid $primary;
        border-radius: 20px;
        position: relative;
        margin: .2em auto;
        width: 60px;
        height: 30px;
        cursor: pointer;
        margin-bottom: 1em;
        overflow: hidden;



        ._bg-theme-switch {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 1px solid;
          border-radius: 50%;
          top: 1px;
          transition: all .5s;
          cursor: pointer;

          &:hover {
            background-color: rgba(255, 255, 255, 0.155);
          }

          &.sun {
            left: 1px;

            .fa-sun {
              opacity: 1;

            }

            .fa-moon {
              opacity: 0;

            }
          }

          &.moon {
            left: 31px;

            .fa-sun {
              opacity: 0;
            }

            .fa-moon {
              opacity: 1;
            }
          }

          i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            transition: all .2s;
            background-color: transparent;
            cursor: pointer;

          }
        }
      }


      .info-wrapper {
        border-bottom: 1px solid $primary;
        margin-bottom: 1em;
      }

      .info-wrapper-money {
        border-top: 1px solid $primary;
        margin-top: 1em;
      }

      fieldset {
        display: flex;
        justify-content: space-between;

        input {
          background-color: transparent;
          border: none;
          width: 150px;
        }
      }




      input {
        color: $primary-light;
      }


      ._theme-wrapper {
        background-color: transparent;
        border: 1px solid $primary-light;
        color: black;
        overflow: hidden;
      }

      .info-wrapper {
        border-bottom: 1px solid $primary-light;
      }

      .info-wrapper-money {
        border-top: 1px solid $primary-light;
      }

    }
  }

  .navbar-brand {
    border: 1px solid lighten($primary-light, 0%);
    background: lighten($primary-light, 65%);

    i {
      color: rgb(246, 246, 246);
      text-shadow: 0px 0px 3px $primary-light;
    }
  }

  .logo {

    h3 {

      text-shadow: 1px 2px 2px rgb(255, 255, 255);
    }

  }



  .btn_pages {

    i {
      color: $primary-light;
    }

    &:hover {

      background: lighten($primary-light, 66%);
      color: $primary-light;

    }

    &:active {
      background: $primary-light;

      i {
        color: white;
      }
    }
  }

  //BOTTONI
  //----------------------------------------------------------------------
  ._btn-outline-primary {
    border: 1px solid darken($primary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    color: darken($primary-light, 15%);
    background-color: transparent;

    &:hover {
      border: 1px solid $primary-light;
      padding: .3em .8em;
      color: white;
      background-color: $primary-light;
    }

    &:active {
      border: 1px solid lighten($primary-light, 15%);
      padding: .3em .8em;
      color: white;
      background-color: lighten($primary-light, 15%);
    }
  }

  ._btn-primary {
    border: 1px solid darken($primary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    color: darken(white, 15%);
    background-color: darken($primary-light, 15%);

    &:hover {
      border: 1px solid $primary-light;
      color: white;
      background-color: $primary-light;
    }

    &:active {
      border: 1px solid darken($primary-light, 25%) !important;
      border-color: darken($primary-light, 25%) !important;
      color: rgb(236, 236, 236) !important;
      background-color: darken($primary-light, 25%) !important;
    }
  }

  ._btn-outline-secondary {
    border: 1px solid darken($secondary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    color: darken($secondary-light, 15%);
    background-color: transparent;

    &:hover {
      border: 1px solid $secondary-light;
      color: white;
      background-color: $secondary-light;
    }

    &:active {
      border: 1px solid lighten($secondary-light, 15%);
      border-color: darken($secondary-light, 15%) !important;
      color: white;
      background-color: lighten($secondary-light, 15%);
    }
  }

  ._btn-secondary {
    border: 1px solid darken($secondary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    color: darken(white, 15%);
    background-color: darken($secondary-light, 15%);

    &:hover {
      border: 1px solid $secondary-light;
      color: white;
      background-color: $secondary-light;
    }

    &:active {
      border: 1px solid darken($secondary-light, 25%) !important;
      border-color: darken($secondary-light, 25%) !important;
      color: rgb(236, 236, 236) !important;
      background-color: darken($secondary-light, 25%) !important;
    }
  }

  ._btn-outline-thirdary {
    border: 1px solid darken($thirdary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    color: darken($thirdary-light, 15%);
    background-color: transparent;

    &:hover {
      border: 1px solid $thirdary-light;
      color: white;
      background-color: $thirdary-light;
    }

    &:active {
      border: 1px solid lighten($thirdary-light, 15%);
      border-color: darken($thirdary-light, 15%) !important;
      color: white;
      background-color: lighten($thirdary-light, 15%);
    }
  }

  ._btn-thirdary {
    border: 1px solid darken($thirdary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    color: darken(white, 15%);
    background-color: darken($thirdary-light, 15%);

    &:hover {
      border: 1px solid $thirdary-light;
      color: white;
      background-color: $thirdary-light;
    }

    &:active {
      border: 1px solid darken($thirdary-light, 25%) !important;
      border-color: darken($thirdary-light, 25%) !important;
      color: rgb(236, 236, 236) !important;
      background-color: darken($thirdary-light, 25%) !important;
    }

  }

  ._btn-outline-primary-darkness {
    border: 1px solid darken($primary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    border: 1px solid $primary-light;
    color: $primary-light;
    background-color: transparent;
    box-shadow: 0px 0px 8px #05b0d740;
    text-shadow: 0px 0px 8px white;
    transition: background-color, color, border, box-shadow .4s;

    &:hover {
      border: 1px solid $primary-light;
      color: $primary-light;
      background-color: transparent;
      box-shadow: 0px 0px 8px lighten($primary-light, 10%);
    }

    &:active {
      border: 1px solid lighten($primary-light, 15%);
      border-color: darken($primary-light, 15%) !important;
      color: $primary-light;
      background-color: lighten($primary-light, 15%);
    }
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

  ._btn-outline-secondary-darkness-hover {
    border: 1px solid darken($secondary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    border: 1px solid $secondary-light;
    color: white;
    background-color: darken($secondary-light, 25%);
    box-shadow: 0px 0px 8px lighten($secondary-light, 10%);
    text-shadow: 0px 0px 8px white;
    transition: all 1s;

    &:hover {
      border: 1px solid $secondary-light;
      color: white;
      background-color: darken($secondary-light, 5%);
      box-shadow: 0px 0px 8px lighten($secondary-light, 10%);
    }

    &:active {
      border: 1px solid lighten($secondary-light, 15%);
      border-color: darken($secondary-light, 15%) !important;
      color: white;
      background-color: lighten($secondary-light, 15%);
    }
  }

  ._btn-outline-thirdary-darkness-hover {
    border: 1px solid darken($thirdary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    border: 1px solid $thirdary-light;
    color: $thirdary-light;
    background-color: transparent;
    box-shadow: 0px 0px 8px #ad001142;
    text-shadow: 0px 0px 8px white;
    transition: all 1s;

    &:hover {
      border: 1px solid $thirdary-light;
      color: $thirdary-light;
      background-color: transparent;
      box-shadow: 0px 0px 8px #ad001142;
    }

    &:active {
      border: 1px solid lighten($thirdary-light, 15%);
      border-color: darken($thirdary-light, 15%) !important;
      color: $thirdary-light;
      background-color: lighten($thirdary-light, 15%);
    }
  }

  ._btn-outline-success-darkness-hover {
    border: 1px solid darken($success, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    border: 1px solid $success;
    color: white;
    background-color: darken($success, 25%);
    box-shadow: 0px 0px 8px lighten($success, 10%);
    text-shadow: 0px 0px 8px white;
    transition: all 1s;

    &:hover {
      border: 1px solid $success;
      color: white;
      background-color: darken($success, 5%);
      box-shadow: 0px 0px 8px lighten($success, 10%);
    }

    &:active {
      border: 1px solid lighten($success, 15%);
      border-color: darken($success, 15%) !important;
      color: white;
      background-color: lighten($success, 15%);
    }
  }

  ._btn {
    padding: .3em 1em !important;
    transition: all 1s;
    border-radius: 20px !important;
    background-color: transparent;
    border-color: transparent;
    color: rgb(116, 116, 116);

    &:hover {
      background-color: rgb(237 237 237);
      color: rgb(78 78 78);
    }
  }

  //----------------------------------------------------------------------


  //TESTO e BACKground
  //----------------------------------------------------------------------
  ._text-primary-light {
    color: lighten($primary-light, 25%) !important;
    text-shadow: 1px 1px 8px darken($primary-light, 10%) !important;
  }

  ._text-secondary-light {
    color: lighten($secondary-light, 25%) !important;
    text-shadow: 1px 1px 8px darken($secondary-light, 10%) !important;
  }

  ._text-thirdary-light {
    color: lighten($thirdary-light, 25%) !important;
    text-shadow: 1px 1px 8px darken($thirdary-light, 10%) !important;
  }

  ._text-primary {
    color: $primary-light !important;
  }

  ._bg-primary {
    background: $primary-light !important;
  }

  ._text-secondary {
    color: $secondary-light !important;
  }

  ._bg-secondary {
    background: $secondary-light !important;
  }

  ._text-thirdary {
    color: $thirdary-light !important;
  }

  ._bg-thirdary {
    background: $thirdary-light !important;
  }

  ._border-primary {
    border: 1px solid $primary-light !important;
  }

  ._border-secondary {
    border: 1px solid $secondary-light !important;
  }

  ._border-thirdary {
    border: 1px solid $thirdary-light !important;
  }

  ._border-white {
    border: 1px solid $primary-light !important;
    box-shadow: 0px 0px 4px lighten($primary-light, 0%)
  }

  ._light-primary {
    box-shadow: 0px 0px 8px lighten($primary-light, 20%)
  }

  //----------------------------------------------------------------------

  //TABLE
  //----------------------------------------------------------------------
  ._table-light {
    background-color: $background-light;
    width: 90%;




    thead {
      background-color: lighten($background-light, 3%);

      tr {
        background-color: transparent;
        transition: all .3s;

        &:hover {
          background-color: lighten($background-light, 3%);
        }


        th {
          padding: .6em;
          vertical-align: top;
          font-size: .9em;
          text-align: center;
        }
      }
    }

    tbody {

      th {
        padding: .6em;
        vertical-align: top;
        font-size: .9em;
        text-align: start;
        background-color: lighten($background-light, 3%);
        color: darken(white, 30%);
        transition: all .3s;
        cursor: pointer;

        &:hover {
          color: rgb(53, 53, 53);
          background-color: lighten($background-light, 10%);

        }
      }

      tr {
        background-color: transparent;
        transition: all .5s;

        &:hover {
          background-color: lighten($background-light, 3%);
        }

        td {
          padding: .6em;
          vertical-align: top;
          font-size: .85em;
          text-align: center;

          input {
            background-color: transparent;
            border: none;
            font-size: 1em;
            border: 1px solid transparent;
            transition: all .4s;
            border-radius: 4px;
            padding: .2em;

            &:hover {
              border: 1px solid grey;
            }
          }

          input[type=num] {
            color: $primary-light;
            text-align: right;
          }

        }
      }
    }
  }

  //BARRA DI SCORRIMENTO
  //CHORME
  /* Barra di scorrimento orizzontale */

  ::-webkit-scrollbar-thumb:horizontal,
  ::-webkit-scrollbar-thumb {
    background-color: lighten($primary-light, 65%);
    border: 1px solid $primary-light;
    /* Colore del pulsante di scorrimento */
    border-radius: 6px;
    /* Bordo arrotondato del pulsante di scorrimento */
  }

  ::-webkit-scrollbar-track:horizontal,
  ::-webkit-scrollbar-track {
    background-color: $background-light;
    //border: 1px solid darken($primary, 35%);
    /* Colore di sfondo della barra di scorrimento */
  }


}

//------------------------------------------------
//MODULO SAVE _ RESET
//------------------------------------------------

.light {

  ._modulo_save {
    background-color: $background-light;
    box-shadow: 0px 0px 16px darken(black, 40%);

    &+.bg {
      background-color: rgba(0, 0, 0, 0.9);
    }

    ._icons_animation {
      i {
        color: rgb(50, 50, 50);
      }

      ._freccia {
        color: lighten($primary-light, 40%);
      }

      .circle_wrapper {
        background-color: $primary-light;

        ._circle {
          background: $background-light;
        }
      }
    }

    .messages {
      color: black;
    }

    //RESET
    ._wrapper {

      span {
        color: rgb(82, 82, 82);
      }

      p {
        color: rgb(82, 82, 82);
      }

    }

    ._wrapper-reset {
      ._icons_animation {
        .circle_wrapper {
          background-color: $thirdary-light;
        }

        ._folder-disapper {

          ._disapper {
            animation: 2.6s desapear-light;
            background-image: linear-gradient(to bottom, $background-light 50%, transparent);
          }
        }
      }

      ._conferm {
        color: lighten($thirdary-light, 20%);
        text-shadow: 0px 0px 7px $thirdary-light;
      }

    }
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

  ._btn-outline-secondary-darkness-hover {
    border: 1px solid darken($secondary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    border: 1px solid $secondary-light;
    color: $secondary-light;
    background-color: transparent;
    box-shadow: 0px 0px 8px #1f708352;
    ;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    transition: all 1s;

    &:hover {
      border: 1px solid $secondary-light;
      color: $secondary-light;
      background-color: transparent;
      box-shadow: 0px 0px 8px lighten($secondary-light, 10%);
    }

    &:active {
      border: 1px solid lighten($secondary-light, 15%);
      border-color: transparent;
      color: $secondary-light;
      background-color: lighten($secondary-light, 15%);
    }
  }

  ._btn-outline-thirdary-darkness-hover {
    border: 1px solid darken($thirdary-light, 15%);
    padding: .3em 1em !important;
    border-radius: 20px !important;
    border: 1px solid $thirdary-light;
    color: $thirdary-light;
    background-color: transparent;
    box-shadow: 0px 0px 8px #ad001142;
    text-shadow: 0px 0px 8px white;
    transition: all 1s;

    &:hover {
      border: 1px solid $thirdary-light;
      color: $thirdary-light;
      background-color: transparent;
      box-shadow: 0px 0px 8px #ad0011a5;
    }

    &:active {
      border: 1px solid lighten($thirdary-light, 15%);
      border-color: darken($thirdary-light, 15%) !important;
      color: $thirdary-light;
      background-color: lighten($thirdary-light, 15%);
    }
  }

  ._text-thirdary {
    color: $thirdary-light !important;
  }

}

@keyframes nuvole {
  0% {
    transform: translateX(20%) translateY(-30%);
  }

  100% {
    transform: translateX(-131%) translateY(-30%);
  }
}
</style>
