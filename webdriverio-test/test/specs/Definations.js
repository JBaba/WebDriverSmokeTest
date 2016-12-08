module.exports = {
	//login definations
	// uat dev - http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp?fromIndex=true
	// Local   - https://ussltcsnw2654.solutions.glbsnet.com:9443/wp/SELoginAccess.jsp?fromIndex=true
	login : function() {
		return { user : "uatsuperuser01", pass : "Test1234%",
		         url : "http://ussltcsnw2654.solutions.glbsnet.com:9088/wp/SELoginAccess.jsp?fromIndex=true" };
	},
	// Benefit Issuance Open Menu Definations
	bis : function() {
		return { 1 : "#BITOP", 2 : "Benefit Issuance", 3 : "Benefit Issuance Search", 4 : "h2*=Issuance Date Range",
		         "case" : "200023796", "edg" : "500058651", "vendor" : "1017517", "provider" : "900847567", "inum" : "040028980"};
	},
	// Essential Service Open Menu Definations
	es : function() {
		return { 1 : "#BITOP", 2 : "Benefit Issuance", 3 : "Essential Services", 4 : "#leftNavBIEPS", "case" : "100002229",
		        "edg" : "500034979" , "vendor" : "1017517"};
	},
};