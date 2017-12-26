//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=View&name=QuantitativeView&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.QualitativeViewPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.QualitativeViewPR");
 define("siebel/custom/QualitativeViewPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.QualitativeViewPR = (function () {

    function QualitativeViewPR(pm) {
     SiebelAppFacade.QualitativeViewPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(QualitativeViewPR, SiebelAppFacade.ViewPR);

    QualitativeViewPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.QualitativeViewPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    QualitativeViewPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.QualitativeViewPR.superclass.ShowUI.apply(this, arguments);
	 $( "[title='Legal Accounts List Applet']" ).hide();
	
     // Add code here that should happen after default processing
    }

    QualitativeViewPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.QualitativeViewPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    QualitativeViewPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.QualitativeViewPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    QualitativeViewPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.QualitativeViewPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return QualitativeViewPR;
   }()
  );
  return "SiebelAppFacade.QualitativeViewPR";
 })
}
