var billType = document.querySelector(".billItemTypeSettings")
// get a reference to the sms or call radio buttons
var callsSettings = document.querySelector(".callCostSetting")
var smsSettings = document.querySelector(".smsCostSetting")
var warningSettings = document.querySelector(".warningLevelSetting")
var criticalSettings = document.querySelector(".criticalLevelSetting")
// get refences to all the settings fields
var radioBillButton = document.querySelector(".radioBillAddBtnSet")
//get a reference to the add button
var radioUpdateButton = document.querySelector(".updateSettings")
//get a reference to the 'Update settings' button
var callSettingTotal = document.querySelector(".callTotalSettings")
var smsSettingTotal = document.querySelector(".smsTotalSettings")
var SettingTotal = document.querySelector(".totalSettings")
var symbolColor = document.querySelector(".symbol")
//  get a reference to the settings total
var radioSettings = 0
// create a variables that will keep track of all the settings
var settingsCallsTotal = 0
var settingsSmsTotal = 0
var settingsRadioTotal = 0
// create a variables that will keep track of all three totals.
var setCall = 0
var setSms = 0
var setWarning = 0
var setCritical = 0

function billUpdate() {
    setCall = parseFloat(callsSettings.value);
    setSms = parseFloat(smsSettings.value);
    setWarning = parseFloat(warningSettings.value);
    setCritical = parseFloat(criticalSettings.value);
    // console.log(typeof setCall)
    addClasses()
}
radioUpdateButton.addEventListener('click', billUpdate)


function billSetting() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value.trim()
        if (settingsRadioTotal < setCritical) {
            if (billItemType === "call") {
                settingsCallsTotal += setCall;
                settingsRadioTotal += setCall;
            } else if (billItemType === "sms") {
                settingsSmsTotal += setSms;
                settingsRadioTotal += setSms;
            }
        }


    }
    callSettingTotal.innerHTML = settingsCallsTotal.toFixed(2);
    smsSettingTotal.innerHTML = settingsSmsTotal.toFixed(2);
    SettingTotal.innerHTML = settingsRadioTotal.toFixed(2);
    addClasses()

}

function addClasses() {
  
    if (settingsRadioTotal >= setCritical) {
        // SettingTotal.classList.remove("warning");
        // symbolColor.classList.remove("warning");

        SettingTotal.classList.remove("warning");
        SettingTotal.classList.add("danger");

    }
   else if (settingsRadioTotal >= setWarning && settingsRadioTotal < setCritical) {
         SettingTotal.classList.remove("danger");
         SettingTotal.classList.add("warning");
    }
    else {
        SettingTotal.classList.remove("warning");
        SettingTotal.classList.remove("danger");
    }

}



radioBillButton.addEventListener('click', billSetting);