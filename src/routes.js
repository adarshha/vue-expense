 import addExpense from './components/addExpense.vue';
 import viewExpenses from './components/viewExpenses.vue';
 import singleExpense from './components/singleExpense.vue';

export default[
    {path: '/', component : addExpense},
    {path: '/view', component : viewExpenses},
    {path: '/expense/:id', component : singleExpense}
]