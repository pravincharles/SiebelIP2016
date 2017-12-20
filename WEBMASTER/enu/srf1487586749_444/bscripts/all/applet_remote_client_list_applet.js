function Remote_Client_List_Applet_Applet_PreInvokeMethod (name, inputPropSet)
{

	return ("ContinueOperation");
}

function Remote_Client_List_Applet_Applet (applet)
{
   if (applet != null)
   {
      this._applet = applet;
      applet.shadow = this;
   }
}

new Remote_Client_List_Applet_Applet (null);

Remote_Client_List_Applet_Applet.prototype = new top.JSSAppletShadow ();

Remote_Client_List_Applet_Applet.prototype.OnPreInvokeMethod = Remote_Client_List_Applet_Applet_PreInvokeMethod;
theApplication = top.theApplication;
TheApplication = top.theApplication;