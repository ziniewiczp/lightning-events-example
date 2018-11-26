({
	handleEvent : function(component, event, helper) {
		var message = event.getParam("message");
		var eventType = event.getType();

		component.set("v.messageFromEvent", message);
		component.set("v.eventType", eventType);
	}
})