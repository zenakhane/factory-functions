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
    // a variable for the total phone bill.

    // var what = initCalculateFunction.calculateBillEvent(billString)
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    console.log(roundedBillTotal)  
    
   
    billTotalElement.innerHTML = what
    billTotalElement.classList.remove('danger')
    billTotalElement.classList.remove('warning')
    billTotalElement.classList.add(initCalculateFunction.getMessage())

}
calculateBtn.addEventListener('click', calculateBtnClicked)