class: center, middle

# Unit 1
## Intro to Front-End Web Development

<iframe src="https://giphy.com/embed/zrdUjl6N99nLq" width="480" height="380" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---
class: left

# Welcome to Betamore FEWD Spring 2019 🙌
### Zac Heisey
### zheisey@gmail.com

---
class: left

# Expectations for this Course

## Sincere, not serious.

### This is an interactive course.

### There will be uncomfortable moments.

### Think critically, ask questions, and help each other.

### Take responsibility for your learning!

---
class: left

# Design vs. Developer

## What is a Web Designer?

* Traditionally someone with a graphic design background
* Many early web designers came from the world of print design
* Strong grasp of color, typography, space, audience and user experience
* Tools of the Trade: Photoshop, Illustrator, InDesign, Sketch
* [Should designers learn to code?](http://www.webdesignerdepot.com/2015/04/should-designers-learn-to-code/) (Spoiler Alert: HELL YES THEY SHOULD!)

## What is a Front-End Web Developer?

* That's us!
* Builds websites from the ground up, (mostly) by hand
* Typically self-taught or CS background
* Clean, semantic code
* Tools of the Trade: Text Editor, Browser Dev Tools, HTML, CSS, JavaScript

---
class: left

# Let's Get Real!

![Real web designers write code. Always have, always will.](../assets/zeldman-web-designer-tweet.png)

---
class: left

# Ethical Web Development

## ethicalweb.org

* Web apps should work for everyone
* Web apps should work everywhere
* Web apps should respect a user's privacy and security
* Web developers should be considerate of their peers

---
class: left

# Cornerstones of the Web ~

## HTML
`Structural layer`
## CSS
`Presentational layer`
## JavaScript
`Behavioral layer`

???

HyperText Markup Language (aka HTML -> `/index.html`)
* HTML describes the structure of web pages semantically (giving it meaning)
* Therefore HTML is a markup language vs a programming language

Cascading Style Sheets (aka CSS -> `/main.css`)
* Style sheet language for formatting markup languages
* Enables the separation of content and presentation

JavaScript (aka JS -> `/main.js`)
* High level, interpreted programming language derived from C
* Not to be confused with the Java programming language
* Supported by all modern web browsers without plugins
* Moved out of the browser in recent years
* Now also used for the development of desktop and mobile apps and games

## Learn More

* [HTML on Wikipedia](https://en.wikipedia.org/wiki/HTML)
* [CSS on Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript on Wikipedia](https://en.wikipedia.org/wiki/JavaScript)

---
class: left

# The Web is Cake ~

> Think of your web pages as cakes. A .red-text[solid foundation of markup], a .red-text[tasteful layer of style], and an .red-text[appropriate application of JavaScript] make for a well - and responsibly - built website.

<cite>-- Jason Garber (sixtwothree.org)</cite>

???

[The Web is Cake](http://sixtwothree.org/posts/the-web-is-cake)

[Designing Experience Layers](http://sixtwothree.org/posts/designing-experience-layers)

---
class: left

# Exercise: Web Design in 4 Minutes

### ➡️ [Go to Exercise](https://jgthms.com/web-design-in-4-minutes/)

---
class: left

# Internet Infrastructure ~

## HTTP(s) (Hypertext Transfer Protocol)
## DNS (Domain Name System)
## Domain Names
## Browsers
## Servers

???

## Learn More

* [HTTP on Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* [How DNS Works](https://howdns.works/)

---
class: left

# Browser + Server Interaction ~
### (In a Nutshell)

![Browser Server Interaction](https://www.serverwatch.com/img/browser2server.gif)

---
class: left

# Browser Landscape

## Desktop

<ul class="flex-container">
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/archive/chrome_12-48/chrome_12-48_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/edge/edge_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/safari/safari_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/firefox/firefox_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/opera/opera_64x64.png">
  </li>
  <li class="flex-item">v73</li>
  <li class="flex-item">v18</li>
  <li class="flex-item">v12</li>
  <li class="flex-item">v66</li>
  <li class="flex-item">v58</li>
</ul>

## Mobile

<ul class="flex-container">
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/safari-ios/safari-ios_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/archive/chrome_12-48/chrome_12-48_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/opera-mini/opera-mini_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/edge-tile/edge-tile_64x64.png">
  </li>
  <li class="flex-item">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/firefox/firefox_64x64.png">
  </li>
</ul>

???

* [Can I use...browser support tables for modern web technologies](https://caniuse.com)
* [Browser Version Check via Updatemybrowser](https://updatemybrowser.org/)

---
class: left

# A Hostile Development Environment

### Any device
### Any display
### Any location (language)
### Any connection (slow or fast)
### Any browser
### Cannot make assumptions about setup or technical ability

---
class: left

# So How Do We Keep Up?

<iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/JIX9t2j0ZTN9S">via GIPHY</a></p>

---
class: left

# We Get Locked and Loaded

<iframe src="https://giphy.com/embed/3ofT5CFEsj3ynCjeww" width="480" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/filmeditor-home-alone-christmas-movies-3ofT5CFEsj3ynCjeww">via GIPHY</a></p>

---
class: left

# Text Editors

### [Atom](https://atom.io/)
### [SublimeText](https://www.sublimetext.com/)
### [Visual Studio Code](https://code.visualstudio.com/)

---
class: left

# Browser Developer Tools ~

### Chrome DevTools
### Edge Developer Tools
### Firefox Developer Tools
### Safari Web Inspector

**Open Up DevTools:**
* `Command + Option + I` (on Mac) or `Control + Shift + I` (on Windows)
* Right Click > Inspect

???

## Learn More

* [Chrome DevTools Overview](https://developer.chrome.com/devtools)
* [Meet the Microsoft Edge Developer Tools](https://dev.windows.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/)
* [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
* [Safari Web Inspector Guide](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)

---
class: left

# Command Line Basics ~

## OUTLINE SOME BASIC COMMAND LINE STUFF HERE:
- `cd`
- `mkdir`
- `touch`
- etc.

???

* [Command Line 101](https://www.git-tower.com/learn/git/ebook/command-line/appendix/command-line-101)
* [Command Line Crash Course](http://cli.learncodethehardway.org/book/)
* [The designer’s guide to the OSX command prompt](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/)
* [Introduction to the Mac OS X Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

---
class: left

# Terminal Emulators

## Hyper (macOS, Windows, Linux)
## iTerm2 (macOS)
## cmder (Windows)

---
class: left

# Setting Up Your Local Dev Environment ~

1) Open your terminal and check version / install Xcode Command Line Tools:

```bash
# check if Xcode Command Line Tools are already installed
$ xcode-select --version

# if not, install them
$ xcode-select --install

```

2) Install Homebrew (Mac only):

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

3) Install the terminal emulator of your choice via installer (e.g. https://hyper.is/).

4) Open your new terminal (Hyper, etc.) and install Node and NPM:

```bash
$ brew install node
```

???

Install ALL the things
* [Xcode Command Line Tools](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)
* [Homebrew (Mac only)](https://brew.sh/)
* [Node & NPM on Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)
* [Node & NPM on Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows)

Other stuff (optional)
* [Customize your `bash` prompt](https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html)
* [Install YADR Dotfiles (includes zsh, CL shortcuts, etc.)](https://github.com/skwp/dotfiles)
* If necessary, update your default shell from `bash` to `zsh` (Hyper > Preferences > Shell)
* If updates don't appear to be working, try quitting and restarting your terminal
