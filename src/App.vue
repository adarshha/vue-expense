<template>
  <div>
    <app-header></app-header>
     <router-view></router-view>
      
   </div> 
</template>

<script>


import addExpense from './components/addExpense.vue';
import viewExpenses from './components/viewExpenses.vue';
import Header from './components/Header.vue';
// import listExpense from './components/listExpense.vue';


export default {
  components:{
    'add-expense' :addExpense,
    'view-expenses' :viewExpenses,
    'app-header' :Header,
    // 'list-expense':listExpense
 },
 
  data () {
    return {
    
    }
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
