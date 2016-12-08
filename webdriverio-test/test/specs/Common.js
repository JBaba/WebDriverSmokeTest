
module.exports = {
	loginToImpact : function() {
	    // get title
	    var title = browser.getTitle();

		browser.setValue('[name="userId"]','uatsuperuser01');
		browser.setValue('[name="password"]','Test1234%');
		browser.click('.LoginButton');

		// wait till page opens
		browser.waitForVisible('//div[@id="RightPannelHeading"]', 5000);

		// get title
	    var title = browser.getTitle();

		var caseInfo = browser.getText('#RightPannelHeading*=CASE INFO');

		browser.click('#othersImage').waitForVisible('//div[@id="othersDiv_body"]', 5000);

		browser.execute(function() {
			// browser context - you may not access client or console
	        document.getElementById('othersDiv_body').scrollTop += 60;
	    });

	},

	openSearchUrl : function(opts) {
	    var url = "http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp?fromIndex=true";
	    console.log("Opening " + url);
	    return browser.url(url);
	},

	openFirstMenu : function(opts) {
		browser.click('#othersImage').waitForVisible('//div[@id="othersDiv_body"]', 1000);
		browser.element(opts[1]).click('a*='+opts[2]).waitForVisible('//div[@id="subNavBITOP"]', 5000);
    	browser.click('a*='+opts[3]).pause(2000);
    	browser.waitForVisible(opts[4], 5000);
	}
};