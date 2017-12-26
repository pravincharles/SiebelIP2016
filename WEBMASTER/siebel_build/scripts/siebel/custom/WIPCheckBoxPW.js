if (typeof (SiebelAppFacade.WIPCheckBoxPW) === "undefined") {
    SiebelJS.Namespace('SiebelAppFacade.WIPCheckBoxPW');

    define("siebel/custom/WIPCheckBoxPW", [], function () {
        SiebelAppFacade.WIPCheckBoxPW = (function () {

            function WIPCheckBoxPW() {

                SiebelAppFacade.WIPCheckBoxPW.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(WIPCheckBoxPW, SiebelAppFacade.CheckBoxPW);

            WIPCheckBoxPW.prototype.ShowUI = function (control) {

                SiebelAppFacade.WIPCheckBoxPW.superclass.ShowUI.call(this, control);
					
                var el = this.GetEl();
                if (el) {
                    el.css({						
					   //"width": "20px",
                        //"height": "20px",
                        "outline": "medium solid red"
					});
                }
            };
            
            return WIPCheckBoxPW;
        }());

	
        SiebelApp.S_App.PluginBuilder.AttachPW(consts.get("SWE_CTRL_CHECKBOX"), SiebelAppFacade.WIPCheckBoxPW, function (control) {
		debugger;	
		var WIPApplet = control.GetApplet();
		var WIPAppletName = WIPApplet.GetName();
		var WIPFieldName = control.GetFieldName();
			if((WIPAppletName == "Activity Form Applet") && (WIPFieldName == "Private")){
				return true;
			}else{
				return false;
			}
	
	
        });
        return SiebelAppFacade.WIPCheckBoxPW;
    });
}