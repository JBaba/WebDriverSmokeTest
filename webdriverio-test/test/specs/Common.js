var def = require('./Definations.js');

module.exports = {
	loginToImpact : function() {
	    // get title
	    var title = browser.getTitle();

		browser.setValue('[name="userId"]',def.login().user);
		browser.setValue('[name="password"]',def.login().pass);
		browser.click('.LoginButton');

		// wait till page opens
		browser.waitForVisible('//div[@id="RightPannelHeading"]', 5000);

		// get title
	    var title = browser.getTitle();

		var caseInfo = browser.getText('#RightPannelHeading*=CASE INFO');

		browser.click('#othersImage').waitForVisible('//div[@id="othersDiv_body"]', 5000);

		browser.execute(function() {
			// browser context - you may not access client or console
	        document.getElementById('othersDiv_body').scrollTop += 80;
	    });

	},

	openSearchUrl : function(opts) {
	    console.log("Opening " + def.login().url);
	    return browser.url(def.login().url);
	},

	openFirstMenu : function(opts) {
		browser.click('#othersImage').waitForVisible('//div[@id="othersDiv_body"]', 1000);
		browser.element(opts[1]).click('a*='+opts[2]).waitForVisible('//div[@id="subNavBITOP"]', 5000);
    	browser.click('a*='+opts[3]).pause(2000);
    	browser.waitForVisible(opts[4], 5000);
	},

	openUrl : function(opts) {
	    console.log("Opening " + opts.url);
	    return browser.url(opts.url);
	},

};