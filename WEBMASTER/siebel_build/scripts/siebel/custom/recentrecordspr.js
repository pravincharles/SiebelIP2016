if (typeof(SiebelAppFacade.RecentRecordsPR) === "undefined") {
	
 SiebelJS.Namespace("SiebelAppFacade.RecentRecordsPR");
 define("siebel/custom/recentrecordspr", ["siebel/jqgridrenderer", "siebel/custom/timeago"],
  function () {
   SiebelAppFacade.RecentRecordsPR = (function () {
	
    function RecentRecordsPR(pm) {
     SiebelAppFacade.RecentRecordsPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(RecentRecordsPR, SiebelAppFacade.JQGridRenderer);

    RecentRecordsPR.prototype.Init = function () {
     SiebelAppFacade.RecentRecordsPR.superclass.Init.apply(this, arguments);
    // SiebelJS.Log(this.GetPM().Get("GetName")+": "+this.constructor.name+":      Init method reached.");
	 this.AttachPMBinding( "AppletLoad", ShowRecentRecords );
	 
	 $("#tb_9").click(function(){console.log("Clicked");});
    }
	
    function ShowRecentRecords( ){
		var sRecentRecordsBS = SiebelApp.S_App.GetService("WIP_Recent_Records");
		var sRecentRecordsInputPS = SiebelApp.S_App.NewPropertySet();
		var sRecentRecordsOutputPS = sRecentRecordsBS.InvokeMethod("Execute", sRecentRecordsInputPS);
		var sRecentRecordsResultSet = sRecentRecordsOutputPS.GetChildByType("ResultSet");
		if(sRecentRecordsResultSet)
		{
			 sRecordValue = sRecentRecordsResultSet.GetProperty("RecordValue");
			 sRecordTime = sRecentRecordsResultSet.GetProperty("RecordTime");
			 sRecordId = sRecentRecordsResultSet.GetProperty("RecordId");
			 sRecordType = sRecentRecordsResultSet.GetProperty("RecordType");
			
		}
		var sRecordValueArray = sRecordValue.split('<LBS>');
		sRecordValueArray.shift();
		var sRecordTimeArray = sRecordTime.split('<LBS>');
		sRecordTimeArray.shift();
		var sRecordIdArray = sRecordId.split('<LBS>');
		sRecordIdArray.shift();
		var sRecordTypeArray = sRecordType.split('<LBS>');
		sRecordTypeArray.shift();
		var sReplaceWithAppletId = this.GetPM().Get("GetFullId");

		var s1='<div id="divRecentRecords"><ul>';
		var s2="";
		for (var i = 0; i < sRecordValueArray.length; i++)
		{
			s2= s2+'<li class="recentRecord" id="recordType'+i+'"'+'><a id="'+sRecordIdArray[i]+'" class="recordValue" href="#">'+sRecordValueArray[i]+'</a><br><label class="recordType" id="recordType'+i+'Id">'+sRecordTypeArray[i].replace(/\ Home/g, '')+'</label><label class="recordTime">Accessed: '+jQuery.timeago(sRecordTimeArray[i])+'</label></li>';		
		}
		var s3='</ul> </div> <style type="text/css">#divRecentRecords{ 	overflow-y: scroll;	max-height: 80%;} .recentRecord{ list-style-type:none; padding:10px; } .recentRecord:hover{ background:#d2e9f5!important; } .recordValue{ color: #3181c5; text-decoration: none; white-space: nowrap; font-size: 17px; } .recordTime{font-size: 14px; color: grey; display: inline-block;width: 200px;} .recordType{ font-size: 14px; color: grey;display: inline-block; width: 200px;} </style>';
		var sFinal=s1+s2+s3;		
       	$("#"+sReplaceWithAppletId).replaceWith(sFinal);

	$(".recordValue").bind('click', function(e)
		{
			e.stopImmediatePropagation();
            var sAppletName = "";
		    var sViewName = "";			
            var sId = $(this).parent('.recentRecord').attr('id');
			var sBO = $('#'+sId+"Id"+'.recordType').text();
			var sRowId = $(this).attr("id");
			var oRecentRecordsBS = SiebelApp.S_App.GetService("WIP_Recent_Records");
		    var oRecentRecordsInputPS = SiebelApp.S_App.NewPropertySet();
	        oRecentRecordsInputPS.SetProperty("BO",sBO); 
			var oRecentRecordsOutputPS = oRecentRecordsBS.InvokeMethod("GetViewDetails", oRecentRecordsInputPS);
			var oRecentRecordsResultSet = oRecentRecordsOutputPS.GetChildByType("ResultSet");
			if(oRecentRecordsResultSet)
			{
			    sAppletName = oRecentRecordsResultSet.GetProperty("AppletName");
				sViewName = oRecentRecordsResultSet.GetProperty("ViewName");
		    }
			
			var oGotoViewBS = SiebelApp.S_App.GetService("FINS Goto View Service");
			var sGotoViewInputPS = SiebelApp.S_App.NewPropertySet();
			var sGotoViewOutputPS = SiebelApp.S_App.NewPropertySet();
			if(sBO == "Service Request")
			{
				var oInboundBS = SiebelApp.S_App.GetService("Inbound E-mail Database Operations");
			if (oInboundBS)
			{
				var sInboundInputPS = SiebelApp.S_App.NewPropertySet();
				var sInboundOutputPS = SiebelApp.S_App.NewPropertySet();
				sInboundInputPS.SetProperty("BusObj","Service Request");
				sInboundInputPS.SetProperty("BusComp","Service Request");
				sInboundInputPS.SetProperty("IdField","Id");
				sInboundInputPS.SetProperty("Id",sRowId);
				sInboundInputPS.SetProperty("ValueFields","WIP MPS Type");
				sInboundOutputPS = oInboundBS.InvokeMethod("GetFieldValues", sInboundInputPS);
				var sInboundResultSet = sInboundOutputPS.GetChildByType("ResultSet");
				sMPSType = sInboundResultSet.GetProperty("WIP MPS Type");
			}
			if(sMPSType == "MPS")
			{
				sAppletName = "WIP MPS Service R5 List Applet";
			    sViewName = "WIP MPS All Service Request across Organizations";
			}
			else
			{
				sAppletName = "Service Request List Applet";
				sViewName = "WIP C All Service Request across Organizations";

			}
			}
			
			if(oGotoViewBS)
			{
				sGotoViewInputPS.SetProperty("AppletName", sAppletName);
				sGotoViewInputPS.SetProperty("ViewName", sViewName);
				sGotoViewInputPS.SetProperty("RowId",sRowId);
				sGotoViewOutputPS = oGotoViewBS.InvokeMethod("GotoView", sGotoViewInputPS);
			}	
            
			
		});
	}

    return RecentRecordsPR;
   }()
  );
  return "SiebelAppFacade.RecentRecordsPR";
 })
}
