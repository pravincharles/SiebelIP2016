if (typeof (SiebelAppFacade.custom_postload) == "undefined") {
    Namespace('SiebelAppFacade.custom_postload');

    (function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
        function OnPostload( ){
            try{
                console.log("custom post load - Loaded");
		var CurrentView = SiebelApp.S_App.GetActiveView().GetName();
		var CurrentObj = SiebelApp.S_App.GetActiveBusObj().GetName();
		if(CurrentObj === "Contact")
		{
			//console.log("inside "+CurrentObj);
			RightHandNav();
		}
		else
		{
			$(".rightHandPane").remove();
                	$("#_sweview").removeClass("shrinkMiddlePane");		
		}
            }
            catch(error)
            {
                //No-Op
            }
        }
	function RightHandNav()
    	{
        	var rightHandPane = "<div class='rightHandPane'><h1>Detail</h1></div>";
        	var hasRHP = $(".rightHandPane");
        	var hasSubViews =  $(".siebui-subview-navs");
        	if(hasSubViews.length>0)
        	{
           	 if(hasRHP.length==0)
           	 {
            	    $("div#_swecontent>div").append(rightHandPane);
              	  $("div#_sweview").addClass("shrinkMiddlePane"); 
           	}
            	else
           	 {
           	     $(".rightHandPane").empty();
           	 }
           	 $("div.rightHandPane").append($(".siebui-subview-navs"));			
        	}
        	return false;
    	}
    }());
}