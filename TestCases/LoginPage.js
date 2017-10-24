'use strict';
var fs = require('fs');
var screenshots = require('protractor-take-screenshots-on-demand');
var commonFunction = require('C:/Users/Vedantk/Desktop/ProtractorTest/NewFolder/PageObjectModel/TestCases/CommonMethods.js'); 
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');
var log4js = require('log4js');

var LoginPage=function()
{
	   'use strict';
       var txtEmail = element(by.xpath("//input[@id='email_field']"));
	   var txtPassword = element(by.xpath("//input[@id='password_field']"));
	   var btnSignIn = element(by.xpath("//input[@id='signin_btn']"));
	   var txtName = element(by.xpath("//div[@id='main-inner']/h3"));
	   
	   
	   
	   
	   this.navigateToLoginPage = function () 
       {
 
		     try{
		    	 browser.sleep(9000);
		    	 commonFunction.EnterText(txtEmail,"vedantkumar05@gmail.com");
		    	 commonFunction.EnterText(txtPassword,"Reset123");
		    	 browser.sleep(9000);
				 screenshots.takeScreenshot('Before Clicking on signIn button of Home page');
				 commonFunction.ClickOn(btnSignIn,"SignIn Button");
				 browser.sleep(9000);
				 screenshots.takeScreenshot('After signIn in to Application');
				 commonFunction.GetText(txtName);
				 
		     }
		     catch(e){
  		       commonFunction.TestStepFailed(e);
		              }
	
	
       };
	
	
	
	
	
	
};
module.exports = LoginPage;