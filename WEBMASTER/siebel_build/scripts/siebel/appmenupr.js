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
if(typeof(SiebelAppFacade.AppMenuPR)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.AppMenuPR");define("siebel/appmenupr",["siebel/appletmenupr"],function(){SiebelAppFacade.AppMenuPR=(function(){function a(b){SiebelAppFacade.AppMenuPR.superclass.constructor.call(this,b)}SiebelJS.Extend(a,SiebelAppFacade.AppletMenuPR);a.prototype.ShowUI=function(){var e=this.GetPM();var f=e.Get("GetConcreteMenu");var d=this.GenMenuMarkup(f,"siebui-appmenu");$("#"+e.Get("GetPlaceHolder")).attr("style","").append(d).menubar({}).bind("menuselect",{ctx:this},function(i,h){var g=i.data.ctx;if(h&&h.item){var j=g.FindCommand(g.GetPM().Get("GetConcreteMenu"),h.item.eq(0).attr("data-caption"));if(j!==undefined){g.GetPM().OnControlEvent("HandleMenuClick",j)}}}).bind("menubarbeforeshow",{ctx:this},function(g,h){g.data.ctx.GetPM().OnControlEvent("BeforeMenuShow")});$("#"+e.Get("GetPlaceHolder")).find("ul").each(function(){$(this).attr("role","menubar")});var c=e.Get("GetLabel");if(c!==""){$("#"+e.Get("GetPlaceHolder")).attr("title",c+" "+SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MENU_TITLE")).attr("tabindex","0")}if(SiebelApp.S_App.GetDirection()){$("#"+e.Get("GetPlaceHolder")).parent().addClass("siebui-rtl-element-right");$("#"+e.Get("GetPlaceHolder")).data("ui-menubar").options.position={my:"right top",at:"right bottom"}}var b=$("#"+e.Get("GetPlaceHolder")).parent();b.attr({role:"navigation",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPMENU_TITLE")});b.parent().parent().removeAttr("title");b.parent().parent().removeAttr("role");b=null;this.hasShown=true;f=null;d=null;this.InjectQTPInfo($("#"+e.Get("GetPlaceHolder")))};a.prototype.BindEvents=function(){};a.prototype.BindData=function(){};a.prototype.ShowMenu=function(){if(this.hasShown){var b=this.GetPM();var c=b.Get("GetConcreteMenu");this.UpdateMenuItems(c,$("#"+b.Get("GetPlaceHolder")))}};return a}());return SiebelAppFacade.AppMenuPR})};