describe('Calculate bill Factory', function(){
    it('Should return total  cost for call ', function() {
        var init = calculateBill()
        init.calculateBillEvent('call')
        init.calculateBillEvent('call')
        init.calculateBillEvent('call')
        init.calculateBillEvent('call')
        init.calculateBillEvent('call')
        init.calculateBillEvent('call')
        assert.equal(16.50, init.getBillTotal());
    });
    it('Should return  total cost for sms', function() {
        var init = calculateBill()
        init.calculateBillEvent('sms')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('sms')
        assert.equal(3.75, init.getBillTotal());
    });
    it('Should return total cost for call and sms', function() {
        var init = calculateBill()
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        assert.equal(10.50,init.getBillTotal ());
    })
    it('Should return warning when total cost is greater than 20', function() {
        var init = calculateBill()
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        assert.equal(24.50,init.getBillTotal ());
    })
    it('Should change color to red when total cost is greater than 30', function() {
        var init = calculateBill()
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        init.calculateBillEvent('call')
        init.calculateBillEvent('sms')
        assert.equal(31.50,init.getBillTotal ());
    })
});