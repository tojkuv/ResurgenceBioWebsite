console.log("interop.js loaded");

window.eventHandlers = {};

window.setupFocusListener = (dotNetObjectRef, elementId, methodToCall, eventType) => {
  const handleClickOutside = (event) => {
    let element = document.getElementById(elementId);

    if (element && !element.contains(event.target)) {
      element.focus();

      dotNetObjectRef.invokeMethodAsync(methodToCall)
        .then(result => {
          console.log('The Blazor method was called successfully: ' + methodToCall);
        })
        .catch(error => {
          console.error('Error calling Blazor method', error);
        });

      // Remove the event listener after handling
      document.removeEventListener(eventType, handleClickOutside);
      delete window.eventHandlers[elementId]; // Clean up
    }
  };

  // Store the handler function
  window.eventHandlers[elementId] = handleClickOutside;

  document.addEventListener(eventType, handleClickOutside);
};

window.removeFocusListener = (elementId, eventType) => {
  const handleClickOutside = window.eventHandlers[elementId];
  if (handleClickOutside) {
    document.removeEventListener(eventType, handleClickOutside);
    delete window.eventHandlers[elementId]; // Clean up
    console.log("removeFocusListener called");
  } else {
    console.log("No event handler found for elementId: " + elementId);
  }
};



window.scrollToSlide = (elementId, itemIndex, gapPixels) => {
  const carousel = document.getElementById(elementId);
  const itemWidth = carousel.children[0].offsetWidth + gapPixels;

  carousel.scrollTo({left: itemWidth * itemIndex, behavior: 'smooth' });
};

window.setFocusToElement = () => {
  document.activeElement.blur();
  document.body.focus();
};