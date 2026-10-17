console.log("Finance Tracker started");
const budget = 500;
let totalExpenses = 0;

const expenseTitle = "Groceries";
const expenseAmount = 45;

totalExpenses += expenseAmount;

const remaining = budget - totalExpenses;
console.log(`${expenseTitle} - ${expenseAmount} €`);
console.log(
  `spent: ${totalExpenses} € of ${budget} € | remaining: ${remaining} €`,
);
