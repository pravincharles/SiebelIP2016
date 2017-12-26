if (typeof (SiebelAppFacade.WIPTextAreaPW) === "undefined") {
    SiebelJS.Namespace('SiebelAppFacade.WIPTextAreaPW');

    define("siebel/custom/WIPTextAreaPW", [], function () {
        SiebelAppFacade.WIPTextAreaPW = (function () {

            function WIPTextAreaPW() {

                SiebelAppFacade.WIPTextAreaPW.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(WIPTextAreaPW, SiebelAppFacade.FieldPW);

            WIPTextAreaPW.prototype.ShowUI = function (control) {

                SiebelAppFacade.WIPTextAreaPW.superclass.ShowUI.call(this, control);
					
                var el = this.GetEl();
				if (el) {
                    el.css({						
					   "box-shadow": "inset 0px 0px 7px rgb(240,0,0)",
					   "text-shadow": "inset 0px 0px 10px rgb(240,0,0)"
					});
                }
            };
            
            return WIPTextAreaPW;
        }());


		
        SiebelApp.S_App.PluginBuilder.AttachPW(consts.get("SWE_CTRL_TEXTAREA"), SiebelAppFacade.WIPTextAreaPW, function (control) {
			
			
			return true;
        });
        return SiebelAppFacade.WIPTextAreaPW;
    });
}