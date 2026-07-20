// add event listener
const gallery = document.getElementById("gallery");
const image2 = document.getElementById("image2");


// Process-02:
// image2.onclick(alert('Add event listener by using onclick function inside the external JS file'));

// Process-03:
// image2.addEventListener("click", (el) => {
//     alert(`Add event listener using addEventListener() function.`);
// }, false);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// list of events
// 1. Mouse Events
// Fires when the user interacts with a pointing device.
// click: Element is clicked.
// dblclick: Element is double-clicked.
// mousedown: Mouse button is pressed down.
// mouseup: Mouse button is released.
// mouseenter: Pointer moves into an element (does not bubble).
// mouseleave: Pointer leaves an element (does not bubble).
// mousemove: Pointer moves over an element.
// contextmenu: Right-click menu is about to open

// 2. Keyboard Events
// Fires when interacting with the keyboard.
// keydown: A key is pressed down.
// keyup: A key is released.
// keypress: A key that produces a character value is pressed (Deprecated, use keydown)

// 3. Form Events
// Fires when interacting with form controls.
// submit: Form is submitted.
// change: Value of an element changes and loses focus (inputs, select dropdowns).
// input: Value of an <input>, <textarea>, or contenteditable changes synchronously.
// focus: Element gains focus (does not bubble).
// blur: Element loses focus (does not bubble).
// invalid: Form element fails validation

// 4. Touch & Pointer Events
// Fires on mobile devices, tablets, and styluses.
// touchstart: Touch point is placed on the touch surface.
// touchend: Touch point is removed from the surface.
// touchmove: Touch point is moved along the surface.
// pointerdown: Hardware-agnostic pointer (mouse, pen, or touch) becomes active.
// pointerup: Hardware-agnostic pointer is released.


// 5. Window / Document Lifecycle Events
// Fires when the state of the webpage or browser window changes.
// DOMContentLoaded: HTML is fully parsed, without waiting for stylesheets and images.
// load: The entire page has loaded, including all dependent resources (styles, images).
// resize: Document view (window) has been resized.
// scroll: Document view or an element has been scrolled.
// beforeunload: Window, document, and its resources are about to be unloaded (used for "Unsaved Changes" prompts)

// 6. Drag and Drop Events
// Fires when elements are dragged across the screen.
// dragstart: User starts dragging an item.
// drag: Item is being dragged.
// dragover: Dragged item is held over a valid drop target.
// drop: Item is dropped on a valid drop target

// 7. Media Events (Video / Audio)
// Fires when playing media files via <video> or <audio>.
// play: Playback has begun.
// pause: Playback is paused.
// ended: Playback has stopped because the end of the media was reached.
// volumechange: Volume has changed or been muted.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// more about addEventListener().
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

gallery.addEventListener("click", (el) => {
    console.log(el);
    console.log(el.type);
    console.log(el.timeStamp);
    console.log(el.defaultPrevented);
    console.log(el.target);
    console.log(el.toElement);
    console.log(el.srcElement);
    console.log(el.currentTarget);
    console.log(el.clientX);
    console.log(el.clientY);
    console.log(el.screenX);
    console.log(el.screenY);
    console.log(el.altKey);
    console.log(el.ctrlKey);
    console.log(el.shiftKey);
    console.log(el.target.parentNode);
    console.log(el.target.tagName);
});

// removeChild() and remove()
gallery.addEventListener("click", (el) => {
    let removeIt = el.target.parentNode;
    let tagName = el.target.tagName;

    // removeChild() : old technique
    // if(tagName === "IMG") {
    //     removeIt.parentNode.removeChild(removeIt);
    // }

    // remove() : new technique
    if(tagName === "IMG") {
        removeIt.remove();
    }
});


// Event Bubbling (Default)
// In the bubbling phase, the event triggers the handler on the innermost element first, then moves upward to its parents. By default, all standard event listeners listen to this phase.
// gallery.addEventListener("click", (el) => {
//     console.log(`Parent Element`);
// }, false);

// image2.addEventListener("click", (el) => {
//     console.log(`Child Element`);
// }, false);



// Event Capturing (Trickling)
// In the capturing phase, the browser triggers handlers on the outermost elements first before moving down to the target. To catch an event in this phase, pass { capture: true } (or simply true) as the third argument to addEventListener
// gallery.addEventListener("click", (el) => {
//     console.log(`Parent Element`);
// }, true);

// image2.addEventListener("click", (el) => {
//     console.log(`Child Element`);
// }, false);


// Controlling Event Flow
// 1. Stopping Propagation
// You can call event.stopPropagation() to stop the event from traveling further up or down the DOM tree.
// for event bubbling: event.stopPropagation() written inside the child element's event listener.
// gallery.addEventListener("click", (el) => {
//     console.log(`Parent Element`);
// }, false);

// image2.addEventListener("click", (el) => {
//     el.stopPropagation();
//     console.log(`Child Element`);
// }, false);

// for event capturing: event.stopPropagation() written inside the parent element's event listener.
// gallery.addEventListener("click", (el) => {
//     el.stopPropagation();
//     console.log(`Parent Element`);
// }, true);

// image2.addEventListener("click", (el) => {
//     console.log(`Child Element`);
// }, false);