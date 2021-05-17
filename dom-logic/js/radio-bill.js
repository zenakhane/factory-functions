var itemTypeRadio = document.querySelector(".billItemTypeRadio")
// get a reference to the sms or call radio buttons
var radioAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button
var totalCallsElement = document.querySelector(".callTotalTwo")
var totalSmsElement = document.querySelector(".smsTotalTwo")
var totalOfRadio = document.querySelector(".allTotals")
var randCol = document.querySelector(".orange")
//create a variable that will keep track of the total bill


function radioButtonBill() {
    

    totalCallsElement.innerHTML = totalCalls.toFixed(2);
    totalSmsElement.innerHTML = totalSms.toFixed(2);
    totalOfRadio.innerHTML = costTotal.toFixed(2);
}
radioAddBtn.addEventListener('click', radioButtonBill);