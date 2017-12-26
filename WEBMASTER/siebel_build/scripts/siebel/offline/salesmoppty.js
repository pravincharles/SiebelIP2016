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
if(typeof(SiebelApp.salesmoppty)==="undefined"){SiebelJS.Namespace("SiebelApp.salesmoppty");define("siebel/offline/salesmoppty",["siebel/offline/model","siebel/offline/servicemodel"],function(){var b={};var a=SiebelApp.Offlineconstants;SiebelJS.Log("FILE LOADED");b[a.get("DOUIREG_OBJ_NAME")]="SHCE Sales Opportunity Quote List Applet - Mobile";b[a.get("DOUIREG_OBJ_TYPE")]=a.get("DOUIREG_OBJ_TYPEAPPLET");b[a.get("DOUIREG_OBJ_MTHD")]="DoCanInvokeMethod";b[a.get("DOUIREG_SRVC_NAME")]="salesmoppty";b[a.get("DOUIREG_SRVC_MTDH")]="DoCanInvokeMethod";b[a.get("DOUIREG_EXT_TYPE")]=a.get("DOUIREG_EXT_TYPEPRE");SiebelApp.S_App.Model.ServiceRegistry(b);b[a.get("DOUIREG_OBJ_NAME")]="SHCE Sales Opportunity Quote List Applet - Mobile";b[a.get("DOUIREG_OBJ_TYPE")]=a.get("DOUIREG_OBJ_TYPEAPPLET");b[a.get("DOUIREG_OBJ_MTHD")]="DoInvokeMethod";b[a.get("DOUIREG_SRVC_NAME")]="salesmoppty";b[a.get("DOUIREG_SRVC_MTDH")]="DoInvokeMethod";b[a.get("DOUIREG_EXT_TYPE")]=a.get("DOUIREG_EXT_TYPEPRE");SiebelApp.S_App.Model.ServiceRegistry(b);b[a.get("DOUIREG_OBJ_NAME")]="Opportunity Product";b[a.get("DOUIREG_OBJ_TYPE")]=a.get("DOUIREG_OBJ_TYPEBUSCOMP");b[a.get("DOUIREG_OBJ_MTHD")]="WriteRecord";b[a.get("DOUIREG_SRVC_NAME")]="salesmoppty";b[a.get("DOUIREG_SRVC_MTDH")]="SetCfgVersion";b[a.get("DOUIREG_EXT_TYPE")]=a.get("DOUIREG_EXT_TYPEPRE");SiebelApp.S_App.Model.ServiceRegistry(b);b[a.get("DOUIREG_OBJ_NAME")]="Opportunity";b[a.get("DOUIREG_OBJ_TYPE")]=a.get("DOUIREG_OBJ_TYPEBUSCOMP");b[a.get("DOUIREG_OBJ_MTHD")]="WriteRecord";b[a.get("DOUIREG_SRVC_NAME")]="salesmoppty";b[a.get("DOUIREG_SRVC_MTDH")]="PredefaultSalesMethod";b[a.get("DOUIREG_EXT_TYPE")]=a.get("DOUIREG_EXT_TYPEPRE");SiebelApp.S_App.Model.ServiceRegistry(b);b[a.get("DOUIREG_OBJ_NAME")]="Opportunity";b[a.get("DOUIREG_OBJ_TYPE")]=a.get("DOUIREG_OBJ_TYPEBUSCOMP");b[a.get("DOUIREG_OBJ_MTHD")]="NewRecord";b[a.get("DOUIREG_SRVC_NAME")]="salesmoppty";b[a.get("DOUIREG_SRVC_MTDH")]="OppNewRecord";b[a.get("DOUIREG_EXT_TYPE")]=a.get("DOUIREG_EXT_TYPEPOST");SiebelApp.S_App.Model.ServiceRegistry(b);SiebelApp.salesmoppty=(function(){function d(e){}SiebelJS.Extend(d,SiebelApp.ServiceModel);d.prototype.DoCanInvokeMethod=function(f){var e=CCFMiscUtil_CreatePropSet();var g="";g=f.GetProperty("MethodName").toString();if(g==="Quote"){e.SetProperty("Invoked",true);e.SetProperty("RetVal",true);$.setReturnValue({err:false,retVal:e})}else{e.SetProperty("Invoked",false);e.SetProperty("RetVal",false);$.setReturnValue({err:false,retVal:e})}};d.prototype.DoInvokeMethod=function(f){var g="";var e=CCFMiscUtil_CreatePropSet();g=f.GetProperty("MethodName").toString();if(g==="Quote"){this.AddQuote();$.callback(this,function(h){e.SetProperty("Invoked",true);$.setReturnValue({err:false,retVal:e})})}else{e.SetProperty("Invoked",false);$.setReturnValue({err:false,retVal:e})}};d.prototype.PredefaultSalesMethod=function(k){SiebelJS.Log("Invoked Service Method PredefaultSalesMethod");var g;var f=CCFMiscUtil_CreatePropSet();var j,i,e,h;g=this.GetContext();g.FieldValue("Primary Revenue Amount");$.callback(this,function(l){j=l.retVal;g.FieldValue("Primary Revenue Cost Amount");$.callback(this,function(m){i=m.retVal;g.FieldValue("Primary Revenue Margin Amount");$.callback(this,function(n){e=n.retVal;h=j-i;if((h!=e)){g.SetFieldValue("Primary Revenue Margin Amount",h,true);$.callback(this,function(o){if(!o.err){if(g!=null&&typeof(g)!=="undefined"){g=null}$.setReturnValue({err:false,retVal:f})}else{if(g!=null&&typeof(g)!=="undefined"){g=null}$.setReturnValue({err:o.err,retVal:o.retVal})}})}else{if(g!=null&&typeof(g)!=="undefined"){g=null}}})})})};d.prototype.OppNewRecord=function(g){var f=CCFMiscUtil_CreatePropSet();SiebelJS.Log("Invoked Service Method PredefaultSalesMethod");var e;e=this.GetContext();e.GetPickList("Sales Method");$.callback(this,function(i){if(!i.err){var h=i.retVal;h.SetFldSearchSpec("Sales Method","");$.callback(this,function(j){h.Execute();$.callback(this,function(k){if(!k.err){h.Home();$.callback(this,function(l){if(h.CheckActiveRow()===true){h.PickCurrentRow();$.callback(this,function(m){if(!k.err){if(e!=null&&typeof(e)!=="undefined"){e=null}if(h!=null&&typeof(h)!=="undefined"){h=null}$.setReturnValue({err:false,retVal:f})}else{if(e!=null&&typeof(e)!=="undefined"){e=null}if(h!=null&&typeof(h)!=="undefined"){h=null}$.setReturnValue({err:k.err,retVal:k.retVal})}})}})}else{if(e!=null&&typeof(e)!=="undefined"){e=null}if(h!=null&&typeof(h)!=="undefined"){h=null}$.setReturnValue({err:k.err,retVal:k.retVal})}})})}else{if(e!=null&&typeof(e)!=="undefined"){e=null}$.setReturnValue({err:i.err,retVal:i.retVal})}})};function c(i,m,p){SiebelJS.Log("AddQuote Line Items Method");var n;var t;var o;var q;var l;var g;var k="Quote Item";var u="Opportunity Product";var f="Y";var e="N";var r=0;var h=0;var s;var j=SiebelApp.S_App.Model.GetBusObj("Opportunity");var v=j.GetBusComp("Opportunity Product");v.ActivateField("Quotable");v.SetSearchSpec("Oppty Id",i);v.Execute();$.callback(this,function(w){v.Home();$.callback(this,function(y){r=v.GetRecordCount();var x=SiebelApp.S_App.Model.GetBusObj("Quote");s=x.GetBusComp("Quote");o=x.GetBusComp("Quote Item");s.SetSearchSpec("Id",p);s.Execute();$.callback(this,function(z){s.Home();var A=s.GetRecordCount();$.callback(this,function(B){var C=function(){v.FieldValue("Quotable");$.callback(this,function(E){var D=E.retVal;if(D==="Y"){v.FieldValue("Product Id");$.callback(this,function(G){var F=G.retVal;v.FieldValue("Product Quantity");$.callback(this,function(I){var H=I.retVal;o.SetExecuted(true);$.callback(this,function(J){o.Home();$.callback(this,function(K){o.NewRecord();$.callback(this,function(L){o.SetFieldValue("Quote Id",p,true);$.callback(this,function(M){o.SetFieldValue("Extended Quantity Requested",H,true);$.callback(this,function(N){o.SetFieldValue("Quantity Requested",H,true);$.callback(this,function(O){h=h+1;o.SetFieldValue("Line Number",h,true);$.callback(this,function(P){o.GetPickList("Product");$.callback(this,function(R){var Q=R.retVal;Q.SetSearchSpec("[Id] = '"+F+"'");$.callback(this,function(S){Q.Execute();$.callback(this,function(T){Q.Home();$.callback(this,function(U){if(Q.CheckActiveRow()===true){Q.PickCurrentRow();$.callback(this,function(V){o.SetCommitPending(true);o.WriteRecord();$.callback(this,function(W){})})}})})})})})})})})})})})})})}});$.callback(this,function(D){v.NextRecord();$.callback(this,function(F){var E=F.err;if(!E){C.call(this)}else{SiebelApp.S_App.Model.ReleaseBO(j);SiebelApp.S_App.Model.ReleaseBO(x)}})})};if(v.CheckActiveRow()===true){C.call(this)}else{SiebelApp.S_App.Model.ReleaseBO(j);SiebelApp.S_App.Model.ReleaseBO(x)}})})})})}d.prototype.AddQuote=function(){SiebelJS.Log("AddQuote Header Method");var f;var m;var e;var o;var l;var n;var i;var j;var g;var k;var h;f=this.GetContext().GetBusComp();o=f.GetParentBusComp();o.FieldValue("Id");$.callback(this,function(p){n=p.retVal;o.FieldValue("Account Id");$.callback(this,function(q){i=q.retVal;f.Execute();$.callback(this,function(r){f.NewRecord();$.callback(this,function(s){f.FieldValue("Id");
$.callback(this,function(t){k=t.retVal;f.SetFieldValue("Account Id",i,true);$.callback(this,function(u){f.SetFieldValue("Name",k,true);$.callback(this,function(v){f.SetCommitPending(true);f.WriteRecord();$.callback(this,function(w){f.FieldValue("Id");$.callback(this,function(x){h=x.retVal;if(f!=null&&typeof(f)!=="undefined"){f=null}c(n,i,h);$.callback(this,function(y){})})})})})})})})})})};d.prototype.SetCfgVersion=function(h){var g=this.GetContext();var f=CCFMiscUtil_CreatePropSet();var e=1;g.ActivateField("Cfg Version");g.SetFieldValue("Cfg Version",e,true);$.callback(this,function(i){if(g!=null&&typeof(g)!=="undefined"){g=null}$.setReturnValue({err:false,retVal:f})})};return d}());return"SiebelAppFacade.salesmoppty"})};