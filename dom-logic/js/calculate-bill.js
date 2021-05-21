var calculateBtn = document.querySelector('.calculateBtn')
    //get a reference to the calculate button
var billTotalElement = document.querySelector(".billTotal");
// var theTotalBill = document.querySelector(".billTotal");
//get a reference to the billTotal element
var billStringElement = document.querySelector(".billString");
var colorElement1 = document.querySelector(".total");
//get a reference to the billString

function calculateBtnClicked() {

    console.log(billStringElement.value)
    
    var calculateBill = CalculateBill(billStringElement.value);

     billTotalElement.innerHTML = CalculateBill(billStringElement.value).toFixed(2)
     colorCal()
}

function colorCal(){
    if (CalculateBill(billStringElement.value) >= 20 && CalculateBill(billStringElement.value) < 30) {
        colorElement1.classList.remove("danger");
        billTotalElement.classList.remove("danger");
        colorElement1.classList.add("warning");
        billTotalElement.classList.add("warning");
        console.log(colorElement1)
    } else if (CalculateBill(billStringElement.value) >= 30) {
        billTotalElement.classList.remove("warning");
        colorElement1.classList.remove("warning");
        billTotalElement.classList.add("danger");
        colorElement1.classList.add("danger");
        
       
    } else {
        colorElement1.classList.remove("danger");
        billTotalElement.classList.remove("danger");

        colorElement1.classList.remove("warning");
        billTotalElement.classList.remove("warning");
        
    }
}

calculateBtn.addEventListener('click', calculateBtnClicked)