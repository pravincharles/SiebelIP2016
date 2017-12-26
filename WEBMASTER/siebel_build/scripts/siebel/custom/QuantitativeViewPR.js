//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=View&name=QuantitativeView&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.QuantitativeViewPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.QuantitativeViewPR");
 define("siebel/custom/QuantitativeViewPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.QuantitativeViewPR = (function () {

    function QuantitativeViewPR(pm) {
     SiebelAppFacade.QuantitativeViewPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(QuantitativeViewPR, SiebelAppFacade.ViewPR);

    QuantitativeViewPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.QuantitativeViewPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    QuantitativeViewPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.QuantitativeViewPR.superclass.ShowUI.apply(this, arguments);
	var dropdown  = '<div class="dropdown"><button class="dropbtn">Menu</button><div class="dropdown-content"><a href="#" id="Income">Income Statement</a><a href="#" id="Balance">Balance Sheet</a><a href="#" id="Score">Financial Ratios</a></div></div>';
	$(dropdown).insertBefore( "#_FormParentRelatedItems" );
	$( "[title='Legal Accounts List Applet']" ).hide();
	$( "[title='Income Statement Form Applet']" ).show();
	$( "[title='Balance Sheet Form Applet']" ).hide();
	$( "[title='Financial Ratios Form Applet']" ).hide();
	
	$("#Income").click(function(){
    	$( "[title='Income Statement Form Applet']" ).show();
		$( "[title='Balance Sheet Form Applet']" ).hide();
		$( "[title='Financial Ratios Form Applet']" ).hide();
		var NameApplet="SB Quantitative Applet_BalanceSheet";
		 WriteRecord(NameApplet);
	});
	$("#Balance").click(function(){
    	$( "[title='Income Statement Form Applet']" ).hide();
		$( "[title='Balance Sheet Form Applet']" ).show();
		$( "[title='Financial Ratios Form Applet']" ).hide();
		var NameApplet="SB Quantitative Applet_IncomeStatement";
		 WriteRecord(NameApplet);
		
	});
	$("#Score").click(function(){
    	$( "[title='Income Statement Form Applet']" ).hide();
		$( "[title='Balance Sheet Form Applet']" ).hide();
		$( "[title='Financial Ratios Form Applet']" ).show();
		var NameApplet="SB Quantitative Applet_IncomeStatement";
		 WriteRecord(NameApplet);
		 NameApplet="SB Quantitative Applet_BalanceSheet";
		 WriteRecord(NameApplet);
	});
	
	function WriteRecord(NameApplet){

	//SiebelApp.S_App.GotoView ("SIS OM Customer Account Portal View");

	var view1 = SiebelApp.S_App.GetActiveView();
	var arrApplets = view1.GetAppletMap();
	var oApplet, sAppletId, sAppletPM;

	for(var a in arrApplets)
	{ 
		oApplet = arrApplets[a]; 
		var appletName= oApplet.GetName();
		if(appletName == NameApplet) {
			
			sAppletId = oApplet.GetFullId();
			sAppletPM = oApplet.GetPModel();
			break;	
		}
    	}

	var inputPS = SiebelApp.S_App.NewPropertySet();
	sAppletPM.ExecuteMethod ("InvokeMethod", "WriteRecord", null, false);

 }
     // Add code here that should happen after default processing
    }

    QuantitativeViewPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.QuantitativeViewPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    QuantitativeViewPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.QuantitativeViewPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    QuantitativeViewPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.QuantitativeViewPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return QuantitativeViewPR;
   }()
  );
  return "SiebelAppFacade.QuantitativeViewPR";
 })
}
