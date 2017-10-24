var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+'_'+time;
var str=dateTime.replace(":", "-");
var str1=str.replace(":", "-");

var folderPath='C:/Users/Vedantk/Desktop/ProtractorTest/NewFolder/PageObjectModel/ReportDir/'+str1;
var folderPathForScreenShot = folderPath+"/Screenshot";
var folderPathForLog = folderPath+"/ExecutionLog.log";
var folderPathForReport = folderPath+"/Report.html";
var xmlPath=folderPath+"/xmlresults.xml";
var screenshots = require('protractor-take-screenshots-on-demand');
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');
var log4js = require('log4js');




exports.config = {
 
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		  
		directConnect:true,
		 
		// Capabilities to be passed to the webdriver instance. 
		  capabilities: {
		    'browserName': 'chrome',
		    	
		  },
		 /*multiCapabilities: [
			    {'browserName': 'chrome'},
			    {'browserName': 'firefox'}
			  ],
			  maxSessions: 1,*/	  
		 specs: ['JetBlueTestCase.js'],
		 
		// specs: ['Login.js'],
		 
		    // specs: ['DemoApplication.js','DemoBankApplication.js'],
		  
		   
   onPrepare: function() {
	   browser.logger = log4js.getLogger('protractorLog4js');
	   browser.test = [];

	   log4js.configure({
	        appenders: [
	            { type: 'log4js-protractor-appender', category: 'protractorLog4js' },
	            {
	                type: "file",
	                filename: folderPathForLog,
	                category: 'protractorLog4js'
	            }
	        ]
	    });
	   
	 
     
	  // onPrepare: function () {
	   jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		     consolidateAll: true,
		     savePath: folderPath,
		     filePrefix: 'xmlresults'
		 }));
	  /* jasmine.getEnv().addReporter(
		        new HTMLReport({
		          savePath: folderPath,
		          cleanDestination: false,
		          fileNamePrefix: 'Report'
		        })
		      );*/
		//  }
      
           screenshots.browserNameJoiner = ' - '; //this is the default
      
      //folder of screenshots
           screenshots.screenShotDirectory = folderPathForScreenShot;
      
      //creates folder of screenshots
           screenshots.createDirectory();
   },
		  jasmineNodeOpts: {
			  // onComplete will be called just before the driver quits.
			    onComplete: null,
			    // If true, display spec names.
			    isVerbose: false,
			    // If true, print colors to the terminal.
			    showColors: true,
			    // If true, include stack traces in failures.
			    includeStackTrace: true,
			    // Default time to wait in ms before a test fails.
			    defaultTimeoutInterval: 100000 
			  },

   onComplete: function() {
	     var browserName, browserVersion;
	     var capsPromise = browser.getCapabilities();
	 
	     capsPromise.then(function (caps) {
	        browserName = caps.get('browserName');
	        browserVersion = caps.get('version');
	 
	        var HTMLReport = require('protractor-html-reporter');
	 
	        testConfig = {
	            reportTitle: 'Test Execution Report',
	            outputPath: folderPath,
	            screenshotPath: folderPathForScreenShot,
	            testBrowser: browserName,
	            browserVersion: browserVersion,
	            modifiedSuiteName: false,
	            screenshotsOnlyOnFailure: false
	        };
	        new HTMLReport().from(xmlPath, testConfig);
	    });
	 },
	 
	
}

/*var myReporter = {
		 jasmineStarted: function(suiteInfo) {
			
			 browser.logger.info('Running suite  ' + suiteInfo.totalSpecsDefined);
		  },
		  specDone: function(result) {
			  browser.logger.info('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
			  },
		  
		  suiteStarted: function(result) {
			  browser.logger.info('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
		  },
		  specStarted: function(result) {
			  browser.logger.info('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
		  },
		  specDone: function(result) {browser.logger.info('Spec: ' + result.description + ' was ' + result.status);
		    for(var i = 0; i < result.failedExpectations.length; i++) {browser.logger.error('Failure: ' + result.failedExpectations[i].message);
		    browser.logger.info(result.failedExpectations[i].stack);
		    browser.logger.error('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
		    } browser.logger.info(result.passedExpectations.length);
		  },
		  suiteDone: function(result) {browser.logger.info('Suite: ' + result.description + ' was ' + result.status);
		    for(var i = 0; i < result.failedExpectations.length; i++) {browser.logger.info('AfterAll ' + result.failedExpectations[i].message);
		    browser.logger.info(result.failedExpectations[i].stack);
		    }
		  },jasmineDone: function() {
			  browser.logger.info('Finished suite');
		  }
		};*/
