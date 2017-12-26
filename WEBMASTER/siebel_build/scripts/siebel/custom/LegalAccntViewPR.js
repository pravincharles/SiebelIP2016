//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=View&name=LegalAccntView&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.LegalAccntViewPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.LegalAccntViewPR");
 define("siebel/custom/LegalAccntViewPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.LegalAccntViewPR = (function () {

    function LegalAccntViewPR(pm) {
     SiebelAppFacade.LegalAccntViewPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(LegalAccntViewPR, SiebelAppFacade.ViewPR);

    LegalAccntViewPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntViewPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    LegalAccntViewPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntViewPR.superclass.ShowUI.apply(this, arguments);
	$("#S_A4").hide();
	//$("#S_A1").find("div.siebui-tile-image").hide();
     // Add code here that should happen after default processing
    }

    LegalAccntViewPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntViewPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    LegalAccntViewPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntViewPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    LegalAccntViewPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.LegalAccntViewPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return LegalAccntViewPR;
   }()
  );
  return "SiebelAppFacade.LegalAccntViewPR";
 })
}
