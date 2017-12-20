function LS_PCD_Service_Service_PreCanInvokeMethod (methodName)
{

	/*return ("ContinueOperation");*/
}

function LS_PCD_Service_Service_PreInvokeMethod (methodName, inputPropSet)
{

/*return ("ContinueOperation");*/
}

function LS_PCD_Service_Service (service)
{
   if (service != null)
   {
      this._service = service;
      service.shadow = this;
   }
}

new LS_PCD_Service_Service (null);

LS_PCD_Service_Service.prototype = new top.JSSServiceShadow ();

LS_PCD_Service_Service.prototype.OnPreCanInvokeMethod = LS_PCD_Service_Service_PreCanInvokeMethod;
LS_PCD_Service_Service.prototype.OnPreInvokeMethod = LS_PCD_Service_Service_PreInvokeMethod;
theApplication = top.theApplication;
TheApplication = top.theApplication;