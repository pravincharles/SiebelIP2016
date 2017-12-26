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
/* 8.1.1.14SIA[23044]PATCHSET8 */
if(typeof(SiebelAppFacade.edetailerpreview)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.edetailerpreview");define("siebel/edetailerpreview",["siebel/jqgridrenderer"],function(){SiebelAppFacade.edetailerpreview=(function(){var a=SiebelJS.Dependency("SiebelApp.Constants");function b(d){var c=d;this.GetPM=function(){return c};SiebelAppFacade.edetailerpreview.superclass.constructor.call(this,d)}SiebelJS.Extend(b,SiebelAppFacade.JQGridRenderer);b.prototype.Init=function(){SiebelAppFacade.edetailerpreview.superclass.Init.call(this)};b.prototype.ShowUI=function(c){SiebelAppFacade.edetailerpreview.superclass.ShowUI.call(this,c)};b.prototype.BindEvents=function(c){SiebelAppFacade.edetailerpreview.superclass.BindEvents.call(this,c);var c=this.GetPM().Get("GetControls");if(c.Exit){var d=$("#"+c.Exit.GetInputName()+"_Ctrl");d.on("click",{ctx:this},function(e){$("#_sweappmenu").show();$(".siebui-button-toolbar").show();$("#_swethreadbar").show();$("#_swescrnbar").show();$(".siebui-mobile").show();$(".AppletMenu").show();$(".siebui-applet-header").show();$(".AppletButtons").show();$(".siebui-banner").show();$(".siebui-view-container").removeClass("siebui-view-margin-top");$("#_sweview").removeClass("siebui-player-scroll");$("#_sweclient").removeClass("siebui-player-scroll");$("#_swecontent").removeClass("siebui-edetail-top")})}};b.prototype.BindData=function(c){SiebelAppFacade.edetailerpreview.superclass.BindData.call(this,c)};return b}());return"SiebelAppFacade.edetailerpreview"})};