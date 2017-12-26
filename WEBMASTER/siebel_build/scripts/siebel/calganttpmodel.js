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
if(typeof(SiebelAppFacade.CalGanttPM)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.CalGanttPM");define("siebel/calganttpmodel",["siebel/ganttpmodel"],function(){SiebelAppFacade.CalGanttPM=(function(){var e=SiebelJS.Dependency("SiebelApp.Constants"),W=SiebelJS.Dependency("SiebelApp.Utils"),aq=e.get("SWE_GANTT_DAYINFO"),A=e.get("SWE_GANTT_DRILLDOWN_CLS"),o=e.get("SWE_GANTT_DYNAMIC"),aA=e.get("SWE_GANTT_STATIC"),au=e.get("SWE_GANTT_START_DATE"),O=e.get("SWE_GANTT_TIME_SCALE"),U=e.get("SWE_GANTT_STARTMILLIS"),aj=e.get("SWE_GANTT_COLOR"),s=e.get("SWE_GANTT_ACTIVITY_START_TIME"),a=e.get("SWE_GANTT_ACTIVITY_END_TIME"),n=e.get("SWE_GANTT_ACTIVITY_NO_DAYS_IN_WEEK"),F=e.get("SWE_GANTT_ACTIVITY_WEEK_DAY_START"),m=e.get("SWE_GANTT_BOTTOMAXIS"),P=e.get("SWE_GANTT_NOOFHRS"),r=e.get("SWE_GANTT_ENDMILLIS"),ac=e.get("SWE_PROP_BC_NOTI_DELETE_RECORD"),H=e.get("SWE_PROP_BC_NOTI_GENERIC"),y=e.get("SWE_PST_CNTRL_LIST"),at=e.get("SWE_PST_CUSTOM_CTRL"),Q=e.get("SWE_PROP_NOTI_TYPE"),ax=e.get("SWE_PROP_ARGS_ARRAY"),ak=e.get("SWE_GANTT_PREFERENCES"),f=e.get("SWE_GANTT_RESOURCE_PANE"),aw=e.get("SWE_GANTT_TIMESCALE_PANE"),al=e.get("SWE_GANTT_UTILIZATION_PANE"),ag=e.get("SWE_GANTT_DRILLDOWN"),ap=e.get("SWE_GANTT_DAY_DAY_HALFHOUR"),j=e.get("SWE_GANTT_DAY_DAY_QUARTERHOUR"),w=e.get("SWE_GANTT_DAY_HOUR"),g=e.get("SWE_GANTT_DAY_TWOHOUR"),G=e.get("SWE_GANTT_DAY_DAY_FOURHOUR"),L=e.get("SWE_GANTT_DAY_DAYPART"),K=e.get("SWE_GANTT_WEEK_DAY_DAYPART"),I=e.get("SWE_GANTT_MONTH_DOW_DAYPART"),t=e.get("SWE_GANTT_WEEK_DAY"),az=e.get("SWE_GANTT_MONTH_DAY"),d=e.get("SWE_GANTT_YEAR_MONTH"),l=e.get("SWE_GANTT_MONTH_DOW"),D=e.get("SWE_GANTT_3MONTH_DOW"),aa=e.get("SWE_GANTT_RESHEADER"),J=e.get("SWE_GANTT_RENDER_INFO"),q=e.get("SWE_GANTT_SPL_DATE"),Y=e.get("SWE_GANTT_ICONINFO"),i=e.get("SWE_GANTT_DRILLDOWN_CLS"),N="Weekend Axis Color TS",z="Weekends",am="TS COLOR",B="ICON_INFO",k="CurrentDate",c="NextDate",ai="PrevDate",C="TSUnints",af="TNT Utility Service",Z="Hour Axis Color",E="LIC Field",p="Booking Colors",x="EventDefaultColor",av="Color Display By",aE="Status Abbreviations",S={1:7,2:1,4:1,32:35,64:31,128:7,256:35,512:1,1024:1,2048:1,4096:1,8192:366,16384:366,32768:35,65536:98},ah={1:6,2:0,4:0,32:28,64:30,128:6,256:28,512:0,1024:0,2048:0,4096:0,8192:364,16384:364,32768:34,65536:91},ab=SiebelApp.S_App.LocaleObject,ad=ab.GetLocalString("IDS_TNT_PREV_DAY_TOOLTIP"),v=ab.GetLocalString("IDS_TNT_NEXT_DAY_TOOLTIP"),V=ab.GetLocalString("IDS_TNT_PREV_WEEK_TOOLTIP"),an=ab.GetLocalString("IDS_TNT_NEXT_WEEK_TOOLTIP"),T=ab.GetLocalString("IDS_CALENDAR_PREVIOUS_MONTH_STRING"),X=ab.GetLocalString("IDS_CALENDAR_NEXT_MONTH_STRING"),h="MMMM D, YYYY",aD="MM/dd/yyyy",M="MM/DD/YYYY",aB="Splitter Position",ar="Column Width",aC="GCD";function b(){SiebelAppFacade.CalGanttPM.superclass.constructor.apply(this,arguments);this.SetProperty("Color Display By","STATUS")}SiebelJS.Extend(b,SiebelAppFacade.GanttPresentationModel);b.prototype.Init=function(){this.AddMethod("RefreshGanttChart",u);SiebelAppFacade.CalGanttPM.superclass.Init.call(this);this.AddProperty("NotifyTSButtonClk","");this.AddProperty("SelectedRow",0);this.AddProperty("IsNotifyRefresh",false);this.AttachEventHandler(e.get("PHYEVENT_SELECT_ROW"),"HandleRowSelect",{core:true});this.AddMethod("HandleRowSelect",function(aI,aJ,aF,aG){var aH=this.OnControlEvent(e.get("PHYEVENT_APPLET_FOCUS"));if(aH===false){aG[e.get("SWE_EXTN_CANCEL_ORIG_OP")]=true;aG[e.get("SWE_EXTN_RETVAL")]=aH}},{scope:this,sequence:true});this.AttachNotificationHandler(H,ae);this.AttachNotificationHandler(ac,ay)};b.prototype.createPeriod=function(aM,aL){var aF,aI,aU,aO,aK,aR,aN=3600000,aS=24,aG=this.ExecuteMethod("getTimeScaleUnits"),aQ=Number(this.Get(O)),aT="";var aH="",aP="";aF=new Date(this.Get(au))||new Date();aK=this.Get(n)||7;if(this.Get(F)){aR=String(this.Get(F))}else{aR=aF.format("EEEE")}this.SetProperty("EndTime","");this.SetProperty("FinalWeekDays",ao(aF,aR,aK,aT));this.SetProperty("IsTotalHPagesChanged","Y");if(this.Get(aC)==="Working Hours"){aU=String(this.Get(s));aO=String(this.Get(a))}else{aU="00:00";aO="24:00"}for(var aJ=0;aJ<2;aJ++){if(aU.charAt(aJ)!==":"){aH+=aU.charAt(aJ)}if(aO.charAt(aJ)!==":"){aP+=aO.charAt(aJ)}}switch(aQ){case (ap):case (j):case (w):case (g):case (G):this.SetProperty("StartDate",aF);aF.setDate(aF.getDate()+(aM*aG));aF.setHours(0,0,0,0);aI=new Date(aF.getTime());aI.setDate(aF.getDate()+(aL*aG)-1);aI.setHours(23,59,59,999);if(aQ===ap){this.SetProperty("Scale_factor",2)}else{if(aQ===j){this.SetProperty("Scale_factor",4)}else{this.SetProperty("Scale_factor",1)}}this.SetProperty("StartTime",aN*aH);this.SetProperty("EndTime",aN*aP);this.SetProperty("TDays",24*aN);this.SetProperty("AxisDuration",(this.Get("EndTime")-this.Get("StartTime")));break;default:SiebelAppFacade.CalGanttPM.superclass.createPeriod.call(this,aM,aL);break}this.SetProperty(U,aF.getTime());this.SetProperty(r,aI.getTime());this.SetProperty(n,aK);if(this.Get("EndTime")||this.Get("TST")==="256"){this.calcDayLeft()}};b.prototype.prepareUtillpage=function(aL,aN){SiebelAppFacade.CalGanttPM.superclass.prepareUtillpage.call(this,aL,aN);var aH=this.Get("ResEvents"),aF=this.Get("RecordSet"),aG=this.Get("RJoinFld");for(var aJ=aL;aJ<aN;aJ=aJ+1){if(aH[aF[aJ][aG]]){aF[aJ].EVENTS=aH[aF[aJ][aG]].EVENTS;aF[aJ].BOOKINGS=aH[aF[aJ][aG]].BOOKINGS;if(aF[aJ].BOOKINGS){var aM=aF[aJ].BOOKINGS.length;for(var aI=0;aI<aM;aI=aI+1){var aK=aF[aJ].EVENTS[aF[aJ].BOOKINGS[aI]].CR==="Y";if(aK){var aO=aF[aJ].EVENTS[aF[aJ].BOOKINGS[aI]].CLS;aO+=" siebui-currentRecord";aF[aJ].EVENTS[aF[aJ].BOOKINGS[aI]].CLS=aO}}}}}};function u(aG,aL,aJ){var aK=this.Get(au),aI=this.Get("TST"),aH=SiebelApp.S_App.NewPropertySet(),aF=0;aF=aF|(1<<1);aF=aF|(1<<2);aF=aF|(1<<3);aF=aF|(1<<4);this.SetProperty("PanesToRefresh",aF);aH.SetProperty("PanesToRefresh",aF);if(typeof(aG)!=="undefined"){if(aG!==0){this.SetProperty(au,aG)}aH.SetProperty(au,aG)}if(aL){this.SetProperty("TST",aL)}this.ExecuteMethod("InvokeMethod","RefreshGantt",aH,aJ)}function ao(aM,aH,aK,aG){var aF=86400000,aI,aJ;var aL=new Date();for(aI=1;aI<8;aI++){if(aL.format("EEEE")===aH){aM=aL;break}aL=new Date((aM.getTime())+aF*aI)}aG=aM.getDay()+",";for(aI=1;aI<aK;aI++){aJ=new Date((aM.getTime())+aF*aI);aG+=aJ.getDay()+","}return aG}function R(){var aK=this.Get("GetRawRecordSet"),aJ=this.Get("RecordSet"),aG=this.Get("ResIDtoIndex"),aL=this.Get("Resource Id"),aI=this.Get("RJoinFld");if(!aK||!aJ||!aG){return}if(W.IsEmpty(aL)||this.Get("IsNotifyRefresh")){this.SetProperty("Resource Id",aK[0][aI]);return}var aF=aJ.length,aH=aG[aL];if(!aK[aH]||aK[aH][aI]!==aL){if(aH===aF-1){aL=aH!==0?aK[aH-1][aI]:""}else{if(aH<aF-1){aL=aK[aH][aI]}else{aL=""}}this.SetProperty("Resource Id",aL)}}function ay(aF){if(aF.GetProperty("bSetup")==="false"){var aH=this.Get("GetRawRecordSet"),aG=this.Get("RecordSet");if(aH&&aG&&aH.length<aG.length){R.call(this)}this.SetProperty("SelectedRow",0);this.SetProperty("InEvent",true);this.ExecuteMethod("RefreshGanttChart")}}function ae(aF){if(aF.GetProperty(Q)==="ClosePopup"||aF.GetProperty(Q)==="Refresh"){var aH=new Date(this.Get(au));
var aG=new Date(this.Get(au));aG.setDate(aG.getDate()+1);if(aF.GetProperty(Q)==="Refresh"){this.SetProperty("IsNotifyRefresh",true)}this.SetProperty("InEvent",true);this.ExecuteMethod("RefreshGanttChart",aG.format(aD));this.SetProperty("SelectedRow",0);this.SetProperty("InEvent",true);this.ExecuteMethod("RefreshGanttChart",aH.format(aD));if(this.Get("IsNotifyRefresh")){this.SetProperty("IsNotifyRefresh",false)}}else{if(aF.GetProperty(Q)==="Gantt"){if(this.Get("IsNotifyRefresh")){R.call(this)}}}}return b}());return SiebelAppFacade.CalGanttPM})};