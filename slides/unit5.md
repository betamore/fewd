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

### - normal flow
### - relative & absolute positioning
### - float
### - flexbox
### - grid layout

???

* [Learn CSS Layout](http://learnlayout.com)
* [CSS Position property](https://css-tricks.com/almanac/properties/p/position/)

---

class: center, middle

# normal flow
## `position: static;`

---

class: center, middle

# relative positioning
## `position: relative;`

---

class: center, middle

# absolute positioning
## `position: absolute;`

---

class: center, middle

# fixed positioning
## `position: fixed;`

---

class: center, middle

# floating elements
## `float: none;`
## `float: left;`
## `float: right;`
## `float: inherit;`

---

class: center, middle

# Positioning vs. Layout
## The terms are often used interchangeably
### ("Positioning" is not the same as the CSS `position: ` property!)
### - Layout addresses a page's overall structure: `<header>` `<footer>` etc.
### - Positioning addresses placement of modules within the page: `<nav>` inside of `<header>`
### - Old way: CSS block-level, floats, positioning (static/absolute/relative), tables
### - CSS 3: Flexbox for positioning, CSS Grids for overall layout

---

name: TK
class: middle
# Flexbox!
> The Flexbox Layout (Flexible Box Module, currently a W3C Candidate Recommendation) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").


<cite>-- MDN</cite>

---

class: center, middle

# Or, in plain language...
## Flexbox lets you put things where you want them to go on a page, quickly and easily, once you understand a few ground rules. 

---

class: center, middle

### Flexbox now enjoys support from all modern browsers (I.E., not so much :laughing:):
![CanIUse: Flexbox](https://caniuse.com/#feat=flexbox)

---

class: center, middle

#It's all about the _container_
### Flexbox’s underlying principle is to make layouts flexible and intuitive, by allowing containers to decide for themselves how to evenly distribute their children — including their size and the space between them.
  1. Best practice: your content goes inside a flex container (which itself can contain sub-containers with different flex properties). The container is the **flex parent**. Items within are **flex children**.
  2. The container is defined in HTML markup. Often, this is a <div> with an ID or class applied. HTML element tags are also eligible to be flex parents.
  3. Every *direct* child of the container element (flex parent) is automatically turned into a flex item.
    !Important: only **direct** children of the flex container turn into flex items. If you had a `<div>` tag that you turned into a flex container and placed an unordered list inside it, only the `<ul>` tag would be a flex item. The `<li>` tags nested inside the `<ul>` tag would **not** be flex items.

---

class: center, middle

# Simple HTML markup for flexbox: 

```HTML
 <body>
   	<div class="container">
      <div class="box b1">
        1
      </div>

      <div class="box b2">
        2
      </div>

      <div class="box b3">
        3
      </div>

      <div class="box b4">
        4
      </div>
    	</div>
  </body>
  ```
  
  ---

class: center, middle

# Now, let’s flex some :muscle:
```css
.myContainer {
  display: flex;
 }
 ```
 * **display: flex;** is how we "activate" Flexbox
 * This transforms the outermost `<div>` tag (.Mycontainer) into a **flex container** using the `display` property and setting its value to `flex`
 * `.myContainer` is now the **flex parent** of four **flex child** `<div>` elements
 
  ---

class: center, middle

## flex-direction
#### Flex items will be ordered in either *horizontal rows* or *vertical columns* inside their container.
#### This is declared with the `flex-direction` property

#### There are four potential `flex-direction:` values:
  1. **row** (default): left to right
  2. **row-reverse** : right to left
  3. **column**: vertical column, top to bottom
  4. ** column-reverse** : column, bottom to top
![flex-direction values](https://cdn.glitch.com/4c941fda-83ff-4043-91d1-ff3ed72d5e13%2FflexdirectionRow.jpg?1508431194749)

   ---

class: center, middle

# Flexbox Axis

* Flexbox has two axis that determine where the flex children get laid out: the **main axis** and the **cross axis**
* The **main axis** is defined by `flex-direction` and can be either horizontal, for `row` and `row-reverse`, or vertical for `column` and `column-reverse`
* The **cross axis** is perpendicular to the main axis
* `flex-direction` default sets `row` as main axis and `column` as cross axis
![Flex direction axis](https://cdn.glitch.com/4c941fda-83ff-4043-91d1-ff3ed72d5e13%2FflexAxis.png?1508431224197)

---

class: center, middle

#justify-content 
### Defines the alignment along the main axis, no matter whether it is horizontal or vertical
- `justify-content` has four possible values:
-- **flex-start** (default): items are packed toward the start of the container
-- **flex-end**: items are packed toward the end of the container
-- **center**: items are placed together, centered on the middle point of the main axis
-- **space-between**: items are evenly distributed along the main axis with all the remaining space evenly distributed between them. First item directly on container's start point, last item directy on end point
-- **space-around**: items are evenly distributed along the main axis with proportionallhy equal space around them
![justify content] (https://cdn.glitch.com/4c941fda-83ff-4043-91d1-ff3ed72d5e13%2FjustifyContent.png?1508431240699)

---

class: center, middle

# align-items 
### Align-items defines how the flex child items are laid out along the cross axis of the main line. If `justify-content` is spacing things left to right, then `align-items` is managing them up and down.
###There are five `align-items` values:
- flex-start: cross-start margin edge of the items is placed on the cross-start line
- flex-end: cross-end margin edge of the items is placed on the cross-end line
- center: items are centered in the cross-axis
- baseline: items are aligned such as their baselines align
- stretch (default): stretch to fill the container (still respect min-width/max-width)
![align items graphic](https://cdn.glitch.com/4c941fda-83ff-4043-91d1-ff3ed72d5e13%2FalignItems.png?1508431252865)


---

class: center, middle

# flex-wrap
### Flex items will helpfully try to cram themselves all onto one line
### **`flex-wrap`** is how we control what goes where. There are three `flex-wrap` values:
- `nowrap` (default): all flex items will be on one line
- `wrap`: flex items will wrap onto multiple lines, from top to bottom.
- `wrap-reverse`: flex items will wrap onto multiple lines from bottom to top.
![flex-wrap] (https://cdn.glitch.com/4c941fda-83ff-4043-91d1-ff3ed72d5e13%2FflexWrap.png?1508431347639)


---

class: center, middle

# See?! :sunglasses:
## Flexbox is hugely useful already! Just `direction: flex;` paired with `justify-content` and `align-items` gives more precise layout capability than CSS has ever had before. These, however are applied to the flex parent container.

## The items within the container -- the flex children -- have their own flexbox properties that allow us to do even more cool stuff! 

---

class: center, middle

# align-self

#### Align-self: like `align-items`, but targets one specific child element. Allows you to take it out of the overall default alignment, or whatever `align-items` you may have defined. The `align-self` property takes the same values as `align-items`: center, baseline, flex-start, flex-end, stretch.
![align self](https://cdn.glitch.com/4c941fda-83ff-4043-91d1-ff3ed72d5e13%2FalignSelf.png?1508431263454)


  ---

class: center, middle

# order
### `order`: By default, flex items are laid out in order of markup. We can use the `order` property to switch them around in CSS!

The CSS order property specifies the order used to lay out flex items in their flex container. Elements are laid out in the ascending order of the order value. Elements with the same order value are laid out in the order in which they appear in the source code.

![order] (https://cdn.glitch.com/4c941fda-83ff-4043-91d1-ff3ed72d5e13%2Forder.png?1508431331987)

---

class: center, middle

# And now it's time to meet your new best friend: Flexbox Froggy!

https://flexboxfroggy.com

![image](http://whatpixel.com/images/2016/05/02-flexbox-froggy-webapp.jpg)


  


