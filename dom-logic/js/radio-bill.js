var itemTypeRadio = document.querySelector(".billItemTypeRadio")
// get a reference to the sms or call radio buttons
var radioAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button
var totalCallsElement = document.querySelector(".callTotalTwo")
var totalSmsElement = document.querySelector(".smsTotalTwo")
var totalOfRadio = document.querySelector(".allTotals")
var randCol = document.querySelector(".orange")
//create a variable that will keep track of the total bill
var radioInit = radioBtnFactory()

function radioButtonBill() {
    var inspectedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (inspectedRadioBtn) {
        
        radioInit.radioBtnBill(inspectedRadioBtn.value)
    }
    totalCallsElement.innerHTML = radioInit.getCallCost();
    totalSmsElement.innerHTML = radioInit.getSmsCost();
    totalOfRadio.innerHTML = radioInit.getCostTotal();
    // randCol.innerHTML = radioInit.radioColor();
    colorAdd()
  
}
function colorAdd(){
    totalOfRadio.classList.remove("warning");
    totalOfRadio.classList.remove("danger");
    totalOfRadio.classList.add(radioInit.radioColor())
}


radioAddBtn.addEventListener('click', radioButtonBill);
