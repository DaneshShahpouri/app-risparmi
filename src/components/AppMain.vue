<script>
import { store } from '../store.js';
export default {
  name: 'AppMain',

  data() {
    return {
      store,
      anno: 23,
      risparmi: {
        23: {
          [1]: 0,
          [2]: 0,
          [3]: 0,
          [4]: 0,
          [5]: 0,
          [6]: 0,
          [7]: 0,
          [8]: 0,
          [9]: 0,
          [10]: 0,
          [11]: 0,
          [12]: 0,
        },
        24: {
          [1]: 0,
          [2]: 0,
          [3]: 0,
          [4]: 0,
          [5]: 0,
          [6]: 0,
          [7]: 0,
          [8]: 0,
          [9]: 0,
          [10]: 0,
          [11]: 0,
          [12]: 0,
        },
        25: {
          [1]: 0,
          [2]: 0,
          [3]: 0,
          [4]: 0,
          [5]: 0,
          [6]: 0,
          [7]: 0,
          [8]: 0,
          [9]: 0,
          [10]: 0,
          [11]: 0,
          [12]: 0,
        },
        26: {
          [1]: 0,
          [2]: 0,
          [3]: 0,
          [4]: 0,
          [5]: 0,
          [6]: 0,
          [7]: 0,
          [8]: 0,
          [9]: 0,
          [10]: 0,
          [11]: 0,
          [12]: 0,
        },
      },

      totaleRisparmioMese: { 23: 0, 24: 0, 25: 0, 26: 0 },
      totaleSpeseMese: { 23: 0, 24: 0, 25: 0, 26: 0 },
      totaleEntrateAnnue: { 23: 0, 24: 0, 25: 0, 26: 0 },
    }
  },

  props: {
    // msg: String
  },
  methods: {

    console(parametro) {
      console.log(parametro);
      console.log(this.totaleEntrateAnnue[23]);
    },

    prop() {
      event.stopPropagation()

    },
    // Funzione per salvare myData in localStorage
    save() {
      const myData = this.store.data
      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      console.log('myData salvato con successo!');
    },

    setAnno(anno) {
      this.anno = anno;
    },

    //Reset
    resetData() {
      const myData = {
        user: {
          nome: 'Danesh',
          cognome: 'Shahpouri',
          eta: 30,
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
              s: { mag: { art: ['stipendio'], pre: [890] }, tot: 890 },
              sb: { mag: { art: [], pre: [] }, tot: 0 },
              sc: { mag: { art: [], pre: [] }, tot: 0 },
              ss: { mag: { art: [], pre: [] }, tot: 0 },
              sas: { mag: { art: ['minoxidil', 'lenzuola', 'shampo'], pre: [72, 60, 20] }, tot: 0 },
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
        }
      };

      // Salva myData in localStorage
      localStorage.setItem('myData', JSON.stringify(myData));

      console.log('myData Reset!');
    },

    allowRow(index) {
      let element = document.getElementsByClassName('_myrow')
      element[index].classList.toggle("view");
    },

    createEl(mese, dato, nuovorecord, nuovoprezzo) {
      // console.log(this.store.data.user[this.anno][mese].s.mag)
      if (dato == 's') {
        this.store.data.user[this.anno][mese].s.mag.pre[(Object.keys(this.store.data.user[this.anno][mese].s.mag.art).length)] = nuovoprezzo
        this.store.data.user[this.anno][mese].s.mag.art[(Object.keys(this.store.data.user[this.anno][mese].s.mag.art).length)] = nuovorecord
      } else if (dato == 'sb') {
        this.store.data.user[this.anno][mese].sb.mag.pre[(Object.keys(this.store.data.user[this.anno][mese].sb.mag.art).length)] = nuovoprezzo
        this.store.data.user[this.anno][mese].sb.mag.art[(Object.keys(this.store.data.user[this.anno][mese].sb.mag.art).length)] = nuovorecord

      } else if (dato == 'sc') {
        this.store.data.user[this.anno][mese].sc.mag.pre[(Object.keys(this.store.data.user[this.anno][mese].sc.mag.art).length)] = nuovoprezzo
        this.store.data.user[this.anno][mese].sc.mag.art[(Object.keys(this.store.data.user[this.anno][mese].sc.mag.art).length)] = nuovorecord

      } else if (dato == 'ss') {
        this.store.data.user[this.anno][mese].ss.mag.pre[(Object.keys(this.store.data.user[this.anno][mese].ss.mag.art).length)] = nuovoprezzo
        this.store.data.user[this.anno][mese].ss.mag.art[(Object.keys(this.store.data.user[this.anno][mese].ss.mag.art).length)] = nuovorecord

      } else if (dato == 'sas') {
        this.store.data.user[this.anno][mese].sas.mag.pre[(Object.keys(this.store.data.user[this.anno][mese].sas.mag.art).length)] = nuovoprezzo
        this.store.data.user[this.anno][mese].sas.mag.art[(Object.keys(this.store.data.user[this.anno][mese].sas.mag.art).length)] = nuovorecord
      }

    },

    deleteEl(mese, dato, index) {
      //console.log(this.store.data.user[this.anno][mese].s.mag)
      if (dato == 's') {
        this.store.data.user[this.anno][mese].s.mag.pre.splice(index, 1)
        this.store.data.user[this.anno][mese].s.mag.art.splice(index, 1)
      } else if (dato == 'sb') {
        this.store.data.user[this.anno][mese].sb.mag.pre.splice(index, 1)
        this.store.data.user[this.anno][mese].sb.mag.art.splice(index, 1)
      } else if (dato == 'sc') {
        this.store.data.user[this.anno][mese].sc.mag.pre.splice(index, 1)
        this.store.data.user[this.anno][mese].sc.mag.art.splice(index, 1)
      } else if (dato == 'ss') {
        this.store.data.user[this.anno][mese].ss.mag.pre.splice(index, 1)
        this.store.data.user[this.anno][mese].ss.mag.art.splice(index, 1)
      } else if (dato == 'sas') {
        this.store.data.user[this.anno][mese].sas.mag.pre.splice(index, 1)
        this.store.data.user[this.anno][mese].sas.mag.art.splice(index, 1)
      }

    },

    calcRisparmio() {
      //console.log('calcola risparmio')
      //2023 - risparmio
      this.risparmi[23][1] = this.store.data.user[23][1].s.tot - this.store.data.user[23][1].sc.tot - this.store.data.user[23][1].ss.tot - this.store.data.user[23][1].sb.tot - this.store.data.user[23][1].sas.tot;
      this.risparmi[23][2] = this.store.data.user[23][2].s.tot - this.store.data.user[23][2].sc.tot - this.store.data.user[23][2].ss.tot - this.store.data.user[23][2].sb.tot - this.store.data.user[23][2].sas.tot;
      this.risparmi[23][3] = this.store.data.user[23][3].s.tot - this.store.data.user[23][3].sc.tot - this.store.data.user[23][3].ss.tot - this.store.data.user[23][3].sb.tot - this.store.data.user[23][3].sas.tot;
      this.risparmi[23][4] = this.store.data.user[23][4].s.tot - this.store.data.user[23][4].sc.tot - this.store.data.user[23][4].ss.tot - this.store.data.user[23][4].sb.tot - this.store.data.user[23][4].sas.tot;
      this.risparmi[23][5] = this.store.data.user[23][5].s.tot - this.store.data.user[23][5].sc.tot - this.store.data.user[23][5].ss.tot - this.store.data.user[23][5].sb.tot - this.store.data.user[23][5].sas.tot;
      this.risparmi[23][6] = this.store.data.user[23][6].s.tot - this.store.data.user[23][6].sc.tot - this.store.data.user[23][6].ss.tot - this.store.data.user[23][6].sb.tot - this.store.data.user[23][6].sas.tot;
      this.risparmi[23][7] = this.store.data.user[23][7].s.tot - this.store.data.user[23][7].sc.tot - this.store.data.user[23][7].ss.tot - this.store.data.user[23][7].sb.tot - this.store.data.user[23][7].sas.tot;
      this.risparmi[23][8] = this.store.data.user[23][8].s.tot - this.store.data.user[23][8].sc.tot - this.store.data.user[23][8].ss.tot - this.store.data.user[23][8].sb.tot - this.store.data.user[23][8].sas.tot;
      this.risparmi[23][9] = this.store.data.user[23][9].s.tot - this.store.data.user[23][9].sc.tot - this.store.data.user[23][9].ss.tot - this.store.data.user[23][9].sb.tot - this.store.data.user[23][9].sas.tot;
      this.risparmi[23][10] = this.store.data.user[23][10].s.tot - this.store.data.user[23][10].sc.tot - this.store.data.user[23][10].ss.tot - this.store.data.user[23][10].sb.tot - this.store.data.user[23][10].sas.tot;
      this.risparmi[23][11] = this.store.data.user[23][11].s.tot - this.store.data.user[23][11].sc.tot - this.store.data.user[23][11].ss.tot - this.store.data.user[23][11].sb.tot - this.store.data.user[23][11].sas.tot;
      this.risparmi[23][12] = this.store.data.user[23][12].s.tot - this.store.data.user[23][12].sc.tot - this.store.data.user[23][12].ss.tot - this.store.data.user[23][12].sb.tot - this.store.data.user[23][12].sas.tot;
      //2024 - risparmio
      this.risparmi[24][1] = this.store.data.user[24][1].s.tot - this.store.data.user[24][1].sc.tot - this.store.data.user[24][1].ss.tot - this.store.data.user[24][1].sb.tot - this.store.data.user[24][1].sas.tot;
      this.risparmi[24][2] = this.store.data.user[24][2].s.tot - this.store.data.user[24][2].sc.tot - this.store.data.user[24][2].ss.tot - this.store.data.user[24][2].sb.tot - this.store.data.user[24][2].sas.tot;
      this.risparmi[24][3] = this.store.data.user[24][3].s.tot - this.store.data.user[24][3].sc.tot - this.store.data.user[24][3].ss.tot - this.store.data.user[24][3].sb.tot - this.store.data.user[24][3].sas.tot;
      this.risparmi[24][4] = this.store.data.user[24][4].s.tot - this.store.data.user[24][4].sc.tot - this.store.data.user[24][4].ss.tot - this.store.data.user[24][4].sb.tot - this.store.data.user[24][4].sas.tot;
      this.risparmi[24][5] = this.store.data.user[24][5].s.tot - this.store.data.user[24][5].sc.tot - this.store.data.user[24][5].ss.tot - this.store.data.user[24][5].sb.tot - this.store.data.user[24][5].sas.tot;
      this.risparmi[24][6] = this.store.data.user[24][6].s.tot - this.store.data.user[24][6].sc.tot - this.store.data.user[24][6].ss.tot - this.store.data.user[24][6].sb.tot - this.store.data.user[24][6].sas.tot;
      this.risparmi[24][7] = this.store.data.user[24][7].s.tot - this.store.data.user[24][7].sc.tot - this.store.data.user[24][7].ss.tot - this.store.data.user[24][7].sb.tot - this.store.data.user[24][7].sas.tot;
      this.risparmi[24][8] = this.store.data.user[24][8].s.tot - this.store.data.user[24][8].sc.tot - this.store.data.user[24][8].ss.tot - this.store.data.user[24][8].sb.tot - this.store.data.user[24][8].sas.tot;
      this.risparmi[24][9] = this.store.data.user[24][9].s.tot - this.store.data.user[24][9].sc.tot - this.store.data.user[24][9].ss.tot - this.store.data.user[24][9].sb.tot - this.store.data.user[24][9].sas.tot;
      this.risparmi[24][10] = this.store.data.user[24][10].s.tot - this.store.data.user[24][10].sc.tot - this.store.data.user[24][10].ss.tot - this.store.data.user[24][10].sb.tot - this.store.data.user[24][10].sas.tot;
      this.risparmi[24][11] = this.store.data.user[24][11].s.tot - this.store.data.user[24][11].sc.tot - this.store.data.user[24][11].ss.tot - this.store.data.user[24][11].sb.tot - this.store.data.user[24][11].sas.tot;
      this.risparmi[24][12] = this.store.data.user[24][12].s.tot - this.store.data.user[24][12].sc.tot - this.store.data.user[24][12].ss.tot - this.store.data.user[24][12].sb.tot - this.store.data.user[24][12].sas.tot;
      //2025 - risparmio
      this.risparmi[25][1] = this.store.data.user[25][1].s.tot - this.store.data.user[25][1].sc.tot - this.store.data.user[25][1].ss.tot - this.store.data.user[25][1].sb.tot - this.store.data.user[25][1].sas.tot;
      this.risparmi[25][2] = this.store.data.user[25][2].s.tot - this.store.data.user[25][2].sc.tot - this.store.data.user[25][2].ss.tot - this.store.data.user[25][2].sb.tot - this.store.data.user[25][2].sas.tot;
      this.risparmi[25][3] = this.store.data.user[25][3].s.tot - this.store.data.user[25][3].sc.tot - this.store.data.user[25][3].ss.tot - this.store.data.user[25][3].sb.tot - this.store.data.user[25][3].sas.tot;
      this.risparmi[25][4] = this.store.data.user[25][4].s.tot - this.store.data.user[25][4].sc.tot - this.store.data.user[25][4].ss.tot - this.store.data.user[25][4].sb.tot - this.store.data.user[25][4].sas.tot;
      this.risparmi[25][5] = this.store.data.user[25][5].s.tot - this.store.data.user[25][5].sc.tot - this.store.data.user[25][5].ss.tot - this.store.data.user[25][5].sb.tot - this.store.data.user[25][5].sas.tot;
      this.risparmi[25][6] = this.store.data.user[25][6].s.tot - this.store.data.user[25][6].sc.tot - this.store.data.user[25][6].ss.tot - this.store.data.user[25][6].sb.tot - this.store.data.user[25][6].sas.tot;
      this.risparmi[25][7] = this.store.data.user[25][7].s.tot - this.store.data.user[25][7].sc.tot - this.store.data.user[25][7].ss.tot - this.store.data.user[25][7].sb.tot - this.store.data.user[25][7].sas.tot;
      this.risparmi[25][8] = this.store.data.user[25][8].s.tot - this.store.data.user[25][8].sc.tot - this.store.data.user[25][8].ss.tot - this.store.data.user[25][8].sb.tot - this.store.data.user[25][8].sas.tot;
      this.risparmi[25][9] = this.store.data.user[25][9].s.tot - this.store.data.user[25][9].sc.tot - this.store.data.user[25][9].ss.tot - this.store.data.user[25][9].sb.tot - this.store.data.user[25][9].sas.tot;
      this.risparmi[25][10] = this.store.data.user[25][10].s.tot - this.store.data.user[25][10].sc.tot - this.store.data.user[25][10].ss.tot - this.store.data.user[25][10].sb.tot - this.store.data.user[25][10].sas.tot;
      this.risparmi[25][11] = this.store.data.user[25][11].s.tot - this.store.data.user[25][11].sc.tot - this.store.data.user[25][11].ss.tot - this.store.data.user[25][11].sb.tot - this.store.data.user[25][11].sas.tot;
      this.risparmi[25][12] = this.store.data.user[25][12].s.tot - this.store.data.user[25][12].sc.tot - this.store.data.user[25][12].ss.tot - this.store.data.user[25][12].sb.tot - this.store.data.user[25][12].sas.tot;
      //2026 - risparmio
      this.risparmi[26][1] = this.store.data.user[26][1].s.tot - this.store.data.user[26][1].sc.tot - this.store.data.user[26][1].ss.tot - this.store.data.user[26][1].sb.tot - this.store.data.user[26][1].sas.tot;
      this.risparmi[26][2] = this.store.data.user[26][2].s.tot - this.store.data.user[26][2].sc.tot - this.store.data.user[26][2].ss.tot - this.store.data.user[26][2].sb.tot - this.store.data.user[26][2].sas.tot;
      this.risparmi[26][3] = this.store.data.user[26][3].s.tot - this.store.data.user[26][3].sc.tot - this.store.data.user[26][3].ss.tot - this.store.data.user[26][3].sb.tot - this.store.data.user[26][3].sas.tot;
      this.risparmi[26][4] = this.store.data.user[26][4].s.tot - this.store.data.user[26][4].sc.tot - this.store.data.user[26][4].ss.tot - this.store.data.user[26][4].sb.tot - this.store.data.user[26][4].sas.tot;
      this.risparmi[26][5] = this.store.data.user[26][5].s.tot - this.store.data.user[26][5].sc.tot - this.store.data.user[26][5].ss.tot - this.store.data.user[26][5].sb.tot - this.store.data.user[26][5].sas.tot;
      this.risparmi[26][6] = this.store.data.user[26][6].s.tot - this.store.data.user[26][6].sc.tot - this.store.data.user[26][6].ss.tot - this.store.data.user[26][6].sb.tot - this.store.data.user[26][6].sas.tot;
      this.risparmi[26][7] = this.store.data.user[26][7].s.tot - this.store.data.user[26][7].sc.tot - this.store.data.user[26][7].ss.tot - this.store.data.user[26][7].sb.tot - this.store.data.user[26][7].sas.tot;
      this.risparmi[26][8] = this.store.data.user[26][8].s.tot - this.store.data.user[26][8].sc.tot - this.store.data.user[26][8].ss.tot - this.store.data.user[26][8].sb.tot - this.store.data.user[26][8].sas.tot;
      this.risparmi[26][9] = this.store.data.user[26][9].s.tot - this.store.data.user[26][9].sc.tot - this.store.data.user[26][9].ss.tot - this.store.data.user[26][9].sb.tot - this.store.data.user[26][9].sas.tot;
      this.risparmi[26][10] = this.store.data.user[26][10].s.tot - this.store.data.user[26][10].sc.tot - this.store.data.user[26][10].ss.tot - this.store.data.user[26][10].sb.tot - this.store.data.user[26][10].sas.tot;
      this.risparmi[26][11] = this.store.data.user[26][11].s.tot - this.store.data.user[26][11].sc.tot - this.store.data.user[26][11].ss.tot - this.store.data.user[26][11].sb.tot - this.store.data.user[26][11].sas.tot;
      this.risparmi[26][12] = this.store.data.user[26][12].s.tot - this.store.data.user[26][12].sc.tot - this.store.data.user[26][12].ss.tot - this.store.data.user[26][12].sb.tot - this.store.data.user[26][12].sas.tot;

      this.totaleRisparmioMese[23] = parseInt(this.risparmi[23][1]) + parseInt(this.risparmi[23][2]) + parseInt(this.risparmi[23][3]) + parseInt(this.risparmi[23][4]) + parseInt(this.risparmi[23][5]) + parseInt(this.risparmi[23][6]) + parseInt(this.risparmi[23][7]) + parseInt(this.risparmi[23][8]) + parseInt(this.risparmi[23][9]) + parseInt(this.risparmi[23][10]) + parseInt(this.risparmi[23][11]) + parseInt(this.risparmi[23][12])
      this.totaleRisparmioMese[24] = parseInt(this.risparmi[24][1]) + parseInt(this.risparmi[24][2]) + parseInt(this.risparmi[24][3]) + parseInt(this.risparmi[24][4]) + parseInt(this.risparmi[24][5]) + parseInt(this.risparmi[24][6]) + parseInt(this.risparmi[24][7]) + parseInt(this.risparmi[24][8]) + parseInt(this.risparmi[24][9]) + parseInt(this.risparmi[24][10]) + parseInt(this.risparmi[24][11]) + parseInt(this.risparmi[24][12])
      this.totaleRisparmioMese[25] = parseInt(this.risparmi[25][1]) + parseInt(this.risparmi[25][2]) + parseInt(this.risparmi[25][3]) + parseInt(this.risparmi[25][4]) + parseInt(this.risparmi[25][5]) + parseInt(this.risparmi[25][6]) + parseInt(this.risparmi[25][7]) + parseInt(this.risparmi[25][8]) + parseInt(this.risparmi[25][9]) + parseInt(this.risparmi[25][10]) + parseInt(this.risparmi[25][11]) + parseInt(this.risparmi[25][12])
      this.totaleRisparmioMese[26] = parseInt(this.risparmi[26][1]) + parseInt(this.risparmi[26][2]) + parseInt(this.risparmi[26][3]) + parseInt(this.risparmi[26][4]) + parseInt(this.risparmi[26][5]) + parseInt(this.risparmi[26][6]) + parseInt(this.risparmi[26][7]) + parseInt(this.risparmi[26][8]) + parseInt(this.risparmi[26][9]) + parseInt(this.risparmi[26][10]) + parseInt(this.risparmi[26][11]) + parseInt(this.risparmi[26][12])

      this.totaleSpeseMese[23] = parseInt(this.store.data.user[23][1].sc.tot) + parseInt(this.store.data.user[23][1].ss.tot) + parseInt(this.store.data.user[23][1].sb.tot) + parseInt(this.store.data.user[23][1].sas.tot) + parseInt(this.store.data.user[23][2].sc.tot) + parseInt(this.store.data.user[23][2].ss.tot) + parseInt(this.store.data.user[23][2].sb.tot) + parseInt(this.store.data.user[23][2].sas.tot) + parseInt(this.store.data.user[23][3].sc.tot) + parseInt(this.store.data.user[23][3].ss.tot) + parseInt(this.store.data.user[23][3].sb.tot) + parseInt(this.store.data.user[23][3].sas.tot) + parseInt(this.store.data.user[23][4].sc.tot) + parseInt(this.store.data.user[23][4].ss.tot) + parseInt(this.store.data.user[23][4].sb.tot) + parseInt(this.store.data.user[23][4].sas.tot) + parseInt(this.store.data.user[23][5].sc.tot) + parseInt(this.store.data.user[23][5].ss.tot) + parseInt(this.store.data.user[23][5].sb.tot) + parseInt(this.store.data.user[23][5].sas.tot) + parseInt(this.store.data.user[23][6].sc.tot) + parseInt(this.store.data.user[23][6].ss.tot) + parseInt(this.store.data.user[23][6].sb.tot) + parseInt(this.store.data.user[23][6].sas.tot) + parseInt(this.store.data.user[23][7].sc.tot) + parseInt(this.store.data.user[23][7].ss.tot) + parseInt(this.store.data.user[23][7].sb.tot) + parseInt(this.store.data.user[23][7].sas.tot) + parseInt(this.store.data.user[23][8].sc.tot) + parseInt(this.store.data.user[23][8].ss.tot) + parseInt(this.store.data.user[23][8].sb.tot) + parseInt(this.store.data.user[23][8].sas.tot) + parseInt(this.store.data.user[23][9].sc.tot) + parseInt(this.store.data.user[23][9].ss.tot) + parseInt(this.store.data.user[23][9].sb.tot) + parseInt(this.store.data.user[23][9].sas.tot) + parseInt(this.store.data.user[23][10].sc.tot) + parseInt(this.store.data.user[23][10].ss.tot) + parseInt(this.store.data.user[23][10].sb.tot) + parseInt(this.store.data.user[23][10].sas.tot) + parseInt(this.store.data.user[23][11].sc.tot) + parseInt(this.store.data.user[23][11].ss.tot) + parseInt(this.store.data.user[23][11].sb.tot) + parseInt(this.store.data.user[23][11].sas.tot) + parseInt(this.store.data.user[23][12].sc.tot) + parseInt(this.store.data.user[23][12].ss.tot) + parseInt(this.store.data.user[23][12].sb.tot) + parseInt(this.store.data.user[23][12].sas.tot)
      this.totaleSpeseMese[24] = parseInt(this.store.data.user[24][1].sc.tot) + parseInt(this.store.data.user[24][1].ss.tot) + parseInt(this.store.data.user[24][1].sb.tot) + parseInt(this.store.data.user[24][1].sas.tot) + parseInt(this.store.data.user[24][2].sc.tot) + parseInt(this.store.data.user[24][2].ss.tot) + parseInt(this.store.data.user[24][2].sb.tot) + parseInt(this.store.data.user[24][2].sas.tot) + parseInt(this.store.data.user[24][3].sc.tot) + parseInt(this.store.data.user[24][3].ss.tot) + parseInt(this.store.data.user[24][3].sb.tot) + parseInt(this.store.data.user[24][3].sas.tot) + parseInt(this.store.data.user[24][4].sc.tot) + parseInt(this.store.data.user[24][4].ss.tot) + parseInt(this.store.data.user[24][4].sb.tot) + parseInt(this.store.data.user[24][4].sas.tot) + parseInt(this.store.data.user[24][5].sc.tot) + parseInt(this.store.data.user[24][5].ss.tot) + parseInt(this.store.data.user[24][5].sb.tot) + parseInt(this.store.data.user[24][5].sas.tot) + parseInt(this.store.data.user[24][6].sc.tot) + parseInt(this.store.data.user[24][6].ss.tot) + parseInt(this.store.data.user[24][6].sb.tot) + parseInt(this.store.data.user[24][6].sas.tot) + parseInt(this.store.data.user[24][7].sc.tot) + parseInt(this.store.data.user[24][7].ss.tot) + parseInt(this.store.data.user[24][7].sb.tot) + parseInt(this.store.data.user[24][7].sas.tot) + parseInt(this.store.data.user[24][8].sc.tot) + parseInt(this.store.data.user[24][8].ss.tot) + parseInt(this.store.data.user[24][8].sb.tot) + parseInt(this.store.data.user[24][8].sas.tot) + parseInt(this.store.data.user[24][9].sc.tot) + parseInt(this.store.data.user[24][9].ss.tot) + parseInt(this.store.data.user[24][9].sb.tot) + parseInt(this.store.data.user[24][9].sas.tot) + parseInt(this.store.data.user[24][10].sc.tot) + parseInt(this.store.data.user[24][10].ss.tot) + parseInt(this.store.data.user[24][10].sb.tot) + parseInt(this.store.data.user[24][10].sas.tot) + parseInt(this.store.data.user[24][11].sc.tot) + parseInt(this.store.data.user[24][11].ss.tot) + parseInt(this.store.data.user[24][11].sb.tot) + parseInt(this.store.data.user[24][11].sas.tot) + parseInt(this.store.data.user[24][12].sc.tot) + parseInt(this.store.data.user[24][12].ss.tot) + parseInt(this.store.data.user[24][12].sb.tot) + parseInt(this.store.data.user[24][12].sas.tot)
      this.totaleSpeseMese[25] = parseInt(this.store.data.user[25][1].sc.tot) + parseInt(this.store.data.user[25][1].ss.tot) + parseInt(this.store.data.user[25][1].sb.tot) + parseInt(this.store.data.user[25][1].sas.tot) + parseInt(this.store.data.user[25][2].sc.tot) + parseInt(this.store.data.user[25][2].ss.tot) + parseInt(this.store.data.user[25][2].sb.tot) + parseInt(this.store.data.user[25][2].sas.tot) + parseInt(this.store.data.user[25][3].sc.tot) + parseInt(this.store.data.user[25][3].ss.tot) + parseInt(this.store.data.user[25][3].sb.tot) + parseInt(this.store.data.user[25][3].sas.tot) + parseInt(this.store.data.user[25][4].sc.tot) + parseInt(this.store.data.user[25][4].ss.tot) + parseInt(this.store.data.user[25][4].sb.tot) + parseInt(this.store.data.user[25][4].sas.tot) + parseInt(this.store.data.user[25][5].sc.tot) + parseInt(this.store.data.user[25][5].ss.tot) + parseInt(this.store.data.user[25][5].sb.tot) + parseInt(this.store.data.user[25][5].sas.tot) + parseInt(this.store.data.user[25][6].sc.tot) + parseInt(this.store.data.user[25][6].ss.tot) + parseInt(this.store.data.user[25][6].sb.tot) + parseInt(this.store.data.user[25][6].sas.tot) + parseInt(this.store.data.user[25][7].sc.tot) + parseInt(this.store.data.user[25][7].ss.tot) + parseInt(this.store.data.user[25][7].sb.tot) + parseInt(this.store.data.user[25][7].sas.tot) + parseInt(this.store.data.user[25][8].sc.tot) + parseInt(this.store.data.user[25][8].ss.tot) + parseInt(this.store.data.user[25][8].sb.tot) + parseInt(this.store.data.user[25][8].sas.tot) + parseInt(this.store.data.user[25][9].sc.tot) + parseInt(this.store.data.user[25][9].ss.tot) + parseInt(this.store.data.user[25][9].sb.tot) + parseInt(this.store.data.user[25][9].sas.tot) + parseInt(this.store.data.user[25][10].sc.tot) + parseInt(this.store.data.user[25][10].ss.tot) + parseInt(this.store.data.user[25][10].sb.tot) + parseInt(this.store.data.user[25][10].sas.tot) + parseInt(this.store.data.user[25][11].sc.tot) + parseInt(this.store.data.user[25][11].ss.tot) + parseInt(this.store.data.user[25][11].sb.tot) + parseInt(this.store.data.user[25][11].sas.tot) + parseInt(this.store.data.user[25][12].sc.tot) + parseInt(this.store.data.user[25][12].ss.tot) + parseInt(this.store.data.user[25][12].sb.tot) + parseInt(this.store.data.user[25][12].sas.tot)
      this.totaleSpeseMese[26] = parseInt(this.store.data.user[26][1].sc.tot) + parseInt(this.store.data.user[26][1].ss.tot) + parseInt(this.store.data.user[26][1].sb.tot) + parseInt(this.store.data.user[26][1].sas.tot) + parseInt(this.store.data.user[26][2].sc.tot) + parseInt(this.store.data.user[26][2].ss.tot) + parseInt(this.store.data.user[26][2].sb.tot) + parseInt(this.store.data.user[26][2].sas.tot) + parseInt(this.store.data.user[26][3].sc.tot) + parseInt(this.store.data.user[26][3].ss.tot) + parseInt(this.store.data.user[26][3].sb.tot) + parseInt(this.store.data.user[26][3].sas.tot) + parseInt(this.store.data.user[26][4].sc.tot) + parseInt(this.store.data.user[26][4].ss.tot) + parseInt(this.store.data.user[26][4].sb.tot) + parseInt(this.store.data.user[26][4].sas.tot) + parseInt(this.store.data.user[26][5].sc.tot) + parseInt(this.store.data.user[26][5].ss.tot) + parseInt(this.store.data.user[26][5].sb.tot) + parseInt(this.store.data.user[26][5].sas.tot) + parseInt(this.store.data.user[26][6].sc.tot) + parseInt(this.store.data.user[26][6].ss.tot) + parseInt(this.store.data.user[26][6].sb.tot) + parseInt(this.store.data.user[26][6].sas.tot) + parseInt(this.store.data.user[26][7].sc.tot) + parseInt(this.store.data.user[26][7].ss.tot) + parseInt(this.store.data.user[26][7].sb.tot) + parseInt(this.store.data.user[26][7].sas.tot) + parseInt(this.store.data.user[26][8].sc.tot) + parseInt(this.store.data.user[26][8].ss.tot) + parseInt(this.store.data.user[26][8].sb.tot) + parseInt(this.store.data.user[26][8].sas.tot) + parseInt(this.store.data.user[26][9].sc.tot) + parseInt(this.store.data.user[26][9].ss.tot) + parseInt(this.store.data.user[26][9].sb.tot) + parseInt(this.store.data.user[26][9].sas.tot) + parseInt(this.store.data.user[26][10].sc.tot) + parseInt(this.store.data.user[26][10].ss.tot) + parseInt(this.store.data.user[26][10].sb.tot) + parseInt(this.store.data.user[26][10].sas.tot) + parseInt(this.store.data.user[26][11].sc.tot) + parseInt(this.store.data.user[26][11].ss.tot) + parseInt(this.store.data.user[26][11].sb.tot) + parseInt(this.store.data.user[26][11].sas.tot) + parseInt(this.store.data.user[26][12].sc.tot) + parseInt(this.store.data.user[26][12].ss.tot) + parseInt(this.store.data.user[26][12].sb.tot) + parseInt(this.store.data.user[26][12].sas.tot)


      this.totaleEntrateAnnue[23] = parseInt(this.store.data.user[23][1].s.tot) + parseInt(this.store.data.user[23][2].s.tot) + parseInt(this.store.data.user[23][3].s.tot) + parseInt(this.store.data.user[23][4].s.tot) + parseInt(this.store.data.user[23][5].s.tot) + parseInt(this.store.data.user[23][6].s.tot) + parseInt(this.store.data.user[23][7].s.tot) + parseInt(this.store.data.user[23][8].s.tot) + parseInt(this.store.data.user[23][9].s.tot) + parseInt(this.store.data.user[23][10].s.tot) + parseInt(this.store.data.user[23][11].s.tot) + parseInt(this.store.data.user[23][12].s.tot)
      this.totaleEntrateAnnue[24] = parseInt(this.store.data.user[24][1].s.tot) + parseInt(this.store.data.user[24][2].s.tot) + parseInt(this.store.data.user[24][3].s.tot) + parseInt(this.store.data.user[24][4].s.tot) + parseInt(this.store.data.user[24][5].s.tot) + parseInt(this.store.data.user[24][6].s.tot) + parseInt(this.store.data.user[24][7].s.tot) + parseInt(this.store.data.user[24][8].s.tot) + parseInt(this.store.data.user[24][9].s.tot) + parseInt(this.store.data.user[24][10].s.tot) + parseInt(this.store.data.user[24][11].s.tot) + parseInt(this.store.data.user[24][12].s.tot)
      this.totaleEntrateAnnue[25] = parseInt(this.store.data.user[25][1].s.tot) + parseInt(this.store.data.user[25][2].s.tot) + parseInt(this.store.data.user[25][3].s.tot) + parseInt(this.store.data.user[25][4].s.tot) + parseInt(this.store.data.user[25][5].s.tot) + parseInt(this.store.data.user[25][6].s.tot) + parseInt(this.store.data.user[25][7].s.tot) + parseInt(this.store.data.user[25][8].s.tot) + parseInt(this.store.data.user[25][9].s.tot) + parseInt(this.store.data.user[25][10].s.tot) + parseInt(this.store.data.user[25][11].s.tot) + parseInt(this.store.data.user[25][12].s.tot)
      this.totaleEntrateAnnue[26] = parseInt(this.store.data.user[26][1].s.tot) + parseInt(this.store.data.user[26][2].s.tot) + parseInt(this.store.data.user[26][3].s.tot) + parseInt(this.store.data.user[26][4].s.tot) + parseInt(this.store.data.user[26][5].s.tot) + parseInt(this.store.data.user[26][6].s.tot) + parseInt(this.store.data.user[26][7].s.tot) + parseInt(this.store.data.user[26][8].s.tot) + parseInt(this.store.data.user[26][9].s.tot) + parseInt(this.store.data.user[26][10].s.tot) + parseInt(this.store.data.user[26][11].s.tot) + parseInt(this.store.data.user[26][12].s.tot)



      this.store.totaleEntrate = parseInt(this.totaleEntrateAnnue[23]) + parseInt(this.totaleEntrateAnnue[24]) + parseInt(this.totaleEntrateAnnue[25]) + parseInt(this.totaleEntrateAnnue[26])
      this.store.totaleRisparmi = parseInt(this.totaleRisparmioMese[23]) + parseInt(this.totaleRisparmioMese[24]) + parseInt(this.totaleRisparmioMese[25]) + parseInt(this.totaleRisparmioMese[26])
      this.store.totaleSpese = parseInt(this.totaleSpeseMese[23]) + parseInt(this.totaleSpeseMese[24]) + parseInt(this.totaleRisparmioMese[25]) + parseInt(this.totaleRisparmioMese[26])

      // console.log('23')
      // console.log(this.totaleRisparmioMese[23])
      //console.log('24')
      //console.log(this.totaleRisparmioMese[24])
      //console.log(parseInt(this.risparmi[24][1]) + parseInt(this.risparmi[24][2]))
      //console.log(parseInt(this.risparmi[24][1]) + parseInt(this.risparmi[23][2]) + parseInt(this.risparmi[23][3]) + parseInt(this.risparmi[23][4]) + parseInt(this.risparmi[23][5]) + parseInt(this.risparmi[23][6]) + parseInt(this.risparmi[23][7]) + parseInt(this.risparmi[23][8]) + parseInt(this.risparmi[23][9]) + parseInt(this.risparmi[23][10]) + parseInt(this.risparmi[23][11]) + parseInt(this.risparmi[23][12]))
      // console.log('25')
      // console.log(this.totaleRisparmioMese[25])
      // console.log('26')
      // console.log(this.totaleRisparmioMese[26])
    },

    calcVoci(dato, mese) {
      // console.log(eval(this.store.data.user[this.anno][11].s.mag.pre))
      //console.log(mese)
      let tot = 0;
      if (dato == 's') {
        Object.keys(this.store.data.user[this.anno][mese].s.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.anno][mese].s.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.anno][mese].s.mag.pre[key]);
        });

        this.store.data.user[this.anno][mese].s.tot = tot;
      } else if (dato == 'sb') {
        Object.keys(this.store.data.user[this.anno][mese].sb.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.anno][mese].sb.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.anno][mese].sb.mag.pre[key]);
        });

        this.store.data.user[this.anno][mese].sb.tot = tot;
      } else if (dato == 'sc') {
        Object.keys(this.store.data.user[this.anno][mese].sc.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.anno][mese].sc.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.anno][mese].sc.mag.pre[key]);
        });


        this.store.data.user[this.anno][mese].sc.tot = tot;
      } else if (dato == 'ss') {
        Object.keys(this.store.data.user[this.anno][mese].ss.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.anno][mese].ss.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.anno][mese].ss.mag.pre[key]);
        });


        this.store.data.user[this.anno][mese].ss.tot = tot;
      } else if (dato == 'sas') {
        Object.keys(this.store.data.user[this.anno][mese].sas.mag.pre).forEach(key => {
          //console.log(this.store.data.user[this.anno][mese].sas.mag.pre[key]);
          tot += parseInt(this.store.data.user[this.anno][mese].sas.mag.pre[key]);
        });

        this.store.data.user[this.anno][mese].sas.tot = tot;
      }


    },

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
    }
  },

  created() {
    this.calcRisparmio();
    this.focusInput();
    //console.log(this.totaleEntrateAnnue[23]);

  },

  mounted() {

  },
}
</script>

<template>
  <div class="_main" style="background:rgb(11, 11, 11)">
    <div class="row container justify-content-around pt-2 _btn-container">
      <button class="col-2 btn px-1 py-0 my-0" :class="this.anno == 23 ? '_btn-outline-primary-darkness' : ''"
        @click="setAnno(23), calcRisparmio()">2023</button>
      <button class="col-2 btn px-1 py-0 my-0" :class="this.anno == 24 ? '_btn-outline-primary-darkness' : ''"
        @click="setAnno(24), calcRisparmio()">2024</button>
      <button class="col-2 btn px-1 py-0 my-0" :class="this.anno == 25 ? '_btn-outline-primary-darkness' : ''"
        @click="setAnno(25), calcRisparmio()">2025</button>
      <button class="col-2 btn px-1 py-0 my-0" :class="this.anno == 26 ? '_btn-outline-primary-darkness' : ''"
        @click="setAnno(26), calcRisparmio()">2026</button>
    </div>

    <div class="table-responsive _tabella-wrapper">
      <table class="table table-striped table-dark">
        <thead>
          <tr class="table-light">
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
          <tr v-for="(mese, key) in this.store.data.user[this.anno]" :key="mese" class="_myrow">
            <th style=" border-right:1px solid grey;">
              <div class="d-flex align-items-center justify-content-center gap-1" @click="allowRow(key - 1)"
                style="cursor:pointer;">
                {{ this.store.mesi[key - 1] }}
              </div>
            </th>

            <!-- STIENDIO mensile -->
            <td style=" border-right:1px solid grey;">
              <div class="d-flex align-items-center justify-content-center gap-1" @click="allowRow(key - 1)"
                style="cursor:pointer">
                <span class=" _input-table _text-secondary">{{ mese.s.tot }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio stipendio -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.s.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.s.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.anno][key].s.mag.art[index]" @click.stop=""
                      class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.anno][key].s.mag.pre[index]" @click.stop=""
                      class="pre_class" @change="calcVoci('s', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="btn _btn-outline-thirdary-darkness-hover ms-2"
                      style="font-size: .7em; padding: .2em .6em; margin-top: .2em;"
                      @click.stop="deleteEl(key, 's', index), calcVoci('s', key), calcRisparmio()">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-outline-light" style="font-size: .8em; padding: .2em .6em; margin-top: .2em;"
                    @click="prop(), createEl(key, 's', 'prod', 0), calcVoci('s', key), calcRisparmio()">+</button>

                </div>
              </div>

            </td>

            <!-- bollette -->
            <td style=" border-right:1px solid grey;">
              <div class="d-flex align-items-center justify-content-center gap-1" @click="allowRow(key - 1)"
                style="cursor:pointer">
                <span class=" _input-table">{{ mese.sb.tot }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio bollette -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sb.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sb.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.anno][key].sb.mag.art[index]"
                      @click="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.anno][key].sb.mag.pre[index]"
                      @click="() => { this.prop() }" class="pre_class" @change="calcVoci('sb', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="btn _btn-outline-thirdary-darkness-hover ms-2"
                      style="font-size: .7em; padding: .2em .6em; margin-top: .2em;"
                      @click.stop="deleteEl(key, 'sb', index), calcVoci('sb', key), calcRisparmio()">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-outline-light" style="font-size: .8em; padding: .2em .6em; margin-top: .2em;"
                    @click.stop=" createEl(key, 'sb', 'prod', 0)">+</button>

                </div>
              </div>

            </td>


            <!-- spese affitto -->
            <td style=" border-right:1px solid grey;">
              <div class="d-flex align-items-center justify-content-center gap-1" @click="allowRow(key - 1)"
                style="cursor:pointer">
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.sc.tot }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio stipendio -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sc.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sc.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.anno][key].sc.mag.art[index]"
                      @click="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.anno][key].sc.mag.pre[index]"
                      @click="() => { this.prop() }" class="pre_class" @change="calcVoci('sc', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="btn _btn-outline-thirdary-darkness-hover ms-2"
                      style="font-size: .7em; padding: .2em .6em; margin-top: .2em;"
                      @click.stop="deleteEl(key, 'sc', index), calcVoci('sc', key), calcRisparmio()">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-outline-light" style="font-size: .8em; padding: .2em .6em; margin-top: .2em;"
                    @click.stop=" createEl(key, 'sc', 'prod', 0)">+</button>

                </div>
              </div>

            </td>

            <!-- spese alimentari -->
            <td style=" border-right:1px solid grey;">
              <div class="d-flex align-items-center justify-content-center gap-1" @click="allowRow(key - 1)"
                style="cursor:pointer">
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.ss.tot }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio alimenti -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.ss.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.ss.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.anno][key].ss.mag.art[index]"
                      @click="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.anno][key].ss.mag.pre[index]"
                      @click="() => { this.prop() }" class="pre_class" @change="calcVoci('ss', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="btn _btn-outline-thirdary-darkness-hover ms-2"
                      style="font-size: .7em; padding: .2em .6em; margin-top: .2em;"
                      @click.stop="deleteEl(key, 'ss', index), calcVoci('ss', key), calcRisparmio()">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-outline-light" style="font-size: .8em; padding: .2em .6em; margin-top: .2em;"
                    @click.stop=" createEl(key, 'ss', 'prod', 0)">+</button>

                </div>
              </div>

            </td>

            <!-- altre spese-->
            <td style=" border-right:1px solid grey;">
              <div class="d-flex align-items-center justify-content-center gap-1" @click="allowRow(key - 1)"
                style="cursor:pointer">
                <span @change="this.calcRisparmio()" class=" _input-table">{{ mese.sas.tot }}</span>
                <span style="font-size:.5em">€</span>
              </div>

              <!-- dettaglio altre spese -->
              <div class="_detailsRow">
                <ul v-if="Object.keys(mese.sas.mag.art).length > 0">
                  <li v-for="(articolo, index) in mese.sas.mag.art" :key="index">
                    <input type="text" v-model="this.store.data.user[this.anno][key].sas.mag.art[index]"
                      @click="() => { this.prop() }" class="art_class">
                    <span class="_sepa"> : </span>
                    <input type="num" v-model="this.store.data.user[this.anno][key].sas.mag.pre[index]"
                      @click="() => { this.prop() }" class="pre_class" @change="calcVoci('sas', key), calcRisparmio()">
                    <span class="_euro">€</span>

                    <!-- Cancella record -->
                    <button class="btn _btn-outline-thirdary-darkness-hover ms-2"
                      style="font-size: .7em; padding: .2em .6em; margin-top: .2em;"
                      @click.stop="deleteEl(key, 'sas', index), calcVoci('sas', key), calcRisparmio()">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </li>

                </ul>

                <!-- Aggiungi record -->
                <span style="text-align:center; border-top:1px solid white; width:132px" v-else>Nessun prodotto</span>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-outline-light" style="font-size: .8em; padding: .2em .6em; margin-top: .2em;"
                    @click.stop=" createEl(key, 'sas', 'prod', 0)">+</button>

                </div>
              </div>

            </td>

            <!-- risparmi -->
            <td>
              <div class="d-flex align-items-center justify-content-center gap-1" @click="allowRow(key - 1)"
                style="cursor:pointer">
                <span class=" _input-table _text-primary">{{ this.risparmi[this.anno][key] }}</span>
                <span style="font-size:.5em">€</span>
              </div>
            </td>


          </tr>
        </tbody>
      </table>
    </div>

    <div class="_totale d-flex justify-content-center w-100">
      <span class="me-4 ">Totale Entrate Annuali: <strong class="_text-secondary">{{ this.totaleEntrateAnnue[this.anno] }}
          €</strong></span>
      <span class="me-4 ">Totale Speso: <strong class="_text-thirdary">{{ this.totaleSpeseMese[this.anno] }}
          €</strong></span>
      <span class="">Totale Risparmiato: <strong class="_text-primary">{{ this.totaleRisparmioMese[this.anno] }}
          €</strong></span>
    </div>

    <!-- BOTTON -->
    <div class="mb-2">
      <button class="btn _btn-outline-primary-darkness-hover  mx-4" @click="save()"><i style="font-size: .8em;"
          class="fa-regular fa-floppy-disk"></i> <span>Save</span></button>
      <button class="btn _btn-outline-secondary-darkness-hover  " @click="resetData()"><i style="font-size: .8em;"
          class="fa-solid fa-clock-rotate-left"></i> <span>Reset</span></button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._main {
  height: 86vh;
  width: 95%;
  margin: 0 auto;
  overflow-y: auto;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;





  ._info-input {
    --bs-gutter-x: 0rem;
    width: 95%;
    margin: 0.2em auto;
  }

  ._tabella-wrapper {
    width: 99%;
    border-radius: 10px;

    table {

      thead {

        th {
          border-right: 1px solid rgb(75, 75, 75);
          background-color: #212529 !important;
          text-transform: uppercase;
        }
      }

      tbody {

        tr {

          &:hover {

            td,
            th {
              background: linear-gradient(to bottom, #0000000e, #ffffff1c, #0000000e) !important;
              --bs-table-bg-type: none;
              //cursor: pointer;

              border-color: transparent;

              input {
                cursor: pointer;

                &:hover {
                  color: rgb(73 146 255) !important;

                  &+span {
                    color: rgb(73 146 255);
                  }
                }
              }

              input.text-success {
                //cursor: pointer;

                &:hover {
                  color: rgb(25, 117, 75) !important;

                  &+span {
                    color: rgb(255, 255, 255) !important;
                  }
                }
              }

            }
          }

          td {
            text-align: start;


            input {
              border: none;
              background: none;
              text-align: end;
              width: 60%;
              margin-right: .3em;
            }
          }
        }
      }
    }
  }

}

.table-responsive {
  overflow-y: auto;
}

._main {
  ._tabella-wrapper {
    table {
      tbody {

        ._myrow {
          //border: 1px solid blue;
          //width: 200px;


          td {
            //border: 1px solid red;
            //cursor: pointer;

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
}
</style>
