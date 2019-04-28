name: unit-4
class: center, middle

# Unit 4: Cascading Style Sheets (CSS)
![CSS3 Logo](../assets/css3-logo.svg)
### Styling Markup (HTML) Documents

???

* Style sheet language for formatting / styling markup languages such as HTML
* Enables the separation of content (HTML) and presentation (CSS)
* [Cascading Style Sheets on Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

---

name: css-stephen-hay-quote
class: middle

> <span>CSS is like chess:</span> easy to learn, but hard to master.

<cite>-- Stephen Hay</cite>

---

name: css-browser
background-image: url(../assets/css-browser.png)

---
class: center, middle

# CSS Associates Style Rules with HTML Elements
## Fundamental CSS Syntax:
### - Rules
### - Selectors
### - Declarations
### - Properties
### - Values

???

## Learn More

* [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
* [The Best Way to Learn CSS](http://webdesign.tutsplus.com/tutorials/the-best-way-to-learn-css--webdesign-11906)

---
name: css-rule
class:
background-image: url(../assets/css-rule.png)

???

* CSS rules govern how the content of the specified element should be displayed.

---
name: css-selector-declaration
class:
background-image: url(../assets/css-selector-declaration.png)

???

* Selectors indicate which element the rule applies to.
* Declarations indicate how the element referred to in the selector should be styled.

---
name: css-property-value
class:
background-image: url(../assets/css-property-value.png)

???

* Properties indicate the aspects of the element to be changed (color, font, border, etc.).
* Values specify the settings to use for the chosen property.

---
class: center, middle

# 3 Main Ways to Write CSS

### 1) Inline CSS
### 2) Internal CSS
### 3) External CSS

---
name: css-inline
class:

## Inline CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>
  </head>
  <body>

    <h1 style="color: red;">Welcome to Thimble</h1>

    <p>Make something <span style="font-weight: bold;">amazing</span>!</p>

  </body>
</html>
```

---
name: css-internal
class:

## Internal CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>
    <style type="text/css">
      body {font: 200%/1.5 Bradley Hand, Segoe Script, cursive;}
      header {background-color: yellow; padding-left: 5%;}
      h1 {font: 150%/1.5 'Yanone Kaffeesatz';}
    </style>
  </head>
  <body>
    <header><h1>My Headline</h1></header>
    <p>Lorem ipsum dolor sit amet</p>
  </body>
</html>
```

---
name: css-external
class:

## External CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>

    <link rel="stylesheet" href="css/style.css">

  </head>
  <body>
    <h1>Welcome to Thimble</h1>
    <p>Make something <strong>amazing</strong> with the web!</p>
  </body>
</html>
```

---
name: css-external
class:

## Multiple External Stylesheets

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>

    <link rel="stylesheet" href="reset/normalize.css">
    <link rel="stylesheet" href="bootstrap/main.css">
    <link rel="stylesheet" href="css/custom.css">

  </head>
  <body>
    <h1>Welcome to Thimble</h1>
    <p>Make something <strong>amazing</strong> with the web!</p>
  </body>
</html>
```

---
name: css-selectors
class: center, middle

# CSS Selectors

## - ID Selector
## - Class Selector
## - Tag Selector
## - Child Selector
## - Descendant Selector

---
name: css-id-selector
class:

## ID Selector
Matches an element whose `id` attribute has a value that matches the one specified after the pound or hash symbol.

.float-left[

### .red-text[CSS]
```css
#happy-cake {

}
```
]

.float-right[

### .red-text[HTML]
```html
<!-- WILL match -->
<div id="happy-cake"></div>

<!-- WILL match -->
<aside id="happy-cake"></aside>

<!-- Will NOT match -->
<div id="sad-cake">Wrong ID!</div>

<!-- Will NOT match -->
<div class="happy-cake">That's not an ID!</div>
```
]

???

ID selectors are the most powerful type of selector in terms of CSS specificity, meaning that they beat out other types of selectors and the styles defined within. That sounds good, but that's typically considered bad practice. In general, it's better to have lower-specificity selectors that are easier to override when necessary.

---
name: css-class-selector
class:

## Class Selector
Matches an element whose `class` attribute has a value that matches the one specified after the period symbol.

.float-left[

### .red-text[CSS]
```css
.module {

}
```
]

.float-right[

### .red-text[HTML]
```html
<!-- WILL match -->
<div class="module"></div>

<!-- WILL match -->
<aside class="country module">Multiple classes!</aside>

<!-- Will NOT match -->
<div class=".module">The dot is for CSS, not HTML</div>

<!-- Will NOT match -->
<div class="bigmodule">Wrong class</div>
```
]

???

Class selectors are your friend and are probably the most useful and versatile selectors available to us. They are well supported in all browsers, and you can add multiple classes to a given HTML element (separated by a space). There are also some cool JavaScript things we can do specifically with manipulating classes.

---
name: css-tag-selector
class:

## Tag Selector
Matches HTML element names.

.float-left[

### .red-text[CSS]
```css
h2 {

}
```
]

.float-right[

### .red-text[HTML]
```html
<!-- WILL match -->
<h2>Hi, Mom</h2>

<main>
  <div>
     <!-- WILL match -->
     <h2>Anywhere</h2>
  </div>
</main>

<!-- Will NOT match -->
<h2class="yolo">Make sure that tag has a space after it!</h2>
```
]

???

Tag selectors are at their most useful when changing properties that are unique to that HTML element. Like setting the list-style on a `<ul>` or tab-size on a `<pre>`. They are also handy in reset stylesheets where you are specifically trying to unset styles that browsers apply to certain elements.

Don't rely on the them too much though. It's typically more useful to have a class define styling that you can use on any HTML element.

---
name: css-child-selector
class:

## Child Selector
Matches an element that is a direct child of another.

.float-left[

### .red-text[CSS]
```css
li > a {
  color: tomato;
  text-decoration: none;
}
```
]

.float-right[

### .red-text[HTML]
```html
<ul>
  <li><a href="#">WILL be selected</a></li>
  <li><a href="#">WILL be selected</a></li>
</ul>
<p><a href="#">WILL NOT be selected</a></p>
```
]

???

A child selector in CSS is the "greater than" symbol. It means "select elements that are direct descendants only". In this case: "select list items that are direct descendants of an ordered list".


---
name: css-descendant-selector
class:

## Descendant Selector
Matches an element that is a descendant of another specified element (not just a direct child of that element.)

.float-left[

### .red-text[CSS]
```css
ul li {  }
header h2  {  }
footer a  {  }
.module div {  }
#info-toggle span  {  }
div span  {  }
```
]

.float-right[

### .red-text[HTML]
```html
<div>
  <span>I will match</span>
  <ul>
    <li>
       <span>I will match too</span>
    </ul>
  </ul>
</div>
```
]

???

A descendant selector in CSS is any selector with white space between two selectors without a combinator. Descendant means anywhere nested within it in the DOM tree. Could be a direct child, could be five levels deep, it is still a descendant. This is different than a child combinator (>) which requires the element to be the next nested level down.

* [CSS Diner Exercise](https://flukeout.github.io/)

---
name: css-big-concepts
class: center, middle

# The Big Concepts of CSS

## - Inheritance
## - Cascade
## - Specificity
## - Box Model

---
name: html-document-tree
class: center

# Visualizing Inheritance
### HTML Document Structure / Upside-down Family Tree

![HTML Document Tree](../assets/html-document-tree.gif)

???
* The main idea of inheritance is that some property values applied to an element will be inherited by that element's children, and some won't.
* Inheritance makes it easy for you to set a site-wide base font by applying a font-family to the `<html>` element, for example. You can then override the fonts on individual elements where needed. It would be really annoying to have to set the base font separately on every element.
* [CSS Inheritance (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Inheritance)

---
name: css-inheritance
class:

# Inheritance: pass it on

### .red-text[CSS]

```css
p {
  font-family: Verdana, sans-serif;
  font-size: 1em;
}
```

### .red-text[HTML]

```html
<section>
  <h1>Headline</h1>
  <p>Something <em>very important</em> going on here!</p>
</section>
```

???
* In general, properties related to styling text are inherited
* Properties such as margings, padding, borders, and backgrounds are not inherited

---
name: css-font-body
class:

# Inheritance: apply font-related properties to `<body>`

### .red-text[CSS]

```css
body {
  font-family: 'Roboto Slab', serif;
  font-size: 1em; /* equivalent to 16px */
  line-height: 1.25; /* equivalent to 20px */
}

h1 {
  font-size: 2em;
  line-height: 1.25;
}

h2 {
  font-size: 1.625em;
  line-height: 1.15384615;
}
```

---
name: css-cascade-intro
class: center

# The Cascade

> When everything else is equal, the last value defined for a given property wins.

<cite>-- Aaron Gustafson</cite>

???

* [CSS Cascade (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#The_cascade)
* CSS stands for "Cascade Style Sheets"...\*hint hint\*, the cascade is an important concept to understand!
* The cascade hinges on two key concepts: **Specificity** and **Source Order**

---
name: css-cascade
class: center

#  The Cascade

##  *... the last value defined for a given property wins.*

### - the cascade assigns weights to .red-text[sources of style info]

### - style info .red-text["cascades down"] until it is overridden by a style rule with more weight

### - proximity, .red-text[the closer a property is to the content , the more weight it is given]


???

* CSS allows us to apply several stylesheets to the same document, which means there are bound to be conflicts.

* .red-text[The Cascade is a hierarchical system] that assigns different weights to the various sources of style information.

* When several sources of style info vie for control of HTML elements, style info is passed down .red-text[("cascades down")] until it is overridden by a style rule with more weight.

* Generally speaking, .red-text[the closer the stylesheet is to the content , the more weight it is given.]

---
name: css-stylesheet-hierarchy
class: center

# The Cascade: stylesheet hierarchy

### From general to specific

Browser default styles (user agent stylesheet)

User styles (reader stylesheet)

Linked external stylesheet (`<link>` element in `<head>`)

Imported stylesheet (`@import`)

Embedded stylesheets (`<style>` element in `<head>`)

Inline style rule(s) (`style` attribute in HTML opening tag)

Any style rule marked `!important` by the developer

Any style rule marked `!important` by the reader (user)

---
name: css-specificity-101
class:

# .red-text[Specificity 101]

### Specificity trumps proximity

* When 2 rules in a single stylesheet conflict, type of selector determines winner.
* When selectors have an equal specificity value, the last defined rule wins.

* The .red-text[more specific the selector], the more weight is given to override conflicting declarations.
  * ID selectors (`#happy-cake`)
  * class selectors (`.happy-cake`)
  * contextual element selectors (`nav ul`)
  * individual element selectors (`ul`)


???

* [CSS-Tricks: Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
* [CSS Specificity: Things You Should Know](http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

---
# Every HTML Element is a Box
### - block level elements are boxes

```html
<h1> <p> <section>
```

### - inline level elements are boxes

```html
<img> <span> <em>
```

???
[The CSS "Ah-ha!" Moment](https://css-tricks.com/the-css-ah-ha-moment/)

---
# Simulate Boxes in Chrome DevTools

```css
* {
    outline: solid 1px hotpink;
  }
```

```css
img {
      outline: dotted 1px lime;
    }
```

```css
em {
      outline: dashed 1px tan;
    }
```

```css
span {
      outline: double 1px salmon;
    }
```

???

[Outlined HTML Elements in Chrome DevTools](https://www.youtube.com/watch?v=4CZveCrrGS0)

---
name: css-box-model-display
class:

# .red-text[Display Property]

.float-left[

```css
p {
    display: block;
}
```

```css
p {
    display: inline;
}
```

```css
p {
    display: inline-block;
}
```

```css
p {
    display: none;
}
```
]

.float-right[

```css
p {
    display: flex;
}
```

```css
p {
    display: inline-flex;
}
```

```css
p {
    display: table;
}
```

```css
p {
    display: table-cell;
}
```
]

---
name: css-box-model-properties
class:

# Box Model Properties

Each part of the box model corresponds to a CSS property:
* `width`
* `height`
* `padding`
* `border`
* `margin`


```css
div {
  border: 6px solid #949599;
  height: 100px;
  margin: 20px;
  padding: 20px;
  width: 400px;
}
```

---
name: css-box-sizing
class:

# box-sizing

### The `box-sizing` property alters the default CSS box model used to calculate width and height of the elements.

```css
/* initial and default value */
/* width / height = width / height of content only */
/* excludes padding, border, margin */

box-sizing: content-box;
```

```css
/* most developers switch to */
/* width = border + padding + width of the content */
/* height = border + padding + height of the content */

box-sizing: border-box;
```

???

[MDN on box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

[Interactive box-model diagram](http://codepen.io/carolineartz/full/ogVXZj) on CodePen

---
name: box-sizing-code
class:

# box-sizing in the real world

```css
/*  ================ Helpers ================ */

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

---
name: css-exercise
class: left

# Exercises

### CSS Exercise 1: [External Stylesheet and Selector Practice](https://github.com/betamore/fewd-css-exercise-1)
