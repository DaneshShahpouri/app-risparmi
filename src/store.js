import { reactive } from 'vue';
//console.log(localStorage)
export const store = reactive({

    //routing
    //----------------------------------------------
    pages: ['home', 'graph', 'stat'],
    currentPage: 'home',
    contatorePage: 0,
    totaleRisparmi: 0,
    totaleEntrate: 0,
    totaleSpese: 0,
    anno: 23,
    changeGraph: true,
    //----------------------------------------------

    //DATA
    //----------------------------------------------
    data: JSON.parse(localStorage.getItem('myData')),
    tempData: JSON.parse(localStorage.getItem('myData')),
    mesi: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    week: ['Domenica', 'Lunedì', 'MArtedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],

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
    optionGraph: 'spese',
    totaleRisparmioMese: { 23: 0, 24: 0, 25: 0, 26: 0 },
    totaleSpeseMese: { 23: 0, 24: 0, 25: 0, 26: 0 },
    totaleEntrateAnnue: { 23: 0, 24: 0, 25: 0, 26: 0 },
    //----------------------------------------------

    viewModuleReset: false,
    viewModule: false,
    confermReset: false,
    animationReset: false,

    currentYear: '',
    currentMonth: '',
    currentDay: '',
    currentHour: '',
    currentMin: '',
    currentWeekDay: '',

});