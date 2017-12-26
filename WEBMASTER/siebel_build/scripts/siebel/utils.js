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
function Namespace(e){var d=e.split("."),c=SiebelApp,b;if(d[0]==="SiebelApp"){d=d.slice(1)}var a=d.length;for(b=0;b<a;b+=1){if(typeof c[d[b]]==="undefined"){c[d[b]]={}}c=c[d[b]]}return c}if(typeof(SiebelApp.Utils)==="undefined"){Namespace("SiebelApp.Utils")}SiebelApp.Utils.Trim=function(a){if(typeof(a)==="string"){a=a.replace(/^\s+|\s+$/g,"")}return a};SiebelApp.Utils.LTrim=function(a){return a.replace(/^\s+/,"")};SiebelApp.Utils.RTrim=function(a){return a.replace(/\s+$/,"")};SiebelApp.Utils.Expand=function(f,a,b){var e=f.indexOf(a);if(e<0){return f}var i=this.Trim(f.substring(0,e-1));var j=this.Trim(f.substring(e));var d=b-j.length;var g=new String("                                              ");var h=g.substring(0,d-i.length);var c=i.concat(h,j);return c};SiebelApp.Utils.DecodeFromQueryString=function(g,f){var d=CCFMiscUtil_CreatePropSet();var b=g.split("?");if(b.length==2){g=b[1]}var h;b=g.split("&");for(var c=0,a=b.length;c<a;c++){if(typeof b[c]=="function"){continue}var e=b[c].split("=");if(e.length==2){h=(f&&(e[0]==="SWERowId0"))?this.EncodeURL(e[1]):e[1];d.SetProperty(this.UrlDecode(e[0]),this.UrlDecode(h))}}return d};SiebelApp.Utils.UrlDecode=function(a){a=a.replace(/\+/g," ");return a};SiebelApp.Utils.EncodeURL=function(a){a=a.replace(/\+/g,"%2b");return a};SiebelApp.Utils.DecodeURL=function(a){a=a.replace(/%2b/g,"+");a=a.replace(/%2f/g,"/");a=a.replace(/%3a/g,":");return a};SiebelApp.Utils.EncodeToQueryString=function(d,h){var f=SiebelApp.Constants;var g="";var a=d.EnumProperties(true);var i=0;var b=d.GetPropertyCount();var c;var e;h=(typeof h=="undefined");do{i++;if(typeof d.GetProperty(a)!="function"){c=h?URLEncode(a):a;e=h?URLEncode(d.GetProperty(a)):d.GetProperty(a);g+=(c+f.get("SWE_ARG_EQUAL")+e+(i<b?"&":""))}}while((a=d.EnumProperties(false)));return g};SiebelApp.Utils.IsEmpty=function(a){return a===undefined||a===null||a==="undefined"||a==="null"||(a!==0&&a!==false&&a=="")};SiebelApp.Utils.GetstyleSheetPropVal=function(l,g,a){var h=document.styleSheets;for(var c=0,e=h.length;c<e;c++){var f=h[c];if(typeof(f.href)==="string"&&f.href.match(l)!=null){var k=f.rules?f.rules:f.cssRules;if(k){for(var b=0,d=k.length;b<d;b++){if(k[b].selectorText==g){return k[b].style[a]}}}break}}return null};SiebelApp.Utils.IsTrue=function(a){var c="";if(a!="undefined"&&a!=undefined&&a!=null){var b=""+a;if(b!=""){c=b.toLowerCase()}}return c=="on"||c=="1"||c=="true"||c=="y"||c=="t"};SiebelApp.Utils.DefineConstants=function(){var b={},a=Object.prototype.hasOwnProperty;return{set:function(c,d){if(this.isDefined(c)){return false}b[c]=d;return true},isDefined:function(c){return a.call(b,c)},get:function(c){if(this.isDefined(c)){return b[c]}return null}}};SiebelApp.Utils.Curry=function(a){var b=Array.prototype.slice;var c=b.call(arguments,1);return function(){var d=b.call(arguments);a.apply(null,c.concat(d))}};SiebelApp.Utils.Inherit=function(b,a){a.prototype=b;return new a()};SiebelApp.Utils.InheritCtor=function(c,b){var a=b.prototype;var d=function(){};d.prototype=c.prototype||{};b.prototype=new d();b.prototype.superclass=c.prototype;for(var e in a){b.prototype[e]=a[e]||b.prototype[e]}return b};SiebelApp.Utils.FieldDataToSearch=function(a){return a};SiebelApp.Utils.returnFalse=function(){return false};SiebelApp.Utils.IndexOf=function(c,d){if(c==null){throw new TypeError()}var e=Object(c);var a=e.length>>>0;if(a===0){return -1}var f=0;if(arguments.length>0){f=Number(arguments[2]);if(f!=f){f=0}else{if(f!=0&&f!=Infinity&&f!=-Infinity){f=(f>0||-1)*Math.floor(Math.abs(f))}}}if(f>=a){return -1}var b=f>=0?f:Math.max(a-Math.abs(f),0);for(;b<a;b++){if(b in e&&e[b]===d){return b}}return -1};SiebelApp.Utils.ControlFieldEncode=function(a){var b=a;b.replace(("%73%63%72%69%70%74%3A"),("\\%73\\%63\\%72\\%69\\%70\\%74\\%3A"));b.replace(("%3C%73%63%72%69%70%74%3E"),("\\%3C\\%73\\%63\\%72\\%69\\%70\\%74\\%3E"));b.replace(("%3C%2F%73%63%72%69%70%74"),("\\%3C\\%2F\\%73\\%63\\%72\\%69\\%70\\%74"));b.replace(("%3C%6F%62%6A%65%63%74"),("\\%3C\\%6F\\%62\\%6A\\%65\\%63\\%74"));b.replace(("%3C%61%70%70%6C%65%74"),("\\%3C\\%61\\%70\\%70\\%6C\\%65\\%74"));b.replace(("script:"),("%73%63%72%69%70%74%3A"));b.replace(("<script>"),("%3C%73%63%72%69%70%74%3E"));b.replace(("<\/script"),("%3C%2F%73%63%72%69%70%74"));b.replace(("<object"),("%3C%6F%62%6A%65%63%74"));b.replace(("<applet"),("%3C%61%70%70%6C%65%74"));return b};SiebelApp.Utils.AppendArgsToURL=function(e,c,d,a){var b=SiebelApp.Constants;if(a===undefined){a=false}if(a||(!a&&e.indexOf(c+b.get("SWE_ARG_EQUAL"))===-1)){e+=((this.IsEmpty(e)?"":(b.get("SWE_ARG_DELIM")))+c+b.get("SWE_ARG_EQUAL")+d)}return e};SiebelApp.Utils.ReadFilesFromPropSet=function(j,g){var d=SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_JSFILES"),k=SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_THEMEFILES");var i=j.GetProperty(d);var a=j.GetProperty(k);if(!this.IsEmpty(a)){var e=[];var h=g.GetProperty("ObjectName")?g.GetProperty("ObjectName").replace(/ /g,"_"):"";h=h+"_"+g.GetProperty("ObjectType");CCFMiscUtil_StringToArray(a,e);SiebelApp.ThemeManager.flipTheme(h,e)}if(!this.IsEmpty(i)){var f=[];CCFMiscUtil_StringToArray(i,f);for(var c=0,b=f.length;c<b;c++){f[c]=f[c].split(".js");if(f[c][f[c].length-1]===""){f[c].pop()}f[c]=f[c].join(".js")}return f}};SiebelApp.Utils.GetFileInfoFromPropSet=function(a){var c=SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_INFO");var b=[];var f=a.EnumChildren(true);do{if(!this.IsEmpty(f)){if(f.GetType()===c){b=b.concat(this.ReadFilesFromPropSet(f,a))}var e=f.EnumChildren(true);do{if(!this.IsEmpty(e)){if(e.GetType()===c){b=b.concat(this.ReadFilesFromPropSet(e,f))}var d=e.EnumChildren(true);do{if(!this.IsEmpty(d)&&d.GetType()===c){b=b.concat(this.ReadFilesFromPropSet(d,e))}}while((d=e.EnumChildren(false)))}}while((e=f.EnumChildren(false)))}}while((f=a.EnumChildren(false)));return b};SiebelApp.Utils.PrepareModuleInfo=function(s){var p=SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_INFO"),c=SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_JSFILES"),m=SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_THEMEFILES"),g=SiebelApp.Constants.get("SWE_PROP_VALUE"),e=SiebelApp.Constants.get("SWE_UIDEF_PM_CTR"),j=SiebelApp.Constants.get("SWE_UIDEF_PR_CTR");var x=[],f=[],b=[],h=s.EnumChildren(true);do{if(!this.IsEmpty(h)){if(h.GetType()==p){f.push(h);b.push(s)}var o=h.EnumChildren(true);do{if(!this.IsEmpty(o)){var n=o.EnumChildren(true);do{if(!this.IsEmpty(n)&&n.GetType()==p){f.push(n);b.push(o)}}while((n=o.EnumChildren(false)));if(o.GetType()==p){f.push(o);b.push(h)}}}while((o=h.EnumChildren(false)))}}while((h=s.EnumChildren(false)));for(var r=0,t=f.length;r<t;r++){var u=f[r].GetProperty(c);var w=f[r].GetProperty(m);if(!this.IsEmpty(w)){var k=[];CCFMiscUtil_StringToArray(w,k);var y=f[r].GetProperty("ObjectName")?f[r].GetProperty("ObjectName").replace(/ /g,"_"):"";y=y+"_"+f[r].GetProperty("ObjectType");SiebelApp.ThemeManager.flipTheme(y,k)}if(!this.IsEmpty(u)){var v=[],a=[];CCFMiscUtil_StringToArray(u,v);for(var q=0,d=v.length;q<d;q++){v[q]=v[q].split(".js");
if(v[q][v[q].length-1]===""){v[q].pop()}v[q]=v[q].join();if(q===0){b[r].SetPropertyStr(e,v[q])}else{if(q===1){b[r].SetPropertyStr(j,v[q])}}v[q]=v[q];if(!require.defined(v[q])){a.push(v[q])}}x=x.concat(a)}}return x};SiebelApp.Utils.TokenizeString=function(k,c){var d=0;var g=[];var e=0;var h=k.length;var a=0;for(var f=0;f<h;f++){if(c.indexOf(k[f])!=-1){var b=k.substring(a,f);g[e++]=b;a=f+1}}if(a<h){g[e++]=k.substring(a,h)}return g};SiebelApp.Utils.FindIndexOfFrom=function(e,d,a){if(!e){return -1}var c=e.substring(a);var b=c.indexOf(d);if(b!=-1){return a+b}else{return b}};SiebelApp.Utils.FormatString=function(d,b){var a=b.length;if(d&&a>0){for(var c=0;c<a;c++){d=d.replace("%"+(c+1),b[c])}}return d};SiebelApp.Utils.ToISOFormat=function(f,c,d){d=d||"";var b=SiebelApp.S_App.LocaleObject,a=(d.indexOf("hh")===0||d.indexOf("HH")===0||d.indexOf("p ")===0),g="",e="";c=c||false;a=a||false;if(!a){g=b.GetDateFormat();e=SiebelApp.Constants.get("ISO_DATE_FORMAT")}if(c){e=SiebelApp.Constants.get("ISO8601_DATETIME_FORMAT");g+=(g?" ":"")+b.GetTimeFormat()}return b.GetStringFromDateTime(f,g,e,true)};SiebelApp.Utils.IsISO=function(a,c){var b;if(a===SiebelApp.Constants.get("SWE_CTRL_DATE_PICK")){b=/(\d{4})-(\d{2})-(\d{2})/}else{b=/(\d{4})-(\d{2})-(\d{2}) (\d\d):(\d\d):(\d\d)/}return(c.match(b)===null?false:true)};SiebelApp.Utils.GetISODateTime=function(d,c){var f;if(d&&d.match(/[><=!&|]/g)){return d}if(this.IsEmpty(d)){f=new Date()}else{d=this.Trim(d);var e=d.split(" ").length;if(c){if(e>1){f=new Date(d)}else{f=new Date((d.split(" ")[0].toString()+" 12:00:00 AM"))}}else{f=new Date((d.split(" ")[0].toString()+" 12:00:00 AM"))}if(isNaN(f.getDate())){var a=d.replace(/\d/g,"")[0];if("."===a){d=d.replace(/\./g,"/")}else{var b=RegExp(a,"g");d=d.replace(b,"/")}if(c){if(e>1){f=new Date(d)}else{f=new Date((d.split(" ")[0].toString()+" 12:00:00 AM"))}}else{f=new Date((d.split(" ")[0].toString()+" 12:00:00 AM"))}}}var g;if(consts.get("JS_INVALID_DATE")===f.toString()){g=consts.get("JS_INVALID_DATE")}else{g=f.getFullYear().toString()+"-"+this.BloatString((f.getMonth()+1).toString(),"0",2)+"-"+this.BloatString(f.getDate().toString(),"0",2);if(c){g+=" "+this.BloatString(f.getHours().toString(),"0",2)+":"+this.BloatString(f.getMinutes().toString(),"0",2)+":"+this.BloatString(f.getSeconds().toString(),"0",2)}}return g};SiebelApp.Utils.BloatString=function(c,b,e){if(c&&b){c=c.toString();b=b.toString();var d=c.length;if(d>=e||b.length>1){return c}for(var a=d;a<e;a++){c=b+c}}return c};SiebelApp.Utils.GetEventNType=function(b){var a=0;if(b){if(b.altKey){a|=4}if(b.ctrlKey){a|=1}if(b.shiftKey){a|=2}}return a};SiebelApp.Utils.BigNumberToString=function(c){if(typeof(c)!=="number"){return""}var g=c.toExponential().replace(".","").split("e");var f=parseInt(g[1],10);var e=g[0];var a,b="";if(f>=0&&e.length>f){f++;a=e.substring(0,f)+"."+e.substring(f)}else{if(f<0){for(var d=f+1;d>0;d++){b+="0"}a="0."+b+e}else{f=(f-e.length)+1;while(f>b.length){b+="0"}a=e+b}}return a};SiebelApp.Utils.SearchUtil_ArrayToString=function(a){var c;var d="";var b=a.length;d+=b+"#";for(c=0;c<b;c++){if(a[c]===null||a[c]===""){d+="0*"}else{d+=a[c].length+"#"+a[c]}}return(d)};SiebelApp.Utils.sortObjectMap=function(){var d=arguments[0]||{},b=arguments[1]||function(){},c=arguments[2]||[];c.splice(0,c.length);for(var a in d){if(d.hasOwnProperty(a)){c.push(d[a])}}return c.sort(b)};SiebelApp.Utils.replaceAll=function(c,b,a){if(!c){return c}return c.replace(new RegExp(b,"g"),a)};Array.prototype.CleanEmptyElements=function(){for(var a=0;a<this.length;a++){if(typeof(this[a])==="undefined"||this[a]===""){this.splice(a,1);a--}}return this};SiebelApp.Utils.stripOUIHTMLTag=function(g){if(g.length>0){var e=/&lt;&gt;/gi;var d=/&nbsp;/gi;var a=/&amp;/gi;var c=/<((\/?[a-z][a-z0-9]*\b)[^>]*)>/gi,h=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var f=g.replace(h,"").replace(c,function(j,i,l){if(b.test(i)){return j}var k="";switch(l.toLowerCase()){case"br":k="\r\n";break;case"p":k="\r\n\r\n";break;case"/tr":k="\n";break;case"/th":case"/td":k="    ";break;default:k="";break}return k});return f.replace(e,"<>").replace(d," ").replace(a,"&")}return g};SiebelApp.Utils.Alert=function(){$("html").addClass(consts.get("SWE_CLASS_DIALOG"));window.alert(arguments[0]);$("html").removeClass(consts.get("SWE_CLASS_DIALOG"))};SiebelApp.Utils.Confirm=function(){var a;$("html").addClass(consts.get("SWE_CLASS_DIALOG"));a=window.confirm(arguments[0]);$("html").removeClass(consts.get("SWE_CLASS_DIALOG"));return a};SiebelApp.Utils.Prompt=function(){var a;$("html").addClass(consts.get("SWE_CLASS_DIALOG"));a=window.prompt(arguments[0],arguments[1]);$("html").removeClass(consts.get("SWE_CLASS_DIALOG"));return a};SiebelApp.Utils.DecideVisibility=function(a,b){if(a&&a.length){(b?a.styleShow:a.styleHide).call(a)}};SiebelApp.Utils.GetSpanTag=function(){var d="<span class='",b=arguments.length;for(var c=0;c<b;c++){var e=arguments[c];var a=e.substring(e.lastIndexOf("/")+1,e.lastIndexOf(".")).toLowerCase().replace(/ /g,"_");if(this.IsEmpty(a)){a=e}d+="siebui-icon-"+a+" "}return(d.trim()+"'>")};SiebelApp.Utils.NormalizeTextVal=function(a){return a.replace(/\r\n/mg,"\n").replace(/\r/mg,"\n")};Number.prototype.toRound=function(c){c=c||0;if(c>20){c=20}var d=(new String((1).toFixed(c))).substr(2),e=parseInt("1"+d),b=parseFloat("."+d+"01"),f=this;if(((f*(e*10))%10)>=5){f+=b}var a=""+(Math.round(f*e)/e);if(c>0){var g=a.indexOf(".");if(g===-1){a+="."}else{c-=a.substr(g+1).length}a+="00000000000000000000".substr(0,c)}return a};