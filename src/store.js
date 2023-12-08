import { reactive } from 'vue';
//console.log(localStorage)
export const store = reactive({
    //routing
    //-------------------
    pages: ['home', 'graph', 'etc'],
    currentPage: 'home',
    contatorePage: 0,
    //-------------------
    data: JSON.parse(localStorage.getItem('myData')),
    mesi: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
});