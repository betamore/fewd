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

## Learn More

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

* [Command Line 101](https://www.git-tower.com/learn/git/ebook/command-line/appendix/command-line-101)
* [Command Line Crash Course](http://cli.learncodethehardway.org/book/)
* [The designer’s guide to the OSX command prompt](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/)
* [Introduction to the Mac OS X Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

---
name: terminal-emulators
class: center, middle

# Terminal Emulators

## - Hyper (macOS, Windows, Linux)
## - iTerm2 (macOS)
## - cmder (a must on Windows)

---
name: setting-up-dev-environment
class:

# Setting Up Your Local Dev Environment

1) Open your default terminal and check version / install Xcode Command Line Tools:

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

---
name: version-control-with-git
class: center, middle

# Version Control with Git

## An open source program for tracking changes in text files

???

## Learn More

* [Code School: Try Git](https://try.github.io)

---
name: tracking-changes-to-files-over-time
class: center

# Tracking Changes to Files Over Time

![Git Basics ](../assets/git-basics.png)

???

Slide image by [Jonathan McGlone](http://jmcglone.com/guides/github-pages/)

---
name: install-github
class:

# Up and Running with Git

```bash
# check git version

$ git --version
```

```bash
# list content of global git configuration file (~/.gitconfig)

$ git config --list
```

???

[Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---
name: configure-all-local-repositories
class:

# Configure Git Globally

### Set user info

```bash
$ git config --global user.name "Zac Heisey"

$ git config --global user.email "zheisey@gmail.com"
```

### Set default text editor

```bash

$ git config --global core.editor "atom --wait"

$ git config --global core.editor "code --wait"

$ git config --global core.editor "subl -n -w"

```

???

## Learn More

[Associating text editors with Git](https://help.github.com/articles/associating-text-editors-with-git/)

---
name: create-local-repository

# Creating Git Repositories: Method 1

### Create a new local repository from scratch

```bash
# create & initialize a new empty git repository

$ git init my-project
```

```bash
# turn existing project folder into a git repository

$ cd path/to/project/folder
$ git init
```

---
name: clone-repository

# Creating Git Repositories: Method 2

### Download a repository and its entire version history

```bash
# create a new empty directory

$ mkdir betamore
```

```bash
# clone a repository into your new directory

$ cd ~/betamore
$ git clone https://github.com/betamore/fewd.git
```

### Let's try this one ☝️

???

## Learn More

Think of a **repository** as a kind of database where your VCS stores all the versions and metadata that accumulate in the course of your project. In Git, the repository is just a simple hidden folder named ".git" in the root directory of your project.

---
name: basic-workflow-of-version-control
class: center

# Basic Workflow of Version Control

![Git Stage and Commit](../assets/git-add-commit.png)

???

## Learn More

Use the `git status` command to get a list of all changes you've made since the last commit: which files did you change? Did you create any new ones or delete some old ones?

Next, you tell Git which of your local changes you want to wrap up in the next commit. **Just because a file was changed doesn't mean it will be part of the next commit!** Instead, you have to **explicitly decide which changes you want to include**. You add changed files to the **staging area** using the `git add` command.

If you feel you've reached a **noteworthy state**, it's time to wrap up your changes in a **commit** with the `git commit` command.

A **commit** is a wrapper for a specific set of changes. The author of a commit has to comment what he/she did in a short **commit message** like so: `git commit -m "descriptive commit message goes here"`.

Every set of changes implicitly creates a new, different version of your project. Therefore, **every commit marks a specific version**. It's a **snapshot** of your complete project at that specific point in time. Git knows exactly how all of your files and directories looked at the point of each commit and can therefore be used to restore the project to that specific state.


Source: [git-tower.com/learn/git](https://www.git-tower.com/learn/git/ebook/command-line/basics/basic-workflow#start)

Slide image from [devopscube.com](http://devopscube.com/git-basics-every-developer-and-administrator-should-know/)

---
name: git-basic-workflow
class:

# Git Basic Workflow

### List all new or modified files

```bash
$ git status
```

### Add file(s) to staging area

```bash
$ git add index.html
```

### Record project snapshot in version history

```bash
$ git commit -m "fix header"
```

---
name:good-commit
class: center

# What Makes a Good Commit?

### Commit only related changes
#### (the staging area is your friend)
### Commit only completed work
### Commit only tested work
### Write good commit messages

# Commit Often!

???

## Learn More

[What makes a good commit?](https://www.git-tower.com/learn/git/ebook/command-line/basics/working-on-your-project)

A commit should only wrap related changes: fixing two different bugs should produce (at the very least) two separate commits. Small commits that only contain one topic make it easier for other members of your team to understand the changes - and to possibly undo them if something went wrong.
---
name: git-branches
class: center

# Git Branches

![Git Branches](../assets/git-branches-hero.svg)

## A parallel version of a repository

???

[Drupal Repo Diagram](https://www.drupal.org/files/repositorydiagram.png)

[Git Tower: Working with Branches](https://www.git-tower.com/learn/git/ebook/command-line/branching-merging/working-with-branches#start)

[A comprehensive introduction to Git branches](https://www.atlassian.com/git/tutorials/using-branches)
---
name: git-branches-definition
class: center, middle

## A branch is a virtual copy of your project -- a project within a project -- where you can make commits freely, in isolation from whatever else may be happening in your repository.

---
name: git-feature-branches
class: center

![Git Feature Branches](../assets/git-feature-branches.svg)
### Working in different contexts
---
name: git-branch-commands
class:

# Git Branches

### List all branches in current repository

```bash
$ git branch
```

### Create new branch

```bash
$ git branch my-new-feature
```

### Switch to branch

```bash
$ git checkout my-new-feature
```

???

[A comprehensive introduction to Git branches](https://www.atlassian.com/git/tutorials/using-branches)

[Git Tower: Working with Branches](https://www.git-tower.com/learn/git/ebook/command-line/branching-merging/working-with-branches#start)

---
name: git-merge-fast-forward-before
class:

# Git Branches

### Fast-forward merge: before merging

![Git fast-forward merge before](../assets/git-merge-fast-forward-before.svg)
---
name: git-merge-fast-forward-after
class:

# Git Branches

### Fast forward merge: after merging

![Git fast-forward merge after](../assets/git-merge-fast-forward-after.svg)

---
name: git-version-control-exercise

# Exercise: Version Control with Git

#### 1) Create a new directory _inside_ of your `/betamore` directory (via command line) and name it .red-text[git-exercise]
#### 2) Create an empty .red-text[index.html] file in your new directory (via command line)
#### 3) Create .red-text[main.css] and .red-text[main.js] files and organize them into appropriate sub-directories
#### 4) Put your project under version control using .red-text[Git]
#### 5) Make arbitrary .red-text[changes to all 3 files] and record these changes .red-text[individually]
#### 6) Create a new branch off .red-text[master] by the name of .red-text[feature1] and make .red-text[3 commits] on it
#### 7) Merge .red-text[feature1] into .red-text[master] and .red-text[delete the branch]

---
name: github-intro
class: center, middle

# GitHub

## A social and user interface built on top of Git

### Let's create our GitHub accounts 🤓
### (and [download GitHub Desktop too](https://desktop.github.com/))


???

## Learn More

* [GitHub Help](https://help.github.com/)
* [GitHub Glossary](https://help.github.com/articles/github-glossary/)

---
name: pull-request
class: center, middle

# Making a Pull Request

### Developer collaboration on GitHub, GitLab, Bitbucket, ...

---
name: pull-request-notification
class: middle

> In their simplest form, pull requests are a mechanism for a developer to notify team members that they have completed a feature.

<cite>-- Atlassian Git Tutorial</cite>

???

[Making a Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request)

---
name: pull-request-collaboration

# More Than Notification

### - Discuss the proposed feature (post feedback)
### - Tweak the feature by pushing follow-up commits
### - All tracked within the pull request

---
name: pull-request-antonomy

# Anatomy of a Pull Request

### Requesting that another developer (the project maintainer) _pulls_ a branch from your repository into their repository

### - Source repo
### - Source branch
### - Destination repo
### - Destination branch

---
name: pull-request-antonomy

# Anatomy of a Pull Request (cont.)

### [A Visual Guide to Push/Pull Requests](http://fewd.betamore.com/assets/push-pull-graphic.jpg)

---
name: pull-request-exercise

# Exercise: GitHub Pull Request

### https://github.com/betamore/fewd-pull-request-exercise
