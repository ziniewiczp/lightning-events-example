({
	handleButtonClick : function(component, event, helper) {
		var applicationEvent = $A.get("e.c:Application_Event");
		var messageFromInput = component.find("input").get("v.value");

		applicationEvent.setParams({
			"message" : messageFromInput
		});
		applicationEvent.fire();
	}
})