if (typeof (SiebelAppFacade.custom_preload) == "undefined") {
    Namespace('SiebelAppFacade.custom_preload');

    (function(){
        SiebelApp.EventManager.addListner( "preload", OnPreload, this );
        function OnPreload( ){
            try{
                	$(".rightHandPane").remove();
                	$("#_sweview").removeClass("shrinkMiddlePane");
			$("#accordionStyle").remove();
            }
            catch(error)
            {
                //No-Op
            }
        }
    }());
}