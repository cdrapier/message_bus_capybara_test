window.notification_service_callbacks = $.Callbacks();

$(function() {
  return MessageBus.subscribe("test_channel", function(message) {
    return window.notification_service_callbacks.fire(message.action, message);
  });
});
