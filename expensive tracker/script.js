const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

// Initialize an empty array to store expenses
let expenses = [];

// Function to add expense to the list
function addExpense(expense) {
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Create a text node with the expense details
    const textNode = document.createTextNode(`${expense.date} - ${expense.category} - $${expense.amount}`);
    
    // Append the text node to the list item element
    listItem.appendChild(textNode);
    
    // Append the list item element to the expense list
    expenseList.appendChild(listItem);
}

// Function to handle form submission
function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
 // Get the form data
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    // Create a new expense object
    const expense = {
        date,
        category,
        amount
    };
    
    // Add the expense to the list
    addExpense(expense);
    
    // Add the expense to the expenses array
    expenses.push(expense);
    
    // Reset the form fields
    document.getElementById('date').value = '';
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
}

// Add event listener to the form submission
form.addEventListener('submit', handleSubmit);
