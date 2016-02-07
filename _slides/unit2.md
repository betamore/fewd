class: center, middle

# Unit 2
## Local Development Environment

---
class: center, middle

# Text Editors
### SublimeText
### Atom
### Brackets
### Visual Studio Code

---
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
name: version-control-with-git
class: center, middle

# Version Control with

## An open source program for tracking changes in text files.

???
## Learn more

* [Code School: Try Git](https://try.github.io)

---
class: center

# Tracking changes to files over time

![Git Basics ](../assets/git-basics.png)

???
Slide image by [Jonathan McGlone](http://jmcglone.com/guides/github-pages/)

---
class:

# Configure all local repositories

## Set user info

```bash
$ git config --global user.name "[full name]"

$ git config --global user.email "[email address]"
```

## Set Git default text editor

```bash

$ git config --global core.editor "atom --wait"

$ git config --global core.editor "subl -n -w"

```

???
## Learn more

[Associating text editors with Git](https://help.github.com/articles/associating-text-editors-with-git/)

---
class:

# Create repositories

### New local repository

```bash
$ git init [project-name]
```

### or

```bash
$ cd path/to/project/folder
$ git init
```

### Download a repository and its entire version history

```bash
$ git clone [url]
```

???

Think of a **repository** as a kind of database where your VCS stores all the versions and metadata that accumulate in the course of your project. In Git, the repository is just a simple hidden folder named ".git" in the root directory of your project.

---
class: center

# Basic workflow of version control

![Git Stage and Commit](../assets/git-add-commit.png)

???

Use the **"status"** command to get a list of all the changes you performed since the last commit: which files did you change? Did you create any new ones or deleted some old ones?

Next, you tell Git which of your local changes you want to wrap up in the next commit. **Only because a file was changed doesn't mean it will be part of the next commit!** Instead, you have to **explicitly decide which changes you want to include**. You add them to the so-called **"staging area."**


If you feel you've reached a **noteworthy state**, then it's time to wrap up your changes in a **commit.**

A **commit** is a wrapper for a specific set of changes. The author of a commit has to comment what he did in a short **"commit message."**

Every set of changes implicitly creates a new, different version of your project. Therefore, **every commit also marks a specific version**. It's a **snapshot** of your complete project at that certain point in time. The commit knows exactly how all of your files and directories looked and can therefore be used to restore the project to that certain state.


Source: [git-tower.com/learn/git](https://www.git-tower.com/learn/git/ebook/command-line/basics/basic-workflow#start)

Slide image from [devopscube.com](http://devopscube.com/git-basics-every-developer-and-administrator-should-know/)

---
class: center

# .red-text[Git Workflow:] Stage & Commit


???

---
class: center, middle

# GitHub

## A social and user interface built on top of Git.

???
## Learn more

* [GitHub Help](https://help.github.com/)
* [GitHub Glossary](https://help.github.com/articles/github-glossary/)
