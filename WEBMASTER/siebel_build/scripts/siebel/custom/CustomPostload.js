if (typeof (SiebelAppFacade.Postload) == "undefined") {
    Namespace('SiebelAppFacade.Postload');

    (function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
        function OnPostload( ){
            try
			{
				debugger;
				var el = document.getElementById('HTMLMessageBar');
				debugger;
				el.innerHTML = "<div id='msg'><span id='welcome'>Welcome, Customer</span></div>"; 
				var el1 = document.getElementById('msg');
				child1 = document.createElement("span");
				debugger;
				child1.id = 'tools';
				child1.innerHTML= '<img src="images/custom/tools-icon.png" id="apptoolbar" height=30px width=30px />'; 
				debugger;
				el1.appendChild(child1);
				debugger;
				$('#s_toolbar').hide();
				$("#apptoolbar").click(function(){
					$('#s_toolbar').slideToggle();
				});

				var thread = document.getElementById("_swethreadbar");
				thread.innerHTML = "<span id = 'img1'><img src= 'images/custom/top-hand-image.png' id= 'imgg'/></span>"
				console.log("Loaded"); 
				
            }
            catch(error)
            {
                //No-Op
            }  
        }
    }());
	
}
