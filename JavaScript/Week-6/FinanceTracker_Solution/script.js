// Object containing budget categories and their initial budgets
const categoryWiseBudget = {
    "Groceries": 2000,
    "Entertainment": 500,
    "Rent": 2000,
    "Utilities": 500,
    "Health": 2000,
    "Education": 1500,
    "Miscellaneous": 500
};

// Object to track expenses per category
const categoryWiseExpense = {};

// Initialize income, expense, and transactions
let income = 0, expense = 0;
const transactions = [];

// Function to initialize the page
function initialise() {
    setCategories();
    initialiseCategoryWiseExpense();
    document.getElementById("add-income-form").addEventListener("submit", (event) => {
        event.preventDefault();
        addIncome(document.getElementById("income").value)
        document.getElementById("income").value = '';
    });

    document.getElementById("add-transaction-btn").addEventListener("click", () => {
        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        addTransaction({ amount, description, category });
    });

    addTransaction({ amount: 10, description: "Milk", category: "Groceries" })
    addTransaction({ amount: 10, description: "Hangers", category: "Utilities" })
    addTransaction({ amount: 900, description: "New York Rent", category: "Rent" })
    // addTransaction({ amount: 150, description: "Son's checkup", category: "Health" })
    // addTransaction({ amount: 1000, description: "School Fees", category: "Education" })
    // addTransaction({ amount: 50, description: "Miscellaneous", category: "Miscellaneous" })


    displayTransactions();
    displaySummary();   
}

// Set expense category options in the dropdown
function setCategories() {
    const selectElement = document.getElementById("category");
    selectElement.innerHTML = `<option disabled selected>Select Expense Category</option>`;
    for (const category in categoryWiseBudget) {
        selectElement.innerHTML += `<option value="${category}">${category}</option>`;
    }
}

// Initialize categoryWiseExpense with zero for each category
function initialiseCategoryWiseExpense() {
    for (const category in categoryWiseBudget) {
        categoryWiseExpense[category] = 0;
    }
}

// Set the income and update the display
function addIncome(value = 0) {
    income = income + parseInt(value);
    displaySummary();
}

// Add a new transaction and update expense and categoryWiseExpense
function addTransaction(transaction) {
    const { amount, description, category } = transaction;

    if (amount && description) {
        expense += amount;
        transactions.push(transaction);
        displayTransactions();
        if (category in categoryWiseBudget) {
            categoryWiseExpense[category] += amount;
        }
        displaySummary();
        clearInputFields();
    }
}

// Display the summary of income, expenses, and category-wise budget details
function displaySummary() {
    document.getElementById("total-income").innerHTML = 
        `<b>Total Income: $${parseFloat(income).toFixed(2)}</b>`;
    
    const budgetSummaryElement = document.getElementById("budget-summary");
    let htmlText = "";
    
    for (category in categoryWiseExpense) {
        const categoryBalance = categoryWiseBudget[category] - categoryWiseExpense[category];
        const categoryBalanceClass = categoryBalance > 0 ? "positive" : "negative";
        
        htmlText += `
            <ul>
                <b>${category}</b>
                <li>
                    <span>Budget:</span>
                    <span>$${categoryWiseBudget[category].toFixed(2)}</span>
                </li>
                <li>
                    <span>Expense:</span>
                    <span>$${categoryWiseExpense[category].toFixed(2)}</span>
                </li>
                <li class="${categoryBalanceClass}">
                    <span>Balance:</span>
                    <span>$${categoryBalance.toFixed(2)}</span>
                </li>
            </ul>`;
    }
    
    budgetSummaryElement.innerHTML = htmlText;
    
    const balance = income - expense;
    const balanceClass = balance > 0 ? "positive" : "negative";
    document.getElementById("balance").innerHTML = 
        `<b class="${balanceClass}">Balance: $${balance.toFixed(2)}</b>`;
}

// Update the displayTransactions function
function displayTransactions() {
    const transactionsList = document.getElementById('transactions');
    transactionsList.innerHTML = '';

    for (const transaction of transactions) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="category">${transaction.category}</span>
            <span class="description">${transaction.description}</span>
            <span class="amount">$${transaction.amount.toFixed(2)}</span>
            `;
        transactionsList.appendChild(listItem);
    }
}

// Clear input fields after adding a transaction
function clearInputFields() {
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
}
