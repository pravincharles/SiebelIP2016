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
if(typeof(SiebelAppFacade.ReportPresentationModel)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.ReportPresentationModel");define("siebel/reportpmodel",["siebel/pmodel"],function(){SiebelAppFacade.ReportPresentationModel=(function(){var n=SiebelJS.Dependency("SiebelApp.Constants");SiebelJS.Extend(s,SiebelAppFacade.PresentationModel);var d=n.get("REPORT_INFO");var h=n.get("REPORT_OUTPUT_TYPE");var b=n.get("REPORT_LOCALE");var l=n.get("REPORT_SCHEDULE_MODE");var p=n.get("REPORT_MONTH_INFO");var f=n.get("REPORT_WEEK_INFO");var m=n.get("REPORT_PARAM_INFO");var t=n.get("REPORT_RESPONSIBILITY_INFO");var u={};var g;function s(){SiebelAppFacade.ReportPresentationModel.superclass.constructor.call(this,{GetName:function(){return"ReportObject"}});this.AddProperty("ReportMap","");this.AddProperty("ReportList","");this.AddProperty("ReportOutputType","");this.AddProperty("ReportLocale","");this.AddProperty("ReportScheduleMode","");this.AddProperty("ReportWeekInfo","");this.AddProperty("ReportMonthInfo","");this.AddProperty("ReportWeekMap","");this.AddProperty("ReportMonthMap","");this.AddProperty("reportScheduleModeMap","");this.AddProperty("ReportParamMap","")}SiebelJS.Extend(s,SiebelAppFacade.PresentationModel);s.prototype.Init=function(){this.AddProperty("ShowParameters",false);this.AddProperty("ShowMultiSelect",false);this.AddProperty("ShowHideControls","");this.AddProperty("ReBindData","");a.call(this);this.AddMethod("GetReportParamData",function(){return g});this.AddMethod("GetReportData",function(v){return u[v]});this.AddMethod("SetReportData",function(v,w){u[v]=w});this.AddMethod("SetReportArrayData",function(w,y,v){if(typeof(y)==="string"){var x=[];if(typeof(u[w])==="object"){x=u[w]}if(v==="Add"){x.push(y)}else{if(v==="Remove"){x.splice($.inArray(y,x),1)}}u[w]=x}});this.AddMethod("SetReportParamData",function(v,w){if(typeof(g)==="undefined"){g=CCFMiscUtil_CreatePropSet();g.SetType("UserParamValues")}if(typeof(v)==="undefined"){var x;g=x}else{g.SetProperty(v,w)}});this.AddMethod("InvokeServiceMethod",function(w,x,y){var v=SiebelApp.S_App.GetService(n.get("NAME_REPORTUISVC"));if(v){y=v.InvokeMethod(w,x,true)}});this.AttachEventHandler(n.get("REPORT_PANE_CLOSE"),function(){var w=CCFMiscUtil_CreatePropSet();var v=CCFMiscUtil_CreatePropSet();w.SetProperty(n.get("SWE_VIEW_ID_STR"),n.get("REPORTPANE_VIEWNAME"));this.ExecuteMethod("InvokeServiceMethod",n.get("METH_GETREPORTPANE"),w,v);SiebelApp.S_App.UnregisterExtObject("ReportPane")});this.AttachEventHandler(n.get("REPORT_SUBMIT"),function(){var v=CCFMiscUtil_CreatePropSet();var G=CCFMiscUtil_CreatePropSet();var I=CCFMiscUtil_CreatePropSet();var D=CCFMiscUtil_CreatePropSet();var w=g;var E=CCFMiscUtil_CreatePropSet();var J=CCFMiscUtil_CreatePropSet();var y=u.SelectedReportName;var F=u.SelectedReportOptType;var C=u.SelectedReportLocale;var z=u.ReporCustomName;I.SetProperty("ReportExecutableName",y);I.SetProperty("ReportOutputType",F);I.SetProperty("ReportOutputLocale",C);I.SetProperty("ReportOutputLang",C);if(z){I.SetProperty("ReportCustomName",z)}v=I.Clone();var x=u.ScheduleReportFrequency;if(typeof(x)==="undefined"||x===""){if(typeof(w)!="undefined"){I.AddChild(w)}this.ExecuteMethod("InvokeServiceMethod",n.get("REPORT_SUBMIT"),I,D)}else{var H=u.ScheduleWeekDays;var B=u.ScheduleMonths;E.SetType("SchedulerWeekDays");for(var A=0;typeof(H)!="undefined"&&A<H.length;A++){E.SetProperty(H[A],H[A].toUpperCase())}v.AddChild(E);J.SetType("SchedulerMonthsInfo");for(var A=0;typeof(B)!="undefined"&&A<B.length;A++){J.SetProperty(B[A],B[A].toUpperCase())}v.AddChild(J);if(z){v.SetProperty("jobName",z)}else{v.SetProperty("jobName",y)}v.SetProperty("publicValue",u.SchedulePublic);v.SetProperty("saveData",u.ScheduleSaveData);v.SetProperty("saveOutput",u.ScheduleSaveOutput);v.SetProperty("scheduleReportFrequency",x);v.SetProperty("runTimeHour",u.RunTimeHour);v.SetProperty("runTimeMinute",u.RunTimeMinute);v.SetProperty("runDate",u.ScheduleRunDate);v.SetProperty("startDate",u.ScheduleStartDate);v.SetProperty("endDate",u.ScheduleEndDate);v.SetProperty("MonthDaysInfo",u.ScheduleDates);if(typeof(w)!="undefined"){v.AddChild(w)}this.ExecuteMethod("InvokeServiceMethod",n.get("SUBMIT_SCHEDULE_REPORT"),v,G)}})};s.prototype.Setup=function(v){v.SetProperty("SWE_OUI_RENDERER","ReportPhyRenderer");SiebelAppFacade.ReportPresentationModel.superclass.Setup.call(this,v);k.call(this,v)};s.prototype.HandleNotify=function(v){a.call(this);var w;g=w;$("#reportParameter").empty();k.call(this,v);this.SetProperty("ReBindData","HandleNotify")};function k(L){u={};var I=[];var G={};var y={};var B={};var A={};var H=[];var D=[];var F;var w;var x=[];var v=[];var J=[];var z={};var C={};for(var K=0,M=L.GetChildCount();K<M;K++){var E=L.GetChild(K);switch(E.GetType()){case d:F=q.call(this,E);I.push(F.NAME);G[F.NAME]=F;break;case h:H=i.call(this,E);break;case b:D=j.call(this,E);break;case l:r.call(this,E,x,z);break;case t:e.call(this,E,C);break;case p:c.call(this,E,"",v,"",B);break;case f:c.call(this,E,J,"",A,"");break;case m:w=o.call(this,E);value=E.GetValue();if(w.length>0){y[value]=w}break}}this.SetProperty("ReportMap",G);this.SetProperty("ReportList",I);this.SetProperty("ReportOutputType",H);this.SetProperty("ReportLocale",D);this.SetProperty("ReportScheduleMode",x);this.SetProperty("ReportWeekInfo",J);this.SetProperty("ReportMonthInfo",v);this.SetProperty("ReportWeekMap",A);this.SetProperty("ReportMonthMap",B);this.SetProperty("reportScheduleModeMap",z);this.SetProperty("ReportParamMap",y);this.SetProperty("ReportResponsibilitiesMap",C)}function o(z){if(z.GetType()!==m){return}var B;var w;var x=[];for(var y=0,v=z.GetChildCount();y<v;y++){var A=z.GetChild(y);x.push(A)}return x}function q(A){if(A.GetType()!==d){return}var z=true;var B;var w;var x=[];for(var y=0,v=A.GetPropertyCount();y<v;y++){if(z){B=A.GetFirstProperty();z=false}else{B=A.GetNextProperty()}w=A.GetProperty(B);if(B==="Report Name"){x.NAME=w}else{if(B==="ReportOutputType"){x.OUTPUT_TYPE=w}else{if(B==="Report Name LIC"){x.NAME_LIC=w}else{if(B==="ReportOutputLang"){x.LANG=w}else{if(B==="ReportOutputLocale"){x.LOCALE=w}else{if(B==="ReportScheduleMode"){x.SCHEDULEMODE=w}}}}}}}return x}function i(y){if(y.GetType()!==h){return}var x=[];for(var w=0,v=y.GetChildCount();w<v;w++){var z=y.GetChild(w);x.push(z.GetType())}return x}function j(y){if(y.GetType()!==b){return}var x=[];for(var w=0,v=y.GetChildCount();w<v;w++){var z=y.GetChild(w);x.push(z.GetType())}return x}function r(x,A,z){if(x.GetType()!==l){return}A.push("");for(var w=0,v=x.GetChildCount();w<v;w++){var y=x.GetChild(w);A.push(y.GetType());z[y.GetType()]=y.GetValue()}return s}function e(z,B){var y=true;var A;var w;if(z.GetType()!==t){return}for(var x=0,v=z.GetPropertyCount();x<v;x++){if(y){A=z.GetFirstProperty();y=false}else{A=z.GetNextProperty()}w=z.GetProperty(A);B[A]=w}return s}function c(B,w,D,E,F){var x=true;var z;var v;for(var y=0,A=B.GetChildCount();y<A;y++){var C=B.GetChild(y);if(typeof(w)==="object"){w.push(C.GetType());E[C.GetType()]=C.GetValue()}else{if(typeof(D)==="object"){D.push(C.GetType());
F[C.GetType()]=C.GetValue()}}}}function a(){this.SetProperty("ReportMap",{});this.SetProperty("ReportList",[]);this.SetProperty("ReportOutputType",{});this.SetProperty("ReportLocale",{});this.SetProperty("ReportScheduleMode","");this.SetProperty("ReportWeekInfo",[]);this.SetProperty("ReportMonthInfo",[]);this.SetProperty("ReportParamMap",{})}return s}());return"SiebelAppFacade.ReportPresentationModel"})};