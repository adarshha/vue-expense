<template>
    <div class="single-expense">
        <h1 class="x">Name:{{expense.expenseName}}</h1>
        <h2 class="y">Amount: Rs.{{expense.expenseAmount}}</h2>
        <h3 class="z">Date:{{expense.expenseDate}}</h3>
   
        </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data(){
        return{
            id:this.$route.params.id,
            expense:[] 
                  
        }
    },
    created(){
        console.log(this.expense);
        this.$http.get('https://expense-80158.firebaseio.com/posts/' + this.id + '.json').then(function(data){
        return data.json();

        
        }).then(function(data){
            this.expense =data;
        });
    },
    methods:{
      showTotal() {
          console.log(this.expense);
        const sum = this.expenses.reduce((acc, currentVal) => {
        return (acc+currentVal)}, 0)
        console.log(sum);
      }

},

}
</script>

<style>
.single-expense{
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
}

.x{
    color: blue;
    font-style: inherit;
}
</style>
