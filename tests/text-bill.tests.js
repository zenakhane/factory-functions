describe('Text Bill', function () {
    it('should return total call cost', function () {
        var init = textBillFactory()
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        assert.equal(13.75, init.getCallsTotal())
        assert.equal(13.75, init.getAllTotalCost())
    })

    it('should return total sms cost', function () {
        var init = textBillFactory()
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        assert.equal(2.25, init.getSmsTotal())
        assert.equal(2.25, init.getAllTotalCost())

    })

    it('should return total cost for call and sms', function () {
        var init = textBillFactory()
        init.textBillCalculate('call')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        assert.equal(8.25, init.getCallsTotal())
        assert.equal(2.25, init.getSmsTotal())
        assert.equal(10.5, init.getAllTotalCost())

    })
    it('should change color to orange when total cost is greater or equal to 30', function () {
        var init = textBillFactory()
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        assert.equal(30.25, init.getCallsTotal())
        assert.equal(30.25, init.getAllTotalCost())
        assert.equal('warning', init.colors())
    })
    it('should change color to red when total cost is greater or equal to 50', function () {
        var init = textBillFactory()
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('sms')
        init.textBillCalculate('call')
        init.textBillCalculate('call')
        assert.equal(46.75, init.getCallsTotal())
        assert.equal(6, init.getSmsTotal())
        assert.equal(52.75, init.getAllTotalCost())
        assert.equal('danger', init.colors())
    })

});