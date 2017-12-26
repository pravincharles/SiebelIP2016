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

		/*	function WIPProps.getControlUserProp(control, userPropName){
				var userProp;
				var userPropval;
				if (typeof control === "undefined" || typeof userPropName === "undefined"){
					return false;
				}
				userProp = control.GetPMPropSet(SIEBCONSTS.get("SWE_CTRL_PM_PS"));
					if(userProp !== null){
					userPropval= userProp.GetProperty(userPropName);
						if(userPropval !== false){
						alert(userPropval);
							return userPropval;
						}
					}
					return false;
			};*/
		
        SiebelApp.S_App.PluginBuilder.AttachPW(consts.get("SWE_CTRL_CHECKBOX"), SiebelAppFacade.WIPCheckBoxPW, function (control) {
			
			var WIPProps = SiebelAppFacade.WIPProps;
			debugger;
			//var WIPConUserProps = WIPProps.getControlUserProp(control, "WIP_Check_Box");
			
			
            /*if (WIPConUserProps === "True"){
				alert("User Prop");
			}
			else{
				alert(WIPConUserProps)
			}*/
			//alert("PW1");
			return true;
        });
        return SiebelAppFacade.WIPCheckBoxPW;
    });
}