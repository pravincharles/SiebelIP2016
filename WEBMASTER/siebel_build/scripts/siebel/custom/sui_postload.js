if (typeof (SiebelAppFacade.sui_postload) == "undefined") {
    Namespace('SiebelAppFacade.sui_postload');

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
		}	
            
            catch(error)
            {
                //No-Op
            }
        }
    }());
}