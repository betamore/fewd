class: center, middle

# Unit 5
## Page Layout & Responsive Web Design

![Responsive Web Design](../assets/rwd.jpg)

---
class: middle

> From the very beginning of CSS, there has been a giant, layout-shaped hole at its center. We filled it with <span>table markup</span>, which was never meant for layout.

<cite>-- Eric Meyer</cite>

---
class: middle

> After that came <span>floats</span>, which were also <span>never meant for layout</span>; we only used them because `clear` existed, so we could push footers to the bottom of the page.

<cite>-- Eric Meyer</cite>

---
class: middle

> For a brief period, we played with <span>positioning</span>, which <span>actually was meant for layout</span>, but was too incompletely designed to effectively serve that role.

<cite>-- Eric Meyer</cite>

---
class: middle

> And that’s where things have stood for well <span>more than a decade: hacking our way to layouts with floats</span>. A useful and often ingeniously adapted hack, but a hack nonetheless.

<cite>-- Eric Meyer</cite>

---
class: left

# CSS Display Property

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
class: left

# Controlling the Position of Elements ~
## CSS Positioning Schemes

### Normal Flow (Static)
### Relative & Absolute Positioning
### Float
### Flexbox
### CSS Grid

???

* [CSS Position property](https://css-tricks.com/almanac/properties/p/position/)

---
class: left

# Normal Flow
## `position: static;`

* `static` is the default position given to all HTML elements.

* An element with a position of `static` is considered to be _not positioned_.

* Any other position besides `static` is considered to be _positioned_.

---
class: left

# Relative Positioning
## `position: relative;`

* `relative` positioned elements will behave the same as `static` ones until we add some properties to it (`top`, `bottom`, `left`, and `right`).

* Setting values for these additional properties will move an element away from its normal position.

---
class: left

# Absolute Positioning
## `position: absolute;`

* `absolute` positioned elements utilize the `top`, `bottom`, `left`, and `right` properties to adjust position as well, but relative to their **nearest positioned ancestor**.

* If absolutely positioned elements have no positioned ancestors, they will be positioned relative to the document body (`<body>`).

* Remember that a "positioned" element is one whose `position` property is set to _anything else_ besides `static`.

---
class: left

# Fixed Positioning
## `position: fixed;`

* `fixed` elements are positioned relative to the viewport, and will always remain in the same place, even when scrolling.

* The `top`, `bottom`, `left`, and `right` properties are used to set the position of fixed elements.

---
class: left

# CSS Floats

## `float: none;`
## `float: left;`
## `float: right;`
## `float: inherit;`

---
class: left

# Exercise: Learn CSS Layout

### ➡️ [Go to Exercise](http://learnlayout.com)

---
class: left

# Responsive Web Design (RWD) ~

### What is RWD?

> The web's moved beyond the desktop, and it's not looking back. The number of devices we're designing for is growing just as quickly as mobile traffic...I think of responsive design as an alternative to mobile sites.

<cite>-- Ethan Marcotte</cite>

???

* A List Apart: [Responsive Web Design](http://alistapart.com/article/responsive-web-design/) by Ethan Marcotte

* A Book Apart: [Responsive Web Design](http://abookapart.com/products/responsive-web-design)

* Creative Bloq: [Ethan Marcotte on responsive web design](http://www.creativebloq.com/netmag/ethan-marcotte-responsive-web-design-1126512)

---
class: left

# 3 Core Components of RWD

### 1) Fluid layouts
### 2) Flexible images
### 3) Media queries

---
class: left

# Fluid Layouts

## Fixed Width Layout .red-text[(rigid px)]
## &darr;
## Liquid Layout .red-text[(arbitrary %)]
## &darr;
## Fluid Grid .red-text[(smart % proportions)]

---
class: left

# Fluid Layouts (cont.)

## target / context = result

### 960px / 1920px = 50%

.float-left[<img src="../assets/rwd-fluid-grid.png" alt="Fluid Grid" style="width: 600px;"/>]

### Smart Proportions 🙌

#### .red-text[sidebar:] 300px / 960px = 31.25%
#### .red-text[main content:] 640px / 960px = 66.66667%
#### .red-text[margin:] 20px / 960px = 2.08334%

---
class: left

# Flexible Images

```css
img {
	max-width: 100%;
	height: auto;
}
```

### - Images should only ever be as large as their physical width in pixels
### - If nested inside a smaller parent container, then the image should shrink
### - Height will be calculated automatically, will maintain original aspect ratio

---
class: left

# Media Queries ~

```css
@media screen and (max-width: 480px) {

  /* If the above condition is met (i.e. screen is 480 pixels or smaller), the styles below will be applied */
	p {
		color: blue;
	}
}
```

### - The above media query checks whether the current horizontal screen size .red-text[(max-device-width)] is equal to or less than 480px.
### - If so, the CSS rules defined within the media query will be applied.

???

* W3C: [Media Queries](http://www.w3.org/TR/CSS21/media.html)
* W3Schools: [Responsive Web Design - Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
* screensiz.es: [screensiz.es](http://screensiz.es)
* [More Media Query Syntax Details](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

---
class: left

# Mobile Browser Viewport & the Viewport Meta Tag ~

Mobile browsers render pages in a virtual "window" (the viewport). This viewport is usually wider than the physical screen (e.g. .red-text[980px] for mobile Safari). That way these browsers don't need to squeeze every page layout into a tiny window, which would break many non-mobile-optimized sites. Users can pan and zoom to see different areas of the page.

Mobile Safari introduced the "viewport meta tag" to let web developers control the viewport's size and scale. Many other mobile browsers now support this tag, but it's not part of any web standard.

A typical mobile-optimized page contains the following `meta` tag in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- `width` property controls the size of the viewport
- It can be set to a specific number of pixels (e.g. `width=320`) or to `device-width`, which is the width of the screen in CSS pixels at a scale of 100%
- `initial-scale` controls the zoom level when the page is first loaded

???

* MDN: [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)
* Safari Developer Library: [Configuring the Viewport](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html)
* Google Developers: [Configuring the Viewport](https://developers.google.com/speed/docs/insights/ConfigureViewport?hl=en)

---
class: left

# Mobile-First Development Approach

```css
/* Smaller devices (500px and up) */
@media screen and (min-width: 500px) {
  /* Media query styles here */
}

/* Larger devices (900px and up) */
@media screen and (min-width: 900px) {
  /* Media query styles here */
}
```

### It can be tricky to cram a multi-column layout into a smaller screen space. Instead, it’s better to design for smaller screens _first_, then work upwards to more complex designs.

---
class: left

# Flexbox: A Quick Intro

Flexbox works by defining a `display` value of `flex` on a parent element (**flex container**), which automatically makes all child elements **flex items** inside of it.

🔖 .red-text[BOOKMARK THIS] 👉 [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

.float-left[
```css
/* Sample style for flex container */
flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* Sample styles for flex items */
flex-items {
  flex: 0 1 auto;
}
```
]

.float-right[
<img src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg" width="100%">

<img src="https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg">
]

---
class: left

# Exercise: Flexbox Froggy

### ➡️ [Go to Exercise](https://flexboxfroggy.com/)
