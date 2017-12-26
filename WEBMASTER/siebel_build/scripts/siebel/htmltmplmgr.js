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
/* 8.1.1.14SIA[23044]PATCHSET7 */
if(typeof(SiebelAppFacade.HTMLTemplateManager)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.HTMLTemplateManager");define("siebel/htmltmplmgr",[],function(){SiebelAppFacade.HTMLTemplateManager=(function(){var g=SiebelJS.Dependency("SiebelApp.Constants");var i=SiebelJS.Dependency("SiebelApp.S_App.LocaleObject");var a=i.GetLocalString("IDS_SWE_DATE_FIELD_TITLE"),d=i.GetLocalString("IDS_SWE_DATETIME_FIELD_TITLE"),f=i.GetLocalString("IDS_SWE_PICK_TITLE"),l=i.GetLocalString("IDS_SWE_MVG_TITLE"),c=i.GetLocalString("IDS_SWE_EFFECTIVE_DATE_TITLE"),b=i.GetLocalString("IDS_SWE_DETAIL_POPUP_APPLET"),j=i.GetLocalString("IDS_SWE_CALC_FIELD_TITLE"),k=i.GetLocalString("IDS_SWE_CURRENCY_CALC_FIELD_TITLE");function h(){}h.prototype.GenerateMarkup=function(){return e.apply(this,arguments)};h.prototype.EnhanceMarkup=function(){return e.apply(this,arguments)};function e(q){var p="";q=q||{};switch(q.type){case g.get("SWE_PST_BUTTON_CTRL"):p+='<button type="button" class="siebui-ctrl-btn ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</button>'.replace("${VALUES}",q.value||"");break;case g.get("SWE_CTRL_PLAINTEXT"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).children("#"+q.id+"_Label").length===0){q.el.eq(o).addClass("siebui-ctrl-text "+(q.className||""));if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).append('<Label id="'+q.id+'_Label"></Label>')}}}}else{p+='<span class="siebui-ctrl-text ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</span>'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_COMBOBOX"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-dropdown").length===0){q.el.eq(o).addClass("siebui-ctrl-select siebui-input-popup "+(q.className||"")).after('<span class="siebui-icon-dropdown" id="'+q.id+'_icon" data-allowdblclick="true"/>');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{var s='<select class="siebui-ctrl-select ${CLASSNAME}" ${ID} ${ATTRS}>';if(q.value&&q.value.length){q.displayValue=q.displayValue||[];for(var r=0,m=q.value.length;r<m;r++){s+='<option value="'+q.value[r]+'" '+(q.index===r?"selected":"")+">"+(q.displayValue[r]||q.value[r])+"</option>"}}s+="</select>";p+=s}break;case g.get("SWE_CTRL_CALC"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-calc").length===0){q.el.eq(o).addClass("siebui-ctrl-calc siebui-input-popup "+q.className).after('<span class="siebui-icon-calc" id="'+q.id+'_icon" aria-label="'+j+'" />');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{p+="<input type='text' role='calc' class=\"siebui-ctrl-calc ${CLASSNAME}\" ${ID} ${ATTRS} value=\"${VALUES}\" />".replace("${VALUES}",q.value||"");p+='<span class="siebui-icon-calc" aria-label="'+j+'" >'}break;case g.get("SWE_CTRL_CHECKBOX"):if(q.el){q.el.addClass("siebui-ctrl-checkbox "+(q.className||""))}else{p+="<input type='checkbox' role='calc' class=\"siebui-ctrl-checkbox ${CLASSNAME}\" ${ID} ${ATTRS} value=\"${VALUES}\" />".replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_LINK"):if(q.el){q.el.addClass("siebui-ctrl-link "+(q.className||""));for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).children("#"+q.id+"_mb").length===0){q.el.append("<a role = 'link' id =\""+q.id+'_mb" href="javascript:void(0)" >'+q.value+"</a>")}}}else{p+='<a href="${SRC}" class="siebui-ctrl-link ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</a>'.replace("${VALUES}",q.value||"").replace("${SRC}",q.src||"javascript:void(0)")}break;case g.get("SWE_CTRL_MAILTO"):if(q.el){q.el.addClass("siebui-ctrl-mailto siebui-input-popup "+q.className);for(var o=0,m=q.el.length;o<m;o++){var n=q.el.eq(o).val()?"mailto:"+q.el.eq(o).val():"mailto:";if(q.el.eq(o).next(".siebui-icon-mailto").length===0){q.el.eq(o).after("<a href ="+n+' class="siebui-icon-mailto" id="'+q.id+'_icon" >')}}if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}else{p+='<a src="${SRC}" class="siebui-ctrl-mailto ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</a>'.replace("${VALUES}",q.value||"").replace("${SRC}",q.src||"javascript:void(0)")}break;case g.get("SWE_CTRL_IMAGECONTROL"):p+=SiebelApp.Utils.GetSpanTag(q.src)+'<img src="${SRC}" class="siebui-ctrl-img ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</img></span>'.replace("${VALUES}",q.value||"").replace("${SRC}",q.src);break;case g.get("SWE_CTRL_TEXTAREA"):if(q.el){q.el.addClass("siebui-ctrl-textarea "+(q.className||""))}else{p+='<textarea class="siebui-ctrl-textarea ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}"></textarea>'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_DATE_PICK"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-date").length===0){q.el.eq(o).addClass("siebui-ctrl-date siebui-input-popup "+q.className).after('<span class="siebui-icon-date" id="'+q.id+'_icon" aria-label="'+a+'" data-allowdblclick="true"/>');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{p+='<input type=\'text\' class="siebui-ctrl-date ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"");p+='<span class="siebui-icon-date" aria-label="'+a+'" >'}break;case g.get("SWE_CTRL_DATE_TZ_PICK"):case g.get("SWE_CTRL_DATE_TIME_PICK"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-datetime").length===0){q.el.eq(o).addClass("siebui-ctrl-datetime siebui-input-popup "+q.className).after('<span class="siebui-icon-datetime" id="'+q.id+'_icon" aria-label="'+d+'" data-allowdblclick="true"/>');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{p+='<input type=\'text\' class="siebui-ctrl-datetime ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"");p+='<span class="siebui-icon-datetime" aria-label="'+a+'" >'}break;case g.get("SWE_CTRL_URL"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){q.el.eq(o).attr({"class":"siebui-ctrl-url "+q.className,value:q.value||""})}}else{p+='<input type=\'text\' class="siebui-ctrl-url ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_PHONE"):p+='<input type=\'text\' class="siebui-ctrl-phone ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"");break;case g.get("SWE_CTRL_EFFDAT"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-effdate").length===0){q.el.eq(o).addClass("siebui-ctrl-effdate siebui-input-popup "+(SiebelApp.S_App.GetDirection()?"siebui-rtl-input-popup ":" ")+q.className).after('<span class="siebui-icon-effdate" id="'+q.id+'_icon" aria-label="'+c+'" />');
if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{p+='<input type=\'text\' class="siebui-ctrl-effdat ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_MVG"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-mvg").length===0){q.el.eq(o).addClass("siebui-ctrl-mvg siebui-input-popup "+(SiebelApp.S_App.GetDirection()?"siebui-rtl-input-popup ":" ")+q.className).after('<span class="siebui-icon-mvg" id="'+q.id+'_icon" aria-label="'+l+'" />');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{p+='<input type=\'text\' class="siebui-ctrl-mvg ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_PICK"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-pick").length===0){q.el.eq(o).addClass("siebui-ctrl-pick siebui-input-popup "+(SiebelApp.S_App.GetDirection()?"siebui-rtl-input-popup ":" ")+q.className).after('<span class="siebui-icon-pick" id="'+q.id+'_icon" aria-label="'+f+'" />');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{p+='<input type=\'text\' class="siebui-ctrl-pick ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_DETAIL"):p+='<input type=\'text\' class="siebui-ctrl-detail ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"");break;case g.get("SWE_CTRL_LABEL"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).children("#"+q.id+"_mb").length===0){q.el.eq(o).addClass("siebui-ctrl-label "+(q.className||""));if(q.value){q.el.eq(o).append('<a  id ="'+q.id+'_mb" href="javascript:void(0)" >'+q.value+"</a>")}}}}else{p+='<label class="siebui-ctrl-label ${CLASSNAME}" ${ID} ${ATTRS} >${VALUES}</label>'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_FILE"):p+='<input type=\'file\' class="siebui-ctrl-file ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"");break;case g.get("SWE_CTRL_RADIO"):p+="<input type='radio' role='radio' class=\"siebui-ctrl-radio ${CLASSNAME}\" ${ID} ${ATTRS} value=\"${VALUES}\" />".replace("${VALUES}",q.value||"");break;case g.get("SWE_CTRL_CURRENCY_CALC"):if(q.el){for(var o=0,m=q.el.length;o<m;o++){if(q.el.eq(o).next("span.siebui-icon-currency").length===0){q.el.eq(o).addClass("siebui-ctrl-currency siebui-input-popup siebui-ctrl-rtl "+(SiebelApp.S_App.GetDirection()?"siebui-rtl-input-popup ":" ")+q.className).after('<span class="siebui-icon-currency" id="'+q.id+'_icon" aria-label="'+k+'" />');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.eq(o).attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}}else{p+='<input type=\'text\' class="siebui-ctrl-rtl ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_PWD"):if(q.el){q.el.addClass("siebui-ctrl-password"+(q.className||""))}else{p+='<input type="password" class="siebui-ctrl-password ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"")}break;case g.get("SWE_CTRL_TEXT"):if(q.el){q.el.addClass("siebui-ctrl-input "+(q.className||""));if(q.addIcon&&q.el.next("span.siebui-icon-detail").length===0){q.el.removeClass("siebui-ctrl-input").addClass("siebui-ctrl-detail siebui-input-popup"+ +(SiebelApp.S_App.GetDirection()?"siebui-rtl-input-popup ":" ")).after('<span class="siebui-icon-detail" id="'+q.id+'_icon" aria-label="'+b+'" />');if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){q.el.attr("aria-describedby",(q.el.attr("aria-describedby")||"")+" "+q.id+"_icon")}}}else{p+='<input type="text" class="siebui-ctrl-input ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"")}break;default:p+='<input type=\'text\' class="siebui-ctrl-text ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}",q.value||"");break}return p.replace("${CLASSNAME}",q.className||"").replace("${ID}",q.id?'id="'+q.id+'"':"").replace("${ATTRS}",q.attrs||"")}return new h()}());return SiebelAppFacade.HTMLTemplateManager})};