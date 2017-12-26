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
if(typeof(SiebelAppFacade.QCSRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.QCSRenderer");define("siebel/qcsrenderer",["siebel/phyrenderer","siebel/errorobjectrenderer"],function(){SiebelAppFacade.QCSRenderer=(function(){function a(c){SiebelAppFacade.QCSRenderer.superclass.constructor.call(this,c)}SiebelJS.Extend(a,SiebelAppFacade.PhysicalRenderer);a.prototype.Init=function(){SiebelAppFacade.QCSRenderer.superclass.Init.call(this);var c=this.GetPM();c.AttachPMBinding("newsimnumisempty",b);c.AttachPMBinding("oldsimnumisempty",b)};function b(c){var d=c==="oldsimnumisempty"?this.Get("old_sim_error_msg"):this.Get("new_sim_error_msg");SiebelAppFacade.ErrorObjectRenderer.prototype.ShowError(d)}a.prototype.ShowUI=function(){SiebelAppFacade.QCSRenderer.superclass.ShowUI.call(this);$("#s_"+this.GetPM().Get("GetFullId")+"_div").addClass("siebui-telco-no-title");var h=this.GetPM(),c=h.Get("GetControls"),g=c.GenerateOrder.GetInputName(),e=c.NewSimNumber.GetInputName(),f=h.Get("newsim_defaulttext"),d='<button class="siebui-quick-applet-close-btn siebui-icon-close" id="qcsclosebtn"></button>';$("[Name*="+e+"]").attr("placeholder",f);$("#"+g+"_Ctrl").after($(d))};a.prototype.BindEvents=function(){SiebelAppFacade.QCSRenderer.superclass.BindEvents.call(this);var g=this.GetPM(),d=g.Get("GetControls"),c=d.SerialNumber.GetInputName(),e=d.NewSimNumber.GetInputName(),h=d.GenerateOrder,f=d.GenerateOrder.GetInputName();$("#qcsclosebtn").bind("click",function(){$("#qcsapplet").removeClass("siebui-show-quick-applet");$("[Name*="+c+"]").val("");$("[Name*="+e+"]").val("")});$("#"+f+"_Ctrl").bind("click",{ctx:this,ctrl:h,oldsimnumberhandler:c,newsimnumberhandler:e},function(i){var l=i.data.ctx.GetPM();var j=$("[Name*="+c+"]").val(),k=$("[Name*="+e+"]").val();l.SetProperty("oldsimnumval",j);l.SetProperty("newsimnumval",k)})};return a}());return"SiebelAppFacade.QCSRenderer"})};