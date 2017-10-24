var Register = require('C:/Users/Vedantk/Desktop/ProtractorTest/NewFolder/PageObjectModel/TestCases/RegisterPage.js');
var VerifyLinks=require('C:/Users/Vedantk/Desktop/ProtractorTest/NewFolder/PageObjectModel/TestCases/LinKPage.js');
var LoginPage = require('C:/Users/Vedantk/Desktop/ProtractorTest/NewFolder/PageObjectModel/TestCases/LoginPage.js');
var signIn = new Register();
var linknav = new VerifyLinks();
var login = new LoginPage();
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');
//var signIn = new LoginPage();
//You can focus on a describe with fdescribe
describe('JetBlues Demo', function() {
	
 //before Each :  This piece of code executes before all it statement
	
	beforeEach(function() 
	{
	
		   browser.waitForAngularEnabled(false);
           browser.get('https://www.jetblue.com/#/');
           browser.manage().window().maximize();
    });
	
 fit('should click on the join now link and enter the Details', function() 
		 {
	 
	 signIn.navigateToRegisterPage();
           
         });
	
 it('should click on the All the Tab link', function() 
		 {
     		  
        	  linknav. navigateToAllLinks();

     	});
 it('Login in the application', function() 
		 {
	 
	 login.navigateToLoginPage();
           
         });

});




/*Suites can be disabled with the xdescribe function. These suites and any specs inside them are skipped when run and 
thus their results will not appear in the results.*/


//C:\Users\Vedantk\Desktop\ProtractorTest\NewFolder\PageObjectModel\TestData.xlsx