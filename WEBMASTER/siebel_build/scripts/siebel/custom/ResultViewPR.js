//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=View&name=QuantitativeView&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.ResultViewPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.ResultViewPR");
 define("siebel/custom/ResultViewPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.ResultViewPR = (function () {

    function ResultViewPR(pm) {
     SiebelAppFacade.ResultViewPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(ResultViewPR, SiebelAppFacade.ViewPR);

    ResultViewPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.ResultViewPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    ResultViewPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.ResultViewPR.superclass.ShowUI.apply(this, arguments);
	 $( "[title='Legal Accounts List Applet']" ).hide();
	 var btn = '<div class=btn><button class="dropbtn" id = "newview" style="float:right">New Application</button></div>';
	 $(btn).insertAfter( "[title='Result Form Applet']" );
	$("#newview").click(function(){
		var BO = SiebelApp.S_App.GetActiveView();
    	SiebelApp.S_App.GotoView ("SB New Application View");
	});
     // Add code here that should happen after default processing
    }

    ResultViewPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.ResultViewPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    ResultViewPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.ResultViewPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    ResultViewPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.ResultViewPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return ResultViewPR;
   }()
  );
  return "SiebelAppFacade.ResultViewPR";
 })
}
