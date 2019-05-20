class: center, middle

# Unit 7
## The DOM and Event Handling

![the DOM tree](../assets/html-document-tree.gif)

---
class: left

# Intro to the Document Object Model (DOM) ~

* Browser builds a .red-text[model of the document's structure] and uses it to draw the page on the screen
* It serves as a structured map to all elements on a page
* This representation of the document is manipulated via JavaScript
* We can read from the model and write to it (change it)
* Live data structure: when modified, the page on the screen updates to reflect the changes
* It's a programming interface (API) for HTML pages

???

* [What, exactly, is the DOM?](https://bitsofco.de/what-exactly-is-the-dom/)

---
class: left

# Document Structure (nested set of boxes) ~

.float-left[

```html
<!doctype html>
<html>
  <head>
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is ...</p>
    <p>I also wrote a book! Read it
      <a href="#">here</a>.</p>
  </body>
</html>
```
]

.float-right[
![HTML Document Tree](../assets/html-boxes.svg)
]

???

* [Eloquent JavaScript: Chapter 13: The Document Object Model](http://eloquentjavascript.net/13_dom.html)

---
class: left

# Data Structure (nested set of boxes)

.float-left[
![HTML Document Tree](../assets/html-boxes.svg)
]

.float-right[
#### - Each box is an object we can interact with
#### - What HTML tag? Does it contain other boxes? Which ones?
#### - Global `document` variable gives us access to objects
#### - `document.documentElement` (html tag)
#### - `document.head` (head tag)
#### - `document.body` (body tag)
]

---
class: left

# Traversing the DOM

### The DOM is a collection of nodes
- element nodes
- attribute nodes
- text nodes

```html
<p id="betamore">
  Real web designers <a href="/code">write code</a>. Always have, always will.
</p>
```

```javascript
var elementNode = document.getElementById('betamore');

var attributeNode = elementNode.firstElementChild.getAttribute('href');

var textNode = elementNode.innerText;
```

---
class: left

# Selecting HTML DOM Elements with JavaScript ~

```javascript
// Select element by id
var findId = document.getElementById('id');

// Select element(s) by class
var findClass = document.getElementsByClassName('className');

// Select element(s) by tag
var findTag = document.getElementsByTagName('tagName');

// Select element(s) by CSS selector (all matching)
var allElements = document.querySelectorAll('.className');
// => selects ALL elements with class of className

// Select element by CSS selector (first matching)
var firstElement = document.querySelector('p');
// => selects first <p> element
```

???

* [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)
* [JavaScript Selector Performance](https://gomakethings.com/javascript-selector-performance/)

---
class: left

# Event Handling with JavaScript ~

### The browser "listens" for an event, then does something:

> X just happened, so we need to execute Y and Z!

### Interactions create events:

* Click or tap
* Hover or swipe
* Type on the keyboard
* Resize the window
* Requested page has loaded

???

* [List of Common DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)

---
class: left

# Events trigger code, and code responds to users ~

The .red-text[addEventListener] function registers its second argument to be called whenever the event described by its first argument occurs.

```html
<p>Click this document to activate the handler.</p>
```

```javascript
<script>
  document.addEventListener("click", function() {
    console.log("You clicked!");
  });
</script>
```

???

* [Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

---
class: left

# Listening for Events On a Single Element

```html
<button>Click Me 🙋</button>
<p>No handler here 🤷</p>
```

```javascript
<script>
  var button = document.querySelector('button');
  button.addEventListener('click', function() {
    console.log('Button clicked.');
  }, false);
</script>
```

**What's Going On Here?**

* Every DOM element has its own addEventListener method (listen specifically on that element)
* Attach handler to the button node
* Clicks on button cause handler to run (whereas clicks on the rest of the document do not)

---
class: left

# Listening for Events On the Entire Document aka "Event Delegation" ~

```js
document.addEventListener('click', function(event) {
	if (event.target.matches('.modal-open')) {
		// Run your code to open a modal
	}
	if (event.target.matches('.close')) {
		// Run your code to close a modal
	}
}, false);
```

**What's Going On Here?**

* TBD

???

* [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)
* [Event Delegation](https://javascript.info/event-delegation)
* [Why Event Delegation is a Better Way to Listen for Events](https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js/)

---
class: left

# The `Event` Object

```html
<button>Click me any way you want</button>
```

```javascript
<script>
  var button = document.querySelector("button");
  button.addEventListener("mousedown", function(event) {
    if (event.which == 1)
      console.log("Left button");
    else if (event.which == 2)
      console.log("Middle button");
    else if (event.which == 3)
      console.log("Right button");
  }, false);
</script>
```

#### - event handler functions are passed an argument: the .red-text[event] object
#### - this object gives us additional information about the event

---

# Exercise: DOM and JS Events

### Let's Practice!

#### JavaScript Event Exercise: https://github.com/betamore/fewd-js-event-practice

#### Say Hello Exercise: https://github.com/betamore/fewd-js-say-hello
