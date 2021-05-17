var itemTypeRadio = document.querySelector(".billItemTypeRadio")
// get a reference to the sms or call radio buttons
var radioAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button
var totalCallsElement = document.querySelector(".callTotalTwo")
var totalSmsElement = document.querySelector(".smsTotalTwo")
var totalOfRadio = document.querySelector(".allTotals")
var randCol = document.querySelector(".orange")
//create a variable that will keep track of the total bill
var initRadioButton = radioBtnFactory()

function radioButtonBill() {
    var typeOfBillEntered = itemTypeRadio.value
    initRadioButton.radioBtnBill(typeOfBillEntered)
    totalOfRadio.classList.add(initRadioButton.radioColor())

totalCallsElement.innerHTML = initRadioButton.getCallCost();
totalSmsElement.innerHTML = initRadioButton.getSmsCost();
totalOfRadio.innerHTML = initRadioButton.getCostTotal();


}
radioAddBtn.addEventListener('click', radioButtonBill);