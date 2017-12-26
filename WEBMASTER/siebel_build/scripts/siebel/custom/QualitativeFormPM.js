
if(typeof(SiebelAppFacade.QualitativeFormPM) === "undefined"){
    SiebelJS.Namespace("SiebelAppFacade.QualitativeFormPM");
    define("siebel/custom/QualitativeFormPM", [], function(){
        SiebelAppFacade.QualitativeFormPM = (function(){
            var consts = SiebelJS.Dependency("SiebelApp.Constants");
            function QualitativeFormPM(){
                SiebelAppFacade.QualitativeFormPM.superclass.constructor.apply(this,arguments);
            }
            SiebelJS.Extend(QualitativeFormPM, SiebelAppFacade.PresentationModel);
            QualitativeFormPM.prototype.Init = function(){
                SiebelAppFacade.QualitativeFormPM.superclass.Init.apply(this,arguments);
                SiebelJS.Log("Custom PM " + this.GetPMName() + ": Init method reached.");
                //implement Init method here

                //progress bar
                this.AddProperty("C_Progress", 0);
				this.AddProperty("C_Progress1", 0);
				this.AddProperty("C_Progress2", 0);
				this.AddProperty("C_Progress3", 0);
				this.AddProperty("C_Progress4", 0);
				this.AddProperty("C_Progress5", 0);
                this.AddMethod("ComputeProgress", ComputeProgress, {sequence : false, scope : this});
                this.AddMethod("ShowSelection", PostShowSelection, {sequence : false, scope : this});
                this.AddMethod("FieldChange", PostFieldChange, {sequence : false, scope : this});

                //account info dialog
               

                //probability slider
                this.AddProperty("C_ProbValSet",0);  //property to hold value set by slider
                this.AddProperty("C_ProbValNew",0);  //property to hold new value
				this.AddProperty("C_ProbValSet1",0);  //property to hold value set by slider
                this.AddProperty("C_ProbValNew1",0);
				this.AddProperty("C_ProbValSet2",0);  //property to hold value set by slider
                this.AddProperty("C_ProbValNew2",0);  //property to hold new value
				this.AddProperty("C_ProbValSet3",0);  //property to hold value set by slider
                this.AddProperty("C_ProbValNew3",0);  //property to hold new value
				this.AddProperty("C_ProbValSet4",0);  //property to hold value set by slider
                this.AddProperty("C_ProbValNew4",0);  //property to hold new value
				this.AddProperty("C_ProbValSet5",0);  //property to hold value set by slider
                this.AddProperty("C_ProbValNew5",0);  //property to hold new value
                this.AddMethod("SetProbability",SetProbability,{sequence:false, override:false, scope:this});
                this.AttachEventHandler("PROB_SET","SetProbability");  //to be invoked by PR
				this.AttachEventHandler("PROB_SET1","SetProbability");
				this.AttachEventHandler("PROB_SET2","SetProbability");
				this.AttachEventHandler("PROB_SET3","SetProbability");
				this.AttachEventHandler("PROB_SET4","SetProbability");
				this.AttachEventHandler("PROB_SET5","SetProbability");
            };

            QualitativeFormPM.prototype.Setup = function(propSet){
                SiebelAppFacade.QualitativeFormPM.superclass.Setup.apply(this, arguments);
                //SiebelJS.Log("Custom PM " + this.GetPMName() + ": Setup method reached.");
                //implement Setup method here
            };
            //implement custom functions here
            function ComputeProgress(){
                var nProgress = 0; //level of completeness
                var nTotalControls = 0; //counter for total number of input controls
                var nNonEmptyControls = 0; //counter for populated controls
                var arrControls = this.Get("GetControls"); //get controls array
                var sFieldValue = "";  //field value
                var sControlName, oControl, sFieldName;  //control name, object and field name
                for (sControlName in arrControls){  //parse controls array
                    if(arrControls.hasOwnProperty(sControlName)){

                        oControl = arrControls[sControlName];   //get the control
                        sFieldName = oControl.GetFieldName(); //get the BC field name

                        if (sFieldName != ""){    //if it is a true input field
                            nTotalControls++;    //increase total control count
                            sFieldValue = this.ExecuteMethod("GetFieldValue", oControl);  //get field value
                            if (sFieldValue != ""){  //if field is populated
                                nNonEmptyControls++;  //increase count of populated fields
                            }
                        }
                    }
                }//end for-in
                //compute percentage of populated against all input controls
                //removing 1 for the applet title control
                nProgress = (nNonEmptyControls - 1) / (nTotalControls - 1) * 100;
                //and write to property
                this.SetProperty("C_Progress", nProgress);
                //SiebelJS.Log("Progress: " + nProgress + "%");
            }
            function PostShowSelection(){
                this.ExecuteMethod("ComputeProgress");
                //Slider
                var arrControls = this.Get("GetControls");
                var oControl = arrControls["Diversification of Customer Base"];
				var oControl1 = arrControls["Operating Efficiency"];
				var oControl2 = arrControls["Supplier Portfolio"];
				var oControl3 = arrControls["Management Qualities"];
				var oControl4 = arrControls["Market Risk"];
				var oControl5 = arrControls["Product Service Diversification"];
                var sValue = this.ExecuteMethod("GetFieldValue", oControl);
				var sValue1 = this.ExecuteMethod("GetFieldValue", oControl1);
				var sValue2 = this.ExecuteMethod("GetFieldValue", oControl2);
				var sValue3 = this.ExecuteMethod("GetFieldValue", oControl3);
				var sValue4 = this.ExecuteMethod("GetFieldValue", oControl4);
				var sValue5 = this.ExecuteMethod("GetFieldValue", oControl5);
                //set property - this will trigger PR's update function to set slider
                this.SetProperty("C_ProbValNew",sValue);
				this.SetProperty("C_ProbValNew1",sValue1);
				this.SetProperty("C_ProbValNew2",sValue);
				this.SetProperty("C_ProbValNew3",sValue);
				this.SetProperty("C_ProbValNew4",sValue);
				this.SetProperty("C_ProbValNew5",sValue);
            }
            function PostFieldChange(){
                this.ExecuteMethod("ComputeProgress");
            }

            

            function SetProbability(msg)  //invoked when PR calls event PROB_SET
            {
                var sValue = this.Get("C_ProbValSet"); //get value that has been set via slider
				var sValue1 = this.Get("C_ProbValSet1");
				var sValue2 = this.Get("C_ProbValSet2");
				var sValue3 = this.Get("C_ProbValSet3");
				var sValue4 = this.Get("C_ProbValSet4");
				var sValue5 = this.Get("C_ProbValSet5");
				var lovVal="",lovVal1="",lovVal2="",lovVal3="",lovVal4="",lovVal5="";
				switch(sValue)
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
							//default: lovVal = "Low Risk";
							//break;
				}
				switch(sValue1)
				{
							case 1:lovVal1 = "Low Risk";
							break;
							case 2:lovVal1 = "Moderate Risk";
							break;
							case 3:lovVal1 = "High Risk";
							break;
							case 4:lovVal1 = "Very High Risk";
							break;
							case 5:lovVal1 = "Unknown";
							break;
							//default: lovVal1 = "Low Risk";
							//break;
				}
				switch(sValue2)
				{
							case 1:lovVal2 = "Low Risk";
							break;
							case 2:lovVal2 = "Moderate Risk";
							break;
							case 3:lovVal2 = "High Risk";
							break;
							case 4:lovVal2 = "Very High Risk";
							break;
							case 5:lovVal2 = "Unknown";
							break;
							//default: lovVal2 = "Low Risk";
							//break;
				}
				switch(sValue3)
				{
							case 1:lovVal3 = "Low Risk";
							break;
							case 2:lovVal3 = "Moderate Risk";
							break;
							case 3:lovVal3 = "High Risk";
							break;
							case 4:lovVal3 = "Very High Risk";
							break;
							case 5:lovVal3 = "Unknown";
							break;
							//default: lovVal3 = "Low Risk";
							//break;
				}
				switch(sValue4)
				{
							case 1:lovVal4 = "Low Risk";
							break;
							case 2:lovVal4 = "Moderate Risk";
							break;
							case 3:lovVal4 = "High Risk";
							break;
							case 4:lovVal4 = "Very High Risk";
							break;
							case 5:lovVal4 = "Unknown";
							break;
							//default: lovVal4 = "Low Risk";
							//break;
				}
				switch(sValue5)
				{
							case 1:lovVal5 = "Low Risk";
							break;
							case 2:lovVal5 = "Moderate Risk";
							break;
							case 3:lovVal5 = "High Risk";
							break;
							case 4:lovVal5 = "Very High Risk";
							break;
							case 5:lovVal5 = "Unknown";
							break;
							//default: lovVal5 = "Low Risk";
							//break;
				}
                var arrControls = this.Get("GetControls"); //get controls
                var oControl = arrControls["Diversification of Customer Base"]; //get probability control
				var oControl1 = arrControls["Operating Efficiency"];
				var oControl2 = arrControls["Supplier Portfolio"];
				var oControl3 = arrControls["Management Qualities"];
				var oControl4 = arrControls["Market Risk"];
				var oControl5 = arrControls["Product Service Diversification"];
                //this.ExecuteMethod("SetFormattedValue", oControl, sValue.toString()); //Set Field Value
                //this.ExecuteMethod("InvokeMethod","WriteRecord"); //invoke WriteRecord (to ensure update on other applets)
                this.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"),oControl);
                this.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"),oControl, String(lovVal));
				this.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"),oControl1);
                this.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"),oControl1, String(lovVal1));
				this.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"),oControl2);
                this.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"),oControl2, String(lovVal2));
				this.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"),oControl3);
                this.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"),oControl3, String(lovVal3));
				this.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"),oControl4);
                this.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"),oControl4, String(lovVal4));
				this.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"),oControl5);
                this.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"),oControl5, String(lovVal5));
            }



            return QualitativeFormPM;
        }());
        return "SiebelAppFacade.QualitativeFormPM";
    });
}

