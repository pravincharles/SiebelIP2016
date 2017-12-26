/*<ORACLECOPYRIGHT>
* Copyright (C) 1994-2014
* Oracle and Java are registered trademarks of Oracle and/or its affiliates.
* Other names may be trademarks of their respective owners.
* UNIX is a registered trademark of The Open Group.
*
* This software and related documentation are provided under a license agreement
* containing restrictions on use and disclosure and are protected by intellectual property laws.
* Except as expressly permitted in your license agreement or allowed by law, you may not use, copy,
* reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish,
* or display any part, in any form, or by any means. Reverse engineering, disassembly,
* or decompilation of this software, unless required by law for interoperability, is prohibited.
*
* The information contained herein is subject to change without notice and is not warranted to be error-free.
* If you find any errors, please report them to us in writing.
*
* U.S. GOVERNMENT RIGHTS Programs, software, databases, and related documentation and technical data delivered to U.S.
* Government customers are "commercial computer software" or "commercial technical data" pursuant to the applicable
* Federal Acquisition Regulation and agency-specific supplemental regulations.
* As such, the use, duplication, disclosure, modification, and adaptation shall be subject to the restrictions and
* license terms set forth in the applicable Government contract, and, to the extent applicable by the terms of the
* Government contract, the additional rights set forth in FAR 52.227-19, Commercial Computer Software License
* (December 2007). Oracle America, Inc., 500 Oracle Parkway, Redwood City, CA 94065.
*
* This software or hardware is developed for general use in a variety of information management applications.
* It is not developed or intended for use in any inherently dangerous applications, including applications that
* may create a risk of personal injury. If you use this software or hardware in dangerous applications,
* then you shall be responsible to take all appropriate fail-safe, backup, redundancy,
* and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any
* damages caused by use of this software or hardware in dangerous applications.
*
* This software or hardware and documentation may provide access to or information on content,
* products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and
* expressly disclaim all warranties of any kind with respect to third-party content, products, and services.
* Oracle Corporation and its affiliates will not be responsible for any loss, costs,
* or damages incurred due to your access to or use of third-party content, products, or services.
</ORACLECOPYRIGHT>*/
/* 8.1.1.14SIA[23044]PATCHSET12 */
if(typeof(SiebelAppFacade.SearchAllResultsPRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.SearchAllResultsPRenderer");define("siebel/searchallresultsprenderer",["siebel/phyrenderer"],function(){SiebelAppFacade.SearchAllResultsPRenderer=(function(){var j=SiebelJS.Dependency("SiebelApp.Utils");var i=SiebelJS.Dependency("SiebelApp.Constants");var l=SiebelApp.S_App.LocaleObject;var b=0;var g=0;var h="";var k=0;var e=0;var f=0;function a(n){SiebelAppFacade.SearchAllResultsPRenderer.superclass.constructor.call(this,n);var m=n;this.GetPM=function(){return m};m.AttachPMBinding("ShowRefineResultsDialog",function(){var o=m.Get("ShowRefineResultsDialog");if(o){c.call(this,m.Get("ShowRefineKeywords"))}},{scope:this});m.AttachPMBinding("ShowTotResults",function(){var o=m.Get("ShowTotResults");if(o){d.call(this,m.Get("ShowTotalCount"))}},{scope:this})}SiebelJS.Extend(a,SiebelAppFacade.PhysicalRenderer);a.prototype.ShowUI=function(){var x=this.GetPM();var K=CCFMiscUtil_CreatePropSet();x.OnControlEvent("OnLoadGetParams",K);var U=K.GetProperty("TotalRecords");var m=K.GetProperty("SearchFor");var o=K.GetProperty("ContainsANDtext");var w=K.GetProperty("ContainsORtext");var F=K.GetProperty("ContainsEXACTtext");var p=K.GetProperty("ContainsNOTtext");h=K.GetProperty("BCType");f=U;if(m.length===0){if((o.length===0)&&(w.length===0)&&(F.length===0)&&(p.length===0)){m=l.GetLocalString("IDS_SEARCH_OUI_SRCH_EMPTY_TEXT")}else{if(o.length!==0){m=o}if(o.length!==0&&w.length!==0){m+=" | "}if(w.length!==0){m=m+w}if((o.length!==0||w.length!==0)&&F.length!==0){m+=" | "}if(F.length!==0){m=m+'("'+F+'"'}if(p.length!==0){m=m+" - "+p+")"}}}if(j.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){var S=CCFMiscUtil_CreatePropSet();var N='<span class="siebui-search-refine-newline-dialog"></span>';var Q=0;var n=x.Get("GetRecordSet");var P='<span class="siebui-search-bigitallictext-dialog">'+l.GetLocalString("IDS_SWE_JQGRID_SEARCH_CAPTION")+"</span>";var t=l.GetLocalString("RTCReplaceCount");var V=t.replace(/%1/,U);var v='<button type = "button" id= "srch-prev-button" class="siebui-search-pagination-image siebui-search-pagination-prev-image" title="'+l.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+l.GetLocalString("IDS_SWE_DATEPICKER_PREV_TEXT")+'"></button>';var R='<button type = "button" id= "srch-next-button" class="siebui-search-pagination-image siebui-search-pagination-next-image" title="'+l.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+l.GetLocalString("IDS_SWE_DATEPICKER_NEXT_TEXT")+'"></button>';var z='<span id="total-records" class="siebui-search-headingtext-dialog">'+V+"</span>";var O='<span class="siebui-search-bigitallictext-dialog">'+U+"</span>";var s='<span id="valsrchfor" class="siebui-search-bigitallictext-dialog">'+m+"</span>";var u='<span id="text-with" class="siebui-search-titletext-dialog">'+l.GetLocalString("IDS_SEARCH_OUI_FOR_TEXT")+"</span>";var q='<span id="text-quote" class="siebui-search-titletext-dialog">\'</span>';var D='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_SEARCH_OUI_SRCH_TITLE_TEXT")+"</span>";var I='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_SWE_CKEDITOR_SOURCE")+"</span>";var C='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_CALENDAR_DATE_COMBOBOX_TITLE")+"</span>";var y="<table id='table-header-search-results' width=100%><tr class=siebui-applet-buttons><td>"+z+u+q+s+q+'</td><td><button type ="button" id="srch-refine-button" class="refineappletButton" title="'+l.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+l.GetLocalString("IDS_SEARCH_OUI_FILTER_TEXT")+'">'+l.GetLocalString("IDS_SEARCH_OUI_FILTER_TEXT")+"</button></td><td>"+v+R+"</td></tr></table>";var B=y+"<div id='div-search-results' class=siebui-applet-content><table width=100%title="+l.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+l.GetLocalString("IDS_SEARCH_OUI_SRCH_RESULTS_TEXT")+"><tbody><tr><th class=siebui-search-table-h1>"+D+"</th><th class=siebui-search-table-h2>"+I+"</th><th class=siebui-search-table-h3>"+C+"</th></tr>";var T=n.length;e=T;var J="";var A=0;var M;var r;for(Q=0;Q<T;Q++){S=j.DecodeFromQueryString(n[Q]["URL"]);if(S.GetProperty("SWEView")){r=n[Q]["URL"];if(r.match("NoLink")!==null){J="SWECmd="+S.GetProperty("SWECmd")+"&SWEView="+S.GetProperty("SWEView")+"&SWEPostnApplet="+S.GetProperty("SWEApplet0")+"&SWEPostnRowId="+S.GetProperty("SWERowId0")+"&SWEKeepContext=0"}else{J="SWECmd="+S.GetProperty("SWECmd")+"&SWEView="+S.GetProperty("SWEView")+"&SWEApplet0="+S.GetProperty("SWEApplet0")+"&SWERowId0="+S.GetProperty("SWERowId0")+"&SWEKeepContext=0"}M='<a href="javascript:void(0)"id="URL'+Q+'"value ="'+J+'">'+n[Q]["Title"]+"</a>"}else{J=n[Q]["URL"];M="<a href="+J+' target = _blank value ="'+J+'">'+n[Q]["Title"]+"</a>"}var L="<tr class=siebui-row-first siebui-row-odd>";var E="<tr class=siebui-row-odd>";var H="<tr class=siebui-row-even>";var G="<td class=siebui-search-col1><p><span class=siebui-search-highlight>"+M+"</span></p><span class=siebui-search-subtext>"+n[Q]["Summary"]+"</span></td><td class=siebui-search-col2>"+n[Q]["DataSource"]+"</td><td class=siebui-search-col3>"+n[Q]["Date"]+"</td></tr>";if(Q===0){B+=L+G}else{if(Q%2===0){B+=H+G}else{B+=E+G}}}B+="</tbody></table></div>";$("#srchrefine").append(B).trigger("create")}};a.prototype.BindEvents=function(r){var p=this.GetPM();switch(r){case"RefineKeyword":var n=0;for(n=0;n<k;n++){var m="button-keyword"+n;$(document).undelegate("#"+m+"","click").delegate("#"+m+"","click",{ctx:this},function(u){var x=u.currentTarget.value;var v="TRUE";var w=[];var t=$("#"+m+"").val();p.SetProperty("Freetext",x);p.SetProperty("BCType",h);p.OnControlEvent("OnExecuteRefineSearch");$("#Refine_Search_Dialog").dialog("close").remove()})}break;case"drilldown":var o=0;for(o=0;o<e;o++){var q="URL"+o;var s;$("#"+q+"").bind("click",{ctx:this},function(t){s=t.currentTarget.getAttribute("value");SiebelApp.S_App.GotoView("","",s,"")})}break;default:$("#srch-refine-button").bind("click",{ctx:this},function(t){p.SetProperty("SubOperation","GetKeywords");p.OnControlEvent("OnExecuteRefineResults")});$("#srch-next-button").bind("click",{ctx:this},function(t){p.SetProperty("BCType",h);p.OnControlEvent("OnExecuteNextRecordSet")});$("#srch-prev-button").bind("click",{ctx:this},function(t){p.SetProperty("BCType",h);p.OnControlEvent("OnExecutePrevRecordSet")});var o=0;for(o=0;o<e;o++){var q="URL"+o;var s;$("#"+q+"").bind("click",{ctx:this},function(t){s=t.currentTarget.getAttribute("value");SiebelApp.S_App.GotoView("","",s,"")})}break}};a.prototype.BindData=function(C){if(C){var H=this.GetPM();var E=0;var O=f;var z=H.Get("GetRecordSet");if(z.length){var L=H.Get("GetRecordSet")[0]["Search for"]}$("#valsrchfor").remove();$("#div-search-results").remove();var q='<span class="siebui-search-refine-newline-dialog"></span>';var m='<span class="siebui-search-bigitallictext-dialog">'+l.GetLocalString("IDS_SWE_JQGRID_SEARCH_CAPTION")+"</span>";var w=l.GetLocalString("RTCReplaceCount");var A=w.replace(/%1/,O);
var o='<button type = "button" id= "srch-prev-button" class="appletButton"><img src="images/arrowRight.png" alt="PREV" height="15" width="15"/></button>';var v='<button type = "button" id= "srch-next-button" class="appletButton"><img src="images/arrowLeft.png" alt="NEXT" height="15" width="15"/></button>';var Q='<span id="total-records" class="siebui-search-bigitallictext-dialog">'+w+"</span>";var M='<span class="siebui-search-bigitallictext-dialog">'+A+"</span>";var B='<span id="valsrchfor" class="siebui-search-bigitallictext-dialog">'+L+"</span>";var P='<span id="text-with" class="siebui-search-titletext-dialog">'+l.GetLocalString("IDS_SEARCH_OUI_FOR_TEXT")+"</span>";var y='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_SEARCH_OUI_SRCH_TITLE_TEXT")+"</span>";var r='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_SWE_CKEDITOR_SOURCE")+"</span>";var D='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_CALENDAR_DATE_COMBOBOX_TITLE")+"</span>";var u=B;$(u).insertAfter("#text-with");var K="<div id='div-search-results' class=siebui-applet-content><table width=100%title="+l.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+l.GetLocalString("IDS_SEARCH_OUI_SRCH_RESULTS_TEXT")+"><tbody><tr><th class=siebui-search-table-h1>"+y+"</th><th class=siebui-search-table-h2>"+r+"</th><th class=siebui-search-table-h3>"+D+"</th></tr>";var G=z.length;var t=CCFMiscUtil_CreatePropSet();var n;var N;for(E=0;E<G;E++){var J="";var x=0;t=j.DecodeFromQueryString(z[E]["URL"]);if(t.GetProperty("SWEView")){N=z[E]["URL"];if(N.match("NoLink")!==null){J="SWECmd="+t.GetProperty("SWECmd")+"&SWEView="+t.GetProperty("SWEView")+"&SWEPostnApplet="+t.GetProperty("SWEApplet0")+"&SWEPostnRowId="+t.GetProperty("SWERowId0")+"&SWEKeepContext=0"}else{J="SWECmd="+t.GetProperty("SWECmd")+"&SWEView="+t.GetProperty("SWEView")+"&SWEApplet0="+t.GetProperty("SWEApplet0")+"&SWERowId0="+t.GetProperty("SWERowId0")+"&SWEKeepContext=0"}n='<a href="javascript:void(0)"id="URL'+E+'"value ="'+J+'">'+z[E]["Title"]+"</a>"}else{J=z[E]["URL"];n="<a href="+J+' target = _blank value ="'+J+'">'+z[E]["Title"]+"</a>"}var s="<tr class=siebui-row-first siebui-row-odd>";var I="<tr class=siebui-row-odd>";var F="<tr class=siebui-row-even>";var p="<td class=siebui-search-col1><p><span class=siebui-search-highlight>"+n+"</span></p><span class=siebui-search-subtext>"+z[E]["Summary"]+"</span></td><td class=siebui-search-col2>"+z[E]["DataSource"]+"</td><td class=siebui-search-col3>"+z[E]["Date"]+"</td></tr>";if(E===0){K+=s+p}else{if(E%2===0){K+=F+p}else{K+=I+p}}}K+="</tbody></table></div>";$(K).insertAfter("#table-header-search-results").trigger("create")}this.BindEvents("drilldown")};a.prototype.ShowSearchResultsDialog=function(q){var w="";var v='<button type = "button" id= "srch-showall-button" class="appletButton">Show All</button>';$("srch-button").append(v).trigger("create");var r='<span class="siebui-search-refine-newline-dialog"> </span>';$("srch-showall-button").append(r).trigger("create");var o=CCFMiscUtil_CreatePropSet();var t='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_SWE_CKEDITOR_NAME")+"</span>";var s='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_SWE_CKEDITOR_SOURCE")+"</span>";var x='<span class="siebui-search-bigheadingtext-dialog">'+l.GetLocalString("IDS_CALENDAR_DATE_COMBOBOX_TITLE")+"</span>";var p='<span class="siebui-search-bigheadingtext-dialog">----------------------------------------------------------------------------------------</span>';var C='<span class="siebui-search-bigheadingtext-dialog">-------------</span>';var m='<span class="siebui-search-bigheadingtext-dialog">------</span>';shtml="<table><tr><td>"+t+"</td><td>"+s+"</td><td>"+x+"</td></tr><tr><td>"+p+"</td><td>"+C+"</td><td>"+m+"</td></tr>";var y=5;var z=0;if(q.GetChildCount()<y){y=q.GetChildCount()}for(z=0;z<y;z++){o=q.GetChild(z);var n='<span class="siebui-search-bigtext-dialog">'+o.GetProperty("Title")+"</span>";var u='<span class="siebui-search-itallictext-dialog">'+o.GetProperty("Summary")+"</span>";shtml+="<tr><td>"+n+"</td><td>"+o.GetProperty("DataSource")+"</td><td>"+o.GetProperty("Date")+"</td></tr><tr><td>"+u+"</td></tr>"}shtml+="</table>"+r+v;var D=navigator.userAgent.toString().toLowerCase();var A=(D.indexOf("msie")!=-1);w=l.GetLocalString("IDS_SWE_SEARCH_WATER_MARK");var E='<span class="siebui-search-titletext-dialog">'+w+"</span>";if(A){var B=$('<div id="Srch_Dialog" class="siebui-search-dialog" ></div>').html(shtml).dialog({autoOpen:false,title:E,position:["center",80],height:800,width:500,modal:false,cleanOnClose:true,resizable:false,open:function(F,G){}})}else{var B=$('<div id="Srch_Dialog" class="siebui-search-dialog" ></div>').html(shtml).dialog({autoOpen:false,title:E,position:["center",80],height:800,width:500,modal:false,cleanOnClose:true,resizable:false,show:{effect:"drop",direction:"up",duration:1000},hide:{effect:"drop",direction:"up",duration:1000},open:function(F,G){}})}B.dialog("open")};function c(t){var p="";var s=0;var q="<table id='table-refine'>";k=t.length;for(s=0;s<k;s++){var o='<span class="siebui-search-itallictext-dialog" id="refine-keyword" value="'+t[s]+'">'+t[s]+"</span>";var r='<button type="button" class="appletButton" id="button-keyword'+s+'" value="'+t[s]+'">'+o+"</button>";q+="<tr><td>"+r+"</td></tr>"}q+="</table>";var v=navigator.userAgent.toString().toLowerCase();var u=(v.indexOf("msie")!=-1);p=l.GetLocalString("IDS_SEARCH_OUI_FILTER_TEXT");var m='<span class="siebui-search-titletext-dialog">'+p+"</span>";if(u){var n=$('<div id="Refine_Search_Dialog" class="siebui-search-dialog" title="'+l.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+l.GetLocalString("IDS_SEARCH_OUI_FILTER_TEXT")+'"></div>').html(q).dialog({autoOpen:false,title:p,position:["right",50],height:500,width:400,modal:false,cleanOnClose:true,resizable:false,open:function(w,x){}})}else{var n=$('<div id="Refine_Search_Dialog" class="siebui-search-dialog" title=" + localeObj.GetLocalString("IDS_SWE_SEARCH_WATER_MARK") + " " + localeObj.GetLocalString("IDS_SEARCH_OUI_FILTER_TEXT") + "></div>').html(q).dialog({autoOpen:false,title:p,position:["right",50],height:500,width:400,modal:false,cleanOnClose:true,resizable:false,show:{effect:"drop",direction:"up",duration:1000},hide:{effect:"drop",direction:"up",duration:1000},open:function(w,x){}})}n.dialog("open");this.BindEvents("RefineKeyword");this.GetPM().SetProperty("ShowRefineResultsDialog",false)}function d(n){f=n;$("#total-records").remove();var p=l.GetLocalString("RTCReplaceCount");var o=p.replace(/%1/,f);var m='<span id="total-records" class="siebui-search-titletext-dialog">'+o+" </span>";$(m).insertBefore("#text-with").trigger("create");this.GetPM().SetProperty("ShowTotResults",false)}return a}());return"SiebelAppFacade.SearchAllResultsPRenderer"})};