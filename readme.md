Qus-01: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: JavaScript provides several ways to select elements from the DOM. Each one serves a different purpose and behaves differently.

getElementById

This method selects a single element using its unique id.
It returns exactly one element or null if no match is found.
Since IDs are meant to be unique, this is one of the fastest ways to select elements.

getElementsByClassName

This method selects all elements that share the same class name.
It returns a live HTMLCollection, meaning the collection updates automatically if the DOM changes.
Although it’s not a real array, it is array-like and index-based.

querySelector

This method returns the first element that matches a given CSS selector.
It is more flexible because it accepts class selectors, IDs, attributes, tag selectors, nested selectors, and more.

querySelectorAll

This method returns all matching elements based on a CSS selector.
It returns a static NodeList, meaning the result does not change unless the query is run again.


Qus-02: How do you create and insert a new element into the DOM?


Ans: Dynamic UIs require elements to be created, modified, and inserted at runtime. The general process follows a few simple steps:

Step 1: Create the element

You start by creating a new DOM element.

Step 2: Add content

You can add text or HTML content to it depending on the situation.

Step 3: Add attributes or classes

This includes adding CSS classes, IDs, or custom data attributes.

Step 4: Select a parent element

Choose where exactly the new element should be placed in the DOM.

Step 5: Insert the element

You can insert it at the beginning, end, before another element, or after another element.

Step 6: Optional behaviors

This includes attaching event listeners, animations, or updating more attributes.

This process is the foundation for dynamic list rendering, notifications, modals, and UI interactions.


Qus-03: What is Event Bubbling and how does it work?

Ans: Event Bubbling is a core concept in how JavaScript handles browser events.

Definition

Event bubbling means that when an event occurs on a nested element (like clicking a button inside a div), the event is first handled by the innermost element, and then it travels up the DOM tree, activating event listeners on parent elements as well.

How It Works

The user interacts with the child element.

The event is triggered on that exact element.

The event bubbles upward to its parent.

It continues bubbling until it reaches the document root.

Why It Matters


Qus-04: What is Event Delegation in JavaScript? Why is it useful?


Ans: Event Delegation is a technique where instead of placing event listeners on many child elements, you place one listener on their parent and detect which child triggered the event.

How It Works

Events bubble from child to parent.

The parent listener receives the event.

It checks the event’s target to determine which child triggered it.

The appropriate action is taken based on that child.

Why Event Delegation Is Useful

Improved performance — fewer event listeners mean more efficient code.

Handles dynamic content — newly created child elements automatically work without adding new listeners.

Cleaner and more maintainable code — one listener instead of dozens or hundreds.

Less memory usage — fewer listeners stored in memory.

Qus-05: What is the difference between preventDefault() and stopPropagation() methods?

Ans:The preventDefault() method is used to stop the browser’s default behavior for a specific event. For example, clicking a link normally opens a new page, and submitting a form reloads the page — preventDefault() blocks those default actions from happening. However, it does not affect how the event travels through the DOM. On the other hand, stopPropagation() stops the event from bubbling up to parent elements. When you use this method, the event will not trigger any event listeners on parent or ancestor elements. In simple terms: preventDefault() stops what the browser normally does, while stopPropagation() stops the event from passing upward through the DOM.