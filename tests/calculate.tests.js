describe('Calculate bill Factory', function() {
    it('Should return total  cost for call ', function() {
        
        assert.equal(CalculateBill('call, call, call, call, call'), 13.75);
    });
    it('Should return  total cost for sms', function() {
        
        assert.equal(CalculateBill("sms, sms, sms, sms, sms"), 3.75);
    });
    it('Should return total cost for call and sms', function() {
        
        assert.equal(CalculateBill('call, sms, call, sms, sms') ,7.75 );
    })
    it('Should return warning when total cost is greater than 20', function() {
       
        assert.equal(CalculateBill('call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms'), 23.25);
    })
    it('Should change color to red when total cost is greater than 30', function() {
        
    
        assert.equal(CalculateBill('call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms'),38.75 );
    })
});