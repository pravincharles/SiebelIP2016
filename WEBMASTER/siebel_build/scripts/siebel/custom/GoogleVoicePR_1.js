if (typeof (SiebelAppFacade.GoogleVoicePR_1) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.GoogleVoicePR_1");

    define("siebel/custom/GoogleVoicePR_1", [], function(){
        SiebelAppFacade.GoogleVoicePR_1 = ( function(){

            function GoogleVoicePR_1( pm ){
                SiebelAppFacade.GoogleVoicePR_1.superclass.constructor.call(this, pm);
            }

            SiebelJS.Extend( GoogleVoicePR_1, SiebelAppFacade.PhysicalRenderer );

            GoogleVoicePR_1.prototype.ShowUI = function () {
            SiebelAppFacade.GoogleVoicePR_1.superclass.ShowUI.call(this);
                var pmodel = this.GetPM();
                var controls = this.GetPM().Get("GetControls");
                //var DescControl = controls["Comment"];
		var DescControl = controls["Comment - Auto"];
                if (DescControl && 'webkitSpeechRecognition' in window) { //we have a control and support for speech recognition
                    var DescInput =  $("textarea[name='" + DescControl.GetInputName() + "']");
					console.log(DescInput);
                    //var btn = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"><div id="s2tbutton" class="s2tbutton fa fa-microphone"></div>';
		    var btn = '<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"><div id="s2tbutton" class="s2tbutton fa fa-microphone"></div>';
                    var transcript = ""; //recognized text will be here
                    var recognition = new webkitSpeechRecognition();
                    var that = this; //context, context, context...
                    recognition.lang="en-US"; //language variant to be recognized
                    recognition.onresult = function(event) { //callback when recognition stops
					console.log(recognition)
					
                        $('#s2tbutton').toggleClass("active"); //stop animation on mic icon
                        transcript = event.results[0][0].transcript; //retrieve awesome speech transcript
						console.log(transcript);
                        that.GetPM().ExecuteMethod("SetFormattedValue", DescControl, transcript); //use PR context to set value via PM
                        //playback ;-) (because we can)
                        var msg = new SpeechSynthesisUtterance("Did you just say: " + transcript + "?");
                        console.log(msg);
                        window.speechSynthesis.speak(msg);
                    }
                    DescInput.addClass("s2tinput"); //add style to Description field
                    DescInput.parent().after(btn); //add button
                    $('#s2tbutton').click(function() { //button clicked
                        recognition.start(); //start listening
                        $('#s2tbutton').toggleClass("active"); //animate mic icon
                    });
                }
            };

            return GoogleVoicePR_1;
        }());

        return "SiebelAppFacade.GoogleVoicePR_1";
    });
}