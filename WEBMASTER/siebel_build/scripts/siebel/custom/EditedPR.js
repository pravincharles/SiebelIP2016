
if (typeof (SiebelAppFacade.EditedPR) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.EditedPR");
 
   	define("siebel/custom/EditedPR" , ["siebel/jqgridrenderer"] , function(){
	
			SiebelAppFacade.EditedPR = (function () {

				function EditedPR(pm) {
					SiebelAppFacade.EditedPR.superclass.constructor.call(this, pm);
				}

				SiebelJS.Extend(EditedPR, SiebelAppFacade.JQGridRenderer);

				EditedPR.prototype.ShowUI = function () {
					SiebelAppFacade.EditedPR.superclass.ShowUI.call(this);
					alert("EditedPR");
					this.GetPM().AttachPMBinding("Last_Updated", cell_variance, {
						scope: this
					});
				}

				

				function cell_variance() {
					 var pm = this.GetPM();
					var recordSet = pm.Get("GetRecordSet");
					var iC = 1;
					jQuery.each(recordSet, function (k, v) {
						debugger;
						var statvalue = (recordSet[iC - 1]["diff"]); 
						debugger;
                       	if(statvalue == 'Y') { 
                            
							$("[id='"+iC+"diff']").parent().find("td").css({"font-weight":"bold"});
							
						}
						  
                        
						iC++;
					});
				}

				return EditedPR;
			}());
			
				return "SiebelAppFacade.EditedPR";	
	});	
	
}