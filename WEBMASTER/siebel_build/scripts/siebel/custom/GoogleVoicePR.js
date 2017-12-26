if (typeof (SiebelAppFacade.GoogleVoicePR) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.GoogleVoicePR");

    define("siebel/custom/GoogleVoicePR", [], function(){
        SiebelAppFacade.GoogleVoicePR = ( function(){

            function GoogleVoicePR( pm ){
                SiebelAppFacade.GoogleVoicePR.superclass.constructor.call(this, pm);
            }

            SiebelJS.Extend( GoogleVoicePR, SiebelAppFacade.PhysicalRenderer );

            GoogleVoicePR.prototype.ShowUI = function () {
            SiebelAppFacade.GoogleVoicePR.superclass.ShowUI.call(this);
                var pmodel = this.GetPM();
                var controls = this.GetPM().Get("GetControls");
                var DescControl = controls["Comment"];
                if (DescControl && 'webkitSpeechRecognition' in window) { //we have a control and support for speech recognition
                    var DescInput =  $("textarea[name='" + DescControl.GetInputName() + "']");
					console.log(DescInput);
                    var btn = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"><div id="s2tbutton" class="s2tbutton fa fa-microphone"></div>';
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

            return GoogleVoicePR;
        }());

        return "SiebelAppFacade.GoogleVoicePR";
    });
}