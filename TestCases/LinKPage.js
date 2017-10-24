'use strict';
var fs = require('fs');
var commonFunction = require('C:/Users/Vedantk/Desktop/ProtractorTest/NewFolder/PageObjectModel/TestCases/CommonMethods.js');
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');
function VerifyLinks()
{
	var Links = element.all(by.xpath("//ul[@id='jb-primary-links']/li"));
    var LinksPlanATrip = element(by.xpath("//ul[@id='jb-primary-links']/li[1]"));
    var Flights = element(by.xpath("//span[text()='Flights']"));
    var limit=6;
    var limit1=7;
    var PlanATripSubMenu = element.all(by.xpath("//div[@class='plan-a-trip-submenu']/ul/li"));
    
    this.navigateToAllLinks = function () 
    {
    			 for (var index = 0; index < limit; index++) 
    			 {
    				    var option = element.all(by.xpath('//ul[@id="jb-primary-links"]/li')).get(index);
    				    option.click();
    				    browser.sleep(4000);
    				   
    			};
    			
    				browser.actions().mouseMove(LinksPlanATrip).perform();
    				browser.sleep(2000);
    				commonFunction.ClickOn(Flights,"Flights")
    }
    				
    					
}

module.exports = VerifyLinks;