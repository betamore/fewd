class: center, middle

# Intro to Front End Build Tools

## Gulp

---

name: 11-why-use-build-tools
class: center

#Why Use Front End Build tools

>Tools like Gulp are often referred to as "build tools" because they are tools for running the tasks for building a website.

<cite>-- Zell Liew</cite>

---

name: 11-what-do-they-do
class: center

# How Does Gulp Help You?

### - Spin up a local web server
### - Reloading the browser automatically whenever a file is saved
### - Using preprocessors like Sass or LESS
### - Optimizing assets like CSS, JavaScript, and images

---

name: 11-install-gulp

# Getting Started

Install Gulp globally
```shell
$ npm install gulp -g
```
Create new project
```shell
$ mkdir new-gulp-project
$ cd new-gulp-project
```

```zsh
$ npm init
```


???

* [CSS Tricks: Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)
* [Gulp.js](http://gulpjs.com/)
* [Grunt for People Who Think Things Like Grunt are Weird and Hard](https://24ways.org/2013/grunt-is-not-weird-and-hard/)

---

name: 11-package-json

#What is This?

```javascript
{
  "name": "new-gulp-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
It's just a `package.json` file

It stores information about the project, including _dependencies_

Gulp is an example of a dependency

???
[npm package.json docs](https://docs.npmjs.com/files/package.json)

---

name: 11-install-gulp-as-dev-dependency

# Install Gulp in project

Add Gulp via the command line
```shell
npm install gulp --save-dev
```

`--save-dev` adds Gulp as dev dependency in `package.json`

---

name: 11-now-were-ready-to-do-some-stuff

# Now We're Ready to Do Some Stuff
Create a `gulpfile.js`
```shell
$ touch gulpfile.js
```

---

name: 11-basic-gulp-task

# Basic Gulp Task

Require Gulp in gulpfile.js
```javascript
var gulp = require('gulp');
```

Basic Gulp task syntax

```javascript
gulp.task('task-name', function() {
  // Do some things
});
```

---

name: 11-basic-example

#Super Basic Example

```javascript
gulp.task('hello', function() {
  console.log('Hello Jr Web Developers');
});
```
```shell
$ gulp hello
```

Should return something like this

```zsh
[14:11:32] Using gulpfile ~/Sites/jrwebdev/new-gulp-project/gulpfile.js
[14:11:32] Starting 'hello'...
hello world
[14:11:32] Finished 'hello' after 217 μs
```

---

name: 11-a-bit-more-complex

# A Bit More Complex

```javascript
gulp.task('task-name', function () {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})
```
Gulp tasks can accept 2 methods — `gulp.src` and `gulp.dest.`

`gulp.src` tells the Gulp task what files to use for the task
`gulp.dest` tells Gulp where to output the files once the task is completed

---

name: 11-convert-sass-into-css-1

# Convert Sass into CSS

Add the Sass gulp plugin to the dev dependencies via command line

```shell
$ npm install gulp-sass --save-dev
```

Require gulp-sass in gulpfile.js

```javascript
var sass = require('gulp-sass');
```

---

name: 11-convert-sass-into-css-2

#Convert Sass into CSS

We'll change `task-name` to `sass` and add `sass()` in place of `aGulpPlugin`

```javascript
gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('destination'))
});
```

We also need to specify the source files for `gulp.src`

And the destination for `gulp.dest`

```javascript
gulp.task('sass', function(){
  return gulp.src('scss/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css/'))
});
```

???

* [Sass Basics](http://sass-lang.com/guide)

---

name: 11-testing

# Testing........

```css
.testing {
  width: percentage(1/2);
}
```

Run

```shell
$ gulp sass
```

```zsh
gulp sass                                                                                                                         6.0.0 ⬢  66% (1:43) 
[14:27:34] Using gulpfile ~/Sites/jrwebdev/new-gulp-project/gulpfile.js
[14:27:34] Starting 'sass'...
[14:27:34] Finished 'sass' after 20 ms
```

Gulp should have created a `main.css` file in the `css/` folder

```css
.testing {
  width: 50%; }
```

---

name: 11-wathcing-sass-files

# Watching for File Changes

Gulp has a built in `watch` method

Bais `gulp.watch` syntax

```javascript
gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
```

Just replace the `files to watch` with our `gulp.src` files and add the `sass` task to the array

```javascript
gulp.watch('scss/main.scss', ['sass']);
```

We'll probably want to watch multiple files at once though, so it would be better to group several `gulp.watch` tasks in a single `gulp.task`

```javascript
gulp.task('watch', function(){
  gulp.watch('scss/main.scss', ['sass']);
  // Other watchers
})
```

---

name: 11-watching-file-changes-2

# Watching Sass Files

Run

```zsh
$ gulp watch
```

```zsh
gulp watch                                                                                                                        6.0.0 ⬢  77% (1:12) 
[14:45:15] Using gulpfile ~/Sites/jrwebdev/new-gulp-project/gulpfile.js
[14:45:15] Starting 'watch'...
[14:45:15] Finished 'watch' after 13 ms
```

And then if we change a file.....

```zsh
gulp watch                                                                                                                        6.0.0 ⬢  77% (1:12) 
[14:45:15] Using gulpfile ~/Sites/jrwebdev/new-gulp-project/gulpfile.js
[14:45:15] Starting 'watch'...
[14:45:15] Finished 'watch' after 13 ms
[14:45:42] Starting 'sass'...
[14:45:42] Finished 'sass' after 96 ms
```

---

name: 11-live-reloading-with-browser-sync

# Live Reloading with BrowserSync

Install BrowserSync

```zsh
$ npm install browser-sync --save-dev
```

And require BrowserSync in `gulpfile.js`

```zsh
var browserSync = require('browser-sync');
```

Create a basic BrowserSync task

```javascript
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
```

???

* [BrowserSync](https://www.browsersync.io/)
* [BrowserSync + Gulp.js](https://www.browsersync.io/docs/gulp)

---

name: 11-live-reloading-with-browser-sync-2

# Live Reloading with BrowserSync

Change our `sass` task so BrowserSync can inject new css styles whenever the `sass` task is run

```javascript
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
```

---

name: 11-this-can-be-better

# This can be better

Instead of opening 2 terminal windows to run `gulp watch` and `gulp browserSync` separately we can add `browserSync` to our `gulp.watch` task

```javascript
gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
  // ...
})
```

---

name: 11-this-can-be-better-2

# This can be better

```javascript
gulp.task('watch', ['browserSync'], function (){
  gulp.watch('scss/main.scss', ['sass']);
  // Other watchers
})
```

We want to make sure `sass` runs before `watch` so the CSS will already be the latest whenever we run a Gulp command

```javascript
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/main.scss', ['sass']);
  // Other watchers
});
```

---

name: 11-this-can-be-better-3

# This can be better

```zsh
gulp watch                                                                                                                    ✘  6.0.0 ⬢  89% (3:50) 
[16:31:51] Using gulpfile ~/Sites/jrwebdev/new-gulp-project/gulpfile.js
[16:31:51] Starting 'browserSync'...
[16:31:51] Finished 'browserSync' after 93 ms
[16:31:51] Starting 'sass'...
[BS] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
    External: http://192.168.39.183:3000
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.39.183:3001
 ---------------------------------------
[BS] Serving files from: ./
[16:31:52] Finished 'sass' after 175 ms
[16:31:52] Starting 'watch'...
[16:31:52] Finished 'watch' after 17 ms
```

---

name: 11-but-wait-theres-more

# But Wait, There's More

We can add other file types to our watch list, and BrowserSync will reload if we change them

```javascript
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/main.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*.js', browserSync.reload);
});
```

The `*` pattern is a wildcard. Here it will watch any file that with a `.html` or `.js` extension.
