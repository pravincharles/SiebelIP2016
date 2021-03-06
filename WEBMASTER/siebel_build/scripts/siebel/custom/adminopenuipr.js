if( typeof ( SiebelAppFacade.AdminOpenUIPR ) === "undefined" ) {

  SiebelJS.Namespace( 'SiebelAppFacade.AdminOpenUIPR' );

  define( "siebel/custom/adminopenuipr", ["siebel/viewpr","siebel/custom/datatables.min"], function(){
      SiebelAppFacade.AdminOpenUIPR = ( function(){
          function AdminOpenUIPR(){
              SiebelAppFacade.ViewPR.superclass.constructor.apply(this,arguments);
          }

          SiebelJS.Extend(AdminOpenUIPR,SiebelAppFacade.ViewPR);
         	  
		  AdminOpenUIPR.prototype.BindEvents = function() {
			   
			   var customdiv = '<link rel="stylesheet" type="text/css" title="compact" href="FILES/custom/datatables.min.css"><div class="siebui-applet" id="customApplet"><div class="siebui-applet-header" style="border-bottom:1px solid #DDD;"><div class="siebui-applet-title">OpenUI Administration</div><div class="siebui-btn-grp-applet"><button id="saveRowbtn">Create Manifest</button><button id="updateRowbtn" >Update Manifest</button></div></div><div style="padding: 10px 5px 2px 10px;">Please Select the .csv file and Click on Proceed to Upload the data.<input type="file" style="margin-left: 10px;" id="input" name="file" /><button id="Uploadbtn">Proceed</button></div><input style="margin: 10px;" type="text" id="search" placeholder="Type to search"><table id="jqGrid" class="gridtable" ><tbody></tbody></table></div><div id="jqGridPager"></div>';
			  //$("#s_1_1_0_0_Ctrl").after('<button type="button" id="OpenUIPop">AdminOpenUI!</button>');
			  var sReplaceId=SiebelApp.S_App.GetActiveView().GetApplet("UI Object List Applet").GetFullId();
			  $("#"+sReplaceId).before(customdiv);
			  $("#customApplet").css({"box-shadow": "0px 0px 4px 0px #1474BF"});
			  $("#customApplet button").css({"background-color": "#385427","cursor":"pointer", "color":"white", "border-color":"#385427", "margin-left":"10px"});
			  $("#search").hide();			  
			  //$("#OpenUIPop").bind('click', function(e)
			  var html="";
			  var HeaderCheck = "N";
			  var TempPath = GetLOVPaths("ADMIN_OPENUI","TEMP_PATH");
			  var scriptPath = GetLOVPaths("ADMIN_OPENUI","SCRIPT_PATH");
			  var FilesPath = GetLOVPaths("ADMIN_OPENUI","FILES_PATH");
			  $.get("FILES/custom/AdminOpenUIData.txt", function(data) 
			  {				  
				  html= data;
				  html='<tbody>"'+html+'"</tbody>';
				  $('#jqGrid tbody').replaceWith(html);
				  $("#jqGrid").show();
				  $("#search").show();
				  HeaderCheck="Y";
			  });
			  $("#Uploadbtn").bind('click', function(e)
			  {
						$.get("FILES/custom/AdminOpenUIData.txt", function(data) 
						{
							  html= data;
							  HeaderCheck="Y";	
						});
						var file = document.getElementById('input').files[0];
						var csvfilename = file.name;
						$("#input").val("");
						CreateFile(file);
						console.log("Buttonclick");
						var url = "FILES/custom/"+csvfilename;
						$.get(url, function(data) 
						{
							var rows = data.split("\n");
							var rowlength = rows.length;
							if(HeaderCheck==="Y" && rowlength >0 )
							{
								rows.shift();// to delete the header Row
							}
							rows.pop();			// to delete the Undefined footer row.		
							var rowCount = 0;
							if(HeaderCheck==="Y" && rowlength >0 )
							{
								rowCount = Number($('#jqGrid tr:last').attr('id'));
								rowCount = rowCount + 1;
								
							}	
							else
							{					
								rowCount = rowCount + 1;
							}
							rows.forEach( function getvalues(ourrow) 
							{
								html += '<tr id="'+rowCount+'">';	
								var columns = ourrow.split(",");
								if(HeaderCheck==="N")
								{
									HeaderCheck = "Y";
									html += "<th>" + columns[0] + "</th>";
									html += "<th>" + columns[1] + "</th>";
									html += "<th>" + columns[2] + "</th>";
									html += "<th>" + columns[3] + "</th>";
									html += "<th>Active</th>";
									html += "<th>File Name</th>";
									html += "<th>Files</th>";
									html += "<th>Comments</th>";
									html += "</tr>";
								}
								else if(HeaderCheck==="Y")
								{	
									html += "<td name='featureName' contenteditable='true'>" + columns[0] + "</td>";																	
									html += "<td name='objectName' contenteditable='true'>" + columns[1] + "</td>";
									if(columns[2] === "View")
									{
										html += "<td name='objectInstanceType' contenteditable='true'><select><option>Application</option><option selected='true'>View</option><option>Applet</option></select></td>";
									}	
									else if (columns[2] === "Applet")
									{
										html += "<td name='objectInstanceType' contenteditable='true'><select><option>Application</option><option selected='true'>View</option><option  selected='true'>Applet</option></select></td>";
									}
									else
									{
										html += "<td name='objectInstanceType' contenteditable='true'><select><option selected='true'>Application</option><option>View</option><option>Applet</option></select></td>";
									}
									//html += "<td name='objectType' contenteditable='true'>" + columns[2] + "</td>";
									var tempcolumn = columns[3];
									//tempcolumn = tempcolumn.slice(0, -1);
									if(tempcolumn == "Physical Renderer")
									{
										html += "<td name='objectInstanceType' contenteditable='true'><select><option>Theme</option><option>Presentation Model</option><option selected='true'>Physical Renderer</option></select></td>";
									}	
									else if (tempcolumn == "Presentation Model")
									{
										html += "<td name='objectInstanceType' contenteditable='true'><select><option>Theme</option><option selected='true'>Presentation Model</option><option>Physical Renderer</option></select></td>";
									}
									else
									{
										html += "<td name='objectInstanceType' contenteditable='true'><select><option selected='true'>Theme</option><option>Presentation Model</option><option>Physical Renderer</option></select></td>";
									}	
									//html += "<td name='objectInstanceType' contenteditable='true'>" + tempcolumn + "</td>";
									//html += "<td name='activeFlg' contenteditable='true'>" + columns[5] + "</td>";
									html += "<td name='activeFlg' ><input type='checkbox'/></td>";
									html += "<td name='fileName'></td>";
									html += '<td name="sourcePath"><input type="file" id="input'+rowCount+'" name="file" onchange="validateFile()"/></td>';
									html += '<td name="Comments" contenteditable="true"><textarea>'+ columns[4] + '</textarea></td>';
									html += "</tr>";
								}
								rowCount=rowCount+1;
							});
							html='<tbody>"'+html+'"</tbody>';
							$('#jqGrid tbody').replaceWith(html);
							$("#search").show();
						});
				
				});
			   $("#jqGrid").on("change", "input:file", function(e) 
			   {
				   var fileext =$(this).val().split('.').pop();
				   if(fileext !== "csv" && fileext !=="css" && fileext !== "js")
					{
						alert("Not a Valid Format. Only .csv,.css,.js files are allowed");
						$(this).val("");
						e.stopImmediatePropagation();
					}
			   });
			   
			   $('#search').keyup(function() {
					var $rows = $('#jqGrid tr').filter(":not(#1)");
					var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
					
					$rows.show().filter(function() {
						var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
						return !~text.indexOf(val);
					}).hide();
				});
			  $("#jqGrid").on("click", "td", function(e) 
			  {
				  $('.highlightrow').removeClass();
				  $(this).closest("tr").addClass("highlightrow");
				  var sFileNameBtn = $(this).closest("tr").find("td").eq(5).html();
				  if (sFileNameBtn === "")
				  {
					 $("#saveRowbtn").prop("disabled",false);
					 $("#saveRowbtn").css({"background-color": "#385427","cursor":"pointer", "color":"white", "border-color":"#385427","pointer-events":"initial"});
					 $("#updateRowbtn").prop("disabled",true);
					 $("#updateRowbtn").css({"background-color": "#DDD", "color":"#404453", "border-color":"#DDD", "pointer-events":"none"});
				  }
				  else
				  {
					 $("#saveRowbtn").prop("disabled",true);
					 $("#updateRowbtn").prop("disabled",false);
					 $("#updateRowbtn").css({"background-color": "#385427","cursor":"pointer", "color":"white", "border-color":"#385427","pointer-events":"initial"});
					 $("#saveRowbtn").css({"background-color": "#DDD", "color":"#404453", "border-color":"#DDD", "pointer-events":"none"});
				  }	  
				  
			  });
			  $("#saveRowbtn").bind('click', function(e)
			  {
				  $('.highlightrow').each(function() 
				  {	
					  var rowId=$(this).attr('id');
					  var fileCtrlId = "input"+rowId;
					  var oFile =	document.getElementById(fileCtrlId).files[0];
					  $("#"+fileCtrlId).val("");
					  CreateFile(oFile);
					  var fileName = oFile.name;
					  var ext = fileName.split('.').pop();
					  var sObjectName = $(this).find("td").eq(1).html();
					  var sObjectType = $(this).find("td").eq(2).find("select").val();
					  var sObjectInstanceType = $(this).find("td").eq(3).find("select").val();
					  //var sObjectInstanceType = "Physical Renderer";
					  if(ext==="js")
					  {
						  var sFileName = "siebel/custom/"+fileName;
					  }
					  else
					  {
						  var sFileName = "files/custom/"+fileName;
					  }	  
					  
					  var oWFBS = SiebelApp.S_App.GetService("Workflow Process Manager");
					  var sInputPS = SiebelApp.S_App.NewPropertySet();
					  var sOutputPS = SiebelApp.S_App.NewPropertySet();
					  if(oWFBS)
						{
							sInputPS.SetProperty("ProcessName","Manifest Records Creation");
							sInputPS.SetProperty("UIObjectName",sObjectName);
							sInputPS.SetProperty("UIObjectType",sObjectType);
							sInputPS.SetProperty("ActiveFlg","N");
							sInputPS.SetProperty("UIObjectInstanceType",sObjectInstanceType);
							sInputPS.SetProperty("UIFileName",sFileName);
							sOutputPS = oWFBS.InvokeMethod("RunProcess", sInputPS);
							var sResultSet=sOutputPS.GetChildByType("ResultSet");
							if(sResultSet)
							{
								var sError= sResultSet.GetProperty("ErrorOccured");
								var sErrorMsg= sResultSet.GetProperty("Error Message");
							}
						}
					if(sError==="Y")
				    {
						alert(sErrorMsg);
						e.stopImmediatePropagation();
					}		
					else
					{   $(this).find("td").eq(4).find("input").attr("checked","true");
						$(this).find("td").eq(5).html(sFileName);
						html = $('#jqGrid tbody').html();
						saveHtml(html,TempPath+"AdminOpenUIData.txt",FilesPath+"AdminOpenUIData.txt");
						alert("Manifest Creation: Success");
					}	
				  });				  
			  });
			  $("#updateRowbtn").bind('click', function(e)
			  {
				  $('.highlightrow').each(function() 
				  {	
					  var rowId=$(this).attr('id');
					  var sObjectName = $(this).find("td").eq(1).html();
					  var sObjectType = $(this).find("td").eq(2).find("select").val();
					  var sFileName = $(this).find("td").eq(5).html();
					  var sObjectInstanceType = $(this).find("td").eq(3).find("select").val();
					  var sActive = $(this).find("td").eq(4).find("input[type='checkbox']").is(":checked");
					  var sInActive ="";
					  if(sActive=== true)
					  {
						  sInActive = "N";
					  }
					  else
					  {
						  sInActive = "Y";
					  }	  
					  //var sObjectInstanceType = "Physical Renderer";
			  
					  var oWFBS = SiebelApp.S_App.GetService("Workflow Process Manager");
					  var sInputPS = SiebelApp.S_App.NewPropertySet();
					  var sOutputPS = SiebelApp.S_App.NewPropertySet();
					  if(oWFBS)
						{
							sInputPS.SetProperty("ProcessName","Manifest Records Creation");
							sInputPS.SetProperty("UIObjectName",sObjectName);
							sInputPS.SetProperty("ActiveFlg",sInActive);
							sInputPS.SetProperty("UpdateProcess","Y");
							sInputPS.SetProperty("UIObjectType",sObjectType);
							sInputPS.SetProperty("UIObjectInstanceType",sObjectInstanceType);
							sInputPS.SetProperty("UIFileName",sFileName);
							sOutputPS = oWFBS.InvokeMethod("RunProcess", sInputPS);
							var sResultSet=sOutputPS.GetChildByType("ResultSet");
							if(sResultSet)
							{
								var sError= sResultSet.GetProperty("ErrorOccured");
								var sErrorMsg= sResultSet.GetProperty("Error Message");
							}
						}
					if(sError==="Y")
				    {
						alert(sErrorMsg);
						e.stopImmediatePropagation();
					}		
					else
					{  
						$(this).find("td").eq(4).find("input").attr("checked",sActive);
						$(this).find("td").eq(5).html(sFileName);
						html = $('#jqGrid tbody').html();
						saveHtml(html,TempPath+"AdminOpenUIData.txt",FilesPath+"AdminOpenUIData.txt");
						alert("Manifest Updation: Success");
					}	
				  });
			  });
			  
		
			  function CreateFile(File)
			  {
				var fileName = File.name;
				var ext = fileName.split('.').pop();
				
				var filePath = TempPath+fileName;
				if(ext === "js")
				{
					var destnFilePath = scriptPath+fileName;
				}
				else if (ext === "css" || ext === "csv")
				{
					var destnFilePath = FilesPath+fileName;
				}
				else
				{
					alert("Not a Valid Format. Only .csv,.css,.js files are allowed");
				}
				var fileReader = new FileReader();
				fileReader.onload = function(e) 
				{
					console.log(e.target.result);
					var oWFBS = SiebelApp.S_App.GetService("Workflow Process Manager");
					var sInputPS = SiebelApp.S_App.NewPropertySet();
					var sOutputPS = SiebelApp.S_App.NewPropertySet();
					if(oWFBS)
					{
						sInputPS.SetProperty("ProcessName","Transport File");
						sInputPS.SetProperty("InputContent",e.target.result);
						sInputPS.SetProperty("DestinationDirectory",destnFilePath);
						sInputPS.SetProperty("OutPutFileName",filePath);
						//sInputPS.SetProperty("UIObjectInstanceType",sObjectInstanceType);
						//sInputPS.SetProperty("UIFileName",sFileName);
						sOutputPS = oWFBS.InvokeMethod("RunProcess", sInputPS);
					}
				}
				fileReader.readAsText(File);
			}
			function saveHtml(Content,FilePath,Destination)
			{
				var oWFBS = SiebelApp.S_App.GetService("Workflow Process Manager");
				var sInputPS = SiebelApp.S_App.NewPropertySet();
				var sOutputPS = SiebelApp.S_App.NewPropertySet();
				if(oWFBS)
				{
					sInputPS.SetProperty("ProcessName","Transport File");
					sInputPS.SetProperty("InputContent",Content);
					sInputPS.SetProperty("DestinationDirectory",Destination);
					sInputPS.SetProperty("OutPutFileName",FilePath);
					//sInputPS.SetProperty("UIObjectInstanceType",sObjectInstanceType);
					//sInputPS.SetProperty("UIFileName",sFileName);
					sOutputPS = oWFBS.InvokeMethod("RunProcess", sInputPS);
				}
			} 
			function GetLOVPaths(Type,Value)
			{
				var oINBS = SiebelApp.S_App.GetService("Inbound E-mail Database Operations");
				var sInputPS = SiebelApp.S_App.NewPropertySet();
				var sOutputPS = SiebelApp.S_App.NewPropertySet();
				if(oINBS)
				{
					sInputPS.SetProperty("BusObj","List Of Values");
					sInputPS.SetProperty("BusComp","List Of Values");
					sInputPS.SetProperty("QueryFields","Type,Value");
					sInputPS.SetProperty("ValueFields","Description");
					sInputPS.SetProperty("Type",Type);
					sInputPS.SetProperty("Value",Value);
					//sInputPS.SetProperty("UIObjectInstanceType",sObjectInstanceType);
					//sInputPS.SetProperty("UIFileName",sFileName);
					sOutputPS = oINBS.InvokeMethod("FindRecord", sInputPS);
					var sResultSet=sOutputPS.GetChildByType("ResultSet");
					if(sResultSet)
					{
						var sDescription= sResultSet.GetProperty("Description");
					}
				}
			return(sDescription);
			}
			 
		  };

          AdminOpenUIPR.prototype.Setup = function () {
			  
		  };
          AdminOpenUIPR.prototype.SetRenderer = function () {
			  
		  };

          return AdminOpenUIPR;
      } () );
      return SiebelAppFacade.AdminOpenUIPR;
  });
}