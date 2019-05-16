class: center, middle

# Unit 4
## CSS Basics

<img src="../assets/css3-logo.svg" alt="CSS3 logo" width="35%">

---
class: left

> <span>CSS is like chess:</span> easy to learn, but hard to master.

<cite>-- Stephen Hay</cite>

### CSS stands for .red-text[Cascading Style Sheets]. It is a stylesheet language used to format and style markup languages such as HTML. It also enables the separation of structure (HTML) from presentation (CSS).

---
name: css-browser
background-image: url(../assets/css-browser.png)

---
class: left

# CSS Associates Style Rules with HTML Elements ~

## Basic CSS Syntax Components:

### Rules
### Selectors
### Declarations
### Properties
### Values

???

* [9 Important CSS Properties to Know](https://zellwk.com/blog/9-important-css-properties-you-must-know/)
* [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
* [The Best Way to Learn CSS](http://webdesign.tutsplus.com/tutorials/the-best-way-to-learn-css--webdesign-11906)

---
name: css-rule
class: center
background-image: url(../assets/css-rule.png)

???

* CSS rules govern how the content of the specified element should be displayed.

---
name: css-selector-declaration
class: center
background-image: url(../assets/css-selector-declaration.png)

???

* Selectors indicate which HTML element(s) the rule applies to.
* Declarations indicate how the element referred to in the selector should be styled.

---
name: css-property-value
class: center
background-image: url(../assets/css-property-value.png)

???

* Properties indicate the aspects of the element to be changed (color, font, border, etc.).
* Values specify the settings to use for the chosen property.

---
class: left

# 3 Main Ways to Write CSS

### 1) Inline CSS
### 2) Internal CSS
### 3) External CSS

---
class: left

## Inline CSS

Styles are applied inline to individual elements. This approach is considered the **least ideal of the three**.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>
  </head>
  <body>
    <!-- Styles are applied inline to individual elements -->
    <h1 style="color: red;">Welcome to Thimble</h1>

    <p>Make something <span style="font-weight: bold;">amazing</span>!</p>

  </body>
</html>
```

---
class: left

## Internal CSS

Styles are written between `<style>` tags inside of the HTML document's `<head>` element. This is **better than inline CSS, but still not the best approach**.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>
    <!-- Styles are written here and apply to the HTML in the document -->
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
class: left

## External CSS

Styles are written in an external CSS file (e.g. `style.css`) and linked to from the `<head>` of the HTML document. This approach is considered **best practice**.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>
    <!-- The <link> tag references the external CSS stylesheet -->
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1>Welcome to Thimble</h1>
    <p>Make something <strong>amazing</strong> with the web!</p>
  </body>
</html>
```

---
class: left

## Multiple External Stylesheets

You can reference multiple external stylesheets, which will be applied to your markup in the order of the `<link>` tags listed.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Made in Baltimore</title>
    <!-- These external stylesheets will be applied in descending order -->
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
class: left

# CSS Selectors

## ID Selector
## Class Selector
## Tag Selector
## Child Selector
## Descendant Selector

---
class: left

## ID Selector ~

Matches an element whose `id` attribute has a value that matches the one specified after the pound or hash symbol.

.float-left[

### .red-text[CSS]
```css
#happy-cake {
  color: purple;
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
class: left

## Class Selector ~

Matches an element whose `class` attribute has a value that matches the one specified after the period symbol.

.float-left[

### .red-text[CSS]
```css
.module {
  background-color: gray;
  border: 1px solid red;
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
class: left

## Element/Tag Selector ~

Matches HTML element/tag names.

.float-left[

### .red-text[CSS]
```css
h2 {
  font-size: 1.75rem;
  font-family: 'Lato';
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

Element selectors are at their most useful when changing properties that are unique to that HTML element. Like setting the list-style on a `<ul>` or tab-size on a `<pre>`. They are also handy in reset stylesheets where you are specifically trying to unset styles that browsers apply to certain elements.

Don't rely on the them too much though. It's typically more useful to have class-defined styles that you can use on any HTML element.

---
class: left

## Child Selector ~

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

A child selector in CSS is the "greater than" (`>`) symbol. It means "select elements that are direct descendants only". In this case: "select anchor tags (`a`) that are direct descendants of list items (`li`)".

---
class: left

## Descendant Selector ~
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

A descendant selector in CSS is any selector with white space between two selectors without a combinator. Descendant means anywhere nested within it in the DOM tree. Could be a direct child, could be five levels deep, it is still a descendant. This is different than a child combinator (`>`) which requires the element to be the next nested level down.

---
# Exercise: CSS Diner

### ➡️ [Go to Exercise](https://flukeout.github.io/)

---
class: left

# The Big Concepts of CSS

## Inheritance
## Cascade
## Specificity
## Box Model

---
class: left

# Visualizing Inheritance ~

### HTML Document Structure / Upside-down Family Tree

![HTML Document Tree](../assets/html-document-tree.gif)

???

* The main idea of inheritance is that some property values applied to an element will be inherited by that element's children, and some won't.
* Inheritance makes it easy for you to set a site-wide base font by applying a font-family to the `<html>` element, for example. You can then override the fonts on individual elements where needed. It would be really annoying to have to set the base font separately on every element.
* [CSS Inheritance (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Inheritance)

---
name: css-inheritance
class:

# Inheritance: Pass It On

### CSS

```css
body {
  font-family: Verdana, sans-serif;
  color: green;
}
```

### HTML

```html
<section>
  <h1>This Heading will be Verdana and Green</h1>
  <p>So will this paragraph content.</p>
  <span>And this span text as well!</span>
</section>
```

???

* In general, properties related to styling text are inherited
* Properties such as margins, padding, borders, and backgrounds are not inherited

---
class: left

# The Cascade ~

> When everything else is equal, the last value defined for a given property wins.

<cite>-- Aaron Gustafson</cite>

### Basics of The Cascade

* The last value defined for a given property wins.
* The cascade assigns weights to .red-text[sources of style info]
* Style info .red-text["cascades down"] until it is overridden by a style rule with more weight
* Proximity matters! .red-text[The closer a property is to the content , the more weight it is given]

???

* [CSS Cascade (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#The_cascade)
* CSS stands for "Cascade Style Sheets"...**hint hint**, the cascade is an important concept to understand!
* The cascade hinges on two key concepts: **Specificity** and **Source Order**
* CSS allows us to apply several stylesheets to the same document, which means there are bound to be conflicts.
* .red-text[The Cascade is a hierarchical system] that assigns different weights to the various sources of style information.
* When several sources of style info vie for control of HTML elements, style info is passed down .red-text[("cascades down")] until it is overridden by a style rule with more weight.
* Generally speaking, .red-text[the closer the stylesheet is to the content , the more weight it is given.]

---
class: left

# Cascading Stylesheet Hierarchy ~

### From General to Specific

Browser default styles (**user agent stylesheet**)

Linked external stylesheet (`<link rel="stylesheet">` element in `<head>`)

Imported stylesheet (`@import` rule at top of CSS file)

Embedded stylesheets (`<style>` element in `<head>`)

Inline style rule(s) (`style` attribute in opening HTML tags)

Any style rule marked `!important` by the developer

???

* [CSS Inheritance, Cascade, and Specificity](http://web.simmons.edu/~grovesd/comm244/notes/week4/css-concepts)
* [@import vs link](https://stackoverflow.com/questions/7199364/import-vs-link)

---
class: left

# Specificity 101 ~

### Specificity Trumps Proximity

* When 2 rules in a single stylesheet conflict, type of selector determines winner.

* When selectors have an equal degree of specificity, the last defined rule wins.

* The .red-text[more specific the selector], the more weight is given to override conflicting declarations.

* Selector specifity from general to specific:
  * Individual element selectors (e.g. `ul`, `h1`, etc.)
  * Contextual element selectors (e.g. `nav ul`, `p > a`, etc.)
  * Class selectors (e.g. `.happy-cake`)
  * ID selectors (e.g. `#happy-cake`)

???

* [CSS-Tricks: Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
* [CSS Specificity: Things You Should Know](http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

---
class: left

# The Box Model ~

### [The CSS "Ah-ha!" Moment](https://css-tricks.com/the-css-ah-ha-moment/): _Every HTML Element is a Box_

**Block level elements are boxes**

```html
<h1> <p> <section>
```

**Inline level elements are boxes too!**

```html
<img> <span> <em>
```

**Simulate Boxes in Chrome DevTools**

Go to [Google News](https://news.google.com) and create the following CSS rule:

```css
* {
    outline: 1px solid hotpink;
  }
```

???

* [The CSS Box Model](https://css-tricks.com/the-css-box-model/)

---
class: left

# Box Model Properties

Each part of the box model corresponds to a CSS property:
* `margin`
* `border`
* `padding`
* `width`
* `height`

<img src="https://cdn-images-1.medium.com/max/800/1*7qqR-jXp35fOjOIIfHVUHA.png" alt="css box model" width="45%">

---
class: left

# Box-sizing ~

### The `box-sizing` property alters the default CSS box model used to calculate width and height of the elements.

```css
/* content-box is the default box-sizing value */
/* width and height = width and height of content only */
/* excludes padding, border, and margin values */

box-sizing: content-box;
```

```css
/* most developers switch to border-box */
/* width and height = width/height of content + border and padding values */
/* excludes margin values */

box-sizing: border-box;
```

???

* [MDN on box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
* [Interactive Box Model Diagram](http://codepen.io/carolineartz/full/ogVXZj) on CodePen

---
class: left

# Box-sizing in the real world

To make our lives easier when working with the box model (and decrease the amount of math we have to do), the best practice is to declare `box-sizing: border-box;` for _all_ elements in our project using the universal selector (*) like so:

```css
/* CSS Box Model and Universal box-sizing Setting */

* {
  box-sizing: border-box;
}
```

---
class: left

# Exercise: External Stylesheet and Selector Practice

### ➡️ [Go to Exercise](https://github.com/betamore/fewd-css-exercise-1)
