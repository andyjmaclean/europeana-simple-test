var expect = require('chai').expect;
var inst = require('./index');

describe('europeana test module', function(){
  it('should work', function(){
    console.log('(' + inst.msg + ')');
    expect(inst.msg).not.to.be.null;
  });
});
