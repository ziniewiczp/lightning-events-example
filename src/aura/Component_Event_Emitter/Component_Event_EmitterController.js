({
	handleButtonClick : function(component, event, helper) {
		var componentEvent = component.getEvent("componentEvent");
		var messageFromInput = component.find("input").get("v.value");

		componentEvent.setParams({
			"message" : messageFromInput
		});
		componentEvent.fire();
	}
})