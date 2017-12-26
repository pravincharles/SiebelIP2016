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
if(typeof(SiebelApp.ProactiveCacheBuilder)==="undefined"){SiebelJS.Namespace("SiebelApp.ProactiveCacheBuilder");SiebelApp.ProactiveCacheBuilder=(function(){var C;var F=SiebelApp.OfflineCacheConfig;var y=SiebelApp.Offlineconstants;var r=SiebelApp.OfflineAppSettings;var E=SiebelJS.Dependency("SiebelApp.Utils");var x=SiebelApp.Constants;var l=x.get("SWE_ROW_ID_FIELD");var k=y.get("METADATATABLEINFO");var u=y.get("TABLEINFO");var D=y.get("VIEW_NAME");var o=y.get("FLD_PICK_APLT_DET");var c=y.get("PICK_APLT_DET");var w=y.get("FLD_PICK_MAP");var B=y.get("PICK_MAP_INFO");var G=y.get("VIEW_INFO");var h=y.get("DEFAULT_VIEW_INFO");var j=y.get("LOG_EVT_DATA_EX_BASIC");var n=y.get("LOG_EVT_METADATA_EX");var m=SiebelApp.BrowserCacheMgr;var b={};var v=[];var s=[];var i=[];var t=false;var a=window.localStorage;var z=SiebelApp.OfflineUtils;if(a.getItem(u)){b=JSON.parse(a.getItem(u))}if(a.getItem(k)){v=JSON.parse(a.getItem(k))}var q=function(){var I;q=function(){return I};q.prototype=this;I=new q();I.constructor=q;return I};C=new q();q.prototype.ParseAndCacheData=function(M,J){var I=M.GetChildCount();var K=r.GetSchemaStatus();var O=M.GetChildByType("SiebData");if(O){z.CcfLogEvent([j,1,1,1,"Data",z.GetTS()]);$(".progressbar").find("img").removeClass().addClass("cachingData");SiebelApp.S_App.uiStatus.Busy({mask:true,timeOut:false});var N=O.GetProperty("ts");if(!N){N=""}var L=O.GetProperty("fSync");if(E.IsTrue(L)){t=true;this.ClearDataTables(false);z.CcfLogEvent([j,106,1,1])}$.callback(this,function(){if(!I){z.CcfLogEvent([j,16,1,1]);if(N){a.setItem("TS",N)}p.call(this);return}var Q=M.GetChildByType("MetaData");var P=function(){a.setItem("TS",N);z.CcfLogEvent([j,7,1,1,SiebelApp.OfflineUtils.GetTS()]);if(SiebelApp.AttachmentMgr.IsFinished()){p.call(this)}else{SiebelApp.AttachmentMgr.SetPostDownloadAction(p);SiebelApp.AttachmentMgr.DownloadAllAttachments()}};var R=function(){SiebelApp.Metadata.Load(true);$.callback(this,function(){f.call(this,O,P,true,K,false)})};if(Q){f.call(this,Q,R,false,K,true)}else{R()}})}else{z.CcfLogEvent([j,3,1,1,J]);$(".progressbar").remove();SiebelApp.S_App.UpdateSyncStatus("FullDownLoadFailed")}};function f(P,Q,J,S,N){var O=P.GetChildCount();var L=false;var R=r.GetPkgStatus();if(R){var K=false;var I;for(var M=0;M<O;M++){I=P.GetChild(M);if(I.GetProperty("fSync")==="1"){i.push(z.RemoveNonAlphaChars(I.GetType()));K=true}}if(K){SiebelApp.ProactiveCacheBuilder.ClearDataTables(false,i)}}$.callback(this,function(){var T=0;var U=function(){var ak=P.GetChild(T);var am=ak.GetType();var ah=am;var aD={};var ae=[];var Z=0;var ag=ak.GetChildCount();for(var ax=0;ax<ag;ax++){var ad=ak.GetChild(ax);aD[ad.GetType()]=ad}am=z.RemoveNonAlphaChars(am);if(SiebelApp.AttachmentMgr.ParseData){SiebelApp.AttachmentMgr.ParseData(am,aD,S)}if(aD.Schema!==undefined&&S!==2){var at;if(v.indexOf(am)!==-1){at=SiebelApp.SqlBuilder.DeleteTable(am);m.DeleteTable(at)}var an=aD.Schema.GetProperty("Schema");if(an!==undefined){if(an.indexOf("||")!==-1){SiebelJS.Log("Bad Schema for "+am+" :"+an);an=an.replace(/||/g,"|")}L=true;ae=an.split("|");Z=ae.length;for(var al=0;al<Z;al++){ae[al]=z.RemoveNonAlphaChars(ae[al])}var aC;var ap="";var aE=aD.Schema.GetProperty("UKCR");if(aE==="0"&&J){ap=SiebelApp.Metadata.GetBCUnqKeys(ah)}aC=SiebelApp.SqlBuilder.CreateTable(am,ae,ap,J);z.CcfLogEvent([j,4,1,2,am]);if(!N&&ap){z.CcfLogEvent([y.get("LOG_EVT_DATA_EX_DETAILED"),27,1,50,ap])}else{if(!N){z.CcfLogEvent([y.get("LOG_EVT_DATA_EX_DETAILED"),27,1,50," "])}}m.CreateTable(aC,am,ae);b[am]=ae.join("`").toUpperCase().split("`");if(N){v.push(am)}}}if(aD.Data!==undefined){if(aD.Data.GetChildCount()){if(b[am]){Z=b[am].length;ae=b[am]}var aH=aD.Data.GetChildCount();var aG=aH;var aj=[];var af=[];var Y=[];var aw=[];var av=[];L=true;z.CcfLogEvent([j,5,1,2,am,ae.length,aH]);for(var aB=0;aB<aG;aB++){var W=aD.Data.GetChild(aB);if(!W){continue}var aq=W.GetProperty("Record");if(!aq){continue}aq=aq.replace(/\\2/g,"~").replace(/\\4/g,"&").replace(/\\3/g,"\\");var ab=(am==="MBCs")?aq.split("^"):aq.split("|");var au=ab.length;for(var az=0;az<au;az++){if(ab[az]===undefined||ab[az]===""){ab[az]=""}ab[az]=ab[az].replace(/\\0/g,"|").replace(/\\1/g,"^")}if(au!==Z){z.CcfLogEvent([j,6,1,2,Z,au,am]);if(au<Z){var ao=Z-au;for(az=0;az<ao;az++){ab.push("")}}}if(W.GetValue()==="U"){af.push(ab)}else{if(W.GetValue()==="I"){Y.push(ab)}else{if(W.GetValue()==="A"){aw.push(ab);Y.push(ab)}else{if(W.GetValue()==="M"){av.push(ab);af.push(ab)}else{aj.push(ab)}}}}}if(aj.length){m.InsertRecordSet(am,ae,aj)}var ay=Y.length;var aA=af.length;var aa=ae.length;if(ay||aA){var ai=0;for(var aF=0;aF<aa;aF++){if(ae[aF]==="ID"){ai=aF;break}}var ar=0;var ac=function(aI){if(!aI.err&&(aI.retVal<=0)){m.InsertRecord(am,ae,af[ar])}};var V=function(aK){ar=aK;var aL=af[ar];var aJ=(aL)[ai];if(s.indexOf(aJ)<0){s.push(aJ)}var aI=SiebelApp.SqlBuilder.UpdateRecord(am,ae,aL,l,aJ);return[aI,aJ]};if(aA){var X={iterations:aA,execute:m.UpdateRecord,executeScope:m,postExecute:ac,preExecute:V};$.eachAsyncOp(this,X)}$.callback(this,function(aM){if(!aM.err){if(ay){var aJ=A.call(this,Y,ai);var aL=y.get("SQLITE_MAX_EXPR_DEPTH");var aN=aJ.length;var aQ=[];var aK=[];if(aN>aL){var aI=Math.ceil(aN/aL);var aP=0;var aO=function(){var aR=aJ.splice(0,aL);var aS=Y.splice(0,aL);H(am,aR,aS);$.callback(this,function(aT){var aU=aT.retVal;if(aK.length===0){aK=aU.arrInsertRec}else{aK=aK.concat(aU.arrInsertRec)}if(aQ.length===0){aQ=aU.arrUpdateRec}else{aQ=aQ.concat(aU.arrUpdateRec)}aP++;if(aP<aI){aO.call(this)}else{e.call(this,am,ae,aK,aQ,ai)}})};aO.call(this)}else{H(am,aJ,Y);$.callback(this,function(aR){var aS=aR.retVal;aK=aS.arrInsertRec;aQ=aS.arrUpdateRec;e.call(this,am,ae,aK,aQ,ai)})}}}})}}}$.callback(this,function(){if(aD.drid!==undefined){var aI;var aJ=aD.drid.GetProperty("Record");if(aJ){if(aJ.indexOf("|")!==-1){aJ=aJ.replace(/\|/g,"','")}s.push(aJ);aJ="'"+aJ+"'";L=true;aI=SiebelApp.SqlBuilder.DeleteMutlipleRecord(am,l,aJ);m.Execute(aI)}}$.callback(this,function(){T++;if(T<O){U.call(this)}})})};if(T<O){U.call(this)}$.callback(this,function(){if(L){m.GetBrowserStorage().SetPostTxnCallback(Q)}else{Q.call(this)}})})}function A(M,L){var K=[];var I=M.length;for(var J=0;J<I;J++){K.push(M[J][L]);s.push(M[J][L])}return K}function e(I,J,L,K,M){m.InsertRecordSet(I,J,L);$.callback(this,function(P){var N=K.length;if(N){var O=0;var R=function(T){O=T;var U=K[O];var S=U[M];var V=SiebelApp.SqlBuilder.UpdateRecord(I,J,U,l,S);return[V,S]};if(N){var Q={iterations:N,execute:m.UpdateRecord,executeScope:m,postExecute:null,preExecute:R};$.eachAsyncOp(this,Q)}}})}function H(K,P,O){var N=[];var M=[];var I=SiebelApp.SqlBuilder.BuildWhereClause("IN","Id",P);var L=P.length;var J=SiebelApp.SqlBuilder.SelectRecord(K,I,["ID"]);m.Execute(J.selectQuery,J.valList,true);$.callback(this,function(S){if(!S.err){var X=S.retVal;var R=X.length;if(R){var Q;for(var W=0;W<L;W++){var U=P[W];Q=false;for(var V=0;V<R;V++){if(U===X[V].Id){Q=true;M.push(O[W]);break}}if(!Q){N.push(O[W])}}}else{N=O}}var T={};T.arrInsertRec=N;T.arrUpdateRec=M;$.setReturnValue({err:false,retVal:T})
})}function p(){setTimeout(function(){a.setItem(u,JSON.stringify(b));a.setItem(k,JSON.stringify(v));d.call(SiebelApp.ProactiveCacheBuilder);$.callback(this,function(){z.CcfLogEvent([j,108,1,1,SiebelApp.OfflineUtils.GetTS()]);if(r.GetMode()===true){var I=JSON.parse(a.getItem("StringCache"));if(I){SiebelApp.S_App.SetStringCache(I)}}r.OnSuccessfulDataDownload();if(a.getItem("appCacheDone")&&JSON.parse(a.getItem("appCacheDone"))){$(".progressbar").find("img").removeClass().addClass("offlinePackageEnd");SiebelApp.S_App.UpdateSyncStatus();$(".progressbar").remove();r.ReloadToOffline(true)}})},1000)}q.prototype.ParseAndCacheMetadata=function(O){z.CcfLogEvent([n,1,1,4,"Metadata",SiebelApp.OfflineUtils.GetTS()]);var P=O.GetChildCount();var V=r.GetSchemaStatus();var T;var L;var J;var K;var W=[];var I=F.get("PRO_METADATASTORE_DB_TBL_COLS");if(V===1){z.CcfLogEvent([n,8,1,4]);var S=z.GetOfflineCacheConfig(F.get("PRO_METADATASTORE_DB"));var U=S.tables;var R=U.length;var Q;var N=function(X){if(U[X]==="Metadata"){var Y="Type";var Z="!=";Q=SiebelApp.SqlBuilder.DeleteRecords(U[X],[Y],null,Z);return[Q,[h]]}else{Q=SiebelApp.SqlBuilder.DeleteRecords(U[X]);return[Q]}};var M={execute:m.Execute,executeScope:m,preExecute:N,iterations:R};$.eachAsyncOp(this,M);$.callback(this,function(){this.ClearDataTables(true)})}$.callback(this,function(){z.CcfLogEvent([n,9,1,4]);var af=O.GetProperty("sc");m.CacheSCMap(af);var aj=O.GetProperty("OfflineAtt");r.SetOfflineAttEnabled(aj);var ae=y.get("SWE_PST_SCROLL_FACTOR");var X=O.GetPropertyAsStr(ae);if(X){a.setItem(ae,X)}var ab=[];for(var ad=0;ad<P;ad++){var ai=[];T=O.GetChild(ad);L=T.GetType();K=T.GetProperty(D);switch(L){case o:J=T.GetProperty(c);g.call(this,L,J);continue;case w:J=T.GetProperty(B);g.call(this,L,J);continue;case G:if(K!==undefined){W.push(K)}break}var ac=Object.keys(T.propArray);var ah=ac.length;for(var Y=0;Y<ah;Y++){if(ac[Y]!==D){ai.push(ac[Y])}}var ag=ai.length;for(var aa=0;aa<ag;aa++){var Z=T.propArray[ai[aa]];if(Z){ab.push([K,ai[aa],Z,L])}}}m.InsertRecordSet(F.get("PRO_METADATASTORE_DB_TBL"),[I.ObjName,I.SweCmd,I.Response,I.Type],ab);z.CcfLogEvent([n,26,1,4,JSON.stringify(W).replace(/,/g," ")]);m.CacheViewList(W);$.callback(this,function(){r.OnSuccessfulMetaDataDownload()})})};q.prototype.ClearDataTables=function(L,R){var N=[];var P;var J={};var M=0;if(R){var O=R.length;for(M=0;M<O;M++){P=R[M];if(L){N[M]=SiebelApp.SqlBuilder.DeleteTable(P)}else{N[M]=SiebelApp.SqlBuilder.DeleteRecords(P)}}}else{var K=JSON.parse(a.getItem(y.get("TABLEINFO")));for(var Q in K){if(K[Q]&&(v.indexOf(Q)===-1)){P=Q;if(P){if(L){N[M]=SiebelApp.SqlBuilder.DeleteTable(P)}else{N[M]=SiebelApp.SqlBuilder.DeleteRecords(P)}M++}}}}var I=function(T){var S=N[T];return[S]};J={execute:m.Execute,executeScope:m,preExecute:I,iterations:M};$.eachAsyncOp(this,J)};function g(P,M){var Q;var L;if(E.IsEmpty(M)||E.IsEmpty(P)){z.CcfLogEvent([n,22,1,8]);return}switch(P){case o:Q=F.get("PRO_DB_PICKAPPLET_INFO_TBL_COLS");L=M.split("|");if(L&&L.length===3){m.InsertRecord(F.get("PRO_DB_PICKAPPLET_INFO_TBL"),[Q.FldInfo,Q.PickApplet],[L[0]+"|"+L[1],L[2]])}else{z.CcfLogEvent([n,23,1,8,"Pick Applet Info",M])}break;case w:Q=F.get("PRO_DB_PICKFLD_MAP_TBL_COLS");L=M.split("|");if(L&&L.length===3){var T="null";var S=L[2];var K=S.split(",");var N=K.length;S="";for(var J=0;J<N;J++){if(!K[J]){continue}var O=K[J].split(":");var R=O.length;if(R>=2){if(O[0]&&O[1]){var I=O[0]+":"+O[1];S+=I+",";if(R===3&&O[2]==="1"){T=I}}}else{z.CcfLogEvent([n,24,1,8,K[J]])}}S=z.RTrim(S,",");m.InsertRecord(F.get("PRO_DB_PICKFLD_MAP_TBL"),[Q.BCName,Q.FldName,Q.PMap,Q.PConstraint],[L[0],L[1],S,T])}else{z.CcfLogEvent(n,"23",["Field Pick map Info",M])}break}}q.prototype.ProcessGoOnline=function(){SiebelApp.S_App.uiStatus.Busy({mask:true,timeOut:false});r.SetMode((!r.GetMode()));r.SetSyncStatus(false);SiebelApp.S_App.UpdateSyncStatus();if(SiebelApp.S_App.GetTimer()){var I=SiebelApp.S_App.GetTimer().GetLogBuffer();a.setItem(x.get("SWE_PERF_LOG_DATA"),JSON.stringify(I))}r.ReloadApp()};function d(){z.CcfLogEvent([j,107,1,1,SiebelApp.OfflineUtils.GetTS()]);var I;if(r.GetPkgStatus()&&!t){I=SiebelApp.SqlBuilder.BuildWhereClause("IN","TransactionType",["WriteRecord","DeleteRecord"]);I=SiebelApp.SqlBuilder.BuildWhereClause("IN","RowId",s,I,"AND");I=SiebelApp.SqlBuilder.BuildWhereClause("IN","BusComp",i,I,"OR")}var J=SiebelApp.SqlBuilder.SelectRecord("Sync",I,null,["BusComp","RowId","RecordNum"],"ASC");SiebelApp.BrowserCacheMgr.Execute(J.selectQuery,J.valList,true);$.callback(this,function(T){if(!T.err){var ah=T.retVal,aj=ah.length;if(aj>0){var aa,ab="",am=false,V=false,P,O,Q,W,Y,ac,U,N=[],ap={},R=[],X=[],af=[],ak=[],al={},ad={},ao={},ai,ae;var Z=function(){for(var ar in ad){R.push(ar);X.push(ad[ar])}if(V){for(var aq in ao){af.push(aq);ak.push(ao[aq])}}if(am){al={};P=SiebelApp.SqlBuilder.InsertRecord(W,R,X);al.query=P.insertquery;al.valList=P.values;N.push(al);if(V){al={};P=SiebelApp.SqlBuilder.InsertRecord(Y,af,ak);al.query=P.insertquery;al.valList=P.values;N.push(al)}}else{P=SiebelApp.SqlBuilder.UpdateRecord(W,R,X,"Id",ab);al={};al.query=P;al.valList=[ab];N.push(al);if(V){al={};P=SiebelApp.SqlBuilder.UpdateRecord(Y,af,ak,"Id",ac);al.query=P;al.valList=[ac];N.push(al)}}};for(var ag=0;ag<aj;ag++){O=ah[ag];aa=O.TransactionType;U=O.RowId;Q=O.BusComp;if((Q!==W)||ab!==U){if(ab!==""){Z.call(this)}ad={};ao={};R=[];X=[];am=false;V=false;af=[];ak=[]}ab=U;W=Q;switch(aa){case"AddRecord":case"DeleteRecord":N.push(JSON.parse(O.LocalTxnInfo));ab="";break;case"NewRecord":am=true;ad[x.get("SWE_ROW_ID_FIELD")]=U;case"WriteRecord":ap=JSON.parse(O.LocalTxnInfo);ai=ap.FldNames.length;for(var M=0;M<ai;M++){ad[ap.FldNames[M]]=ap.FldValue[M]}if(ap.InterTableName){V=true;ae=ap.InterTableCol.length;for(var an=0;an<ae;an++){ao[ap.InterTableCol[an]]=ap.InterTableColVal[an]}Y=ap.InterTableName;ac=ap.InterTableRowId}if(ag===aj-1){Z.call(this)}break}}var L=function(ar){var aq=N[ar];return[aq.query,aq.valList]};var K=N.length;if(K>0){var S={iterations:K,execute:SiebelApp.BrowserCacheMgr.Execute,executeScope:SiebelApp.BrowserCacheMgr,preExecute:L};$.eachAsyncOp(this,S);$.callback(this,function(){S=null;N=null})}}}})}return C}())};