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
if(typeof(SiebelAppFacade.fsDispatchBoardPM)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.fsDispatchBoardPM");define("siebel/fsdispatchboardpmodel",["siebel/ganttpmodel"],function(){SiebelAppFacade.fsDispatchBoardPM=(function(){var E=SiebelJS.Dependency("SiebelApp.Constants"),B=E.get("SWE_GANTT_DAYINFO"),K=E.get("SWE_GANTT_START_DATE"),v=E.get("SWE_GANTT_TIME_SCALE"),u=E.get("SWE_GANTT_STARTMILLIS"),I=E.get("SWE_GANTT_ACTIVITY_START_TIME"),J=E.get("SWE_GANTT_ACTIVITY_END_TIME"),c=E.get("SWE_GANTT_ACTIVITY_NO_DAYS_IN_WEEK"),p=E.get("SWE_GANTT_ACTIVITY_WEEK_DAY_START"),f=E.get("SWE_FS_DISPATCHBOARD_ACTIVITY_MINOR_TIME_SCALE"),w=E.get("SWE_FS_DISPATCHBOARD_ACTIVITY_MAJOR_TIME_SCALE"),m=E.get("SWE_GANTT_BOTTOMAXIS"),z=E.get("SWE_GANTT_NOOFHRS"),e=E.get("SWE_GANTT_ENDMILLIS"),j=E.get("SWE_GANTT_DAY_HOUR"),A=E.get("SWE_GANTT_DAY_TWOHOUR"),C=E.get("SWE_GANTT_DAY_DAY_FOURHOUR"),g=E.get("SWE_GANTT_DAY_DAY_HALFHOUR"),D=E.get("SWE_GANTT_DAY_DAY_QUARTERHOUR"),d=E.get("SWE_GANTT_DAY_DAYPART"),q=E.get("SWE_GANTT_WEEK_DAY_DAYPART"),y=E.get("SWE_GANTT_MONTH_DOW_DAYPART"),b=E.get("SWE_GANTT_WEEK_DAY"),H=E.get("SWE_GANTT_MONTH_DAY"),n=E.get("SWE_GANTT_YEAR_MONTH"),k=E.get("SWE_GANTT_YEAR_WEEK"),x=E.get("SWE_GANTT_MONTH_WEEK"),o=E.get("SWE_GANTT_MONTH_DOW"),F={1:7,2:1,4:1,32:35,64:31,128:7,256:35,512:1,1024:1,2048:1,4096:1,8192:366,16384:366,32768:35},l={1:6,2:0,4:0,32:28,64:30,128:6,256:28,512:0,1024:0,2048:0,4096:0,8192:365,16384:365,32768:28},t=E.get("SWE_GANTT_RENDER_INFO"),r=E.get("SWE_GANTT_ACTIVITY_EARLIEST_LATEST_VIOLATION"),Q=E.get("SWE_GANTT_LOAD_ACTIVITY_INTO_ABS"),M=E.get("SWE_GANTT_SERVICE_REGION_ID");var P="";var N={};N["Year/Month"]=8192;N["Year/Week"]=16384;N["Month/Week"]=32768;N["Month/Day"]=64;N["Week/Day"]=1;N["Day/4 Hours"]=1024;N["Day/2 Hours"]=512;N["Day/Hour"]=4;N["Day/Half Hour"]=2048;N["Day/Quarter Hour"]=4096;function a(){SiebelAppFacade.fsDispatchBoardPM.superclass.constructor.apply(this,arguments)}SiebelJS.Extend(a,SiebelAppFacade.GanttPresentationModel);a.prototype.Init=function(){SiebelAppFacade.fsDispatchBoardPM.superclass.Init.call(this);this.AddProperty(I,"");this.AddProperty(J,"");this.AddProperty(c,"");this.AddProperty(p,"");this.AddProperty(f,"");this.AddProperty(w,"");this.AddProperty(K,"");this.AddProperty(B,"");this.AddProperty(m,"");this.AddProperty(v,"");this.AddProperty(z,"");this.AddProperty(u,"");this.AddProperty(e,"");this.AddProperty(t,"");this.AddMethod("InvokeMethod",h,{sequence:true,scope:this});this.AddProperty("ResScheduleEvents","");this.AddProperty("ResEventsBak","");this.AddProperty("Schedulerecordset","");this.AddProperty("GANTTELSV","");this.AddProperty("GANTTLOADACT","");this.AddProperty("GANTTSRID","");this.AddProperty("pmrecordset","");this.AddProperty("NotifyTSButtonClk","");this.AddProperty("isDispatchBoard","TRUE");this.AddMethod("prepareEventInfo",L,{scope:this,sequence:true});this.AddMethod("prepareEventInfo",i,{scope:this,sequence:false});this.AddMethod("setDefaults",s,{scope:this,sequence:false})};a.prototype.createPeriod=function(ab,aa){var S,W,ah,ad,Z,ae,U,ac=3600000,af=24,T;var ag="";var X="",V="";S=new Date(this.Get(K));if(!S||!S instanceof Date){S=new Date()}Z=String(this.Get(c));if(this.Get(c)){Z=String(this.Get(c))}else{Z=7}if(this.Get(p)){ae=String(this.Get(p))}else{ae=S.format("EEEE")}this.SetProperty("UserPrefWDS",this.Get(p));T=O(Number(this.Get(v)));this.SetProperty("IsTotalHPagesChanged","Y");switch(Number(this.Get(v))){case (j):case (A):case (C):case (g):case (D):ah=String(this.Get(I));ad=String(this.Get(J));for(var Y=0;Y<2;Y++){if(ah.charAt(Y)!=":"){X+=ah.charAt(Y)}if(ad.charAt(Y)!=":"){V+=ad.charAt(Y)}}if(Number(this.Get(v))==A){if(X!=""){var R=(Number(X))%2==0?0:(Number(X)%2);if(R){X=Number(X)-(2-R)}}if(V!=""){R=(Number(V))%2==0?0:(Number(V)%2);if(R){V=Number(V)+(2-R)}}}else{if(Number(this.Get(v))==C){if(X!=""){var R=(Number(X))%4==0?0:(Number(X)%4);if(R){X=Number(X)-(R)}}if(V!=""){R=(Number(V))%4==0?0:(Number(V)%4);if(R){V=Number(V)+(4-R)}}}}if(X==""){X=0}if(V==""){V=24}if(Z!=""&&ae!=""&&Z!="0"){S=new Date(this.Get(u));W=new Date(this.Get(e));G(S,ae,Z,ag)}else{this.SetProperty("StartDate",S);S.setDate(S.getDate()+(ab*T));S.setHours(0,0,0,0);if(Z!=""&&ae!=""&&Z!="0"){G(S,ae,Z,ag)}W=new Date(S.getTime());W.setDate(S.getDate()+(aa*T)-1);W.setHours(23,59,59,999)}if(Number(this.Get(v))==g){this.SetProperty("Scale_factor",2)}else{if(Number(this.Get(v))==D){this.SetProperty("Scale_factor",4)}else{this.SetProperty("Scale_factor",1)}}this.SetProperty("StartTime",ac*X);this.SetProperty("EndTime",ac*V);this.SetProperty("TDays",24*ac);this.SetProperty("AxisDuration",(this.Get("EndTime")-this.Get("StartTime")));break;case (d):U=this.Get(B)[0];setHoursFrom(S,U.ST);W=new Date((S.getTime())+aa*(af*ac));break;case (b):if(Z!=""&&ae!=""&&Z!="0"){S=new Date(this.Get(u));W=new Date(this.Get(e));G(S,ae,Z,ag)}else{S.setDate(S.getDate()+(ab*T));S.setHours(0,0,0,0);if(Z!=""&&ae!=""&&Z!="0"){G(S,ae,Z,ag)}W=new Date(S.getTime());W.setDate(S.getDate()+(aa*T)-1);W.setHours(23,59,59,999)}this.SetProperty("StartTime","0");this.SetProperty("EndTime",24*ac-1);this.SetProperty("TDays",24*ac);this.SetProperty("AxisDuration",24*ac-1);break;case (H):if(Z!=""&&ae!=""&&Z!="0"){S=new Date(this.Get(u));W=new Date(this.Get(e));G(S,ae,Z,ag)}else{S.setDate(S.getDate()+(ab*T));S.setHours(0,0,0,0);if(Z!=""&&ae!=""&&Z!="0"){G(S,ae,Z,ag)}W=new Date((S.getTime()));W.setDate(S.getDate()+(aa*T)-1);W.setHours(23,59,59,999)}this.SetProperty("StartTime","0");this.SetProperty("EndTime",24*ac-1);this.SetProperty("TDays",24*ac);this.SetProperty("AxisDuration",24*ac-1);break;case (n):S.setDate(S.getDate()+(ab*T));S.setHours(0,0,0,0);W=new Date((S.getTime())+aa*(ac*af*364));W.setHours(23,59,59,999);break;case (k):S.setDate(S.getDate()+(ab*T));S.setHours(0,0,0,0);W=new Date((S.getTime())+aa*(ac*af*364));W.setHours(23,59,59,999);break;case (x):S.setDate(S.getDate()+(ab*T));S.setHours(0,0,0,0);W=new Date(S.getTime());W.setDate(S.getDate()+(aa*T)-1);W.setHours(23,59,59,999);break;default:S.setDate(S.getDate()+(ab*T));S.setHours(0,0,0,0);W=new Date(S.getTime());W.setDate(S.getDate()+(aa*T)-1);W.setHours(23,59,59,999);break}this.SetProperty(u,S.getTime());this.SetProperty(e,W.getTime());this.SetProperty(c,Z);this.SetProperty("FinalWeekDays",P);if((this.Get(v)=="4")||(this.Get(v)=="512")||(this.Get(v)=="1024")||(this.Get(v)=="1")||(this.Get(v)=="64")||(this.Get(v)=="2048")||(this.Get(v)=="4096")){this.calcDayLeft()}};a.prototype.calcDayLeft=function(){var T=new Date(this.Get(u)),aa=new Date(this.Get(e)),U,ac=this.Get("TDays"),ab=0,ae=0,X,Y={},ad=this.Get(v),S=Number(this.Get(c)),V=O(Number(this.Get(v))),W=this.Get("datePaddingMap"),R=new Date(),ag=W[Number(this.Get(v))],Z=0;var af=Number(ag)+1;if(ad==1){af=Number(ag)*Number(S)+1;U=1/(this.Get("TotalHPages")>0?this.Get("TotalHPages"):1);if(S){U=U/S}}else{if(ad==64){X=new Date(this.Get(u));while(X.getTime()<=aa.getTime()){if(P.indexOf(X.getDay())!==-1){ae++}X.setTime(X.getTime()+ac)}if(ae){U=1/ae}}else{U=1/(this.Get("TotalHPages")>0?this.Get("TotalHPages"):1)
}}while(T.getTime()<=aa.getTime()){if(P.indexOf(T.getDay())!==-1){Y[(T).format("MM/dd/yyyy")]=ab;ab=ab+U;Z++;if(ad==1){if(Z==af){R=new Date(T)}}else{if(Z==af){R=new Date(T)}}}T.setTime(T.getTime()+ac)}this.SetProperty("DayLoc",Y);this.SetProperty("PixelsPerUnit",U);this.SetProperty("paddingMiddleDayMillis",R.getTime());this.SetProperty("StartDate",R);if(this.Get("EndTime")-this.Get("StartTime")>0){this.SetProperty("miniFX",U/(this.Get("EndTime")-this.Get("StartTime")))}};function O(R){return F[R]}function h(U,Y,W,T){var S=0,X;if(U==="RefreshGantt"){S=this.Get("PanesToRefresh");Y.SetProperty("PanesToRefresh",S);Y.SetProperty("TST",this.Get("TST"));T.CancelOperation=false}else{if(U==="ShowPopup"){S=S|(1<<1);S=S|(1<<2);S=S|(1<<4);this.SetProperty("PanesToRefresh",S);Y.SetProperty("PanesToRefresh",S);T.CancelOperation=false}else{if(U==="PopulateScoreColumn"||U==="PopulateDistanceColumn"||U==="PopulateWirelessColumn"){S=S|(1<<1);S=S|(1<<2);S=S|(1<<4);this.SetProperty("PanesToRefresh",S);X=this.Get("Resource Id");Y.SetProperty("SelectedRow",X);Y.SetProperty("PanesToRefresh",S);T.CancelOperation=false}else{if(U==="InvokeOperation"){var V="",R="";R=String(Y.GetProperty("operation"));if(R==="ExtendShrink"){V=String(Y.GetProperty("booking Id"));Y.SetProperty("Activity Id",V)}}else{T.CancelOperation=false}}}}}function G(R,X,T,Z){var V=3600000,Y=24,S,U;var W=new Date();for(S=1;S<8;S++){if(W.format("EEEE")===X){R=W;break}W=new Date((R.getTime())+(Y*V)*S)}Z=R.getDay()+",";for(S=1;S<T;S++){U=new Date((R.getTime())+(Y*V)*S);Z+=U.getDay()+","}P=Z}function L(R){if(R.GetValue()=="EmpUtilization"){var T={};var S=this.Get("ResEvents");this.SetProperty("ResEvents",T);this.SetProperty("ResEventsBak",S)}}function i(R){if(R.GetValue()=="EmpUtilization"){var S=this.Get("ResEvents");var T=this.Get("ResEventsBak");this.SetProperty("ResEvents",T);this.SetProperty("ResScheduleEvents",S)}}function s(){var U,S,V,T,R;R=this.Get("InEvent");if(R==true){this.SetProperty("NotifyTSButtonClk","TRUE")}T=String(this.Get("NotifyTSButtonClk"));if(T!="TRUE"){U=String(this.Get(f));S=String(this.Get(w));V=S+"/"+U;if(V==="/"){V="Day/Hour"}this.SetProperty(v,N[V])}this.SetProperty("NotifyTSButtonClk","")}a.prototype.prepareUtillpage=function(W,Y){var U=[];U=this.Get("ResScheduleEvents");if(typeof(U)==="object"){var S;var R=this.Get("RecordSet");var Z=R.length;if(W!==0){S=this.Get("Schedulerecordset")}else{S=[];for(var V=0;V<Z;V++){S.push($.extend({},R[V]))}}this.SetProperty("RecordSet",S);var aa=this.Get("ResEvents");var T=this.Get("ResScheduleEvents");this.SetProperty("ResEvents",T);SiebelAppFacade.fsDispatchBoardPM.superclass.prepareUtillpage.call(this,W,Y);var X=this.Get("RecordSet");this.SetProperty("Schedulerecordset",X);this.SetProperty("ResEvents",aa);this.SetProperty("RecordSet",R)}SiebelAppFacade.fsDispatchBoardPM.superclass.prepareUtillpage.call(this,W,Y)};return a}());return"SiebelAppFacade.fsDispatchBoardPM"})};