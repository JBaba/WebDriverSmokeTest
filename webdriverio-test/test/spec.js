var assert = require('assert');
describe('Login Test', function() {
	//open homepage
    browser.url('http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp');

    it('Login Page Title', function () {
        // get title
        var title = browser.getTitle();
        console.log("Title:"+title);
        assert.equal(title, 'IE ImpaCT Website');
    });

    it('Login into Impact', function () {
    	console.log("Find Active Element");
    	var userId = $('[name="userId"]');
       	printElement(userId);

       	// start typing into userId 
       	browser.keys(["u","s","e","r","1","0","1"]);

       	// TAB adds text 'TAB' into input field
        browser.keys("TAB");
        printElement(browser.elementActive());
    });


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