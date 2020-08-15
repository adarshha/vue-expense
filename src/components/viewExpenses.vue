<template>
    <div  id="show-expenses">
        <h1>View Your Expenses</h1>
       
          <label for="example-datepicker">Search By Date</label>
         <b-form-datepicker
                                
                                id="date"
                                class="form-control mb-2"
                                v-model.lazy="search">
                        </b-form-datepicker>
        <div v-for="expense in 
        filteredExpenses" 
        class="single-expense">
          <router-link v-bind:to="'/expense/' + expense.id"><h2>Expense Name:{{ expense.expenseName }}</h2></router-link>
             <h2>Expense Amount: Rs.{{expense.expenseAmount}}</h2>
            <h3>Date:{{ expense.expenseDate }}</h3>
        </div>
        <!-- <b-button class="btn btn-success" type="primary" @click="showTotal">Total Expense</b-button> -->
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

 export default{
 data() {
    return {
        
        expenses:[],
        search:''

    }
   },
methods:{
  
},

 created(){
         this.$http.get('https://expense-80158.firebaseio.com/posts.json').then(function(data){
        return data.json();
     }).then(function(data){
		//  console.log(data);
		var expensesArray =[];
		for(let key in data){
            // console.log(key);
	data[key].id=key;
	expensesArray.push(data[key]);
		}
		console.log(expensesArray);
		this.expenses = expensesArray;
	 });
    },
 
    computed:{
       
 },
      mixins:[searchMixin]
    }
</script>

<style scoped>
#show-expenses{
    max-width: 800px;
    margin: 0px auto;
}
.single-expense{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    text-align: center;
}
input {
  width: 100%;
}

.btn{
    text-align: center;
    align-content: center;
}


</style>