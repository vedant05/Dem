'use strict';
var fs = require('fs');
var screenshots = require('protractor-take-screenshots-on-demand');
var commonFunction = require('C:/Users/Vedantk/Desktop/ProtractorTest/NewFolder/PageObjectModel/TestCases/CommonMethods.js'); 
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');
var RegisterPage=function()
{
		   'use strict';
	       var joinnow = element(by.xpath("//a[contains(text(),'JOIN NOW!')]"));
		   var Email = element(by.id('my-eap-info-email-address')); 
		   var ConfEmail = element(by.xpath("//input[@id='my-eap-info-confirm--email-address']"));
		   var CreatePass = element(by.id('my-eap-info-password'));
		   var ConfirmPass = element(by.css('#my-eap-info-confirm-password'));      //another way of using id tag here
		   var Continue=element(by.buttonText('Continue'));
		   var textMsg = element(by.xpath("//p[@class='sub-text']"));
		   var Title = element(by.id('my-info-title'));
		   var FirstName = element(by.id('my-info-first-name'));
		   var LastName = element(by.id('my-info-last-name'));
		   var Gender = element(by.id('my-info-gender'));
		   var DOB = element(by.id('dateOfBirthMonth'));
		   var Day = element(by.id('my-info-dob-day'));
		   var Year = element(by.id('my-info-dob-year'));
		   var From = element(by.id('aui_3_2_0_1298'));
		   var FromAirPort = element(by.xpath("//div[@id='my-prof-pref-info']/div[1]/div/a[@class='from-btn']"));                          //Using class locater
		   var ConfAirport = element(by.xpath("//a[@index='44']"));
		   var ToAirPort = element(by.css(".to-btn"));
		   var ConfToAirport =element(by.xpath("//a[@index='85']"));
		   var EnrollCode =element(by.id('my-ec-info-enroll-code'));
		   var Continue1=element(by.xpath("//div[@id='my-info']/div[12]/button"));
		   var Address =element(by.id('my-info-street-address-01'));
		   var ZipCode =element(by.id('my-info-zip-code'));
		   var City = element(by.id('my-info-city'));
		   var Country =element(by.id('my-info-country'));
		   var State = element(by.xpath("//select[@id='my-info-state']"));
		   var PhoneType =element(by.id('my-info-phone-number-type'));
		   var PhoneNumber =element(by.xpath("//input[@id='my-info-phone-number']"));
		   var btnContinue=element(by.xpath("//div[@id='my-address']/div[9]/button"));
		   var Question1 =element(by.xpath("//select[@id='my-eap-info-secret-question-0']"));
		   var Answer1 =element(by.xpath("//input[@id='my-eap-info-secret-answer-0']"));
		   var Question2 =element(by.xpath("//select[@id='my-eap-info-secret-question-1']"));
		   var Answer2 =element(by.xpath("//input[@id='my-eap-info-secret-answer-1']"));
		   var checkBoxIAgree =element(by.xpath("//input[@id='my-tc-info-confirm']"));
		   
		   
		   
		   this.navigateToRegisterPage = function () 
	          {
	    
			     try{
			    	 
			    	/* var State='C:\\Users\\Vedantk\\Desktop\\ProtractorTest\\NewFolder\\PageObjectModel\\TestCaseSetting.xlsx';
			    	
			    	 commonFunction.RetriveValue(State);*/
			    	 //console.log(count);
			    	 browser.sleep(5000);
				     commonFunction.ClickOn(joinnow,"Join Now");
				     browser.sleep(5000);
				  
					  //Method to use getText() in protractor
					  textMsg.getText().then(function (text) {
						commonFunction.TestStepInfo(text);
						});
		  
					  commonFunction.EnterText(Email,"Vedantkumar@gmail.com");
					  commonFunction.EnterText(ConfEmail,"Vedantkumar@gmail.com");
					  commonFunction.EnterText(CreatePass,"Reset123");
					  commonFunction.EnterText(ConfirmPass,"Reset123");
					  screenshots.takeScreenshot('Before Clicking on continue button of Register page');
					  commonFunction.ClickOn(Continue,"Continue");
					  browser.sleep(2000);
					  var pageTitle;
					  pageTitle = browser.getTitle().then(function(webpagetitle)
					   {
					  expect(webpagetitle).toEqual('Personal information | JetBlue');
					  });
					  screenshots.takeScreenshot('After Clicking on continue button of Register page');
					  commonFunction.SelectDropDownByIndex(Title, 3);
					  commonFunction.EnterText(FirstName,"Vedant");
					  commonFunction.EnterText(LastName,"Vedant")
					  commonFunction.SelectDropDownByIndex(Gender, 2);
					  
					  commonFunction.EnterText(Day,"14");
					  commonFunction.EnterText(Year,"1994");
					  commonFunction.SelectDropDownByIndex(DOB, 8);
					  browser.executeScript('window.scrollTo(619, 769);').then(function() {
						  browser.sleep(2000);
						  commonFunction.ClickOn(FromAirPort,"From Airport");
						});
					  
					  browser.sleep(2000);
					  commonFunction.ClickOn(ConfAirport,"Confirm Airport");
					  browser.sleep(2000);
					  commonFunction.ClickOn(ToAirPort,"To Airport");
					  browser.sleep(2000);
					  commonFunction.ClickOn(ConfToAirport,"Confirm to Airport");
					  commonFunction.EnterText(EnrollCode,"120123");
					  commonFunction.ClickOn(Continue1,"Continue");
					  browser.sleep(3000);
					  commonFunction.EnterText(Address,"Sun Technology Integrator");
					  commonFunction.SelectDropdownByText(Country, "India");
					  
					  commonFunction.EnterText(ZipCode,"759003");
					  commonFunction.EnterText(City,"Banglore");
					  browser.sleep(3000);
					  commonFunction.SelectDropdownByText(State, "Haryana");
					  //var type='Work';
					  commonFunction.SelectDropdownByText(PhoneType, "Work");
					  commonFunction.EnterText(PhoneNumber,"9437855873");
					  screenshots.takeScreenshot('Before Clicking on continue button second page of Registration');
					  commonFunction.ClickOn(btnContinue,"Continue");
					  browser.sleep(3000);
					  commonFunction.SelectDropdownByText(Question1, "What is your favorite sport to watch?");
					  commonFunction.EnterText(Answer1,"Cricket");
					  commonFunction.SelectDropdownByText(Question2, "What was your childhood nickname?");
					  commonFunction.EnterText(Answer2,"Prakash");
					  commonFunction.ClickOn(checkBoxIAgree,"I agree to terms and condition");
					  commonFunction.TestStepPassed(" Registered in the Application Successfully ");
		
	                 }
	              catch(e){
	    		       commonFunction.TestStepFailed(e);
			              }
	      };
  /* var cellFromXLS = function (cellId) {
	    'use strict';
	    //Define sheetNumber
	    var sheetNumber = 0;
	     
				    
	    //Define file Path name
	    //var fileNamePath = path.join(path, 'TesteDataNew.xls');
	    //NodeJs read file
	    var XLS;
	    if (typeof require !== 'undefined') {
	        XLS = require('xlsjs');
	    }
	    //Working with workbook
	    var workbook = XLS.readFile('./TestData.xls');
	    var sheetNamelist = workbook.SheetNames;
	    var value = workbook.Sheets[sheetNamelist[sheetNumber]][cellId].v;
	    return value;
	};*/

    
};  
  
module.exports = RegisterPage;