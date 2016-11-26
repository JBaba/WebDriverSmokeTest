var impact = require('./Common.js');
var assert = require('assert');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = browser.transferPromiseness;

describe('Essential Services', function() {

	// Error Validation for Issuance Status =====================================================
	it('Error if only Issuance Status selected', function () {
		impact.openFirstMenu(opts);
		browser.element('#issuanceStatus').selectByValue('DC');
		browser.click('#button2').pause(1000);
		browser.waitForVisible('span*=BI103:', 5000);
	});

});