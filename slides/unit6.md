class: center, middle

## Unit 7
# .red-text[Responsive Web Design]

---
name: rwd-definition
class: center, middle
# What is Responsive Web Design (RWD)?

![Responsive Web Design](/slides/unit/7/slides/rwd.jpg)

---
name: rwd-ethan-marcotte

# .red-text[Ethan Marcotte:]

> ## <em>"The web's moved beyond the desktop, and it's not looking back. The number of devices we're designing for is growing just as quickly as mobile traffic."</em>

### - .red-text[2010:] alistapart.com/article/responsive-web-design/
### - .red-text[2011:] Responsive Web Design (first edition)
### - .red-text[2014:] Responsive Web Design (2nd edition)

???
A List Apart: [Responsive Web Design](http://alistapart.com/article/responsive-web-design/) by Ethan Marcotte

A Book Apart: [Responsive Web Design](http://abookapart.com/products/responsive-web-design)

Creative Bloq: [Ethan Marcotte on responsive web design](http://www.creativebloq.com/netmag/ethan-marcotte-responsive-web-design-1126512)

---
name: rwd-timeline

# .red-text[Ethan Marcotte:]

> ## <em>"I think of responsive design as an alternative to mobile sites."</em>

# Desktop & Laptop &rarr; iPhone .red-text[(2007)] &rarr; EM RWD .red-text[(2010)] &rarr;

# EM RWD Book .red-text[(2011 1st ed.)] &rarr; EM RWD Book .red-text[(2014 2nd ed.)]

---

name: rwd-principles
class: center

# .red-text[3 Core Components of RWD]

### - Fluid grid
### - Flexible images
### - Media queries


---
name: rwd-layouts
class: center, middle

# Fixed Width Layout .red-text[(rigid px)] &rarr; Liquid Layout .red-text[(arbitrary %)]
# &rarr; Fluid Grid .red-text[(smart % proportions)]

---

name: rwd-fluid-grid
class: center

# .red-text[Fluid Grid]

## target / context = result

### 960px / 1920px = 50%

.float-left[<img src="/slides/unit/7/slides/rwd-fluid-grid.png" alt="Fluid Grid" style="width: 600px;"/>]

## &#9825;

#### smart proportions

#### .red-text[sidebar:] 300px / 960px = 31.25%
#### .red-text[main content:] 640px / 960px = 66.66667%
#### .red-text[margin:] 20px / 960px = 2.08334%

???
Treehouse: [The 2014 Guide to Responsive Web Design](http://blog.teamtreehouse.com/modern-field-guide-responsive-web-design)

---

name: rwd-flexible-image
class:

# .red-text[Flexible Images]

```css
img {
	max-width: 100%;
	height: auto;
}
```

### - images should only ever be as large as their physical width in pixels
### - if nested inside a smaller parent container, then the image should shrink
### - height will be calculated automatically, will maintain original aspect ratio

---

name: rwd-media-query
class:

# .red-text[Media Queries]

```css
@media screen and (max-device-width: 480px) {

  /* ... styles here ... */

}
```

### - inspect the physical characteristics of the device rendering our work
### - CSS will only be applied when specific conditions are met (e.g. browser reaches a specific width)
### - asking the device if its horizontal screen size .red-text[(max-device-width)] is equal to or less than 480px


???
W3C: [Media Queries](http://www.w3.org/TR/CSS21/media.html)

screensiz.es: [screensiz.es](http://screensiz.es)
---

name: rwd-media-query-anatomy
class:

# .red-text[Anatomy of a Media Query]

```css
@media screen and (min-width: 768px) and (orientation: landscape) {

  /* ... styles here ... */

}
```

### - media type (all, screen, print, tv, ...)
### - the query itself wrapped in parentheses
### - name of feature
### - corresponding value

---

name: rwd-media-query-features
class: center

## In the W3C specs, every device as a .red-text["display area"] and .red-text["rendering surface."]

# .red-text[display area] = browser viewport = browser window
# .red-text[rendering surface] = entire display = screen

### `width` = display area width = viewport width
### `height` = display area height = viewport height
### `device-width` = rendering surface width = screen width
### `device-height` = rendering surface height = screen height

---

name: rwd-mobile-viewport
class:

# .red-text[Mobile Browser Viewport]

### - mobile browsers render pages in a virtual "window" (the viewport)
### - this viewport is usually wider than the physical screen (e.g. .red-text[980px] for mobile Safari)
### - that way these browsers don't need to squeeze every page layout into a tiny window
### - which would break many non-mobile-optimized sites
### - users can pan and zoom to see different areas of the page

???

MDN: [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

---

name: rwd-viewport-meta-tag-history
class:

# .red-text[Viewport Meta Tag History]

### - mobile Safari introduced the "viewport meta tag"
### - to let web developers control the viewport's size and scale
### - many other mobile browsers now support this tag
### - but it is not part of any web standard

???

Safari Developer Library: [Configuring the Viewport](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html)

quirksmode.org: [A Tale of Two Viewports](http://www.quirksmode.org/mobile/viewports2.html)

---

name: rwd-viewport-meta-tag
class:

# .red-text[Viewport Meta Tag]

### - a typical mobile-optimized page contains something like:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### - `width` property controls the size of the viewport
### - can be set to a specific number of pixels (e.g. `width=320`)
### - or to `device-width` which is the width of the screen in CSS pixels at a scale of 100%
### - `initial-scale` controls the zoom level when the page is first loaded

???

Google Developers: [Configuring the Viewport](https://developers.google.com/speed/docs/insights/ConfigureViewport?hl=en)

---

name: rwd-mobile-first
class:

# .red-text[Mobile First Development Approach]

```css
/* Extra small devices (phones, less than 768px) */
/* No media query since this is the default in Bootstrap */

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200) { ... }
```

### - can be tricky to cram a multi-column layout into a smaller screen space
### - it’s much better to start simple, then work upwards to more complex designs

???

Luke Wroblewski: [Mobile First](http://www.lukew.com/ff/entry.asp?933)

---

name: img-format
class: center

# .red-text[Image Formats]

### - jpg (my-image.jpg)
### - gif (my-image.gif)
### - png (my-image.png)
### - svg (my-image.svg)
