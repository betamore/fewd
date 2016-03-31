class: center, middle

# JavaScript

## Handling Events

---

class: middle

# Browser:

> Hey, this just happened!

---

class: center, middle

# Interactions Create Events

## - click or tap

## - hover or swipe

## - type on the keyboard

## - resize the window

## - requested page has loaded

---

class: center, middle

# Events Trigger Code

## - register functions as .red-text[handlers] for specific events

---

class: center, middle

# Code Responds to Users

## - "live" page updates via DOM manipulation

---

## The .red-text[addEventListener function] registers its second argument to be called whenever the event described by its first argument occurs.

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

### - each browser event handler is registered in a context
### - calling method on the whole window (global scope is equivalent to the window object)

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

### - every DOM element has its own addEventListener method (listen specifically on that element)
### - attach handler to the button node
### - clicks on button cause handler to run (whereas clicks on the rest of the document do not)

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

### - event handler functions are passed an argument: .red-text[the event object]
### - this object gives us additional information about the event

---

# Write Code!

## - github.com/betamore/fewd-rwd-exercise-1
## - bullhorncreative.com (Contact)
## - present your plan
