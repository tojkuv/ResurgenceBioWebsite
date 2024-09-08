console.log("interop.js loaded");

window.setupFocusListener = (dotNetObjectRef, elementId, methodToCall, eventType) => {
  const handleClickOutside = (event) => {
    let element = document.getElementById(elementId);

    if (element && !element.contains(event.target)) {
      element.focus();

      dotNetObjectRef.invokeMethodAsync(methodToCall)
        .then(result => {
          // console.log('The Blazor method was called successfully');
        })
        .catch(error => {
          console.error('Error calling Blazor method', error);
        });

      document.removeEventListener(eventType, handleClickOutside);
    }
  };

  document.addEventListener(eventType, handleClickOutside);
};

window.scrollToSlide = (elementId, itemIndex, gapPixels) => {
  const carousel = document.getElementById(elementId);
  const itemWidth = carousel.children[0].offsetWidth + gapPixels;

  carousel.scrollTo({left: itemWidth * itemIndex, behavior: 'smooth' });
};