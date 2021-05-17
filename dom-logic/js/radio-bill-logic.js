function radioBtnFactory() {

    var totalCalls = 0
    var totalSms = 0
    var costTotal = 0

    function radioBtnBill(typeOfBillEntered) {
        if (typeOfBillEntered === "sms") {
            totalSms += 0.75;
            costTotal += 0.75

        }
        else if (typeOfBillEntered === "call") {
            totalCalls += 2.75
            costTotal += 2.75
        }

    }

    function getCallCost() {
        return totalCalls.toFixed(2);
    }

    function getSmsCost() {
        return totalSms.toFixed(2)
    }

    function getCostTotal() {
        return totalCalls + totalSms
    }

    function radioColor() {
        if (costTotal >= 20 && costTotal < 30) {
            return 'warning'

        } else if (costTotal >= 30) {
            return 'danger'
        }
    }
    return {
        
        radioBtnBill,
        getCallCost,
        getSmsCost,
        getCostTotal,
        radioColor
    }
}