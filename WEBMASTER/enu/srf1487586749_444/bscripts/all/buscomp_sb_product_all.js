function SB_Product_All_BusComp_PreSetFieldValue (fieldName, value)
{

	return ("ContinueOperation");
}

function SB_Product_All_BusComp (busComp)
{
   if (busComp != null)
   {
      this._busComp = busComp;
      busComp.shadow = this;
   }
}

new SB_Product_All_BusComp (null);

SB_Product_All_BusComp.prototype = new top.JSSBusCompShadow ();

SB_Product_All_BusComp.prototype.OnPreSetFieldValue = SB_Product_All_BusComp_PreSetFieldValue;
theApplication = top.theApplication;
TheApplication = top.theApplication;