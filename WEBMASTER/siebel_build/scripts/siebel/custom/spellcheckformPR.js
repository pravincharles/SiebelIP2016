if (typeof (SiebelAppFacade.spellcheckformPR) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.spellcheckformPR");

    define("siebel/custom/spellcheckformPR", [], function(){
        SiebelAppFacade.spellcheckformPR = ( function(){

            function spellcheckformPR( pm ){
                SiebelAppFacade.spellcheckformPR.superclass.constructor.call(this, pm);
            }

            SiebelJS.Extend( spellcheckformPR, SiebelAppFacade.PhysicalRenderer );

            spellcheckformPR.prototype.ShowUI = function () {
            SiebelAppFacade.spellcheckformPR.superclass.ShowUI.call(this);
               var sPrevhtml = $("textarea[aria-label='Summary']").parent().html();
               var sPosthtml = sPrevhtml.replace("</textarea>","").replace("textarea","input type='text'");
                $("textarea[aria-label='Summary']").replaceWith(sPosthtml);
                $("input[aria-label='Summary']").addClass("siebui-ctrl-input").removeClass("siebui-ctrl-textarea");
            };

            return spellcheckformPR;
        }());

        return "SiebelAppFacade.spellcheckformPR";
    });
}