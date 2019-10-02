// Here is the IIFE Function
(function() {
   // Set the variables.
   var budgetAllowed = 1500;
   var porsche911Cost = 113300;

   // Test to see if the Porsche falls within the budget.
   var inBudget = budgetAllowed >= porsche911Cost;

   // Update the HTML
   var elBudgetCar = document.getElementById("budgetCar");
   elBudgetCar.textContent = inBudget;

} ());