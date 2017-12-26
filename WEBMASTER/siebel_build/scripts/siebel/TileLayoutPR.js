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
/* 8.1.1.14SIA[23044]PATCHSET11 */
if(typeof(SiebelAppFacade.TileLayoutPR)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.TileLayoutPR");define("siebel/TileLayoutPR",["siebel/phyrenderer"],function(){SiebelAppFacade.TileLayoutPR=(function(){var o=SiebelJS.Dependency("SiebelApp.Utils");var h=SiebelJS.Dependency("SiebelApp.Constants");SCROLL_UP=consts.get("PAG_SCROLL_UP"),SCROLL_DN=consts.get("PAG_SCROLL_DN");var a="easeInOutQuad";var c=h.get("SWE_CTRL_MVG");var g=h.get("SWE_CTRL_PICK");function l(u){var y;this.init=true;this.SetBasicLayout=function(B){y=B};this.GetBasicLayout=function(){return y};var x;this.SetTileScrollDirection=function(B){x=B};this.GetTileScrollDirection=function(){return x};var z;this.SetContainer=function(B){z=B};this.GetContainer=function(){return z};var r;this.SetScrollAmount=function(B){r=B};this.GetScrollAmount=function(){return r};var s=0;this.SetTileHeight=function(B){s=B};this.GetTileHeight=function(){return s};var t=0;this.SetTileWidth=function(B){t=B};this.GetTileWidth=function(){return t};var w=0;this.SetContainerWidth=function(B){w=B};this.GetContainerWidth=function(){return w};var v=0;this.SetContainerHeight=function(B){v=B};this.GetContainerHeight=function(){return v};var A;this.SetIScrollObject=function(B){A=B};this.GetIScrollObject=function(B){return A};u.AddProperty("GetSelId",m);SiebelAppFacade.TileLayoutPR.superclass.constructor.call(this,u);SiebelApp.S_App.PluginBuilder.SetUIContext(this,i)}SiebelJS.Extend(l,SiebelAppFacade.PhysicalRenderer);function i(r){return r&&r.GetUIType()===h.get("SWE_CTRL_RADIO")?this.GetContainer().find("[name*="+r.GetInputName()+"]"):null}l.prototype.Init=function(){SiebelAppFacade.TileLayoutPR.superclass.Init.call(this);this.AttachPMBinding("OnScrollComplete",e)};l.prototype.FocusFirstControl=function(){var t=this.GetPM(),z=t.Get("ListOfColumns"),A=z.length,r=9999;var w=null;var s=0;this.SetFirstControl(null);for(var u=0;u<A;u++){var v=z[u].control;var B=v.GetFieldName();if(!o.IsEmpty(B)){if(v.GetIndex()&&v.GetIndex()<r){var y=false;if(t.Get("IsInQueryMode")===false){y=t.ExecuteMethod("CanUpdate",v.GetName())}else{y=true}if(y&&!o.IsEmpty(v.GetUIType())&&(v.isBasicControl()||v.GetUIType()[0]==="J"||v.GetUIType()===c||v.GetUIType()===g)){var x=Number(t.Get("GetSelection"));this.SetFirstControl(this.GetUIWrapper(v).GetEl(x).eq(0));break}}}}if(this.GetFirstControl()!=null){this.GetFirstControl().focus();return}return false};l.prototype.ShowUI=function(s){this.init=true;var r=this.GetPM();var t=r.Get("GetFullId")+"_"+h.get("SWE_TILE_CONTAINER");this.SetContainer($("#"+t));b.call(this);this.SetBasicLayout(this.GetContainer().html());this.GetContainer().html('<div class="siebui-tile-list"></div>');SiebelAppFacade.TileLayoutPR.superclass.ShowUI.call(this);this.SetTileScrollDirection(SiebelApp.S_App.IsRwd()?this.GetContainer().parent().attr("data-scroll-direction"):this.GetContainer().attr("data-scroll-direction"));if(!SiebelAppFacade.DecisionManager.IsTouch()){this.EnhanceScroller()}else{this.GetContainer().parent(".siebui-tile-container").addClass("siebui-touch")}};function b(){var s=this.GetPM(),y=s.Get("GetControls"),u,z,w,t,x,v=SiebelApp.S_App.GetRequiredIndicator();for(var r in y){if(y.hasOwnProperty(r)){u=y[r];t=s.ExecuteMethod("IsRequired",u.GetName());if(t){z=$('[name="'+u.GetInputName()+'"]')[0]||$("#"+u.GetInputName())[0];if(z){z=$(z);w=z.attr("aria-labelledby")||"";if(w){w=w.split(" ",1);x=w[0].replace("/","\\/");this.GetContainer().children().find("#"+x).eq(0).after(v)}}}}}y=u=z=v=null}l.prototype.ClearData=function(){var r=this.GetContainer().children("div.siebui-tile-list"),s=this.GetTileScrollDirection();if(this.GetPM().Get("IsInQueryMode")){this.GetIScrollObject().destroy();this.GetContainer().find("#tile-left-scroll, #tile-right-scroll, #tile-up-scroll, #tile-down-scroll").addClass("siebui-tile-scroll-d");this.init=true}r.empty();r=null};l.prototype.BindData=function(w){var u=this.GetPM(),A,t=u.Get("GetRecordSet"),B=t?t.length:0,s=u.Get("GetSelection"),z=u.Get("GetScrollDir"),v=parseInt(u.Get("GetScrollAmount")),r=v?v:B;if(!this.GetBasicLayout()){return}if(SiebelApp.S_App.GetDirection()&&this.GetTileScrollDirection().toLowerCase()==="horizontal"){this.GetContainer().find(".siebui-tile-list").removeClass("siebui-float-left")}r=r<0?-r:r;r=r>B?B:r;r=parseInt(r,10);this.GetContainer().addClass("clearfix");this.SetScrollAmount(v);if(B===0){this.GetContainer().children("div.siebui-tile-list").empty();this.UpdateScrollArrows();return}if(z!==null&&v!==0&&Math.abs(v)<B){A=true;q.call(this,t,r)}else{if(w){this.ClearData();q.call(this,t,r)}else{if(!w){q.call(this,t,r)}}}var y=this.GetPM().Get("GetSelId");$("#"+y+(s)).addClass("siebui-tile-selected");if(this.init&&!u.Get("IsInQueryMode")){n.call(this);this.init=false}if(z===null&&v===0){var x=this.GetIScrollObject();x.refresh();if(x.options.scrollY){x.maxScrollY=-(x.scrollerHeight-x.wrapperHeight);if(x.wrapperHeight>=x.scrollerHeight){x.maxScrollY=0;x._translate(0,0);this.GetContainer().find("#tile-up-scroll").addClass("siebui-tile-scroll-d")}}}record=null};function n(){var t=true,u=false,w=null,r=0,v="#"+this.GetPM().Get("GetFullId")+"_"+h.get("SWE_TILE_CONTAINER");if(this.GetTileScrollDirection().toLowerCase()==="horizontal"){u=true;t=false;if(SiebelApp.S_App.GetDirection()){r=this.GetContainer().find(".siebui-tile").width()-this.GetContainer().children("div.siebui-tile-list").width()}}w=new IScroll(v,{infiniteElements:$(v).children("div.siebui-tile-list"),dataset:s,cacheSize:10,tap:false,click:false,scrollX:u,scrollY:t,ctx:this,startX:r,bindToWrapper:true,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|SPAN|DIV|UL|LI|IMG|A|I)$/}});if(SiebelApp.S_App.GetDirection()&&this.GetTileScrollDirection().toLowerCase()==="horizontal"){w.scrollToElement($(v).find("div.siebui-tile").first()[0],0)}if(w.options.scrollY){w.maxScrollY=-(w.scrollerHeight-w.wrapperHeight);if(w.wrapperHeight>=w.scrollerHeight){w.maxScrollY=0}}w.on("scrollEnd",k);function s(y,x){}this.SetIScrollObject(w)}function k(){var r=false,z=0,A,B,s,x=this.options.ctx,t=parseInt(x.GetPM().Get("GetRecordSet").length),y=this.scroller.getBoundingClientRect();x.GetContainer().find("."+this.scroller.className+"").addClass("siebui-iscroll");if(this.options.scrollX){z=this.directionX;if(SiebelApp.S_App.GetDirection()){z=-z}z===0?z=(this.distX>0)?-1:1:z;if(SiebelApp.S_App.GetDirection()){r=z>0?((this.x+this.scroller.offsetLeft)>=0):(-(this.x-this.scroller.offsetLeft)>=-this.maxScrollX)}else{r=z>0?(-(this.x-this.scroller.offsetLeft)>=-this.maxScrollX):((this.x+this.scroller.offsetLeft)>=0)}s=parseInt($("#"+this.scroller.firstChild.id).outerWidth(true),10);A=Math.round(this.wrapperWidth/s);if(t>=A){x.EnableScrollArrow($("#"+this.wrapper.id).find("#tile-left-scroll, #tile-right-scroll"))}}else{z=this.directionY;z===0?z=this.distY>0?-1:1:z;B=y.top>0?y.top:-y.top;r=z>0?(this.wrapperHeight+(-(this.y-B)))>=y.bottom:(this.y>=0);s=parseInt($("#"+this.scroller.firstChild.id).outerHeight(true),10);A=Math.round(this.wrapperHeight/s);
if(t>=A){x.EnableScrollArrow($("#"+this.wrapper.id).find("#tile-up-scroll, #tile-down-scroll"))}}if(r&&!x.GetContainer().data("ScrollPending")){var u=x.GetPM();var w,v;if(SiebelApp.S_App.GetDirection()){w="ScrollPrevData";v="ScrollNextData";SCROLL_UP=consts.get("PAG_SCROLL_DN"),SCROLL_DN=consts.get("PAG_SCROLL_UP");z=-z}else{w="ScrollNextData";v="ScrollPrevData";SCROLL_UP=consts.get("PAG_SCROLL_UP"),SCROLL_DN=consts.get("PAG_SCROLL_DN")}if(z>0&&u.ExecuteMethod("CanInvokeScrollMethod",w)){x.GetContainer().data("ScrollPending",true);u.OnControlEvent(consts.get("PHYEVENT_VSCROLL_LIST"),SCROLL_DN)}else{if(z<0&&u.ExecuteMethod("CanInvokeScrollMethod",v)){x.GetContainer().data("ScrollPending",true);u.OnControlEvent(consts.get("PHYEVENT_VSCROLL_LIST"),SCROLL_UP)}else{if(this.options.scrollX&&t>=A){if(SiebelApp.S_App.GetDirection()){z=-z}if(z>0){if(SiebelApp.S_App.GetDirection()){$("#"+this.wrapper.id).find("#tile-left-scroll").addClass("siebui-tile-scroll-d");$("#"+this.wrapper.id).find("#tile-right-scroll").removeClass("siebui-tile-scroll-d")}else{$("#"+this.wrapper.id).find("#tile-right-scroll").addClass("siebui-tile-scroll-d");$("#"+this.wrapper.id).find("#tile-left-scroll").removeClass("siebui-tile-scroll-d")}}else{if(SiebelApp.S_App.GetDirection()){$("#"+this.wrapper.id).find("#tile-right-scroll").addClass("siebui-tile-scroll-d");$("#"+this.wrapper.id).find("#tile-left-scroll").removeClass("siebui-tile-scroll-d")}else{$("#"+this.wrapper.id).find("#tile-left-scroll").addClass("siebui-tile-scroll-d");$("#"+this.wrapper.id).find("#tile-right-scroll").removeClass("siebui-tile-scroll-d")}}}else{if(t>=A){if(SiebelApp.S_App.GetDirection()){z=-z}if(z>0){$("#"+this.wrapper.id).find("#tile-down-scroll").addClass("siebui-tile-scroll-d");$("#"+this.wrapper.id).find("#tile-up-scroll").removeClass("siebui-tile-scroll-d")}else{$("#"+this.wrapper.id).find("#tile-up-scroll").addClass("siebui-tile-scroll-d");$("#"+this.wrapper.id).find("#tile-down-scroll").removeClass("siebui-tile-scroll-d")}}}}}}}function e(){var s=false,A=0,w=0,B,C,r,y,t,u=parseInt(this.GetPM().Get("GetRecordSet").length),v,D=this.GetContainer(),x=this.GetIScrollObject();var z=x.scroller.getBoundingClientRect();if(x.options.scrollX){A=x.directionX;if(SiebelApp.S_App.GetDirection()){A=-A}A===0?A=(x.distX>0)?-1:1:A}else{A=x.directionY;A===0?A=x.distY>0?-1:1:A}t=parseInt($("#"+x.scroller.firstChild.id).outerWidth(true),10);B=Math.round(x.wrapperWidth/t);r=parseInt(this.GetScrollAmount(),10);r=r<0?-r:r;if(x.options.scrollX){x.x=A>0?x.x:0;y=r*t;if(SiebelApp.S_App.GetDirection()){if(A>0){w=x.wrapperWidth>y?-(x.scrollerWidth-x.wrapperWidth):-y}else{w=y>(-x.x)?-t:y-(-x.x)}}else{if(x.x===0){w=x.wrapperWidth>y?-(x.scrollerWidth-x.wrapperWidth):-y}else{w=y>(-x.x)?0:y-(-x.x)}}}else{x.y=A>0?x.y:0;y=r*t;if(x.y===0){w=x.wrapperHeight>y?-(x.scrollerHeight-x.wrapperHeight):w=r>=B?-(x.scrollerHeight-x.wrapperHeight):-y}else{w=y>(-x.y)?0:y-(-x.y)}}w=w>0?w:w;if(x.options.scrollX){w=x.wrapperWidth>=x.scrollerWidth?0:w}else{w=x.wrapperHeight>=x.scrollerHeight?0:w}setTimeout(function(){D.removeData("ScrollPending");D=null},100);x.options.scrollX?x.scrollTo(w,0):x.scrollTo(0,w);v=A>0?((this.GetPM().Get("GetRecordSet").length-1)-r):(this.GetPM().Get("GetRecordSet").length,10-r);v=parseInt(v,10);this.OnRowSelect(v);this.ShowSelection()}function d(u,v){var r=u.GetPM();var s,t;if(SiebelApp.S_App.GetDirection()){s="ScrollPrevData";t="ScrollNextData";SCROLL_UP=consts.get("PAG_SCROLL_DN"),SCROLL_DN=consts.get("PAG_SCROLL_UP");v=-v}else{s="ScrollNextData";t="ScrollPrevData";SCROLL_UP=consts.get("PAG_SCROLL_UP"),SCROLL_DN=consts.get("PAG_SCROLL_DN")}if(v>0&&r.ExecuteMethod("CanInvokeScrollMethod",s)){r.OnControlEvent(consts.get("PHYEVENT_VSCROLL_LIST"),SCROLL_DN);return true}else{if(v<0&&r.ExecuteMethod("CanInvokeScrollMethod",t)){r.OnControlEvent(consts.get("PHYEVENT_VSCROLL_LIST"),SCROLL_UP);return true}}return false}function q(H,t){var I=this.GetPM(),A="",y="",J="",B="",v=0,x=H.length,C=SiebelApp.S_App.IsRwd()?I.Get("GetListId"):I.Get("GetFullId"),u=I.Get("GetScrollDir"),K=this.GetTileScrollDirection(),G=this.GetContainer().find(".siebui-tile-list"),E=I.Get("GetControls");for(var s=0;s<t;s++){A=this.GetBasicLayout();if(SiebelApp.S_App.IsRwd()){B=C.substr(0,C.length-1)+s;A=A.replace(C,B)}else{B=C+"_tile_"+s;A=A.replace("tile_1",C+"_tile_"+s)}y+=A}if(u!==null&&!u){G.children().first().before(y)}else{G.children().last().after(y)}if(G.children().length===0){G.append(y)}else{while(t){if(u!==null&&!u){G.children().last().remove()}else{G.children().first().remove()}t--}}J=G.children();if(I.Get("enableDragAndDropInList")&&!I.Get("IsInQueryMode")){f.call(this,J,I)}if(!SiebelApp.S_App.IsRwd()){for(v=0;v<x;v++){var F=C+"_tile_"+(v);J.eq(v).removeAttr("id").attr("id",F).addClass("siebui-tile").attr("tabindex","-1")}$("#"+C+"_tile_"+(I.Get("GetSelection"))).addClass("siebui-tile-selected")}else{J.addClass("siebui-tile").attr("tabindex","-1");$("#"+C+(I.Get("GetSelection"))).addClass("siebui-tile-selected")}this.SetFirstTileId(B,x);var r,D;for(var L in E){if(E.hasOwnProperty(L)){r=this.GetUIWrapper(E[L]);D=r.GetEl(undefined,true);if(D&&J.eq(0).find(D.eq(0)).length>0){r.ShowUI();r.BindEvents()}}}for(var L in E){var z=E[L],w=z.GetInputName();if(E.hasOwnProperty(L)&&z.GetUIType()===consts.get("SWE_CTRL_RADIO")){for(v=0;v<x;v++){G.children().eq(v).find("[name*="+w+"]").each(function(){$(this).removeAttr("name").attr("name",w+"_"+v)})}}}for(v=0;v<x;v++){SiebelAppFacade.TileLayoutPR.superclass.ShowSelection.call(this,v)}}l.prototype.SetFirstTileId=function(v,w){var s=this.GetTileScrollDirection();var r=$("#"+v).outerHeight(true);var t=$("#"+v).outerWidth(true);this.SetTileHeight($("#"+v).outerHeight(true));this.SetTileWidth($("#"+v).outerWidth(true));if(!s||s.toLowerCase()==="horizontal"){this.GetContainer().parent(".siebui-tile-container").addClass("siebui-horizontal");this.SetContainerHeight(r*w);this.SetContainerWidth(parseInt(t*w/2),10)}else{this.GetContainer().parent(".siebui-tile-container").addClass("siebui-vertical");if(parseInt(this.GetContainer().children("div.siebui-tile-list").css("max-height"),10)>0){if(this.GetContainer().children("div.siebui-tile-list").outerHeight(true)<parseInt(this.GetContainer().children("div.siebui-tile-list").css("max-height"),10)){this.SetContainerHeight(this.GetContainer().children("div.siebui-tile-list").outerHeight(true))}else{this.SetContainerHeight(parseInt(this.GetContainer().children("div.siebui-tile-list").css("max-height"),10))}}else{this.SetContainerHeight(this.GetContainer().height())}}if(!this.GetTileScrollDirection()||this.GetTileScrollDirection().toLowerCase()==="horizontal"){this.GetContainer().children("div.siebui-tile-list").outerHeight(r)}if(!SiebelAppFacade.DecisionManager.IsTouch()){this.UpdateScrollArrows()}if(this.GetTileScrollDirection().toLowerCase()==="horizontal"){var u=Math.floor(this.GetContainer().height()/this.GetTileHeight());if(u>1){this.GetContainer().find(".siebui-tile-list").css("width",Math.ceil((this.GetTileWidth()*(this.GetPM().Get("GetRecordSet").length)/u)))
}else{this.GetContainer().find(".siebui-tile-list").css("width",(this.GetTileWidth()*this.GetPM().Get("GetRecordSet").length))}}else{var u=Math.floor(this.GetContainer().width()/this.GetTileWidth());if(u>1){this.GetContainer().find(".siebui-tile-list").css("height",(this.GetTileHeight()*Math.ceil((this.GetPM().Get("GetRecordSet").length)/u)))}else{this.GetContainer().find(".siebui-tile-list").css("height",(this.GetTileHeight()*this.GetPM().Get("GetRecordSet").length))}}};l.prototype.UpdateScrollArrows=function(){var t=this.GetTileScrollDirection();var v=this.GetPM();var u=$("#"+v.Get("GetFullId")+"_"+consts.get("SWE_TILE_CONTAINER"));var s=0;var r=v.Get("GetRecordSet")?v.Get("GetRecordSet").length:0;if(!t||t.toLowerCase()==="horizontal"){s=parseInt((u.width()||$("#s_"+v.Get("GetFullId")+"_div").width())/this.GetTileWidth(),10);if(r>s){if(SiebelApp.S_App.GetDirection()){u.find("#tile-left-scroll").removeClass("siebui-tile-scroll-d")}else{u.find("#tile-right-scroll").removeClass("siebui-tile-scroll-d")}}else{if(r===s&&v.ExecuteMethod("CanInvokeScrollMethod","ScrollNextData")){if(SiebelApp.S_App.GetDirection()){u.find("#tile-left-scroll").removeClass("siebui-tile-scroll-d")}else{u.find("#tile-right-scroll").removeClass("siebui-tile-scroll-d")}}else{if(SiebelApp.S_App.GetDirection()){u.find("#tile-left-scroll").addClass("siebui-tile-scroll-d");u.find(".siebui-tile-list").removeClass("siebui-float-left")}else{u.find("#tile-right-scroll").addClass("siebui-tile-scroll-d")}}}}else{s=parseInt(this.GetContainerHeight()/this.GetTileHeight(),10);if(r===0||r<=s){u.find("#tile-down-scroll").addClass("siebui-tile-scroll-d")}else{u.find("#tile-down-scroll").removeClass("siebui-tile-scroll-d")}}};function p(u){if(u.type==="mousedown"||u.type==="touchstart"){if(u.data.ctx.GetPM().Get("enableDragAndDropInList")&&u.isDefaultPrevented()){$(u.target).is(":focusable")?$(u.target).focus():$(u.target).closest(":focusable").focus();return}else{return}}if(typeof(this.id)==="string"){var s=u.data.ctx,t=parseInt(this.id.substring(this.id.lastIndexOf("_")+1),10),v=s.GetPM().Get("GetActiveControl"),r=false;s.GetIScrollObject().enable();if((v===null||v===undefined)&&!isNaN(t)){s.OnRowSelect(t)}if(u.target.type){r=(u.target.type.toLowerCase()==="text"||u.target.type.toLowerCase()==="textarea")}if(!SiebelAppFacade.DecisionManager.IsTouch()&&r&&(!o.IsEmpty(u.target.value))){s.GetIScrollObject().disable()}}}function f(r,s){r.draggable({revert:"invalid",helper:"clone",scroll:false,cursor:"move",stack:"#_svf0",appendTo:"#_sweview",zIndex:9999,delay:2000,start:function(t,u){var w=this.id.substring(this.id.lastIndexOf("_")+1);s.GetRenderer().OnRowSelect(w);$(this).data("rowid",w);$(this).data("appletRowId",s.ExecuteMethod("GetDragInfo",[w]));if(u.helper.zIndex()===0){u.helper.zIndex(9999)}var v=t;v.type="mouseup";s.GetRenderer().GetIScrollObject()._end(v);v=null}})}l.prototype.BindEvents=function(){SiebelAppFacade.TileLayoutPR.superclass.BindEvents.call(this);var v=this.GetPM(),x=SiebelApp.S_App.IsRwd()?this.GetPM().Get("GetListId"):v.Get("GetFullId")+"_tile_",s=v.Get("GetRecordSet"),y=s?s.length:0,w=this.GetTileScrollDirection(),u=SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");$("#s_"+v.Get("GetFullId")+"_div").off("click.drilldown").on("click.drilldown",".siebui-ctrl-drilldown",{ctx:this},function(z){var G=z.data.ctx;var H=z.data.ctx.GetPM().Get("GetControls");var F=this.id.indexOf("_mb");var C=$(this).parents(".siebui-tile").attr("id");var E=parseInt(C.substring(C.lastIndexOf("_")+1),10);var A=this.id.substring(0,F);for(var D in H){if(H.hasOwnProperty(D)){var B=H[D];if(B.GetInputName()===A&&!isNaN(F)&&G.OnRowSelect(E)){G.GetPM().OnControlEvent(h.get("PHYEVENT_DRILLDOWN_LIST"),$(this).attr("name"),E);break}}}});var r;if(SiebelApp.S_App.IsRwd()){var t=x.substr(0,x.length-1);r="[id^='"+t+"']"}else{r="[id^='"+x+"']"}this.GetContainer().delegate(r,"focusin mousedown touchstart",{ctx:this},p);if(!w||w.toLowerCase()==="horizontal"){j.call(this,"#tile-left-scroll","#tile-right-scroll","ScrollPrevData","ScrollNextData",SCROLL_UP,"margin-left","marginLeft","mousedown");j.call(this,"#tile-right-scroll","#tile-left-scroll","ScrollNextData","ScrollPrevData",SCROLL_DN,"margin-left","marginLeft","mousedown")}else{j.call(this,"#tile-up-scroll","#tile-down-scroll","ScrollPrevData","ScrollNextData",SCROLL_UP,"","scrollTop","mousedown");j.call(this,"#tile-down-scroll","#tile-up-scroll","ScrollNextData","ScrollPrevData",SCROLL_DN,"","scrollTop","mousedown")}if(v.Get("enableDragAndDropInList")){$("#s_"+v.Get("GetFullId")+"_div").bind("dragover",function(z){z.preventDefault()}).bind("drop",{ctx:this},function(A){A.preventDefault();var B,z;if(A.originalEvent.dataTransfer){B=A.originalEvent.dataTransfer.getData("Text")}if(B){if(B.indexOf("\r")!==-1){z=B.replace(/\n/g,"").split("\r")}else{z=B.split("\n")}A.data.ctx.GetPM().OnControlEvent(h.get("PHYEVENT_RECORD_DROP"),z)}});$("#s_"+this.GetPM().Get("GetFullId")+"_div").droppable({drop:function(z,A){if(!($(".ui-widget-overlay").not("[id]").length>0&&SiebelApp.S_App.GetPopupPM().Get("state")===consts.get("POPUP_STATE_VISIBLE"))){var B=$(this).droppable("option","ctx").GetPM();A.helper.detach();B.OnControlEvent(consts.get("PHYEVENT_RECORD_DROP_GENERIC"),B.Get("dropMethod"))}},ctx:this})}};function j(r,s,v,u,A,x,z,t){var w=this.GetPM();var y=this.GetPM().Get("GetFullId")+"_"+h.get("SWE_TILE_CONTAINER");$("#"+y).find(r).bind(t,{ctx:this},function(F){var H=F.data.ctx.GetIScrollObject();var B,G=0,C=-H.wrapperOffset.left,D=H.scroller.getBoundingClientRect();F.data.ctx.EnableScrollArrow($("#"+y).find(s));H.enable();if(this.id.search("right")>=0||this.id.search("down")>=0){B=1}else{if(this.id.search("left")>=0||this.id.search("up")>=0){B=-1}}if(H.options.scrollX){if(SiebelApp.S_App.GetDirection()){B=-B}if(H.wrapperWidth>-H.maxScrollX){if(SiebelApp.S_App.GetDirection()){if(B>0){G=-(D.left-H.wrapperWidth)<H.wrapperWidth?(D.left-H.wrapperWidth+$(H.wrapper).offset().left):(D.left-(C/2)-H.scroller.offsetLeft)}else{G=D.right-H.wrapperWidth-$(H.wrapper).offset().left}}else{G=B>0?(D.right-C)-H.wrapperWidth:G=(D.left-C)===0?(D.left-C-(H.scroller.offsetLeft/2)):(D.left-C)}}else{if(SiebelApp.S_App.GetDirection()){if(B>0){G=(-(D.left-C-1)>=H.wrapperWidth)?-(H.wrapperWidth+H.scroller.offsetLeft):D.left-C}else{G=((D.right-C)-H.wrapperWidth)>H.wrapperWidth?(H.wrapperWidth+H.scroller.offsetLeft):((D.right-C)-H.wrapperWidth)}}else{if(B>0){G=((D.right-C)-H.wrapperWidth)>H.wrapperWidth?H.wrapperWidth:((D.right-C)-H.wrapperWidth)}else{G=(-(D.left-C-1)>=H.wrapperWidth)?-H.wrapperWidth:D.left-C}}}}else{if(B>0){var E=(F.data.ctx.GetContainer().children("div.siebui-tile-list").offset().top+H.scrollerHeight)-($("#"+H.wrapper.id).offset().top+H.wrapperHeight);G=(E-H.wrapperHeight)>=H.wrapperHeight?H.wrapperHeight:E}else{(-H.y)>=H.wrapperHeight?G=H.wrapperHeight:G=H.y===0?0:-H.y;G=G>0?-G:G}}if(H.options.scrollX){G=H.wrapperWidth>=H.scrollerWidth?0:G}else{G=H.wrapperHeight>=H.scrollerHeight?0:G}setTimeout(function(){if(SiebelApp.S_App.GetDirection()&&H.options.scrollX){B=-B
}G=Math.ceil(G);G=parseInt(G,10);H.options.scrollX?H.directionX=B:H.directionY=B;H.options.scrollX?H.scrollBy(-G,0,1000):H.scrollBy(0,-G,1000)},0)})}function m(){var s;var r=this.Get("GetSelection");if(this.Get("GetRecordSet").length===1){r=0}if(SiebelApp.S_App.IsRwd()){s=this.Get("GetListId");s=s.substr(0,s.length-1);s+=(r)}else{s=this.Get("GetFullId")+"_tile_"+(r)}return s}l.prototype.ShowSelection=function(){var r=this.GetPM();var s=r.Get("GetSelection");if(r.Get("GetRecordSet").length===1){s=0}var t=$(this.GetContainer()).find(".siebui-tile-selected");t.removeClass("siebui-tile-selected");var u=this.GetPM().Get("GetSelId");$("#"+u).addClass("siebui-tile-selected");if(s>=0){SiebelAppFacade.TileLayoutPR.superclass.ShowSelection.call(this,s)}};l.prototype.OnRowSelect=function(t){var r=this.GetPM();var s=this;if(Number(t)===Number(r.Get("GetSelection"))){return true}SiebelApp.S_App.uiStatus.Busy({});if(!r.OnControlEvent(h.get("PHYEVENT_SELECT_ROW"),t,"","")){SiebelApp.S_App.uiStatus.Free();return false}SiebelApp.S_App.uiStatus.Free();return true};l.prototype.EnableScrollArrow=function(r){if(r.length>0){r.removeClass("siebui-tile-scroll-d")}};l.prototype.EnhanceScroller=function(){var t=this.GetPM(),r=t.Get("GetFullId"),x=null,w=((this.GetTileScrollDirection()||"horizontal").toLowerCase()==="horizontal"),u="<div id='"+r+"_scrollarea' class='siebui-tile-scrollarea'></div>",s=o.IsTrue(SiebelApp.S_App.IsAutoOn()),v="";if(s){v=' ot="button" rn="${DIRECTION}scroll" un="${DIRECTION}scroll" '}x='<div id="tile-${DIRECTION}-scroll"'+v+' class="siebui-tile-${DIRECTION}-scroll siebui-tile-scroll-d"><a class="siebui-tile-scroll-anchor" href="#"/></div>';if(w){this.GetContainer().children("div.siebui-tile-list").after(u);$("#"+r+"_scrollarea").append(x.replace(/\${DIRECTION}/g,"left")+x.replace(/\${DIRECTION}/g,"right"))}else{this.GetContainer().children("div.siebui-tile-list").after(u);$("#"+r+"_scrollarea").append(x.replace(/\${DIRECTION}/g,"up")+x.replace(/\${DIRECTION}/g,"down"))}};l.prototype.EndLife=function(){this.SetBasicLayout(null);this.GetContainer().empty();$("#scrollarea").empty();if(this.GetIScrollObject()){this.GetIScrollObject().destroy()}this.SetIScrollObject(null);$("#s_"+this.GetPM().Get("GetFullId")+"_div").off("click.drilldown");SiebelAppFacade.TileLayoutPR.superclass.EndLife.call(this)};return l}());return"SiebelAppFacade.TileLayoutPR"})};