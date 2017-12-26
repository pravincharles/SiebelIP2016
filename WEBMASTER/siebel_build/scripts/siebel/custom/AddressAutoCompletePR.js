
if( typeof( SiebelAppFacade.AddressAutoCompletePR ) === "undefined" ){
    SiebelJS.Namespace( "SiebelAppFacade.AddressAutoCompletePR" );

    // initialize functions 
    var InitAutoComplete = function () { };
    var initialize = function () { };
    
    //initialize global variables
    var autocomplete;
    var pm;
    var bc;

    var googleAPILoaded = false;

    //function to load google API using ajax calls
    var preGoogleLoadAPI = function(){
        googleAPILoaded = false; // indicate APILoaded as false
        var prevValue = $.ajaxSetup().async; // set ajax setup to sync
        $.ajaxSetup({
            async: false
        });
        //Below is how you include script using jquery
        $.getScript("https://www.google.com/jsapi?callback=loadGAPIs", function() {});
        $.ajaxSetup({
            async: prevValue //restore ajax async
        });
    }

    //this is the function that gets called once Google API is fully loaded
    var loadGAPIs = function () {
        SiebelJS.Log("[LoadGAPIs] Google APIs Loaded...");
        googleAPILoaded = true; // flag set to true to indicate that API is now loaded
    };

    // LoadAPI is the function to call all google related functions. 
    //Here you can see that I am waiting for the google API to be loaded before calling google.load
    var LoadAPI = function (func, retryCount) {
        if (!googleAPILoaded || typeof (google) == "undefined") {
            if (retryCount < 10) {
                retryCount++;
                setTimeout(LoadAPI(func, retryCount), 1000);
            }
        }
        else {
            google.load("maps", "3", { other_params: 'libraries=places,geometry&sensor=false', callback: func });
        }
    };

    define("siebel/custom/AddressAutoCompletePR", ["siebel/jqgridrenderer"], function () {
        SiebelAppFacade.AddressAutoCompletePR = (function () {

            function AddressAutoCompletePR(pm) {
                SiebelAppFacade.AddressAutoCompletePR.superclass.constructor.call(this, pm);
            };

            SiebelJS.Extend(AddressAutoCompletePR, SiebelAppFacade.JQGridRenderer);

            AddressAutoCompletePR.prototype.Init = function () {
                SiebelAppFacade.AddressAutoCompletePR.superclass.Init.call(this);
               // SiebelJS.Log("Autocomplete Renderer Init call");

            };

            AddressAutoCompletePR.prototype.ShowUI = function () {

                SiebelAppFacade.AddressAutoCompletePR.superclass.ShowUI.call(this);

               // SiebelJS.Log("Autocomplete ShowUI call");
                var active_View = SiebelApp.S_App.GetActiveView();//Get Active View
                var applet_Map = active_View.GetAppletMap(); //Get appletmap
                var MVGNewRecordApplet = null;

                //var appletName = "Account Address Mvg Applet (Primary Read Only)";
		var appletName = "Account Address Mvg Applet";

                try {
                    //if MVG applet is shown hten
                    if (applet_Map.hasOwnProperty(appletName)) {
                        MVGNewRecordApplet = applet_Map[appletName];
                    
                        //if MVG applet is in New mode then,
                        if (MVGNewRecordApplet.GetMode() == "New") {

 
                            pm = this.GetPM();
                            bc = MVGNewRecordApplet.GetBusComp();

                            var controls = pm.Get("GetControls");
                            var staddrctrl = controls["Street Address"];
                            var staddripname = staddrctrl.GetInputName();
                            var staddrIPHolder = $("[name=" + staddripname + "]");
                            var tableHolder = staddrIPHolder.closest("table");
                            tableHolder.before('<tr><td colspan=2><input type="text" id="dynamic_addr_ip" style="height: 20px; width: 258px;" maxlength="200" tabindex="0" class="siebui-input-align-left" aria-readonly="false" placeholder="Enter your address here"></td></tr>')

                            // call function to load Google APIs using ajax
                            preGoogleLoadAPI();

                            InitAutoComplete = function () {
                                initialize();
                            };

                            var check_mapAPILoaded = function () {
                                if (!googleAPILoaded)
                                    setTimeout(check_mapAPILoaded, 500);
                                else {
                                    SiebelJS.Log("Show UI before initmap");
                                    LoadAPI("InitAutoComplete", 0);
                                    SiebelJS.Log("Show UI after initmap");
                                }
                            }

                            //call it
                            $('#dynamic_addr_ip').focus();
                            // call initialize();
                            check_mapAPILoaded();

                        }
                    }

                }
                catch (error) {
                    SiebelJS.log(error);
                }


            };

            AddressAutoCompletePR.prototype.BindData = function () {
                SiebelAppFacade.AddressAutoCompletePR.superclass.BindData.apply(this, arguments);
            };

            AddressAutoCompletePR.prototype.resize = function () {
            };

            initialize = function () {
                if (typeof (google.maps.places) !== "undefined") {
                // get the handle for your new input field and enable autocomplete! Simple! 
                    var input = $('#dynamic_addr_ip')[0];
                    $('#dynamic_addr_ip').focus();
                    autocomplete = new google.maps.places.Autocomplete(input);
                    // Add a listner to input field - whenever user selects an address call your 
                    //fillInAddress() function to populate the address info
                    google.maps.event.addListener(autocomplete, 'place_changed', function () {
                        fillInAddress();
                    });

                }
            };

            function fillInAddress() {
                // Get the place details from the autocomplete object.
                var place = autocomplete.getPlace();

                var controls = pm.Get("GetControls");
                // array to hold all the adderss fields exposed on MVG applet
                var controlsArray = {
                    "Street Address": controls["Street Address"],
                    "City": controls["City"],
                    "Postal Code": controls["Postal Code"],
                    "State": controls["State"],
                    "Country": controls["Country"]
                    /*"Latitude": controls["Latitude"],
                    "Longitude": controls["Longitude"]*/
                };

                // array to hold info obtained from google place object
                var componentForm = {
                    street_number: 'short_name',
                    route: 'long_name', //Street Address
                    locality: 'long_name', // City
                    postal_town: 'long_name', // City
                    administrative_area_level_1: 'short_name', //State
                    administrative_area_level_2: 'long_name', // County
                    country: 'long_name',
                    postal_code: 'short_name'
                };

                // clear the previous address info on the applet
                for (var component in controlsArray)
                    $("[name=" + controlsArray[component].GetInputName() + "]").val("");

                // Get each component of the address from the place details
                // and update it with the actual address info
                for (var i = 0; i < place.address_components.length; i++) {
                    var addressType = place.address_components[i].types[0];
                    if (componentForm[addressType]) {
                        componentForm[addressType] = place.address_components[i][componentForm[addressType]];
                    }
                }

                //capture streetAddress 
                var streetAddress = "";
                if (componentForm["street_number"] != "short_name")
                    streetAddress = componentForm["street_number"] + " ";

                if (componentForm["route"] != "long_name")
                    streetAddress += componentForm["route"];

                //pupulate streetAddress 
                bc.SetFieldValue("Street Address",streetAddress);

                //pupulate city
                if (componentForm["locality"] != "long_name") 
                    bc.SetFieldValue("City",componentForm["locality"]);
                else if(componentForm["postal_town"] != "long_name")
                    bc.SetFieldValue("City",componentForm["postal_town"]);

                //pupulate post code
                if (componentForm["postal_code"] != "short_name") 
                                    bc.SetFieldValue("Postal Code",componentForm["postal_code"]);

                //pupulate country
                bc.SetFieldValue("Country",componentForm["country"] == "United States" ? "USA" : componentForm["country"]);

                //pupulate latitude and longitude
               /* bc.SetFieldValue("Latitude",place.geometry.location.lat());
                bc.SetFieldValue("Longitude",place.geometry.location.lng());*/

                //pupulate state/province/county
                bc.SetFieldValue("State",
                    componentForm["administrative_area_level_1"] != "short_name" ? componentForm["administrative_area_level_1"] : 
                    componentForm["administrative_area_level_2"]!= "long_name" ? componentForm["administrative_area_level_2"]:"");

                //put the focus on the Street Address field.
                $("[name=" + controlsArray["Street Address"].GetInputName() + "]").focus();
            }

            return AddressAutoCompletePR;
        } ()); // End of funciton
        return "SiebelAppFacade.AddressAutoCompletePR";
    });                                                                                                                          // End of Define
}
