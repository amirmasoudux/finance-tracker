console.log("Finance Tracker started");
const budget = 500;
let totalExpenses = 0;

function formatExpense(title, amount, currency = "€") {
  return `${title} - ${amount} ${currency}`;
}

function getExpenseSize(amount) {
  if (amount < 20) {
    return "small";
  } else if (amount < 100) {
    return "medium";
  } else {
    return "big";
  }
}

function addExpense(title, amount) {
  console.log(`${formatExpense(title, amount)} (${getExpenseSize(amount)})`);
  totalExpenses += amount;
}

addExpense("Groceries", 45);
addExpense("Transport", 50);
addExpense("Coffee", 5);

const remaining = budget - totalExpenses;

console.log(
  `Spent: ${totalExpenses} € of ${budget} € | remaining : ${remaining} €`,
);

if (totalExpenses > budget) {
  console.log("Over Budget!");
} else if (remaining < 100) {
  console.log(`careful only ${remaining} € left`);
} else {
  console.log("All good");
}

const budgetStatus = totalExpenses > budget ? "over" : "ok";
console.log(budgetStatus);
