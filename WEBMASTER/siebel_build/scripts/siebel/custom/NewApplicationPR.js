//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=View&name=QuantitativeView&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.NewApplicationPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.NewApplicationPR");
 define("siebel/custom/NewApplicationPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.NewApplicationPR = (function () {

    function NewApplicationPR(pm) {
     SiebelAppFacade.NewApplicationPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(NewApplicationPR, SiebelAppFacade.ViewPR);

    NewApplicationPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewApplicationPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewApplicationPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
	  NewRecord();
     SiebelAppFacade.NewApplicationPR.superclass.ShowUI.apply(this, arguments);
	var btn = '<div class=btn><button class="dropbtn" id = "Next" style="float:right">Next</button></div>';
	 $(btn).insertAfter( "#S_A1" );
	 
	 $("#Next").click(function(){
    	 WriteRecord();
	});
	
     // Add code here that should happen after default processing
	 function NewRecord(){
	var view1 = SiebelApp.S_App.GetActiveView();
	var arrApplets = view1.GetAppletMap();
	var oApplet, sAppletId, sAppletPM;

	for(var a in arrApplets)
	{ 
		oApplet = arrApplets[a]; 
		var appletName= oApplet.GetName();
		if(appletName == "SB New Application Applet") {
			
			sAppletId = oApplet.GetFullId();
			sAppletPM = oApplet.GetPModel();
			break;	
		}
    	}

	//var inputPS = SiebelApp.S_App.NewPropertySet();
	sAppletPM.ExecuteMethod ("InvokeMethod", "NewRecord", null, false);

 }
 function WriteRecord(NameApplet){

	//SiebelApp.S_App.GotoView ("SIS OM Customer Account Portal View");

	var view1 = SiebelApp.S_App.GetActiveView();
	var arrApplets = view1.GetAppletMap();
	var oApplet, sAppletId, sAppletPM;

	for(var a in arrApplets)
	{ 
		oApplet = arrApplets[a]; 
		var appletName= oApplet.GetName();
		if(appletName == "SB New Application Applet") {
			
			sAppletId = oApplet.GetFullId();
			sAppletPM = oApplet.GetPModel();
			break;	
		}
    	}

	var inputPS = SiebelApp.S_App.NewPropertySet();
	sAppletPM.ExecuteMethod ("InvokeMethod", "WriteRecord", null, false);

 }
    }

    NewApplicationPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.NewApplicationPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewApplicationPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewApplicationPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewApplicationPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewApplicationPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return NewApplicationPR;
   }()
  );
  return "SiebelAppFacade.NewApplicationPR";
 })
}
