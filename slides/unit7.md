class: center, middle

# Unit 7
## The DOM and Event Handling

---

name: dom-intro

# Intro to the Document Object Model (DOM)

#### - browser builds a .red-text[model of the document's structure] and uses it to draw the page on the screen
#### - it serves as a structured map to all elements on a page
#### - this representation of the document is manipulated via JavaScript
#### - we can read from the model and write to it (change it)
#### - live data structure: when modified, the page on the screen updates to reflect the changes
#### - it's a programming interface (API) for HTML pages

???

* [What, exactly, is the DOM?](https://bitsofco.de/what-exactly-is-the-dom/)

---

name: dom-node-tree
class:

# Document Structure (DOM node tree)
## Visualizing the DOM

![HTML Document Tree](../assets/html-document-tree.gif)

---

# Document Structure (nested set of boxes)

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
[Eloquent JavaScript: Chapter 13: The Document Object Model](http://eloquentjavascript.net/13_dom.html)

---

# Data Structure (nested set of boxes)

.float-left[
![HTML Document Tree](../assets/html-boxes.svg)
]

.float-right[
#### - each box is an object we can interact with
#### - what HTML tag? does it contain other boxes? which ones?
#### - global variable `document` gives us access to objects
#### - `document.documentElement` (html tag)
#### - `document.head` (head tag)
#### - `document.body` (body tag)
]

---

name: dom-crawling

# Traversing the DOM

### DOM is a collection of nodes
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

# Selecting HTML DOM Elements with JavaScript

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

class: middle

# JavaScript Event Handling

## Browser:

> X just happened, so we need to execute Y and Z!

---

class: center, middle

# Interactions Create Events

## - click or tap

## - hover or swipe

## - type on the keyboard

## - resize the window

## - requested page has loaded

???

* [List of Common DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)

---

class: center, middle

# Events Trigger Code

## - register functions as .red-text[handlers] for specific events

---

class: center, middle

# Code Responds to Users

## - "live" page updates via DOM manipulation

---

## The .red-text[addEventListener] function registers its second argument to be called whenever the event described by its first argument occurs.

```html
<p>Click this document to activate the handler.</p>
```

```javascript
<script>
  addEventListener("click", function() {
    console.log("You clicked!");
  });
</script>
```

#### - each browser event handler is registered in a context
#### - calling method on the whole window (global scope is equivalent to the window object)

---

# Events & DOM Nodes

```html
<button>Click me</button>
<p>No handler here.</p>
```

```javascript
<script>
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    console.log("Button clicked.");
  });
</script>
```

#### - every DOM element has its own addEventListener method (listen specifically on that element)
#### - attach handler to the button node
#### - clicks on button cause handler to run (whereas clicks on the rest of the document do not)

---

# Event Objects

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
  });
</script>
```

#### - event handler functions are passed an argument: the .red-text[event] object
#### - this object gives us additional information about the event

---

# Exercise: DOM and JS Events

### Let's Practice!

#### JavaScript Event Exercise: https://github.com/betamore/fewd-js-event-practice

#### Say Hello Exercise: https://github.com/betamore/fewd-js-say-hello
