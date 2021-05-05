function radioBtnFactory() {
    var totalCalls = 0
    var totalSms = 0
    var costTotal = 0

    function radioBtnBill() {
        var inspectedRadioBtn = document.querySelector("input[name='billItemType']:checked");
        if (inspectedRadioBtn) {
            console.log(inspectedRadioBtn)
            var billItemTypeBtn = inspectedRadioBtn.value.trim()
            if (billItemTypeBtn === "call") {
                totalCalls += 2.75;
                costTotal += 2.75;
            } else if (billItemTypeBtn === "sms") {
                totalSms += 0.75;
                costTotal += 0.75;

            }
        }
    }
            function getCallCost() {
                totalCalls.toFixed(2);
            }

            function getSmsCost() {
                totalSms.toFixed(2)
            }

            function getCostTotal() {
                costTotal.toFixed(2)
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