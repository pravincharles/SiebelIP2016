
if (typeof (SiebelAppFacade.ListPM1) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.ListPM1");
  
	define("siebel/custom/ListPM" , [] , function(){
		    SiebelAppFacade.ListPM1 = (function () {

				function ListPM1(proxy) {

					SiebelAppFacade.ListPM1.superclass.constructor.call(this, proxy);

				}
				SiebelJS.Extend(ListPM1, SiebelAppFacade.ListPresentationModel);

				ListPM1.prototype.Init = function () {
					SiebelAppFacade.ListPM1.superclass.Init.call(this);
					this.AddProperty("Last Updated", "");
					this.AddMethod("ShowSelection", SelectionChange, {
					alert("ListPM");
						sequence: false,
						scope: this
					});
				};

				function SelectionChange() {

					this.SetProperty("Last Updated", "y");

				}
				return ListPM1;
			}());
			return "SiebelAppFacade.ListPM1";
	})		
}