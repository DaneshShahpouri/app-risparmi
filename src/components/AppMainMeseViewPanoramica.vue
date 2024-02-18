<script>
import { store } from '../store.js';
export default {
  name: 'AppMainMeseViewPanoramica',

  data() {
    return {
      store,
    }
  },

  props: {
    mediaAlimenti: Number,
    mediaAffitto: Number,
    mediaBollette: Number,
    mediaAltreSpese: Number,
  },
  methods: {

  },

  created() {

  },

  mounted() {
    // this.store.data.asp = {
    //   af: 0,
    //   bo: 0,
    //   al: 0,
    //   as: 0
    // }
    console.log(this.store.data)
  },
}
</script>

<template>
  <div class="_main-inner">
    <div class="header">
      <h5>Panoramica</h5>
    </div>
    <div class="_main-contain">

      <div class="_left">
        <div class="_left-scroll">
          <div class="_left-title">
            <h6 class="_text-primary">Impostazioni di Risparmio</h6>
          </div>
          <ul>
            <!-- Singola Card Aspettativa -->
            <li v-for="(val, key) in this.store.data.asp" :key="val">
              <div>{{ 'EL:' + key }}</div>
              <div>{{ 'prezzo ' + val }}</div>
            </li>
            <li class="totale-aspettative">
              <div>{{ 'EL: totale' }}</div>
              <div>{{ 'prezzo totale' }}</div>
            </li>
          </ul>
        </div>
      </div>

      <p>{{ this.mediaAlimenti }}</p>
      <p>{{ this.mediaAffitto }}</p>
      <p>{{ this.mediaBollette }}</p>
      <p>{{ this.mediaAltreSpese }}</p>

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

            &:hover {
              background: rgba($primary, .15);
              box-shadow: inset 0px 0px 19px rgba($primary, .2);
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
