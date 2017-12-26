if (typeof (SiebelAppFacade.sui_postload_5) == "undefined") {
    Namespace('SiebelAppFacade.sui_postload_5');

    (function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
        function OnPostload( ){
            try{
               			
				if($(".screen-tab-selected"))
				{
				console.log("tab selected");
				$(".screen-tab-deselected").hide();
				   $("li img").hide();
				   $('.screen-tab-selected').prepend('<img class="Backbutton" src="images/leftarrow.png" alt="" width="22" height="15">');
				   $(".Backbutton").css("color", "white"); 
				}
				$(".Backbutton").click(function() 
				{
				console.log(" click");	
				$(".screen-tab-deselected").show();
				$("li img").show();
				$("li a").removeAttr("href");
				$(".Backbutton").remove();
			
				});
			if($("div.tier1Back div#s_sctrl_tabScreen ul.ui-tabs-nav li[aria-expanded='true']").length && $("div.tier1Back div#s_sctrl_tabScreen ul.ui-tabs-nav li[aria-expanded='true']").text() != "Home")
			{
				console.log("inside not first child loop");	
				$("div.tier1Back div#s_sctrl_tabScreen ul.ui-tabs-nav li[aria-expanded='true']").removeClass("screenhiddentabs");
				$("div.tier1Back div#s_sctrl_tabScreen ul.ui-tabs-nav li[aria-expanded='false']").addClass("screenhiddentabs");
				//$("div.tier1Back div#s_sctrl_tabScreen ul.ui-tabs-nav li[aria-expanded='false']").each(function(){if($(this).text()!="Home"){$(this).addClass("screenhiddentabs");}});
				$("#screenhiddentabs").remove();
				$("div.tier1Back div#s_sctrl").prepend('<div id="windarrowdiv" style="position: absolute;padding-top: 20px;"><img src="images/custom/transarrow-icon.png" style="width: 40px;height: 40px;transform: scaleX(-1);cursor: pointer;"></div>');
				$("#windarrowdiv img").click(function(){SiebelApp.S_App.GotoView("Home Page View (WCC)");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
			}			
		}	
            
            catch(error)
            {
                //No-Op
            }
        }
    }());
}