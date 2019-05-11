class: center, middle

# Unit 3
## HTML Basics

<img src="http://stepanoff.org/wordpress/wp-content/uploads/html5-1920x1200.png" width="60%" alt="html5 logo">

---
class: left, middle

> <span>HTML is the unifying language of the World Wide Web.</span> Using just the simple tags it contains, the human race has created an astoundingly diverse network of hyperlinked documents, from Amazon, eBay, and Wikipedia, to personal blogs and websites dedicated to cats that look like Hitler.

<cite>-- Jeremy Keith</cite>

---
class: left, middle

> <span>Structured content is semantic; it's about <em>what the individual pieces of content are.</em></span> HTML, while not perfect, is now the primary way we structure content on the web. We attempt to use the markup language semantically in order to describe what each element is.

<cite>-- Stephen Hay</cite>

---
class: left

# What is a Markup Language?

> "A markup language is a system for annotating a document in a way that is <span>syntactically distinguishable</span> from the text"

<cite>-- [Wikipedia](https://en.wikipedia.org/wiki/Markup_language#HTML)</cite>

### HTML (Hypertext Markup Language) is the markup language of the Web

---
name: html-tags

background-image: url(../assets/html-tags.jpg)

???

Slide image from the [HTML & CSS Book](http://www.htmlandcssbook.com/sample-chapter/)

---
class: left

# HTML Document Structure ~

## An upside-down family tree

![HTML Document Tree](../assets/html-document-tree.gif)

???

* All elements contained within a given element are said to be its .red-text[descendants]
* An element that's directly contained within another element is said to be a .red-text[child] of that element
* The containing element is the .red-text[parent]
* All elements higher up than a particular element in the tree are its .red-text[ancestors]
* Two elements with the same parent are .red-text[siblings]

---
class: left

# HTML Document Structure (cont.) ~

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Nothing written here will be visible in the browser window -->
    <meta charset="utf-8">
    <meta name="description" content="Your meta description should be ~160 characters">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title of My Project</title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/main.js" charset="utf-8"></script>
  </head>
  <body>
    <!-- Only markup & content written here will be visible in the browser window -->
  </body>
</html>
```

???

* [The Structure of an HTML Document](https://codetheweb.blog/2017/10/07/structure-of-an-html-document/)
* [Complete List of HTML Meta Tags](https://gist.github.com/lancejpollard/1978404)
* [Using the viewport meta tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

---
class: left

# Block-level vs. Inline Elements ~

By default, nearly all HTML elements are organized into one of two categories: **block-level** or **inline**.

### Block-level Elements

* Begin on a new line
* Stack on top of each other
* May be nested inside one another and **may wrap** around inline elements
* .red-text[Occupy the full available width]
* Examples: `<div>`, `<body>`, `<p>`, `<header>` & `<footer>`, and all heading tags (`<h1>` through `<h6>`)

### Inline Elements

* Do not begin on a new line
* Line up one after the other
* May be nested inside each other, but **cannot wrap** around block-level elements
* .red-text[Only occupy the width of their content]
* Examples: `<span>`, `<a>`, `<img>`, `<input>`, etc.

???

* [HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [Block-level Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
* [Inline Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
* [HTML5 Doctor](http://html5doctor.com/)

---
class: left

# Element Attributes ~

HTML elements can have **attributes** which are additional values that add meaning or functionality to elements.

We include attributes as part of the opening tag of a given element, with most attributes written as name-value pairs in the following format: `attribute="value"`

![html img element with src and alt attributes](http://web.simmons.edu/~grovesd/comm244/notes/week2/html-attributes.jpg)

???

* [htmlreference.io](https://htmlreference.io/)
* [List of HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

---
class: left

# Grouping Thematically-Related Content

```html
<!-- Grouping header content or navigational links -->
<header>
  <nav>
    <ul>
      <li><a href="#">Nav Item 1</a></li>
      <li><a href="#">Nav Item 2</a></li>
      <li><a href="#">Nav Item 3</a></li>
    </ul>
  </nav>
</header>

<!-- Grouping page content using <section> element -->
<section>
  <h1>MD Seasons</h1>
  <p>Summer in Maryland is great!</p>
  <p>Winter...not so much.</p>
</section>
```

---
class: left

# Standard Web Image Formats

### jpg/jpeg (`my-image.jpg`)
### gif (`my-image.gif`)
### png (`my-image.png`)
### svg (`my-image.svg`)

---
class: left, middle

> .red-text[Raster images] are defined using a .red-text[grid of pixels] — a raster image file contains information showing exactly where each pixel is to be placed, and exactly what color it should be. Popular web raster formats include, .red_text[PNG (.png)], .red_text[JPEG (.jpg)], and .red-text[GIF (.gif.)]

<cite>--Mozilla Developer Network</cite>

---
class: left, middle

> .red_text[Vector images] are defined using algorithms — a vector image file contains shape and path definitions that the computer can use to work out what the image should look like when rendered on the screen. The .red_text[SVG format] allows us to create powerful vector graphics for use on the Web.

<cite>--Mozilla Developer Network</cite>

---
class: left

# Graphics Interchange Format (GIF)

### Maximum of 256 colors
### Flat colors, hard edges (logos or simple illustrations)
### Preserves transparency
### Can be animated

---
class: left

# Joint Photographic Experts Group (JPG or JPEG)

### Photographs
### Images with smooth color blends
### Supports CMYK, RGB (millions of colors)
### Does NOT preserve transparency

---
class: left

# Portable Network Graphics (PNG)

### Happy medium between GIF and JPG
### Contain any image type (photos, logos, illustrations, etc.)
### Especially efficient for storing images with flat colors
### Allows multiple levels of transparency

---
name: img-svg

# Scalable Vector Graphics (SVG)

### Markup language for describing two-dimensional vector graphics
### SVG is to graphics what HTML is to text
### Can be created and edited with any text editor
### Can be searched, indexed, scripted, and compressed
### Scalable, very small file size

---
class: left

# Which Format to Choose?

![Image format selection](../assets/img-selection-process.png)

???

[Google Web Fundamentals: Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)

[Sitepoint: GIF, PNG, JPG. Which One To Use?](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)

---
name:
class: left

# Exercise: Zeldman Article Markup

### ➡️ [Go to Exercise](https://github.com/betamore/fewd-html-exercise-1)

# Exercise: HTML Structure, Image, and Link Practice

### ➡️ [Go to Exercise](https://github.com/betamore/fewd-html-exercise-2)
