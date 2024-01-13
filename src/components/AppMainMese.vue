<script>
import { store } from '../store.js';
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

    }
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

      //console.log('risaprmio calcolato')
    },

    //calcola il totale
    calcVoci(dato, mese) {
      // console.log(eval(this.store.data.user[this.store.anno][11].s.mag.pre))

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
    this.setPerc()
  },

  mounted() {
    let date = new Date;
    this.store.anno = date.getFullYear() - 2000;
    this.anno = date.getFullYear()
    this.mese = this.store.mesi[date.getMonth()]
    this.meseIndex = date.getMonth() + 1

    this.setCurrentItem('s');

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

            <div class="icon-wrapper" @click="setCurrentItem('s')">
              <i class="fa-solid fa-money-bill"></i>
            </div>

            <span>ENTRATE</span>
            <div class="_soldi-btn">
              <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].s.tot.toFixed(2)
              }}</span><span>€</span>
            </div>
          </div>

        </div>

        <div class="downer">



          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('sc')">
              <i class="fa-solid fa-house "></i>
            </div>

            <span>AFFITTO</span>
            <div class="_soldi-btn">
              <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].sc.tot.toFixed(2)
              }}</span><span>€</span>
            </div>
          </div>

          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('sb')">
              <i class="fa-solid fa-newspaper"></i>
            </div>

            <span>BOLLETTE</span>
            <div class="_soldi-btn">
              <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].sb.tot.toFixed(2)
              }}</span><span>€</span>
            </div>
          </div>

          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('ss')">
              <i class="fa-solid fa-utensils"></i>
            </div>

            <span>ALIMENTI</span>
            <div class="_soldi-btn">
              <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].ss.tot.toFixed(2)
              }}</span><span>€</span>
            </div>
          </div>

          <!-- SingleOption -->
          <div class="_sidebar-option">

            <div class="icon-wrapper" @click="setCurrentItem('sas')">
              <i class="fa-solid fa-martini-glass-citrus me-2"></i>
            </div>

            <span>ALTRO</span>
            <div class="_soldi-btn">
              <span class="_text-primary">{{ this.store.data.user[this.anno - 2000][this.meseIndex].sas.tot.toFixed(2)
              }}</span><span>€</span>
            </div>
          </div>


        </div>

      </div>

      <div class="bottom-side">

        <!-- SingleOption -->
        <div class="_sidebar-option">

          <div class="icon-wrapper" @click="setCurrentItem('risparmi')">
            <i class="fa-solid fa-coins"></i>
          </div>

          <span>RISPARMI</span>
          <div class="_soldi-btn">
            <span class="_text-primary">{{ this.store.risparmi[this.anno - 2000][this.meseIndex].toFixed(2)
            }}</span><span>€</span>
          </div>
        </div>
      </div>

    </div>

    <!-- MAIN -->
    <div class="_main-container">

      <!-- MESE ANNO -->
      <div class="_main-top-title">
        <h1>
          {{ this.mese }}
        </h1>
        <span>{{ this.anno }}</span>
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

          </div>

          <ul class="elenco-voci" v-if="this.currentVoce != 'RISPARMI'">

            <li v-for="(el, key) in this.currentSpesa.mag.art " :key="key">

              <div class="btn-delete-wrapper">
                <button class="btn-delete" @click.stop="deleteEl(this.meseIndex, this.currentItem, key)">
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>

              <div class="name-input">
                <input type="text" @change="calcRisparmio(), calcVoci(this.currentItem, this.meseIndex), save()"
                  v-model="this.store.data.user[this.store.anno][this.meseIndex][this.currentItem].mag.art[key]">
              </div>

              <div class="prezzo-input">
                <input type="num" @change="calcRisparmio(), calcVoci(this.currentItem, this.meseIndex), save()"
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

            <p v-else>Nessun Obbiettivo aggiunto</p>
          </div>

          <div class="btn-wrapper">
            <button class="btn _btn-outline-primary-darkness-hover" v-if="this.currentVoce != 'RISPARMI'"
              @click.stop="createEl(this.meseIndex, this.currentItem, 'Nuovo', 0); save()">
              <i class="fa-solid fa-circle-plus"></i>
            </button>
          </div>

        </div>

        <!-- NOME - INFO - CONTATORI -->
        <div class="right-side-info">

          <!-- NOME DELLA SPESA -->
          <div class="nome-spesa-wrapper">

          </div>

          <!-- INFOBOX -->
          <div class="info-box-wrapper"></div>

          <!-- RIASSUNTO SPESE -->
          <div class="riassunto-spese"></div>

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
  width: 95%;
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

      .icon-wrapper {
        width: 50px;
        height: 50px;
        position: relative;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transition: all .3s;
        cursor: pointer;
        margin-bottom: .4em;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transition: all .1s;
        }

        &:active {
          background-color: rgba(143, 143, 143, 0.2);
        }

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          cursor: pointer;
        }
      }
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
      flex-direction: column;
      align-items: flex-start;
      background-color: lighten($background, 4%);
      border-radius: 12px;
      margin-bottom: 5px;

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
          height: calc(60px - 1em);
          position: relative;
          z-index: 2;

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

        border: 1px solid rgb(84, 148, 11);

        display: flex;
        flex-direction: column;

        .nome-spesa-wrapper {
          width: 100%;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.1);

        }

        .info-box-wrapper {
          height: calc(100% - 120px);
          width: 100%;

          border: 1px solid rgb(46, 46, 135);
        }

        .riassunto-spese {
          width: 100%;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  //fine main

}





._main.light {

  //sidebar
  .sidebar-wrapper {


    ._sidebar-option {

      .icon-wrapper {
        background-color: darken($background-light, 2%);
        border: 1px solid;


        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        &:active {
          background-color: darken($background-light, 20%);
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
</style>
