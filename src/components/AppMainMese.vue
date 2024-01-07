<script>
import { store } from '../store.js';
export default {
  name: 'AppMainMese',

  data() {
    return {
      store,

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
      //2023 - risparmio
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
  },

  created() {
    this.speseProgrammateSet();
    this.calcRisparmio();
    this.focusInput();
  },

  mounted() {

  },
}
</script>

<template>
  <div class="_main" @click="closeRow()" :class="this.store.darkmode ? '' : 'light'">

    <div class="_up">
      <div class="top">
        <div class="_top-left"></div>
        <div class="_top-right"></div>
      </div>
    </div>

    <div class="_down">
      <div class="left">
        <div class="_left-top"></div>
        <div class="_left-bottom"></div>
      </div>
      <div class="right"></div>
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



  .debug {
    border: 1px solid;
  }


  ._up {
    display: flex;
    width: 100%;
    height: 25%;

    .top {
      width: 100%;
      height: 100%;

      display: flex;

      border: 1px solid blue;

      ._top-left {
        width: 40%;
        height: 100%;

        border: 1px solid green;
      }

      ._top-right {
        width: 60%;
        height: 100%;

        border: 1px solid green;
      }
    }
  }

  ._down {
    display: flex;
    width: 100%;
    height: 75%;

    .left {
      width: 65%;
      height: 100%;

      display: flex;
      flex-direction: column;

      border: 1px solid yellow;


      ._left-top,
      ._left-bottom {
        width: 100%;
        height: 50%;

        border: 1px solid rgb(0, 255, 17);
      }
    }

    .right {
      width: 35%;
      height: 100%;

      border: 1px solid red;
    }
  }

}





._main.light {


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
