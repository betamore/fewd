class: center, middle

# Unit 1
## Intro to Front-End Web Development

<iframe src="https://giphy.com/embed/zrdUjl6N99nLq" width="480" height="380" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---
class: left

# Welcome to Betamore FEWD Fall 2019 🙌
### Zac Heisey
### zheisey@gmail.com
### (408) 444-0546
### fewd-fall19

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

# The Web is Cake ~

> Think of your web pages as cakes. A .red-text[solid foundation of markup], a .red-text[tasteful layer of style], and an .red-text[appropriate application of JavaScript] make for a well - and responsibly - built website.

<cite>-- Jason Garber (sixtwothree.org)</cite>

???

* [The Web is Cake](http://sixtwothree.org/posts/the-web-is-cake)

* [Designing Experience Layers](http://sixtwothree.org/posts/designing-experience-layers)

---
class: left

# "Layers" of the Web ~

## HTML
`Structural layer`
## CSS
`Presentational layer`
## JavaScript
`Behavioral layer`

???

HyperText Markup Language (aka HTML -> `/index.html`)
* HTML describes the structure of web pages semantically (giving it meaning)
* HTML is a _markup_ language rather than a _programming_ language

Cascading Style Sheets (aka CSS -> `/main.css`)
* Stylesheet language for formatting markup languages
* Enables the separation of content/structure and presentation

JavaScript (aka JS -> `/main.js`)
* High-level, interpreted programming language derived from C
* Not to be confused with the Java programming language
* Supported by all modern web browsers without plugins
* Moved out of the browser in recent years (thanks to Node.js)
* Now also used for the development of desktop and mobile apps and games

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

* [HTTP on Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* [How DNS Works](https://howdns.works/)

---
class: left

# Browser + Server Interaction
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

### As front-end developers, we have to build things for the web that work on/in:

* Any device
* Any display
* Any location (language)
* Any connection (slow or fast)
* Any browser
* Cannot make assumptions about setup or technical ability

---
class: left

# So How Do We Keep Up?

<iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---
class: left

# We Get Locked and Loaded

<iframe src="https://giphy.com/embed/3ofT5CFEsj3ynCjeww" width="480" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---
class: left

# Text Editors

### [Atom](https://atom.io/)
### [SublimeText](https://www.sublimetext.com/)
### [Visual Studio Code](https://code.visualstudio.com/)
### [And tons more...](https://kinsta.com/blog/best-text-editors/)

---
class: left

# Browser Developer Tools

### [Chrome DevTools](https://developer.chrome.com/devtools)
### [Edge Developer Tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide)
### [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
### [Safari Web Inspector](https://support.apple.com/guide/safari-developer/welcome/)

---
class: left

# Exercise: Exploring the Very First Website

1) Go to http://info.cern.ch/hypertext/WWW/TheProject.html

2) Open up your browser's dev tools:
  * `Cmd + Option + I` (on Mac) or `Ctrl + Shift + I` (on Windows)
  * Right Click > Inspect

3) Change the `h1` element copy to "The World Wide Web is Awesome!"

4) Set the background color of the `dl` element to `yellow`.

---
class: left

# Terminal Emulators

## macOS
### [Hyper](https://hyper.is/)

## Windows
### [Cmder](https://cmder.net/) (full version)

---
class: left

# Setting Up Your Local Dev Environment (macOS) ~

```bash
# check if Xcode Command Line Tools are already installed
$ xcode-select --version
# if not, install them
$ xcode-select --install
```

```bash
# check if Homebrew is already installed
$ brew --version
# if not, install it
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```bash
# check if Node & npm are already installed
$ node --version
# if not, install it
$ brew install node
```

???

Install ALL the things - Mac
* [Xcode Command Line Tools](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)
* [Homebrew (Mac only)](https://brew.sh/)
* [Node & NPM on Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)
* [How to Set Up Your Mac for Web Development](https://medium.freecodecamp.org/how-to-set-up-your-mac-for-web-development-b40bebc0cac3)

Other stuff (optional)
* [Customize your `bash` prompt](https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html)
* [Install YADR Dotfiles (includes zsh, CL shortcuts, etc.)](https://github.com/skwp/dotfiles)
* If necessary, update your default shell from `bash` to `zsh` (Hyper > Preferences > Shell)
* If updates don't appear to be working, try quitting and restarting your terminal

---
class: left

# Setting Up Your Local Dev Environment (Windows) ~

* [Installing Cmder and Using Bash](https://medium.com/@alikingravi/installing-cmder-as-an-alternative-windows-command-line-tool-202b866115d9)
* [Install Node & NPM](https://blog.teamtreehouse.com/install-node-js-npm-windows)

???

Other stuff (optional)
* [Cmder README](https://github.com/cmderdev/cmder/blob/master/README.md)
* [Install and run zsh on Windows](https://gingter.org/2016/08/17/install-and-run-zsh-on-windows/)
* If necessary, update your default shell
* If updates don't appear to be working, try quitting and restarting your terminal

---
class: left

# Command Line Basics ~

* `pwd` - Print Working Directory - Shows where you are in relation to your computer's directory hierarchy.
* `cd` - Change Directory - Moves you into and out of directories.
* `ls` - List Directory - Lists out files in the current directory.
* `mkdir` - Make Directory - Creates a new directory on your computer.
* `touch` or `New-Item` - Creates an empty file in the current directory.
* `rm` - Remove - Deletes a file.
* `rmdir` - Remove Directory - Deletes a directory.
* `clear` - Clear - Clears the terminal of recent commands and outputs.

???

* [Command Line Cheatsheet](https://www.git-tower.com/learn/git/ebook/command-line/appendix/command-line-101)
* [Command Line Crash Course](https://learnpythonthehardway.org/book/appendixa.html)

---
class: left

# Exercise: Command Line Practice

1) Start from your computer's root level by entering `cd ~` in your terminal

2) Change directories so that you are at the `/Desktop` level

3) Create a new directory at this level called `test-directory`

4) Change directories again into your new `test-directory`

5) Create a new HTML file inside your `test-directory` called `page-1.html`

6) Create another HTML file called `page-2.html`

7) List the files in your `test-directory`

8) Delete `page-1.html`

9) List the files again - notice a difference?

10) Go back to the `/Desktop` level and delete your `test-directory` - run into any issues?
