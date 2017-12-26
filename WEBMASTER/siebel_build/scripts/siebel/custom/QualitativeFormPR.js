
if(typeof(SiebelAppFacade.QualitativeFormPR) === "undefined"){
    SiebelJS.Namespace("SiebelAppFacade.QualitativeFormPR");
    define("siebel/custom/QualitativeFormPR", ["siebel/phyrenderer"], function(){
        SiebelAppFacade.QualitativeFormPR = (function(){
            //var consts = SiebelJS.Dependency("SiebelApp.Constants");
            var PM;
            var PRName = "";
            function QualitativeFormPR(pm){
            SiebelAppFacade.QualitativeFormPR.superclass.constructor.call(this,pm);}
            //Extend form applet renderer
            SiebelJS.Extend(QualitativeFormPR, SiebelAppFacade.PhysicalRenderer);

            QualitativeFormPR.prototype.Init = function() {
                SiebelAppFacade.QualitativeFormPR.superclass.Init.call(this);
                PM = this.GetPM();
                PRName = PM.Get("GetName") + "_QualitativeFormPR";
                SiebelJS.Log("Custom PR " + PRName + ": Init method reached.");
                //implement bindings (PM.AttachPMBinding) here
                this.AttachPMBinding("C_Progress", UpdateProgressbar,{ scope: this } );
                this.AttachPMBinding( "C_ProbValNew",  UpdateSlider, { scope: this });
				this.AttachPMBinding("C_Progress1", UpdateProgressbar1,{ scope: this } );
                this.AttachPMBinding( "C_ProbValNew1",  UpdateSlider1, { scope: this });
				this.AttachPMBinding("C_Progress2", UpdateProgressbar2,{ scope: this } );
                this.AttachPMBinding( "C_ProbValNew2",  UpdateSlider2, { scope: this });
				this.AttachPMBinding("C_Progress3", UpdateProgressbar3,{ scope: this } );
                this.AttachPMBinding( "C_ProbValNew3",  UpdateSlider3, { scope: this });
				this.AttachPMBinding("C_Progress4", UpdateProgressbar4,{ scope: this } );
                this.AttachPMBinding( "C_ProbValNew4",  UpdateSlider4, { scope: this });
				this.AttachPMBinding("C_Progress5", UpdateProgressbar5,{ scope: this } );
                this.AttachPMBinding( "C_ProbValNew5",  UpdateSlider5, { scope: this });
            };
            QualitativeFormPR.prototype.ShowUI = function(){
                SiebelAppFacade.QualitativeFormPR.superclass.ShowUI.call(this);
                SiebelJS.Log("Custom PR " + PRName + ": ShowUI method reached.");
                //implement ShowUI method here
                //show progressbar
                var oControlSet = PM.Get("GetControls");
                var oTitle = oControlSet["Diversification of Customer Base"];  //get the applet title control object
                var sTitleId = oTitle.GetInputName(); //get the s_x_y_z Id
                var sProgressbarOptions = {value:0}; //set progressbar options
                var pbarloc = $("#" + sTitleId);  //select the title label as jQuery object
                pbarloc.after("<div id='PBAR'></div>"); //create an empty div after the label
                $("#PBAR").progressbar(sProgressbarOptions); //convert the empty div to a progressbar
				var oTitle1 = oControlSet["Operating Efficiency"];  //get the applet title control object
                var sTitleId1 = oTitle1.GetInputName(); //get the s_x_y_z Id
                var sProgressbarOptions1 = {value:0}; //set progressbar options
                var pbarloc1 = $("#" + sTitleId1);  //select the title label as jQuery object
                pbarloc1.after("<div id='PBAR1'></div>"); //create an empty div after the label
                $("#PBAR1").progressbar(sProgressbarOptions1); //convert the empty div to a progressbar
				var oTitle2 = oControlSet["Supplier Portfolio"];  //get the applet title control object
                var sTitleId2 = oTitle2.GetInputName(); //get the s_x_y_z Id
                var sProgressbarOptions2 = {value:0}; //set progressbar options
                var pbarloc2 = $("#" + sTitleId2);  //select the title label as jQuery object
                pbarloc2.after("<div id='PBAR2'></div>"); //create an empty div after the label
                $("#PBAR2").progressbar(sProgressbarOptions2); //convert the empty div to a progressbar
				var oTitle3 = oControlSet["Management Qualities"];  //get the applet title control object
                var sTitleId3 = oTitle3.GetInputName(); //get the s_x_y_z Id
                var sProgressbarOptions3 = {value:0}; //set progressbar options
                var pbarloc3 = $("#" + sTitleId3);  //select the title label as jQuery object
                pbarloc3.after("<div id='PBAR3'></div>"); //create an empty div after the label
                $("#PBAR3").progressbar(sProgressbarOptions3); //convert the empty div to a progressbar
				var oTitle4 = oControlSet["Market Risk"];  //get the applet title control object
                var sTitleId4 = oTitle4.GetInputName(); //get the s_x_y_z Id
                var sProgressbarOptions4 = {value:0}; //set progressbar options
                var pbarloc4 = $("#" + sTitleId4);  //select the title label as jQuery object
                pbarloc4.after("<div id='PBAR4'></div>"); //create an empty div after the label
                $("#PBAR4").progressbar(sProgressbarOptions1); //convert the empty div to a progressbar
				var oTitle5 = oControlSet["Product Service Diversification"];  //get the applet title control object
                var sTitleId5 = oTitle5.GetInputName(); //get the s_x_y_z Id
                var sProgressbarOptions5 = {value:0}; //set progressbar options
                var pbarloc5 = $("#" + sTitleId5);  //select the title label as jQuery object
                pbarloc5.after("<div id='PBAR5'></div>"); //create an empty div after the label
                $("#PBAR5").progressbar(sProgressbarOptions1); //convert the empty div to a progressbar

               

                //Slider
                var cProb = oControlSet["Diversification of Customer Base"];   //get control object for Probability control
				var cProb1 = oControlSet["Operating Efficiency"];
				var cProb2 = oControlSet["Supplier Portfolio"];
				var cProb3 = oControlSet["Management Qualities"];
				var cProb4 = oControlSet["Market Risk"];
				var cProb5 = oControlSet["Product Service Diversification"];
                var curVal = PM.ExecuteMethod("GetFieldValue",cProb);  //get current probability value
				var curVal1 = PM.ExecuteMethod("GetFieldValue",cProb1);
				var curVal2 = PM.ExecuteMethod("GetFieldValue",cProb2);
				var curVal3 = PM.ExecuteMethod("GetFieldValue",cProb3);
				var curVal4 = PM.ExecuteMethod("GetFieldValue",cProb4);
				var curVal5 = PM.ExecuteMethod("GetFieldValue",cProb5);
                var cProbID = cProb.GetInputName();  //get element id for the control
                var cProbjq = $( "[name='" + cProbID + "']" );  //get the jQuery object for the control
				var cProbID1 = cProb1.GetInputName();  //get element id for the control
                var cProbjq1 = $( "[name='" + cProbID1 + "']" );  //get the jQuery object for the control
				var cProbID2 = cProb2.GetInputName();  //get element id for the control
                var cProbjq2 = $( "[name='" + cProbID2 + "']" );  //get the jQuery object for the control
				var cProbID3 = cProb3.GetInputName();  //get element id for the control
                var cProbjq3 = $( "[name='" + cProbID3 + "']" );  //get the jQuery object for the control
				var cProbID4 = cProb4.GetInputName();  //get element id for the control
                var cProbjq4 = $( "[name='" + cProbID4 + "']" );  //get the jQuery object for the control
				var cProbID5 = cProb5.GetInputName();  //get element id for the control
                var cProbjq5 = $( "[name='" + cProbID5 + "']" );  //get the jQuery object for the control
                /*var sliderOptions = { //set slider options
                    start: function(){ //when slider is initialized
                    },
                    slide: function(e,ui){ //when user drags the slider handle
                        SetSliderStyle(ui.value);  //change the slider background color
                        $("#tip").remove();
                        $("<div></div>", {id:"tip",text:ui.value+"%"}).appendTo(".ui-slider-handle");
                    },
                    change: function(e,ui){ //when user releases the slider handle
                        SetSliderStyle(ui.value);  //change the slider background color
                        PM.SetProperty("C_ProbValSet",ui.value);    //set the property
                        PM.OnControlEvent("PROB_SET",ui.value);   //wake up the PM
                    },
                    min:1,max:5,step:1,value:curVal  //other options for slider
                };  //end of option settings
				var sliderOptions1 = { //set slider options
                    start: function(){ //when slider is initialized
                    },
                    slide: function(e,ui){ //when user drags the slider handle
                        SetSliderStyle(ui.value);  //change the slider background color
                        $("#tip").remove();
                        $("<div></div>", {id:"tip",text:ui.value+"%"}).appendTo(".ui-slider-handle");
                    },
                    change: function(e,ui){ //when user releases the slider handle
                        SetSliderStyle(ui.value);  //change the slider background color
                        PM.SetProperty("C_ProbValSet1",ui.value);    //set the property
                        PM.OnControlEvent("PROB_SET1",ui.value);   //wake up the PM
                    },
                    min:1,max:5,step:1,value:curVal1  //other options for slider
                };*/
			var cUsageOptions = {
					min:1,max:5,step:1,value:curVal,
					start: function(){},
					slide: function(e,ui){
						SetSliderStyle(ui.value);
					},
					change: function(e,ui){
						SetSliderStyle(ui.value);
						PM.SetProperty("C_ProbValSet",ui.value);
						PM.OnControlEvent("PROB_SET",ui.value);
					}
				};  
			var cUsageOptions1 = {
					min:1,max:5,step:1,value:curVal1,
					start: function(){},
					slide: function(e,ui){
						SetSliderStyle1(ui.value);
					},
					change: function(e,ui){
						SetSliderStyle1(ui.value);
						PM.SetProperty("C_ProbValSet1",ui.value);
						PM.OnControlEvent("PROB_SET1",ui.value);
					}
				};
			var cUsageOptions2 = {
					min:1,max:5,step:1,value:curVal2,
					start: function(){},
					slide: function(e,ui){
						SetSliderStyle2(ui.value);
					},
					change: function(e,ui){
						SetSliderStyle2(ui.value);
						PM.SetProperty("C_ProbValSet2",ui.value);
						PM.OnControlEvent("PROB_SET2",ui.value);
					}
				};  
			var cUsageOptions3 = {
					min:1,max:5,step:1,value:curVal3,
					start: function(){},
					slide: function(e,ui){
						SetSliderStyle3(ui.value);
					},
					change: function(e,ui){
						SetSliderStyle3(ui.value);
						PM.SetProperty("C_ProbValSet3",ui.value);
						PM.OnControlEvent("PROB_SET3",ui.value);
					}
				};  
			var cUsageOptions4 = {
					min:1,max:5,step:1,value:curVal4,
					start: function(){},
					slide: function(e,ui){
						SetSliderStyle4(ui.value);
					},
					change: function(e,ui){
						SetSliderStyle4(ui.value);
						PM.SetProperty("C_ProbValSet4",ui.value);
						PM.OnControlEvent("PROB_SET4",ui.value);
					}
				};  
			var cUsageOptions5 = {
					min:1,max:5,step:1,value:curVal5,
					start: function(){},
					slide: function(e,ui){
						SetSliderStyle5(ui.value);
					},
					change: function(e,ui){
						SetSliderStyle5(ui.value);
						PM.SetProperty("C_ProbValSet5",ui.value);
						PM.OnControlEvent("PROB_SET5",ui.value);
					}
				};    
                cProbjq.parent().hide();  //hide the original control
                var mySlider = $("<div id='mySlider'></div>"); //create slider container
				var labl =$("<div id='amt'><p><input type='text' id='amount' readonly style='margin-left:50px;border:0; color:#f6931f; font-weight:bold;'></p></div>");
				var comnt =$("<div id='comment'><input type='text' name='username'></div>");
				
                mySlider.appendTo(cProbjq.parent().parent()); //append slider container to element
                mySlider.slider(cUsageOptions); //make slider
				
                mySlider.addClass("oui-slider"); //add class
				labl.appendTo(cProbjq.parent().parent());	
				cProbjq1.parent().hide();  //hide the original control

				var labl1 =$("<div id='amt1'><p><input type='text' id='amount1' readonly style='margin-left:50px;border:0; color:#f6931f; font-weight:bold;'></p></div>");
				
                var mySlider1 = $("<div id='mySlider1'></div>"); //create slider container
                mySlider1.appendTo(cProbjq1.parent().parent()); //append slider container to element
                mySlider1.slider(cUsageOptions1); //make slider
                mySlider1.addClass("oui-slider1"); //add class
				labl1.appendTo(cProbjq1.parent().parent());
				cProbjq2.parent().hide();  //hide the original control
				var labl2 =$("<div id='amt2'><p><input type='text' id='amount2' readonly style='margin-left:50px;border:0; color:#f6931f; font-weight:bold;'></p></div>");
                var mySlider2 = $("<div id='mySlider2'></div>"); //create slider container
                mySlider2.appendTo(cProbjq2.parent().parent()); //append slider container to element
                mySlider2.slider(cUsageOptions2); //make slider
                mySlider2.addClass("oui-slider2"); //add class
				labl2.appendTo(cProbjq2.parent().parent());
				cProbjq3.parent().hide();  //hide the original control

				var labl3 =$("<div id='amt3'><p><input type='text' id='amount3' readonly style='margin-left:50px;border:0; color:#f6931f; font-weight:bold;'></p></div>");
                var mySlider3 = $("<div id='mySlider3'></div>"); //create slider container
                mySlider3.appendTo(cProbjq3.parent().parent()); //append slider container to element
                mySlider3.slider(cUsageOptions3); //make slider
                mySlider3.addClass("oui-slider3"); //add class
				labl3.appendTo(cProbjq3.parent().parent());
				cProbjq4.parent().hide();  //hide the original control

				var labl4 =$("<div id='amt4'><p><input type='text' id='amount4' readonly style='margin-left:50px;border:0; color:#f6931f; font-weight:bold;'></p></div>");
                var mySlider4 = $("<div id='mySlider4'></div>"); //create slider container
                mySlider4.appendTo(cProbjq4.parent().parent()); //append slider container to element
                mySlider4.slider(cUsageOptions4); //make slider
                mySlider4.addClass("oui-slider4"); //add class
				labl4.appendTo(cProbjq4.parent().parent());
				cProbjq5.parent().hide();  //hide the original control

				var labl5 =$("<div id='amt5'><p><input type='text' id='amount5' readonly style='margin-left:50px;border:0; color:#f6931f; font-weight:bold;'></p></div>");
                var mySlider5 = $("<div id='mySlider5'></div>"); //create slider container
                mySlider5.appendTo(cProbjq5.parent().parent()); //append slider container to element
                mySlider5.slider(cUsageOptions5); //make slider
                mySlider5.addClass("oui-slider5"); //add class
				labl5.appendTo(cProbjq5.parent().parent());
				

            };
            QualitativeFormPR.prototype.BindEvents = function(){
                SiebelAppFacade.QualitativeFormPR.superclass.BindEvents.call(this);
                SiebelJS.Log("Custom PR " + PRName + ": BindEvents method reached.");
                //implement BindEvents method here
            };
            QualitativeFormPR.prototype.BindData = function(){
                SiebelAppFacade.QualitativeFormPR.superclass.BindData.call(this);
                SiebelJS.Log("Custom PR " + PRName + ": BindData method reached.");
                //implement BindData method here
            };
            //implement custom functions here
            function UpdateProgressbar(){
                var val = parseInt(PM.Get("C_Progress"));  //get value (set by PM)
                $("#PBAR").progressbar("value", val); //set the value
                //prototype: colorize progress bar red-yellow-green depending on value
                var color;
                var r = val*20 ; //below val = 50, green will be 0-100, above 100
                var g = 100 - (val*20); //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".ui-progressbar .ui-progressbar-value").css("background",color); //apply color
            }
            function UpdateSlider(){ //will be invoked when needed e.g. at ShowSelection by PM
                var newVal = PM.Get("C_ProbValNew");   //get new prob value
                var oldVal = PM.Get("C_ProbValSet");    //get old prob value
                $("#tip").remove();  //remove the tooltip
                if (!isNaN(oldVal) && oldVal != newVal){   //condition for updating slider
                    $(".oui-slider").slider("value",newVal);   //set slider value
                    SetSliderStyle(newVal);   //change the slider background color
                }
            }
			function SetSliderStyle(val){  //change the slider background color
                var color;
                var r = val*20; //below val = 50, green will be 0-100, above 100
                var g = 100 - (val*20); //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".oui-slider").css("background",color);  //apply style to slider
				var lovVal="";
				switch(val)
				{
							case 1:lovVal = "Low Risk";
							break;
							case 2:lovVal = "Moderate Risk";
							break;
							case 3:lovVal = "High Risk";
							break;
							case 4:lovVal = "Very High Risk";
							break;
							case 5:lovVal = "Unknown";
							break;
							//default: lovVal5 = "Low Risk";
							//break;
				}
				$( "#amount" ).val(lovVal);
            }
			function UpdateProgressbar1(){
                var val = parseInt(PM.Get("C_Progress1"));  //get value (set by PM)
                $("#PBAR1").progressbar("value", val); //set the value
                //prototype: colorize progress bar red-yellow-green depending on value
                var color;
                var g = val <= 50 ? val*2 : 100; //below val = 50, green will be 0-100, above 100
                var r = val > 50 ? 200 - (val*2) : 100; //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".ui-progressbar .ui-progressbar-value").css("background",color); //apply color
            }
            function UpdateSlider1(){ //will be invoked when needed e.g. at ShowSelection by PM
                var newVal = PM.Get("C_ProbValNew1");   //get new prob value
                var oldVal = PM.Get("C_ProbValSet1");    //get old prob value
                $("#tip").remove();  //remove the tooltip
                if (!isNaN(oldVal) && oldVal != newVal){   //condition for updating slider
                    $(".oui-slider1").slider("value",newVal);   //set slider value
                    SetSliderStyle1(newVal);   //change the slider background color
                }
            }
            
			function SetSliderStyle1(val){  //change the slider background color
                var color;
                var r = val*20; //below val = 50, green will be 0-100, above 100
                var g = 100 - (val*20); //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".oui-slider1").css("background",color);  //apply style to slider
				var lovVal="";
				switch(val)
				{
							case 1:lovVal = "Low Risk";
							break;
							case 2:lovVal = "Moderate Risk";
							break;
							case 3:lovVal = "High Risk";
							break;
							case 4:lovVal = "Very High Risk";
							break;
							case 5:lovVal = "Unknown";
							break;
							//default: lovVal5 = "Low Risk";
							//break;
				}
				$( "#amount1" ).val(lovVal);
            }
			function UpdateProgressbar2(){
                var val = parseInt(PM.Get("C_Progress2"));  //get value (set by PM)
                $("#PBAR2").progressbar("value", val); //set the value
                //prototype: colorize progress bar red-yellow-green depending on value
                var color;
                var g = val <= 50 ? val*2 : 100; //below val = 50, green will be 0-100, above 100
                var r = val > 50 ? 200 - (val*2) : 100; //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".ui-progressbar .ui-progressbar-value").css("background",color); //apply color
            }
            function UpdateSlider2(){ //will be invoked when needed e.g. at ShowSelection by PM
                var newVal = PM.Get("C_ProbValNew2");   //get new prob value
                var oldVal = PM.Get("C_ProbValSet2");    //get old prob value
                $("#tip").remove();  //remove the tooltip
                if (!isNaN(oldVal) && oldVal != newVal){   //condition for updating slider
                    $(".oui-slider2").slider("value",newVal);   //set slider value
                    SetSliderStyle2(newVal);   //change the slider background color
                }
            }
            
			function SetSliderStyle2(val){  //change the slider background color
                var color;
                var r = val*20; //below val = 50, green will be 0-100, above 100
                var g = 100 - (val*20); //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".oui-slider2").css("background",color);  //apply style to slider
				var lovVal="";
				switch(val)
				{
							case 1:lovVal = "Low Risk";
							break;
							case 2:lovVal = "Moderate Risk";
							break;
							case 3:lovVal = "High Risk";
							break;
							case 4:lovVal = "Very High Risk";
							break;
							case 5:lovVal = "Unknown";
							break;
							//default: lovVal5 = "Low Risk";
							//break;
				}
				$( "#amount2" ).val(lovVal);		
            }
			function UpdateProgressbar3(){
                var val = parseInt(PM.Get("C_Progress3"));  //get value (set by PM)
                $("#PBAR3").progressbar("value", val); //set the value
                //prototype: colorize progress bar red-yellow-green depending on value
                var color;
                var g = val <= 50 ? val*2 : 100; //below val = 50, green will be 0-100, above 100
                var r = val > 50 ? 200 - (val*2) : 100; //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".ui-progressbar .ui-progressbar-value").css("background",color); //apply color
            }
            function UpdateSlider3(){ //will be invoked when needed e.g. at ShowSelection by PM
                var newVal = PM.Get("C_ProbValNew3");   //get new prob value
                var oldVal = PM.Get("C_ProbValSet3");    //get old prob value
                $("#tip").remove();  //remove the tooltip
                if (!isNaN(oldVal) && oldVal != newVal){   //condition for updating slider
                    $(".oui-slider3").slider("value",newVal);   //set slider value
                    SetSliderStyle3(newVal);   //change the slider background color
                }
            }
            
			function SetSliderStyle3(val){  //change the slider background color
                var color;
                var r = val*20; //below val = 50, green will be 0-100, above 100
                var g = 100 - (val*20); //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".oui-slider3").css("background",color);  //apply style to slider
				var lovVal="";
				switch(val)
				{
							case 1:lovVal = "Low Risk";
							break;
							case 2:lovVal = "Moderate Risk";
							break;
							case 3:lovVal = "High Risk";
							break;
							case 4:lovVal = "Very High Risk";
							break;
							case 5:lovVal = "Unknown";
							break;
							//default: lovVal5 = "Low Risk";
							//break;
				}
				$( "#amount3" ).val(lovVal);
            }
			function UpdateProgressbar4(){
                var val = parseInt(PM.Get("C_Progress4"));  //get value (set by PM)
                $("#PBAR4").progressbar("value", val); //set the value
                //prototype: colorize progress bar red-yellow-green depending on value
                var color;
                var g = val <= 50 ? val*2 : 100; //below val = 50, green will be 0-100, above 100
                var r = val > 50 ? 200 - (val*2) : 100; //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".ui-progressbar .ui-progressbar-value").css("background",color); //apply color
            }
            function UpdateSlider4(){ //will be invoked when needed e.g. at ShowSelection by PM
                var newVal = PM.Get("C_ProbValNew4");   //get new prob value
                var oldVal = PM.Get("C_ProbValSet4");    //get old prob value
                $("#tip").remove();  //remove the tooltip
                if (!isNaN(oldVal) && oldVal != newVal){   //condition for updating slider
                    $(".oui-slider4").slider("value",newVal);   //set slider value
                    SetSliderStyle4(newVal);   //change the slider background color
                }
            }
            
			function SetSliderStyle4(val){  //change the slider background color
                var color;
                var r = val*20; //below val = 50, green will be 0-100, above 100
                var g = 100 - (val*20); //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".oui-slider4").css("background",color);  //apply style to slider
				var lovVal="";
				switch(val)
				{
							case 1:lovVal = "Low Risk";
							break;
							case 2:lovVal = "Moderate Risk";
							break;
							case 3:lovVal = "High Risk";
							break;
							case 4:lovVal = "Very High Risk";
							break;
							case 5:lovVal = "Unknown";
							break;
							//default: lovVal5 = "Low Risk";
							//break;
				}
				$( "#amount4" ).val(lovVal);
            }
			function UpdateProgressbar5(){
                var val = parseInt(PM.Get("C_Progress5"));  //get value (set by PM)
                $("#PBAR5").progressbar("value", val); //set the value
                //prototype: colorize progress bar red-yellow-green depending on value
                var color;
                var g = val <= 50 ? val*2 : 100; //below val = 50, green will be 0-100, above 100
                var r = val > 50 ? 200 - (val*2) : 100; //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".ui-progressbar .ui-progressbar-value").css("background",color); //apply color
            }
            function UpdateSlider5(){ //will be invoked when needed e.g. at ShowSelection by PM
                var newVal = PM.Get("C_ProbValNew5");   //get new prob value
                var oldVal = PM.Get("C_ProbValSet5");    //get old prob value
                $("#tip").remove();  //remove the tooltip
                if (!isNaN(oldVal) && oldVal != newVal){   //condition for updating slider
                    $(".oui-slider5").slider("value",newVal);   //set slider value
                    SetSliderStyle5(newVal);   //change the slider background color
                }
            }
            
			function SetSliderStyle5(val){  //change the slider background color
                var color;
                var r = val*20; //below val = 50, green will be 0-100, above 100
                var g = 100 - (val*20); //below val = 50, red will be 100, above 100 - 0
                color = "rgb(" + r + "%," + g + "%,0%)"; //color in rgb % style e.g. "rgb(40%,100%,0%)"
                $(".oui-slider5").css("background",color);  //apply style to slider
				var lovVal="";
				switch(val)
				{
							case 1:lovVal = "Low Risk";
							break;
							case 2:lovVal = "Moderate Risk";
							break;
							case 3:lovVal = "High Risk";
							break;
							case 4:lovVal = "Very High Risk";
							break;
							case 5:lovVal = "Unknown";
							break;
							//default: lovVal5 = "Low Risk";
							//break;
				}
				$( "#amount5" ).val(lovVal);
            }

            return QualitativeFormPR;
        }());
        return "SiebelAppFacade.QualitativeFormPR";
    });
}
