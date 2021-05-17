function calculateBill(){
    var billTotal = 0;
    var colorReturn = ''
function calculateBillEvent(billString){
    var billTotal1 = 0;
    var billItems = billString.split(",");
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call") {
            billTotal += 2.75;
            billTotal1 += 2.75;
        } else if (billItem === "sms") {
            billTotal += 0.75;
            billTotal1 += 0.75;
        }
    }

    if (billTotal1 >= 20 && billTotal1 < 30){
        colorReturn = 'warning'
    } else if (billTotal1 >= 30){
        colorReturn = 'danger'
    } else {
        colorReturn = 'cool'
    }
    //round to two decimals
    return billTotal1.toFixed(2)
   
}
function getBillTotal(){
    return billTotal.toFixed(2)
}

function getMessage(){
    return colorReturn
}
function color(){
if(billItem >= 20 && billItem < 30){
    return 'warning'
}
else if(billItem >= 30){
    return 'danger'
}
}
return{
    calculateBillEvent,
    getBillTotal,
    color,
    getMessage
}
}