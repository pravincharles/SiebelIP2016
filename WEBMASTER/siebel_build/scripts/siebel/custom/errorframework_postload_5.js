if (typeof (SiebelAppFacade.errorframework_postload_5) == "undefined") {
    Namespace('SiebelAppFacade.errorframework_postload_5');

    (function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
        function OnPostload( ){
            try{
               		 var fallback = false;
    console.log("inside error framework postload");
    $("#page-error").remove();
    window.old_alert = window.alert;
    $(document).keyup(function(e) {
	if (e.keyCode == 27) $("#page-error").remove(); 
		});
    window.alert = function(message, fallback) {
      /* 
      In order to use the 'old' alert message, 'false' must be passed along with the alert message;  
      This is not possible in the Siebel-generated alert messages 
      */
      if(fallback){
            old_alert(message);
            return;
      } 
      //message = alertMessageString;
      // Clear/Reset Data for new alert
      var requiredFieldsHtml = "";
      var requiredLabelsArray = [];
	  var customerror = ""; 
	  var errorimg = ""; 
	  var ShowatTop = "Yes";
      var activeview1 = SiebelApp.S_App.GetActiveView();
      var viewName1 = activeview1.GetName();	  
       var curfld = "";
  	  curfld = $(':focus').attr("aria-label");
        
        if("undefined"!== typeof( popupwindow)){
                 popupwindow = false;
        }
        // Get the required labels and validation msgs and place them in separate arrays (done via parseAlertString)
      var labelAndMsgArrays = parseAlertString(message);
      
      var labelArray = labelAndMsgArrays[0];
      var msgArraytemp = labelAndMsgArrays[1];
      var msgArray = $.unique(msgArraytemp);
      var queryerror = labelAndMsgArrays[2];
      // Clear/Reset Data for new post
      // $("#page-error").remove();
	  $(".page-error-class").remove();
  if (queryerror == false)
  {
      if ($("div.ui-dialog td").hasClass("AppletStylePopup")) 
      {
		  $("div.ui-dialog td input.siebui-input-align-left").each(function(index) {
			if((($(this).attr("aria-required")) == "true") && ($(this).val() == "")) 
             {
				if (($(this).attr("aria-readonly")) == "true")
                  {
					$(this).removeClass("req-input");
				  } 
                  else {
					$(this).addClass("req-input");
					var currentReqLabel = $(this).prev("div.mceGridLabel").html();
					try
                      {
                          var currentReqLabelParts = currentReqLabel.split(":");
					    requiredLabelsArray.push(currentReqLabelParts[0]);
					}
                       catch(e)
                       {
						var CurrReqLbl = $(this).attr("aria-label"); 
						//requiredLabelsArray.push(CurrReqLbl);
						if (CurrReqLbl.charAt(CurrReqLbl.length - 1) === "*")
						{
							requiredLabelsArray.push(CurrReqLbl.substring(0,CurrReqLbl.length-1));
						}
						else {
							requiredLabelsArray.push(CurrReqLbl);
						} 
					}
				}
			}
			else {
				$(this).removeClass("req-input");
			}
           }); 
		    
		  ShowatTop = "No"; 
	  } else {
		//if ($(".siebui-applet-active").parent().hasClass("AppletStylePopup"))
            if ($("div").hasClass("AppletStylePopup") && ($("div.AppletStylePopup div").hasClass("siebui-applet-active") || SiebelApp.S_App.GetProfileAttr("popupwindow")=="Y"))
            {
				SiebelApp.S_App.SetProfileAttr("popupwindow", "N");
                //console.log("PopUpApplet"); 
                ShowatTop = "N1"; 
            }
            else {
		// Find all empty fields with aria-required=true and add class to highlight; place req. field label in array
					var ActBO = SiebelApp.S_App.GetActiveBusObj().GetName(); 
					// var OpptyContactNull = ""; 
					var OpptyContactCaption = "Blank"; 
					// var OpptyAccNull = "";
					var OpptyAccCaption = "Blank";
                        
                    $("input.siebui-input-align-left, textarea.siebui-input-align-left").each(function(index) 
                        {
                        if((($(this).attr("aria-required")) == "true") && ($(this).val() == "")) 
                        {
                            if (($(this).attr("aria-readonly")) == "true")
                            {
                                $(this).removeClass("req-input");
                            }  
                            else {
								//{
									$(this).addClass("req-input");
									var currentReqLabel = $(this).prev("div.mceGridLabel").html();
									try
									{var currentReqLabelParts = currentReqLabel.split(":");
										requiredLabelsArray.push(currentReqLabelParts[0]);
									}
									catch(e)
									{
										var CurrReqLbl = $(this).attr("aria-label"); 
										requiredLabelsArray.push(CurrReqLbl);
									}
								//} 
                            }
                        }
                        else {
                            $(this).removeClass("req-input");
                        }
                    });
            }
	  }
  }
   
	/*if(cleanValidationMessage.search("Field format error") != -1 ){
		$(':focus').addClass("req-input");
	} */
	if(window.fieldName){
		$("[aria-label='"+window.fieldName+"']").addClass("req-input");
		window.fieldName = "";
	} 
	  // Create HTML List of empty required fields
	  if (queryerror == false)
	  {
      	if(requiredLabelsArray.length > 0)
      	{
        	requiredFieldsHtml = "<p>The following fields are required:</p><ul>";
        	for(q=0; q < requiredLabelsArray.length; q++) 
        	{
            	if (requiredFieldsHtml.indexOf("<li>" + requiredLabelsArray[q] + "</li>") < 0)
            	{
                	requiredFieldsHtml = requiredFieldsHtml + "<li>" + requiredLabelsArray[q] + "</li>";
            	}
        	}
			//requiredFieldsHtml = requiredFieldsHtml + "</ul>";
      	}
      }
      for(i=0; i < labelArray.length; i++) 
      {
        $("input[aria-label='" + labelArray[i] + "']").addClass("req-input"); 
		if (labelArray[i] === "Action Reason/Notes" || labelArray[i] === "Person(s) Notified") {
			$("textarea[aria-label='" + labelArray[i] + "']").addClass("req-input");
		} 
      }
	   
	  for(i=0; i < msgArray.length; i++) {
		var Label = GetLabelfromString(msgArray[i], requiredFieldsHtml); 
		 if (Label === "Showval")
			{
					customerror = customerror + "<li>" + msgArray[i] + "</li>"; 
					if(msgArray[i].search("Check if your data is in correct format") != -1 ){
							$(':focus').addClass("req-input");
						}
			
			}
		 else if (Label === "ShowNone") {}
		 else 
		 {
             if (queryerror == false)
             {
                    
                    if (requiredFieldsHtml === "")
                        {requiredFieldsHtml = "<p>The following fields are required:</p><ul>"; }
                    requiredFieldsHtml = requiredFieldsHtml + "<li>" + Label + "</li>";
					$("input[aria-label='" + Label + "']").addClass("req-input"); 
					$("textarea[aria-label='" + Label + "']").addClass("req-input");
              }
		 } 
      }
	  if (requiredFieldsHtml != "")
		{requiredFieldsHtml = "<div id=\"page-error_reqfield\">" + requiredFieldsHtml + "</ul>"+ "</div>" ;}
		//requiredFieldsHtml = requiredFieldsHtml + "</ul>";
		
	  if (customerror != "") 
		{customerror = "<div id=\"page-error_custerr\">" + "<p>Additional conditionally required fields and/or messages:</p><ul>" + customerror + "</ul>" + "</div>" ;}
		//customerror = "<p>Additional Messages:</p><ul>" + customerror + "</ul>";
      // Place list of required fields above applet containing inputs
	  if(errorimg==="")
        {errorimg = "<div id=\"page-error_img\">" + "<img id=\"error_img\" src=\"images/loy_pf_stop.png\" title=\"Click to Close the error message\" alt=\"Error!\" style=\"width:20px;height:20px;cursor:pointer\">" + "</div>"};

	  if (ShowatTop == "No")
      {
			$(".ui-dialog-content").before("<div id=\"page-error\" class=\"page-error-class\">" +  errorimg + "<div id=\"page-error_messageblock\">" + requiredFieldsHtml  + customerror + "</div>" + "</div>");
	  } 
    else {
            if (ShowatTop == "N1"){
                if($("#sieb-ui-popup-mvg-selected").length>0)
                {$("#sieb-ui-popup-mvg-selected").before("<div id=\"page-error\" class=\"page-error-class\">" +  errorimg + "<div id=\"page-error_messageblock\">" + requiredFieldsHtml  + customerror + "</div>" + "</div>");}
			else{$(".AppletStylePopup").before("<div id=\"page-error\" class=\"page-error-class\">" +  errorimg + "<div id=\"page-error_messageblock\">" + requiredFieldsHtml  + customerror + "</div>" + "</div>"); }
            } 
            else {
                {
                    if (queryerror == true && $("div.ui-dialog td").hasClass("AppletStylePopup")) {
                        $(".ui-dialog-content").before("<div id=\"page-error\" class=\"page-error-class\">" +  errorimg + "<div id=\"page-error_messageblock\">" + requiredFieldsHtml  + customerror + "</div>" + "</div>");
                    }
                    else{
                        $(".siebui-applet-active").before("<div id=\"page-error\" class=\"page-error-class\">" +  errorimg + "<div id=\"page-error_messageblock\">" + requiredFieldsHtml  + customerror + "</div>" + "</div>");
                        document.getElementById("page-error").scrollIntoView(); 
                    }
                }
            }
        }
	$("img#error_img").click(function(){
		$("#page-error").remove();
	});
      //added to Error Framework to remove message stickiness from buttons with no method
         var gobuttonid = document.getElementById("srmSearchGo");
		var gobuttonclass = document.getElementsByClassName("srmSearchGo");
		var ShowAvailable = document.getElementsByClassName("siebui-file-input");
		function remove4specialfunc() {
			var appletname1 = "div#" + SiebelApp.S_App.GetActiveView().GetActiveApplet().GetFullId();
			if(gobuttonid!= null){
				if ($("#srmSearchGo").closest($(appletname1)).length > 0){ 
					$(".page-error-class").remove(); 
					$("*").removeClass("req-input");
				}
			}
			if (gobuttonclass.length > -1){
				if (($(".srmSearchGo").closest($(appletname1)).length) > 0){
					 console.log($(".srmSearchGo").closest($("div#" + appletname1)))
					$(".page-error-class").remove(); 
					$("*").removeClass("req-input");
				}
			}
		}

//Section to add click event to buttons that do not have a method behind them
		if (gobuttonid != null){
			gobuttonid.removeEventListener('click' , remove4specialfunc, false);
			gobuttonid.addEventListener('click' , remove4specialfunc, false);
		}
		for(var i=0;i<gobuttonclass.length;i++){
			gobuttonclass[i].removeEventListener('click' , remove4specialfunc, false);
			gobuttonclass[i].addEventListener('click' , remove4specialfunc, false);
		}
}; 
    /* End window.alert over-ride for error messaging */
	
	/* This function has been created to fetch the field label from messages that are meant for required fields */ 
	function GetLabelfromString(MsgString, requiredFieldsStr) {
		if (MsgString.indexOf("is a required field.  Please enter a value for the field.") > -1 || MsgString.indexOf("IS REQUIRED FIELD.") > -1) {
		// MsgString.indexOf("SBL-DAT-00498") > -1 &&  
			var label = MsgString.split("'");
			console.log ("0" + label[0] + "1:" + label[1]+":"); 
			var Extractedlabel = label[1]; 
			if (label[1].indexOf("*") > 0) {
				var ActualLabel = label[1].split("*");
				Extractedlabel = ActualLabel[0]; 
				console.log ("ActualLabel[0]" + ActualLabel[0]); 
			}
			if (requiredFieldsStr.indexOf(Extractedlabel) > -1)
			 return "ShowNone";
			else 
			 return Extractedlabel; 
		}
		else 
			return "Showval"; 
	}
	
    /* This function is called to break up the alert message into usuable pieces */
    function parseAlertString(currentAlertString) {
      // currentAlertString (example) is:  Type:NOMSG|Area:NOMSG|Sub-Area:NOMSG|Source:Source field is required when Service Request Type is TM Service Request or Client Support (SBL-APS-00802)|NOLABEL:This is some random validation message
	  var fieldMessagePairs = currentAlertString.split("!<>!");
	  //var fieldMessagePairs = currentAlertString;
      var reqLabels = [];
      var validationMsgs = [];
      var queryerror = false;
      /*if (currentAlertString.search("SBL-DAT-00399")!=-1 || currentAlertString.search("SBL-DAT-00359")!=-1
       || currentAlertString.search("SBL-DAT-00493")!=-1 || currentAlertString.search("SBL-DAT-00501")!=-1
       || currentAlertString.search("SBL-DAT-00403")!=-1 || currentAlertString.search("SBL-DAT-60236")!=-1
       || currentAlertString.search("SBL-DBC-00105")!=-1 || currentAlertString.search("SBL-UIF-00348")!=-1
       || currentAlertString.search("SBL-DAT-00481")!=-1)
          {
          queryerror=true
          }*/
	   validationMsgs.push(currentAlertString);
	   //console.log("fieldMessagePairs= "+fieldMessagePairs[0]); 
      for(var q=0; q < fieldMessagePairs.length; q++) {
        //var currentPair = fieldMessagePairs[q].split(":");
		var currentPair = fieldMessagePairs[q].split(":^:");
		var currentLabel = currentPair[0]; 
		if (currentPair.length === 1) { 
			//console.log("if currentLabel ="+ currentLabel); 
			//validationMsgs.push(clearErrorCodes(currentLabel));
			validationMsgs.push(currentLabel);
		}
		else {
        
		//console.log("currentLabel "+currentLabel); 
        var currentMessage = currentPair[1]; 
        if(currentLabel != "NOLABEL") {
          var parsemultilabel = currentLabel.split(","); 
		  for(var i=0; i < parsemultilabel.length; i++) {
			//reqLabels.push(currentLabel);
			reqLabels.push(parsemultilabel[i]);
		  }
        }
		
		validationMsgs.push(currentMessage);
		//currentMessage = clearErrorCodes(currentMessage); 
        if(currentMessage != "NOMSG") {
          // validationMsgs.push(clearErrorCodes(currentMessage));
		  validationMsgs.push(currentMessage);
        }
		}
      }
      return [reqLabels, validationMsgs, queryerror];
    } // end parseAlertString
    
    // Removes the codes (e.g., SBL-APS-10092) from error messages
    /*function clearErrorCodes(validationMessage) {
      //console.log("clearErrorCodes: " + validationMessage);
      if( validationMessage != undefined) {
		if(validationMessage.indexOf("please refer to the documentation") != -1){
			var fieldName = validationMessage.substring(validationMessage.lastIndexOf("detected in field")+18,validationMessage.indexOf("."));
			var errorMsg = validationMessage.split("[2]");
			if(errorMsg[1].indexOf(": SBL") != -1){
				errorMsg = errorMsg[1].split(":");
				errorMsg = errorMsg[0].trim();
				if(errorMsg.charAt(errorMsg.length-1) == "."){
					errorMsg = errorMsg.split(".");
					errorMsg = errorMsg[0];
				}
			}
			else{
				errorMsg = errorMsg[1].trim();
				if(errorMsg.charAt(errorMsg.length-1) == "."){
					errorMsg = errorMsg.split(".");
					errorMsg = errorMsg[0];
				}
			}
			errorMsg = errorMsg.replace("Please Enter a value","Please enter a value");
			cleanValidationMessage = "Error on "+fieldName+" field. "+errorMsg+".";
			window.fieldName = fieldName;
		}
		else{
			var valMsgArray = validationMessage.split("(SBL");
			valMsgArray = valMsgArray[0].split(": SBL-DAT"); 
			cleanValidationMessage = valMsgArray[0];
			//console.log("cleanValidationMessage" + cleanValidationMessage );
		}
        if(cleanValidationMessage != "") {
		 console.log("If cleanValidationMessage "+ cleanValidationMessage); 
          return cleanValidationMessage;
        }
      }
    } // end clearErrorCodes   */
 SiebelApp.S_App.SetProfileAttr("popupwindow", "N");
//------------------------------------------------------ERROR FRAMEWORK END----------------------------------------------------			
		}	
            
            catch(error)
            {
                //No-Op
            }
        }
    }());
}