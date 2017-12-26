if (typeof (SiebelAppFacade.Postload) == "undefined") {
    Namespace('SiebelAppFacade.Postload');

    (function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
        function OnPostload( ){
            try{
                var $div1 = document.getElementById( '_sweview' );
				var $div2 = document.getElementById( 's_vctrl_div' );
				$( $div2 ).insertAfter( $div1 );
				console.log("Loaded");
            }
            catch(error)
            {
                //No-Op
            }
        }
    }());
}