var impact = require('./Common.js');
var def = require('./Definations.js');
var assert = require('assert');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = browser.transferPromiseness;

describe('My Test', function() {

	var opts = {url : "http://192.168.56.1:9421/OCricket/"};

  it('Alert Text',function(){
      impact.openUrl(opts);
      browser.click("#click");
      console.log(browser.alertText());
      browser.pause(5000);
      browser.alertDismiss();
      browser.pause(5000);
  });

});