<script>
import { store } from '../store.js';
export default {
  name: 'AppMainMeseViewInfo',

  data() {
    return {
      store,
    }
  },

  props: {
    // msg: String
  },
  methods: {

  },

  created() {

  },

  mounted() {

  },
}
</script>

<template>
  <div class="_main-inner">
    <div class="header">
      <h5>Informazioni</h5>
    </div>
    <div class="_main-contain">

      <p style="font-size:.9em; font-weight: 100;">Grazie per aver installato EuroSave 1.0.</p>
      <br>
      <p>Il servizio principale che offre EuroSave è quello di tenere traccia delle spese e delle entrate del tuo
        portafogli.
        Correlato con tante altre funzioni per organizzare i risparmi e impostare gli obbiettivi del mese o a lungo
        termine.
        Scegli le spese fisse per far si che l'applicazione si ricordi per te del tuo stipendio o di un certo abbonamento.
        E' possibile modifcarne la frequenza mensile ed eventualmente cancellarle quando non servono più.
      </p>

      <p>Tieni sotto controllo il tuo andamento finanziario nella sezione 'DETTAGLI'. Qui troverai
        un pannello di controllo per analizzare le spese o la media degli altri mesi tramite impostazioni personalizzate
        che ti aiuteranno
        nel tuo percorso di risparmio. In 'DETTAGLI' potrai anche fissare fino a 6 obiettivi a lungo termine e
        avere un responso grafico dei tuoi progressi.
      </p>
      <p>
        Nella sezione 'GRAFICI' potrai selezionare diverse opzioni di visualizzazione per concentrarti sui risparmi
        annuali o
        sulle spese, a loro volta personalizzabili, oppure in un grafico riassuntivo degli ultimi 12 mesi.
      </p>
      <p>
        La 'HOME' è divisa in due parti principale: la prima rappresenta il singolo mese più altre informazioni
        fondamentali
        che potrai tenere sotto controllo in questa parte come le spese maggiori o le percentuali di spesa in un grafico a
        torta.
        Nella seconda sezione, quella tabellare, avrai un riassunto delle spese e delle entrate e del risparmio
        complessivo sotto forma di tabella.
        Puoi scegliere un mese specifico o un campo da osservare. Selezionare gli anni passati o futuri e salvare o
        resettare i tuoi dati.
      </p>
      <br>
      <p style="font-size:.85em; font-weight: 300;">© 2024 Danesh Shahpouri - EuroSave 1.0.0 </p>

    </div>
    <div class="img_wrapper">
      <div class="logo">
        <i class="fa-solid fa-euro-sign"></i>
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
  max-height: calc(100vh - 250px);
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
    padding: 1em;
    position: relative;
    z-index: 100;
  }

  .img_wrapper {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .2;
    z-index: 2;
    top: 0;
    left: 0;

    .logo {
      width: 500px;
      height: 500px;
      border: 5px solid rgba(35, 137, 201, 0.8431372549);
      position: absolute;
      top: 6em;
      left: 6em;
      transform: translateX(-50%) translateY(-50%) scale(1.4);
      border-radius: 50%;
      box-shadow: 0px 0px 10px #2389c9;
      transform: rotate(320deg);

      i {
        position: absolute;
        font-size: 36em;
        top: 50%;
        left: -17%;
        transform: translateY(-50%);
        text-shadow: 0px 0px 24px #2389c9;
        color: $background;
      }
    }

  }
}


._main.light {
  ._main-inner {

    .img_wrapper {


      .logo {

        border: 5px solid #2389c9d7;

        box-shadow: 0px 0px 10px #2389c9;

        i {

          color: #d6d3d3;
        }
      }

    }
  }

}
</style>
