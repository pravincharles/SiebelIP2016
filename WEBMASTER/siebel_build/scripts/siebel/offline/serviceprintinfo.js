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
if(typeof(SiebelApp.serviceprintinfo)==="undefined"){SiebelJS.Namespace("SiebelApp.serviceprintinfo");define("siebel/offline/serviceprintinfo",["siebel/offline/model"],function(){var b={};var a=SiebelApp.Offlineconstants;var c=SiebelApp.OfflineUtils;var d=a.get("PRT_BC_MAX_FETCH_SIZE");SiebelApp.serviceprintinfo=(function(){function g(h){}SiebelJS.Extend(g,SiebelApp.ServiceModel);g.prototype.GetServicePrintInfo=function(i){var j="";var h=CCFMiscUtil_CreatePropSet();this.GetPrintInfo(h);h.SetProperty("Invoked",true);$.setReturnValue({err:false,retVal:h})};function f(h,m,j){var l=false;var n=h.GetBusComp(m);if(n!==null||typeof(n)!=="undefined"){if(n.GetWSSize()===d){l=true}}n.SetWSSize(d);var k=SiebelApp.S_App.GetActiveBusObj();var p=k.GetBusCompByName(m);if(typeof(p)!="undefined"){var i=p.GetSearchSpec();if(typeof(p.GetParentBusComp())==="undefined"||p.GetParentBusComp()===null){var o=p.GetWS()[p.GetActiveRow()]["Id"];n.SetFldSearchSpec("Id",o)}else{n.SetSearchSpec(i)}}n.ActivateFields();if(!l){n.Execute()}$.callback(this,function(A){if(!A.err){n.Home();var H=k.GetBCArray();var E=[];for(var x=0;x<H.length;x++){var w=H[x];if(w===null||typeof(w)==="undefined"){continue}var D=w.GetName();var K=w.GetParentBusComp();if(K===null||typeof(K)==="undefined"){continue}var q=K.GetName();if(q===m){E.push(D)}}var B=n.GetWS();var t=CCFMiscUtil_CreatePropSet();t.SetType(m);t.SetValue("bc");j.AddChild(t);for(var L=0;L<B.length;L++){var F=CCFMiscUtil_CreatePropSet();F.SetType("bcr");t.AddChild(F);var J=p.GetFieldMap();for(var I in J){var r=B[L][I.split(" ").join("")];var y=J[I].GetDataType();if(SiebelApp.S_App.LocaleObject.m_sCurrencyCode===""&&y==="currency"){var v=J[I].GetCurrField();var C=v.split("|");if(typeof(C[0])!=="undefined"&&typeof(B[L][C[0].split(" ").join("")])!=="undefined"&&B[L][C[0].split(" ").join("")]!==""){SiebelApp.S_App.LocaleObject.m_sCurrencyCode=B[L][C[0].split(" ").join("")];SiebelApp.S_App.LocaleObject.m_sCurrency=B[L][C[0].split(" ").join("")]}}r=SiebelApp.S_App.LocaleObject.StringToFormatted(y,r,"");F.SetProperty(I,r)}n.PositionById(B[L]["Id"]);var z=0;var u=function(N){var M=[];M.push(h);M.push(E[N]);M.push(F);return M};var G=function(M){if(!M.err){c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"BusComp Execution"+E[z]+"Successful","SiebelApp.serviceprintinfo","GetPrintInfo"])}else{c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"BusComp Execution"+E[z]+"Failure","SiebelApp.serviceprintinfo","GetPrintInfo"])}z++};var s={execute:f,preExecute:u,postExecute:G,iterations:E.length,executeScope:this};if(E.length>0){$.eachAsyncOp(this,s)}}}})}function e(h){var i=SiebelApp.S_App.GetActiveView().GetName()+"/PrintTemplate";c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"start GetTemplateFile for view : "+i,"SiebelApp.serviceprintinfo","GetPrintInfo"]);SiebelApp.BrowserCacheMgr.DiscoverMetadata("","","gvl",i,"resrs");$.callback(this,function(l){if(!l.err){var k=CCFMiscUtil_CreatePropSet();var j=l.retVal;if(typeof(j)!=="undefined"&&j!==null){k.DecodeFromString(j);h.AddChild(k)}}else{c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"end GetTemplateFile for view: "+i,"SiebelApp.serviceprintinfo","GetPrintInfo"])}})}g.prototype.GetPrintInfo=function(l){c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"start GetPrintInfo","SiebelApp.serviceprintinfo","GetPrintInfo"]);var i=CCFMiscUtil_CreatePropSet();var h=SiebelApp.S_App.Model.GetBusObj(SiebelApp.S_App.GetActiveBusObj().GetName());var j=SiebelApp.S_App.GetActiveBusObj();var p=j.GetBCArray();var m="";for(var n=0;n<p.length;n++){var o=p[n];if(typeof(o)==="undefined"){continue}var k=o.GetParentBusComp();if(typeof(k)==="undefined"||k===null){m=o.GetName();break}}l.AddChild(i);l.SetType("PRT");i.SetType("prtda");e.call(this,l);$.callback(this,function(){c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"start GetPrintData","SiebelApp.serviceprintinfo","GetPrintInfo"]);f.call(this,h,m,i);$.callback(this,function(){c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"end GetPrintData","SiebelApp.serviceprintinfo","GetPrintInfo"]);var q=[];var s=l.EncodeAsString();q.push(s);q.push("success");var r=SiebelApp.S_App;r.ProcessResponse.apply(r,q);h=null;l=null;c.CcfLogEvent([a.get("LOG_EVT_CLIENT_SYS"),"end GetPrintInfo","SiebelApp.serviceprintinfo","GetPrintInfo"])})})};return new g}());return"SiebelAppFacade.SiebelApp.serviceprintinfo"})};