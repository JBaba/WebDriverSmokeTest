var impact = require('./Common.js');
var assert = require('assert');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = browser.transferPromiseness;

describe('Essential Services', function() {

  var opts = { 1 : "#BITOP", 2 : "Benefit Issuance", 
               3 : "Essential Services", 4 : "#leftNavBIEPS"};

	it('Login', function () {
      impact.openSearchUrl({});
  		impact.loginToImpact();
      impact.openFirstMenu(opts);
	});

  describe('Essential Services Payment Search', function () {
      it('Case Number', function () {
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.setValue('[name="caseNumberHash"]','100002229');
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });

      it('Edg Number', function () {
          impact.openFirstMenu(opts);
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.setValue('[name="edgNumber"]','500034979');
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });

      it('Vendor Id', function () {
          impact.openFirstMenu(opts);
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.setValue('[name="vendorID1"]','1016321');
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });
  });

  describe('Essential Services', function() {
      it('Vendor Id', function () {
          impact.openFirstMenu(opts);
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.setValue('[name="vendorID1"]','1016321');
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });
  }); 

});