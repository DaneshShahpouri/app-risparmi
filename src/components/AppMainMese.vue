<script>
import { store } from '../store.js';
import AppMainMeseViewQuestoMese from './AppMainMeseViewQuestoMese.vue'
import AppMainMeseViewScorsoMese from './AppMainMeseViewScorsoMese.vue'
import AppMainMeseViewInfo from './AppMainMeseViewInfo.vue'
export default {
  name: 'AppMainMese',

  data() {
    return {
      store,
      mese: 1,
      meseIndex: 1,
      anno: 2024,
      dynamicProgress: [],

      currentItems: ['entrate', 'affitto', 'bollette', 'alimentari', 'altro', 'risparmi'],
      currentItem: 's',
      currentSpesa: '',
      currentVoce: 'ENTRATE',


      questoMeseIndex: 0,
      annoMedia: 24,
      questoMese: '',
      mesePassato: '',
      mesiPassati: [],
      mesiPassatiIndex: [],

      mediaAffitto: 0,
      mediaBollette: 0,
      mediaAlimentari: 0,
      mediaAltreSpese: 0,
      mediaStipendi: 0,
      mediaRisparmi: 0,

      speseAffittoDodiciMesi: [],
      speseBolletteDodiciMesi: [],
      speseAlimentariDodiciMesi: [],
      speseAltreSpeseDodiciMesi: [],
      stipendiDodiciMesi: [],
      risparmiDodiciMesi: [],

      panelCurrent: 'questomese',

    }
  },

  components: {
    AppMainMeseViewQuestoMese,
    AppMainMeseViewScorsoMese,
    AppMainMeseViewInfo,
  },

  props: {
    // msg: String
  },

  watch: {

  },

  methods: {

    //Calcola le spese programmate
    speseProgrammateSet() {
      let spese = this.store.data.sp;

      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();

      //PROVA_-----------
      //data di oggi = 
      // year = 2024;
      // month = 2;
      //-----------------

      let arrayYear = String(year).slice(2)
      let dateNow = year + '-' + (month + 1) + '-' + day;



      for (let i = 0; i < spese.length; i++) {

        let mesespesa = spese[i].d.split('-')
        mesespesa = parseInt(mesespesa[1]) + 1

        if (!this.store.data.user[arrayYear][month + 1][spese[i].c].mag.art.includes(spese[i].n)) {

          if (spese[i].f == 'om') {

            this.store.data.user[arrayYear][month + 1][spese[i].c].mag.art.push(spese[i].n)
            this.store.data.user[arrayYear][month + 1][spese[i].c].mag.pre.push(spese[i].s)
            this.store.data.user[arrayYear][month + 1][spese[i].c].mag.tot += spese[i].s
            spese[i].d = dateNow
            this.calcVoci(spese[i].c, month + 1)


          } else {
            //Logica per spese programmatiche: si va a cercare il mese di inserimento 
            //in base alla frequenza e poi se corrisponde al mese corrente si aggiunge il dato

            let mesePerInserimento = parseInt(mesespesa) + parseInt(spese[i].f)

            if (mesePerInserimento > 12) {
              mesePerInserimento -= 12
            }

            if (year + '-' + mesePerInserimento + '-1' <= dateNow && year + '-' + mesePerInserimento + '28' >= dateNow) {
              this.store.data.user[arrayYear][month + 1][spese[i].c].mag.art.push(spese[i].n)
              this.store.data.user[arrayYear][month + 1][spese[i].c].mag.pre.push(spese[i].s)
              this.store.data.user[arrayYear][month + 1][spese[i].c].mag.tot += spese[i].s
              spese[i].d = dateNow
              this.calcVoci(spese[i].c, month + 1)

            }

          }

        }

      }

    },

    //calcola il risparmio di tutti gli anni
    calcRisparmio() {
      //console.log('calcola risparmio')
      //20this.anno - risparmio
      this.store.risparmi[23][1] = this.store.data.user[23][1].s.tot - this.store.data.user[23][1].sc.tot - this.store.data.user[23][1].ss.tot - this.store.data.user[23][1].sb.tot - this.store.data.user[23][1].sas.tot;
      this.store.risparmi[23][2] = this.store.data.user[23][2].s.tot - this.store.data.user[23][2].sc.tot - this.store.data.user[23][2].ss.tot - this.store.data.user[23][2].sb.tot - this.store.data.user[23][2].sas.tot;
      this.store.risparmi[23][3] = this.store.data.user[23][3].s.tot - this.store.data.user[23][3].sc.tot - this.store.data.user[23][3].ss.tot - this.store.data.user[23][3].sb.tot - this.store.data.user[23][3].sas.tot;
      this.store.risparmi[23][4] = this.store.data.user[23][4].s.tot - this.store.data.user[23][4].sc.tot - this.store.data.user[23][4].ss.tot - this.store.data.user[23][4].sb.tot - this.store.data.user[23][4].sas.tot;
      this.store.risparmi[23][5] = this.store.data.user[23][5].s.tot - this.store.data.user[23][5].sc.tot - this.store.data.user[23][5].ss.tot - this.store.data.user[23][5].sb.tot - this.store.data.user[23][5].sas.tot;
      this.store.risparmi[23][6] = this.store.data.user[23][6].s.tot - this.store.data.user[23][6].sc.tot - this.store.data.user[23][6].ss.tot - this.store.data.user[23][6].sb.tot - this.store.data.user[23][6].sas.tot;
      this.store.risparmi[23][7] = this.store.data.user[23][7].s.tot - this.store.data.user[23][7].sc.tot - this.store.data.user[23][7].ss.tot - this.store.data.user[23][7].sb.tot - this.store.data.user[23][7].sas.tot;
      this.store.risparmi[23][8] = this.store.data.user[23][8].s.tot - this.store.data.user[23][8].sc.tot - this.store.data.user[23][8].ss.tot - this.store.data.user[23][8].sb.tot - this.store.data.user[23][8].sas.tot;
      this.store.risparmi[23][9] = this.store.data.user[23][9].s.tot - this.store.data.user[23][9].sc.tot - this.store.data.user[23][9].ss.tot - this.store.data.user[23][9].sb.tot - this.store.data.user[23][9].sas.tot;
      this.store.risparmi[23][10] = this.store.data.user[23][10].s.tot - this.store.data.user[23][10].sc.tot - this.store.data.user[23][10].ss.tot - this.store.data.user[23][10].sb.tot - this.store.data.user[23][10].sas.tot;
      this.store.risparmi[23][11] = this.store.data.user[23][11].s.tot - this.store.data.user[23][11].sc.tot - this.store.data.user[23][11].ss.tot - this.store.data.user[23][11].sb.tot - this.store.data.user[23][11].sas.tot;
      this.store.risparmi[23][12] = this.store.data.user[23][12].s.tot - this.store.data.user[23][12].sc.tot - this.store.data.user[23][12].ss.tot - this.store.data.user[23][12].sb.tot - this.store.data.user[23][12].sas.tot;
      //2024 - risparmio
      this.store.risparmi[24][1] = this.store.data.user[24][1].s.tot - this.store.data.user[24][1].sc.tot - this.store.data.user[24][1].ss.tot - this.store.data.user[24][1].sb.tot - this.store.data.user[24][1].sas.tot;
      this.store.risparmi[24][2] = this.store.data.user[24][2].s.tot - this.store.data.user[24][2].sc.tot - this.store.data.user[24][2].ss.tot - this.store.data.user[24][2].sb.tot - this.store.data.user[24][2].sas.tot;
      this.store.risparmi[24][3] = this.store.data.user[24][3].s.tot - this.store.data.user[24][3].sc.tot - this.store.data.user[24][3].ss.tot - this.store.data.user[24][3].sb.tot - this.store.data.user[24][3].sas.tot;
      this.store.risparmi[24][4] = this.store.data.user[24][4].s.tot - this.store.data.user[24][4].sc.tot - this.store.data.user[24][4].ss.tot - this.store.data.user[24][4].sb.tot - this.store.data.user[24][4].sas.tot;
      this.store.risparmi[24][5] = this.store.data.user[24][5].s.tot - this.store.data.user[24][5].sc.tot - this.store.data.user[24][5].ss.tot - this.store.data.user[24][5].sb.tot - this.store.data.user[24][5].sas.tot;
      this.store.risparmi[24][6] = this.store.data.user[24][6].s.tot - this.store.data.user[24][6].sc.tot - this.store.data.user[24][6].ss.tot - this.store.data.user[24][6].sb.tot - this.store.data.user[24][6].sas.tot;
      this.store.risparmi[24][7] = this.store.data.user[24][7].s.tot - this.store.data.user[24][7].sc.tot - this.store.data.user[24][7].ss.tot - this.store.data.user[24][7].sb.tot - this.store.data.user[24][7].sas.tot;
      this.store.risparmi[24][8] = this.store.data.user[24][8].s.tot - this.store.data.user[24][8].sc.tot - this.store.data.user[24][8].ss.tot - this.store.data.user[24][8].sb.tot - this.store.data.user[24][8].sas.tot;
      this.store.risparmi[24][9] = this.store.data.user[24][9].s.tot - this.store.data.user[24][9].sc.tot - this.store.data.user[24][9].ss.tot - this.store.data.user[24][9].sb.tot - this.store.data.user[24][9].sas.tot;
      this.store.risparmi[24][10] = this.store.data.user[24][10].s.tot - this.store.data.user[24][10].sc.tot - this.store.data.user[24][10].ss.tot - this.store.data.user[24][10].sb.tot - this.store.data.user[24][10].sas.tot;
      this.store.risparmi[24][11] = this.store.data.user[24][11].s.tot - this.store.data.user[24][11].sc.tot - this.store.data.user[24][11].ss.tot - this.store.data.user[24][11].sb.tot - this.store.data.user[24][11].sas.tot;
      this.store.risparmi[24][12] = this.store.data.user[24][12].s.tot - this.store.data.user[24][12].sc.tot - this.store.data.user[24][12].ss.tot - this.store.data.user[24][12].sb.tot - this.store.data.user[24][12].sas.tot;
      //2025 - risparmio
      this.store.risparmi[25][1] = this.store.data.user[25][1].s.tot - this.store.data.user[25][1].sc.tot - this.store.data.user[25][1].ss.tot - this.store.data.user[25][1].sb.tot - this.store.data.user[25][1].sas.tot;
      this.store.risparmi[25][2] = this.store.data.user[25][2].s.tot - this.store.data.user[25][2].sc.tot - this.store.data.user[25][2].ss.tot - this.store.data.user[25][2].sb.tot - this.store.data.user[25][2].sas.tot;
      this.store.risparmi[25][3] = this.store.data.user[25][3].s.tot - this.store.data.user[25][3].sc.tot - this.store.data.user[25][3].ss.tot - this.store.data.user[25][3].sb.tot - this.store.data.user[25][3].sas.tot;
      this.store.risparmi[25][4] = this.store.data.user[25][4].s.tot - this.store.data.user[25][4].sc.tot - this.store.data.user[25][4].ss.tot - this.store.data.user[25][4].sb.tot - this.store.data.user[25][4].sas.tot;
      this.store.risparmi[25][5] = this.store.data.user[25][5].s.tot - this.store.data.user[25][5].sc.tot - this.store.data.user[25][5].ss.tot - this.store.data.user[25][5].sb.tot - this.store.data.user[25][5].sas.tot;
      this.store.risparmi[25][6] = this.store.data.user[25][6].s.tot - this.store.data.user[25][6].sc.tot - this.store.data.user[25][6].ss.tot - this.store.data.user[25][6].sb.tot - this.store.data.user[25][6].sas.tot;
      this.store.risparmi[25][7] = this.store.data.user[25][7].s.tot - this.store.data.user[25][7].sc.tot - this.store.data.user[25][7].ss.tot - this.store.data.user[25][7].sb.tot - this.store.data.user[25][7].sas.tot;
      this.store.risparmi[25][8] = this.store.data.user[25][8].s.tot - this.store.data.user[25][8].sc.tot - this.store.data.user[25][8].ss.tot - this.store.data.user[25][8].sb.tot - this.store.data.user[25][8].sas.tot;
      this.store.risparmi[25][9] = this.store.data.user[25][9].s.tot - this.store.data.user[25][9].sc.tot - this.store.data.user[25][9].ss.tot - this.store.data.user[25][9].sb.tot - this.store.data.user[25][9].sas.tot;
      this.store.risparmi[25][10] = this.store.data.user[25][10].s.tot - this.store.data.user[25][10].sc.tot - this.store.data.user[25][10].ss.tot - this.store.data.user[25][10].sb.tot - this.store.data.user[25][10].sas.tot;
      this.store.risparmi[25][11] = this.store.data.user[25][11].s.tot - this.store.data.user[25][11].sc.tot - this.store.data.user[25][11].ss.tot - this.store.data.user[25][11].sb.tot - this.store.data.user[25][11].sas.tot;
      this.store.risparmi[25][12] = this.store.data.user[25][12].s.tot - this.store.data.user[25][12].sc.tot - this.store.data.user[25][12].ss.tot - this.store.data.user[25][12].sb.tot - this.store.data.user[25][12].sas.tot;
      //2026 - risparmio
      this.store.risparmi[26][1] = this.store.data.user[26][1].s.tot - this.store.data.user[26][1].sc.tot - this.store.data.user[26][1].ss.tot - this.store.data.user[26][1].sb.tot - this.store.data.user[26][1].sas.tot;
      this.store.risparmi[26][2] = this.store.data.user[26][2].s.tot - this.store.data.user[26][2].sc.tot - this.store.data.user[26][2].ss.tot - this.store.data.user[26][2].sb.tot - this.store.data.user[26][2].sas.tot;
      this.store.risparmi[26][3] = this.store.data.user[26][3].s.tot - this.store.data.user[26][3].sc.tot - this.store.data.user[26][3].ss.tot - this.store.data.user[26][3].sb.tot - this.store.data.user[26][3].sas.tot;
      this.store.risparmi[26][4] = this.store.data.user[26][4].s.tot - this.store.data.user[26][4].sc.tot - this.store.data.user[26][4].ss.tot - this.store.data.user[26][4].sb.tot - this.store.data.user[26][4].sas.tot;
      this.store.risparmi[26][5] = this.store.data.user[26][5].s.tot - this.store.data.user[26][5].sc.tot - this.store.data.user[26][5].ss.tot - this.store.data.user[26][5].sb.tot - this.store.data.user[26][5].sas.tot;
      this.store.risparmi[26][6] = this.store.data.user[26][6].s.tot - this.store.data.user[26][6].sc.tot - this.store.data.user[26][6].ss.tot - this.store.data.user[26][6].sb.tot - this.store.data.user[26][6].sas.tot;
      this.store.risparmi[26][7] = this.store.data.user[26][7].s.tot - this.store.data.user[26][7].sc.tot - this.store.data.user[26][7].ss.tot - this.store.data.user[26][7].sb.tot - this.store.data.user[26][7].sas.tot;
      this.store.risparmi[26][8] = this.store.data.user[26][8].s.tot - this.store.data.user[26][8].sc.tot - this.store.data.user[26][8].ss.tot - this.store.data.user[26][8].sb.tot - this.store.data.user[26][8].sas.tot;
      this.store.risparmi[26][9] = this.store.data.user[26][9].s.tot - this.store.data.user[26][9].sc.tot - this.store.data.user[26][9].ss.tot - this.store.data.user[26][9].sb.tot - this.store.data.user[26][9].sas.tot;
      this.store.risparmi[26][10] = this.store.data.user[26][10].s.tot - this.store.data.user[26][10].sc.tot - this.store.data.user[26][10].ss.tot - this.store.data.user[26][10].sb.tot - this.store.data.user[26][10].sas.tot;
      this.store.risparmi[26][11] = this.store.data.user[26][11].s.tot - this.store.data.user[26][11].sc.tot - this.store.data.user[26][11].ss.tot - this.store.data.user[26][11].sb.tot - this.store.data.user[26][11].sas.tot;
      this.store.risparmi[26][12] = this.store.data.user[26][12].s.tot - this.store.data.user[26][12].sc.tot - this.store.data.user[26][12].ss.tot - this.store.data.user[26][12].sb.tot - this.store.data.user[26][12].sas.tot;

      //2023 - spese
      this.store.spese[23][1] = this.store.data.user[23][1].sc.tot + this.store.data.user[23][1].ss.tot + this.store.data.user[23][1].sb.tot + this.store.data.user[23][1].sas.tot;
      this.store.spese[23][2] = this.store.data.user[23][2].sc.tot + this.store.data.user[23][2].ss.tot + this.store.data.user[23][2].sb.tot + this.store.data.user[23][2].sas.tot;
      this.store.spese[23][3] = this.store.data.user[23][3].sc.tot + this.store.data.user[23][3].ss.tot + this.store.data.user[23][3].sb.tot + this.store.data.user[23][3].sas.tot;
      this.store.spese[23][4] = this.store.data.user[23][4].sc.tot + this.store.data.user[23][4].ss.tot + this.store.data.user[23][4].sb.tot + this.store.data.user[23][4].sas.tot;
      this.store.spese[23][5] = this.store.data.user[23][5].sc.tot + this.store.data.user[23][5].ss.tot + this.store.data.user[23][5].sb.tot + this.store.data.user[23][5].sas.tot;
      this.store.spese[23][6] = this.store.data.user[23][6].sc.tot + this.store.data.user[23][6].ss.tot + this.store.data.user[23][6].sb.tot + this.store.data.user[23][6].sas.tot;
      this.store.spese[23][7] = this.store.data.user[23][7].sc.tot + this.store.data.user[23][7].ss.tot + this.store.data.user[23][7].sb.tot + this.store.data.user[23][7].sas.tot;
      this.store.spese[23][8] = this.store.data.user[23][8].sc.tot + this.store.data.user[23][8].ss.tot + this.store.data.user[23][8].sb.tot + this.store.data.user[23][8].sas.tot;
      this.store.spese[23][9] = this.store.data.user[23][9].sc.tot + this.store.data.user[23][9].ss.tot + this.store.data.user[23][9].sb.tot + this.store.data.user[23][9].sas.tot;
      this.store.spese[23][10] = this.store.data.user[23][10].sc.tot + this.store.data.user[23][10].ss.tot + this.store.data.user[23][10].sb.tot + this.store.data.user[23][10].sas.tot;
      this.store.spese[23][11] = this.store.data.user[23][11].sc.tot + this.store.data.user[23][11].ss.tot + this.store.data.user[23][11].sb.tot + this.store.data.user[23][11].sas.tot;
      this.store.spese[23][12] = this.store.data.user[23][12].sc.tot + this.store.data.user[23][12].ss.tot + this.store.data.user[23][12].sb.tot + this.store.data.user[23][12].sas.tot;
      //2024 - spese
      this.store.spese[24][1] = this.store.data.user[24][1].sc.tot + this.store.data.user[24][1].ss.tot + this.store.data.user[24][1].sb.tot + this.store.data.user[24][1].sas.tot;
      this.store.spese[24][2] = this.store.data.user[24][2].sc.tot + this.store.data.user[24][2].ss.tot + this.store.data.user[24][2].sb.tot + this.store.data.user[24][2].sas.tot;
      this.store.spese[24][3] = this.store.data.user[24][3].sc.tot + this.store.data.user[24][3].ss.tot + this.store.data.user[24][3].sb.tot + this.store.data.user[24][3].sas.tot;
      this.store.spese[24][4] = this.store.data.user[24][4].sc.tot + this.store.data.user[24][4].ss.tot + this.store.data.user[24][4].sb.tot + this.store.data.user[24][4].sas.tot;
      this.store.spese[24][5] = this.store.data.user[24][5].sc.tot + this.store.data.user[24][5].ss.tot + this.store.data.user[24][5].sb.tot + this.store.data.user[24][5].sas.tot;
      this.store.spese[24][6] = this.store.data.user[24][6].sc.tot + this.store.data.user[24][6].ss.tot + this.store.data.user[24][6].sb.tot + this.store.data.user[24][6].sas.tot;
      this.store.spese[24][7] = this.store.data.user[24][7].sc.tot + this.store.data.user[24][7].ss.tot + this.store.data.user[24][7].sb.tot + this.store.data.user[24][7].sas.tot;
      this.store.spese[24][8] = this.store.data.user[24][8].sc.tot + this.store.data.user[24][8].ss.tot + this.store.data.user[24][8].sb.tot + this.store.data.user[24][8].sas.tot;
      this.store.spese[24][9] = this.store.data.user[24][9].sc.tot + this.store.data.user[24][9].ss.tot + this.store.data.user[24][9].sb.tot + this.store.data.user[24][9].sas.tot;
      this.store.spese[24][10] = this.store.data.user[24][10].sc.tot + this.store.data.user[24][10].ss.tot + this.store.data.user[24][10].sb.tot + this.store.data.user[24][10].sas.tot;
      this.store.spese[24][11] = this.store.data.user[24][11].sc.tot + this.store.data.user[24][11].ss.tot + this.store.data.user[24][11].sb.tot + this.store.data.user[24][11].sas.tot;
      this.store.spese[24][12] = this.store.data.user[24][12].sc.tot + this.store.data.user[24][12].ss.tot + this.store.data.user[24][12].sb.tot + this.store.data.user[24][12].sas.tot;
      //2025 - spese
      this.store.spese[25][1] = this.store.data.user[25][1].sc.tot + this.store.data.user[25][1].ss.tot + this.store.data.user[25][1].sb.tot + this.store.data.user[25][1].sas.tot;
      this.store.spese[25][2] = this.store.data.user[25][2].sc.tot + this.store.data.user[25][2].ss.tot + this.store.data.user[25][2].sb.tot + this.store.data.user[25][2].sas.tot;
      this.store.spese[25][3] = this.store.data.user[25][3].sc.tot + this.store.data.user[25][3].ss.tot + this.store.data.user[25][3].sb.tot + this.store.data.user[25][3].sas.tot;
      this.store.spese[25][4] = this.store.data.user[25][4].sc.tot + this.store.data.user[25][4].ss.tot + this.store.data.user[25][4].sb.tot + this.store.data.user[25][4].sas.tot;
      this.store.spese[25][5] = this.store.data.user[25][5].sc.tot + this.store.data.user[25][5].ss.tot + this.store.data.user[25][5].sb.tot + this.store.data.user[25][5].sas.tot;
      this.store.spese[25][6] = this.store.data.user[25][6].sc.tot + this.store.data.user[25][6].ss.tot + this.store.data.user[25][6].sb.tot + this.store.data.user[25][6].sas.tot;
      this.store.spese[25][7] = this.store.data.user[25][7].sc.tot + this.store.data.user[25][7].ss.tot + this.store.data.user[25][7].sb.tot + this.store.data.user[25][7].sas.tot;
      this.store.spese[25][8] = this.store.data.user[25][8].sc.tot + this.store.data.user[25][8].ss.tot + this.store.data.user[25][8].sb.tot + this.store.data.user[25][8].sas.tot;
      this.store.spese[25][9] = this.store.data.user[25][9].sc.tot + this.store.data.user[25][9].ss.tot + this.store.data.user[25][9].sb.tot + this.store.data.user[25][9].sas.tot;
      this.store.spese[25][10] = this.store.data.user[25][10].sc.tot + this.store.data.user[25][10].ss.tot + this.store.data.user[25][10].sb.tot + this.store.data.user[25][10].sas.tot;
      this.store.spese[25][11] = this.store.data.user[25][11].sc.tot + this.store.data.user[25][11].ss.tot + this.store.data.user[25][11].sb.tot + this.store.data.user[25][11].sas.tot;
      this.store.spese[25][12] = this.store.data.user[25][12].sc.tot + this.store.data.user[25][12].ss.tot + this.store.data.user[25][12].sb.tot + this.store.data.user[25][12].sas.tot;
      //2026 - spese
      this.store.spese[26][1] = this.store.data.user[26][1].sc.tot + this.store.data.user[26][1].ss.tot + this.store.data.user[26][1].sb.tot + this.store.data.user[26][1].sas.tot;
      this.store.spese[26][2] = this.store.data.user[26][2].sc.tot + this.store.data.user[26][2].ss.tot + this.store.data.user[26][2].sb.tot + this.store.data.user[26][2].sas.tot;
      this.store.spese[26][3] = this.store.data.user[26][3].sc.tot + this.store.data.user[26][3].ss.tot + this.store.data.user[26][3].sb.tot + this.store.data.user[26][3].sas.tot;
      this.store.spese[26][4] = this.store.data.user[26][4].sc.tot + this.store.data.user[26][4].ss.tot + this.store.data.user[26][4].sb.tot + this.store.data.user[26][4].sas.tot;
      this.store.spese[26][5] = this.store.data.user[26][5].sc.tot + this.store.data.user[26][5].ss.tot + this.store.data.user[26][5].sb.tot + this.store.data.user[26][5].sas.tot;
      this.store.spese[26][6] = this.store.data.user[26][6].sc.tot + this.store.data.user[26][6].ss.tot + this.store.data.user[26][6].sb.tot + this.store.data.user[26][6].sas.tot;
      this.store.spese[26][7] = this.store.data.user[26][7].sc.tot + this.store.data.user[26][7].ss.tot + this.store.data.user[26][7].sb.tot + this.store.data.user[26][7].sas.tot;
      this.store.spese[26][8] = this.store.data.user[26][8].sc.tot + this.store.data.user[26][8].ss.tot + this.store.data.user[26][8].sb.tot + this.store.data.user[26][8].sas.tot;
      this.store.spese[26][9] = this.store.data.user[26][9].sc.tot + this.store.data.user[26][9].ss.tot + this.store.data.user[26][9].sb.tot + this.store.data.user[26][9].sas.tot;
      this.store.spese[26][10] = this.store.data.user[26][10].sc.tot + this.store.data.user[26][10].ss.tot + this.store.data.user[26][10].sb.tot + this.store.data.user[26][10].sas.tot;
      this.store.spese[26][11] = this.store.data.user[26][11].sc.tot + this.store.data.user[26][11].ss.tot + this.store.data.user[26][11].sb.tot + this.store.data.user[26][11].sas.tot;
      this.store.spese[26][12] = this.store.data.user[26][12].sc.tot + this.store.data.user[26][12].ss.tot + this.store.data.user[26][12].sb.tot + this.store.data.user[26][12].sas.tot;

      this.store.totaleRisparmioMese[23] = parseInt(this.store.risparmi[23][1]) + parseInt(this.store.risparmi[23][2]) + parseInt(this.store.risparmi[23][3]) + parseInt(this.store.risparmi[23][4]) + parseInt(this.store.risparmi[23][5]) + parseInt(this.store.risparmi[23][6]) + parseInt(this.store.risparmi[23][7]) + parseInt(this.store.risparmi[23][8]) + parseInt(this.store.risparmi[23][9]) + parseInt(this.store.risparmi[23][10]) + parseInt(this.store.risparmi[23][11]) + parseInt(this.store.risparmi[23][12])
      this.store.totaleRisparmioMese[24] = parseInt(this.store.risparmi[24][1]) + parseInt(this.store.risparmi[24][2]) + parseInt(this.store.risparmi[24][3]) + parseInt(this.store.risparmi[24][4]) + parseInt(this.store.risparmi[24][5]) + parseInt(this.store.risparmi[24][6]) + parseInt(this.store.risparmi[24][7]) + parseInt(this.store.risparmi[24][8]) + parseInt(this.store.risparmi[24][9]) + parseInt(this.store.risparmi[24][10]) + parseInt(this.store.risparmi[24][11]) + parseInt(this.store.risparmi[24][12])
      this.store.totaleRisparmioMese[25] = parseInt(this.store.risparmi[25][1]) + parseInt(this.store.risparmi[25][2]) + parseInt(this.store.risparmi[25][3]) + parseInt(this.store.risparmi[25][4]) + parseInt(this.store.risparmi[25][5]) + parseInt(this.store.risparmi[25][6]) + parseInt(this.store.risparmi[25][7]) + parseInt(this.store.risparmi[25][8]) + parseInt(this.store.risparmi[25][9]) + parseInt(this.store.risparmi[25][10]) + parseInt(this.store.risparmi[25][11]) + parseInt(this.store.risparmi[25][12])
      this.store.totaleRisparmioMese[26] = parseInt(this.store.risparmi[26][1]) + parseInt(this.store.risparmi[26][2]) + parseInt(this.store.risparmi[26][3]) + parseInt(this.store.risparmi[26][4]) + parseInt(this.store.risparmi[26][5]) + parseInt(this.store.risparmi[26][6]) + parseInt(this.store.risparmi[26][7]) + parseInt(this.store.risparmi[26][8]) + parseInt(this.store.risparmi[26][9]) + parseInt(this.store.risparmi[26][10]) + parseInt(this.store.risparmi[26][11]) + parseInt(this.store.risparmi[26][12])

      this.store.totaleSpeseMese[23] = parseInt(this.store.data.user[23][1].sc.tot) + parseInt(this.store.data.user[23][1].ss.tot) + parseInt(this.store.data.user[23][1].sb.tot) + parseInt(this.store.data.user[23][1].sas.tot) + parseInt(this.store.data.user[23][2].sc.tot) + parseInt(this.store.data.user[23][2].ss.tot) + parseInt(this.store.data.user[23][2].sb.tot) + parseInt(this.store.data.user[23][2].sas.tot) + parseInt(this.store.data.user[23][3].sc.tot) + parseInt(this.store.data.user[23][3].ss.tot) + parseInt(this.store.data.user[23][3].sb.tot) + parseInt(this.store.data.user[23][3].sas.tot) + parseInt(this.store.data.user[23][4].sc.tot) + parseInt(this.store.data.user[23][4].ss.tot) + parseInt(this.store.data.user[23][4].sb.tot) + parseInt(this.store.data.user[23][4].sas.tot) + parseInt(this.store.data.user[23][5].sc.tot) + parseInt(this.store.data.user[23][5].ss.tot) + parseInt(this.store.data.user[23][5].sb.tot) + parseInt(this.store.data.user[23][5].sas.tot) + parseInt(this.store.data.user[23][6].sc.tot) + parseInt(this.store.data.user[23][6].ss.tot) + parseInt(this.store.data.user[23][6].sb.tot) + parseInt(this.store.data.user[23][6].sas.tot) + parseInt(this.store.data.user[23][7].sc.tot) + parseInt(this.store.data.user[23][7].ss.tot) + parseInt(this.store.data.user[23][7].sb.tot) + parseInt(this.store.data.user[23][7].sas.tot) + parseInt(this.store.data.user[23][8].sc.tot) + parseInt(this.store.data.user[23][8].ss.tot) + parseInt(this.store.data.user[23][8].sb.tot) + parseInt(this.store.data.user[23][8].sas.tot) + parseInt(this.store.data.user[23][9].sc.tot) + parseInt(this.store.data.user[23][9].ss.tot) + parseInt(this.store.data.user[23][9].sb.tot) + parseInt(this.store.data.user[23][9].sas.tot) + parseInt(this.store.data.user[23][10].sc.tot) + parseInt(this.store.data.user[23][10].ss.tot) + parseInt(this.store.data.user[23][10].sb.tot) + parseInt(this.store.data.user[23][10].sas.tot) + parseInt(this.store.data.user[23][11].sc.tot) + parseInt(this.store.data.user[23][11].ss.tot) + parseInt(this.store.data.user[23][11].sb.tot) + parseInt(this.store.data.user[23][11].sas.tot) + parseInt(this.store.data.user[23][12].sc.tot) + parseInt(this.store.data.user[23][12].ss.tot) + parseInt(this.store.data.user[23][12].sb.tot) + parseInt(this.store.data.user[23][12].sas.tot)
      this.store.totaleSpeseMese[24] = parseInt(this.store.data.user[24][1].sc.tot) + parseInt(this.store.data.user[24][1].ss.tot) + parseInt(this.store.data.user[24][1].sb.tot) + parseInt(this.store.data.user[24][1].sas.tot) + parseInt(this.store.data.user[24][2].sc.tot) + parseInt(this.store.data.user[24][2].ss.tot) + parseInt(this.store.data.user[24][2].sb.tot) + parseInt(this.store.data.user[24][2].sas.tot) + parseInt(this.store.data.user[24][3].sc.tot) + parseInt(this.store.data.user[24][3].ss.tot) + parseInt(this.store.data.user[24][3].sb.tot) + parseInt(this.store.data.user[24][3].sas.tot) + parseInt(this.store.data.user[24][4].sc.tot) + parseInt(this.store.data.user[24][4].ss.tot) + parseInt(this.store.data.user[24][4].sb.tot) + parseInt(this.store.data.user[24][4].sas.tot) + parseInt(this.store.data.user[24][5].sc.tot) + parseInt(this.store.data.user[24][5].ss.tot) + parseInt(this.store.data.user[24][5].sb.tot) + parseInt(this.store.data.user[24][5].sas.tot) + parseInt(this.store.data.user[24][6].sc.tot) + parseInt(this.store.data.user[24][6].ss.tot) + parseInt(this.store.data.user[24][6].sb.tot) + parseInt(this.store.data.user[24][6].sas.tot) + parseInt(this.store.data.user[24][7].sc.tot) + parseInt(this.store.data.user[24][7].ss.tot) + parseInt(this.store.data.user[24][7].sb.tot) + parseInt(this.store.data.user[24][7].sas.tot) + parseInt(this.store.data.user[24][8].sc.tot) + parseInt(this.store.data.user[24][8].ss.tot) + parseInt(this.store.data.user[24][8].sb.tot) + parseInt(this.store.data.user[24][8].sas.tot) + parseInt(this.store.data.user[24][9].sc.tot) + parseInt(this.store.data.user[24][9].ss.tot) + parseInt(this.store.data.user[24][9].sb.tot) + parseInt(this.store.data.user[24][9].sas.tot) + parseInt(this.store.data.user[24][10].sc.tot) + parseInt(this.store.data.user[24][10].ss.tot) + parseInt(this.store.data.user[24][10].sb.tot) + parseInt(this.store.data.user[24][10].sas.tot) + parseInt(this.store.data.user[24][11].sc.tot) + parseInt(this.store.data.user[24][11].ss.tot) + parseInt(this.store.data.user[24][11].sb.tot) + parseInt(this.store.data.user[24][11].sas.tot) + parseInt(this.store.data.user[24][12].sc.tot) + parseInt(this.store.data.user[24][12].ss.tot) + parseInt(this.store.data.user[24][12].sb.tot) + parseInt(this.store.data.user[24][12].sas.tot)
      this.store.totaleSpeseMese[25] = parseInt(this.store.data.user[25][1].sc.tot) + parseInt(this.store.data.user[25][1].ss.tot) + parseInt(this.store.data.user[25][1].sb.tot) + parseInt(this.store.data.user[25][1].sas.tot) + parseInt(this.store.data.user[25][2].sc.tot) + parseInt(this.store.data.user[25][2].ss.tot) + parseInt(this.store.data.user[25][2].sb.tot) + parseInt(this.store.data.user[25][2].sas.tot) + parseInt(this.store.data.user[25][3].sc.tot) + parseInt(this.store.data.user[25][3].ss.tot) + parseInt(this.store.data.user[25][3].sb.tot) + parseInt(this.store.data.user[25][3].sas.tot) + parseInt(this.store.data.user[25][4].sc.tot) + parseInt(this.store.data.user[25][4].ss.tot) + parseInt(this.store.data.user[25][4].sb.tot) + parseInt(this.store.data.user[25][4].sas.tot) + parseInt(this.store.data.user[25][5].sc.tot) + parseInt(this.store.data.user[25][5].ss.tot) + parseInt(this.store.data.user[25][5].sb.tot) + parseInt(this.store.data.user[25][5].sas.tot) + parseInt(this.store.data.user[25][6].sc.tot) + parseInt(this.store.data.user[25][6].ss.tot) + parseInt(this.store.data.user[25][6].sb.tot) + parseInt(this.store.data.user[25][6].sas.tot) + parseInt(this.store.data.user[25][7].sc.tot) + parseInt(this.store.data.user[25][7].ss.tot) + parseInt(this.store.data.user[25][7].sb.tot) + parseInt(this.store.data.user[25][7].sas.tot) + parseInt(this.store.data.user[25][8].sc.tot) + parseInt(this.store.data.user[25][8].ss.tot) + parseInt(this.store.data.user[25][8].sb.tot) + parseInt(this.store.data.user[25][8].sas.tot) + parseInt(this.store.data.user[25][9].sc.tot) + parseInt(this.store.data.user[25][9].ss.tot) + parseInt(this.store.data.user[25][9].sb.tot) + parseInt(this.store.data.user[25][9].sas.tot) + parseInt(this.store.data.user[25][10].sc.tot) + parseInt(this.store.data.user[25][10].ss.tot) + parseInt(this.store.data.user[25][10].sb.tot) + parseInt(this.store.data.user[25][10].sas.tot) + parseInt(this.store.data.user[25][11].sc.tot) + parseInt(this.store.data.user[25][11].ss.tot) + parseInt(this.store.data.user[25][11].sb.tot) + parseInt(this.store.data.user[25][11].sas.tot) + parseInt(this.store.data.user[25][12].sc.tot) + parseInt(this.store.data.user[25][12].ss.tot) + parseInt(this.store.data.user[25][12].sb.tot) + parseInt(this.store.data.user[25][12].sas.tot)
      this.store.totaleSpeseMese[26] = parseInt(this.store.data.user[26][1].sc.tot) + parseInt(this.store.data.user[26][1].ss.tot) + parseInt(this.store.data.user[26][1].sb.tot) + parseInt(this.store.data.user[26][1].sas.tot) + parseInt(this.store.data.user[26][2].sc.tot) + parseInt(this.store.data.user[26][2].ss.tot) + parseInt(this.store.data.user[26][2].sb.tot) + parseInt(this.store.data.user[26][2].sas.tot) + parseInt(this.store.data.user[26][3].sc.tot) + parseInt(this.store.data.user[26][3].ss.tot) + parseInt(this.store.data.user[26][3].sb.tot) + parseInt(this.store.data.user[26][3].sas.tot) + parseInt(this.store.data.user[26][4].sc.tot) + parseInt(this.store.data.user[26][4].ss.tot) + parseInt(this.store.data.user[26][4].sb.tot) + parseInt(this.store.data.user[26][4].sas.tot) + parseInt(this.store.data.user[26][5].sc.tot) + parseInt(this.store.data.user[26][5].ss.tot) + parseInt(this.store.data.user[26][5].sb.tot) + parseInt(this.store.data.user[26][5].sas.tot) + parseInt(this.store.data.user[26][6].sc.tot) + parseInt(this.store.data.user[26][6].ss.tot) + parseInt(this.store.data.user[26][6].sb.tot) + parseInt(this.store.data.user[26][6].sas.tot) + parseInt(this.store.data.user[26][7].sc.tot) + parseInt(this.store.data.user[26][7].ss.tot) + parseInt(this.store.data.user[26][7].sb.tot) + parseInt(this.store.data.user[26][7].sas.tot) + parseInt(this.store.data.user[26][8].sc.tot) + parseInt(this.store.data.user[26][8].ss.tot) + parseInt(this.store.data.user[26][8].sb.tot) + parseInt(this.store.data.user[26][8].sas.tot) + parseInt(this.store.data.user[26][9].sc.tot) + parseInt(this.store.data.user[26][9].ss.tot) + parseInt(this.store.data.user[26][9].sb.tot) + parseInt(this.store.data.user[26][9].sas.tot) + parseInt(this.store.data.user[26][10].sc.tot) + parseInt(this.store.data.user[26][10].ss.tot) + parseInt(this.store.data.user[26][10].sb.tot) + parseInt(this.store.data.user[26][10].sas.tot) + parseInt(this.store.data.user[26][11].sc.tot) + parseInt(this.store.data.user[26][11].ss.tot) + parseInt(this.store.data.user[26][11].sb.tot) + parseInt(this.store.data.user[26][11].sas.tot) + parseInt(this.store.data.user[26][12].sc.tot) + parseInt(this.store.data.user[26][12].ss.tot) + parseInt(this.store.data.user[26][12].sb.tot) + parseInt(this.store.data.user[26][12].sas.tot)


      this.store.totaleEntrateAnnue[23] = parseInt(this.store.data.user[23][1].s.tot) + parseInt(this.store.data.user[23][2].s.tot) + parseInt(this.store.data.user[23][3].s.tot) + parseInt(this.store.data.user[23][4].s.tot) + parseInt(this.store.data.user[23][5].s.tot) + parseInt(this.store.data.user[23][6].s.tot) + parseInt(this.store.data.user[23][7].s.tot) + parseInt(this.store.data.user[23][8].s.tot) + parseInt(this.store.data.user[23][9].s.tot) + parseInt(this.store.data.user[23][10].s.tot) + parseInt(this.store.data.user[23][11].s.tot) + parseInt(this.store.data.user[23][12].s.tot)
      this.store.totaleEntrateAnnue[24] = parseInt(this.store.data.user[24][1].s.tot) + parseInt(this.store.data.user[24][2].s.tot) + parseInt(this.store.data.user[24][3].s.tot) + parseInt(this.store.data.user[24][4].s.tot) + parseInt(this.store.data.user[24][5].s.tot) + parseInt(this.store.data.user[24][6].s.tot) + parseInt(this.store.data.user[24][7].s.tot) + parseInt(this.store.data.user[24][8].s.tot) + parseInt(this.store.data.user[24][9].s.tot) + parseInt(this.store.data.user[24][10].s.tot) + parseInt(this.store.data.user[24][11].s.tot) + parseInt(this.store.data.user[24][12].s.tot)
      this.store.totaleEntrateAnnue[25] = parseInt(this.store.data.user[25][1].s.tot) + parseInt(this.store.data.user[25][2].s.tot) + parseInt(this.store.data.user[25][3].s.tot) + parseInt(this.store.data.user[25][4].s.tot) + parseInt(this.store.data.user[25][5].s.tot) + parseInt(this.store.data.user[25][6].s.tot) + parseInt(this.store.data.user[25][7].s.tot) + parseInt(this.store.data.user[25][8].s.tot) + parseInt(this.store.data.user[25][9].s.tot) + parseInt(this.store.data.user[25][10].s.tot) + parseInt(this.store.data.user[25][11].s.tot) + parseInt(this.store.data.user[25][12].s.tot)
      this.store.totaleEntrateAnnue[26] = parseInt(this.store.data.user[26][1].s.tot) + parseInt(this.store.data.user[26][2].s.tot) + parseInt(this.store.data.user[26][3].s.tot) + parseInt(this.store.data.user[26][4].s.tot) + parseInt(this.store.data.user[26][5].s.tot) + parseInt(this.store.data.user[26][6].s.tot) + parseInt(this.store.data.user[26][7].s.tot) + parseInt(this.store.data.user[26][8].s.tot) + parseInt(this.store.data.user[26][9].s.tot) + parseInt(this.store.data.user[26][10].s.tot) + parseInt(this.store.data.user[26][11].s.tot) + parseInt(this.store.data.user[26][12].s.tot)



      this.store.totaleEntrate = parseInt(this.store.totaleEntrateAnnue[23]) + parseInt(this.store.totaleEntrateAnnue[24]) + parseInt(this.store.totaleEntrateAnnue[25]) + parseInt(this.store.totaleEntrateAnnue[26])
      this.store.totaleRisparmi = parseInt(this.store.totaleRisparmioMese[23]) + parseInt(this.store.totaleRisparmioMese[24]) + parseInt(this.store.totaleRisparmioMese[25]) + parseInt(this.store.totaleRisparmioMese[26])
      this.store.totaleSpese = parseInt(this.store.totaleSpeseMese[23]) + parseInt(this.store.totaleSpeseMese[24]) + parseInt(this.store.totaleRisparmioMese[25]) + parseInt(this.store.totaleRisparmioMese[26])

      console.log('risaprmio calcolato')
    },

    //calcola il totale
    calcVoci(dato, mese) {
      // console.log(eval(this.store.data.user[this.store.anno][11].s.mag.pre))
      console.log('calcolo Voci')
      let tot = 0;
      if (dato == 's') {
        Object.keys(this.store.data.user[this.store.anno][mese].s.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].s.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.store.anno][mese].s.mag.pre[key]);
        });

        this.store.data.user[this.store.anno][mese].s.tot = tot;
      } else if (dato == 'sb') {
        Object.keys(this.store.data.user[this.store.anno][mese].sb.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].sb.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.store.anno][mese].sb.mag.pre[key]);
        });

        this.store.data.user[this.store.anno][mese].sb.tot = tot;
      } else if (dato == 'sc') {
        Object.keys(this.store.data.user[this.store.anno][mese].sc.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].sc.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.store.anno][mese].sc.mag.pre[key]);
        });


        this.store.data.user[this.store.anno][mese].sc.tot = tot;
      } else if (dato == 'ss') {
        Object.keys(this.store.data.user[this.store.anno][mese].ss.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].ss.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.store.anno][mese].ss.mag.pre[key]);
        });


        this.store.data.user[this.store.anno][mese].ss.tot = tot;
      } else if (dato == 'sas') {
        Object.keys(this.store.data.user[this.store.anno][mese].sas.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].sas.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.store.anno][mese].sas.mag.pre[key]);
        });

        this.store.data.user[this.store.anno][mese].sas.tot = tot;
      }


    },

    //focus automatico su tutto l'input
    focusInput() {
      document.addEventListener('focus', function (event) {
        var focusedElement = event.target;

        if (focusedElement.tagName === 'INPUT') {
          if (focusedElement === window.focusedElement) return;

          window.focusedElement = focusedElement;

          setTimeout(function () {
            focusedElement.select();
          }, 100);
        }
      }, true);
    },

    //setta l'elemento da analizzare
    setCurrentItem(item) {
      if (item != 'risparmi') {

        this.currentItem = item;
        this.currentSpesa = this.store.data.user[this.store.anno][this.meseIndex][item]
      }

      switch (item) {
        case 's':
          this.currentVoce = 'ENTRATE'
          break;

        case 'sc':
          this.currentVoce = 'AFFITTO'
          break;

        case 'sb':
          this.currentVoce = 'BOLLETTE'
          break;

        case 'ss':
          this.currentVoce = 'ALIMENTI'
          break;

        case 'sas':
          this.currentVoce = 'ALTRE SPESE'
          break;

        case 'risparmi':
          this.currentVoce = 'RISPARMI'
          break;

      }
    },

    createEl(mese = this.meseIndex, dato, nuovorecord, nuovoprezzo) {
      if (dato != 'risparmi') {

        // console.log(this.store.data.user[this.store.anno][mese].s.mag)
        if (dato == 's') {
          this.store.data.user[this.store.anno][mese].s.mag.pre[(Object.keys(this.store.data.user[this.store.anno][mese].s.mag.art).length)] = nuovoprezzo
          this.store.data.user[this.store.anno][mese].s.mag.art[(Object.keys(this.store.data.user[this.store.anno][mese].s.mag.art).length)] = nuovorecord
        } else if (dato == 'sb') {
          this.store.data.user[this.store.anno][mese].sb.mag.pre[(Object.keys(this.store.data.user[this.store.anno][mese].sb.mag.art).length)] = nuovoprezzo
          this.store.data.user[this.store.anno][mese].sb.mag.art[(Object.keys(this.store.data.user[this.store.anno][mese].sb.mag.art).length)] = nuovorecord

        } else if (dato == 'sc') {
          this.store.data.user[this.store.anno][mese].sc.mag.pre[(Object.keys(this.store.data.user[this.store.anno][mese].sc.mag.art).length)] = nuovoprezzo
          this.store.data.user[this.store.anno][mese].sc.mag.art[(Object.keys(this.store.data.user[this.store.anno][mese].sc.mag.art).length)] = nuovorecord

        } else if (dato == 'ss') {
          this.store.data.user[this.store.anno][mese].ss.mag.pre[(Object.keys(this.store.data.user[this.store.anno][mese].ss.mag.art).length)] = nuovoprezzo
          this.store.data.user[this.store.anno][mese].ss.mag.art[(Object.keys(this.store.data.user[this.store.anno][mese].ss.mag.art).length)] = nuovorecord

        } else if (dato == 'sas') {
          this.store.data.user[this.store.anno][mese].sas.mag.pre[(Object.keys(this.store.data.user[this.store.anno][mese].sas.mag.art).length)] = nuovoprezzo
          this.store.data.user[this.store.anno][mese].sas.mag.art[(Object.keys(this.store.data.user[this.store.anno][mese].sas.mag.art).length)] = nuovorecord
        }

      }

    },

    //cancella una spesa
    deleteEl(mese = this.meseIndex, dato, index) {
      //console.log(this.store.data.user[this.store.anno][mese].s.mag)
      if (dato == 's') {
        this.store.data.user[this.store.anno][mese].s.mag.pre.splice(index, 1)
        this.store.data.user[this.store.anno][mese].s.mag.art.splice(index, 1)
      } else if (dato == 'sb') {
        this.store.data.user[this.store.anno][mese].sb.mag.pre.splice(index, 1)
        this.store.data.user[this.store.anno][mese].sb.mag.art.splice(index, 1)
      } else if (dato == 'sc') {
        this.store.data.user[this.store.anno][mese].sc.mag.pre.splice(index, 1)
        this.store.data.user[this.store.anno][mese].sc.mag.art.splice(index, 1)
      } else if (dato == 'ss') {
        this.store.data.user[this.store.anno][mese].ss.mag.pre.splice(index, 1)
        this.store.data.user[this.store.anno][mese].ss.mag.art.splice(index, 1)
      } else if (dato == 'sas') {
        this.store.data.user[this.store.anno][mese].sas.mag.pre.splice(index, 1)
        this.store.data.user[this.store.anno][mese].sas.mag.art.splice(index, 1)
      }

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

    setDodiciMesi(quantita = 12) {
      let index = this.store.currentMonth + 1
      let mesiindex = this.store.currentMonth

      this.mesiPassati = []

      this.mediaAffitto = 0;
      this.mediaBollette = 0;
      this.mediaAlimentari = 0;
      this.mediaAltreSpese = 0;
      this.mediaStipendi = 0;
      this.mediaRisparmi = 0;

      let anno = this.store.currentYear.toString().substring(2, 4)
      let contatore = 0;

      for (let i = quantita; i > 0; i--) {

        if (this.store.data.user[anno][index] != undefined) {

          this.stipendiDodiciMesi.push(this.store.data.user[anno][index].s.tot)
          this.mesiPassati.push(this.store.mesi[mesiindex] + ' 20' + anno)
          if (mesiindex < 10) {

            this.mesiPassatiIndex.push('20' + anno + '-0' + (mesiindex + 1))
          } else {

            this.mesiPassatiIndex.push('20' + anno + '-' + (mesiindex + 1))
          }

          this.speseAffittoDodiciMesi.push(this.store.data.user[anno][index].sc.tot)
          this.speseBolletteDodiciMesi.push(this.store.data.user[anno][index].sb.tot)
          this.speseAlimentariDodiciMesi.push(this.store.data.user[anno][index].ss.tot)
          this.speseAltreSpeseDodiciMesi.push(this.store.data.user[anno][index].sas.tot)

          let risparmio = this.store.data.user[anno][index].s.tot - (this.store.data.user[anno][index].sc.tot + this.store.data.user[anno][index].sb.tot + this.store.data.user[anno][index].ss.tot + this.store.data.user[anno][index].sas.tot)
          this.risparmiDodiciMesi.push(risparmio)


          if (this.store.data.user[anno][index].s.tot != 0) {

            this.mediaStipendi += this.store.data.user[anno][index].s.tot;
            this.mediaAffitto += this.store.data.user[anno][index].sc.tot;
            this.mediaBollette += this.store.data.user[anno][index].sb.tot;
            this.mediaAlimentari += this.store.data.user[anno][index].ss.tot;
            this.mediaAltreSpese += this.store.data.user[anno][index].sas.tot;
            this.mediaRisparmi += risparmio;
            contatore++;
          }


        }

        if (index == 1) {
          index = 12
          anno--
        } else {
          index--
        }

        if (mesiindex == 0) {
          mesiindex = 11
        } else {
          mesiindex--
        }

      }


      if (this.mediaRisparmi != 0) {

        this.mediaRisparmi = this.mediaRisparmi / contatore
      } else {
        this.mediaRisparmi = 0
      }
      if (this.mediaStipendi != 0) {

        this.mediaStipendi = this.mediaStipendi / contatore
      } else {
        this.mediaStipendi = 0
      }
      if (this.mediaAffitto != 0) {

        this.mediaAffitto = this.mediaAffitto / contatore
      } else {
        this.mediaAffitto = 0
      }
      if (this.mediaBollette != 0) {

        this.mediaBollette = this.mediaBollette / contatore
      } else {
        this.mediaBollette = 0
      }
      if (this.mediaAlimentari != 0) {

        this.mediaAlimentari = this.mediaAlimentari / contatore
      } else {
        this.mediaAlimentari = 0
      }
      if (this.mediaAltreSpese != 0) {

        this.mediaAltreSpese = this.mediaAltreSpese / contatore
      } else {
        this.mediaAltreSpese = 0
      }



      this.setPercentuali()
    },

    setPercentuali() {

      // STIPENDIO
      let stipendioDif = this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].s.tot - this.mediaStipendi
      this.percStipendio = (stipendioDif / this.mediaStipendi) * 100
      this.percStipendio = Math.round(this.percStipendio * 100) / 100
      if (this.mediaStipendi == 0) {
        this.percStipendio = 0
      }

      //AFFITTO
      let affittoDif = this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].sc.tot - this.mediaAffitto
      this.percAffitto = (affittoDif / this.mediaAffitto) * 100
      this.percAffitto = Math.round(this.percAffitto * 100) / 100
      if (this.mediaAffitto == 0) {
        this.percAffitto = 0
      }

      //BOLLETTE
      let bolletteDif = this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].sb.tot - this.mediaBollette
      this.percBollette = (bolletteDif / this.mediaBollette) * 100
      this.percBollette = Math.round(this.percBollette * 100) / 100
      if (this.mediaBollette == 0) {
        this.percBollette = 0
      }

      //ALIMENTARI
      let alimentariDif = this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].ss.tot - this.mediaAlimentari
      this.percAlimentari = (alimentariDif / this.mediaAlimentari) * 100
      this.percAlimentari = Math.round(this.percAlimentari * 100) / 100
      if (this.mediaAlimentari == 0) {
        this.percAlimentari = 0
      }

      //ALIMENTARI
      let altreSpeseDif = this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].sas.tot - this.mediaAltreSpese
      this.percAltreSpese = (altreSpeseDif / this.mediaAltreSpese) * 100
      this.percAltreSpese = Math.round(this.percAltreSpese * 100) / 100
      if (this.mediaAltreSpese == 0) {
        this.percAltreSpese = 0
      }

      //RISPARMI
      let risparmiDif = (this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].s.tot -
        (this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].sc.tot +
          this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].sb.tot +
          this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].ss.tot +
          this.store.data.user[this.annoMedia][this.questoMeseIndex + 1].sas.tot)) - this.mediaRisparmi

      this.percRisparmi = (risparmiDif / this.mediaRisparmi) * 100
      this.percRisparmi = Math.round(this.percRisparmi * 100) / 100
      if (this.mediaRisparmi == 0) {
        this.percRisparmi = 0
      }

      // console.log('AFFITTO:' + this.percAffitto)
      // console.log('Bollette:' + this.percBollette)
      // console.log('Alimentari:' + this.percAlimentari)
      // console.log('AltreSpese:' + this.percAltreSpese)
      // console.log('Stipendio:' + this.percStipendio)
      // console.log('Risparmi:' + this.percRisparmi)
    },

    // Funzione per salvare myData in localStorage
    save() {
      const myData = this.store.data
      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      //console.log('myData salvato con successo!');
    },
  },

  created() {
    this.speseProgrammateSet();
    this.calcRisparmio();
    this.focusInput();
    this.setCurrentItem('s');
    this.setPerc();
    this.setDodiciMesi();
  },

  mounted() {
    let date = new Date;
    this.store.anno = date.getFullYear() - 2000;
    this.anno = date.getFullYear()
    this.mese = this.store.mesi[date.getMonth()]
    this.meseIndex = date.getMonth() + 1
    this.currentVoce = "RISPARMI"

    this.setCurrentItem('risparmi');

    this.calcRisparmio();


  },
}
</script>

<template>
  <div class="_main" :class="this.store.darkmode ? '' : 'light'">

    <!-- SIDEBAR -->
    <div class="sidebar-wrapper">

      <div class="top-side">

        <div class="upper">

          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('s')" :class="this.currentVoce == 'ENTRATE' ? 'active' : ''">
              <i class="fa-solid fa-money-bill"></i>
            </div>

            <div class="_info">

              <span>ENTRATE</span>
              <div class="_soldi-btn">
                <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].s.tot.toFixed(2)
                }}</span><span>€</span>
              </div>
            </div>
          </div>

        </div>

        <div class="downer">



          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('sc')"
              :class="this.currentVoce == 'AFFITTO' ? 'active' : ''">
              <i class="fa-solid fa-house "></i>
            </div>

            <div class="_info">

              <span>AFFITTO</span>
              <div class="_soldi-btn">
                <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].sc.tot.toFixed(2)
                }}</span><span>€</span>
              </div>
            </div>
          </div>

          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('sb')"
              :class="this.currentVoce == 'BOLLETTE' ? 'active' : ''">
              <i class="fa-solid fa-newspaper"></i>
            </div>

            <div class="_info">

              <span>BOLLETTE</span>
              <div class="_soldi-btn">
                <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].sb.tot.toFixed(2)
                }}</span><span>€</span>
              </div>
            </div>
          </div>

          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('ss')"
              :class="this.currentVoce == 'ALIMENTI' ? 'active' : ''">
              <i class="fa-solid fa-utensils"></i>
            </div>

            <div class="_info">

              <span>ALIMENTI</span>
              <div class="_soldi-btn">
                <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].ss.tot.toFixed(2)
                }}</span><span>€</span>
              </div>
            </div>
          </div>

          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('sas')"
              :class="this.currentVoce == 'ALTRE SPESE' ? 'active' : ''">
              <i class="fa-solid fa-martini-glass-citrus me-2"></i>
            </div>

            <div class="_info">

              <span>ALTRO</span>
              <div class="_soldi-btn">
                <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].sas.tot.toFixed(2)
                }}</span><span>€</span>
              </div>
            </div>
          </div>


        </div>

      </div>

      <div class="bottom-side">

        <!-- SingleOption -->
        <div class="_sidebar-option">

          <div class="icon-wrapper" @click="setCurrentItem('risparmi')"
            :class="this.currentVoce == 'RISPARMI' ? 'active' : ''">
            <i class="fa-solid fa-coins"></i>
          </div>

          <div class="_info">

            <span>RISPARMI</span>
            <div class="_soldi-btn">
              <span class="_text-primary">{{ this.store.risparmi[this.anno - 2000][this.meseIndex].toFixed(2)
              }}</span><span>€</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- MAIN -->
    <div class="_main-container">

      <!-- MESE ANNO -->
      <div class="_main-top-title">

        <div class="_left">
          <h1>
            {{ this.mese }}
          </h1>
          <span>{{ this.anno }}</span>
        </div>

        <div class="_right">
          <!-- Percentuale risparmio Header -->
          <div class="_percent-header"
            :class="(this.perRisparmi == 0 ? 'neutro' : (this.percRisparmi >= 95 ? 'pos-gold' : (this.percRisparmi > 0 ? (this.percRisparmi > 75 ? 'pos-super' : (this.percRisparmi > 40 ? 'pos' : 'pos-light')) : (this.percRisparmi < -75 ? 'neg-super' : (this.percRisparmi < -40 ? 'neg' : 'neg-light')))))">
            <i class="fa-solid fa-arrow-trend-up" v-if="this.percRisparmi > 0"></i>
            <i class="fa-solid fa-arrow-trend-down" v-else></i>


            <div class="_perc">

              <div class="d-flex align-items-center" style="font-size:2em">

                <span>{{ (this.percRisparmi > 0 ? '+ ' : ' ') }}</span>
                <span class="">{{ (this.percRisparmi > 100 || this.percRisparmi < -100 ? '100' : this.percRisparmi)
                }}</span>
                    <span>%</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- INFO DI DESTRA -->
      <div class="_main-bottom-container">

        <!-- VOCI DI SPESA -->
        <div class="left-side-voci">
          <!-- ICONE sfondo -->
          <div id="icon-bg">
            <i class="fa-solid fa-money-bill" v-if="this.currentVoce == 'ENTRATE'"></i>
            <i class="fa-solid fa-house" v-if="this.currentVoce == 'AFFITTO'"></i>
            <i class="fa-solid fa-newspaper" v-if="this.currentVoce == 'BOLLETTE'"></i>
            <i class="fa-solid fa-utensils" v-if="this.currentVoce == 'ALIMENTI'"></i>
            <i class="fa-solid fa-martini-glass-citrus" v-if="this.currentVoce == 'ALTRE SPESE'"></i>
            <i class="fa-solid fa-coins" v-if="this.currentVoce == 'RISPARMI'"></i>
          </div>

          <div class="text-voce-corrente">

            <h6 class="_bold">{{ this.currentVoce }}</h6>

            <!-- VOCE E TOTALE ANTEPRIMA -->
            <div>
              <span class="_text-primary _extra-bold">{{ this.currentVoce == 'RISPARMI' ? this.store.risparmi[this.anno -
                2000][this.meseIndex].toFixed(2) : this.store.data.user[this.anno -
                  2000][this.meseIndex][this.currentItem].tot.toFixed(2)
              }}</span><span>€</span>
            </div>

            <!-- MEDIA ANTEPRIMA  -->
            <div class="_media-mensile" style="margin:0; padding:0; font-size: .8em;">
              <span><i class="fa-solid fa-gauge"></i></span>
              <span class="_text-thirdary" v-if="this.currentVoce == 'RISPARMI'">{{
                this.mediaRisparmi.toFixed(2) }}</span>
              <span class="_text-thirdary" v-if="this.currentVoce == 'ENTRATE'">{{
                this.mediaStipendi.toFixed(2) }}</span>
              <span class="_text-thirdary" v-if="this.currentVoce == 'BOLLETTE'">{{
                this.mediaBollette.toFixed(2) }}</span>
              <span class="_text-thirdary" v-if="this.currentVoce == 'AFFITTO'">{{
                this.mediaAffitto.toFixed(2) }}</span>
              <span class="_text-thirdary" v-if="this.currentVoce == 'ALIMENTI'">{{
                this.mediaAlimentari.toFixed(2) }}</span>
              <span class="_text-thirdary" v-if="this.currentVoce == 'ALTRE SPESE'">{{
                this.mediaAltreSpese.toFixed(2) }}</span>
              <span>€</span>

              <span class="_hover-badge">Media annuale</span>
            </div>

          </div>

          <ul class="elenco-voci" v-if="this.currentVoce != 'RISPARMI'">

            <li v-for="(el, key) in this.currentSpesa.mag.art " :key="key">

              <div class="btn-delete-wrapper">
                <button class="btn-delete"
                  @click.stop="deleteEl(this.meseIndex, this.currentItem, key), calcVoci(this.currentItem, this.meseIndex), calcRisparmio(), save()">
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>

              <div class="name-input">
                <input type="text" @change="calcVoci(this.currentItem, this.meseIndex), calcRisparmio(), save()"
                  v-model="this.store.data.user[this.store.anno][this.meseIndex][this.currentItem].mag.art[key]">
              </div>

              <div class="prezzo-input">
                <input type="num" @change="calcVoci(this.currentItem, this.meseIndex), calcRisparmio(), save()"
                  v-model="this.store.data.user[this.store.anno][this.meseIndex][this.currentItem].mag.pre[key]">
                <span>€</span>
              </div>

            </li>

          </ul>

          <div class="w-100" v-else>

            <h6 class="text-center _text-primary text-uppercase"><i class="fa-solid fa-award"></i> Obiettivi
            </h6>

            <ul v-if="this.store.data.o.length > 0">

              <li class="list-ob mb-3" v-for="(el, key) in   this.store.data.o   " :key="key">

                <div class="list-info">

                  <span>{{ el.n }}</span>

                  <span>
                    <span>{{ el.p }}</span>
                    <span>€</span>
                  </span>

                </div>

                <div class="perc-container">

                  <span>{{ (this.dynamicProgress[key] > 100 ? '100' : parseInt(this.dynamicProgress[key])) + '%' }}</span>

                  <div class="_perc-wrapper">
                    <div class="_bar"></div>
                    <div class="_bar-fu"
                      :style="this.dynamicProgress[key] >= 100 ? 'width:100%; background:gold' : 'width :' + this.dynamicProgress[key] + '%'">
                    </div>
                  </div>

                </div>

              </li>


            </ul>

            <p v-else class="text-center">Nessun Obbiettivo aggiunto</p>

          </div>

          <div class="btn-wrapper">
            <button class="btn _btn-outline-primary-darkness-hover" v-if="this.currentVoce != 'RISPARMI'"
              @click.stop="createEl(this.meseIndex, this.currentItem, 'Nuovo', 0); save()">
              <i class="fa-solid fa-circle-plus"></i>
            </button>

            <div class="d-flex flex-column justify-content-center align-items-center" v-else>
              <span class="_bold text-center">Disponibile:</span>
              <span>
                <span class="_text-primary">{{ this.store.totaleRisparmi.toFixed(2) }}</span>
                <span>€</span>
              </span>
            </div>
          </div>

        </div>

        <!-- NOME - INFO - CONTATORI -->
        <div class="right-side-info">

          <!-- navbar MAin -->
          <div class="nome-spesa-wrapper">

            <!-- Questo mese -->
            <div class="_single-icon" :class="this.panelCurrent == 'questomese' ? 'active' : ''"
              @click="this.panelCurrent = 'questomese'">

              <div class="_icon-wrapper">
                <i class="fa-regular fa-calendar-check"></i>
              </div>

              <div class="_text">
                <span>Questo Mese</span>
              </div>

            </div>

            <!-- mese Passato -->
            <div class="_single-icon" :class="this.panelCurrent == 'scorsomese' ? 'active' : ''"
              @click="this.panelCurrent = 'scorsomese'">

              <div class="_icon-wrapper">
                <i class="fa-regular fa-calendar-minus"></i>
              </div>

              <div class="_text">
                <span>Scorso Mese</span>
              </div>

            </div>

            <!-- Info -->
            <div class="_single-icon" :class="this.panelCurrent == 'info' ? 'active' : ''"
              @click="this.panelCurrent = 'info'">

              <div class="_icon-wrapper">
                <i class="fa-solid fa-info"></i>
              </div>

              <div class="_text">
                <span>Informazioni</span>
              </div>

            </div>

          </div>

          <!-- INFOBOX -->
          <div class="info-box-wrapper">
            <AppMainMeseViewQuestoMese v-if="this.panelCurrent == 'questomese'"></AppMainMeseViewQuestoMese>
            <AppMainMeseViewScorsoMese v-if="this.panelCurrent == 'scorsomese'"></AppMainMeseViewScorsoMese>
            <AppMainMeseViewInfo v-if="this.panelCurrent == 'info'"></AppMainMeseViewInfo>
          </div>



        </div>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._main {
  height: calc(100vh - 100px);
  width: 95%;
  margin: 0 auto;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin: 0 auto;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;



  .debug {
    border: 1px solid;
  }


  //sidebar
  .sidebar-wrapper {
    width: 100px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .top-side {
      width: 70px;
      height: 70%;
      display: flex;
      flex-direction: column;
      gap: 2em;

      .upper {
        width: 100%;
        height: 80px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      .downer {
        width: 100%;
        height: calc(100% - 160px);

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
      }

    }

    .bottom-side {
      width: 70px;
      height: 100px;
    }


    ._sidebar-option {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


      ._info {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        padding: 0;
        margin-top: -5px;

        ._soldi-btn {
          display: flex;

          &>span {
            display: flex;
          }
        }

        span {
          font-size: .7em;
          font-weight: 700;
        }
      }

      .icon-wrapper {
        width: 50px;
        height: 50px;
        position: relative;
        background-color: rgba($primary, .1);
        border-radius: 50%;
        cursor: pointer;
        margin-bottom: .4em;
        border: 2px solid transparent;
        transition: all .5s;

        &:hover {
          background-color: rgba($primary, .3);
          transition: all .1s;
        }


        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%) scale(.9);
          cursor: pointer;
          opacity: .3;
          transition: all .5s;
        }

        &.active {
          // border: 2px solid white;
          border: 2px solid $primary;
          background-color: $primary;

          i {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%) scale(1.3);
            animation: .3s zoom;
          }
        }
      }
    }
  }

  @keyframes zoom {
    0% {
      transform: translateX(-50%) translateY(-50%) scale(.9);
    }

    100% {
      transform: translateX(-50%) translateY(-50%) scale(1.5);
    }
  }

  //fine sidebar


  //main
  ._main-container {
    width: calc(100% - 100px);
    height: 100%;

    display: flex;
    flex-direction: column;

    ._main-top-title {
      width: 100%;
      height: 75px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: lighten($background, 4%);
      border-radius: 12px;


      ._left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 5px;
        height: 75px;

        h1 {
          margin-left: 10px;
          margin-bottom: 0;
          text-transform: uppercase;
          font-weight: 900;
          display: inline-block;
          padding: 0;
          height: 35px;
          padding-top: 5px;

        }

        span {
          margin-left: 13px;
          padding-top: 5px;
          display: flex;
        }

      }

      ._right {
        display: flex;
        flex-direction: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        height: 75px;


        ._percent-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          /* padding: 0.5em; */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-right: 1em;
          box-shadow: 1px 1px 5px #00000057;
          position: relative;
          color: rgb(236, 230, 230);

          i {
            text-shadow: 0px 0px 2px black;
            color: white;
          }

          &.pos {
            background: rgba($success, 70%);
            color: rgba($success, 70%);
          }

          &.pos-light {
            background: rgba($success, 30%);
            color: rgba($success, 30%);
          }

          &.pos-super {
            background: $success;
            color: $success;
          }

          &.pos-gold {
            background: rgb(223, 197, 0);
            color: rgb(223, 197, 0);
          }


          &.neg {
            background: rgba($primary, 70%);
            color: rgba($primary, 70%);
          }

          &.neg-light {
            background: rgba($thirdary, 30%);
            color: rgba($thirdary, 30%);
          }

          &.neg-super {
            background: $thirdary;
            color: $thirdary;
          }

          ._perc {
            width: 130px;
            height: 100%;
            font-size: 0.7em;
            position: absolute;
            bottom: -3px;
            right: 0px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            opacity: 0;
            transition: all 0.5s;

            border-radius: 8px;
            font-weight: 900;
            text-shadow: 0px 0px 2px #0000004a;


          }

          &:hover {
            ._perc {
              opacity: 1;
              right: 50px;
            }
          }
        }
      }

    }

    ._main-bottom-container {
      width: 100%;
      height: 100%;

      display: flex;

      .left-side-voci {
        width: calc(25% - 10px);
        height: calc(100% - 10px);
        position: relative;

        padding: .5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: .5em;

        background-color: lighten($background, 4%);
        margin: 5px;
        border-radius: 12px;

        overflow: hidden;

        #icon-bg {
          position: absolute;
          z-index: 1;
          top: 27px;
          left: 40px;
          opacity: .7;
          transform: rotate(350deg);


          i {
            transform: scale(6);
            opacity: .2
          }
        }


        .text-voce-corrente {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: calc(65px - 0em);
          position: relative;
          z-index: 2;
          width: 100%;

          ._media-mensile {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .2em;
            position: relative;

            &:hover {
              span {
                text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.402);
                opacity: 1;
              }

              ._hover-badge {
                bottom: 20px;
                opacity: 1;
              }
            }

            ._hover-badge {
              position: absolute;
              bottom: 0px;
              opacity: 0;
              background-color: rgb(12 12 12);
              color: #c2c2c2;
              display: block;
              padding: .2em 1em;
              z-index: 40;
              border-radius: 10px;
            }

            span {
              font-size: .9em;
              font-weight: 600;
              opacity: .7;
              transition: all .4s;

            }
          }

          h6 {
            margin: 0;
            padding: 0;
          }
        }

        .elenco-voci {
          width: 100%;
          height: calc((76vh - 120px) - 1em);
          overflow-y: auto;
          padding: 0;
          margin: 0;
          background-color: $background;
          padding-top: 1em;
          padding-left: .5em;
          border-radius: 8px;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 1em;

          list-style-type: none;
          position: relative;
          z-index: 2;

          li {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: .5em;

            .btn-delete-wrapper {
              width: calc(30px - .5em);

              button {
                background-color: darken($thirdary, 10%);
                border: none;
                width: 25px;
                height: 25px;
                border-radius: 20px;
                transition: all .4s;

                &:hover {
                  background-color: darken($thirdary, 0%);
                }
              }
            }

            .name-input {
              width: calc(60% - .5em - 30px);


              input[type=text] {
                width: 100%;
                border: none;
                background-color: transparent;
                padding: .2em .6em;
                border-radius: 16px;
                background-color: lighten($background, 8%);

                &:hover {
                  background-color: lighten($background, 10%);
                }
              }
            }

            .prezzo-input {
              width: calc(40% - .5em);
              display: flex;
              border-radius: 16px;
              background-color: lighten($background, 8%);
              padding: .2em .6em;
              justify-content: flex-end;


              &:hover {
                background-color: lighten($background, 10%);
              }

              input[type=num] {
                border: none;
                background-color: transparent;
                width: calc(100% - 10px);
                text-align: end;
                padding-right: .4em;
                color: $primary;
              }
            }

          }
        }

        ul {
          display: flex;
          flex-direction: column;
          list-style-type: none;
          padding: .5em;
          width: 100%;

          .list-ob {
            display: flex;
            flex-direction: column;
            width: 100%;
            border-radius: 12px;
            padding: .5em;
            background: rgba(128, 128, 128, 0.091);
            opacity: .8;
            transition: all .4s;

            &:hover {
              opacity: 1;
            }

            .list-info {
              display: flex;
              flex-direction: row;
              gap: .5em;
              align-items: center;
              justify-content: space-between;

              span {
                text-transform: uppercase;
                font-weight: 300;
              }
            }

            .perc-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            ._perc-wrapper {
              position: relative;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;

              ._bar {
                width: 100%;
                height: 5px;
                background-color: rgba($primary, 0.4);
              }

              ._bar-fu {
                height: 5px;
                background-color: rgba($primary, 0.9);
                position: absolute;
                left: 0px;
              }
            }

          }
        }

        .btn-wrapper {
          width: 100%;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            position: relative;
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }

          i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
        }

      }

      .right-side-info {
        width: 75%;
        height: 100%;
        padding: .5em;


        display: flex;
        flex-direction: column;
        gap: .2em;

        .nome-spesa-wrapper {
          width: 100%;
          height: 50px;
          background-color: lighten($background, 4%);
          border-radius: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: .2em;

          ._single-icon {
            height: 50px;
            width: 50px;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            ._icon-wrapper {
              cursor: pointer;
              width: 35px;
              height: 35px;
              background: rgba($primary, 0.4);
              border-radius: 50%;
              position: relative;
              transition: all .4s;

              i {
                cursor: pointer;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                color: white
              }
            }

            ._text {
              width: 100px;
              position: absolute;
              top: 25px;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(0, 0, 0, 0.527);
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transition: all .4s;

              span {
                font-size: .75em;
                width: 100%;
                text-align: center;
                color: rgb(124, 124, 124);
              }

            }

            &:hover {
              ._icon-wrapper {

                background: rgba($primary, 0.6);
              }

              ._text {
                top: 45px;
                opacity: 1;
              }
            }
          }

          ._single-icon.active {
            ._icon-wrapper {
              background: $primary;
            }
          }
        }

        .info-box-wrapper {
          height: calc(100% - 50px);
          width: 100%;
          border-radius: 8px;
          background-color: lighten($background, 4%);

        }

      }
    }
  }

  //fine main

}


@media only screen and (max-width: 1100px) {
  ._main {
    height: calc(100% - 40px);
    width: 95%;
    justify-content: center;

    .sidebar-wrapper {
      width: 65px;
    }

  }
}

@media only screen and (max-width: 900px) {
  ._main {
    height: calc(100% - 40px);
    width: 95%;
    justify-content: center;

    .sidebar-wrapper {
      width: 100%;
      height: 65px;
      flex-direction: row;

      .bottom-side,
      .top-side {
        width: 70px;
        height: 65px;
        flex-direction: row;
        gap: 0em;

        .downer,
        .upper {
          width: 80px;
          height: 65px;

          flex-direction: row;
          gap: 0.4em;
        }

      }


      ._sidebar-option {
        width: 70px;
        height: 65px;
        position: relative;

        ._info {
          position: absolute;
          bottom: -10px;
          background: #000000bb;
          border-radius: 6px;
          opacity: 0;
          transition: all .4s;
          padding: .2em;
        }

        &:hover {
          ._info {
            bottom: -20px;
            opacity: 1;
          }
        }

      }
    }

    ._main-container {
      width: 100%;
      height: calc(100% - 65px);
    }

  }
}


@media only screen and (max-width: 680px) {
  ._main {


    .sidebar-wrapper {
      flex-direction: row;
      padding: 0;



      .bottom-side {
        display: flex;
        align-items: center;
        width: 60px;
        height: 60px;
      }

      .top-side {
        width: 60px;
        height: 60px;
      }


      ._sidebar-option {
        width: 50px;
        height: 50px;
        position: relative;

        .icon-wrapper {
          width: 40px;
          height: 40px;
        }

      }
    }

    ._main-container {

      ._main-top-title {

        ._right {

          ._percent-header {

            ._perc {
              opacity: 1;
              right: 50px;
              font-size: 0.5em;
            }
          }
        }
      }

      ._main-bottom-container {
        width: calc(100% - 10px);
        flex-direction: column;

        .left-side-voci {
          width: 100%;
          height: 100%;
          min-height: 550px;
          padding: 1em;
        }

        .right-side-info {
          width: 100%;
          height: 100%;
          min-height: 550px;
        }
      }

    }
  }
}


._main.light {

  //sidebar
  .sidebar-wrapper {


    ._sidebar-option {

      .icon-wrapper {
        background-color: rgba($primary-light, .1);
        //border: 1px solid;
        transition: all .5s;


        &:hover {
          background-color: rgba($primary-light, .3)
        }



        i {
          color: rgb(44, 43, 43);
          transition: .6s;
        }

        &.active {
          background-color: $primary-light;

          i {
            color: white;
          }
        }

      }
    }
  }

  //fine sidebar

  ._main-container {

    ._main-top-title {
      background: darken($background-light, 5%);
    }

    ._main-bottom-container {

      .left-side-voci {
        background-color: darken($background-light, 4%);

        .elenco-voci {
          background: $background-light;

          li {
            .btn-delete-wrapper {

              button {
                background-color: lighten($thirdary, 7%);


                &:hover {
                  background-color: darken($thirdary, 5%);
                }
              }
            }

            .name-input {

              input[type=text] {
                background-color: lighten($background-light, 8%);
                background-color: transparent;
                color: $primary-light;
                border: 1px solid $color-dark;

                &:hover {
                  background-color: lighten($background-light, 3%);
                }
              }
            }

            .prezzo-input {
              background-color: lighten($background-light, 8%);
              background-color: transparent;
              border: 1px solid $color-dark;



              &:hover {
                background-color: lighten($background-light, 3%);
              }

              input[type=num] {
                background-color: transparent;

              }
            }

          }
        }

      }

      .right-side-info {
        .nome-spesa-wrapper {
          background-color: darken($background-light, 4%);
        }

        .info-box-wrapper {
          background-color: darken($background-light, 4%);
        }
      }

    }
  }


  ._text-primary {
    color: $primary-light !important;
  }

  ._text-secondary {
    color: $secondary-light !important;
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

  //TABLE
  //----------------------------------------------------------------------
  ._table-light {
    background-color: $background-light;
    width: 90%;

    thead {
      background-color: darken($background-light, 1%);

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
        background-color: darken($background-light, 3%);
        color: darken(rgb(244, 244, 244), 30%);
        transition: all .3s;
        cursor: pointer;

        &:hover {
          color: rgb(95, 95, 95);
          background-color: lighten($background-light, 10%);

        }
      }

      tr {
        background-color: transparent;
        transition: all .5s;


        &:nth-child(odd) {
          background-color: $alternative-backgroundColor-light;
        }

        &:hover {
          background-color: darken($background-light, 5%);
        }


        td {
          padding: .6em;
          vertical-align: top;
          font-size: .85em;
          text-align: center;
          border: 1px solid #dddddd;


          input {
            background-color: transparent;
            border: none;
            font-size: 1em;
            border: 1px solid transparent;
            transition: all .4s;
            border-radius: 4px;
            padding: .2em;
            color: black;

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

.prova {
  color: rgba(1, 1, 4, 0.454)
}
</style>
