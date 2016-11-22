
module.exports = {
	loginToImpact : function() {

		openSearchUrl({});

	    // get title
	    var title = browser.getTitle();
	    assert.equal(title, 'IE ImpaCT Website');

		browser.setValue('[name="userId"]','uatsuperuser01');
		browser.setValue('[name="password"]','Test1234%');
		browser.click('.LoginButton');

		// wait till page opens
		browser.waitForVisible('//div[@id="RightPannelHeading"]', 5000);

		// get title
	    var title = browser.getTitle();
	    assert.equal(title, 'ImpaCT - Welcome');

		var caseInfo = browser.getText('#RightPannelHeading*=CASE INFO');
		assert.equal(caseInfo, 'CASE INFO');

		browser.click('#othersImage').waitForVisible('//div[@id="othersDiv_body"]', 5000);

		browser.execute(function() {
			// browser context - you may not access client or console
	        document.getElementById('othersDiv_body').scrollTop += 60;
	    });

	},

	openSearchUrl : function(opts) {
		//https://ussltcsnw2654.solutions.glbsnet.com:9443/wp/SELoginAccess.jsp?fromIndex=true
		//http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp
	    var url = "http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp?fromIndex=true";
	    console.log("Opening " + url);
	    return browser.url(url);
	},

	openFirstMenu : function(opts) {
		browser.click('#othersImage').waitForVisible('//div[@id="othersDiv_body"]', 1000);
		browser.element('#BITOP').click('a*=Benefit Issuance').waitForVisible('//div[@id="subNavBITOP"]', 5000);
    	browser.click('a*=Benefit Issuance Search').waitForVisible('h2*=Issuance Date Range', 5000);
	}
};