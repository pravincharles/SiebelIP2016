if (typeof (SiebelAppFacade.Postload) == "undefined") {
    Namespace('SiebelAppFacade.Postload');

    (function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
        function OnPostload( ){
            try{
				 console.log("Loaded");
                //alert("New");
				var CurrentView = SiebelApp.S_App.GetActiveView().GetName();
				if(CurrentView  == 'Account Screen Homepage View'){
				
					var button1 = document.createElement('Button');
					button1.id = 'b1'; 
					var t1 = document.createTextNode("Account");
					button1.appendChild(t1);
					$("#_analysisContainer").append(button1);
					
					var button2 = document.createElement('Button');
					button2.id = 'b2';
					var t2 = document.createTextNode("Contacts");
					button2.appendChild(t2);
					$("#_analysisContainer").append(button2); 
					
				
					var button3 = document.createElement('Button');
					button3.id = 'b3';
					var t3 = document.createTextNode("Agreement");
					button3.appendChild(t3);
					$("#_analysisContainer").append(button3); 

					var button4 = document.createElement('Button');
					button4.id = 'b4';
					var t4 = document.createTextNode("Others");
					button4.appendChild(t4);
					$("#_analysisContainer").append(button4);
					
					/*var button5 = document.createElement('Button');
					button5.id = 'b5'; 
					var t5 = document.createTextNode("Activities");
					button5.appendChild(t5);
					$("#_analysisContainer").append(button5);
					
					var button6 = document.createElement('Button');
					button6.id = 'b6'; 
					var t6 = document.createTextNode("Opportunities");
					button6.appendChild(t6);
					$("#_analysisContainer").append(button6);
					
					var button7 = document.createElement('Button');
					button7.id = 'b7'; 
					var t7 = document.createTextNode("Applications");
					button7.appendChild(t7);
					$("#_analysisContainer").append(button7);
					
					var button8 = document.createElement('Button');
					button8.id = 'b8'; 
					var t8 = document.createTextNode("Reports");
					button8.appendChild(t8);
					$("#_analysisContainer").append(button8);*/

                    var div1 = document.createElement('div');
					div1.id = 'd1';
					$("#_analysisContainer").append(div1);		
					
					button1.onclick = function(){
					SiebelApp.S_App.GotoView("Account List View");
					}
					
					button2.onclick = function(){
					SiebelApp.S_App.GotoView("Contact List View");
					} 
					
					button3.onclick = function(){
				    SiebelApp.S_App.GotoView("Agreement List View");
					} 
					
					button4.onclick = function(){
					SiebelApp.S_App.GotoView("SR List View");
					} 
					
					debugger;
					
					var home = document.getElementById("ui-id-268");
					debugger;
					home.onmouseover = function()
					{
						debugger;
						$("#ui-id-268").css("background-color", "orangered");
					}
					home.onmouseout = function()
					{
						debugger;
						$("#ui-id-268").css("background-color", "gray");
                    }
				}	
				
            }
			
            catch(error)
            {
                //No-Op
            }
        }
    }());
}
