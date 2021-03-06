
if (typeof (SiebelAppFacade.EditedPM) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.EditedPM");
  
	define("siebel/custom/EditedPM" , [] , function(){
		    SiebelAppFacade.EditedPM = (function () {

				function EditedPM(proxy) {

					SiebelAppFacade.EditedPM.superclass.constructor.call(this, proxy);

				}
				SiebelJS.Extend(EditedPM, SiebelAppFacade.ListPresentationModel);

				EditedPM.prototype.Init = function () {
					SiebelAppFacade.EditedPM.superclass.Init.call(this);
					this.AddProperty("Last_Updated", "");
					this.AddMethod("ShowSelection", SelectionChange, {
						sequence: false,
						scope: this
					});
				};

				function SelectionChange() {

					this.SetProperty("Last_Updated", "y");

				}
				return EditedPM;
			}());
			return "SiebelAppFacade.EditedPM";
	})		
}