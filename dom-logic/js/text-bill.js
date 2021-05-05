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

var initTextFunction = textBillFactory()
// these variables are global and defined outside of the Add button event listener.
//add an event listener for when the add button is pressed
function textBillTotal() {
   // get the value entered in the billType textfield
   var billTypeEntered = textType.value.trim();
   initTextFunction.textBillCalculate(billTypeEntered)
   totalCostElem.classList.add(initTextFunction.colors())
   
   //update the totals that is displayed on the screen.
   callsTotalElem.innerHTML = initTextFunction.getCallsTotal();
   smsTotalElem.innerHTML = initTextFunction.getSmsTotal();
   totalCostElem.innerHTML = initTextFunction.getTotalCost();
}
textTotalAddBtn.addEventListener('click', textBillTotal);