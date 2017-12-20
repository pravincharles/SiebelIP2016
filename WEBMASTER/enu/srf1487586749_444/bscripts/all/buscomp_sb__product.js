function SB__Product_BusComp_PreSetFieldValue (fieldName, value)
{

	return ("ContinueOperation");
}

function SB__Product_BusComp (busComp)
{
   if (busComp != null)
   {
      this._busComp = busComp;
      busComp.shadow = this;
   }
}

new SB__Product_BusComp (null);

SB__Product_BusComp.prototype = new top.JSSBusCompShadow ();

SB__Product_BusComp.prototype.OnPreSetFieldValue = SB__Product_BusComp_PreSetFieldValue;
theApplication = top.theApplication;
TheApplication = top.theApplication;