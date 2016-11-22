var impact = require('./Common.js');
var assert = require('assert');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = browser.transferPromiseness;

describe('Benefit Issuance Search', function() {

    it('Login Page Title', function () {
        impact.openSearchUrl({});
        // get title
        var title = browser.getTitle();
        assert.equal(title, 'IE ImpaCT Website');
    });

    it('Login into Impact', function () {
    	browser.setValue('[name="userId"]','uatsuperuser01');
    	browser.setValue('[name="password"]','Test1234%');
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
    		browser.setValue('[name="iqCaseNumber"]','200023796');
    		browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
   	});

   	var opts = { 1 : "#BITOP", 2 : "Benefit Issuance", 
   		 	     3 : "Benefit Issuance Search", 4 : "h2*=Issuance Date Range"};

   	it('Search Using Edg Num', function () {
   			impact.openFirstMenu(opts);
    		browser.setValue('[name="edgNumber"]','500058651');
    		browser.click('#button2').waitForVisible('h2*=SEARCH RESULTS', 5000);
   	});
    
});