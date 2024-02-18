<script>
import { store } from '../store.js';
export default {
  name: 'AppStatisticheMeseCorrente',


  data() {
    return {
      store,
      clockDiv: true,

      anno: 23,
      questoMeseIndex: 0,
      questoMese: '',
      mesePassato: '',
      mesiPassati: [],
      mesiPassatiIndex: [],

      speseAffittoDodiciMesi: [],
      speseBolletteDodiciMesi: [],
      speseAlimentariDodiciMesi: [],
      speseAltreSpeseDodiciMesi: [],
      stipendiDodiciMesi: [],
      risparmiDodiciMesi: [],

      mediaAffitto: 0,
      mediaBollette: 0,
      mediaAlimentari: 0,
      mediaAltreSpese: 0,
      mediaStipendi: 0,
      mediaRisparmi: 0,

      mensilitaCalcolo: 12,

      percAffitto: 0,
      percBollette: 0,
      percAlimentari: 0,
      percAltreSpese: 0,
      percStipendio: 0,
      percRisparmi: 0,
    }
  },


  props: {
    // msg: String
  },

  methods: {

    clock() {
      setInterval(() => {
        if (this.clockDiv) {
          this.clockDiv = false
        } else {
          this.clockDiv = true
        }
      }, 1000);
    },

    setMesePassato() {

      if (this.store.currentMonth == 1) {
        let anno = this.store.currentYear.toString().substring(2, 4) - 1;
        //console.log(anno)
        let mese = 11
        this.mesePassato = this.store.data.user[anno][mese]
      } else {

        this.mesePassato = this.store.data.user[this.store.currentYear.toString().substring(2, 4)][this.store.currentMonth - 1]
      }

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

    setMeseIndex(string) {
      let paroleDivise = string.split(' ');
      let mese = paroleDivise[0];
      this.anno = paroleDivise[1].slice(-2);


      switch (mese) {
        case "Gennaio":
          this.questoMeseIndex = 0;
          break;
        case "Febbraio":
          this.questoMeseIndex = 1;
          break;
        case "Marzo":
          this.questoMeseIndex = 2;
          break;
        case "Aprile":
          this.questoMeseIndex = 3;
          break;
        case "Maggio":
          this.questoMeseIndex = 4;
          break;
        case "Giugno":
          this.questoMeseIndex = 5;
          break;
        case "Luglio":
          this.questoMeseIndex = 6;
          break;
        case "Agosto":
          this.questoMeseIndex = 7;
          break;
        case "Settembre":
          this.questoMeseIndex = 8;
          break;
        case "Ottobre":
          this.questoMeseIndex = 9;
          break;
        case "Novembre":
          this.questoMeseIndex = 10;
          break;
        case "Dicembre":
          this.questoMeseIndex = 11;
          break;
        default:
          this.questoMeseIndex = this.currentMonth
          break;
      }



    },

    setMeseIndexUpDown(string) {
      let mese = '';

      if ((this.questoMeseIndex + 1) < 10) {
        mese = '0' + (this.questoMeseIndex + 1)
      } else {
        mese = (this.questoMeseIndex + 1)
      }
      let data = '20' + this.anno + '-' + mese;

      if (string == 'up') {

        if (data < this.mesiPassatiIndex[0]) {

          if (this.questoMeseIndex == 11) {
            this.questoMeseIndex = 0
            if (this.anno < this.store.currentYear.toString().substring(2, 4)) {
              this.anno++
            }
          } else {
            this.questoMeseIndex++;
          }
        }

      } else {

        if (data > this.mesiPassatiIndex[this.mesiPassatiIndex.length - 1]) {
          if (this.questoMeseIndex == 0) {
            this.questoMeseIndex = 11
            if (this.anno == this.store.currentYear.toString().substring(2, 4)) {
              this.anno--
            }
          } else {
            this.questoMeseIndex--;
          }
        }
      }

    },

    changeMensilita(up = false) {
      //let comp = this.mensilitaCalcolo

      if (up == 'add') {
        this.mensilitaCalcolo++
      } else if (up == 'down') {
        this.mensilitaCalcolo--
      }

      if (this.mensilitaCalcolo > 12) {
        this.mensilitaCalcolo = 12
      } else if (this.mensilitaCalcolo < 1) {
        this.mensilitaCalcolo = 1
      }


      this.setDodiciMesi(this.mensilitaCalcolo)


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
    },

    setPercentuali() {

      // STIPENDIO
      let stipendioDif = this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot - this.mediaStipendi
      this.percStipendio = (stipendioDif / this.mediaStipendi) * 100
      this.percStipendio = Math.round(this.percStipendio * 100) / 100
      if (this.mediaStipendi == 0) {
        this.percStipendio = 0
      }

      //AFFITTO
      let affittoDif = this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot - this.mediaAffitto
      this.percAffitto = (affittoDif / this.mediaAffitto) * 100
      this.percAffitto = Math.round(this.percAffitto * 100) / 100
      if (this.mediaAffitto == 0) {
        this.percAffitto = 0
      }

      //BOLLETTE
      let bolletteDif = this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot - this.mediaBollette
      this.percBollette = (bolletteDif / this.mediaBollette) * 100
      this.percBollette = Math.round(this.percBollette * 100) / 100
      if (this.mediaBollette == 0) {
        this.percBollette = 0
      }

      //ALIMENTARI
      let alimentariDif = this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot - this.mediaAlimentari
      this.percAlimentari = (alimentariDif / this.mediaAlimentari) * 100
      this.percAlimentari = Math.round(this.percAlimentari * 100) / 100
      if (this.mediaAlimentari == 0) {
        this.percAlimentari = 0
      }

      //ALIMENTARI
      let altreSpeseDif = this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot - this.mediaAltreSpese
      this.percAltreSpese = (altreSpeseDif / this.mediaAltreSpese) * 100
      this.percAltreSpese = Math.round(this.percAltreSpese * 100) / 100
      if (this.mediaAltreSpese == 0) {
        this.percAltreSpese = 0
      }

      //RISPARMI
      let risparmiDif = (this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot -
        (this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot +
          this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot +
          this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot +
          this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot)) - this.mediaRisparmi

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
    }

  },

  created() {

    this.questoMeseIndex = this.store.currentMonth
    this.anno = this.store.currentYear.toString().substring(2, 4)


  },

  mounted() {
    this.setDodiciMesi();
    this.clock();


    this.questoMese = this.store.data.user[this.store.currentYear.toString().substring(2, 4)][this.store.currentMonth]
    this.mesePassato = this.store.data.user[this.store.currentYear.toString().substring(2, 4)][this.store.currentMonth]
  },
}
</script>

<template>
  <div class="_top-right-top " :class="this.store.darkmode ? '' : 'light'">

    <div class="top_side">

      <!-- MESE CORRENTE E RICERCA MEDIA -->
      <div class="container d-flex align-items-center gap-3">

        <!-- BOTTONI UP DOWN MESI -->
        <div class="_wrapper-botton-add-down">
          <button class="_btn-outline-primary-darkness-hover" @click="setMeseIndexUpDown('down'); setPercentuali()">
            <i class="fa-solid fa-sort-down"></i>
          </button>
          <button class="_btn-outline-primary-darkness-hover" @click="setMeseIndexUpDown('up'); setPercentuali()">
            <i class="fa-solid fa-sort-up"></i>
          </button>
        </div>


        <!-- TITOLO e MESI -->
        <div class="d-flex flex-column">
          <!-- TITOLO -->
          <div class="_titolo">
            <h2 class=""> {{ this.store.mesi[this.questoMeseIndex] + ' 20' + this.anno }}</h2>
          </div>
          <!-- TESTO CALCOLA -->
          <div class="">
            <span>{{ mensilitaCalcolo == 1 ? 'Ultimo ' : 'Ultimi ' }}</span>
            <input class="_mensilita" type="number" v-model="this.mensilitaCalcolo" @input="changeMensilita('false')"
              @click="focusInput()">
            <span>{{ mensilitaCalcolo == 1 ? 'Mese ' : ' Mesi' }}</span>
          </div>
        </div>

      </div>

      <!-- ORA E DATA -->
      <div class="_ora_e_data col-md-4 col-12">
        <span class="_text-white">{{ this.store.currentWeekDay.substring(0, 3) + ' ' + this.store.currentDay + ' '
          +
          this.store.mesi[this.store.currentMonth] + ' ' +
          this.store.currentYear }}</span>

        <!-- ORA -->
        <span class="_text-white">
          <span>{{ this.store.currentHours < 10 ? '0' + this.store.currentHours : this.store.currentHours }}</span>
              <span :class="this.clockDiv ? '_show' : '_hidden'">:</span>
              <span>{{ this.store.currentMin < 10 ? '0' + this.store.currentMin : this.store.currentMin }}</span>
              </span>
      </div>


    </div>

    <!-- BADGE MESI -->
    <div class="my_badge_wrapper">
      <button class=" _add" @click="changeMensilita('add')"> <span>+</span> </button>
      <button class=" _remove" @click="changeMensilita('down')"> <span>-</span> </button>

      <span class="my_badge" v-for="(mese, key) in this.mesiPassati" :key="mese"
        @click=" setMeseIndex(this.mesiPassati[key]); changeMensilita('false')">{{
          this.mesiPassati[key]
        }}</span>
    </div>

  </div>

  <div class=" _top-right-bottom ">
    <!-- MEDIA -->
    <div class="_media">
      <!-- MEDIE -->
      <ul>
        <li>
          <h5>QUESTO MESE</h5>
        </li>

        <li> <span class="_media-text">{{ this.store.mesi[this.questoMeseIndex] }} Stipendio:</span> <i
            class="fa-solid fa-money-bill"></i><span class="_text-primary _extra-light">{{
              this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
          <span class="_up-down-sign">
            <i v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot < this.mediaStipendi"
              class="fa-solid fa-angle-down _text-thirdary"></i>
            <i class="fa-solid fa-angle-up _text-primary"
              v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot > this.mediaStipendi"></i>
            <span v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot == this.mediaStipendi">=</span>
          </span>
        </li>

        <li><span class="_media-text">{{ this.store.mesi[this.questoMeseIndex] }} Affitto:</span> <i
            class="fa-solid fa-house "></i> <span class="_text-primary _extra-light">{{
              this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
          <span class="_up-down-sign">
            <i v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot < this.mediaAffitto"
              class="fa-solid fa-angle-down _text-primary"></i>
            <i class="fa-solid fa-angle-up _text-thirdary"
              v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot > this.mediaAffitto"></i>
            <span v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot == this.mediaAffitto">=</span>
          </span>
        </li>

        <li><span class="_media-text">{{ this.store.mesi[this.questoMeseIndex] }} Bollette:</span> <i
            class="fa-solid fa-newspaper me-2"></i> <span class="_text-primary _extra-light">{{
              this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
          <span class="_up-down-sign">
            <i v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot < this.mediaBollette"
              class="fa-solid fa-angle-down _text-primary"></i>
            <i class="fa-solid fa-angle-up _text-thirdary"
              v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot > this.mediaBollette"></i>
            <span v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot == this.mediaBollette">=</span>
          </span>
        </li>

        <li> <span class="_media-text">{{ this.store.mesi[this.questoMeseIndex] }} Alimentari:</span> <i
            class="fa-solid fa-utensils me-2"></i><span class="_text-primary _extra-light"> {{
              this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
          <span class="_up-down-sign">
            <i v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot < this.mediaAlimentari"
              class="fa-solid fa-angle-down _text-primary"></i>
            <i class="fa-solid fa-angle-up _text-thirdary"
              v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot > this.mediaAlimentari"></i>
            <span v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot == this.mediaAlimentari">=</span>
          </span>
        </li>

        <li><span class="_media-text">{{ this.store.mesi[this.questoMeseIndex] }} Altre Spese:</span><i
            class="fa-solid fa-martini-glass-citrus me-2"></i> <span class="_text-primary _extra-light">{{
              this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
          <span class="_up-down-sign">
            <i v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot < this.mediaAltreSpese"
              class="fa-solid fa-angle-down _text-primary"></i>
            <i class="fa-solid fa-angle-up  _text-thirdary"
              v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot > this.mediaAltreSpese"></i>
            <span
              v-if="this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot == this.mediaAltreSpese">=</span>
          </span>
        </li>

        <li> <span class="_media-text">{{ this.store.mesi[this.questoMeseIndex] }} Risparmi:</span> <i
            class="fa-solid fa-coins"></i><span class="_text-primary _extra-light">{{
              (this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot -
                (this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot +
                  this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot +
                  this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot +
                  this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot)).toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
          <span class="_up-down-sign">
            <i v-if="(this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot -
              (this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot)) < this.mediaRisparmi"
              class="fa-solid fa-angle-down _text-thirdary"></i>
            <i class="fa-solid fa-angle-up _text-primary" v-if="(this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot -
              (this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot)) > this.mediaRisparmi"></i>
            <span v-if="(this.store.data.user[this.anno][this.questoMeseIndex + 1].s.tot -
              (this.store.data.user[this.anno][this.questoMeseIndex + 1].sc.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].sb.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].ss.tot +
                this.store.data.user[this.anno][this.questoMeseIndex + 1].sas.tot)) == this.mediaRisparmi">=</span>
          </span>
        </li>
      </ul>
      <!-- MEDIE -->
      <ul>
        <li>
          <h5>MEDIA</h5>
        </li>
        <li><span class="_media-text">Media Spese Stipendio:</span> <i class="fa-solid fa-money-bill"></i> <span
            class="_text-primary _extra-light">{{
              this.mediaStipendi.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
        </li>
        <li><span class="_media-text">Media Spese Affitto:</span> <i class="fa-solid fa-house "></i> <span
            class="_text-primary _extra-light">{{
              this.mediaAffitto.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span>
        </li>
        <li><span class="_media-text">Media Spese Bollette: </span> <i class="fa-solid fa-newspaper me-2"></i> <span
            class="_text-primary _extra-light">{{
              this.mediaBollette.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span></li>
        <li><span class="_media-text">Media Spese Alimentari:</span> <i class="fa-solid fa-utensils me-2"></i><span
            class="_text-primary _extra-light"> {{
              this.mediaAlimentari.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span></li>
        <li><span class="_media-text">Media Altre Spese:</span><i class="fa-solid fa-martini-glass-citrus me-2"></i> <span
            class="_text-primary _extra-light">{{
              this.mediaAltreSpese.toFixed(2) }} <span
              :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span></li>
        <li><span class="_media-text">Media Risparmi: </span><i class="fa-solid fa-coins"></i> <span
            class="_text-primary _extra-light">{{ this.mediaRisparmi.toFixed(2)
            }} <span :class="this.store.darkmode ? 'text-light' : 'text-dark'">€</span></span></li>
      </ul>


    </div>

    <!-- PERCENTUALI -->
    <div class="_percentuali">

      <div class="_perc-affitti _perc">
        <span class="_text"><i class="fa-solid fa-house me-2"></i> <span>Affitto:</span> </span> <span
          :class="this.percAffitto == 0 ? '' : (this.percAffitto > 0 ? (this.percAffitto > 25 ? '_perc-ultra-neg' : '_perc-neg') : (this.percAffitto < -25 ? '_perc-ultra' : '_perc-pos'))">
          {{
            this.percAffitto > 0 ? '+ ' +
          this.percAffitto :
            (this.percAffitto == 0 ?
              this.percAffitto : '- ' + Math.abs(this.percAffitto))
          }}%</span>
      </div>

      <div class="_perc-bollette _perc">
        <span class="_text"><i class="fa-solid fa-newspaper me-2"></i> <span>Bollette:</span> </span> <span
          :class="this.percBollette == 0 ? '' : (this.percBollette > 0 ? (this.percBollette > 25 ? '_perc-ultra-neg' : '_perc-neg') : (this.percBollette < -25 ? '_perc-ultra' : '_perc-pos'))">
          {{
            this.percBollette > 0 ?
            '+ ' +
            this.percBollette : (this.percBollette == 0 ?
              this.percBollette : '- ' +
              Math.abs(this.percBollette)) }}%</span>
      </div>

      <div class="_perc-alimentari _perc">
        <span class="_text"><i class="fa-solid fa-utensils me-2"></i> <span>Alimenti:</span></span> <span
          :class="this.percAlimentari == 0 ? '' : (this.percAlimentari > 0 ? (this.percAlimentari > 25 ? '_perc-ultra-neg' : '_perc-neg') : (this.percAlimentari < -25 ? '_perc-ultra' : '_perc-pos'))">{{
            this.percAlimentari > 0
            ?
            '+ ' +
            this.percAlimentari : (this.percAlimentari == 0
              ? this.percAlimentari : '- ' +
              Math.abs(this.percAlimentari))
          }}%</span>
      </div>

      <div class="_perc-altrespese _perc">
        <span class="_text"><i class="fa-solid fa-martini-glass-citrus me-2"></i> <span>Altro:</span> </span>
        <span
          :class="this.percAltreSpese == 0 ? '' : (this.percAltreSpese > 0 ? (this.percAltreSpese > 25 ? '_perc-ultra-neg' : '_perc-neg') : (this.percAltreSpese < -25 ? '_perc-ultra' : '_perc-pos'))">{{
            this.percAltreSpese > 0
            ? '+ ' + this.percAltreSpese : (this.percAltreSpese ==
              0 ? this.percAltreSpese : '- ' +
            Math.abs(this.percAltreSpese))
          }}%</span>
      </div>

      <div class="_perc-stipendio _perc _impo">
        <span class="_text"> Stipendio:</span> <span
          :class="this.percStipendio == 0 ? '' : (this.percStipendio > 0 ? (this.percStipendio > 25 ? '_perc-ultra' : '_perc-pos') : (this.percStipendio < -25 ? '_perc-ultra-neg' : '_perc-neg'))">
          {{ this.percStipendio > 0 ? '+ ' + this.percStipendio :
            (this.percStipendio == 0 ?
              this.percStipendio : '- ' +
              Math.abs(this.percStipendio))
          }}%</span>
      </div>

      <div class="_perc-risparmi _perc _impo">
        <span class="_text"> Risparmi:</span> <span
          :class="this.percRisparmi == 0 ? '' : (this.percRisparmi > 0 ? (this.percRisparmi > 25 ? '_perc-ultra' : '_perc-pos') : (this.percRisparmi < -25 ? '_perc-ultra-neg' : '_perc-neg'))">
          {{ this.percRisparmi > 0 ? '+ ' + this.percRisparmi :
            (this.percRisparmi == 0 ? this.percRisparmi : '- ' +
              Math.abs(this.percRisparmi)) }}%</span>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

._top-right-top {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding-top: .5em;

  .top_side {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;


    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

    ._mensilita {
      width: 18px;
      border: none;
      background-color: transparent;
      color: $primary;
      text-align: center;
    }

    ._wrapper-botton-add-down {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: .6em;
      transform: scale(.8);

      button {
        height: 33px;
        position: relative;

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }

    ._ora_e_data {
      width: calc(100% / 3);
      min-width: 220px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.8em;
      color: rgb(108, 108, 108);
      gap: 1em;
      margin-right: 2em;

    }


  }


  .my_badge_wrapper {
    display: flex;
    justify-content: center;
    width: calc(100% - 44px);
    height: 50px;
    align-items: center;
    flex-direction: column;
    flex-flow: wrap;
    gap: .3em;
    margin: .4em auto;
    padding: .4em 0.2em;
    position: relative;
    border-top: 1px solid darken($primary, 10%);
    border-bottom: 1px solid darken($primary, 10%);


    ._add {
      right: -20px;
      border-radius: 0px 10px 10px 0px;
    }

    ._remove {
      left: -20px;
      border-radius: 10px 0px 0px 10px;
    }

    ._add,
    ._remove {
      position: absolute;
      top: -1px;
      width: 22px;
      height: 50px;
      padding: 0.6em !important;
      background: transparent;

      border: 1px solid darken($primary, 10%);
      color: darken($primary, 10%);
      transition: all .5s;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:hover {
        background: darken($primary, 10%);
        border: 1px solid darken($primary, 0%);
        color: darken($color-light, 0%);
      }

      &:active {
        background: rgba(29, 29, 29, 0.34);
        border: 1px solid darken($primary, 50%);
        color: darken($primary, 50%);
      }
    }

    .my_badge {
      background-color: rgba($primary, 0.1);
      border: 1px solid $primary;
      font-size: .55em;
      width: 65px;
      text-align: center;
      border-radius: 10px;
      cursor: pointer;
      transition: all .5s;

      &:hover {
        background-color: darken($primary, 10%);
        border: 1px solid $primary;
        box-shadow: 0px 0px 5px $primary;
      }
    }
  }

}

._top-right-bottom {
  width: 100%;
  padding: 1em;

  ._media {
    display: flex;
    justify-content: space-between;


    ul {
      list-style-type: none;
      padding: 0;
      width: 40%;

      li {
        display: flex;
        justify-content: space-between;
        position: relative;
        border: 1px solid transparent;
        transition: all .3s;

        &:hover {
          border-bottom: 1px solid $primary;

          ._media-text {
            font-weight: 900;


          }

          span {
            font-weight: 900;

          }
        }

        ._media-text {
          font-weight: 100;

        }

        span {
          font-weight: 100;
        }

        i {
          display: none
        }

        ._up-down-sign {
          position: absolute;
          right: -25px;
          top: 2px;
          font-size: 0.9em;
          border: 1px solid rgb(77 75 75 / 35%);
          border-radius: 50%;
          width: 20px;
          height: 20px;


          i,
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            display: block;


          }

        }
      }
    }
  }
}

._percentuali {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1em;
  gap: 1em;

  ._perc {
    width: calc((100% / 4) - 1em);
    font-size: .8em;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: .5em 2em;
    border: 1px solid rgb(67, 67, 67);
    transition: all .3s;
    border-radius: 20px;

    &:hover {
      background-color: rgba($primary, 70%);
      color: white !important;

      ._perc-neg,
      ._perc-pos,
      ._perc-ultra-neg,
      ._perc-ultra {
        color: white;
      }
    }

    &._impo {
      width: calc((100% / 2) - 1em);
      border: 1px solid darken($primary, 20%);

    }

    ._perc-neg {
      color: lighten($thirdary, 20%)
    }

    ._perc-pos {
      color: lighten($primary, 20%)
    }

    ._perc-ultra-neg {
      color: lighten($thirdary, 0%)
    }

    ._perc-ultra {
      color: lighten($primary, 0%)
    }
  }
}

._show {
  opacity: 1;
}

._hidden {
  opacity: 0;
}

@media only screen and (max-width: 1155px) {
  ._percentuali {
    ._perc {
      padding: .2em .4em;

      ._text {
        span {
          display: none;
        }
      }
    }
  }
}

@media only screen and (max-width: 1154px) {
  ._top-right-bottom {

    padding: 0em 1em;

    h5 {
      margin: 0;
      font-size: 1em;
    }

    ._media {

      flex-wrap: wrap;



      ul {
        width: 40%;

        li {


          ._media-text {
            display: none;
          }

          i {
            display: block;
          }

        }
      }
    }
  }
}

@media only screen and (max-width: 720px) {


  ._top-right-bottom {


    ._media {

      flex-wrap: wrap;



      ul {
        width: 100%;

        li {
          padding-right: 2em;

          i {
            display: none;
          }

          ._media-text {
            display: block;
          }

          ._up-down-sign {
            right: 0px;

            i {
              display: block;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  ._top-right-top {
    .top_side {
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
    }

    .my_badge_wrapper {
      .my_badge {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 5ch;
      }
    }
  }

  ._top-right-bottom {
    ._media {

      ul {
        li {
          ._media-text {
            display: none;
          }

          i {
            display: block;
          }
        }
      }


    }

    ._percentuali {

      ._perc {
        width: calc(50% - 1em);
      }

      ._perc._impo {
        width: calc(100% - 1em);
      }
    }
  }

  ._main ._top-right {
    min-height: 730px;
  }
}


.light {

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

  ._text-primary {
    color: $primary-light !important;
  }

  ._text-secondary {
    color: $secondary-light !important;
  }

  ._text-thirdary {
    color: $thirdary-light !important;
  }


  .my_badge_wrapper {
    border-top: 1px solid darken($primary-light, 2%);
    border-bottom: 1px solid darken($primary-light, 2%);

    ._add,
    ._remove {
      background: transparent;

      border: 1px solid darken($primary-light, 2%);
      color: darken($primary-light, 30%);


      &:hover {
        background: rgba($primary, 25%);
        border: 1px solid darken($primary-light, 0%);
        color: darken($primary-light, 0%);
      }

      &:active {
        background: rgba(235, 235, 235, 0.34);
        border: 1px solid darken($primary-light, 50%);
        color: darken($primary-light, 50%);
      }
    }

    .my_badge {
      background-color: darken($background-light, 2%);
      border: 1px solid $primary-light;

      &:hover {
        background-color: rgba($primary, 65%);
        border: 1px solid $primary-light;
        box-shadow: 0px 0px 5px $primary-light;
        color: $color-light;
      }
    }
  }

}

._top-right-bottom {


  ._media {

    ul {

      li {

        ._up-down-sign {
          border: 1px solid rgb(77 75 75 / 35%);
        }
      }
    }
  }
}

._percentuali {


  ._perc {
    border: 1px solid rgb(67, 67, 67);


    &._impo {
      width: calc((100% / 2) - 1em);
      border: 1px solid darken($primary-light, 20%);

    }

    ._perc-neg {
      color: lighten($thirdary-light, 10%);
    }

    ._perc-pos {
      color: lighten($primary-light, 10%)
    }

    ._perc-ultra-neg {
      color: lighten($thirdary-light, 0%)
    }

    ._perc-ultra {
      color: lighten($primary-light, 0%)
    }
  }
}
</style>
