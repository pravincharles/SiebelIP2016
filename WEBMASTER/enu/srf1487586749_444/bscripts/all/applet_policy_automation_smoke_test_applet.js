function Policy_Automation_Smoke_Test_Applet_Applet_InvokeMethod (name, inputPropSet)
{

}

function Policy_Automation_Smoke_Test_Applet_Applet (applet)
{
   if (applet != null)
   {
      this._applet = applet;
      applet.shadow = this;
   }
}

new Policy_Automation_Smoke_Test_Applet_Applet (null);

Policy_Automation_Smoke_Test_Applet_Applet.prototype = new top.JSSAppletShadow ();

Policy_Automation_Smoke_Test_Applet_Applet.prototype.OnInvokeMethod = Policy_Automation_Smoke_Test_Applet_Applet_InvokeMethod;
theApplication = top.theApplication;
TheApplication = top.theApplication;