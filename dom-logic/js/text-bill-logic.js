function textBillFactory(){

    var callsTotal = 0;
    var smsTotal = 0;
    var totalCost = 0

    function textBillCalculate(billTypeEntered){
        if (billTypeEntered === "call") {
            callsTotal += 2.75
            totalCost += 2.75
         }
         else if (billTypeEntered === "sms") {
            smsTotal += 0.75;
            totalCost += 0.75
         }
    }

    function getCallsTotal(){
        return callsTotal.toFixed(2)
    }

    function getSmsTotal(){
        return smsTotal.toFixed(2)
    }

    function getAllTotalCost(){
        return totalCost.toFixed(2)
    }

    function colors(){
        if (totalCost >= 30 && totalCost < 50){
            return 'warning'
            
        } else if (totalCost >= 50){
            return 'danger'
        }
    }

    return {
        textBillCalculate,
        getCallsTotal,
        getAllTotalCost,
        getSmsTotal,
        colors
    }
}