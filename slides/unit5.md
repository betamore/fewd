class: center, middle

# Unit 5
## Website Layout

---

name: eric-meyer-css-layout-quote
class: middle

> From the very beginning of CSS, there has been a giant, layout-shaped hole at its center. We filled it with <span>table markup</span>, which was never meant for layout.

<cite>-- Eric Meyer</cite>

---

name: eric-meyer-css-layout-quote2
class: middle

> After that came <span>floats</span>, which were also <span>never meant for layout</span>; we only used them because `clear` existed, so we could push footers to the bottom of the page.

<cite>-- Eric Meyer</cite>

---

name: eric-meyer-css-layout-positioning
class: middle

> For a brief period, we played with <span>positioning</span>, which <span>actually was meant for layout</span>, but was too incompletely designed to effectively serve that role.

<cite>-- Eric Meyer</cite>

---

name: eric-meyer-css-layout-decade
class: middle

> And that’s where things have stood for well <span>more than a decade: hacking our way to layouts with floats</span>. A useful and often ingeniously adapted hack, but a hack nonetheless.

<cite>-- Eric Meyer</cite>

---

class: center

# Controlling the Position of Elements
## CSS Positioning Schemes

### - Normal Flow (Static)
### - Relative & Absolute Positioning
### - Float
### - Flexbox
### - Grid Layout

???

* [Learn CSS Layout](http://learnlayout.com)
* [CSS Position property](https://css-tricks.com/almanac/properties/p/position/)

---

class: center, middle

# normal flow
## `position: static;`

???

* `static` is the default position given to all HTML elements.
* An element with a position of `static` is considered to be _not positioned_.
* Any other position besides `static` is considered to be _positioned_.

---

class: center, middle

# relative positioning
## `position: relative;`

???

* `relative` positioned elements will behave the same as `static` ones until we add some properties to it (`top`, `bottom`, `left`, and `right`).
* Setting values for these additional properties will move an element away from its normal position.

---

class: center, middle

# absolute positioning
## `position: absolute;`

???

* `absolute` positioned elements utilize the `top`, `bottom`, `left`, and `right` properties to adjust position as well, but relative to their **nearest positioned ancestor**.
* If absolutely positioned elements have no positioned ancestors, they will be positioned relative to the document body (`<body>`).
* Remember that a "positioned" element is one whose `position` property is set to _anything else_ besides `static`.

---

class: center, middle

# fixed positioning
## `position: fixed;`

???

* `fixed` elements are positioned relative to the viewport, and will always remain in the same place, even when scrolling.
* The `top`, `bottom`, `left`, and `right` properties are used to set the position of fixed elements.

---

class: center, middle

# floating elements
## `float: none;`
## `float: left;`
## `float: right;`
## `float: inherit;`
