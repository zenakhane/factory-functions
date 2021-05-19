var itemTypeRadio = document.querySelector(".billItemTypeRadio")
// get a reference to the sms or call radio buttons
var radioAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button
var totalCallsElement = document.querySelector(".callTotalTwo")
var totalSmsElement = document.querySelector(".smsTotalTwo")
var totalOfRadio = document.querySelector(".allTotals")
var randCol = document.querySelector(".orange")
//create a variable that will keep track of the total bill
var totalCalls = 0;
var totalSms = 0;
var costTotal = 0;
function radioButtonBill() {
    var inspectedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (inspectedRadioBtn) {
        console.log(inspectedRadioBtn)
        var billItemTypeBtn = inspectedRadioBtn.value.trim()
        
    }
    // update the correct total
    //update the totalDs that is displayed on the screen.
    totalCallsElement.innerHTML = totalCalls.toFixed(2);
    totalSmsElement.innerHTML = totalSms.toFixed(2);
    totalOfRadio.innerHTML = costTotal.toFixed(2);
    console.log(totalCalls)
    console.log(totalSms)
    console.log(totalOfRadio)
}
radioAddBtn.addEventListener('click', radioButtonBill);
