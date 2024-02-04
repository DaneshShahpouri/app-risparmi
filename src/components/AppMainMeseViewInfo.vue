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
        un pannello di controllo per analizzare le spese, la media tramite impostazioni personalizzate che ti aiuteranno
        nel tuo percorso di risparmio. In 'DETTAGLI' potrai anche fissare fino a 6 obbiettivi a lungo termine e
        avere riscontro grafico dei tuoi progressi.
      </p>
      <p>
        Nella sezione 'GRAFICI' potrai selezionare diversi opzioni di visualizzazione per concentrarti sui risparmi
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
  </div>
</template>

<style lang="scss" scoped>
._main-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100vh - 250px);

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
  }
}


._main.light {
  ._main-inner {}

}
</style>
