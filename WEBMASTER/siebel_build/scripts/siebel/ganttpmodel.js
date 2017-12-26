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
if(typeof(SiebelAppFacade.GanttPresentationModel)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.GanttPresentationModel");define("siebel/ganttpmodel",["siebel/pmodel"],function(){SiebelAppFacade.GanttPresentationModel=(function(){var e=SiebelJS.Dependency("SiebelApp.Constants"),aO=e.get("SWE_GANTT_DAYINFO"),I=e.get("SWE_GANTT_DRILLDOWN_CLS"),p=e.get("SWE_GANTT_DYNAMIC"),a1=e.get("SWE_GANTT_STATIC"),aU=e.get("SWE_GANTT_START_DATE"),aa=e.get("SWE_GANTT_TIME_SCALE"),aj=e.get("SWE_GANTT_STARTMILLIS"),aG=e.get("SWE_GANTT_COLOR"),y=e.get("SWE_GANTT_ACTIVITY_START_TIME"),a=e.get("SWE_GANTT_ACTIVITY_END_TIME"),o=e.get("SWE_GANTT_ACTIVITY_NO_DAYS_IN_WEEK"),R=e.get("SWE_GANTT_ACTIVITY_WEEK_DAY_START"),n=e.get("SWE_GANTT_BOTTOMAXIS"),ab=e.get("SWE_GANTT_NOOFHRS"),x=e.get("SWE_GANTT_ENDMILLIS"),T=e.get("SWE_PROP_BC_NOTI_GENERIC"),F=e.get("SWE_PST_CNTRL_LIST"),aS=e.get("SWE_PST_CUSTOM_CTRL"),ac=e.get("SWE_PROP_NOTI_TYPE"),aY=e.get("SWE_PROP_ARGS_ARRAY"),aH=e.get("SWE_GANTT_PREFERENCES"),g=e.get("SWE_GANTT_RESOURCE_PANE"),aX=e.get("SWE_GANTT_TIMESCALE_PANE"),aI=e.get("SWE_GANTT_UTILIZATION_PANE"),aB=e.get("SWE_GANTT_DRILLDOWN"),C=e.get("SWE_GANTT_DAY_HOUR"),h=e.get("SWE_GANTT_DAY_TWOHOUR"),S=e.get("SWE_GANTT_DAY_DAY_FOURHOUR"),X=e.get("SWE_GANTT_DAY_DAYPART"),W=e.get("SWE_GANTT_WEEK_DAY_DAYPART"),U=e.get("SWE_GANTT_MONTH_DOW_DAYPART"),z=e.get("SWE_GANTT_WEEK_DAY"),aZ=e.get("SWE_GANTT_MONTH_DAY"),d=e.get("SWE_GANTT_YEAR_MONTH"),l=e.get("SWE_GANTT_MONTH_DOW"),O=e.get("SWE_GANTT_3MONTH_DOW"),au=e.get("SWE_GANTT_RESHEADER"),V=e.get("SWE_GANTT_RENDER_INFO"),w=e.get("SWE_GANTT_SPL_DATE"),ap=e.get("SWE_GANTT_ICONINFO"),j=e.get("SWE_GANTT_DRILLDOWN_CLS"),Z="Weekend Axis Color TS",H="Weekends",aJ="TS COLOR",L="ICON_INFO",k="CurrentDate",c="NextDate",aE="PrevDate",N="TSUnints",aA="TNT Utility Service",aq="Hour Axis Color",Q="LIC Field",v="Booking Colors",E="EventDefaultColor",aV="Color Display By",a7="Status Abbreviations",ae={1:7,2:1,4:1,32:35,64:31,128:7,256:35,512:1,1024:1,2048:1,4096:1,8192:366,16384:366,32768:35,65536:98},aD={1:6,2:0,4:0,32:28,64:30,128:6,256:28,512:0,1024:0,2048:0,4096:0,8192:364,16384:364,32768:34,65536:91},av=SiebelApp.S_App.LocaleObject,ax=av.GetLocalString("IDS_TNT_PREV_DAY_TOOLTIP"),B=av.GetLocalString("IDS_TNT_NEXT_DAY_TOOLTIP"),ak=av.GetLocalString("IDS_TNT_PREV_WEEK_TOOLTIP"),aL=av.GetLocalString("IDS_TNT_NEXT_WEEK_TOOLTIP"),ai=av.GetLocalString("IDS_CALENDAR_PREVIOUS_MONTH_STRING"),an=av.GetLocalString("IDS_CALENDAR_NEXT_MONTH_STRING"),i="MMMM D, YYYY",a6="MM/dd/yyyy",Y="MM/DD/YYYY",a4="Splitter Position",aR="Column Width",P="Border Color",J=SiebelApp.S_App.GetService("Gantt UI Service");function a3(){SiebelAppFacade.GanttPresentationModel.superclass.constructor.apply(this,arguments)}SiebelJS.Extend(a3,SiebelAppFacade.PresentationModel);a3.prototype.Init=function(){SiebelAppFacade.GanttPresentationModel.superclass.Init.call(this);this.AddProperty("CustCtlrName","");this.AddProperty("RevertInfo","");this.AddProperty("TSDDInfo","");this.AddProperty("ResSeq","");this.AddProperty("ResEvents","");this.AddProperty("IsRefreshNeeded",false);this.AddProperty("RevertBooking",false);this.AddProperty("DisableExtendShrinkTS","");this.AddProperty("Round Minutes Events",15);this.AddProperty("fx","");this.AddProperty("RESOURCEHEADER","");this.AddProperty("Activity_DDInfo","");this.AddProperty("DDrag","");this.AddProperty("DRSZ","");this.AddProperty(y,"");this.AddProperty(a,"");this.AddProperty(o,"");this.AddProperty(R,"");this.AddProperty(aU,"");this.AddProperty(aO,"");this.AddProperty(n,"");this.AddProperty(aa,"");this.AddProperty(ab,"");this.AddProperty(aj,"");this.AddProperty(x,"");this.AddProperty(V,"");this.AddProperty("tooltipMap","");this.AddProperty(w,"");this.AddProperty(L,"");this.AddProperty("Newpages",false);this.AddProperty("RecordSet","");this.AddProperty("ResIDtoIndex",{});this.AddProperty("InEvent","");this.AddProperty(E,"");this.AddProperty("RTL Mode","");this.AddProperty("SERVICE_NAME","");this.AddProperty("TotalHPages","");this.AddProperty("VScrollPos",0);this.AddProperty("ScrollbarWidth",0);this.AddProperty("Scale_factor",1);this.AddProperty("FilterGantt_CLS","");this.AddProperty("MinGanttsize","");this.AddProperty("PanesToRefresh",0);this.AddProperty("RevertDate","");this.AddProperty("Resource Id","");this.AddProperty(a4,"");this.AddProperty(aR,"");this.AddProperty("EnableTooltip","");this.AddProperty("ShowLegend",true);this.AddProperty("TurnTime","");this.AddProperty("expcolpse",true);this.AddProperty("datePaddingMap","");this.AddProperty("IsTotalHPagesChanged","Y");this.AddMethod("getEvent",aw);this.AddMethod("gettaskSeqEvents",G);this.AddMethod("gettimescaleDDcls",aP);this.AddMethod("prepareResInfo",M);this.AddMethod("prepareResStaticInfo",a0);this.AddMethod("prepareGanttInfo",t);this.AddMethod("prepareTimeScaleInfo",aK);this.AddMethod("prepareGridInfo",q);this.AddMethod("prepareEventInfo",ay);this.AddMethod("RefreshGanttChart",A);this.AddMethod("InvokeServer",ah);this.AddMethod("CustomDrillDown",ad);this.AddMethod("setHoursFrom",s);this.AddMethod("setDefaults",aC);this.AddMethod("InvokeOperation",aF);this.AddMethod("CanExtendShrinkEvents",aT);this.AddMethod("getTooltip",a2);this.AddMethod("getScrollWidth",f);this.AddMethod("prepareRespage",az);this.AddMethod("getTimeScaleUnits",a5);this.AddMethod("getTimeScalePeriods",D);this.AddMethod("getDateRange",ag);this.AddMethod("prepareLegendMap",aW);this.AddMethod("CanInvokeMethod",b,{sequence:true,scope:this});this.AddMethod("InvokeMethod",af,{sequence:true,scope:this});this.AddMethod("saveUserPref",ar);this.AddMethod("saveControlValues",al);this.AttachNotificationHandler(T,function(a8){if(a8&&a8.GetProperty(ac)==="ClosePopup"){SiebelApp.S_App.GetPopupPM().SetProperty("isPrevPopupVisible",false)}},{core:true,scope:this});this.AttachNotificationHandler(T,aN)};a3.prototype.Setup=function(bf){SiebelAppFacade.GanttPresentationModel.superclass.Setup.call(this,bf);var a8=bf.EnumChildren(true),be,bg=bf.GetChildByType("apm"),bh=bf.GetChildByType(F),bd=this.Get("ScrollbarWidth");if(!bd){this.ExecuteMethod("getScrollWidth")}if(bg){aQ.call(this,bg);if(this.Get("Date Padding for TimeScale LIC")){var ba=this.Get("Date Padding for TimeScale LIC"),a9={};ba=ba.replace(/;/g,":");ba=ba.split(":");var bc=ba.length;for(var bb=0;bb<bc;bb++){a9[ba[bb]]=ba[++bb]}this.SetProperty("datePaddingMap",a9)}}if(bh){be=bh.EnumChildren(true);do{if(be.GetType()===aS){this.SetProperty("PanesToRefresh",63);this.ExecuteMethod("prepareGanttInfo",be.GetChild(0));break}be=bh.EnumChildren(false)}while(be)}};function aT(){var a8=":"+this.Get(aa)+":",a9=String(this.Get("DisableExtendShrinkTS"));return(a9.indexOf(a8)===-1)}function ad(a8){this.ExecuteMethod("InvokeMethod","DoInvokeDrilldown",a8)}function aF(a8){this.ExecuteMethod("InvokeMethod","InvokeOperation",a8)}function aP(){if(this.Get("TSDDInfo")){return I}else{return}}function G(a9){var a8=this.Get("ResEvents");if(a8&&a8[a9]&&a8[a9].BOOKINGS){return a8[a9].BOOKINGS}else{return}}function aw(a9,ba){var a8=this.Get("ResEvents");
if(a8&&a8[a9]&&a8[a9].EVENTS){return a8[a9].EVENTS[ba]}else{return}}function f(){var a8=$("<div>").css({visibility:"hidden",width:100,overflow:"scroll"}).appendTo("body"),a9=$("<div>").css({width:"100%"}).appendTo(a8).outerWidth();a8.remove();this.SetProperty("ScrollbarWidth",100-a9)}function aN(ba){var a9,bb=[],bi=0,bf,bh,bd=[],bg=0;if(ba.GetProperty(ac)==="Gantt"){a9=ba.GetProperty(aY);if(a9){CCFMiscUtil_StringToArray(a9,bb)}bf=CCFMiscUtil_CreatePropSet();bi=bb.length;for(var be=0;be<bi;be++){bf.SetProperty(be.toString(),bb[be])}bh=CCFMiscUtil_CreatePropSet();bh.DecodeFromString(bf.GetProperty("0"));this.ExecuteMethod("prepareGanttInfo",bh);bg=this.Get("PanesToRefresh");if(!(bg&(1<<2))&&((bg&(1<<3))||(bg&(1<<4)))){this.SetProperty("IsRefreshNeeded",true)}}else{if(ba.GetProperty(ac)==="ClosePopup"){this.SetProperty("RevertBooking",true)}else{if(ba.GetProperty(e.get("SWE_PROP_NOTI_TYPE"))==="EI"){a9=ba.GetProperty(e.get("SWE_PROP_ARGS_ARRAY"));if(a9){CCFMiscUtil_StringToArray(a9,bb)}bf=CCFMiscUtil_CreatePropSet();var a8=bb.length;for(var bc=0;bc<a8;bc++){bf.SetProperty(bc.toString(),bb[bc])}bh=CCFMiscUtil_CreatePropSet();bh.DecodeFromString(bf.GetProperty("0"));this.ExecuteMethod("prepareEventInfo",bh);this.SetProperty("Newpages",true)}else{if(ba.GetProperty(ac)==="RevertBooking"){this.SetProperty("RevertBooking",true)}}}}}function A(a9,bd,bb){var bc=this.Get(aU),ba=this.Get("TST"),be=SiebelApp.S_App.NewPropertySet(),a8=0;a8=a8|(1<<1);a8=a8|(1<<2);a8=a8|(1<<3);a8=a8|(1<<4);this.SetProperty("PanesToRefresh",a8);be.SetProperty("PanesToRefresh",a8);if((bc!==a9)||(bd&&ba!==bd)){if(typeof(a9)!=="undefined"){if(a9!==0){this.SetProperty(aU,a9)}be.SetProperty(aU,a9)}if(bd){this.SetProperty("TST",bd)}this.ExecuteMethod("InvokeMethod","RefreshGantt",be,bb)}}function aW(){var bk=this.Get("Booking Colors"),bc=this.Get("Color Display By"),be=this.Get("Status Abbreviations"),a8,bj,bd=[],bh=[],bi,bg,bl,bb=0,bf=1,ba=" LOV";if(be&&bc){a8=be.substring(be.indexOf(bc)+bc.length+1,be.indexOf(";",be.indexOf(bc)))}else{if(be){a8=be.substring(be.indexOf(",")+1,be.length-1)}else{a8="GS"}}bi=this.Get("Legend Bar Order: "+a8+" "+bf);while(bi){bi=bi+";";bg=bi.indexOf(";");while(bg!==-1&&bg!==0){bl=bi.substring(0,bg);bi=bi.substring(bg+1,bi.length);bg=bi.indexOf(";");bd[bb++]=bl}bf=bf+1;bi=this.Get("Legend Bar Order: "+a8+" "+bf)}a8=a8+"_";bb=0;if(bd.length>0){for(var bf=0;bf<bd.length;bf++){var a9=bd[bf];if(bk[a8+a9+ba]&&bk[a8+a9]){bh[bb]=new Object;bh[bb].displayValue=bk[a8+a9+ba];bh[bb].color=bk[a8+a9];bb++}}}else{for(var bm in bk){if(bm.indexOf(a8)===0&&bm.indexOf(ba)===-1){bh[bb]=new Object;bh[bb].displayValue=bk[bm+ba];bh[bb].color=bk[bm];bb++}}}return bh}function ah(ba){var a9=CCFMiscUtil_CreatePropSet(),a8=0;a9.SetProperty(aU,this.Get(aU));a8=this.Get("PanesToRefresh");a9.SetProperty("PanesToRefresh",a8);this.ExecuteMethod("InvokeMethod","RefreshGantt",a9)}function t(bd){var a8,bg,a9={},bf="DDrag",bc=this.Get("datePaddingMap"),ba=0,bb="DRSZ";this.SetProperty("RecordSet",this.Get("GetRawRecordSet"));this.SetProperty("CustCtlrName",bd.GetValue());this.SetProperty("RTL Mode",bd.GetProperty("RTL Mode"));this.SetProperty("SERVICE_NAME",bd.GetProperty("Gantt Service Name"));if(bd.GetProperty("SD")){this.SetProperty("SD",bd.GetProperty("SD"))}this.SetProperty("ResEvents",{});if(bd&&bd instanceof JSSPropertySet){a8=bd.GetChildCount();for(var be=0;be<a8;be++){bg=bd.GetChild(be);switch(bg.GetType()){case (aH):case ("DisplayControls"):aQ.call(this,bg);if(bc[this.Get(aa)]){ba=bc[this.Get(aa)]}this.SetProperty("TotalHPages",1+(ba*2));break;case (g):this.ExecuteMethod("prepareResInfo",bg);break;case (aX):this.ExecuteMethod("prepareTimeScaleInfo",bg);break;case (aI):this.ExecuteMethod("prepareGridInfo",bg);break;case ("Custom Controls"):this.SetProperty("DateBarControl",bg.GetProperty("DateBar Control Name"));this.SetProperty("LegendControl",bg.GetProperty("Legend Control Name"));break}}a9[L]=this.Get(L);a9.TotalHPages=this.Get("TotalHPages");this.SetProperty(V,a9)}}function aK(be){var bh,bi,a9,bg,bb,ba,bc,bd=this.Get("TotalHPages"),bf=false;if(be&&be instanceof JSSPropertySet){a9=be.GetChildCount();for(bb=0;bb<a9;bb=bb+1){bh=be.GetChild(bb);if(bh.GetType()==a1){bc=bh.EnumProperties(true);if(bc){do{this.SetProperty(bc,bh.GetProperty(bc));bc=bh.EnumProperties(false)}while(bc)}bg=bh.GetChildCount();for(ba=bg-1;ba>=0;ba=ba-1){bi=bh.GetChild(ba);switch(bi.GetType()){case (aB):this.SetProperty("TSDDInfo",ao(bi));break;case (aO):this.SetProperty(aO,K(bi));break;case (aG):this.SetProperty(aJ,ao(bi));break;case (ap):this.SetProperty(L,ao(bi,this.Get(L)));break;case (aq):var a8=ao(bi);this.SetProperty(aq,r(a8));break}}}else{if(bh.GetType()==p){bc=bh.EnumProperties(true);if(bc){do{this.SetProperty(bc,bh.GetProperty(bc));bc=bh.EnumProperties(false)}while(bc)}this.ExecuteMethod("setDefaults");this.createPeriod(-parseInt(bd/2,10),bd);bg=bh.GetChildCount();for(ba=bg-1;ba>=0;ba=ba-1){bi=bh.GetChild(ba);if(bi.GetType()==n){this.SetProperty(n,u(bi))}else{if(bi.GetType()==w){this.SetProperty(w,am.call(this,bi))}}}bf=true}}if(!bf){this.ExecuteMethod("setDefaults");this.createPeriod(-parseInt(bd/2,10),bd)}}}}function aC(){var a8;a8=this.Get(aa);if(!a8){a8="4";this.SetProperty(aa,a8)}this.SetProperty(ab,at(a8))}a3.prototype.createPeriod=function(be,bd){var a8,bb,bj,ba,bc,bg,bf=3600000,bh=24,a9=this.ExecuteMethod("getTimeScaleUnits"),bk=this.Get(aO),bi="";a8=new Date(this.Get(aU));if(!a8||!a8 instanceof Date){a8=new Date()}if(this.Get(o)){bc=String(this.Get(o))}else{bc=7}if(this.Get(R)){bg=String(this.Get(R))}else{bg=a8.format("EEEE")}this.SetProperty("EndTime","");this.SetProperty("FinalWeekDays",aM(a8,bg,bc,bi));switch(Number(this.Get(aa))){case (C):case (h):case (S):case (X):a8.setDate(a8.getDate()+(be*a9));a8.setHours(0,0,0,0);bb=new Date(a8.getTime());bb.setDate(a8.getDate()+(bd*a9)-1);bb.setHours(23,59,59,999);break;case (U):a8.setDate(a8.getDate()+(be*a9));ba=bk[0];this.ExecuteMethod("setHoursFrom",a8,ba.ST);bb=new Date(a8.getTime());bb.setDate(a8.getDate()+(bd*a9)-7);this.SetProperty("StartTime","0");this.SetProperty("EndTime",24*bf-1);this.SetProperty("TDays",7*24*bf);this.SetProperty("AxisDuration",24*bf-1);break;case (z):case (W):a8.setDate(a8.getDate()+(be*a9));a8.setHours(0,0,0,0);bb=new Date(a8.getTime());bb.setDate(a8.getDate()+(bd*a9)-1);bb.setHours(23,59,59,999);break;case (aZ):a8.setDate(a8.getDate()+(be*a9));a8.setHours(0,0,0,0);bb=new Date(a8.getTime());bb.setDate(a8.getDate()+(bd*a9)-1);bb.setHours(23,59,59,999);break;case (d):a8.setDate(a8.getDate()+(be*a9));a8.setHours(0,0,0,0);bb=new Date((a8.getTime())+bd*(bf*bh*364));bb.setHours(23,59,59,999);break;case (l):a8.setDate(a8.getDate()+(be*a9));a8.setHours(0,0,0,0);bb=new Date(a8.getTime());bb.setDate(a8.getDate()+(bd*a9)-7);bb.setHours(23,59,59,999);break;case (O):a8.setDate(a8.getDate()+(be*a9));a8.setHours(0,0,0,0);bb=new Date(a8.getTime());bb.setDate(a8.getDate()+(bd*a9)-7);bb.setHours(23,59,59,999);break;default:a8.setDate(a8.getDate()+(be*a9));a8.setHours(0,0,0,0);
bb=new Date(a8.getTime());bb.setDate(a8.getDate()+(bd*a9)-1);bb.setHours(23,59,59,999);break}this.SetProperty(aj,a8.getTime());this.SetProperty(x,bb.getTime());this.SetProperty(o,bc);if(this.Get("EndTime")||this.Get("TST")==="256"){this.calcDayLeft()}};function s(bd,a9){var bc=0,ba,bb=0,a8=a9.length;bd.setHours(0,0,0,0);for(ba=0;ba<a8;ba++){if(a9.charAt(ba)!=":"){bb=(bb*10)+Number(a9.charAt(ba))}else{if(bc===0){bd.setHours(bb)}else{if(bc==1){bd.setMinutes(bb)}else{bd.setSeconds(bb);break}}bb=0;bc=bc+1}}}function aM(bf,ba,bd,a9){var a8=86400000,bb,bc;var be=new Date();for(bb=1;bb<8;bb++){if(be.format("EEEE")===ba){bf=be;break}be=new Date((bf.getTime())+a8*bb)}a9=bf.getDay()+",";for(bb=1;bb<bd;bb++){bc=new Date((bf.getTime())+a8*bb);a9+=bc.getDay()+","}return a9}function at(a8){switch(Number(a8)){case (C):case (aZ):return 1;case (h):return 2;case (S):return 4;case (l):return 7;case (O):return 7;default:return 1}}function M(ba){var bb,a8=0;if(ba&&ba instanceof JSSPropertySet){a8=ba.GetChildCount();for(var a9=0;a9<a8;a9++){bb=ba.GetChild(a9);if(bb.GetType()==a1){this.ExecuteMethod("prepareResStaticInfo",bb)}}}}function a0(bb){var ba,a9=0;if(bb&&bb instanceof JSSPropertySet){a9=bb.GetChildCount();aQ.call(this,bb);for(var a8=0;a8<a9;a8++){ba=bb.GetChild(a8);switch(ba.GetType()){case (au):this.SetProperty("RESOURCEHEADER",K(ba));break;case (ap):this.SetProperty(L,ao(ba,this.Get(L)));break}}}}function q(ba){var be,bc,bd,bf,a8;if(ba&&ba instanceof JSSPropertySet){bd=ba.GetChildCount();for(var bb=0;bb<bd;bb++){be=ba.GetChild(bb);if(be.GetType()==a1){bf=be.GetChildCount();for(var a9=0;a9<bf;a9++){bc=be.GetChild(a9);switch(bc.GetType()){case aB:this.SetProperty("Activity_DDInfo",ao(bc));break;case ap:this.SetProperty(L,ao(bc,this.Get(L)));break;case"Color":this.SetProperty(v,ao(bc));if(!this.Get(aV)){this.SetProperty(aV,this.Get(v)["Event Status"])}break;case Q:this.SetProperty(Q,ao(bc));break;case P:this.SetProperty(P,ao(bc));break}}a8=be.GetProperty("Disable ExtendShrink Views");if(a8){this.SetProperty("DisableExtendShrinkTS",":"+a8+":")}a8="";a8=be.GetProperty("Round Minutes Events");if(a8){this.SetProperty("Round Minutes Events",a8)}a8="";a8=be.GetProperty(a7);if(a8){this.SetProperty(a7,a8)}a8="";a8=be.GetProperty("Event Default Color");if(a8){this.SetProperty(E,a8)}}else{if(be.GetType()==p){this.ExecuteMethod("prepareEventInfo",be)}}}}}function ay(a9){var a8="",bb=0,bd,be,ba=this.Get("ResEvents");if(a9){aQ.call(this,a9);bb=a9.GetChildCount();for(var bc=0;bc<bb;bc++){bd=[];be=a9.GetChild(bc);a8=be.GetType();ba[a8]={};ba[a8].EVENTS=m(be,bd);ba[a8].BOOKINGS=bd}}}function m(be,bd){var ba,a9={},a8,bc,bb=be.GetChildCount();for(ba=0;ba<bb;ba++){bc=be.GetChild(ba);a8=bc.GetProperty("ID");a9[a8]=ao(bc);bd[ba]=a8}return a9}function K(bb){var a9,a8=[],ba=bb.GetChildCount();for(a9=0;a9<ba;a9++){a8[a9]=ao(bb.GetChild(a9))}return a8}function ao(ba,bb){var a8,a9={};if(bb){a9=bb}if(ba){a8=ba.EnumProperties(true);do{if(a8){if(!a9){a9={}}a9[a8]=ba.GetProperty(a8)}a8=ba.EnumProperties(false)}while(a8)}return a9}function aQ(a9){var a8=a9.EnumProperties(true);if(a8){do{this.SetProperty(a8,a9.GetProperty(a8));a8=a9.EnumProperties(false)}while(a8)}}function u(bc){var a9,be={},bd,a8,ba=bc.GetChildCount(),bb;for(a9=0;a9<ba;a9++){a8=bc.GetChild(a9);bd=a8.GetType();if(!bd){break}bb=new Date(bd).format("MM/dd/yyyy");be[bb]=ao(a8)}return be}a3.prototype.calcDayLeft=function(){var bf=new Date(this.Get(aj)),a8=new Date(this.Get(x)),bb,bd=this.Get("TDays"),ba=0,a9={},bc=this.Get("TST"),be=this.ExecuteMethod("getTimeScaleUnits");bb=1/(this.Get("TotalHPages")>0?this.Get("TotalHPages"):1);if(bc==="256"){if(be){bb=bb/be*7}}while(bf.getTime()<=a8.getTime()){a9[(bf).format("MM/dd/yyyy")]=ba;ba=ba+bb;bf.setTime(bf.getTime()+bd)}this.SetProperty("DayLoc",a9);this.SetProperty("PixelsPerUnit",bb);if(this.Get("EndTime")-this.Get("StartTime")>0){this.SetProperty("miniFX",bb/(this.Get("EndTime")-this.Get("StartTime")))}};a3.prototype.calcLeftWidth=function(bd,bk){var bi,bo,bh,bp,bg,bj=new Object(),bb=this.Get("StartTime"),bm=this.Get("EndTime"),bl=this.Get("PixelsPerUnit"),a9=this.Get("AxisDuration"),ba=new Date(this.Get(aj)),be=this.Get("DayLoc"),bc=60000,a8=this.Get("TST");var bf=ba.getTimezoneOffset();var bn;if(a8==="256"){if(typeof be[(bd).format("MM/dd/yyyy")]==="undefined"){bd.setDate(bd.getDate()+((ba.getDay()-bd.getDay()+7)%7));bd.setHours(0,0,0,0)}if(typeof be[(bk).format("MM/dd/yyyy")]==="undefined"){bk.setDate(bk.getDate()+((ba.getDay()-bk.getDay()+7)%7));bk.setHours(0,0,0,0)}}bj.Left=be[(bd).format("MM/dd/yyyy")];bp=be[(bk).format("MM/dd/yyyy")];bn=bd.getTimezoneOffset();bi=(bd.getHours()*60+bd.getMinutes()+(bn-bf))*bc;bn=bk.getTimezoneOffset();bo=(bk.getHours()*60+bk.getMinutes()+(bn-bf))*bc;if(bi>=bb&&bi<=bm){bj.Left=bj.Left+(bi-bb)*this.Get("miniFX")}else{if(bi>bm){bj.Left=bj.Left+bl}}if(bo>=bb&&bo<=bm){bp=bp+(bo-bb)*this.Get("miniFX")}else{if(bo>bm){bp=bp+bl}}bj.Width=bp-bj.Left;bj.Left=bj.Left*100*this.Get("TotalHPages")*this.Get("Scale_factor");bj.Width=bj.Width*100*this.Get("TotalHPages")*this.Get("Scale_factor");bj.Left=isNaN(bj.Left)?0:bj.Left;bj.Width=isNaN(bj.Width)?0:bj.Width;return bj};function a2(ba){if(this.Get("EnableTooltip")==="Y"){if(J){var a8=null;var a9={};a9.async=false;a9.selfbusy=true;a9.scope=this;a9.cb=function(){a8=arguments[2];if(a8){this.SetProperty("tooltipMap",a8.GetChildByType("ResultSet"))}};J.InvokeMethod(("GetTooltipInfo"),ba,a9)}}}function am(bm){var bd,bk={},bg,bi,a8,ba,bn,bh,bc,bl,bj,be=this.Get(aj),a9=this.Get(x),bf=bm.GetChildCount();for(bd=0;bd<bf;bd++){var bb=false;bn=bm.GetChild(bd);a8=bn.GetProperty("SD");if(!a8){break}else{bl=new Date(a8);bl.setHours(0,0,0,0);bj=bl}ba=bn.GetProperty("ED");if(!ba){bb=true}else{bj=new Date(ba);bj.setHours(0,0,0,0)}bh=new Date(be);bh.setHours(0,0,0,0);bc=new Date(a9);bc.setHours(0,0,0,0);while(bh.getTime()<=bc.getTime()){if((!bb&&bh.getTime()>=bl.getTime()&&bh.getTime()<=bj.getTime())){bi={};if(bk[bh.format("MM/dd/yyyy")]){bi=bk[bh.format("MM/dd/yyyy")];bg=bn.EnumProperties(true);if(bg){do{if(bg!=="SD"&&bg!="ED"&&bn.GetProperty(bg)){bi[bn.GetProperty(bg)]=""}bg=bn.EnumProperties(false)}while(bg)}}else{bg=bn.EnumProperties(true);if(bg){do{if(bg!="SD"&&bg!="ED"){bi[bn.GetProperty(bg)]=""}bg=bn.EnumProperties(false)}while(bg);bk[bh.format("MM/dd/yyyy")]=bi}}}bh=new Date(bh);bh.setDate(bh.getDate()+1)}}return bk}function az(bj,bk){var a8=this.Get("RecordSet"),bc=this.Get("ResIDtoIndex"),bl=a8.length,bd=this.Get("RJoinFld"),ba=this.Get("RParentFld"),bh="",bb=0,bn="",bm=this.Get(V)[L],bi=0,bg=this.Get("RColorFld"),a9="";if(!a8){return}if(!bc){return}if(this.Get("RESOURCEHEADER")[0]&&this.Get("RESOURCEHEADER")[0]["ICONFLDS"]){bh=this.Get("RESOURCEHEADER")[0]["ICONFLDS"].split(",");bb=bh.length}for(var bf=bj;bf<bk&&bf<bl;bf=bf+1){bc[a8[bf][bd]]=bf;if(a8[bf]["Outline Number"]){a9=a8[bf]["Outline Number"].match(/./g);if(a9){a8[bf].LEVEL=a9.length-1}}if(a8[bf]["Has Children"]){if(a8[bf].LEVEL===0&&a8[bf]["Has Children"]==="1"){a8[bf].CLS="siebui-expcoll ui-icon ui-icon-triangle-1-se"
}else{if(a8[bf].LEVEL!==0){a8[bf].CLS="siebui-expnone ui-icon ui-icon-radio-off"}}}else{a8[bf].CLS="siebui-noIcon"}a8[bf]["Index"]=bf;for(var be=0;be<bb;be++){if(a8[bf][bh[be]]==="Y"){if(bm&&bm[bh[be]]){bn=bn+"<span><span class='"+bm[bh[be]]+"'></span></span>"}bi=bi+1}}if(a8[bf].LEVEL>=bi){a8[bf].LEVEL=a8[bf].LEVEL-bi}a8[bf]["Icons"]=bn;bn="";bi=0;a8[bf].STCLS="";if(a8[bf][bg]){a8[bf].STCLS=" siebui-"+a8[bf][bg]}}this.SetProperty("RecordSet",a8);this.SetProperty("ResIDtoIndex",bc)}a3.prototype.prepareUtillpage=function(bz,bp){var br=this.Get("ResEvents"),bi=this.Get(aj),be=this.Get("DayLoc"),bq=this.Get("fx"),bB=this.Get("RecordSet"),by=0,bF=this.Get("RJoinFld"),bc=this.Get("RParentFld"),bA=this.Get(x),bk="ST",bl,a9;ETF="ET";by=bB?bB.length:0;if(this.Get("TurnTime")==="Y"){bk="AST";ETF="AET"}for(var bE=bz;bE<bp;bE=bE+1){if(br[bB[bE][bF]]){bB[bE].EVENTS=br[bB[bE][bF]].EVENTS;bB[bE].BOOKINGS=br[bB[bE][bF]].BOOKINGS;var bI="",ba=0,bw="",a8=20,bf=0;if(bB[bE].BOOKINGS){var bj=bB[bE].BOOKINGS.length,bn=0,bv=0,bm=0;for(var bC=0;bC<bj;bC=bC+1){bw=bB[bE].EVENTS[bB[bE].BOOKINGS[bC]];if(bk==="AST"&&typeof(bw[bk])==="undefined"){bk="ST"}if(ETF==="AET"&&typeof(bw[ETF])==="undefined"){ETF="ET"}var bs=new Date(bw[bk]);var bo=new Date(bw[ETF]);if(bA<bs.getTime()){continue}if(bA<bo.getTime()){bo=new Date(bA)}if(this.Get("EndTime")){if(bs.getTime()<bi){bs=new Date(bi)}if(bs.format("MM/dd/yyyy")!==bo.format("MM/dd/yyyy")&&(typeof(be[(bs).format("MM/dd/yyyy")])==="undefined"||typeof(be[(bo).format("MM/dd/yyyy")])==="undefined")){var bg=false;var bH=false;var bD=new Date(bs.getTime());var bG=new Date(bo.getTime());for(var bx=0;bx<7;bx++){if(bD>=bG){break}if(!bg&&typeof(be[(bD).format("MM/dd/yyyy")])!=="undefined"){bg=true}if(!bH&&typeof(be[(bG).format("MM/dd/yyyy")])!=="undefined"){bH=true}if(bg&&bH){bs=new Date(bD.getTime());bo=new Date(bG.getTime());break}if(!bg){bD.setDate(bD.getDate()+1);bD.setHours(0,0,0,0)}if(!bH){bG.setDate(bG.getDate()-1);bG.setHours(23,59,59,999)}}}}if(bw.OLPCNT&&bI!==""&&bI.loco){ba=0}if(bw.OLPCNT){bv=(a8/bw.OLPCNT);bm=bv;if(this.Get("isHospitalityScheduler")){if(bw.SEQ){bn=bm*(bw.SEQ-1)}}else{ba++;if(ba==1){bn=bf}else{if(bw.OTE){}else{bn=bn+bv}}}}else{ba=0;bn=bf;bm=a8}bl=0;a9=null;if(this.Get("EndTime")||this.Get("TST")=="256"){a9=this.calcLeftWidth(bs,bo);bl=1}bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["left"]=bl?a9.Left:((bs.getTime()-bi)*100*this.Get("TotalHPages"))/(bA-bi)*this.Get("Scale_factor");bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["width"]=bl?a9.Width:((bo-bs)/(bA-bi))*100*this.Get("TotalHPages")*this.Get("Scale_factor");bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["top"]=bn;bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["height"]=bm;if(this.Get("TurnTime")==="Y"&&bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["STTF"]==="Y"){var bt=new Date(bw.ST);if(bt.getTime()!==bs.getTime()){bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["SW"]=((bt.getTime()-bs.getTime())/(bo-bs))*100}var bu=new Date(bw.ET);if(bu.getTime()!==bo.getTime()){bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["TW"]=((bo.getTime()-bu.getTime())/(bo-bs))*100}}var bb="";var bd=((this.Get("DDrag")!="Y")&&(bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["DRG"]==="Y"));var bh=bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["DCLK"]==="Y";var bJ=((this.Get("DRSZ")!="Y")&&(bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["RSZ"]?bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["RSZ"]==="Y":bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["DRG"]==="Y"));if(bd){bb=bb+" Dragpble"}if(bh){bb=bb+" DClickable"}if(bJ){bb=bb+" Rsizable"}if(bw.OLPCNT&&bw.OLPCNT==="2"){bb=bb+" siebui-overlapEvent"}bB[bE].EVENTS[bB[bE].BOOKINGS[bC]]["CLS"]=bb;bI=bw}}}else{bB[bE].EVENTS={};bB[bE].BOOKINGS={}}}this.SetProperty("RecordSet",bB)};function r(a9){var a8={},ba,bh,bd,bb,bf,bg,bc,be;for(be in a9){if(a9.hasOwnProperty(be)){bc=be.indexOf("-");if(bc==-1){continue}bf=Number(be.substring(0,bc));bg=Number(be.substring(bc+1,be.length));while(bf<bg){a8[bf]=a9[be];bf=bf+1}}}return a8}function a5(){return ae[this.Get(aa)]}function D(){return aD[this.Get(aa)]}function ag(a8){var bc,ba=this.ExecuteMethod("getTimeScalePeriods"),a9,bb;if(a8===""){a8=this.Get(aU)}bc=av.GetStringFromDateTime(a8,Y,i);if(ba>0){bb=new Date(a8);bb.setDate(bb.getDate()+ba);a9=av.GetStringFromDateTime(bb.format(a6),Y,i);return(bc+" - "+a9)}else{return bc}}function af(ba,bc,bb,a9){var a8=0;if(ba==="FilterGantt"||ba==="ReSetFilterGantt"){a8=a8|(1<<1);a8=a8|(1<<2);a8=a8|(1<<4);this.SetProperty("PanesToRefresh",a8);bc.SetProperty("PanesToRefresh",a8);a9.CancelOperation=false}else{if(ba==="RefreshGantt"){a8=this.Get("PanesToRefresh");bc.SetProperty("PanesToRefresh",a8);bc.SetProperty("TST",this.Get("TST"));a9.CancelOperation=false}else{if(ba==="Show Legends"){this.SetProperty("ShowLegend",true);a9.CancelOperation=true}else{if(ba==="Hide Legends"){this.SetProperty("ShowLegend",false);a9.CancelOperation=true}else{if(ba==="ExpandAll"){this.SetProperty("expcolpse",true);a9.CancelOperation=true}else{if(ba==="CollapseAll"){this.SetProperty("expcolpse",false);a9.CancelOperation=true}else{if(ba==="FilterDisplayOptions"||ba==="ResetDisplayOptions"){if(ba==="ResetDisplayOptions"){a8=a8|(1<<0);this.SetProperty(aV,"");this.SetProperty("Redraw Legends","Y")}a8=a8|(1<<1);a8=a8|(1<<2);a8=a8|(1<<4);this.SetProperty("PanesToRefresh",a8);bc.SetProperty("PanesToRefresh",a8);a9.CancelOperation=false}else{a9.CancelOperation=false}}}}}}}}function b(a9,a8){if(a9==="Show Legends"){a8.CancelOperation=true;a8.ReturnValue=!this.Get("ShowLegend")}else{if(a9==="Hide Legends"){a8.CancelOperation=true;a8.ReturnValue=this.Get("ShowLegend")}else{a8.CancelOperation=false}}}function ar(ba){var a9=SiebelApp.S_App.GetService(this.Get("SERVICE_NAME"));if(a9){var a8={};a8.async=false;a8.npr=true;a8.selfbusy=true;a8.scope=this;a8.cb=function(){};a9.InvokeMethod("SaveGanttUserPref",ba,a8)}}function al(a8){this.ExecuteMethod("InvokeMethod","SaveControlValues",a8)}return a3}());return"SiebelAppFacade.GanttPresentationModel"})};