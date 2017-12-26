if (typeof (SiebelAppFacade.custom_postload_1) == "undefined") {
    Namespace('SiebelAppFacade.custom_postload_1');

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
		else if(CurrentView === "Account List View")
		{
			//$(".rightHandPane").remove();
                	//$("#_sweview").removeClass("shrinkMiddlePane");
			//$("#accordionStyle").remove();
			var AccordCode = "<div id='accordionStyle'><h3>Account List Applet</h3><div id='CustomAccord1'><p></p></div><h3>Account Form Applet</h3><div id='CustomAccord2'><p></p></div></div>";		
			$("#_svf0>div").prepend($(AccordCode));
			$("#CustomAccord1 p").append($("div a[title='Accounts']").parent());
			$("#CustomAccord2 p").append($("div a[title='Account Detail']").parent());
			$("#accordionStyle").accordion({collapsible: true, active: false});
			
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