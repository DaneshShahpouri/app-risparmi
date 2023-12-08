<script>
//import axios from 'axios';
import { store } from './store.js';

// import HelloWorld from './components/HelloWorld.vue'
import AppMain from './components/AppMain.vue'
//import AppGrafici from './components/AppGrafici.vue'

export default {
  data() {
    return {
      store,
    }
  },

  name: 'App',

  components: {
    // HelloWorld
    AppMain,
    //AppGrafici,
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

    }
  },

  created() {



  },

  mounted() {

  },
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="_app">

    <nav class="navbar navbar-expand-lg navbar-dark logo">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          <!-- LOGO -->
          <!-- <img alt="Vue logo" src="./assets/logo2.png"> -->
          <i class="fa-solid fa-euro-sign"></i>
        </a>
        <ul class=" navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item " :class="this.store.currentPage == this.store.pages[0] ? 'active-link' : ''"
            @click="this.store.currentPage = this.store.pages[0]">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item" :class="this.store.currentPage == this.store.pages[1] ? 'active-link' : ''"
            @click="this.store.currentPage = this.store.pages[1]">
            <a class="nav-link" href="#">Graph</a>
          </li>
          <li class="nav-item" :class="this.store.currentPage == this.store.pages[2] ? 'active-link' : ''"
            @click="this.store.currentPage = this.store.pages[2]">
            <a class="nav-link " href="#">Disabled</a>
          </li>
        </ul>

      </div>

      <!-- INFO -->
      <div class="_info-input w-25" style="position:relative">

        <div class="_btn_wrapper">I</div>

        <div class="_module-btn">

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

          <div class="info-wrapper mt-3 pe-1">
            <span>Credito: <span class="_text-primary">{{
              this.store.totaleRisparmi }} </span> €</span>
          </div>
        </div>



      </div>
    </nav>


    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
      <div class="carousel-inner">
        <div class="carousel-item active" v-if="this.store.currentPage == 'home'">
          <AppMain></AppMain>
        </div>
        <div class="carousel-item active" v-if="this.store.currentPage == 'graph'">
          <!-- <AppGrafici></AppGrafici> -->
        </div>
        <div class="carousel-item active" v-if="this.store.currentPage == 'etc'">
          <img src="" class="d-block w-100" alt="...">
        </div>
      </div>

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
  background-color: rgb(11, 11, 11);
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  padding-top: 0;
  margin: 0;
  overflow: hidden;

  .navbar-brand {
    height: 30px;
    border: 1px solid white;
    border-radius: 50px;
    background: darken($primary, 40%);
    position: relative;
    width: 30px;
    transform: scale(1.4);
    left: 7px;

    i {
      position: absolute;
      font-size: 1.8em;
      top: 1px;
      left: -4px;
      transform: rotate(319deg);
    }
  }

  .logo {
    width: 100%;
    height: 70px;

    position: relative;
    margin: 0;
    margin-bottom: 1em;

    h3 {

      text-shadow: 1px 2px 2px black;
    }

    img {
      height: 30px;
      top: 2px;

    }
  }
}

.navbar-nav {
  .nav-item {
    transition: all .4s;
    border: 2px solid transparent !important;
    border-radius: 20px;
    color: darken($thirdary, 5%) !important;
  }

  .nav-link {
    transition: all .4s;
    border: 2px solid transparent !important;
    border-radius: 20px;
    font-weight: 200;

    a {
      transition: all .5s;
    }

    &:hover {
      color: lighten(white, 5%) !important;

    }
  }

  .active-link {
    color: lighten($primary, 5%) !important;
    font-weight: 600;

    a {
      color: lighten($primary, 5%) !important;
      font-weight: 600;
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

  position: absolute;
  right: 20px;
  bottom: -15px;

  &:hover {
    color: white;
    border: 1px solid rgb(183, 182, 182);
    background-color: rgb(40, 40, 40);
  }

}

._module-btn {
  position: absolute;
  z-index: 20;
  top: 20px;
  right: 20px;
  background-color: rgb(40 40 40);
  width: 240px;
  padding: 1em;
  border-radius: 10px;
  box-shadow: -3px 4px 10px #00000091;

  .info-wrapper {
    border-bottom: 1px solid $primary;
    margin-bottom: 1em;
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
</style>
