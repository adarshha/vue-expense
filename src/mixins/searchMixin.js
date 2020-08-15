export default{
    computed:{
        filteredExpenses: function(){
            return this.expenses.filter((expense) => {
            return expense.expenseDate.match(this.search);
      });
    }
}
}