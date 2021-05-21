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

//add an event listener for when the add button is pressed
var textBill = textBillFactory()

function textBillTotal() {


  var billTypeEntered = textType.value.trim()

   textBill.textBillCalculate(billTypeEntered)

   callsTotalElem.innerHTML = textBill.getCallsTotal();
   smsTotalElem.innerHTML =textBill.getSmsTotal();
   totalCostElem.innerHTML = textBill.getAllTotalCost();
  //  colorElement.innerHTML = textBill.colors();
  textColor()
}

function textColor(){
  totalCostElem.classList.remove("warning");
  totalCostElem.classList.remove("danger");
  totalCostElem.classList.add(textBill.colors())
}
textTotalAddBtn.addEventListener('click', textBillTotal);
