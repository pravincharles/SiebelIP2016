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
if(typeof(SiebelAppFacade.EditUIRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.EditUIRenderer");define("siebel/epuidetailrenderer",["siebel/phyrenderer"],function(){SiebelAppFacade.EditUIRenderer=(function(){var m=SiebelJS.Dependency("SiebelApp.Constants"),o=m.get("SWE_PST_BUTTON_CTRL"),i=m.get("SWE_CTRL_LINK"),h=m.get("SWE_PST_COL"),e={};function d(){SiebelAppFacade.EditUIRenderer.superclass.constructor.apply(this,arguments)}SiebelJS.Extend(d,SiebelAppFacade.PhysicalRenderer);d.prototype.Init=function(){SiebelAppFacade.EditUIRenderer.superclass.Init.call(this);this.AttachPMBinding("ShowSelection",this.ShowSelectionCustom);this.AttachPMBinding("UpdateUI",function(){this.ShowSelectionCustom()})};d.prototype.EndLife=function(){$("#"+this.GetPM().Get("placeholder")).find(".jstree").jstree("destroy");SiebelAppFacade.EditUIRenderer.superclass.EndLife.call(this)};d.prototype.ShowUI=function(){var v=this.GetPM(),x="#s_"+v.Get("GetFullId")+"_div",u=$(x).find('div[id="EPUIRecordTemplate"]').html(),w=$(x).find('div[id="EPUIRecordTemplate"]').empty(),s=v.Get("GetRowListRowCount"),y="",t;for(t=0;t<s;t++){y=y+'<div myRecordIndex="'+t+'" data-role="EPUIRec" class="siebui-epui-tr" >'+u+"</div>"}colsolidatedJQObj=$(y);w.replaceWith(colsolidatedJQObj);SiebelAppFacade.EditUIRenderer.superclass.ShowUI.call(this)};function j(v,t){var u=v.GetMethodPropSet(),s=u.Clone();s.SetProperty(m.get("SWE_REQ_ROW_ID_STR"),"1");s.SetProperty(m.get("SWE_ROW_STR"),t);this.GetPM().OnControlEvent(m.get("PHYEVENT_INVOKE_CONTROL"),v.GetMethodName(),s)}function a(w){var u=$(this),t=u.attr("recordindex"),v=u.parents(".siebui-epui-accordion-header").length?u.parents(".siebui-epui-accordion-header"):u.parents(".siebui-epui-accordion-detail").prev(),s=v.attr("accordionheaderindex");w.preventDefault();w.stopImmediatePropagation();k(s);j.call(w.data.ctx,w.data.ctrl,t)}function f(v){var u=this.GetUIWrapper(v),s=u.Helper("EventHelper"),t=u.GetEl();switch(v.GetUIType()){case o:case i:s.Manage(t,"click",{ctx:this,ctrl:v},a);break}}function c(x){var v=$(this),u=x.data.ctx.GetPM(),w="#"+u.Get("GetFullId"),s=v.attr("myrecordindex"),t=(s||s===0)?s:v.find('[data-role="EPUIRec"]').attr("myrecordindex");$(w).find('[data-role="EPUIRec"]').removeClass("siebui-epui-rec-selected");if(v.attr("myrecordindex")){v.addClass("siebui-epui-rec-selected")}else{v.find('[data-role="EPUIRec"]').addClass("siebui-epui-rec-selected")}u.OnControlEvent(m.get("PHYEVENT_SELECT_ROW"),t)}function b(){var t=$(this);var s=t.attr("accordionheaderindex");if(e[s]){q.call(this,s);t.removeClass("siebui-epui-active-section").next(".siebui-epui-accordion-detail").removeClass("siebui-epui-active-section")}else{k.call(this,s);t.addClass("siebui-epui-active-section").next(".siebui-epui-accordion-detail").addClass("siebui-epui-active-section")}}function k(s){var t=$(this);t.addClass("siebui-epui-accordion-expanded").removeClass("siebui-epui-accordion-collapsed").next(".siebui-epui-accordion-detail").show();e[s]=true}function q(s){var t=$(this);t.addClass("siebui-epui-accordion-collapsed").removeClass("siebui-epui-accordion-expanded").next(".siebui-epui-accordion-detail").hide();e[s]=false}function p(s){$(this).find('[name="EPUITitleRow"]').addClass("siebui-epui-title-selected");$(this).addClass("siebui-epui-selected")}function n(s){$(this).find('[name="EPUITitleRow"]').removeClass("siebui-epui-title-selected");$(this).removeClass("siebui-epui-selected")}function g(){var u=this.GetPM(),z=u.Get("GetRecordSet"),B=u.Get("GetBeginRow")||0,s=e.activeIndex?e.activeIndex:[],w=$('[data-role="EPUIRec"]'),t=Number(u.Get("GetRowListRowCount"))+Number(B),x;w.wrapAll('<div id="siebui-epui-accordionWrapper"></div>');for(var v=0,y=0;(v<t)&&(v<z.length);v++){recObj=w.filter('[myrecordindex="'+v+'"]');if(u.ExecuteMethod("IsRuleRow",v)){if(!recObj.parent().hasClass("siebui-epui-accordion-header")){var A=v-y;recObj.wrap('<div class="siebui-epui-accordion-header"></div>');recObj.parent().attr("accordionHeaderIndex",A).after('<div class="siebui-epui-accordion-detail"></div>')}}else{if(!recObj.parent().hasClass("siebui-epui-accordion-detail")){y+=1;recObj.prev(".siebui-epui-accordion-detail").append(recObj)}}}$(".siebui-epui-accordion-header").each(function(){var D=$(this),C=parseInt(D.attr("accordionHeaderIndex"));if(e[C]===undefined||e[C]===true){k.call(this,C)}else{q.call(this,C)}})}function r(){var s=$('[data-role="EPUIRec"]');if(s.parent().hasClass("siebui-epui-accordion-header")||s.parent().hasClass("siebui-epui-accordion-detail")){$('.siebui-epui-accordion-header > [data-role="EPUIRec"] ,.siebui-epui-accordion-detail > [data-role="EPUIRec"]').unwrap()}$('#siebui-epui-accordionWrapper > [data-role="EPUIRec"] ').unwrap()}d.prototype.BindEvents=function(s){var v=this.GetPM(),w="#"+v.Get("GetFullId"),t=SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");s=s||this.GetPM().Get("GetControls");for(var y in s){if(s.hasOwnProperty(y)){var x=s[y];f.call(this,x)}}t.Manage($(w),"focusin",{ctx:this},c,'[data-role="EPUIRec"]');t.Manage($(w),"click",{ctx:this},c,[".siebui-epui-accordion-header",'[data-role="EPUIRec"]']);t.Manage($(w),"click",{ctx:this},b,".siebui-epui-accordion-header");var u=$(w).parent().parent().filter('[name="EPUIIntegratedApplet"]');if($(u).length>0){t.Manage($('[name="EPUIIntegratedApplet"]'),"focusin",{ctx:this},p);t.Manage($('[name="EPUIIntegratedApplet"]'),"focusout",{ctx:this},n)}SiebelAppFacade.EditUIRenderer.superclass.BindEvents.call(this,s)};function l(){var v=this.GetPM(),w=v.Get("GetRecordSet"),s=v.Get("LastBoundData"),x=false;if(s.length!==w.length){x=true}else{for(var t=0;t<s.length;t++){for(var u in s[t]){if(s[t].hasOwnProperty(u)&&s[t][u]!==w[t][u]){this.ShowSelectionCustom.call(this,t);break}}}}v.SetProperty("LastBoundData",w);return x}d.prototype.BindData=function(y){if(this.inProgress){return false}if(y){var x=l.call(this);if(!x){return}}SiebelAppFacade.EditUIRenderer.superclass.BindData.call(this,y);var t=this.GetPM(),v=t.Get("GetRecordSet"),u=t.Get("GetBeginRow")||0,w=Number(this.GetPM().Get("GetRowListRowCount"))+Number(u);r.call(this);$('[data-role="EPUIRec"]').show();for(var s=0;(s<w)&&(s<v.length);s++){this.ShowSelectionCustom.call(this,s)}$('[data-role="EPUIRec"]').slice(v.length).hide();t.SetProperty("LastBoundData",v);g.call(this)};d.prototype.ShowSelectionCustom=function(t){if(this.inProgress){return false}var s=this.GetPM(),A=s.Get("GetControls"),y=typeof(t);if(y==="undefined"||y==="boolean"||isNaN(t)){t=s.Get("GetSelection")}this.ShowSelection.call(this,t);for(var v in A){if(A.hasOwnProperty(v)){var u=A[v];pwC=this.GetUIWrapper(u);element=pwC.GetEl(t);if(element){$(element).attr("recordindex",t)}if(s.ExecuteMethod("IsRowLevelControl",u.GetName())||u.GetControlType()===h){var z=s.ExecuteMethod("CanShowRowLevelControl",u.GetName(),t);pwC.SetState(m.get("SHOW"),z,t)}if(u.GetControlType()===h){var w=(!s.ExecuteMethod("IsControlReadOnly",v,t));pwC.SetState(m.get("EDITABLE"),w,t)}}}var x=$('[data-role="EPUIRec"]').filter('[myrecordindex="'+t+'"]');
x.find("[data-role]").each(function(C,D){var B=$(D).attr("data-role");if(!s.ExecuteMethod("CanShowRowLevelControl",B,t)){$(D).hide()}else{$(D).show()}})};return d}());return SiebelAppFacade.EditUIRenderer})};