if (typeof (SiebelAppFacade.spellcheckformPR_1) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.spellcheckformPR_1");

    define("siebel/custom/spellcheckformPR_1", [], function(){
        SiebelAppFacade.spellcheckformPR_1 = ( function(){

            function spellcheckformPR_1( pm ){
                SiebelAppFacade.spellcheckformPR_1.superclass.constructor.call(this, pm);
            }

            SiebelJS.Extend( spellcheckformPR_1, SiebelAppFacade.PhysicalRenderer );

            spellcheckformPR_1.prototype.ShowUI = function () {
            SiebelAppFacade.spellcheckformPR_1.superclass.ShowUI.call(this);
               var sPrevhtml = $("textarea[aria-label='Summary']").parent().html();
               var sPosthtml = sPrevhtml.replace("</textarea>","").replace("textarea","input type='text'");
                $("textarea[aria-label='Summary']").replaceWith(sPosthtml);
                $("input[aria-label='Summary']").addClass("siebui-ctrl-input").removeClass("siebui-ctrl-textarea");
            };

            return spellcheckformPR_1;
        }());

        return "SiebelAppFacade.spellcheckformPR_1";
    });
}