//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=View&name=QuantitativeView&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.LegalAccntHideViewPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.LegalAccntHideViewPR");
 define("siebel/custom/LegalAccntHideViewPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.LegalAccntHideViewPR = (function () {

    function LegalAccntHideViewPR(pm) {
     SiebelAppFacade.LegalAccntHideViewPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(LegalAccntHideViewPR, SiebelAppFacade.ViewPR);

    LegalAccntHideViewPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntHideViewPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    LegalAccntHideViewPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntHideViewPR.superclass.ShowUI.apply(this, arguments);
	 $( "[title='Legal Accounts List Applet']" ).hide();
	 
     // Add code here that should happen after default processing
    }

    LegalAccntHideViewPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntHideViewPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    LegalAccntHideViewPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntHideViewPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    LegalAccntHideViewPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntHideViewPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return LegalAccntHideViewPR;
   }()
  );
  return "SiebelAppFacade.LegalAccntHideViewPR";
 })
}
