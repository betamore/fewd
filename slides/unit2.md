name: unit-2
class: center, middle

# Unit 2
## The Local Development Environment

---
name: text-editors
class: center, middle

# Text Editors
### Atom
### SublimeText
### Visual Studio Code

---
name: browser-developer-tools
class: center, middle

# Browser Developer Tools
### Chrome DevTools
### Edge Developer Tools
### Firefox Developer Tools
### Safari Web Inspector

???
## Learn more

* [Chrome DevTools Overview](https://developer.chrome.com/devtools)
* [Meet the Microsoft Edge Developer Tools](https://dev.windows.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/)
* [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
* [Safari Web Inspector Guide](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)

---
name: command-line-basics
class: center, middle

# Command Line Basics

![Command Line Basics](../assets/terminal.svg)

???
## Learn more

* [Command Line 101](https://www.git-tower.com/learn/git/ebook/command-line/appendix/command-line-101)
* [Command Line Crash Course](http://cli.learncodethehardway.org/book/)
* [The designer’s guide to the OSX command prompt](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/)
* [Introduction to the Mac OS X Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

---
name: terminal-emulators
class: center, middle

# Terminal Emulators

## - iTerm2 (Terminal replacement on Mac)
## - HyperTerm (Mac only for now)
## - cmder (a must for Windows)

---
name: local-server
class: center, middle

# Spinning Up a Local Server

## Two Basic Methods:
1. From your local file system:
  * Navigate to the desired file (file could be html, css, js, img, etc.)
  * Right click the file > Open With > Chrome/Safari/Firefox/other browser of choice
2. From the Command Line:
  * Install [node.js](http://nodejs.org/download/)
  * Install npm package globally > `npm -g install node-static`
  * Go to the directory you want to serve locally
  * Run the server > `static`

???
## Learn More

* [Intro to Web Servers by Chris Uehlinger](http://chrisuehlinger.com/StaticWebSiteTutorial/#/)
* [NPM node-static information](https://www.npmjs.com/package/node-static)

---
name: version-control-with-git
class: center, middle

# Version Control with Git

## An open source program for tracking changes in text files

???
## Learn more

* [Code School: Try Git](https://try.github.io)

---
name: tracking-changes-to-files-over-time
class: center

# Tracking changes to files over time

![Git Basics ](../assets/git-basics.png)

???
Slide image by [Jonathan McGlone](http://jmcglone.com/guides/github-pages/)

---
name: configure-all-local-repositories
class:

# Configure all local repositories

## Set user info

```bash
$ git config --global user.name "full name"

$ git config --global user.email "email address"
```

## Set default text editor

```bash

$ git config --global core.editor "atom --wait"

$ git config --global core.editor "subl -n -w"

```

???
## Learn more

[Associating text editors with Git](https://help.github.com/articles/associating-text-editors-with-git/)

---
name: create-repositories
class:

# Create repositories

### New local repository

```bash
$ git init [project-name]
```

```bash
$ cd path/to/project/folder
$ git init
```

### Download a repository and its entire version history

```bash
$ git clone [url]
```

```bash
$ cd ~/Desktop/betamore_projects
$ git clone https://github.com/betamore/fewd.git
```

???
## Learn more

Think of a **repository** as a kind of database where your VCS stores all the versions and metadata that accumulate in the course of your project. In Git, the repository is just a simple hidden folder named ".git" in the root directory of your project.

---
name: git-ignore-local
class:

# Ignoring files locally

### Create a .gitignore file in your project root

```bash
$ cd path/to/project/folder
$ touch .gitignore
```

### .gitignore is .red-text[not] recursive

```bash
$ git rm --cached [file name]
```

???
## Learn more

[GitHub Help: Ignoring Files](https://help.github.com/articles/ignoring-files/)

[Common .gitignore configurations](https://gist.github.com/octocat/9257657)

[Create useful .gitignore files for your project](https://www.gitignore.io)

---
name: git-ignore-global
class:

# Ignoring files globally

### Create a .gitignore file in your home directory

```bash
~ $ ls -a
~ $ atom .gitignore
```

### Sample .gitignore file

```bash
# OSX
.DS_Store
._*
.Spotlight-V100
.Trashes

# Windows
Thumbs.db
Desktop.ini
```

---
name: basic-workflow-of-version-control
class: center

# Basic workflow of version control

![Git Stage and Commit](../assets/git-add-commit.png)

???
## Learn more

Use the **"status"** command to get a list of all the changes you performed since the last commit: which files did you change? Did you create any new ones or deleted some old ones?

Next, you tell Git which of your local changes you want to wrap up in the next commit. **Only because a file was changed doesn't mean it will be part of the next commit!** Instead, you have to **explicitly decide which changes you want to include**. You add them to the so-called **"staging area."**


If you feel you've reached a **noteworthy state**, then it's time to wrap up your changes in a **commit.**

A **commit** is a wrapper for a specific set of changes. The author of a commit has to comment what he did in a short **"commit message."**

Every set of changes implicitly creates a new, different version of your project. Therefore, **every commit also marks a specific version**. It's a **snapshot** of your complete project at that certain point in time. The commit knows exactly how all of your files and directories looked and can therefore be used to restore the project to that certain state.


Source: [git-tower.com/learn/git](https://www.git-tower.com/learn/git/ebook/command-line/basics/basic-workflow#start)

Slide image from [devopscube.com](http://devopscube.com/git-basics-every-developer-and-administrator-should-know/)

---
name: git-basic-workflow
class:

# Git basic workflow

### list all new or modified files

```bash
$ git status
```

### add file(s) to staging area

```bash
$ git add [file name]
```

### record project snapshot in version history

```bash
$ git commit -m [descriptive message]
```

???

---
name:good-commit
class: center

# What makes a good commit?

### Commit only related changes (the staging area is your friend)
### Commit only completed work
### Commit only tested work
### Write good commit messages

# Commit often

???
## Learn more

[What makes a good commit?](https://www.git-tower.com/learn/git/ebook/command-line/basics/working-on-your-project)

A commit should only wrap related changes: fixing two different bugs should produce (at the very least) two separate commits. Small commits that only contain one topic make it easier for other members of your team to understand the changes - and to possibly undo them if something went wrong.
---
name: git-branches
class: center

# Git branches
![Git Branches](../assets/git-branches-hero.svg)
## A parallel version of a repository

???

[Drupal Repo Diagram](https://www.drupal.org/files/repositorydiagram.png)

[Git Tower: Working with Branches](https://www.git-tower.com/learn/git/ebook/command-line/branching-merging/working-with-branches#start)

[A comprehensive introduction to Git branches](https://www.atlassian.com/git/tutorials/using-branches)
---
name: git-branches-definition
class: center, middle

# A branch is a virtual copy of your project -- a project within a project -- where you can make commits freely, in isolation from whatever else may be happening in your repository.

---
name: git-feature-branches
class: center

![Git Feature Branches](../assets/git-feature-branches.svg)
## Working in different contexts
---
name: git-branch-commands
class:

# Git branches

### list all branches in current repository

```bash
$ git branch
```

### create new branch

```bash
$ git branch [branch-name]
```

### switch to branch

```bash
$ git checkout [branch-name]
```

???

[A comprehensive introduction to Git branches](https://www.atlassian.com/git/tutorials/using-branches)

[Git Tower: Working with Branches](https://www.git-tower.com/learn/git/ebook/command-line/branching-merging/working-with-branches#start)

---
name: git-merge-fast-forward-before
class:

# Git branches

## Fast-forward merge: before merging

![Git fast-forward merge before](../assets/git-merge-fast-forward-before.svg)
---
name: git-merge-fast-forward-after
class:

# Git branches

## Fast forward merge: after merging

![Git fast-forwad merge after](../assets/git-merge-fast-forward-after.svg)
---

name: github-intro
class: center, middle

# GitHub

## A social and user interface built on top of Git.

???
## Learn more

* [GitHub Help](https://help.github.com/)
* [GitHub Glossary](https://help.github.com/articles/github-glossary/)

---

name: exercise

# Exercise

#### - start a new website project and name it .red-text[website1]
#### - create an empty .red-text[index.html] file on the command line
#### - create .red-text[main.css] and .red-text[main.js] files and organize them in appropriate directories
#### - put your project under version control using .red-text[Git]
#### - make arbitrary .red-text[changes to all 3 files] and record these changes .red-text[individually]
#### - create a new branch off .red-text[master] by the name of .red-text[feature1] and make .red-text[3 commits] on it
#### - merge .red-text[feature1] into .red-text[master] and .red-text[delete the branch]
#### - push your project to GitHub
