var impact = require('./Common.js');
var def = require('./Definations.js');
var assert = require('assert');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = browser.transferPromiseness;

describe('Essential Services', function() {

	it('Login', function () {
      impact.openSearchUrl({});
  		impact.loginToImpact();
      impact.openFirstMenu(def.es);
	});

  describe('Essential Services Payment Search', function () {
      it('Case Number', function () {
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.setValue('[name="caseNumberHash"]','100002229');
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });

      it('Edg Number', function () {
          impact.openFirstMenu(def.es);
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.setValue('[name="edgNumber"]','500034979');
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });

      describe('Vendor Id Validations', function() {
          it('Vendor Id With Records', function () {
              impact.openFirstMenu(def.es);
              browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
              browser.setValue('[name="vendorID1"]','1016321');
              browser.setValue('[name="yearstartDateofService"]','2000');
              browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
          });

          it('Vendor Id Without Records', function () {
              impact.openFirstMenu(def.es);
              browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
              browser.setValue('[name="vendorID1"]','1016321');
              browser.element('#essentialServiceProgram').selectByValue('CO');
              browser.setValue('[name="yearstartDateofService"]','2000');
              browser.click('#button').waitForVisible('span*=BV087:', 5000);
          });
      });

  });

  describe('Essential Services', function() {

  }); 

});