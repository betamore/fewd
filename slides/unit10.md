class: center, middle

## Unit 10
# Optimization &amp; Deployment

---
name: 10-browser-device-testing
class: center

# Browser &amp; Device Testing

### - local
### - virtual machines
### - web-based
### - actual (mobile) device

???

[IE Testing with Virtual Box and Modern.ie](http://wesbos.com/ie-testing-virtual-box/)

[Test Microsoft Edge and versions of IE6 through IE11 using free virtual machines.](https://dev.windows.com/en-us/microsoft-edge/tools/vms/)

[Browsershots](http://browsershots.org/)

[BrowserStack](https://www.browserstack.com/)

[Sauce Labs](https://saucelabs.com/)

[Responsinator Device Testing](https://www.responsinator.com/)

---
name: local-server
class:

# Spinning Up a Local Server

## Two Basic Methods
1. From your local file system:
  * Navigate to the desired file (file can be html, css, js, img, etc.)
  * Right click the file > Open With > Chrome/Safari/Firefox/other browser of choice

2. From the command line:
  * Install `node.js`
  * Install `node-static` globally with `npm install node-static -g`
  * `cd` into your project directory
  * Run the server with `static`

???

* [Intro to Web Servers by Chris Uehlinger](http://chrisuehlinger.com/StaticWebSiteTutorial/#/)
* [Install node.js and npm on macOS](https://blog.teamtreehouse.com/install-node-js-npm-mac)
* [node-static package on npm](https://www.npmjs.com/package/node-static)

---
name: 10-hostile-dev-environment
class: center

# The Web

## A Hostile Development Environment

### - any device
### - any display
### - any location (language)
### - browsing application which transmits and receives data using internet protocols
### - cannot make assumptions about setup or technical ability

---
name: 10-web-pages-cake
class: middle

> Think of your web pages  as cakes. A .red-text[solid foundation of markup], a .red-text[tasteful layer of style], and an .red-text[appropriate application of JavaScript] make for a well- and responsibly-built website.

<cite>-- Jason Garber (sixtwothree.org)</cite>

???

[The Web Is Cake](http://sixtwothree.org/posts/the-web-is-cake)

[Designing Experience Layers](http://sixtwothree.org/posts/designing-experience-layers)
