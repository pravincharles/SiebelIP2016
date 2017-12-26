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
if(typeof(SiebelApp.Query)==="undefined"){Namespace("SiebelApp.Query");SiebelApp.Query=(function(){var b=SiebelJS.Dependency("SiebelApp.Utils");var d=SiebelApp.OfflineUtils;var a=SiebelApp.Offlineconstants;var e=a.get("LOG_EVT_CLIENT_SYS");var f;var c=function(){var g;c=function(){return g};c.prototype=this;g=new c();g.constructor=c;return g};f=new c();c.prototype.PreProcessExpr=function(n){var h=/(?:^|])(.*?)(?:\[|$)/ig;var g=/(([,()]\s*["']{2}\s*[^()]+)(?=.*?)([^()]+\s*["']{2}\s*[,()]))/ig;var l={" and ":" _\u2744_ "," or ":" _\u2745_ "," not ":" _\u2746_ "};function m(r,q){return(r.replace(g,function(t){var s=t;$.each(l,function(x,z){var w=q?x:z,u=q?z:x;var y=new RegExp(w,"ig");t=t.replace(y,u)});return t}))}n=m(n,true);n=n.replace(h,function(q){return q.replace(/ not /ig," ! ").replace(/ or /ig," || ").replace(/ and /ig," && ")});n=m(n,false);n=n.replace(h,function(q){return q.replace(/\s+!\s+/ig," ! ")});n=n.replace(h,function(q){return q.replace(/\s+is\s+null/ig," IS NULL ").replace(/\s+is\s+!\s+null/ig," IS ! NULL ")});var i=/(?:expr\s*:\s*)(.+?)(?:[^"]"[^"])/ig;var k=/^([^"]*)\"|\"(?=[^"]*$)/ig;var o=n.match(i);if(o){n=n.replace(/^\"|\"$/g,"");o[0]=o[0].replace(k,"$1");n=n.replace(i,o[0])}var j=n.replace(/\+/g,"+\n").replace(/(?:and)(?=([^""\\]*(\\.|""([^"\\]*\\.)*[^""\\]*""))*[^""]*$)/g," && ");var p=/,\s*["]{2}\s*[,)]{1}/g;j=j.replace(p,function(q){return q.replace('""','""""')});return j};c.prototype.Parse=function(h){try{if(!h){return""}var j=SiebelApp.Query.PreProcessExpr(h);var g=parser.parse(j);return g}catch(i){d.CcfLogEvent([e,93,16,98,"  Error Message: "+i.message+" Expression: "+j]);return""}};c.prototype.Evaluate=function(g,h,k,l){try{var j=g.evaluate(h,k,l);if(b.IsEmpty(j)){j=""}if(typeof(j)==="number"){return j.toString()}if(typeof(j)==="object"&&typeof(j.getClassName())!=="undefined"&&j.getClassName()==="DatumUTCDateTimeObject"){return j.GetAsString()}return j}catch(i){return""}};c.prototype.ParseAndEvaluate=function(i,h){var g=SiebelApp.Query.Parse(i);return(SiebelApp.Query.Evaluate(g,h))};c.prototype.GetSearchSpec=function(i,h){try{i=i.replace(/ or /g," || ").replace(/ and /g," && ");var g=SiebelApp.Query.Parse(i);var k=[];k.push(g.BoldQuery(h));return k}catch(j){d.CcfLogEvent([e,93,16,96,i]);return[]}};c.prototype.GetFieldsFromExp=function(j,h){var k=[];if(j==="Calc"){k=h.match(/\[(.*?)\]/g);if(k){for(var g=0;g<k.length;g++){k[g]=k[g].replace(/[[\]]/g,"")}}}if(j==="Pre"||j==="Post"){if(h.search("Field:")!==-1){h=h.replace("Field:","");h=h.replace(/["']{1}/gi,"");h=h.replace(/['"]/g,"");k[0]=h.trim(h)}}if(k){k=SiebelApp.OfflineUtils.eliminateDuplicates(k)}if(!k){k=[]}return k};return f}())}function QueryExprNode(a,b){this.type="QueryExprNode";this.body=a;this.loc=b;this.evaluate=function(d,c,e){if(typeof(a)==="string"){return a}SiebelApp.QueryHelper.SetContext(d,c,e);return this.body.evaluate()};this.BoldQuery=function(c){SiebelApp.QueryHelper.SetContext(c);return this.body.BoldQuery()}}function ConstantNode(a,c,b){this.value=c;this.type=a;this.loc=b;this.evaluate=function(){var d;switch(this.type){case"CONST_FUNCTION":d=SiebelApp.QueryHelper.EvaluateConstantFunctionNode(this);break;case"CONST_STRING":d=SiebelApp.QueryHelper.EvaluateConstantNode(this);break;case"CONST_NUMBER":d=SiebelApp.QueryHelper.EvaluateConstantNumberNode(this);break}return d};this.BoldQuery=function(){}}function UnOpNode(a,b,c){this.value=b;this.type=a;this.loc=c;this.evaluate=function(){var d;switch(this.type){case"UNOPNODE_NOT":d=SiebelApp.QueryHelper.EvaluateUnaryNotNode(this.value);break;case"UNOPNODE_ISNULL":d=SiebelApp.QueryHelper.EvaluateUnaryIsNullNode(this.value);break;case"UNOPNODE_ISNOTNULL":d=SiebelApp.QueryHelper.EvaluateUnaryIsNotNullNode(this.value);break;case"UNOPNODE_EXISTS":break}return d};this.BoldQuery=function(){var d;switch(this.type){case"UNOPNODE_ISNULL":d=SiebelApp.QueryHelper.BoldQueryUnaryIsNullNode(this.value);break;case"UNOPNODE_ISNOTNULL":d=SiebelApp.QueryHelper.BoldQueryUnaryIsNotNullNode(this.value);break}return d}}function SourceLocation(b,c,a){this.source=b;this.start=c;this.end=a}function Position(a,b){this.line=a;this.column=b}function IdentifierNode(a,b){this.type="Identifier";this.value=a;this.loc=b;this.evaluate=function(){return SiebelApp.QueryHelper.EvaluateIdentifierNode(this)}}function BinaryOpNode(b,c,a,d){this.type=b;this.right=a;this.left=c;this.loc=d;this.evaluate=function(){return SiebelApp.QueryHelper.EvaluateBinaryOpNode(this)};this.BoldQuery=function(){return SiebelApp.QueryHelper.BinaryOpNodeBoldQuery(this)}}function EscapeCharaterNode(b,d,c,a,e){this.type=b;this.escapeStr=c;this.value=d;this.loc=e;this.escapeChar=a;this.evaluate=function(){return SiebelApp.QueryHelper.EvaluateEscapeCharaterNode(this)}}function FieldNameNode(a,b){this.type="FieldName";this.arguments=a;this.loc=b;this.evaluate=function(){return SiebelApp.QueryHelper.EvaluateFieldNameNode(this)};this.BoldQuery=function(){return SiebelApp.QueryHelper.BoldQueryFieldNameNode(this)}}function FieldValueNode(b,a){this.type="FieldValue";this.value=b;this.loc=a;this.evaluate=function(){}}function ExpressionNode(a,b,c){this.type="ExpressionNode";this.value=b;this.src=c;this.evaluate=function(){return this.value.evaluate()}}function FunctionNode(c,b,a,d){this.type=c;this.name=b.toUpperCase();this.args=a;this.loc=d;this.evaluate=function(){var e;switch(this.name.toUpperCase()){case"LOOKUPVALUE":e=SiebelApp.QueryHelper.EvaluateLookupValueNode(this);break;case"LOOKUPNAME":e=SiebelApp.QueryHelper.EvaluateLookupNameNode(this);break;case"IIF":e=SiebelApp.QueryHelper.EvaluateIIFNode(this);break;case"PARENTFIELDVALUE":e=SiebelApp.QueryHelper.EvaluateParentFieldValueNode(this);break;case"ROWIDTOROWIDNUM":e=SiebelApp.QueryHelper.EvaluateRowIdToRowIdNumNode(this);break;case"IFNULL":e=SiebelApp.QueryHelper.EvaluateIfNullNode(this);break;case"LEN":e=SiebelApp.QueryHelper.EvaluateLenNode(this);break}return e};this.BoldQuery=function(){return SiebelApp.QueryHelper.BoldQueryFunctionNode(this)}}function ParameterListNode(a,b,c){this.type=a;this.parameters=b;this.loc=c;this.BoldQuery=function(){return SiebelApp.QueryHelper.BoldQueryParameterListNode(this)}}function ParameterNode(a,c,b){this.type=a;this.param=c;this.loc=b;this.evaluate=function(){return c.evaluate()};this.BoldQuery=function(){return SiebelApp.QueryHelper.BoldQueryParameterNode(this)}}function QueryOpNode(b,c,a,d){this.type=b;this.left=c;this.right=a;this.loc=d}function BracesNode(b,a,c){this.type=b;this.body=a;this.loc=c;this.evaluate=function(){return a.evaluate()};this.BoldQuery=function(){return SiebelApp.QueryHelper.BoldQueryBracesNode(this)}};