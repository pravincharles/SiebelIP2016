if (typeof (SiebelAppFacade.sui_postload_2) == "undefined") {
    Namespace('SiebelAppFacade.sui_postload_2');

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
			if($("div.tier1Back div#s_sctrl_tabScreen ul li [aria-controls='s_sctrl_tabScreen_noop'][aria-expanded='true']").length)
			{
				console.log("inside not first child loop");	
				$("div.tier1Back div#s_sctrl_tabScreen ul li [aria-controls='s_sctrl_tabScreen_noop'][aria-expanded='false']:not(:first-child)").css("display","none !important");
			}			
		}	
            
            catch(error)
            {
                //No-Op
            }
        }
    }());
}