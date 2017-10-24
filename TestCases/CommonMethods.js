'use strict';
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');
var webdriver = require('selenium-webdriver');
const XlsxPopulate = require('xlsx-populate');
const Promise = require("bluebird");
XlsxPopulate.Promise = Promise;
var fs = require('fs');
var webElement;
var text;
var type;
var message;
var columnName;
var uncaught = require('uncaught');

uncaught.start();
uncaught.addListener(function (error) {
    console.log('Uncaught error or rejection: ', error.message);
});
	
/**
	* Usage: selectDropdownByNumber ( element, index)
	* element : select element
	* index : index in the dropdown, 1 base.
	*/
	
  exports.SelectDropDownByIndex = function selectDropdownByNumber(element, index) {
	  try{
		 element.all(by.tagName('option'))
         .then(function(options) {
           options[index].click();
           browser.logger.info("Selected Element of index " +index);
      
         });
	  }
	  catch(e){
			 browser.logger.error("Error "+e);
		}
	}
	
	

	/**
	* Usage: selectDropdownByText (WebElement, item)
	* selector : select element
	* item : option(s) in the dropdown.
	*/
  
	exports.SelectDropdownByText = function selectOption(element,item) {
		try{
	    var desiredOption;
	    element.all(by.tagName('option'))
	    .then(function findMatchingOption(options) {
	        options.some(function (option) {
	            option.getText().then(function doesOptionMatch(text) {
	                if (text.indexOf(item) != -1) {
	                    desiredOption = option;
	                    return true;
	                }
	            });
	        });
	    })
	    .then(function clickOption() {
	        if (desiredOption) {
	            desiredOption.click();
	            browser.logger.info("Selected Element from dropDown " +item);
	            
	        }
	    });
		}
		catch(e){
			 browser.logger.error("Error "+e);
		}
	}
	
	/**
	* Usage: EnterText (WebElement, text)   
	
	*/
	
	exports.EnterText = function enterText(WebElement, text) {
		try{
			if(WebElement.isPresent()){
		WebElement.clear();
		WebElement.sendKeys(text);
		browser.logger.info("Entered text " +text);
		
		      }
			else{
				browser.logger.error("Unable to find the element "+WebElement);
			}
		}
		catch(e){
			 browser.logger.error("Error "+e);
		}
	}
	
	/**
	* Usage: Click (WebElement, text)   
	
	*/
	exports.ClickOn = function clickOn(WebElement, text) {
		try{
		
		WebElement.click();
		 browser.logger.info("Clicked On " +text);
		}
		catch(e){
			 browser.logger.error("Error "+e);
		}
	}
	
	/**
	* Usage: Move Cursor To any element (WebElement)   
	
	*/
	exports.MoveToElement = function moveToElement(WebElement) {
		
		browser.actions().mouseMove(WebElement).perform();
		//browser.actions().MOUSEMOVE
		
	}
	
	
exports.GetText = function getText(WebElement) {
	
	'use strict';
	 var value;	
	 value = WebElement.getText();
	 browser.logger.info("Visible Text is " +value);
		return value;
	}
	
	
	exports.TakeScreenShot=function writeScreenShot(data, filename) {
		try{
		  var stream = fs.createWriteStream(filename);
		  stream.write(new Buffer(data, 'base64'));
		  stream.end();
		}
		catch(e){
			 browser.logger.error("Error "+e);
		}
	}
	
	String.prototype.equalsIgnoreCase = function(otherString) {
	    return (this.toUpperCase() == otherString.toUpperCase()) ;
	}
	
	function writeToLogFile(type,message )
	   {
	     var t = type.toUpperCase();
	     if (t.equalsIgnoreCase("DEBUG")== true)
	     {
	    	 browser.logger.debug(message);
	     }
	     else if (t.equalsIgnoreCase("INFO")== true)
	     {
	    	 browser.logger.info(message);
	     }
	     else if (t.equalsIgnoreCase("WARN")== true)
	     {
	    	 browser.logger.warn(message);
	     }
	     else if (t.equalsIgnoreCase("ERROR")== true)
	     {
	    	 browser.logger.error(message);
	     }
	     else if (t.equalsIgnoreCase("FATAL")== true)
	     {
	    	 browser.logger.fatal(message);
	     }
	     else {
	    	 browser. logger.error("Invalid log Type :" + type + ". Unable to log the message.");
	     }
	   }
	
	
	exports.TestStepPassed=function testStepPassed(message){
	    
		writeToLogFile("Info", message);
	    }
	exports.TestStepFailed=function testStepFailedd(message){
	    
		writeToLogFile("ERROR", message);
	    }
    exports.TestStepInfo=function testStepInfo(message){
	    
		writeToLogFile("Info", message);
	    }
    
    
    
   /* exports.RetriveValue = function retriveValue(cellId) {
	    'use strict';
	    //Define sheetNumber
	    var sheetNumber = 0;
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
	//------------------------------------------//-----------------------------------------------------------------------------
   
    /*exports. TestCaseSettingExel = function( filepath){
    	 
    	 var execute=[]; 
    	  var row;
    	  var test = [];
    	  var rowValue =[];
    	   var XLSX = require('xlsx');
    	   var workbook = XLSX.readFile(filepath); // parse the file
    	   var sheet = workbook.Sheets[workbook.SheetNames[0]]; // get the first worksheet
    	   var range = XLSX.utils.decode_range(sheet['!ref']);
    	   console.log(range);
    	   console.log(sheet);
    	   for(var R = 1; R <= range.e.r; ++R) {
    		   for(var C = 1; C <= range.e.c; ++C) {
    	  // for(rowNum = 1; rowNum <= range.e.r; rowNum++){
    		 //  rowValue.length= 0;
    	      // for(colNum=1; colNum<=range.e.c; colNum++){
    	    	   try
                   {
    	    		var demo=XLSX.utils.encode_cell({c:C, r:R}).v.toString();
    	    		console.log(demo);
    	    	   rowValue.push( sheet.range[{c:C, r:R}].v.toString());
                   }
    	    	   catch ( ex)
                   {
                       break;
                   }
    	         
    	       }
    	       if (rowValue[4] == "Yes") 
               {
    	    	   console.log('vedant');
    	    	   var testexec= rowValue[2].toString();
    	    	   execute.push(testexec);
    	    	   console.log(execute);
               }
    	       
    	       console.log(R);
    	       console.log(C);
    	   }
    	  
    	  // return test;
    	};*/
	//------------------------------------------//-----------------------------------------------------------------------------
	/* exports.TestCaseSettingExcel = function TestCaseSettingExel() { 
		 const rowValue =[];
		 var execute =[];
		 var test = [];
		 try
	        {*/
		
	        // Load an existing workbook 
    exports.RetriveValue=  function( filepath){
    	  
    	      var execute =[];
    	      const XlsxPopulate = require('xlsx-populate');
    	      XlsxPopulate.fromFileAsync(filepath)
    	      .then(workbook => {
             // Modify the workbook. 
	    	   const rowValue =[];
	    	   var xlRange = workbook.sheet("Sheet1").usedRange();
	    	   var rowCount =  workbook.sheet("Sheet1").usedRange(). _numRows;
	    	   var colCount =  workbook.sheet("Sheet1").usedRange(). _numColumns;
	    	
	    	 for (var i = 2; i <= rowCount; i++)
	            {
	    		 rowValue.length= 0;
	             
	                for (var j = 1; j <= colCount; j++)
	                {
	                try
	                    {
	                      rowValue.push(workbook.sheet("Sheet1").cell(i, j).value().toString());
	                    }
	                    catch ( ex)
	                    {
	                        break;
	                    }
	                }
                    if (rowValue[4] == "Yes") 
	                {
                    	var testexec = rowValue[2].toString();
						  execute.push(testexec);
					}
                }
	    	
	      }).then( data =>{
	    	  
	    	  return execute;
	        })
	        console.log(execute); 
	     // 
    }
	      