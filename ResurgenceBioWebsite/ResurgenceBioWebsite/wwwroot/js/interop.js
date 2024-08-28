console.log("interop.js loaded");

window.focusElement = (elementId) => {
  var element = document.getElementById(elementId);
  if (element) {
    element.focus();
  }
}

window.setupFocusListener = (dotNetObjectRef, elementId, methodToCall, eventType) => {
  // Define the function to handle click events
  const handleClickOutside = (event) => {
    let element = document.getElementById(elementId);
    if (element && !element.contains(event.target)) {

      element.focus();
      // console.log("element focused");

      dotNetObjectRef.invokeMethodAsync(methodToCall)
        .then(result => {
          // console.log('The Blazor method was called successfully');
        })
        .catch(error => {
          // console.error('Error calling Blazor method', error);
        });

      // Remove the event listener after handling
      document.removeEventListener(eventType, handleClickOutside);
      // console.log("event listener remove");
    }
  };

  // Add the event listener
  document.addEventListener(eventType, handleClickOutside);
};

// todo: improve the implementation and use it to update the styles of elements
window.toggleClass = (element) => {
  if (element.classList.contains('highlight')) {
    element.classList.remove('highlight');
  } else {
    element.classList.add('highlight');
  }
}

