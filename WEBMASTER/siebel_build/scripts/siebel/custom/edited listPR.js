
if (typeof (SiebelAppFacade.ListPR1) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.ListPR1");
 
	define("siebel/custom/ListPR" , ["siebel/jqgridrenderer"] , function(){
			SiebelAppFacade.ListPR1 = (function () {

				function ListPR1(pm) {
					SiebelAppFacade.ListPR1.superclass.constructor.call(this, pm);
				}

				SiebelJS.Extend(ListPR1, SiebelAppFacade.JQGridRenderer);

				ListPR1.prototype.ShowUI = function () {
					SiebelAppFacade.ListPR1.superclass.ShowUI.call(this);
					this.GetPM().AttachPMBinding("Last Updated", cell_variance, {
						scope: this
					});
				}
debugger;
				// Displaying variance field in BOLD	

				function cell_variance() {
					var pm = this.GetPM();
					var recordSet = pm.Get("GetRecordSet");
					var iC = 1;
					jQuery.each(recordSet, function (k, v) {
						var statvalue = (recordSet[iC - 1][ Last Updated"]); 
                                                var fullDate = new Date()
                                                console.log(fullDate);

debug;


						if ((statvalue -"fullDate")<30) {  
                                                var statvalue ="Last Updated"; 
                                                var result=statvalue.bold();

                                                 }
                                                      
                                               
                                               else{
                                                 var result=statvalue();

						}
						iC++;
					};
				}

				return ConatctSLTVariancePR1;
			}());
			
				return "SiebelAppFacade.ConatctSLTVariancePR1";	
	})	
	
}