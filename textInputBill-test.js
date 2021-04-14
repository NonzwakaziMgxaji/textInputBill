describe('The text input bill factory function', function(){
    it('should be able to add the string and return the total for smses and calls', function(){
        let bill = textInputBill();
        bill.setBill("call");
        assert.equal(2.75, bill.callTotal());

        bill.setBill("sms");
        assert.equal(0.75, bill.smsTotal());
    });

    it('should be able to add sms and call entered anf return total', function(){
        let bill = textInputBill();
        bill.setBill("call");
        bill.setBill("call");
        assert.equal(5.5, bill.overallTotal());
    });

    it("should return 'warning' if total cost exceed R30.00", function(){
        let bill = textInputBill();
        bill.setBill("sms");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("sms");
        assert.equal("warning", bill.colours());
        assert.equal(34.5, bill.overallTotal());
    });

    it("should return 'danger' if over R50", function(){
        let bill = textInputBill();
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("call");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        bill.setBill("sms");
        assert.equal("danger", bill.colours());
        assert.equal(55.25, bill.overallTotal());
    });
});
