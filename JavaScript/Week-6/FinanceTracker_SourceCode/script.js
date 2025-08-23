// Object containing budget categories and their initial budgets
const categoryWiseBudget = {
  Groceries: 2000,
  Entertainment: 500,
  Rent: 2000,
  Utilities: 500,
  Health: 2000,
  Education: 1500,
  Miscellaneous: 500,
};

// Object to track expenses per category
const categoryWiseExpense = {};

// Initialize income, expense, and transactions
let income = 0,
  expense = 0;
const transactions = [];
