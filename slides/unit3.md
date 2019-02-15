name: unit-3
class: center

# Unit 3
![HTML5 Logo](../assets/html5-logo.svg)

???

[HTML5 on Wikipedia](https://en.wikipedia.org/wiki/HTML5)
---

name: jeremy-keith-html-quote
class: middle

> <span>HTML is the unifying language of the World Wide Web.</span> Using just the simple tags it contains, the human race has created an astoundingly diverse network of hyperlinked documents, from Amazon, eBay, and Wikipedia, to personal blogs and websites dedicated to cats that look like Hitler.

<cite>-- Jeremy Keith</cite>

---

name: stephen-hay-html-quote
class:

  > <span>Structured content is semantic; it's about <em>what the individual pieces of content are.</em></span><br><br>HTML, while not perfect, is now the primary way we structure content on the web. We attempt to use the markup language semantically in order to describe what each element is.

<cite>-- Stephen Hay</cite>

???
[Understanding semantics](https://tink.uk/understanding-semantics/)

---

name: stephen-hay-html-quote
class: middle

  > HTML has always been a conversation between <span>browser makers, authors, standards wonks, and other people</span> who just showed up and liked to talk about angle brackets.

<cite>-- Mark Pilgrim</cite>
---

name: html-annotate-plain-text
class: center, middle

# A Markup Language Annotates Plain Text

## HTML is the markup language of the Web

---

name: html-tags

background-image: url(../assets/html-tags.jpg)

???

Slide image from the [HTML & CSS Book](http://www.htmlandcssbook.com/sample-chapter/)

---

name: html-document-tree
class: center

# HTML Document Structure / Upside-down Family Tree

![HTML Document Tree](../assets/html-document-tree.gif)

???
* All elements contained within a given element are said to be its .red-text[descendants].
* An element that's directly contained within another element is said to be a .red-text[child] of that element.
* The containing element is the .red-text[parent].
* All elements higher up than a particular element in the tree are its .red-text[ancestors].
* Two elements with the same parent are .red-text[siblings].

---

name: html5-content-categories
class: center

# HTML5 Content Categories

### - text-level semantics (formerly inline elements)
### - grouping content (formerly block-level elements)
### - sectioning content (totally new)
### - embedded content (images, audio, video, canvas)
### - form-associated content (forms)

???

[HTML content categories on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)

[HTML5 Doctor](http://html5doctor.com/)

[htmlreference.io](https://htmlreference.io/)

[List of HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

---

name: html5-section
class:

# Grouping thematically related content

```html
<section>
  <h1>My headline</h1>
  <p>Summer in MD is great!</p>
  <p>Winter not so much.</p>
</section>
```
---
name: html5-header
class:

# Grouping of introductory or navigational aids

```html
<header>
  <nav>
    <ul>
      <li> ... </li>
      <li> ... </li>
      <li> ... </li>
    </ul>
  </nav>
</header>
```

---

name: img-format
class: center

# Web image formats

### - jpg (my-image.jpg)
### - gif (my-image.gif)
### - png (my-image.png)
### - svg (my-image.svg)

---

name: img-raster
class: middle

> .red-text[Raster images] are defined using a .red-text[grid of pixels] — a raster image file contains information showing exactly where each pixel is to be placed, and exactly what color it should be. Popular web raster formats include, .red_text[PNG (.png)], .red_text[JPEG (.jpg)], and .red-text[GIF (.gif.)]

<cite>--Mozilla Developer Network</cite>

---

name: img-vector
class: middle

> .red_text[Vector images] are defined using algorithms — a vector image file contains shape and path definitions that the computer can use to work out what the image should look like when rendered on the screen. The .red_text[SVG format] allows us to create powerful vector graphics for use on the Web.

<cite>--Mozilla Developer Network</cite>

---

name: img-gif

# Graphics Interchange Format (GIF)

### - maximum of 256 colors
### - flat colors, hard edges (logos or simple illustrations)
### - preserves transparency
### - can be animated

---

name: img-jpg

# Joint Photographic Experts Group (JPG or JPEG)

### - photographs
### - images with smooth color blends
### - supports CMYK, RGB (millions of colors)
### - does not preserve transparency

---

name: img-png

# Portable Network Graphics (PNG)

### - a little bit like the best of both worlds
### - contain any image type
### - but especially efficient for storing images with flat colors
### - allows multiple levels of transparency

---

name: img-svg

# Scalable Vector Graphics (SVG)

### - markup language for describing two-dimensional vector graphics
### - SVG is to graphics what HTML is to text
### - can be created and edited with any text editor
### - can be searched, indexed, scripted, and compressed
### - scalable, very small file size

---

name: img-format-selection
class: center

# Which format to choose?

![Image format selection](../assets/img-selection-process.png)

???

[Google Web Fundamentals: Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)

[Sitepoint: GIF, PNG, JPG. Which One To Use?](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)
