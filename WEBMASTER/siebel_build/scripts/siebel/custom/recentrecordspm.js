if (typeof(SiebelAppFacade.RecentRecordsPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.RecentRecordsPM");
 define("siebel/custom/recentrecordspm", ["siebel/listpmodel"],
  function () {
   SiebelAppFacade.RecentRecordsPM = (function () {

    function RecentRecordsPM(pm) {
     SiebelAppFacade.RecentRecordsPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(RecentRecordsPM, SiebelAppFacade.ListPresentationModel);
	
    RecentRecordsPM.prototype.Init = function () {
     SiebelAppFacade.RecentRecordsPM.superclass.Init.apply(this, arguments);
	 this.AddProperty( "AppletLoad", "" );
	this.AddMethod( "ShowSelection",  AppletLoad, { sequence : false, scope : this } );
	 //SiebelJS.Log(this.Get("GetName")+": "+this.constructor.name+":      Init method reached.");
    }
	
	function AppletLoad(){
	this.SetProperty( "AppletLoad", "TRUE" );	
	}
	
    RecentRecordsPM.prototype.Setup = function (propSet) {
     //SiebelJS.Log(this.Get("GetName")+": "+this.constructor.name+":      Setup method reached.");
     SiebelAppFacade.RecentRecordsPM.superclass.Setup.apply(this, arguments);
    }
	
	
    return RecentRecordsPM;
   }()
  );
  return "SiebelAppFacade.RecentRecordsPM";
 })
}
