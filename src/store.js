import { reactive } from 'vue';
//console.log(localStorage)
export const store = reactive({
    data: JSON.parse(localStorage.getItem('myData'))
});