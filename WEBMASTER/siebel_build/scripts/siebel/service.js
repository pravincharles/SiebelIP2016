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
if(typeof(SiebelApp.Service)=="undefined"){Namespace("SiebelApp.Service");SiebelApp.Service=(function(){var c=SiebelApp.Utils;var f=SiebelApp.Constants;var e=SiebelApp.S_App;function h(){var i=0;var k=0;var j=f.get("SWE_DEFAULT_SERVICE");this.SetName=function(l){j=l};this.GetName=function(){return j};this.AddRef=function(){i++};this.GetRefCount=function(){return i};this.Release=function(){i--;if(i<1){e.ReleaseService(j)}};this.SetIterator=function(l){k=l};this.GetIterator=function(){return k};SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)}h.prototype.InvokeMethod=function(q,i,n){var k=true;var p=CCFMiscUtil_CreatePropSet();i=i||CCFMiscUtil_CreatePropSet();var l=i.Clone();k=d.call(this,q,i);if(!k){return p}var o={};var m=this;var j;if(typeof(n)==="object"||n===true||n===false){o.scope=this;o.async=(typeof(n.async)==="boolean")?n.async:n;o.selfbusy=n.selfbusy||false;o.mask=n.mask||false;o.npr=n.npr||false;o.args=[];o.args.push(q);o.args.push(i);o.cb=function(){var r=Array.prototype.slice.call(arguments);m.PostServiceExecute.apply(m,arguments);if(typeof(n.cb)==="function"){n.cb.apply(n.scope||null,r)}}}else{o={scope:this,cb:function(){var r=[];r.push(q);r.push(i);r.push(p);r.push(true);this.PostServiceExecute.apply(this,r);j=p}}}b.call(this,q,i,p,o);return j};h.prototype.PostServiceExecute=function(k,m,l){if(arguments[2].GetProperty(f.get("AJAX_FAIL_ERR"))==="timeout"||arguments[2].GetProperty(f.get("AJAX_FAIL_ERR"))==="error"||arguments[2].GetProperty(f.get("AJAX_FAIL_ERR"))==="abort"||arguments[2].GetProperty(f.get("AJAX_FAIL_ERR"))==="parsererror"){return false}var i=true;var j=arguments[2].GetProperty(f.get("SWE_RPC_PROP_RETURN_STATUS"));if(j===f.get("SWE_RPC_PROP_STATUS_ERROR")||c.IsEmpty(j)){this.ProcessError();i=false}if(j===f.get("SWE_RPC_PROP_STATUS_COMPLETED")){i=true}if(i===true){g.call(this,k,m)}return i};h.prototype.CanInvokeMethod=function(i){var j=true;j=a.call(this,i);if(!j){return false}return j};function b(k,j,o,l){var m=j.EncodeAsString();var i=CCFMiscUtil_CreatePropSet();o=o||CCFMiscUtil_CreatePropSet();if(j.GetProperty(f.get("SWE_BUSINESS_SERVICE"))==f.get("SWE_NUMERIC_TRUE")){i.SetProperty(f.get("SWE_BUSINESS_SERVICE"),f.get("SWE_NUMERIC_TRUE"))}i.SetProperty(f.get("SWE_CMD_ARG"),f.get("SWE_CMD_INVOKE_METHOD_STR"));i.SetProperty(f.get("SWE_SERVICE"),this.GetName());i.SetProperty(f.get("SWE_METHOD_STR"),k);i.SetProperty(f.get("SWE_INPUT_PS"),m);var n=true;if(l&&l.npr===true){n=false}e.CallServer(i,o,n,l);return true}h.prototype.GetProperty=function(j){var i=CCFMiscUtil_CreatePropSet();var k=CCFMiscUtil_CreatePropSet();i.SetProperty("Name",j);b.call(this,"GetProperty",i,k);return(k.GetChildByType("ResultSet").GetProperty("Value"))};h.prototype.SetProperty=function(k,l){var j=CCFMiscUtil_CreatePropSet();var i=CCFMiscUtil_CreatePropSet();j.SetProperty("Name",k);j.SetProperty("Value",l);b.call(this,"SetProperty",j,i)};h.prototype.PropertyExists=function(j){var i=CCFMiscUtil_CreatePropSet();var k=CCFMiscUtil_CreatePropSet();i.SetProperty("Name",j);b.call(this,"PropertyExists",i,k);return(k.GetChildByType("ResultSet").GetProperty("Value")=="1")};h.prototype.RemoveProperty=function(k){var j=CCFMiscUtil_CreatePropSet();var i=CCFMiscUtil_CreatePropSet();j.SetProperty("Name",k);b.call(this,"RemoveProperty",j,i)};h.prototype.GetFirstProperty=function(){var i=CCFMiscUtil_CreatePropSet();var j=CCFMiscUtil_CreatePropSet();i.SetProperty("Iterator",(this.GetIterator()).toString());b.call(this,"GetFirstProperty",i,j);this.SetIterator(parseInt(j.GetChildByType("ResultSet").GetProperty("Iterator"),10));if(isNaN(this.GetIterator())){this.SetIterator(0)}j.RemoveProperty("Iterator");return j.GetChildByType("ResultSet").GetProperty("Name")};h.prototype.GetNextProperty=function(){var i=CCFMiscUtil_CreatePropSet();var j=CCFMiscUtil_CreatePropSet();i.SetProperty("Iterator",(this.GetIterator()).toString());b.call(this,"GetNextProperty",i,j);this.SetIterator(parseInt(j.GetChildByType("ResultSet").GetProperty("Iterator"),10));if(isNaN(this.GetIterator())){this.SetIterator(0)}j.RemoveProperty("Iterator");return j.GetChildByType("ResultSet").GetProperty("Name")};function d(k,j){var i;if(this.shadow&&typeof(this.shadow.OnPreInvokeMethod)==="function"){i=this.shadow.OnPreInvokeMethod(k,j);if(i=="CancelOperation"){return false}return true}return true}function g(j,i){if(this.shadow&&typeof(this.shadow.OnInvokeMethod)==="function"){this.shadow.OnInvokeMethod(j,i)}}function a(k,j){var i;if(this.shadow&&typeof(this.shadow.OnPreCanInvokeMethod)==="function"){i=this.shadow.OnPreCanInvokeMethod(k,j);if(i=="CancelOperation"||i=="CancelAction"){return false}return true}return true}return h}())};