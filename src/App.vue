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
    }
  },

  name: 'App',

  components: {
    // HelloWorld
    AppMain,
    AppGrafici,
    AppStatistiche,
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
              <h6 class="">Ciao, <span class=" _text-primary text-uppercase">{{ this.store.data.user.nome }}</span>. </h6>
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
      background-color: rgb(11, 11, 11);
      transition-timing-function: ease-in-out;

      position: absolute;
      right: 20px;
      bottom: -15px;

      &:hover {
        color: white;
        border: 1px solid rgb(183, 182, 182);
        background-color: rgb(11, 11, 11);

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
      background-color: rgb(29 29 29);
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
