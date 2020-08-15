<template>
    <div class="container">
        
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Add Expense</h1>
                    <hr>
                    <div class="form-group">
                        <label for="text">Expense Name</label>
                        <input
                                type="text"
                                id="expenseName"
                                class="form-control"
                                v-model.lazy="expenses.expenseName"
                                required>
                    </div>
                    <div class="form-group">
                        <label for="text">Expense Amount</label>
                        <input
                                type="text"
                                id="expenseAmount"
                                class="form-control"
                                v-model.lazy="expenses.expenseAmount"
                                placeholder="amount in Rs."
                                required>
                                
                    </div>
                    <div class="form-group">
                        <label for="example-datepicker">Expense date</label>
                        <b-form-datepicker
                                
                                id="date"
                                class="form-control mb-2"
                                v-model.lazy="expenses.expenseDate">
                        </b-form-datepicker>
                              <p>Date: {{ expenses.expenseDate }}</p>
                    </div>

                </div>
            </div>           
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            :disabled="expenses.expenseName && expenses.expenseAmount && expenses.expenseDate == null"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div v-if="isSubmitted">
            <h3 class="preview">Thanks For Adding Your Expense</h3><br>
            </div>  

            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Expense Name:{{expenses.expenseName }}</p>
                        <p>Expense Amount:{{expenses.expenseAmount}}</p>
                        <p>Expense Date:{{expenses.expenseDate}}</p>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { required } from 'vuelidate/lib/validators'

    export default {
        // props:['expenses'],
        data(){
            return{
                expenses:{
                    expenseName:'',
                    expenseAmount:'',
                    expenseDate:''
               },
           
               isSubmitted :false,       
            }
				},
				

        methods:{
            submitted(){
                    this.$http.post('https://expense-80158.firebaseio.com/posts.json',this.expenses    
                ).then(function(data){
                    console.log(data);
                this.isSubmitted =true; 

                });
			},
        }     
    }
</script>

<style scoped>

</style>
