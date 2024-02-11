<script>
import { store } from '../store.js';
export default {
  name: 'AppMain',

  data() {
    return {
      store,

    }
  },

  props: {
    // msg: String
  },

  watch: {
    'store.confermReset': function () {
      if (this.store.confermReset) {
        this.resetData();
      }
    },
  },

  methods: {
    console(parametro) {
      console.log(parametro);
      console.log(this.store.totaleEntrateAnnue[23]);
    },
    prop() {
      event.stopPropagation()

    },
    // Funzione per salvare myData in localStorage
    save() {
      const myData = this.store.data;
      this.store.data.dm = this.store.darkmode;
      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      //console.log('myData salvato con successo!');
    },
    //Reset
    // resetData() {

    //   const myData = this.store.tempData

    //   // Salva myData in localStorage
    //   localStorage.setItem('myData', JSON.stringify(myData));
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1000);
    // },
    resetData() {

      const myData = {
        user: {
          nome: '',
          cognome: '',
          eta: 0,
          sesso: 'M',
          23: {
            1: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            2: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            3: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            4: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            5: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            6: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            7: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            8: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            9: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            10: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            11: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            12: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            }

          },
          24: {
            1: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            2: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            3: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            4: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            5: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            6: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            7: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            8: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            9: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            10: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            11: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            12: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            }

          },
          25: {
            1: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            2: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            3: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            4: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            5: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            6: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            7: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            8: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            9: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            10: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            11: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            12: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            }

          },
          26: {
            1: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            2: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            3: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            4: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            5: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            6: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            7: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            8: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            9: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            10: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            11: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            },
            12: {
              s: { mag: { art: [], pre: [] }, tot: 0 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: [], pre: [] }, tot: 0 },
            }

          },
        },
        'dm': true,
        'o': [],
        'sp': [],
        'day': 1,

      }

      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    },
    //visualizza la riga al click
    allowRow(index) {
      let elements = document.querySelectorAll('tr._myrow')


      for (let element of elements) {
        if (element.classList.contains('view')) {
          if (element != elements[index]) {
            element.classList.remove('view');
          }
        }
      }

      elements[index].classList.toggle("view");
    },
    allowRowSmall(index) {
      let elements = document.querySelectorAll('div._myrow')


      for (let element of elements) {
        if (element.classList.contains('view')) {
          if (element != elements[index]) {
            element.classList.remove('view');
          }
        }
      }
      elements[index].classList.toggle("view");

    },
    closeRow() {
      let elements = document.getElementsByClassName('_myrow')

      for (let element of elements) {
        if (element.classList.contains('view')) {
          element.classList.remove('view');
        }
      }

    },
    //Aggiungi una spesa
    createEl(mese, dato, nuovorecord, nuovoprezzo) {
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

    },
    //cancella una spesa
    deleteEl(mese, dato, index) {
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
    //calcola il risparmio di tutti gli anni
    calcRisparmio2() {
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

      this.store.totaleRisparmioMese[23] = parseFloat(this.store.risparmi[23][1]) + parseFloat(this.store.risparmi[23][2]) + parseFloat(this.store.risparmi[23][3]) + parseFloat(this.store.risparmi[23][4]) + parseFloat(this.store.risparmi[23][5]) + parseFloat(this.store.risparmi[23][6]) + parseFloat(this.store.risparmi[23][7]) + parseFloat(this.store.risparmi[23][8]) + parseFloat(this.store.risparmi[23][9]) + parseFloat(this.store.risparmi[23][10]) + parseFloat(this.store.risparmi[23][11]) + parseFloat(this.store.risparmi[23][12])
      this.store.totaleRisparmioMese[24] = parseFloat(this.store.risparmi[24][1]) + parseFloat(this.store.risparmi[24][2]) + parseFloat(this.store.risparmi[24][3]) + parseFloat(this.store.risparmi[24][4]) + parseFloat(this.store.risparmi[24][5]) + parseFloat(this.store.risparmi[24][6]) + parseFloat(this.store.risparmi[24][7]) + parseFloat(this.store.risparmi[24][8]) + parseFloat(this.store.risparmi[24][9]) + parseFloat(this.store.risparmi[24][10]) + parseFloat(this.store.risparmi[24][11]) + parseFloat(this.store.risparmi[24][12])
      this.store.totaleRisparmioMese[25] = parseFloat(this.store.risparmi[25][1]) + parseFloat(this.store.risparmi[25][2]) + parseFloat(this.store.risparmi[25][3]) + parseFloat(this.store.risparmi[25][4]) + parseFloat(this.store.risparmi[25][5]) + parseFloat(this.store.risparmi[25][6]) + parseFloat(this.store.risparmi[25][7]) + parseFloat(this.store.risparmi[25][8]) + parseFloat(this.store.risparmi[25][9]) + parseFloat(this.store.risparmi[25][10]) + parseFloat(this.store.risparmi[25][11]) + parseFloat(this.store.risparmi[25][12])
      this.store.totaleRisparmioMese[26] = parseFloat(this.store.risparmi[26][1]) + parseFloat(this.store.risparmi[26][2]) + parseFloat(this.store.risparmi[26][3]) + parseFloat(this.store.risparmi[26][4]) + parseFloat(this.store.risparmi[26][5]) + parseFloat(this.store.risparmi[26][6]) + parseFloat(this.store.risparmi[26][7]) + parseFloat(this.store.risparmi[26][8]) + parseFloat(this.store.risparmi[26][9]) + parseFloat(this.store.risparmi[26][10]) + parseFloat(this.store.risparmi[26][11]) + parseFloat(this.store.risparmi[26][12])

      this.store.totaleSpeseMese[23] = parseFloat(this.store.data.user[23][1].sc.tot) + parseFloat(this.store.data.user[23][1].ss.tot) + parseFloat(this.store.data.user[23][1].sb.tot) + parseFloat(this.store.data.user[23][1].sas.tot) + parseFloat(this.store.data.user[23][2].sc.tot) + parseFloat(this.store.data.user[23][2].ss.tot) + parseFloat(this.store.data.user[23][2].sb.tot) + parseFloat(this.store.data.user[23][2].sas.tot) + parseFloat(this.store.data.user[23][3].sc.tot) + parseFloat(this.store.data.user[23][3].ss.tot) + parseFloat(this.store.data.user[23][3].sb.tot) + parseFloat(this.store.data.user[23][3].sas.tot) + parseFloat(this.store.data.user[23][4].sc.tot) + parseFloat(this.store.data.user[23][4].ss.tot) + parseFloat(this.store.data.user[23][4].sb.tot) + parseFloat(this.store.data.user[23][4].sas.tot) + parseFloat(this.store.data.user[23][5].sc.tot) + parseFloat(this.store.data.user[23][5].ss.tot) + parseFloat(this.store.data.user[23][5].sb.tot) + parseFloat(this.store.data.user[23][5].sas.tot) + parseFloat(this.store.data.user[23][6].sc.tot) + parseFloat(this.store.data.user[23][6].ss.tot) + parseFloat(this.store.data.user[23][6].sb.tot) + parseFloat(this.store.data.user[23][6].sas.tot) + parseFloat(this.store.data.user[23][7].sc.tot) + parseFloat(this.store.data.user[23][7].ss.tot) + parseFloat(this.store.data.user[23][7].sb.tot) + parseFloat(this.store.data.user[23][7].sas.tot) + parseFloat(this.store.data.user[23][8].sc.tot) + parseFloat(this.store.data.user[23][8].ss.tot) + parseFloat(this.store.data.user[23][8].sb.tot) + parseFloat(this.store.data.user[23][8].sas.tot) + parseFloat(this.store.data.user[23][9].sc.tot) + parseFloat(this.store.data.user[23][9].ss.tot) + parseFloat(this.store.data.user[23][9].sb.tot) + parseFloat(this.store.data.user[23][9].sas.tot) + parseFloat(this.store.data.user[23][10].sc.tot) + parseFloat(this.store.data.user[23][10].ss.tot) + parseFloat(this.store.data.user[23][10].sb.tot) + parseFloat(this.store.data.user[23][10].sas.tot) + parseFloat(this.store.data.user[23][11].sc.tot) + parseFloat(this.store.data.user[23][11].ss.tot) + parseFloat(this.store.data.user[23][11].sb.tot) + parseFloat(this.store.data.user[23][11].sas.tot) + parseFloat(this.store.data.user[23][12].sc.tot) + parseFloat(this.store.data.user[23][12].ss.tot) + parseFloat(this.store.data.user[23][12].sb.tot) + parseFloat(this.store.data.user[23][12].sas.tot)
      this.store.totaleSpeseMese[24] = parseFloat(this.store.data.user[24][1].sc.tot) + parseFloat(this.store.data.user[24][1].ss.tot) + parseFloat(this.store.data.user[24][1].sb.tot) + parseFloat(this.store.data.user[24][1].sas.tot) + parseFloat(this.store.data.user[24][2].sc.tot) + parseFloat(this.store.data.user[24][2].ss.tot) + parseFloat(this.store.data.user[24][2].sb.tot) + parseFloat(this.store.data.user[24][2].sas.tot) + parseFloat(this.store.data.user[24][3].sc.tot) + parseFloat(this.store.data.user[24][3].ss.tot) + parseFloat(this.store.data.user[24][3].sb.tot) + parseFloat(this.store.data.user[24][3].sas.tot) + parseFloat(this.store.data.user[24][4].sc.tot) + parseFloat(this.store.data.user[24][4].ss.tot) + parseFloat(this.store.data.user[24][4].sb.tot) + parseFloat(this.store.data.user[24][4].sas.tot) + parseFloat(this.store.data.user[24][5].sc.tot) + parseFloat(this.store.data.user[24][5].ss.tot) + parseFloat(this.store.data.user[24][5].sb.tot) + parseFloat(this.store.data.user[24][5].sas.tot) + parseFloat(this.store.data.user[24][6].sc.tot) + parseFloat(this.store.data.user[24][6].ss.tot) + parseFloat(this.store.data.user[24][6].sb.tot) + parseFloat(this.store.data.user[24][6].sas.tot) + parseFloat(this.store.data.user[24][7].sc.tot) + parseFloat(this.store.data.user[24][7].ss.tot) + parseFloat(this.store.data.user[24][7].sb.tot) + parseFloat(this.store.data.user[24][7].sas.tot) + parseFloat(this.store.data.user[24][8].sc.tot) + parseFloat(this.store.data.user[24][8].ss.tot) + parseFloat(this.store.data.user[24][8].sb.tot) + parseFloat(this.store.data.user[24][8].sas.tot) + parseFloat(this.store.data.user[24][9].sc.tot) + parseFloat(this.store.data.user[24][9].ss.tot) + parseFloat(this.store.data.user[24][9].sb.tot) + parseFloat(this.store.data.user[24][9].sas.tot) + parseFloat(this.store.data.user[24][10].sc.tot) + parseFloat(this.store.data.user[24][10].ss.tot) + parseFloat(this.store.data.user[24][10].sb.tot) + parseFloat(this.store.data.user[24][10].sas.tot) + parseFloat(this.store.data.user[24][11].sc.tot) + parseFloat(this.store.data.user[24][11].ss.tot) + parseFloat(this.store.data.user[24][11].sb.tot) + parseFloat(this.store.data.user[24][11].sas.tot) + parseFloat(this.store.data.user[24][12].sc.tot) + parseFloat(this.store.data.user[24][12].ss.tot) + parseFloat(this.store.data.user[24][12].sb.tot) + parseFloat(this.store.data.user[24][12].sas.tot)
      this.store.totaleSpeseMese[25] = parseFloat(this.store.data.user[25][1].sc.tot) + parseFloat(this.store.data.user[25][1].ss.tot) + parseFloat(this.store.data.user[25][1].sb.tot) + parseFloat(this.store.data.user[25][1].sas.tot) + parseFloat(this.store.data.user[25][2].sc.tot) + parseFloat(this.store.data.user[25][2].ss.tot) + parseFloat(this.store.data.user[25][2].sb.tot) + parseFloat(this.store.data.user[25][2].sas.tot) + parseFloat(this.store.data.user[25][3].sc.tot) + parseFloat(this.store.data.user[25][3].ss.tot) + parseFloat(this.store.data.user[25][3].sb.tot) + parseFloat(this.store.data.user[25][3].sas.tot) + parseFloat(this.store.data.user[25][4].sc.tot) + parseFloat(this.store.data.user[25][4].ss.tot) + parseFloat(this.store.data.user[25][4].sb.tot) + parseFloat(this.store.data.user[25][4].sas.tot) + parseFloat(this.store.data.user[25][5].sc.tot) + parseFloat(this.store.data.user[25][5].ss.tot) + parseFloat(this.store.data.user[25][5].sb.tot) + parseFloat(this.store.data.user[25][5].sas.tot) + parseFloat(this.store.data.user[25][6].sc.tot) + parseFloat(this.store.data.user[25][6].ss.tot) + parseFloat(this.store.data.user[25][6].sb.tot) + parseFloat(this.store.data.user[25][6].sas.tot) + parseFloat(this.store.data.user[25][7].sc.tot) + parseFloat(this.store.data.user[25][7].ss.tot) + parseFloat(this.store.data.user[25][7].sb.tot) + parseFloat(this.store.data.user[25][7].sas.tot) + parseFloat(this.store.data.user[25][8].sc.tot) + parseFloat(this.store.data.user[25][8].ss.tot) + parseFloat(this.store.data.user[25][8].sb.tot) + parseFloat(this.store.data.user[25][8].sas.tot) + parseFloat(this.store.data.user[25][9].sc.tot) + parseFloat(this.store.data.user[25][9].ss.tot) + parseFloat(this.store.data.user[25][9].sb.tot) + parseFloat(this.store.data.user[25][9].sas.tot) + parseFloat(this.store.data.user[25][10].sc.tot) + parseFloat(this.store.data.user[25][10].ss.tot) + parseFloat(this.store.data.user[25][10].sb.tot) + parseFloat(this.store.data.user[25][10].sas.tot) + parseFloat(this.store.data.user[25][11].sc.tot) + parseFloat(this.store.data.user[25][11].ss.tot) + parseFloat(this.store.data.user[25][11].sb.tot) + parseFloat(this.store.data.user[25][11].sas.tot) + parseFloat(this.store.data.user[25][12].sc.tot) + parseFloat(this.store.data.user[25][12].ss.tot) + parseFloat(this.store.data.user[25][12].sb.tot) + parseFloat(this.store.data.user[25][12].sas.tot)
      this.store.totaleSpeseMese[26] = parseFloat(this.store.data.user[26][1].sc.tot) + parseFloat(this.store.data.user[26][1].ss.tot) + parseFloat(this.store.data.user[26][1].sb.tot) + parseFloat(this.store.data.user[26][1].sas.tot) + parseFloat(this.store.data.user[26][2].sc.tot) + parseFloat(this.store.data.user[26][2].ss.tot) + parseFloat(this.store.data.user[26][2].sb.tot) + parseFloat(this.store.data.user[26][2].sas.tot) + parseFloat(this.store.data.user[26][3].sc.tot) + parseFloat(this.store.data.user[26][3].ss.tot) + parseFloat(this.store.data.user[26][3].sb.tot) + parseFloat(this.store.data.user[26][3].sas.tot) + parseFloat(this.store.data.user[26][4].sc.tot) + parseFloat(this.store.data.user[26][4].ss.tot) + parseFloat(this.store.data.user[26][4].sb.tot) + parseFloat(this.store.data.user[26][4].sas.tot) + parseFloat(this.store.data.user[26][5].sc.tot) + parseFloat(this.store.data.user[26][5].ss.tot) + parseFloat(this.store.data.user[26][5].sb.tot) + parseFloat(this.store.data.user[26][5].sas.tot) + parseFloat(this.store.data.user[26][6].sc.tot) + parseFloat(this.store.data.user[26][6].ss.tot) + parseFloat(this.store.data.user[26][6].sb.tot) + parseFloat(this.store.data.user[26][6].sas.tot) + parseFloat(this.store.data.user[26][7].sc.tot) + parseFloat(this.store.data.user[26][7].ss.tot) + parseFloat(this.store.data.user[26][7].sb.tot) + parseFloat(this.store.data.user[26][7].sas.tot) + parseFloat(this.store.data.user[26][8].sc.tot) + parseFloat(this.store.data.user[26][8].ss.tot) + parseFloat(this.store.data.user[26][8].sb.tot) + parseFloat(this.store.data.user[26][8].sas.tot) + parseFloat(this.store.data.user[26][9].sc.tot) + parseFloat(this.store.data.user[26][9].ss.tot) + parseFloat(this.store.data.user[26][9].sb.tot) + parseFloat(this.store.data.user[26][9].sas.tot) + parseFloat(this.store.data.user[26][10].sc.tot) + parseFloat(this.store.data.user[26][10].ss.tot) + parseFloat(this.store.data.user[26][10].sb.tot) + parseFloat(this.store.data.user[26][10].sas.tot) + parseFloat(this.store.data.user[26][11].sc.tot) + parseFloat(this.store.data.user[26][11].ss.tot) + parseFloat(this.store.data.user[26][11].sb.tot) + parseFloat(this.store.data.user[26][11].sas.tot) + parseFloat(this.store.data.user[26][12].sc.tot) + parseFloat(this.store.data.user[26][12].ss.tot) + parseFloat(this.store.data.user[26][12].sb.tot) + parseFloat(this.store.data.user[26][12].sas.tot)


      this.store.totaleEntrateAnnue[23] = parseFloat(this.store.data.user[23][1].s.tot) + parseFloat(this.store.data.user[23][2].s.tot) + parseFloat(this.store.data.user[23][3].s.tot) + parseFloat(this.store.data.user[23][4].s.tot) + parseFloat(this.store.data.user[23][5].s.tot) + parseFloat(this.store.data.user[23][6].s.tot) + parseFloat(this.store.data.user[23][7].s.tot) + parseFloat(this.store.data.user[23][8].s.tot) + parseFloat(this.store.data.user[23][9].s.tot) + parseFloat(this.store.data.user[23][10].s.tot) + parseFloat(this.store.data.user[23][11].s.tot) + parseFloat(this.store.data.user[23][12].s.tot)
      this.store.totaleEntrateAnnue[24] = parseFloat(this.store.data.user[24][1].s.tot) + parseFloat(this.store.data.user[24][2].s.tot) + parseFloat(this.store.data.user[24][3].s.tot) + parseFloat(this.store.data.user[24][4].s.tot) + parseFloat(this.store.data.user[24][5].s.tot) + parseFloat(this.store.data.user[24][6].s.tot) + parseFloat(this.store.data.user[24][7].s.tot) + parseFloat(this.store.data.user[24][8].s.tot) + parseFloat(this.store.data.user[24][9].s.tot) + parseFloat(this.store.data.user[24][10].s.tot) + parseFloat(this.store.data.user[24][11].s.tot) + parseFloat(this.store.data.user[24][12].s.tot)
      this.store.totaleEntrateAnnue[25] = parseFloat(this.store.data.user[25][1].s.tot) + parseFloat(this.store.data.user[25][2].s.tot) + parseFloat(this.store.data.user[25][3].s.tot) + parseFloat(this.store.data.user[25][4].s.tot) + parseFloat(this.store.data.user[25][5].s.tot) + parseFloat(this.store.data.user[25][6].s.tot) + parseFloat(this.store.data.user[25][7].s.tot) + parseFloat(this.store.data.user[25][8].s.tot) + parseFloat(this.store.data.user[25][9].s.tot) + parseFloat(this.store.data.user[25][10].s.tot) + parseFloat(this.store.data.user[25][11].s.tot) + parseFloat(this.store.data.user[25][12].s.tot)
      this.store.totaleEntrateAnnue[26] = parseFloat(this.store.data.user[26][1].s.tot) + parseFloat(this.store.data.user[26][2].s.tot) + parseFloat(this.store.data.user[26][3].s.tot) + parseFloat(this.store.data.user[26][4].s.tot) + parseFloat(this.store.data.user[26][5].s.tot) + parseFloat(this.store.data.user[26][6].s.tot) + parseFloat(this.store.data.user[26][7].s.tot) + parseFloat(this.store.data.user[26][8].s.tot) + parseFloat(this.store.data.user[26][9].s.tot) + parseFloat(this.store.data.user[26][10].s.tot) + parseFloat(this.store.data.user[26][11].s.tot) + parseFloat(this.store.data.user[26][12].s.tot)



      this.store.totaleEntrate = parseFloat(this.store.totaleEntrateAnnue[23]) + parseFloat(this.store.totaleEntrateAnnue[24]) + parseFloat(this.store.totaleEntrateAnnue[25]) + parseFloat(this.store.totaleEntrateAnnue[26])
      this.store.totaleRisparmi = parseFloat(this.store.totaleRisparmioMese[23]) + parseFloat(this.store.totaleRisparmioMese[24]) + parseFloat(this.store.totaleRisparmioMese[25]) + parseFloat(this.store.totaleRisparmioMese[26])
      this.store.totaleSpese = parseFloat(this.store.totaleSpeseMese[23]) + parseFloat(this.store.totaleSpeseMese[24]) + parseFloat(this.store.totaleRisparmioMese[25]) + parseFloat(this.store.totaleRisparmioMese[26])

      //console.log('risaprmio calcolato')
    },

    calcRisparmio() {
      this.store.totaleEntrate = 0;
      this.store.totaleRisparmi = 0;


      // if (this.store.valoriMinMax.min < 20) {
      //   this.store.valoriMinMax.min = 20
      // }
      // if (this.store.valoriMinMax.max > 50) {
      //   this.store.valoriMinMax.max = 50
      // }


      for (let anno = this.store.valoriMinMax.min; anno <= this.store.valoriMinMax.max; anno++) {

        this.store.totaleRisparmioMese[anno] = 0;
        this.store.totaleEntrateAnnue[anno] = 0
        this.store.totaleSpeseMese[anno] = 0

        if (!this.store.risparmi[anno]) {
          this.store.risparmi[anno] = {};
        }
        if (!this.store.spese[anno]) {
          this.store.spese[anno] = {};
        }

        for (let key in this.store.data.user[anno]) {

          this.store.risparmi[anno][key] = this.store.data.user[anno][key].s.tot - this.store.data.user[anno][key].sc.tot - this.store.data.user[anno][key].ss.tot - this.store.data.user[anno][key].sb.tot - this.store.data.user[anno][key].sas.tot;
          this.store.spese[anno][key] = this.store.data.user[anno][key].sc.tot + this.store.data.user[anno][key].ss.tot + this.store.data.user[anno][key].sb.tot + this.store.data.user[anno][key].sas.tot;


          this.store.totaleRisparmioMese[anno] += parseFloat(this.store.risparmi[anno][key])
          this.store.totaleEntrateAnnue[anno] += parseFloat(this.store.data.user[anno][key].s.tot)
          this.store.totaleSpeseMese[anno] += parseFloat(this.store.spese[anno][key])
        }

        this.store.totaleEntrate += parseFloat(this.store.totaleEntrateAnnue[anno])
        this.store.totaleRisparmi += parseFloat(this.store.totaleRisparmioMese[anno])
        this.store.totaleSpese += parseFloat(this.store.totaleSpeseMese[anno])

      }
    },
    //calcola il totale
    calcVoci(dato, mese) {
      // console.log(eval(this.store.data.user[this.store.anno][11].s.mag.pre))

      let tot = 0;
      if (dato == 's') {
        Object.keys(this.store.data.user[this.store.anno][mese].s.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].s.mag.pre[key]);
          tot += parseFloat(this.store.data.user[this.store.anno][mese].s.mag.pre[key]);
        });

        this.store.data.user[this.store.anno][mese].s.tot = tot;
      } else if (dato == 'sb') {
        Object.keys(this.store.data.user[this.store.anno][mese].sb.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].sb.mag.pre[key]);
          tot += parseFloat(this.store.data.user[this.store.anno][mese].sb.mag.pre[key]);
        });

        this.store.data.user[this.store.anno][mese].sb.tot = tot;
      } else if (dato == 'sc') {
        Object.keys(this.store.data.user[this.store.anno][mese].sc.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].sc.mag.pre[key]);
          tot += parseFloat(this.store.data.user[this.store.anno][mese].sc.mag.pre[key]);
        });


        this.store.data.user[this.store.anno][mese].sc.tot = tot;
      } else if (dato == 'ss') {
        Object.keys(this.store.data.user[this.store.anno][mese].ss.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].ss.mag.pre[key]);
          tot += parseFloat(this.store.data.user[this.store.anno][mese].ss.mag.pre[key]);
        });


        this.store.data.user[this.store.anno][mese].ss.tot = tot;
      } else if (dato == 'sas') {
        Object.keys(this.store.data.user[this.store.anno][mese].sas.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.store.anno][mese].sas.mag.pre[key]);
          tot += parseFloat(this.store.data.user[this.store.anno][mese].sas.mag.pre[key]);
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
    //visualizza il modale
    showModule() {
      if (this.store.viewModule) {
        this.store.viewModule = false;
      } else {
        this.store.viewModule = true
      }
    },
  
  },

  created() {
    
    this.calcRisparmio();
    this.focusInput();
  },

  mounted() {

  },
}
</script>

<template>
  <div class="_main" @click="closeRow()" :class="this.store.darkmode ? '' : 'light'">

    <!-- TABLE -->
    <div class="table-responsive _tabella-wrapper d-flex align-items-center justify-content-center">
      <table class="_table _table-light">
        <!-- TITOLI -->
        <thead>
          <tr class="">
            <th class="_text-thirdary"></th>
            <th class="_text-secondary">Stipendio</th>
            <th class="_text-thirdary">Bollette</th>
            <th class="_text-thirdary">Affitto</th>
            <th class="_text-thirdary">Spesa</th>
            <th class="_text-thirdary">Altre Spese</th>
            <th class="_text-primary">Risparmio</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(mese, key) in this.store.data.user[this.store.anno]" :key="mese" class="_myrow" @click.stop="">

            <!-- MESI -->
            <th @click.stop="allowRow(key - 1)">
              <div class="d-flex align-items-center justify-content-center gap-1" style="cursor:pointer;">
                {{ this.store.mesi[key - 1] }}
              </div>
            </th>

            <!-- STIENDIO mensile -->
            <td>
              <div class="d-flex align-items-center justify-content-center gap-1" @click.stop="allowRow(key - 1)"
                style="cursor:pointer">
                <span class=" _input-table _text-secondary">{{ mese.s.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio stipendio -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.s.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.s.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].s.mag.art[index]"
                      @click.stop="" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].s.mag.pre[index]" @click.stop=""
                      class="pre_class" @change="calcVoci('s', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 's', index), calcVoci('s', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop="prop(), createEl(key, 's', 'prod', 0), calcVoci('s', key), calcRisparmio()">+</button>

                </div>
              </div>

            </td>

            <!-- bollette -->
            <td>
              <div class="d-flex align-items-center justify-content-center gap-1" @click.stop="allowRow(key - 1)"
                style="cursor:pointer">
                <span class=" _input-table">{{ mese.sb.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio bollette -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sb.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sb.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].sb.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].sb.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('sb', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'sb', index), calcVoci('sb', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>
                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'sb', 'prod', 0)">+</button>

                </div>
              </div>
            </td>

            <!-- spese affitto -->
            <td>
              <div class="d-flex align-items-center justify-content-center gap-1" @click.stop="allowRow(key - 1)"
                style="cursor:pointer">
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.sc.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio stipendio -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sc.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sc.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].sc.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].sc.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('sc', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'sc', index), calcVoci('sc', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>
                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'sc', 'prod', 0)">+</button>

                </div>
              </div>
            </td>

            <!-- spese alimentari -->
            <td>
              <div class="d-flex align-items-center justify-content-center gap-1" @click.stop="allowRow(key - 1)"
                style="cursor:pointer">
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.ss.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio alimenti -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.ss.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.ss.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].ss.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].ss.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('ss', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'ss', index), calcVoci('ss', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>
                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'ss', 'prod', 0)">+</button>

                </div>
              </div>
            </td>

            <!-- altre spese-->
            <td>
              <div class="d-flex align-items-center justify-content-center gap-1" @click.stop="allowRow(key - 1)"
                style="cursor:pointer">
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.sas.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio altre spese -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sas.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sas.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].sas.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].sas.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('sas', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'sas', index), calcVoci('sas', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>
                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'sas', 'prod', 0)">+</button>

                </div>
              </div>
            </td>

            <!-- risparmi -->
            <td>
              <div class="d-flex align-items-center justify-content-center gap-1" @click.stop="allowRow(key - 1)"
                style="cursor:pointer">
                <span class=" _input-table _text-primary">{{ this.store.risparmi[this.store.anno][key].toFixed(2)
                }}</span>
                <span style="font-size:.5em">€</span>
              </div>
            </td>
          </tr>

        </tbody>

      </table>

    </div>



    <!-- TABLE - small screen -->
    <div class="_table-small">
      <div class="mese-container">

        <!-- //titoli -->
        <div class="th-small">
          <div class="_title lato _text-thirdary"><i class="fa-solid fa-arrow-trend-down"></i></div>
          <span class="_title"><i class="fa-solid fa-calendar-days"></i></span>
          <div class="_title lato _text-primary"><i class="fa-solid fa-arrow-trend-up"></i></div>
        </div>

        <div v-for="(mese, key) in this.store.data.user[this.store.anno]" :key="mese" class="_myrow">
          <!-- TITOLO E FONDAMENTALI -->
          <div class="mese_inner_container">

            <div class="risparmi_mese">
              <span class=" _input-table _text-thirdary">{{ this.store.spese[this.store.anno][key].toFixed(2)
              }}</span>
              <span style="font-size:.5em">€</span>
            </div>

            <span class="mese-title" @click.stop="allowRowSmall(key - 1)">
              {{ this.store.mesi[key - 1] }}
            </span>

            <div class="risparmi_mese">
              <span class=" _input-table _text-primary">{{ this.store.risparmi[this.store.anno][key].toFixed(2)
              }}</span>
              <span style="font-size:.5em">€</span>
            </div>

          </div>

          <div class="_info-wrapper">

            <div>
              <div class="d-flex align-items-center justify-content-center gap-1" style="cursor:pointer">
                <span>Stipendio</span>
                <span class=" _input-table _text-secondary">{{ mese.s.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio stipendio -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.s.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.s.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].s.mag.art[index]"
                      @click.stop="" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].s.mag.pre[index]" @click.stop=""
                      class="pre_class" @change="calcVoci('s', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 's', index), calcVoci('s', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop="prop(), createEl(key, 's', 'prod', 0), calcVoci('s', key), calcRisparmio()">+</button>

                </div>
              </div>

            </div>


            <!-- bollette -->
            <div>
              <div class="d-flex align-items-center justify-content-center gap-1" style="cursor:pointer">
                <span>Bollette</span>
                <span class=" _input-table">{{ mese.sb.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio bollette -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sb.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sb.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].sb.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].sb.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('sb', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'sb', index), calcVoci('sb', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'sb', 'prod', 0)">+</button>

                </div>
              </div>

            </div>


            <!-- spese affitto -->
            <div>
              <div class="d-flex align-items-center justify-content-center gap-1" style="cursor:pointer">
                <span>Affitto</span>
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.sc.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio stipendio -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sc.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sc.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].sc.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].sc.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('sc', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'sc', index), calcVoci('sc', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'sc', 'prod', 0)">+</button>

                </div>
              </div>

            </div>

            <!-- spese alimentari -->
            <div>
              <div class="d-flex align-items-center justify-content-center gap-1" style="cursor:pointer">
                <span>Alimentari</span>
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.ss.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio alimenti -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.ss.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.ss.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].ss.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].ss.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('ss', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'ss', index), calcVoci('ss', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'ss', 'prod', 0)">+</button>

                </div>
              </div>

            </div>

            <!-- altre spese-->
            <div>
              <div class="d-flex align-items-center justify-content-center gap-1" style="cursor:pointer">
                <span>Altre Spese</span>
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.sas.tot.toFixed(2) }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio altre spese -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sas.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sas.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.store.anno][key].sas.mag.art[index]"
                      @click.stop="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.store.anno][key].sas.mag.pre[index]"
                      @click.stop="() => { this.prop() }" class="pre_class"
                      @change="calcVoci('sas', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="_btn-outline-thirdary-darkness-hover _btn-delete"
                      @click.stop="deleteEl(key, 'sas', index), calcVoci('sas', key), calcRisparmio()">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn" :class="this.store.darkmode ? 'btn-outline-light' : 'btn-outline-dark'"
                    style=" margin-top: .2em; font-size: 1.2em; padding: 0em .4em; margin-top: 0.2em; border-radius: 50%;"
                    @click.stop=" createEl(key, 'sas', 'prod', 0)">+</button>

                </div>
              </div>

            </div>

            <!-- risparmi -->
            <div>
              <div class="d-flex align-items-center justify-content-center gap-1" style="cursor:pointer">
                <span>Risparmi</span>
                <span class=" _input-table _text-primary">{{ this.store.risparmi[this.store.anno][key].toFixed(2)
                }}</span>
                <span style="font-size:.5em">€</span>
              </div>
            </div>



          </div>

        </div>

      </div>
    </div>



    <div class="_bottom">
      <!-- TOTALI ANNUALI -->
      <div class="_totale d-flex justify-content-center w-100">
        <span class="me-4 "><span>Entrate Annuali:</span> <strong class="_text-secondary">{{
          this.store.totaleEntrateAnnue[this.store.anno].toFixed(2) }}
            €</strong></span>
        <span class="me-4 "><span>Spese Annuali:</span> <strong class="_text-thirdary">{{
          this.store.totaleSpeseMese[this.store.anno].toFixed(2) }}
            €</strong></span>
        <span class=""><span>Risparmi Annuali:</span> <strong class="_text-primary">{{
          this.store.totaleRisparmioMese[this.store.anno].toFixed(2)
        }}
            €</strong></span>
      </div>

      <!-- BOTTON save reset -->
      <div class="mb-2">
        <button class="btn _btn-outline-primary-darkness-hover  me-4" @click.stop="save(), showModule()"><i
            style="font-size: .8em;" class="fa-regular fa-floppy-disk"></i> <span>Save</span></button>
        <button class="btn _btn-outline-thirdary-darkness-hover  " @click.stop=" this.store.viewModuleReset = true"><i
            style="font-size: .8em;" class="fa-solid fa-clock-rotate-left"></i> <span>Reset</span></button>
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
  margin-top: 40px;
  overflow-y: auto;
  position: relative;

  //border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;



  ._bottom {
    height: 130px;
    margin: 0 auto;
    //border: 1px solid blue;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }

  ._info-input {
    --bs-gutter-x: 0rem;
    width: 95%;
    margin: 0.2em auto;
  }

  ._tabella-wrapper {
    width: 100%;
    border-radius: 10px;
  }

}


._main {
  ._tabella-wrapper {
    table {
      tbody {

        ._myrow {

          &:nth-child(odd) {
            background-color: $alternative-backgroundColor;
          }

          &:hover {
            background-color: lighten($background, 10%);
          }


          td {


            ul {
              padding-left: 0em;
              margin-bottom: 0em;
              font-size: 10px;
              text-align: center;
              width: 100%;
              border-top: 1px solid white;


              li {
                display: flex;
                align-items: center;
                width: 100%;
                max-width: 200px;

                .pre_class {
                  display: block;
                  width: 12%;
                  //border: 1px solid white;
                  padding: 0;
                  min-width: 25px;
                }

                span {
                  width: 3%;
                  //border: 1px solid white;
                  padding: 0;
                }

                .art_class {
                  display: block;
                  width: 20%;
                  //border: 1px solid white;
                  padding: 0;
                  min-width: 70px;
                }
              }
            }

            ._detailsRow {
              transition: all .5s;
              max-height: 0px;
              opacity: 0;
              max-width: 150px;
              margin: auto;
              display: flex;
              flex-direction: column;
              overflow-y: hidden;
              justify-content: center;

              //color: red;
              span {
                font-size: .7em;
              }

              ._btn-delete {
                font-size: 0.1em;
                margin-left: 22em;
                width: 18px;
                height: 18px;
                position: relative;
                box-shadow: none;



                i {
                  position: absolute;
                  transform: translateX(-50%) translateY(-50%);
                  top: 50%;
                  left: 50%;
                  text-shadow: 0px 0px 8px #ffffff00;
                  font-size: 9em;
                  color: white;

                }
              }


            }
          }
        }

        ._myrow.view {
          td {
            ._detailsRow {
              //display: block;
              opacity: 1;
              max-height: 1000px;
            }
          }
        }
      }
    }
  }

  ._table-small {
    display: none;
  }
}

@media only screen and (max-width: 1000px) {

  ._table-light {
    thead {
      tr {

        th {
          padding: .2em 0em;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: .2em 0em;

        }

      }
    }
  }
}

@media only screen and (max-width: 900px) {

  ._table-light {

    thead {
      tr {

        th {
          padding: .2em 0em;
        }
      }
    }

    tbody {
      tr {

        td,
        th {
          padding: .4em 0em;
          max-width: 70px;

          ._detailsRow {
            span {
              width: auto !important;
            }
          }

          ul {
            li {
              input.art_class {

                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                min-width: 30px !important;
              }

              button._btn-delete {
                margin-left: 5em !important;
              }
            }
          }
        }

      }
    }
  }
}

@media only screen and (max-width: 700px) {
  ._main {
    padding: 0;

    .table-responsive {
      display: none !important;
    }

    ._table-small {
      display: block;
      height: calc(100vh - 280px);
      //border: 1px solid;
      width: 100%;
      overflow-y: scroll;

      .mese-container {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        gap: 0.3em;

        .th-small,
        .mese_inner_container {
          display: flex;
          gap: .2em;
          width: 350px;
          //border: 1px solid;
          justify-content: center;
          gap: .5em;

          ._title.lato:hover,
          ._title.lato {
            min-width: 50px;
            position: relative;

            i {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
            }

          }

          ._title,
          ._title:hover,
          .mese-title {
            padding: .4em 0em;
            background: lighten($background, 5%);
            min-width: 200px;
            text-align: center;
            cursor: pointer;

          }

          .mese-title:hover {
            background: lighten($background, 25%);
          }

          .risparmi_mese {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: .5em;
            width: 50px;
            font-size: .9em;
          }
        }

        //PANNELLO VIEW
        ._myrow {
          ._info-wrapper {
            overflow: hidden;
            max-height: 0px;
            padding: 0;
            transition: all .6s;

            ._detailsRow {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: .6em;
              flex-direction: column;
              border-bottom: 1px solid darken($primary, 30%);
              padding-bottom: 1.2em;
              margin-bottom: 1em;

              ul {
                padding: .2em;
                margin: 0;

                li {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: .4em;

                  input {
                    width: 30%;
                    background: transparent;
                    border: 1px solid darken($primary, 30%);
                    border-radius: 8px;
                    padding: 0em .2em;
                    text-align: end;
                  }

                  ._btn-delete {
                    margin-left: .4em;
                  }
                }
              }
            }
          }
        }

        ._myrow.view {
          ._info-wrapper {
            max-height: 250px;
            padding: 0.5em;
            overflow-y: scroll;
          }

        }
      }
    }

    ._bottom {
      height: 75px;
      padding-bottom: .5em;

      ._totale {
        span {
          font-size: .8em !important;
          text-align: center;
        }
      }
    }
  }
}

._main.light {

  ._table-small {


    .mese-container {


      .th-small,
      .mese_inner_container {

        ._title,
        ._title:hover,
        .mese-title {
          background: lighten($background-light, 5%);

        }

        .mese-title:hover {
          background: lighten($background-light, 25%);
        }

      }
    }
  }
}

@media only screen and (max-width: 380px) {
  ._main {
    justify-content: space-between;

    .table-responsive {
      display: none !important;
    }

    ._table-small {
      height: calc(100vh - 250px);

      .mese-container {


        .th-small,
        .mese_inner_container {
          display: flex;
          gap: .2em;
          width: 100%;
          //border: 1px solid;
          justify-content: center;
          gap: .5em;

          ._title.lato:hover,
          ._title.lato {
            width: 50px;
            position: relative;

            i {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
            }

          }

          ._title,
          ._title:hover,
          .mese-title {
            padding: .4em 0em;
            background: #131313;
            min-width: 100px;
            text-align: center;
            cursor: pointer;

          }

          .mese-title:hover {
            background: rgb(81, 80, 80)
          }

          .risparmi_mese {

            font-size: .8em;
          }
        }
      }
    }

    ._bottom {

      height: 75px;
      padding-bottom: .5em;


      ._totale {
        span {
          span {
            display: none !important;
          }
        }
      }
    }
  }
}

._main.light {
  ._tabella-wrapper table tbody ._myrow td ._detailsRow ._btn-delete i {
    color: black;
  }

  ._tabella-wrapper table tbody ._myrow td ul {
    border-top: 1px solid black;
  }

  ._table-small .mese-container ._myrow ._info-wrapper ._detailsRow ul li input {
    color: rgb(77, 75, 75);
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
