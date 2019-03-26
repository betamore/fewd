class: center, middle

# Unit 7
## JavaScript (JS)
### Interactivity & Custom Behaviors

---

class: center, middle
# Developing in Layers

## .red-text[HTML] -  structural layer of web pages
## .red-text[CSS] - presentational layer of web pages
## .red-text[JavaScript] - behavioral layer of web pages

---

name: js-name
class: middle

> .red-text[JavaScript] is as related to .red-text[Java] as .red-text[Carnival] is to .red-text[Car].

<cite>-- Kyle Simpson</cite>

---

name: js-what-is

# Nature of JavaScript

### - most popular programming language in the world
### - dynamic and flexible programming language
### - case-sensitive (`var myName` different from `var MyName`)
### - tabs and spaces are ignored unless enclosed in quotes
### - functional and object-oriented
### - dynamically (loosely) typed
### - deployed as source code

---

name: js-in-browser

# JavaScript in the Browser

### - manipulate elements, attributes and text on web page
### - react to user input "on the fly"
### - request content from server and inject into page

---

name: js-outside-browser

# JavaScript outside the Browser

### - package management via npm or yarn
### - developer tools
### - command line tools
### - server, database, desktop and mobile applications


---

name: programming-basics
class: center, middle

# Basic Principles of Programming
## JavaScript

---

name: programming-code
class: middle

# Code

> A .red-text[program], often referred to as .red-text[source code] or just .red-text[code], is a set of .red-text[special instructions] to tell the computer what tasks to perform.

<cite>-- Kyle Simpson</cite>

---

name: programming-syntax
class: middle

# Programming Language

> The .red-text[rules for valid format] and combinations of instructions is called a .red-text[computer language], sometimes referred to as its .red-text[syntax], much the .red-text[same as English] tells you how to spell words and how to create valid sentences using words and punctuation.

<cite>-- Kyle Simpson</cite>

---

name: js-dev-tools-console
class: center, middle

# Start Coding!
## Chrome Dev Tools Console
### `command + option + J`
### `Ctrl + Shift + J`

???
[Mastering The Developer Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console)

---

class: center

# Basic JavaScript Concepts & Components

### variables
### operators
### values & types
### conditionals
### loops
### functions
### scope

---

name: js-variables
class:

# Variables
### track a value as it changes over time
### dynamically typed: any type of value at any time

```js
const amount = 42;
```

```js
let color;
color = 'blue';
```

```js
var showNav = true;
```

---

name: js-operators
class:

# Common Operators in JavaScript

```js
let a = 42; // assignment
a += 2; // compound assignment, same as a = a + 2
```

```js
a * 3; // math
```

```js
a++; // increment, similar to a = a + 1
```

```js
a === b; // strict equality
a == b; // normal or "lenient" equality
```

```js
a < b; // comparison
```

```js
a || b; // logical OR
a && b; // logical AND
```

---

name: js-values-types
class:

# Values & Types
## In programming, different representations for values are called .red-text[types].

### - to do math, use a .red-text[number]
### - to print a value on the screen, use a .red-text[string]
### - to make a decision in a program, use a .red-text[boolean] (true/false)

### It's common for programming languages to also provide .red-text[arrays, objects, functions], and more.

---

name: js-value-literals
class:

# Value Literals

```javascript
"I am a string";
'I am also a string';

42;

true;
false;

[1, 2, 3]

{
  name: 'Sam',
  age: 21,
  citizen: true
}
```

---

name: js-built-in-types
class: center

# JavaScript Data Types

### - null
### - undefined
### - boolean
### - number
### - string
### - object
### - symbol

???

- All built-in types except `object` are called _primitives_.
- Primitives are values, they have no properties.
- Primitives are immutable.
- [Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

name: js-typeof-operator

# typeof operator

```javascript
typeof undefined        === "undefined"; // true
typeof true             === "boolean";   // true
typeof 42               === "number";    // true
typeof "betamore"       === "string";    // true
typeof { age: 21 }      === "object";    // true
typeof Symbol()         === "symbol";    // true
```

```javascript
typeof null             === "object";    // true

```

```javascript
typeof function fn() {} === "function";  // true

```

```javascript
typeof [1, 2, 3]        === 'object';    // true

```

???

- `typeof` inspects the type of the given value, and always returns one of 7 string values
- not an exact 1-to-1 match with the 7 built-in types

---

name: js-two-types-of-values
class: center

.flex[
.l[
# Primitives
### null
### undefined
### boolean
### string
### number
### symbol
]
.m[
# Objects
### Math
### Date
### JSON
### window
### document
### objects you create
]
]

???

* [What it really means when people say "Everything in JavaScript is an object."](http://radar.oreilly.com/2014/05/what-it-really-means-when-people-say-everything-in-javascript-is-an-object.html)
* [More on the "Everything is an Object" Concept](https://gomakethings.com/everything-is-an-object-in-javascript/)

---

name: js-special-objects
class: center

# Specialized Objects /
# Object Sub-types
### - Array
### - Function
### - Date
### - Error
### - RegExp

---

name: js-natives
class: center

# Common Natives / Constructor Counterparts
.flex[
.l[
#### `String()`
#### `Number()`
#### `Boolean()`
#### `Array()`
#### `Object()`
]
.r[
#### `Function()`
#### `RegExp()`
#### `Date()`
#### `Error()`
#### `Symbol()`
]
]

???

- except for `null` and `undefined`, all primitives have object equivalents that wrap around the primitive values
- `new String('abc')` creates a string wrapper object around the primitive value (`'abc'`), never the primitive itself

---

# Coercion: implicit type conversion
### Most operators coerce operands to the types they need.

```js
'3' * '4'; // 12
```

```js
3 + ' times' // '3 times'
```

```js
const a = '99.99';
const b = 99.99;

a == b // true
```

---

name: js-exercise-1
class:

# Exercise: Variables & Operators

### Let's Practice!

Work through the following exercises: https://www.teaching-materials.org/javascript/exercises/variables

---

name: js-fn
class: center, middle

# JavaScript Functions

---

name: js-fn-why
class: center

# Why functions?
## - wrap, bundle, group code for later reuse
## - reduce repetition
## - organize code / application
## - store steps to achieve a specific task
## - primary mechanism of scope

---

name: js-fn-definition
class: middle

> A function is generally a named section of code that can be "called" by name, and the code inside it will run each time.

<cite>-- Kyle Simpson</cite>

???

[Kyle Simpson on functions](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#functions)

---

name: js-fn-definition

# Defining a function

```javascript
function doSomething() {
  console.log('What do you want me to do?');
}

// function declaration aka named function
```

```javascript
const doSomething = function() {
  console.log('What do you want me to do?');
}

// function expression aka anonymous function
// in JS, an expression is any reference to a variable or value
// we can assign a function to a variable just like any other value
```

---

name: js-fn-values

# Functions as Values

```javascript
const doSomething = function() {
  console.log('What do you want me to do?');
}

// anonymous function expression
```

```javascript
element.addEventListener('click', function(event) {
console.log(event.type);
});
```

```javascript
element.addEventListener('click', event => { console.log(event.type) });
```

---

name: js-fn-call

# Invoking, calling, running or executing a function

```javascript
var doSomething = function() {
  console.log('What do you want me to do?');
}

// anonymous function expression
doSomething();
```

```javascript
const doSomething = function foo() {
  console.log('What do you want me to do?');
}

// named function expression
doSomething();
```

---

name: js-fn-effect-value

# Side effect

```javascript
var sayHello = function() {
  console.log('Hello there!');
}

sayHello(); // Hello there!
```

# Producing a value

```javascript
var sayHello = function() {
  return 'Hello there!';
}

sayHello(); // Hello there!

var myReturnValue = sayHello();
```

---

name: js-fn-scope

# Scope

### JavaScript has two types of scope: global & local

```javascript
var a = 0; // a is defined within global scope

function one() {
  var a = 1; // a is defined within the local scope of function one
  console.log(a);
}

function two() {
  var a = 2; // a is defined within the local scope of function two
  console.log(a);
}

console.log(a) // 0
one(); // 1
two(); // 2

```

???

[Kyle Simpson on scope](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#scope)

---

name: js-fn-arguments

# Passing information to functions

```javascript
var sayHello = function() {
  console.log('Hello there!');
}

sayHello(); // Hello there!
```

```javascript
var sayHelloTo = function(name) {
  console.log('Hello ' + name + '!');
}

sayHelloTo('Jake'); // Hello Jake!
```

---

name: js-fn-arguments-parameters

# Arguments vs. Parameters

> Functions are sent arguments; they receive parameters.

<cite>-- Dudley Storey</cite>

```javascript
function square(x) {
  return x * x;
}

square(4); // 16
```

???

* In the example function `square`, `x` is a parameter and `4` is an argument.
* Parameters = Placeholders; Arguments = Values.
* [Dudley Storey on functions](http://thenewcode.com/1033/Introduction-to-JavaScript-Functions)

---

name: js-fn-first-class

# "First class" functions
## functions as "first class" values

### - assign a function to a variable
### - store a function in an array or object
### - pass a function to another function
### - return a function from a function


---

name: js-browser
class: center, middle

# JavaScript and the Browser
## "Front-end JavaScript"

---

name: js-embed

# Adding JavaScript to a Page
## Embedded

```html
<script>
var parent = document.querySelector('ul');
var myNavitems = document.querySelectorAll('li a');
parent.addEventListener('click', function(e) {
  if (e.target !== e.currentTarget) {
    for(i = 0; i < myNavitems.length; i++) {
      myNavitems[i].classList.remove('active');
    }
    e.target.classList.add('active');
   }
  e.stopPropagation();
}, false);
</script>
```

---

name: js-external-script

# Adding JavaScript to a Page
## External scripts

```html
<script src="js/main.js"></script>
```

???

- apply the same script to multiple pages

- each external script requires an additional HTTP request, which impacts performance

---

name: js-script-placement

# Script Placement

### JavaScript runs where it's found in the HTML
### `<script>` element can go anywhere in the document
### Most common places are in `<head>` and just before `</body>`

- Browser encounters a `<script>` element
- stops to load the script
- then checks if it needs to do anything

### This has implications for `<script>` placement, and can affect the loading time of pages.

???

- Don't sprinkle `<script>` elements throughout the HTML document, because that makes them difficult to find and maintain.

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
var elementNode = document.getElementById("betamore");

var attributeNode = elementNode.getAttribute("href");

var textNode = elementNode.innerHTML;
```
