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

name: js-dev-tools-console
class: center, middle

# Let's Start Coding!
## Open Chrome Dev Tools Console
### `command + option + J`
### `Ctrl + Shift + J`

???

* [Mastering The Developer Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console)

---

class: center

# Basic JavaScript Concepts & Components

#### Variables
#### Operators
#### Data Types
#### Conditionals
#### Loops
#### Functions
#### Scope

---

name: js-variables
class:

# Variables
### Track a value as it changes over time
### Dynamically typed: any type of value at any time

```javascript
const amount = 42;
```

```javascript
let color;
color = 'blue';
```

```javascript
var showNav = true;
```

???

* [`let`, `var`, and `const`](https://gomakethings.com/let-var-and-const/)

---

name: js-operators
class:

# Common Operators in JavaScript

```javascript
let a = 42; // assignment
a += 2; // compound assignment, same as a = a + 2
```

```javascript
a * 3; // math
```

```javascript
a++; // increment, similar to a = a + 1
```

```javascript
a === b; // strict equality
a == b; // normal or "lenient" equality
```

```javascript
a < b; // comparison
```

```javascript
a || b; // logical OR
a && b; // logical AND
```

---

name: js-data-types
class:

# JavaScript Data Types

In programming, different representations for values are called .red-text[data types]. JavaScript has 7 built-in data types:

- null
- undefined
- string
- number
- boolean
- object
- symbol

**To do math, use a .red-text[number]**  
**To print a value on the screen, use a .red-text[string]**  
**To make a decision in a program, use a .red-text[boolean] (true/false)**  

It's common for programming languages to also provide .red-text[arrays, objects, functions], and more.

???

- All built-in types except `object` are called _primitives_.
- Primitives are values, they have no properties.
- Primitives are immutable.
- [JavaScript Data Types](https://javascript.info/types)
- [Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

name: js-value-literals
class:

# JavaScript Value Literals

```javascript
// String
"I am a string";
'I am also a string';

// Number
42;

// Boolean
true;
false;

// Object
{
  name: 'Sam',
  age: 21,
  citizen: true
}

// Array
[1, 2, 3]
```

---

name: js-typeof-operator

# typeof operator

```javascript
typeof undefined        === "undefined"; // true
typeof true             === "boolean";   // true
typeof 42               === "number";    // true
typeof "betamore"       === "string";    // true
typeof { age: 21 }      === "object";    // true
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
]
]

???

- except for `null` and `undefined`, all primitives have object equivalents that wrap around the primitive values
- `new String('abc')` creates a string wrapper object around the primitive value (`'abc'`), never the primitive itself

---

# Coercion: implicit type conversion
### Most operators coerce operands to the types they need.

```javascript
'3' * '4'; // 12
```

```javascript
3 + ' times' // '3 times'
```

```javascript
const a = '99.99';
const b = 99.99;

a == b // true
```

---

name: js-exercise-1
class:

# Exercise: Variables & Operators

### Let's Practice!

#### Work through the following exercises: https://www.teaching-materials.org/javascript/exercises/variables

---

name: js-conditionals
class: center, middle

# JavaScript Conditionals

### Conditionals allow us to control the flow of execution in our programs by only executing blocks of code that meet certain conditions.

---

name: js-cond-syntax
class:

# Writing JavaScript Conditionals

```javascript
var today = 'Saturday';

// if statement

if (today === 'Saturday') {
  console.log('Watch Cartoons!');
}

// if else statement

if (today === 'Saturday') {
  console.log('Watch cartoons');
} else {
  console.log('Watch the news');
}
```

???

* [JavaScript Control Flow](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow)
* [JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)
* [JavaScript Conditionals](https://www.javascript.com/learn/conditionals)

---

name: js-cond-syntax-2

```javascript
// else if statement

if (today === 'Saturday') {
  console.log('Watch cartoons');
} else if (today === 'Sunday') {
  console.log('Watch sports');
} else {
  console.log('Watch the news');
}

// switch statement

switch (today) {
  case 'Saturday':
    console.log('Watch cartoons');
    break;
  case 'Sunday':
    console.log('Watch sports');
    break;
  default:
    console.log('Watch the news');
}
```

---

name: js-exercise-2
class:

# Exercise: Conditionals

### Let's Practice!

#### Work through the following exercises: https://www.teaching-materials.org/javascript/exercises/ifelse

---

name: js-loops
class: center, middle

# JavaScript Loops

### Loops in JavaScript allow us to iterate - or repeat - the same code block multiple times until a specified condition is met.

---

name: js-loops-syntax
class:

# Writing JavaScript Loops

```javascript
// for loop (executes code block a known number of times)
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// while loop (executes code block an unknown number of times)
var i = 0;
while (i < 3) {
  console.log(i);
  i++; // without this increment declaration, this loop would run FOR-EH-VUR
}

// do...while loop (executes code block at least one time)
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

???

* [Loops: while and for](https://javascript.info/while-for)
* [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

---

name: js-exercise-3
class:

# Exercise: Loops

### Let's Practice!

#### Work through the following exercises: https://www.teaching-materials.org/javascript/exercises/forloops

---

name: js-fn
class: center, middle

# JavaScript Functions

> A function is generally a named section of code that can be "called" by name, and the code inside it will run each time.

<cite>-- Kyle Simpson</cite>

???

* [Kyle Simpson on functions](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#functions)

---

name: js-fn-help

# Functions Help Us:
## - Organize and group code for re-use
## - Reduce repetition
## - Store steps to achieve a specific task
## - Work with scope

---

name: js-fn-syntax

# Writing JavaScript Functions

```javascript
// Function Declaration aka Named Function

function doSomething() {
  console.log('What do you want me to do?');
}

// Function Expression aka Anonymous Function

var doSomething = function() {
  console.log('What do you want me to do?');
}

// Immediately Invoked Function Expression aka IIFE

(function() {
  console.log('What do you want me to do?');
}());
```

???

* [Function Expressions vs. Function Declarations](https://gomakethings.com/function-expressions-vs-function-declarations/)
* [What the Heck is an IIFE?](https://codeburst.io/javascript-what-the-heck-is-an-immediately-invoked-function-expression-a0ed32b66c18)

---

name: js-fn-call

# Invoking, Calling, Running or Executing a Function

```javascript
function doSomething() {
  console.log('What do you want me to do?');
}

// Call the doSomething function
doSomething();
```

```javascript
var doOtherThing = function() {
  console.log('Do this other thing please!');
}

// Call the doOtherThing function
doOtherThing();
```

---

name: js-fn-effect-value

# Side Effect (`console.log`)

```javascript
var sayHello = function() {
  console.log('Hello there!');
}

sayHello(); // Hello there!
```

# Producing a Value (`return`)

```javascript
var sayGoodbye = function() {
  return 'Goodbye!';
}

sayGoodbye(); // Goodbye!
```

???

* Some functions produce a value, such as `sayGoodbye`, and some don’t, such as `sayHello`, whose only result is a **side effect**. A `return` statement determines the value the function returns.
* A `return` keyword without an expression after it will cause the function to return `undefined`. Functions that don’t have a `return` statement at all, such as `sayHello`, similarly return `undefined`.
* [Eloquent JavaScript - Functions](https://eloquentjavascript.net/03_functions.html)

---

name: js-fn-scope

# Scope

### JavaScript has two types of scope: **global** & **local**

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

* [Kyle Simpson on scope](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#scope)
* [Understanding Scope in JavaScript](https://scotch.io/tutorials/understanding-scope-in-javascript)


---

name: js-fn-arguments

# Passing Information to Functions

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

name: js-browser
class: center, middle

# JavaScript and the Browser
## "Front-end JavaScript"

---

name: js-scripts

# Adding JavaScript to a Page

**Embedded Script**

```html
<script>
var myNavitems = document.querySelectorAll('.nav-item');
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('nav-item')) {
    for(i = 0; i < myNavitems.length; i++) {
      myNavitems[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
}, false);
</script>
```
**External Script**

```html
<script src="js/main.js"></script>
```

???

- Using external scripts allow us to apply the same script to multiple pages (same way we link our external CSS stylesheets).

- Each external script requires an additional HTTP request, which impacts performance.

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

name: js-exercise-3
class:

# Exercise: Functions

### Let's Practice!

#### Work through the following exercises: https://www.teaching-materials.org/javascript/exercises/functions
