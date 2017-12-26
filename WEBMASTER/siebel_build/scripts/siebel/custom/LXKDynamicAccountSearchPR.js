/*
This rendender does a Account Search via a Business Service, Service is a external service to Siebel,
Change log

12/12/2017 --> InlineCSS Class Changes

*/

if (typeof(SiebelAppFacade.LXKDynamicAccountSearchPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.LXKDynamicAccountSearchPR");
 define("siebel/custom/LXKDynamicAccountSearchPR", ["siebel/jqgridrenderer"],
  function () {
   SiebelAppFacade.LXKDynamicAccountSearchPR = (function () {

    function LXKDynamicAccountSearchPR(pm) {
     SiebelAppFacade.LXKDynamicAccountSearchPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(LXKDynamicAccountSearchPR, SiebelAppFacade.JQGridRenderer);

    LXKDynamicAccountSearchPR.prototype.Init = function () {
    SiebelAppFacade.LXKDynamicAccountSearchPR.superclass.Init.apply(this, arguments);
    
    }

    LXKDynamicAccountSearchPR.prototype.ShowUI = function () {
    SiebelAppFacade.LXKDynamicAccountSearchPR.superclass.ShowUI.apply(this, arguments);
	
	$(".siebui-btn-grp-search button[title='Accounts:Go']").after('<input type="text" id="DynamicSearch" class="siebui-ctrl-input siebui-align-left siebui-input-align-left style="height: 20px; width: 175px;" tabindex="0" maxlength="32" tabindex="0" class="DynamicSearch" aria-readonly="false" placeholder="Account Name Search">');
    }

    LXKDynamicAccountSearchPR.prototype.BindData = function (bRefresh) {
    SiebelAppFacade.LXKDynamicAccountSearchPR.superclass.BindData.apply(this, arguments);
	if($(".DynamicAccounts").length == 0)
	{
		$("#DynamicSearch").parent().addClass("DynamicAccounts");
		
		var oInboundBS = SiebelApp.S_App.GetService("LXK Dynamic Account Search BS");
		if (oInboundBS) {
			var sInboundInputPS = SiebelApp.S_App.NewPropertySet();
			var sInboundOutputPS = SiebelApp.S_App.NewPropertySet();
			sInboundOutputPS = oInboundBS.InvokeMethod("Query", sInboundInputPS);
			var sInboundResultSet = sInboundOutputPS.GetChildByType("ResultSet");
			var sSHIURL = sInboundResultSet.GetProperty("AccountName");
		}
		var AccountName = sSHIURL.split('<B>');

		$("#DynamicSearch").autocomplete({
			source: AccountName,
			select: function (a, b) {
			var oInboundBS1 = SiebelApp.S_App.GetService("LXK Dynamic Account Search BS");
			if (oInboundBS1) {
			var sQuote = "\"";
			var sAccountName = sQuote+b.item.value+sQuote;
			//console.log("sAccountName=",sAccountName);
			var sInboundInputPS1 = SiebelApp.S_App.NewPropertySet();
			var sInboundOutputPS1 = SiebelApp.S_App.NewPropertySet();
			sInboundInputPS1.SetProperty("SelectedAccName", sAccountName);
			sInboundOutputPS1 = oInboundBS1.InvokeMethod("QueryRecord", sInboundInputPS1);
			}
			}
		});	
	}
	$("#DynamicSearch").click(function() {
		$("input#DynamicSearch").val("");
	});
    }

    LXKDynamicAccountSearchPR.prototype.BindEvents = function () {
    SiebelAppFacade.LXKDynamicAccountSearchPR.superclass.BindEvents.apply(this, arguments);
    
    }

    LXKDynamicAccountSearchPR.prototype.EndLife = function () {
     SiebelAppFacade.LXKDynamicAccountSearchPR.superclass.EndLife.apply(this, arguments);
	$("#DynamicSearch").parent().removeClass("DynamicAccounts");
    }

    return LXKDynamicAccountSearchPR;
   }()
  );
  return "SiebelAppFacade.LXKDynamicAccountSearchPR";
 })
}
