function SB_New_Application_BC_BusComp_PreSetFieldValue (fieldName, value)
{

	return ("ContinueOperation");
}

function SB_New_Application_BC_BusComp (busComp)
{
   if (busComp != null)
   {
      this._busComp = busComp;
      busComp.shadow = this;
   }
}

new SB_New_Application_BC_BusComp (null);

SB_New_Application_BC_BusComp.prototype = new top.JSSBusCompShadow ();

SB_New_Application_BC_BusComp.prototype.OnPreSetFieldValue = SB_New_Application_BC_BusComp_PreSetFieldValue;
theApplication = top.theApplication;
TheApplication = top.theApplication;