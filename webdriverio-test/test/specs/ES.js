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
      impact.openFirstMenu(def.es());
	});

  describe('Essential Services Payment Search', function () {
      xit('Case Number', function () {
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.setValue('[name="caseNumberHash"]',def.es().case);
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });

      xit('Edg Number', function () {
          impact.openFirstMenu(def.es());
          browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
          browser.pause(1000);
          browser.setValue('[name="edgNumber"]',def.es().edg);
          browser.setValue('[name="yearstartDateofService"]','2000');
          browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
      });

      describe('Vendor Id Validations', function() {
          it('Vendor Id With Records', function () {
              impact.openFirstMenu(def.es());
              browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
              browser.pause(1000);
              browser.setValue('[name="vendorID1"]',def.es().vendor);
              browser.setValue('[name="yearstartDateofService"]','2000');
              browser.click('#button').waitForVisible('h2*=SEARCH RESULTS', 5000);
          });

          it('Vendor Id Dyna', function () {
              var dynaRows = $("#grid0").$$("tr");
              if(dynaRows.length > 1){
                for(var i=1; i < dynaRows.length ; i++){
                    var vendorValue = dynaRows[i].$$('td')[3].getText();
                    assert.equal(vendorValue,def.es().vendor);
                }
              }
          });

          xit('Vendor Id Without Records', function () {
              impact.openFirstMenu(def.es());
              browser.click('a*=Essential Services Payment Search').waitForVisible('//div[@class="Heading_1"]', 5000);
              browser.pause(1000);
              browser.setValue('[name="vendorID1"]',def.es().vendor);
              browser.element('#essentialServiceProgram').selectByValue('CO');
              browser.setValue('[name="yearstartDateofService"]','2000');
              browser.click('#button').waitForVisible('span*=BV087:', 5000);
          });
      });

  });

  describe('Essential Services', function() {
    
  }); 

});