var impact = require('./Common.js');
var def = require('./Definations.js');
var assert = require('assert');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = browser.transferPromiseness;

describe.skip('Benefit Issuance Search', function() {

	describe('Case Number Search', function() {
	    it('Login Page Title', function () {
	        impact.openSearchUrl({});
	        // get title
	        var title = browser.getTitle();
	        assert.equal(title, 'IE ImpaCT Website');
	    });

	    it('Login into Impact', function () {
	    	browser.setValue('[name="userId"]',def.login().user);
	    	browser.setValue('[name="password"]',def.login().pass);
	    	browser.click('.LoginButton');
	    });

	    it('Dashboard', function () {
	    	// wait till page opens
	    	browser.waitForVisible('//div[@id="RightPannelHeading"]', 5000);

	    	it('Dashboard Title', function () {
		    	// get title
		        var title = browser.getTitle();
		        assert.equal(title, 'ImpaCT - Welcome');
	        });

	    	it('Dashboard Element', function () {
		    	var caseInfo = browser.getText('#RightPannelHeading*=CASE INFO');
		    	assert.equal(caseInfo, 'CASE INFO');
	    	});

	    });

	    it('Click on Others', function () {
	    		browser.click('#othersImage').waitForVisible('//div[@id="othersDiv_body"]', 5000);

	    		browser.execute(function() {
	        		// browser context - you may not access client or console
			        document.getElementById('othersDiv_body').scrollTop += 60;
			    });

	    		browser.element('#BITOP').click('a*=Benefit Issuance').waitForVisible('//div[@id="subNavBITOP"]', 5000);
	    		browser.click('a*=Benefit Issuance Search').waitForVisible('//div[@class="Heading_1"]', 5000);
	   	});

	   	it('Search Using Case Num', function () {
	    		browser.setValue('[name="iqCaseNumber"]',def.bis().case);
	    		browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
	   	});

   	});

   	describe('Search', function() {

	   	it('Search Using Edg Num', function () {
	   			impact.openFirstMenu(def.bis());
	    		browser.setValue('[name="edgNumber"]',def.bis().edg);
	    		browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
	   	});

	   	it('Search Using Client Id', function () {
	   			impact.openFirstMenu(def.bis());
	    		browser.setValue('[name="clientId"]',def.bis().edg);
	    		browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
	   	});

	   	// Provider Id Validation ===================================================================

	   	describe('Provider Validation', function () {

		   	it('Search Using Provider Id', function () {
	   			impact.openFirstMenu(def.bis());
	    		browser.setValue('[name="providerId"]',def.bis().provider);
	    		browser.setValue('[name="yearissuanceDateFrom"]','2000');
	    		browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
		   	});

		   	it('Search Using Provider Id with No Results', function () {
	   			impact.openFirstMenu(def.bis());
	    		browser.setValue('[name="providerId"]',def.bis().provider);
	    		browser.click('#button2').pause(3000);
	    		browser.waitForVisible('span*=BV087:', 5000);
		   	});

	    });

	   	it('Search Using Vendor Id', function () {
			impact.openFirstMenu(def.bis());
			browser.setValue('[name="vendorID1"]',def.bis().vendor);
			browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
	   	});

	   	it('Search Using Issuance Number', function () {
			impact.openFirstMenu(def.bis());
			browser.setValue('[name="biIssuanceIssuance"]',def.bis().inum);
			browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
	   	});

   	});
    
	// Error Validation for Issuance Status =====================================================
	it('Error if only Issuance Status selected', function () {
		impact.openFirstMenu(def.bis());
		browser.element('#issuanceStatus').selectByValue('DC');
		browser.click('#button2').pause(1000);
		browser.waitForVisible('span*=BI103:', 5000);
	});

});