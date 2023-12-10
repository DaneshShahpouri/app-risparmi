<script>
//import axios from 'axios';
import { store } from './store.js';

// import HelloWorld from './components/HelloWorld.vue'
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

    resetData() {
      this.store.confermReset = true;
      setTimeout(() => {
        this.store.confermReset = false
        //console.log(this.store.confermReset)
      }, 500);
      //console.log(this.store.confermReset)
    }
  },

  created() {



  },

  mounted() {

  },
}
</script>

<template>
  <div class="_app">

    <div class="_top">
      <!-- NAVBAR -->
      <nav class="navbar d-flex justify-content-between navbar-expand-lg navbar logo">

        <div class="navbar d-flex justify-content-between">
          <a class="navbar-brand" href="#">
            <!-- LOGO -->
            <!-- <img alt="Vue logo" src="./assets/logo2.png"> -->
            <i class="fa-solid fa-euro-sign"></i>
            <button class="menubtn" @click="openNav()">III</button>
          </a>
          <ul class=" navbar-nav mr-auto mt-2 mt-lg-0" :class="this.navMenuToggle == 'open' ? '_open' : ''">
            <li class="nav-item " :class="this.store.currentPage == this.store.pages[0] ? 'active-link' : ''"
              @click="this.store.currentPage = this.store.pages[0]">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item" :class="this.store.currentPage == this.store.pages[1] ? 'active-link' : ''"
              @click="this.store.currentPage = this.store.pages[1]">
              <a class="nav-link" href="#">GRAFICI</a>
            </li>
            <li class="nav-item" :class="this.store.currentPage == this.store.pages[2] ? 'active-link' : ''"
              @click="this.store.currentPage = this.store.pages[2]">
              <a class="nav-link " href="#">STATISTICHE</a>
            </li>
          </ul>
          <!-- BORDERNAV -->
          <div class="_border-nav"></div>

        </div>

        <!-- INFO -->
        <div class="_info-input w-25" style="position:relative">

          <div class="_btn_wrapper" @click="changeVariables()"
            :class="this.showNavInfo ? '_border-primary _light-primary' : ''">
            <div class="circle_fisso" :class="this.showNavInfo ? '_border-white' : ''"></div>
            <div class="wrapper-icon" :class="this.showNavInfo ? 'start_animated_gear' : ''">
              <i class="fa-solid fa-gear" :class="this.showNavInfo ? '_color-primary' : ''"></i>
            </div>
          </div>

          <div class="_module-btn" :class="this.showNavInfo ? 'start_animated' : 'end_animated'">

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

              <span style="font-size: .7em; margin-top: 1em; margin-bottom: 1em">Entrate Tot: <span
                  style="font-size: 1.2em;" class="mx-2 _text-secondary">{{
                    this.store.totaleEntrate }} </span> €</span>

              <span style="font-size: .7em; margin-bottom: 1em;">Uscite Tot: <span style="font-size: 1.2em;"
                  class="mx-2 _text-thirdary">{{
                    this.store.totaleSpese }} </span> €</span>

              <span>Credito: <span style="font-size: 1.2em;" class="mx-2 _text-primary">{{
                this.store.totaleRisparmi }} </span> €</span>
            </div>
          </div>
        </div>
      </nav>

      <!-- ANNO -->
      <div class="row container justify-content-around  _btn-container m-auto">
        <button class="col-3 col-md-1 btn px-1 py-0 my-0"
          :class="this.store.anno == 23 ? '_btn-outline-primary-darkness' : 'text-dark _btn'"
          @click="setAnno(23)">2023</button>
        <button class="col-3 col-md-1 btn px-1 py-0 my-0"
          :class="this.store.anno == 24 ? '_btn-outline-primary-darkness' : 'text-dark _btn'"
          @click="setAnno(24)">2024</button>
        <button class="col-3 col-md-1 btn px-1 py-0 my-0"
          :class="this.store.anno == 25 ? '_btn-outline-primary-darkness' : 'text-dark _btn'"
          @click="setAnno(25)">2025</button>
        <button class="col-3 col-md-1 btn px-1 py-0 my-0"
          :class="this.store.anno == 26 ? '_btn-outline-primary-darkness' : 'text-dark _btn'"
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
      <button class="carousel-control-prev" type="button" @click="this.navPage('prev')"
        style="justify-content: start; top: 50%; width: 35px; height: 50px;">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden _text-primary">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="this.navPage('next')"
        style="justify-content: flex-end; top: 50%; width: 35px; height: 50px; ">
        <span class="visually-hidden _text-primary">Next</span>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>

  </div>

  <!-- MODULO SAVE E RESET -->

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
      <span class="text-white">Vuoi davvero cancellare tutti i dati?</span>
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
        width: 287px;
        height: 34px;
        border: 1px solid darken($primary, 40%);
        box-shadow: 0px 0px 5px darken($primary, 20%);
        border-left: none;
        border-radius: 0px 40px 0px 0px;
        top: 12px;
        left: 48px;
        z-index: 0;
      }

      ul {
        position: relative;
        z-index: 2;
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

      position: absolute;
      right: 20px;
      bottom: -15px;

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
      top: 15px;
      opacity: 0;
      right: 20px;
      background-color: darken($background, 0.5%);
      width: 240px;
      padding: 0em 1em;
      border-radius: 10px;
      box-shadow: -3px 4px 10px #00000091;
      max-height: 0px;

      transition: all 1s;

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
      padding: 1em 1em;
      top: 20px;
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
            left: 70px;
            top: -5px;
            background: rgb(20, 22, 28);
            padding: 0.7em 7em;
            z-index: 200;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            overflow: hidden;
            max-height: 200px;
            transition: all 1s;
            box-shadow: 1px 1px 20px black;

            &._open {
              max-height: 0px;
              padding: 0 7em;
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
            left: 70px;
            top: -9px;
            padding: .7em 3em;


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

}
</style>
