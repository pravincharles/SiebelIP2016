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
(function(){if(typeof(SiebelApp.OfflineCacheConfig)!=="undefined"){return}Namespace("SiebelApp.OfflineCacheConfig");var b=SiebelApp.Utils.DefineConstants;SiebelApp.OfflineCacheConfig=b();var e=SiebelApp.OfflineCacheConfig;var f="OracleCRM811xLocalStore";var a=localStorage.getItem("isAdfmContainer");var c=localStorage.getItem("isCompatibility");var d=(c=="false");if(a=="1"&&d){f="OracleCRM811xLocalStore_"+window.sessionStorage.getItem("userloc")}e.set("OFFLINE_CACHE_DB_NAME",f);e.set("OFFLINE_CACHE_DB_DISP_NAME",f);e.set("REACTIVE_CACHE_TBL","LocalStore");e.set("OFFLINE_CACHE_DB_VERSION",1);e.set("OFFLINE_CACHE_DB_MAXSIZE",50*1024*1024);e.set("REACTIVE_CACHE_TBL_COLS",{Request:"Request",Response:"Response",Status:"Status",StatusText:"StatusText",ResponseHeaders:"ResponseHeaders"});e.set("PRO_METADATASTORE_DB",f);e.set("PRO_METADATASTORE_DB_DISP_NAME",f);e.set("PRO_METADATASTORE_DB_TBL","Metadata");e.set("PRO_DB_PICKAPPLET_INFO_TBL","PickApltInfo");e.set("PRO_DB_PICKFLD_MAP_TBL","BCFldPickMapInfo");e.set("PRO_METADATASTORE_DB_VERSION",1);e.set("PRO_METADATASTORE_DB_MAXSIZE",50*1024*1024);e.set("PRO_METADATASTORE_DB_TBL_COLS",{ObjName:"ObjName",SweCmd:"SweCmd",Response:"Response",Type:"Type"});e.set("PRO_DB_PICKAPPLET_INFO_TBL_COLS",{FldInfo:"FldInfo",PickApplet:"PickApplet"});e.set("PRO_DB_PICKFLD_MAP_TBL_COLS",{BCName:"BCName",FldName:"FldName",PMap:"PMap",PConstraint:"PConstraint"});e.set("CACHE_TYPE_REACTIVE","Reactive");e.set("CACHE_TYPE_PROACTIVE","Proactive");e.set("PRO_SYNCQUEUE_DB_TBL","Sync");e.set("PRO_SYNCQUEUE_DB_VERSION",1);e.set("PRO_SYNCQUEUE_DB_MAXSIZE",50*1024*1024);e.set("PRO_SYNCQUEUE_DB_TBL_COLS",{TransactionId:"TransactionId",Request:"Request",SyncStatus:"SyncStatus",TransactionType:"TransactionType",BusComp:"BusComp",RowId:"RowId",LocalTxnInfo:"LocalTxnInfo",UpSyncTime:"UpSyncTime"});e.set("PRO_DATASTORE_DB",f);e.set("PRO_DATASTORE_DB_VERSION",1);e.set("PRO_DATASTORE_DB_MAXSIZE",50*1024*1024);e.set("PRO_DB_PICKLIST_INFO_TBL","PickListInfo");e.set("PRO_DB_PICKLIST_GENERIC_TBL","PickListGeneric");e.set("PRO_DB_PICKLIST_INFO_TBL_COLS",{NAME:"NAME",BC:"BC",SrchSpec:"SrchSpec",SortSpec:"SortSpec",TypeFld:"TypeFld",LOVType:"LOVType"});e.set("PRO_DB_PICKLIST_GENERIC_TBL_COLS",{Type:"Type",Name:"Name"})}());