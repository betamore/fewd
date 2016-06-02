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

<cite>-- Stephen Hay
---

name: stephen-hay-html-quote
class: middle

  > HTML has always been a conversation between <span>browser makers, authors, standards wonks, and other people</span> who just showed up and liked to talk about angle brackets. 

<cite>-- Mark Pilgrim</cite>
---
name: html-status-taxonomy
class:

background-image: url(../assets/html5-taxonomy-status.svg)

???

Slide illustration by Mercury999 (Own work) [<a href="http://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AHTML5_APIs_and_related_technologies_taxonomy_and_status.svg">via Wikimedia Commons</a>

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

</cite>
---

name: html-semantics
class: middle

> HTML is the worst form of markup, except for all the others that have been tried.

<cite>-- Winston Churchill</cite>
---

name: html5-content-categories
class: center

# HTML5 Content Categories

### - text-level semantics (formerly inline elements)
### - grouping content (formerly block-level elements)
### - sectioning content (totally new)
### - embedded content (images, audio, video, canvas)
### - form-associated content (forms)
### ...

???

[HTML content categories on MDN.](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)

[Google Web Authoring Statistics](https://developers.google.com/webmasters/state-of-the-web/2005/#introduction)

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


