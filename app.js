let amount = document.getElementById
("amount")
let budget = document.getElementById
("budget");
let budgetButton = document.getElementById
("budgetBtn");
let totalAmount = document.getElementById
("total_amount");
let checkAmount = document.getElementById
("check_amount");
let productCost = document.getElementById
("product_cost");
let productTitle = document.getElementById
("product_title");
let dateInput = document.getElementById
("dateInput");
const expense_List = document.getElementById
("expense_List");
budgetBtn.onclick = function(e)
{
    e.preventDefault();
    if(budget.value != "")
    {
      localStorage.setItem("budget",budget.value);
      location.href = location.href;
      
    }
    else(
        alert("budget is empty")
    )
};
function all_data() 
{ 
   amount.innerHTML = localStorage.getItem("budget");   
   
}
all_data();


let expenses = [];
// Add event listener to the expense button
checkAmount.addEventListener('click', function () {
  const descriptionValue = productTitle.value;
  const amountValue = parseFloat(productCost.value);
  
  if (descriptionValue && !isNaN(amountValue)) {
    const expense = {
      description: descriptionValue,
      amount: amountValue,
      date: dateInput.value,
    };
    
    expenses.push(expense);
    productTitle.value = '';
    productCost.value = '';
    dateInput.value = '';
    displayExpenses();
    // calculateRemainingBudget();
  } else {
  alert('Please enter valid expense details.');
}
});


// Function to display the expenses
function displayExpenses() {
  expense_List.innerHTML = '';

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.description}</td>
      <td>${expense.amount}</td>
      <td>${expense.date}</td>
    `;
    expense_List.appendChild(row);
  }
};
//Function To Add Expenses
checkAmount.addEventListener("click", () => {
  let tempAmount = 0;
  tempAmount = budget.value;
  let expenditure = parseInt(productCost.value);
  let sum = parseFloat(expence.innerText) + expenditure;
  expence.innerText = sum;
  //Total balance(budget - total expense)
  const totalBalance = tempAmount - sum;
  balance.innerText = totalBalance;
  // //Empty inputs
  productTitle.value = "";
  productCost.value = "";
});
 


// Function to calculate remaining budget
  function calculateRemainingBudget() {
  let totalExpenses = 0;

  for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i].amountValue;
    };  
    const remaining = budget - totalExpenses;

    // Update and display the remaining budget value
    remainingBudget.textContent = `Remaining Budget: $${remaining}`;
  };


  









// checkAmount.onclick = function(e)
// {
//     e.preventDefault();
//     if(productTitle.value != "" &&  productCost.value != "")
//     {  
//        var p_title = productTitle.value
//        var p_cost= productCost.value
//        var data = { p_cost : p_cost , p_title : p_title};
//        var string = JSON.stringify(data);
//        localStorage.setItem("budget_"+productTitle.value,string );
//     }
//     else(
//         alert("feild is empty")
//     )
//};









// const budgeterror = document.getElementById
// ("budget-error");
// const productTitleError = document.getElementById
// ("product-title-error");
// const productCostError   = document.getElementById
// ("product-cost-error");
// const expence = document.getElementById
// ("expence");
// const balanceAmount = document.getElementById
// ("balance-amount");

