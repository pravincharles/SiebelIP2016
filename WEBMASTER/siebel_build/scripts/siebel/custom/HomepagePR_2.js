if (typeof(SiebelAppFacade.HomepagePR_2) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.HomepagePR_2");
 define("siebel/custom/HomepagePR_2", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.HomepagePR_2 = (function () {

    function HomepagePR_2(pm) {
     SiebelAppFacade.HomepagePR_2.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(HomepagePR_2, SiebelAppFacade.ViewPR);

    HomepagePR_2.prototype.Init = function () {
     $( '#_swescrnbar' ).css("display", "none");
	$('div#windarrowdiv').remove();
	 $( '#_swecontent' ).css("display", "none");
	 var mainDiv = '<div id="Title"><p>Views/Screens</p><div id="rectangle1"><p>Home</p></div><div id="rectangle2"><p>Opportunities</p></div><div id="rectangle3"><p>Accounts</p></div><div id="rectangle4"><p>Quotes</p></div><div id="rectangle5"><p>Sales Orders</p></div><div id="rectangle6"><p>Service</p></div><div id="rectangle7"><p>Contacts</p></div><div id="rectangle8"><p>Vehicles</p></div><div id="rectangle9"><p>Calendar</p></div><div id="rectangle10"><p>Administration-Product</p></div><div id="rectangle11"><p>Warranty Claims</p></div><div id="rectangle12"><p>User Preferences</p></div><div id = "arrow"></div></div>';
	 $("#_swescrnbar").before(mainDiv);
$("#rectangle1").click(function(){SiebelApp.S_App.GotoView("Home Page View (WCC)");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle2").click(function(){SiebelApp.S_App.GotoView("Opportunity Screen Homepage View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});	 
$("#rectangle3").click(function(){SiebelApp.S_App.GotoView("Account Screen Homepage View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle4").click(function(){SiebelApp.S_App.GotoView("Quote Screen Homepage View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle5").click(function(){SiebelApp.S_App.GotoView("Sales Orders Screen Homepage View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle6").click(function(){SiebelApp.S_App.GotoView("Service Request Screen Homepage View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle7").click(function(){SiebelApp.S_App.GotoView("Contact Screen Homepage View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle8").click(function(){SiebelApp.S_App.GotoView("eAuto My Vehicle View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle9").click(function(){SiebelApp.S_App.GotoView("LS Pharma Contact Call Planning View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle10").click(function(){SiebelApp.S_App.GotoView("ISS Product Administration View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle11").click(function(){SiebelApp.S_App.GotoView("eAuto WMS Warranty Claim Screen Homepage View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});
$("#rectangle12").click(function(){SiebelApp.S_App.GotoView("User Profile Default View");$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});

/* $(".ui-menu-item").click(function(){$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();}); */

$("#ui-id-43").click(function(){$( '#_swescrnbar' ).css("display", "block");$( '#_swecontent' ).css("display", "block");$("#Title").remove();});



	$("#arrow").click(function(){
	console.log("over me");
	$("#ui-id-43").trigger( "click");
	$( '#_swescrnbar' ).css("display", "block");
	$( '#_swecontent' ).css("display", "block");
	$("#Title").remove();
	});
	 // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.HomepagePR_2.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }
    return HomepagePR_2;
   }()
  );
  return "SiebelAppFacade.HomepagePR_2";
 })
}