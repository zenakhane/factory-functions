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
    // var radioSettings = 0
    // create a variables that will keep track of all the settings
var SettingsBill = BillWithSettings()

function billUpdate() {
    Number(SettingsBill.setCallCost(Number(callsSettings.value)));
  Number(SettingsBill.setSmsCost(Number(smsSettings.value)));
  Number(SettingsBill.setWarninglevel(warningSettings.value));
  Number(SettingsBill.setCriticallevel(criticalSettings.value));
    // console.log(typeof setCall)
    addClasses()
}
radioUpdateButton.addEventListener('click', billUpdate)


function billSetting() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        SettingsBill.getAllCosts(checkedRadioBtn.value);
        
    }
    callSettingTotal.innerHTML = SettingsBill.getTotalCallCost().toFixed(2);
    smsSettingTotal.innerHTML = SettingsBill.getTotalSmsCost().toFixed(2);
    SettingTotal.innerHTML = SettingsBill.getTotalCost().toFixed(2);
    addClasses()
}

function addClasses() {

    SettingTotal.classList.remove("warning");
    SettingTotal.classList.remove("danger");
    SettingTotal.classList.add(SettingsBill.totalClassName())
}

radioBillButton.addEventListener('click', billSetting);