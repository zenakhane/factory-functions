describe('Calculate bill Factory', function() {
    it('Should return total  cost for call ', function() {
        
        assert.equal(calculateBillEvent('call, call, call, call, call'), );
    });
    it('Should return  total cost for sms', function() {
        
        assert.equal(calculateBillEvent("sms, sms, sms, sms, sms"), );
    });
    it('Should return total cost for call and sms', function() {
        
        assert.equal(calculateBillEvent('call, sms, call, sms, sms') , );
    })
    it('Should return warning when total cost is greater than 20', function() {
       
        assert.equal(calculateBillEvent('call, sms, call, sms, sms'), );
    })
    it('Should change color to red when total cost is greater than 30', function() {
        
    
        assert.equal(calculateBillEvent('call, sms, call, sms, sms'), );
    })
});