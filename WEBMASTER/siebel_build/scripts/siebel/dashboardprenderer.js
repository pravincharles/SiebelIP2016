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
/* 8.1.1.14SIA[23044]PATCHSET13 */
if(typeof(SiebelAppFacade.DashboardPR)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.DashboardPR");define("siebel/dashboardprenderer",["siebel/basephyrenderer"],function(){SiebelAppFacade.DashboardPR=(function(){var o=SiebelJS.Dependency("SiebelApp.Constants");var u=SiebelJS.Dependency("SiebelApp.Utils");var q=SiebelJS.Dependency("SiebelApp.S_App.LocaleObject");var g=CCFMiscUtil_CreatePropSet();function t(B){SiebelAppFacade.DashboardPR.superclass.constructor.call(this,B)}SiebelJS.Extend(t,SiebelAppFacade.BasePR);t.prototype.Init=function(){SiebelAppFacade.DashboardPR.superclass.Init.call(this);this.AttachPMBinding("UIControlInfo",z,{scope:this});this.AttachPMBinding("QuickNavigateList",i,{scope:this});this.AttachPMBinding("UpdatedCtrlData",m,{scope:this});this.AttachPMBinding("UICustomerControlInfo",a,{scope:this})};t.prototype.ShowUI=function(){SiebelAppFacade.DashboardPR.superclass.ShowUI.call(this);var P=$("#CommunicationPanelContainer #Dashboard");var U=null;var D=null;var Q=null;var B="";var C="";if(P.length>0){P.addClass("siebui-dashboard-frame");U=P.find("#commPanelDashboardToggle");if(U.length>0){Q=U.find("#commPanelDashboardToShowMore");D=U.find("#commPanelDashboardToShowLess");if(Q.length>0){B=q.GetLocalString("IDS_COMM_PANEL_TOGGLE_SHOW_MORE");Q.parent("div").attr("title",B);Q.attr("aria-label",B)}if(D.length>0){C=q.GetLocalString("IDS_COMM_PANEL_TOGGLE_SHOW_LESS");D.parent("div").attr("title",C);D.attr("aria-label",C)}}}var I=$("div[id^='s_Dashboard_'] span[id^='s_'][id$='_0']");if(I&&I.length>0){for(var K=0;K<I.length;K++){var G=I[K];var J=$(G).attr("id");var L=J.split("_");g.SetProperty(L[L.length-2],J)}}var F=$("div[id^='s_Dashboard_'] input[name^='s_'][name$='_0']");if(F&&F.length>0){for(var K=0;K<F.length;K++){var O=F[K];var J=$(O).attr("name");var L=J.split("_");g.SetProperty(L[L.length-2],J)}}if(g.GetPropertiesSize()>0){this.GetPM().ExecuteMethod(o.get("DASHBOARD_METHOD_GETCUSTOMERCONTROLINFO"),g)}var H=CCFMiscUtil_CreatePropSet();H.SetType("RequiredFields");var M=$(".siebui-dashboard-element");var S=0;for(var R=0,S=M.length;R<S;R++){var E=M[R];H.SetProperty(parseInt(R+1),$(E).attr("name"))}this.GetPM().SetProperty("RequiredFields",H);var T=$(".siebui-dashboard-container").parent();var N=T.siblings("a.next-item-applet").attr("title")+" "+q.GetLocalString("IDS_SWE_FORM_APPLET");T.attr({role:"region",title:N});$("#s_dashboardclose").attr("role","button").attr("tabindex","0").attr("aria-label",q.GetLocalString("IDS_MSG_CLOSE")).attr("title",q.GetLocalString("IDS_MSG_CLOSE"));$("#s_dshbd_Link_Goto").addClass("siebui-ctrl-btn");$("#s_dshbd_PushToDashboard").addClass("siebui-ctrl-btn");$(".siebui-dashboard-container input").attr("readOnly",true).attr("aria-readonly",true).attr("tabindex","0").addClass("siebui-ctrl-input");$("#s_dshbd_GoToPreviousRecord").attr("title",q.GetLocalString("PrevRecSetToolTip"));$("#s_dshbd_GoToNextRecord").attr("title",q.GetLocalString("NextRecSetToolTip"));s.call(this,"Dashboard: ShowUI")};t.prototype.BindEvents=function(){SiebelAppFacade.DashboardPR.superclass.BindEvents.call(this);var I=$("#s_dashboardclose");var D=$("#s_dshbd_PushToDashboard");var H=$("#s_dshbd_GoToPreviousRecord");var F=$("#s_dshbd_GoToNextRecord");var C=$("#s_dshbd_Link_Goto");var G=$("span[id^='s_'][id$='_0'] button");var B=SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");if(B){if(I.length>0){B.Manage(I,"click",{ctx:this},l);B.Manage(I,"keydown",{ctx:this},h)}if(G&&G.length>0){for(var K=0;K<G.length;K++){var E=G[K];B.Manage($(E),"click",{ctx:this},w)}}if(D.length>0){B.Manage(D,"click",{ctx:this},v)}if(H.length>0){B.Manage(H,"click",{ctx:this},k);B.Manage(H,"keydown",{ctx:this},y)}if(F.length>0){B.Manage(F,"click",{ctx:this},p);B.Manage(F,"keydown",{ctx:this},x)}if(C.length>0){B.Manage(C,"click",{ctx:this},A)}var J=$("#CommunicationPanelContainer #commPanelDashboardToggle");if(J.length>0){B.Manage(J,"click",{ctx:this},e);B.Manage(J,"keydown",{ctx:this},b)}}};t.prototype.BindData=function(){SiebelAppFacade.DashboardPR.superclass.BindData.call(this);r.call(this)};t.prototype.EndLife=function(){SiebelAppFacade.DashboardPR.superclass.EndLife.call(this)};function r(){if($(".siebui-dashboard-container").length>0){this.GetPM().ExecuteMethod(o.get("DASHBOARD_METHOD_INIT"))}else{this.GetPM().ExecuteMethod("InvokeServiceMethod",o.get("DASHBOARD_METHOD_OPEN"))}}function l(B){B.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_CLOSE"))}function h(B){if(B.keyCode===$.ui.keyCode.ENTER){B.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_CLOSE"))}}function w(B){var C=B.currentTarget.name;B.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_GETCUSTOMERCONTROLCLICK"),C)}function v(C){var B=CCFMiscUtil_CreatePropSet();SiebelApp.S_App.GetMainView().GetActiveApplet().InvokeMethod("ImplicitCommit",B);C.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_UPDATE"))}function k(B){B.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_PREVIOUS"))}function y(B){if(B.keyCode===$.ui.keyCode.ENTER){B.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_PREVIOUS"))}}function p(B){B.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_NEXT"))}function x(B){if(B.keyCode===$.ui.keyCode.ENTER){B.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_NEXT"))}}function A(C){var B=$("#s_dshbd_Quick_Navigation").val();if(!u.IsEmpty(B)){C.data.ctx.GetPM().OnControlEvent(o.get("DASHBOARD_METHOD_GOTONAV"),B)}}function e(D){var B=$(D.target);var C=B.attr("id");D.preventDefault();if(C==="commPanelDashboardToShowMore"){f(D,B)}else{if(C==="commPanelDashboardToShowLess"){d(D,B)}}}function b(B){if(B.which===$.ui.keyCode.ENTER||B.which===$.ui.keyCode.SPACE){e(B)}}function d(E,C){var B=$("#CommunicationPanelContainer #commPanelDashboardToShowMore");var D=$("#CommunicationPanelContainer #commPanelDashboardToShowLess");if(B.length===0||D.length===0){return}var F=B.css("display")!=="none";if(F){return}else{B.show().attr("aria-hidden",false);D.hide().attr("aria-hidden",true);if(E&&C){B.focus()}n(E)}}function f(E,C){var B=$("#CommunicationPanelContainer #commPanelDashboardToShowMore");var D=$("#CommunicationPanelContainer #commPanelDashboardToShowLess");if(B.length===0||D.length===0){return}var F=D.css("display")!=="none";if(F){return}else{D.show().attr("aria-hidden",false);B.hide().attr("aria-hidden",true);if(E&&C){D.focus()}n(E)}}function n(B){var C=$("#CommunicationPanelContainer #Dashboard");if(C.length>0){C.toggleClass("siebui-comm-panel-less")}s.call(B.data.ctx,"Dashboard: Toggle")}function s(B){if($("#CommunicationPanelContainer").length>0){$(window).trigger("resize.commpanel",B)}}function z(){j.call(this,this.GetPM().Get("UIControlInfo"))}function m(){j.call(this,this.GetPM().Get("UpdatedCtrlData"))}function a(){c.call(this,this.GetPM().Get("UICustomerControlInfo"))}function c(H){if(H){SiebelJS.Log("[Customer Dashboard].INFO: Updating Customer control info...");var M={};var G=H.EnumChildren(true);do{if(G){var O=G.GetProperty("visible");if(O&&O===o.get("DASHBOARD_VALUE_YES")){var E=G.GetProperty("name");
var K=G.GetProperty("type");var S=G.GetProperty("value");var C=G.GetProperty("InvokeMethod");var Q='name="'+E+'"';var I=G.GetProperty("id");if(I&&I!=="0"){var T="#"+g.GetProperty(I);if(C&&C!==o.get("DASHBOARD_VALUE_NO")){M[E]=C}if(K&&K==="Button"){var P=SiebelAppFacade.HTMLTemplateManager.GenerateMarkup({type:K,value:S,className:"appletButton",attrs:Q});var D=$(T);D.empty();D.append(P)}else{if(K&&K==="Text"){var F=$("input[name='"+g.GetProperty(I)+"']");if(F.length>0){var L=$(F[0]);L.addClass("siebui-dashboard-element");L.attr("id",g.GetProperty(I));L.attr("name",E)}}}}}}}while((G=H.EnumChildren(false)));this.GetPM().SetProperty("CustomerControlMethods",M)}var B=$("span[id^='Label_']");if(B&&B.length>0){for(var J=0;J<B.length;J++){var R=B[J];var N=$(R).text();var P=SiebelAppFacade.HTMLTemplateManager.GenerateMarkup({type:"Label",value:N});$(R).empty();$(R).append(P)}}}function j(J){if(J){SiebelJS.Log("[Customer Dashboard].INFO: Updating control info...");var L=J.EnumChildren(true);do{if(L){var C=L.GetProperty("CtrlName");var K=L.GetProperty("CtrlType");var G=L.GetProperty("Visible");var I=L.GetProperty("DisplayName");var F=L.GetProperty("FieldValue");var H=L.GetProperty("CanInvokeMethod");var B=$('.siebui-dashboard-container [name="'+C+'"]');if(B.length>0){switch(K){case"FieldLabel":if(C=="Label QuickNavigation"){if(u.IsEmpty(I)){I="";SiebelJS.Log("[Customer Dashboard].UNDEFINED: Caption property of "+C+" control is not defined in Tools!")}B.text(I?I+" : ":I)}else{if(u.IsEmpty(F)){F="";SiebelJS.Log("[Customer Dashboard].UNDEFINED: "+C+" is not mapped properly!")}B.text(F?F+" : ":F)}break;case"Field":B.val(F).attr("aria-label",F).attr("title",F);break;case"MiniButton":if(u.IsEmpty(I)){I="";SiebelJS.Log("[Customer Dashboard].UNDEFINED: Caption property of "+C+" control is not defined in Tools!")}B.html(I);B.attr("title",I);break;case"RecNavPrv":case"RecNavNxt":B.removeClass("siebui-btn-icon-e siebui-btn-icon-d");if(H==o.get("DASHBOARD_VALUE_NO")){B.addClass("siebui-btn-icon-d").attr("tabindex","-1")}else{if(H==o.get("DASHBOARD_VALUE_YES")){B.addClass("siebui-btn-icon-e").attr("tabindex","0")}}break;default:break}if(H==o.get("DASHBOARD_VALUE_NO")){B.attr("disabled","disabled").attr("tabindex","-1")}else{if(H==o.get("DASHBOARD_VALUE_YES")){B.removeAttr("disabled").attr("tabindex","0")}}if(G==o.get("DASHBOARD_VALUE_NO")){B.addClass("siebui-invisible");SiebelJS.Log("[Customer Dashboard].INVISIBLE: "+C+" is hidden due to Visible property set FALSE in Tools!")}else{B.removeClass("siebui-invisible")}}}}while((L=J.EnumChildren(false)));$(".siebui-dashboard-container label[name!='Label QuickNavigation']").each(function(){var M=$("#"+$(this).attr("for"));if((!$(this).text()||$(this).hasClass("siebui-invisible"))&&(!M.val()||M.hasClass("siebui-invisible"))){$(this).parent(".siebui-dashboard-cell").addClass("siebui-no-display siebui-invisible");SiebelJS.Log("[Customer Dashboard].HIDE: "+$(this).attr("name")+" and its paired field are hidden as they both are either empty or Visible set FALSE in Tools!")}else{$(this).parent(".siebui-dashboard-cell").removeClass("siebui-no-display siebui-invisible")}});var E=$(".siebui-dashboard-container input[name='Label Time']");var D=$(".siebui-dashboard-container input[name='Field Time']");if((!E.val()||E.hasClass("siebui-invisible"))&&(!D.val()||D.hasClass("siebui-invisible"))){$(".siebui-dashboard-time-label").parent(".siebui-dashboard-cell").addClass("siebui-no-display siebui-invisible");SiebelJS.Log("[Customer Dashboard].HIDE: Time label and field are hidden as they both are either empty or Visible set FALSE in Tools!")}else{$(".siebui-dashboard-time-label").parent(".siebui-dashboard-cell").removeClass("siebui-no-display siebui-invisible")}SiebelJS.Log("[Customer Dashboard].INFO: Control info updated!")}}function i(){var C=this.GetPM().Get("QuickNavigateList");if(C){var B=$("#s_dshbd_Quick_Navigation");B.empty();var E=C.EnumChildren(true);do{if(E){B.append('<option value="'+E.GetProperty("FieldValue")+'">'+E.GetProperty("DisplayName")+"</option>")}}while((E=C.EnumChildren(false)));if(C.GetChildCount()==0){var D=$("#s_dshbd_Link_Goto");if(D.length){D.attr("disabled","disabled").attr("tabindex","-1")}}}}return t}());return SiebelAppFacade.DashboardPR})}if(typeof(SiebelAppFacade.CommunicationPanelPR)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.CommunicationPanelPR");define("siebel/commpanelprenderer",["siebel/basephyrenderer"],function(){SiebelAppFacade.CommunicationPanelPR=(function(){var m=SiebelJS.Dependency("SiebelApp.Constants");var u=SiebelJS.Dependency("SiebelApp.Utils");var o=SiebelJS.Dependency("SiebelApp.S_App.LocaleObject");var s="DOCK";var h=3;var t=["INFO: ","ERROR: ","WARNING: ","DEBUG: "];function y(z){SiebelAppFacade.CommunicationPanelPR.superclass.constructor.call(this,z)}SiebelJS.Extend(y,SiebelAppFacade.BasePR);y.prototype.Init=function(){SiebelAppFacade.CommunicationPanelPR.superclass.Init.call(this);this.AttachPMBinding("Show",d,{scope:this})};y.prototype.ShowUI=function(){SiebelAppFacade.CommunicationPanelPR.superclass.ShowUI.call(this);var C=$("#CommunicationPanelContainer");var H=null;var B=null;var I=null;var N=null;var O=null;var J=null;var M=null;var G=null;var E=null;var P="";var L="";var A="";var K="";var F="";var z="";if(C.length>0){H=C.find("#commPanelCaption");if(H.length>0){P=o.GetLocalString("IDS_COMM_PANEL_CAPTION");H.parent("div").attr("title",P);H.attr("aria-label",P);H.text(P)}B=C.find("#commPanelSideToggle");if(B.length>0){I=B.find("#commPanelSideToShowWide");N=B.find("#commPanelSideToShowNarrow");if(I.length>0){L=o.GetLocalString("IDS_COMM_PANEL_SIDE_SHOW_WIDE");I.parent("div").attr("title",L);I.attr("aria-label",L)}if(N.length>0){A=o.GetLocalString("IDS_COMM_PANEL_SIDE_SHOW_NARROW");N.parent("div").attr("title",A);N.attr("aria-label",A)}}O=C.find("#commPanelDockToggle");if(O.length>0){J=O.find("#commPanelDockToShowPin");M=O.find("#commPanelDockToShowUnpin");if(J.length>0){K=o.GetLocalString("IDS_COMM_PANEL_DOCK_TO_DOCK");J.parent("div").attr("title",K);J.attr("aria-label",K)}if(M.length>0){F=o.GetLocalString("IDS_COMM_PANEL_DOCK_TO_FLOAT");M.parent("div").attr("title",F);M.attr("aria-label",F)}}G=C.find("#commPanelCloseToggle");if(G.length>0){E=G.find("#commPanelClose");if(E.length>0){z=o.GetLocalString("IDS_COMM_PANEL_CLOSE");E.parent("div").attr("title",z);E.attr("aria-label",z)}}var D=SiebelAppFacade.ComponentMgr.FindComponent({id:m.get("SWE_PST_COMM_TOOLBAR")});if(D&&D.Get("InitFailed")){C.find("#CommPanelHeaderCTI").addClass("forcehide");D.ExecuteMethod("ShowPreviousMessage")}}};y.prototype.BindEvents=function(){SiebelAppFacade.CommunicationPanelPR.superclass.BindEvents.call(this);v.call(this);var D=SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");if(D){var F=$("#CommunicationPanelContainer");if(F.length>0){var B=F.find("#commPanelClose");if(B.length>0){D.Manage(B,"click",{ctx:this},b);D.Manage(B,"keydown",{ctx:this},l)}var C=F.find("#commPanelSideToggle");if(C.length>0){D.Manage(C,"click",{ctx:this},j);
D.Manage(C,"keydown",{ctx:this},f)}var E=F.find("#commPanelDockToggle");if(E.length>0){D.Manage(E,"click",{ctx:this},a);D.Manage(E,"keydown",{ctx:this},x)}var A=this;var z;$(window).off("resize.commpanel").on("resize.commpanel",function(H,G){clearTimeout(z);z=setTimeout(function(){H.preventDefault();H.stopPropagation();e.call(A,H,G)},100)});B=null;C=null;E=null}F=null}D=null};y.prototype.BindData=function(){SiebelAppFacade.CommunicationPanelPR.superclass.BindData.call(this)};function v(){var A=$("#CommunicationPanelContainer");var z=A.find($("#CommPanelHeader"));if(A.length>0&&z.length>0){if(A.data("uiDraggable")===undefined){A.draggable({handle:z,start:function(){A.css({right:"",bottom:""})},drag:function(B,C){C.position=C.offset},stop:p});A.off("dragstop.commpanel").on("dragstop.commpanel",p)}if(s==="DOCK"){A.draggable("option","disabled",true)}else{A.draggable("option","disabled",false)}A.css("cursor","default");A.css("position","")}}function p(A,G){var B=$("#CommunicationPanelContainer");var H=B.find($("#CommPanelHeader"));if(B.length>0&&H.length>0){var F=G?G.offset.top:B.offset().top;var D=G?G.offset.left:B.offset().left;var z=$(window).width();var I=B.outerWidth(true);var C=50-I+parseInt(B.css("marginRight"),10);var E=$(window).height()-parseInt(B.css("marginTop"),10)-H.height();if(F<0){B.css("top",0)}else{if(F>E){B.css("top",E)}}if(SiebelApp.S_App.GetDirection()){if(D<C){B.css("left",C)}else{if(D>(z-I)){B.css("left",z-I)}}}else{if(D<5){B.css("left",5)}else{if(D>(z-50)){B.css("left",z-50)}}}}}function b(z){z.preventDefault();z.data.ctx.GetPM().OnControlEvent(m.get("COMM_PANEL_CLOSE"))}function l(z){if(z.which===$.ui.keyCode.ENTER||z.which===$.ui.keyCode.SPACE){b(z)}}function j(B){var z=$(B.target);var A=z.attr("id");B.preventDefault();if(A==="commPanelSideToShowWide"){c(B,z)}else{if(A==="commPanelSideToShowNarrow"){g(B,z)}}}function f(z){if(z.which===$.ui.keyCode.ENTER||z.which===$.ui.keyCode.SPACE){j(z)}}function c(A,z){var C=$("#CommunicationPanelContainer");var B=C.find("#commPanelSideToShowWide");var E=C.find("#commPanelSideToShowNarrow");var D=E.css("display")!=="none";if(D){return}else{E.show().attr("aria-hidden",false);B.hide().attr("aria-hidden",true);if(A&&z){E.focus()}r(A)}}function g(A,z){var C=$("#CommunicationPanelContainer");var B=C.find("#commPanelSideToShowWide");var E=C.find("#commPanelSideToShowNarrow");var D=B.css("display")!=="none";if(D){return}else{B.show().attr("aria-hidden",false);E.hide().attr("aria-hidden",true);if(A&&z){B.focus()}r(A)}}function r(z){var A=$("#CommunicationPanelContainer");if(A.length>0){A.toggleClass("siebui-comm-panel-narrow")}q.call(z.data.ctx,"CommPanel: Wide/Narrow");if(s==="DOCK"){SiebelApp.EventManager.fireEvent("forceResize")}}function a(B){var z=$(B.target);var A=z.attr("id");B.preventDefault();if(A==="commPanelDockToShowPin"){i(B,z)}else{if(A==="commPanelDockToShowUnpin"){w(B,z)}}}function x(z){if(z.which===$.ui.keyCode.ENTER||z.which===$.ui.keyCode.SPACE){a(z)}}function i(A,z){var C=$("#CommunicationPanelContainer");var B=C.find("#commPanelDockToShowPin");var E=C.find("#commPanelDockToShowUnpin");var D=E.css("display")!=="none";if(D){return}else{E.show().attr("aria-hidden",false);B.hide().attr("aria-hidden",true);if(A&&z){E.focus()}k(A)}}function w(A,z){var C=$("#CommunicationPanelContainer");var B=C.find("#commPanelDockToShowPin");var E=C.find("#commPanelDockToShowUnpin");var D=B.css("display")!=="none";if(D){return}else{B.show().attr("aria-hidden",false);E.hide().attr("aria-hidden",true);if(A&&z){B.focus()}k(A)}}function k(z){var A=$("#CommunicationPanelContainer");if(A.length>0){A.toggleClass("siebui-comm-panel-float")}if(s==="FLOAT"){s="DOCK"}else{if(s==="DOCK"){s="FLOAT"}}v();q.call(z.data.ctx,"CommPanel: Dock/UnDock");SiebelApp.EventManager.fireEvent("forceResize")}function q(z){if($("#CommunicationPanelContainer").length>0){$(window).trigger("resize.commpanel",z)}}function e(z,C){var B=$("#CommunicationPanelContainer");if(B.length>0){var H=(s==="FLOAT")?$("#_sweclient").height():$("#_swecontent").height();var I=B.height();var D=B.find($("#CommunicationPanel")).height();var F=(B.find($("#CTIToolbar")).length===0)?0:B.find($("#CTIToolbar")).height();var E=(B.find($("#Dashboard")).length===0)?0:B.find($("#Dashboard")).height();var A=(B.find($("#SS_ChatUI")).length===0)?0:B.find($("#SS_ChatUI")).height();var G=D+F+E+A;if(3<h){if(!u.IsEmpty(z)&&u.IsEmpty(z.namespace)){C=C||"Window"}else{C=C||"Unknown"}n.call(this,3,"Resize triggered from "+C+"\n  CommPanel Height Limit:     "+H+"\n  CommPanel Container Height: "+I+"\n  Sub Panels Height:          "+G+"\n    CommPanel: "+D+"\n    CTI:       "+F+"\n    Dashboard: "+E+"\n    Chat:      "+A)}if(H<I||I<G){B.removeClass("siebui-comm-panel-height-auto")}else{B.addClass("siebui-comm-panel-height-auto")}if(s==="FLOAT"&&z.namespace===undefined){B.trigger("dragstop.commpanel")}}}function d(){var A=$("#CommunicationPanelContainer");var z;var B;if(A.length>0){if(this.GetPM().Get("Show")){A.removeClass("forcehide");A.find($("#CTIToolbar")).removeClass("forcehide");B=$("#siebui-toolbar-toggle-communication-panel .siebui-toolbar-toggle-communication-panel-notification");if(B.length>0){z=B.attr("data-initial-title")||"";B.removeClass("siebui-toolbar-toggle-communication-panel-notification").attr("aria-label",z).attr("title",z)}q.call(this,"CommPanel: Post Show")}else{$(window).off("resize.commpanel");A.addClass("forcehide");A.find($("#CTIToolbar")).addClass("forcehide")}}}function n(A,z){if(A<h){A=(A<t.length)?A:t.length-1;SiebelJS.Log("["+u.GetISODateTime(null,true)+"]: "+t[A]+z)}}return y}());return SiebelAppFacade.CommunicationPanelPR})};