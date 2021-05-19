var calculateBtn = document.querySelector('.calculateBtn')
//get a reference to the calculate button
var billTotalElement = document.querySelector(".billTotal");
var theTotalBill= document.querySelector(".billTotal")
//get a reference to the billTotal element
var billStringElement = document.querySelector(".billString");
var colorElement1 = document.querySelector(".total")
//get a reference to the billString

function calculateBtnClicked() {
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    colorElement1.classList.remove("warning");
    billTotalElement.classList.remove("warning");
    colorElement1.classList.remove("danger");
    billTotalElement.classList.remove("danger");
    //loop over all the bill items
        
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    console.log(roundedBillTotal)
}
calculateBtn.addEventListener('click', calculateBtnClicked)
