SiebelJS.Namespace('SiebelAppFacade.ErrorObjectRenderer');

    define("siebel/errorpopuprenderer", ["siebel/basephyrenderer"], function () {
    SiebelAppFacade.ErrorObjectRenderer = (function () {

        function ErrorObjectRenderer(pm) {
            SiebelAppFacade.ErrorObjectRenderer.superclass.constructor.call(this, pm);
        }

        SiebelJS.Extend(ErrorObjectRenderer, SiebelAppFacade.BasePR);

        ErrorObjectRenderer.prototype.ShowUI = function () {
            SiebelAppFacade.ErrorObjectRenderer.superclass.ShowUI.call(this);
            CreateErrorPopup(this);
        };

        ErrorObjectRenderer.prototype.BindEvents = function (controls, forceStop) {
            SiebelAppFacade.ErrorObjectRenderer.superclass.BindEvents.call(this);
                        
            $("#_sweview_popup").dialog({
                buttons: [{ id: "btn-accept",
                    text: "OK",
                    click: function () { $(this).dialog("close"); }
                }]
            });
			
            $("#_sweview_popup").dialog({title: 'Validation Error'}); // added code to get the dialog title
			
        };

        ErrorObjectRenderer.prototype.ShowError = function (errMsg) {
            if (errMsg) {
                $("#_sweview_popup").text(errMsg).dialog("open");                
            }
        };

        function CreateErrorPopup(errMsg) {
            var divErr;
            if ($("#_sweview_popup").length === 0) {
                divErr = "<div id = '_sweview_popup'>" + "</div>";
                if ($("#_sweview").length !== 0) {
                    $("#_sweview").append(divErr);
                }
            }
            $("#_sweview_popup").dialog({
                autoOpen: false,
                modal: true
            });
        }

        return ErrorObjectRenderer;
    })();
        return SiebelAppFacade.ErrorObjectRenderer;
    });
