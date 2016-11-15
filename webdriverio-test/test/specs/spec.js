var assert = require('assert');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = browser.transferPromiseness;

describe('Impact', function() {

    it('Login Page Title', function () {
        openSearchUrl({});
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
    		var e = browser.element('#BITOP').click('a*=Benefit Issuance').waitForVisible('//div[@id="subNavBITOP"]', 5000);
    		console.log(e);
    		//browser.click('a*=Benefit Issuance Search');
    		browser.pause(5000);
   	});
               
    openSearchUrl = function(opts) {
    	//https://ussltcsnw2654.solutions.glbsnet.com:9443/wp/SELoginAccess.jsp?fromIndex=true
    	//http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp
        var url = "http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp?fromIndex=true";
        console.log("Opening " + url);
        return browser.url(url);
    };
    assert = require('assert');
    sleep = function(ms) {
        return function(done) {
            setTimeout(done, ms);
        }
    };
    getPath = function() {
        var urlmodule = require("url");
        return browser.url().then(function(res) {
            return urlmodule.parse(res.value).path;
        });
    };
    inspectElement = function(elt) {
        var inspect = {};

        // TODO: is there an easier way to do that?
        return browser.elementIdName(elt.value.ELEMENT).then(function(res) {
            inspect.tag = res.value;
            return browser.elementIdText(elt.value.ELEMENT);
        }).then(function(res) {
            inspect.text = res.value;
            return browser.elementIdLocation(elt.value.ELEMENT);
        }).then(function(res) {
            inspect.location = res.value;
            console.log("Inspect: <" + inspect.tag + "> at ("+inspect.location.x+","+inspect.location.y+")");
            return inspect;
        })
    };


     printElement = function(ele) {
        var selectedEle = {};
        return browser.elementIdName(ele.value.ELEMENT).then(function(res) {
            selectedEle.name = res.value;
            return browser.elementIdAttribute(ele.value.ELEMENT,'id');
        }).then(function(res) {
            selectedEle.id = res.value;
            var textId = '#'+selectedEle.id;
            return browser.getValue(textId);
        }).then(function(res) {
            selectedEle.value = res;
            console.log(selectedEle.name+" id:'"+selectedEle.id+"' value:'"+selectedEle.value+"'");
            return selectedEle;
        });
    };
});