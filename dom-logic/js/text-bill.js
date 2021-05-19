// get a reference to the textbox where the bill type is to be entered
var textType = document.querySelector('.billTypeText')
//get a reference to the add button
// var addBtn = document.querySelector('.button')
var textTotalAddBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector(".callTotalOne")
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne")
var colorElement = document.querySelector(".color")
// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0
//add an event listener for when the add button is pressed
function textBillTotal() {
   // get the value entered in the billType textfield
   var billTypeEntered = textType.value.trim();
   // update the correct total
   
   //update the totals that is displayed on the screen.
   callsTotalElem.innerHTML = callsTotal.toFixed(2);
   smsTotalElem.innerHTML = smsTotal.toFixed(2);
   totalCostElem.innerHTML = totalCost.toFixed(2);
   console.log(callsTotal)
   console.log(smsTotal)
   console.log(totalCost)
}
textTotalAddBtn.addEventListener('click', textBillTotal);
