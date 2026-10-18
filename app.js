console.log("Finance Tracker started");
const budget = 500;
let totalExpenses = 0;

function formatExpense(title, amount, currency = "€") {
  return `${title} - ${amount} ${currency}`;
}

function addExpense(title, amount) {
  console.log(formatExpense(title, amount));
  totalExpenses += amount;
}

addExpense("Groceries", 45);
addExpense("Transport", 50);
addExpense("Coffee", 5);

const remaining = budget - totalExpenses;

console.log(
  `Spent: ${totalExpenses} € of ${budget} € | remaining : ${remaining} €`,
);
