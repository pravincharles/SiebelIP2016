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
if(typeof(SiebelAppFacade.MsgBrdCstPresentationModel)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.MsgBrdCstPresentationModel");SiebelAppFacade.MsgBrdCstPresentationModel=(function(){var l=SiebelJS.Dependency("SiebelApp.Constants");var p=SiebelJS.Dependency("SiebelApp.Utils");var a=0;function k(r){SiebelAppFacade.MsgBrdCstPresentationModel.superclass.constructor.call(this,r)}SiebelJS.Extend(k,SiebelAppFacade.PresentationModel);k.prototype.Init=function(){if(SiebelApp.S_App.IsMsgBarEnabled()){this.AddProperty("DefaultUpdateInterval",30);this.AddProperty("MsgUserPrefPS",CCFMiscUtil_CreatePropSet());this.AddProperty("MsgChanged",false);this.AddProperty("MsgCount",0);this.AddProperty("MsgObjArray",[]);this.AddMethod("UpdateMessageBar",c);this.AddMethod("AddNotification",d);this.AddMethod("DeleteNotification",m);this.AddMethod("UpdateNotification",n);this.AddMethod("ReadNotification",o);this.AttachEventHandler("ShowMessageBar",h);this.AttachEventHandler("UpdateServer",f);this.AttachEventHandler("DownLoadFileFromServer",j)}};k.prototype.Show=function(){var r=this.GetRenderer();r.ShowUI();r.BindEvents()};k.prototype.Setup=function(r){SiebelAppFacade.MsgBrdCstPresentationModel.superclass.Setup.call(this,r)};function d(t){var s,u,C,x;var y=SiebelApp.S_App.GetService("Message Bar");var r=SiebelApp.S_App.NewPropertySet();var D=SiebelApp.S_App.NewPropertySet();var w=true;if(t!==null){var B=this.Get("MsgObjArray");for(var v=0;v<t.GetChildCount();v++){r=t.GetChild(v);r.GetProperty("Type",s);r.GetProperty("Body",C);if(C===null||s===null){SiebelJS.Log("Type Body and Id are the required fields");w=false}x=r.GetType();if(x==="Local"){B.splice(0,0,this.MsgBarLocalMessage(r));r.SetProperty("Msg Id",B[0].id);D.AddChild(r);t.RemoveChild(v);v--}}if(D.GetChildCount()>0){this.SetProperty("MsgChanged",true);var A=B.length;this.SetProperty("MsgCount",A);this.SetProperty("MsgObjArray",B);this.GetRenderer().UpdateMsgBar();return D}}if(w){if(y){var z={};z.async=false;z.selfbusy=true;z.npr=false;z.scope=this;return y.InvokeMethod("AddNotification",t,z)}}}k.prototype.MsgBarLocalMessage=function(t){var s;var u={};u.local="Y";u.id="LM"+a++;s=t.GetProperty("Callback");u.callback=(typeof(s)==="undefined"?"":s);s=t.GetProperty("Body");u.body=(typeof(s)==="undefined"?"":s);s=t.GetProperty("Type");u.type=(typeof(s)==="undefined"?"":s);s=t.GetProperty("Abstract");u.summary=(typeof(s)==="undefined"?"":s);s=t.GetProperty("User Message Status");u.status=(typeof(s)==="undefined"?"":s);s=t.GetProperty("Allow Dismiss");u.dismiss=(typeof(s)==="undefined"?"":s);s=t.GetProperty("Created");if(typeof(s)==="undefined"){var r=new Date();s=((r.getMonth()+1)<10?"0"+(r.getMonth()+1):(r.getMonth()+1))+"/"+(r.getDate()<10?"0"+r.getDate():r.getDate())+"/"+r.getFullYear()+" "+(r.getHours()<10?"0"+r.getHours():r.getHours())+":"+(r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes())+":"+(r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds())}u.created=SiebelApp.S_App.LocaleObject.StringToFormatted("utcdatetime",s,SiebelApp.S_App.LocaleObject.GetDatum("date").GetFormat());return u};function m(C){var t,x,v;var r=0;var w=true;var y=SiebelApp.S_App.GetService("Message Bar");var s=SiebelApp.S_App.NewPropertySet();if(C!==null){var B=this.Get("MsgObjArray");for(var u=0;u<C.GetChildCount();u++){s=C.GetChild(u);t=s.GetProperty("Msg Id");if(t===null){SiebelJS.Log("Row id is required");w=false}x=s.GetType();if(x==="Local"){for(v=0;v<B.length&&B[v].id!==t;v++){}if(v<B.length&&B[v].id===t){B.splice(v,1);this.SetProperty("MsgChanged",true);var A=B.length;this.SetProperty("MsgCount",A);this.SetProperty("MsgObjArray",B);this.GetRenderer().UpdateMsgBar()}C.RemoveChild(u);u--;if(C.GetChildCount()===0){w=false}}}}if(w){if(y){var z={};z.async=false;z.selfbusy=true;z.npr=false;z.scope=this;return y.InvokeMethod("DeleteNotification",C,z)}}}function o(t){var u;var r=0;var w=true;var x=SiebelApp.S_App.GetService("Message Bar");var s=SiebelApp.S_App.NewPropertySet();if(t!==null){var y=t.GetChildCount();for(var v=0;v<y;v++){s=t.GetChild(v);s.GetProperty("Msg Id",u);if(u===null){SiebelJS.Log("Row Id is required");w=false}}}if(w){if(x){var z={};z.async=false;z.npr=false;z.selfbusy=true;z.scope=this;return x.InvokeMethod("ReadNotification",t,z)}}}function n(y){var s,w,u;var v=true;var x=SiebelApp.S_App.GetService("Message Bar");var r=SiebelApp.S_App.NewPropertySet();if(y!==null){var B=this.Get("MsgObjArray");for(var t=0;t<y.GetChildCount();t++){r=y.GetChild(t);s=r.GetProperty("Msg Id");if(s===null){SiebelJS.Log("Row Id is required");v=false}w=r.GetType();if(w==="Local"){for(u=0;u<B.length&&B[u].id!==s;u++){}if(u<B.length&&B[u].id===s){B[u]=this.MsgBarLocalMessage(r);B[u].id=s;this.SetProperty("MsgChanged",true);var A=B.length;this.SetProperty("MsgCount",A);this.SetProperty("MsgObjArray",B);this.GetRenderer().UpdateMsgBar()}y.RemoveChild(u);t--}}}if(v&&w!=="Local"){if(x){var z={};z.async=false;z.selfbusy=true;z.npr=false;z.scope=this;return x.InvokeMethod("UpdateNotification",y,z)}}}function f(w,v){var s=SiebelApp.S_App.GetService("Message Bar");var u=SiebelApp.S_App.NewPropertySet();var r=SiebelApp.S_App.NewPropertySet();u.SetProperty("User MsgId",w);u.SetProperty("User MsgStatus",v);u.SetProperty(l.get("SWE_BUSINESS_SERVICE"),l.get("SWE_NUMERIC_TRUE"));if(s){r=null;var t={};t.async=true;t.npr=false;t.selfbusy=true;t.scope=this;s.InvokeMethod("UpdateUserMsg",u,t);r=arguments[2]}}function j(y){var u=false;var x=SiebelApp.S_App.GetService("Message Bar");var r=SiebelApp.S_App.NewPropertySet();var B=SiebelApp.S_App.NewPropertySet();var t=y.split(";");for(var v=0;v<t.length;v++){var A=t[v].indexOf(":");if(A<0){continue}var w=$.trim(t[v].substr(0,A)).toLowerCase();var s=$.trim(t[v].substr(A+1));switch(w){case"bo":r.SetProperty("BO",s);break;case"bc":r.SetProperty("BC",s);break;case"view":r.SetProperty("View",s);u=true;break;case"field":r.SetProperty("Field",s);break;case"file ext":r.SetProperty("File Ext",s);break;case"id":r.SetProperty("Id",s);break;default:break}}if(x){B=null;var z={};z.async=true;z.npr=false;z.selfbusy=true;z.scope=this;z.cb=function(){if(u===true){this.GetRenderer().CloseMainDialog()}};x.InvokeMethod("DownLoadReport",r,z)}}function c(){var v,t;var s=SiebelApp.S_App.GetService("Message Bar");var y=SiebelApp.S_App.NewPropertySet();y.SetProperty(l.get("SWE_BUSINESS_SERVICE"),l.get("SWE_NUMERIC_TRUE"));var r=SiebelApp.S_App.NewPropertySet();if(s){r=null;var w=this;var u="UpdatePrefMsg";var x={};x.async=true;x.scope=this;x.npr=false;x.selfbusy=true;x.cb=function(){r=arguments[2];if(r!==null){var z=r.GetChildCount();for(var B=0;B<z;B++){var A=r.GetChild(B);if(A!==null&&A.GetType()==="ResultSet"){var C=A.GetProperty("returnVal");b.call(w,C);w.GetRenderer().UpdateMsgBar()}}}};s.InvokeMethod(u,y,x)}}function h(){var s=SiebelApp.S_App.GetService("Message Bar");var w=SiebelApp.S_App.NewPropertySet();w.SetProperty(l.get("SWE_BUSINESS_SERVICE"),l.get("SWE_NUMERIC_TRUE"));w.SetProperty("IsInitiated","FALSE");var r=SiebelApp.S_App.NewPropertySet();if(s){var t="UpdatePrefMsg";
var u=this;var v={};v.async=true;v.scope=this;v.selfbusy=true;v.cb=function(){r=arguments[2];if(r!==null){var x=r.GetChildCount();for(var z=0;z<x;z++){var y=r.GetChild(z);if(y!==null&&y.GetType()==="ResultSet"){var A=y.GetProperty("returnVal");b.call(u,A);u.GetRenderer().CreateMsgBar()}}var B=u.Get("MsgUserPrefPS").GetProperty("UpdateInterval");B=parseInt(B,10);if(B!==0&&!isNaN(B)){setInterval(function(){u.ExecuteMethod("UpdateMessageBar")},B*1000)}}};s.InvokeMethod(t,w,v)}}function g(u){var t=new Array(1);t[0]=0;var r=q(u,t);r=q(u,t);var s=this.Get("MsgUserPrefPS");s.SetProperty("Normal",q(u,t));s.SetProperty("Automation",q(u,t));s.SetProperty("High",q(u,t));s.SetProperty("Urgent",q(u,t));s.SetProperty("UrgentWA",q(u,t));this.AddProperty("MsgUserPrefPS",s)}function b(E){var I=this.Get("MsgObjArray");var N=false;var J=false;var y=new Array(1);y[0]=0;y[0]=E.indexOf("-$$$-");if(y[0]>=0){if(y[0]>0){var P=E.substring(0,y[0]);g.call(this,P);N=true}y[0]+=5}else{y[0]=0}var w,u,t,A=0,K=0;w=E.indexOf("-|||-",y[0]);u=E.indexOf("--saMe--",y[0]);t=E.indexOf("--saMe--",w);if((u===-1)||(u>w)){var D=parseInt(q(E,y),10);var H=parseInt(q(E,y),10);var v=parseInt(q(E,y),10);var M=e(q(E,y));var x=e(q(E,y));var r=e(q(E,y));var G=e(q(E,y));var Q=parseInt(q(E,y),10);var B=q(E,y);var C=q(E,y);var z=q(E,y);if(N){var L=this.Get("MsgUserPrefPS");L.SetProperty("NormalColor",x);L.SetProperty("HighColor",r);L.SetProperty("UrgentColor",G);var s=this.Get("DefaultUpdateInterval");Q=Q>s?Q:s;L.SetProperty("UpdateInterval",Q);L.SetProperty("PrefixNormal",B);L.SetProperty("PrefixHigh",C);L.SetProperty("PrefixUrgent",z);this.AddProperty("MsgUserPrefPS",L)}}if(t===-1){while(K<I.length){if(I[K].local!=="Y"){I.splice(K,1)}else{K++}}y[0]=E.indexOf("Msg",w);while(w<y[0]&&y[0]<E.length){y[0]+=3;var O=this.MsgBarMessage(E,y);if(O!==null){I[K]=O;K++}}J=true}this.SetProperty("MsgChanged",J);if(J){var F=I.length;this.SetProperty("MsgCount",F);this.SetProperty("MsgObjArray",I)}}k.prototype.MsgBarMessage=function(v,z,F,w){if(v===null){return}var C=q(v,z);var A=q(v,z);var r=q(v,z);var x=q(v,z);var B=q(v,z);var s=q(v,z);var H=q(v,z);var u=q(v,z);var E=q(v,z);var I="MESSAGEBROADCASTING_SYNCNODE=";var y=A.indexOf(I);var D={};if(F&&F==="Y"){D.id=a++;D.local="Y"}else{if(y>-1&&window.localStorage){var t=localStorage.getItem(l.get("SYNC_NODE_ID"));if(t&&A.indexOf(t,y)>0){var G="PatternStart:";var J=A.indexOf(G);A=A.substring(0,J)}else{return null}}D.id=C}if(w){D.callbcak=w}D.body=A;D.type=r;D.summary=s;D.status=H;D.dismiss=u;D.created=SiebelApp.S_App.LocaleObject.StringToFormatted("utcdatetime",E,SiebelApp.S_App.LocaleObject.GetDatum("date").GetFormat());return D};function e(v){var u=0;if(v.charAt(0)==="#"){return v}var r=v.split(",");var t="#",s;for(u=0;u<3;u++){s=i(r[u],16);if(s.length===1){s="0"+s}t+=s}return t}function i(v,t){var r="",u=Math.floor(Math.abs(v)),s;if(!u||typeof(u)==="undefined"){return"0"}while(true){s=u%t;r="0123456789abcdefghijklmnopqrstuvwxyz".charAt(s)+r;u=(u-s)/t;if(u===0){break}}return((v<0)?"-"+r:r)}function q(v,w){var s="*4*TRUE*";var t,u,r=null;if(v.charAt(w[0])==="*"){w[0]++;t=v.indexOf("*",w[0]);if(t>0){r=parseInt(v.substring(w[0],t),10);if(r===null){return""}}if(t<v.length&&v.charAt(t)==="*"){u=v.substring(t+1,r+t+1);w[0]=t+r+1;return u}}return""}return k}())};