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

      // console.log('this.store.contatorePage : ')
      // console.log(this.store.contatorePage)

      // console.log('this.store.contatorePage : ')
      // console.log(this.store.contatorePage)

      // console.log('prima condizione : ')
      // console.log(this.store.contatorePage == lenghtArray)

      // console.log('length')
      // console.log(JSON.parse(JSON.stringify(this.store.pages)).length)
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
        <a class="navbar-brand" href="#"><img alt="Vue logo" src="./assets/logo2.png"
            style="border:1.5px solid white;border-radius: 5px;"></a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="this.navPage('next')"
        style="justify-content: flex-end; top: 50%; width: 35px; height: 50px; ">
        <span class="visually-hidden">Next</span>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
._app {
  background-color: rgb(11, 11, 11);
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  padding-top: 0;
  margin: 0;
  overflow: hidden;

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
    border: 2px solid rgba(25, 135, 84, 0);
  }
}

.active-link {
  color: white;
  border-left: 2px solid rgba(25, 135, 84, 1) !important;

  a {
    color: white;

  }
}
</style>
