class: center, middle

# Unit 2
## Version Control with Git & GitHub

<img src="https://cdn-images-1.medium.com/max/1600/1*mtsk3fQ_BRemFidhkel3dA.png" width="70%">

---
class: left

# What the Heck is Git?

## An open source program for tracking changes in text files over time

![Git Basics ](../assets/git-basics.png)

---
class: left

# Up and Running with Git ~

```bash
# check git version

$ git --version
```

```bash
# list content of global git configuration file (~/.gitconfig)

$ git config --list
```

???

* [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---
class: left

# Configure Git Globally ~

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

$ git config --global core.editor "brackets -n -w"
```

???

* [Associating text editors with Git](https://help.github.com/articles/associating-text-editors-with-git/)

---
class: left

# Creating Git Repositories: Method 1

### Create a new local git repo from scratch

```bash
# Create & initialize a new empty git repository

$ git init my-project
```

```bash
# Turn existing project folder into a git repository

$ cd path/to/project/folder
$ git init
```

---
name: clone-repository

# Creating Git Repositories: Method 2 ~

### Download an existing git repo and its entire version history

```bash
# Create a new empty directory

$ mkdir betamore
```

```bash
# Clone a repository into your new directory

$ cd ~/betamore
$ git clone https://github.com/betamore/fewd.git
```

### Let's try this one ☝️

???

Think of a **repository** as a kind of database where your VCS (version control system) stores all of the versions and metadata that accumulate in the course of your project. In Git, the repository is just a simple hidden folder named `.git` in the root directory of your project.

---
class: left

# Basic Workflow of Version Control

![Git Stage and Commit](../assets/git-add-commit.png)

---
class: left

# Git Basic Workflow

1) Use the `git status` command to get a list of all changes you've made since the last commit: which files did you change? Did you create any new ones or delete some old ones?

```bash
# List all new or modified files
$ git status
```

2) Next, tell Git which of your local changes you want to include in your next commit. **Just because a file was changed doesn't mean it will be part of the next commit!** Instead, you have to **explicitly decide which changes you want to include**. You add changed files to the **staging area** using the `git add` command.

```bash
# Add file(s) to staging area
$ git add index.html
```

---
class: left

# Git Basic Workflow (cont.)

3) If you feel you've reached a **noteworthy state**, it's time to wrap up your changes in a **commit** with the `git commit` command. A **commit** is a wrapper for a specific set of changes. The author of a commit has to comment what he/she did in a short **commit message** like so: `git commit -m "descriptive commit message goes here"`.

```bash
# Commit your changes and include a descriptive comment
$ git commit -m "fix header"
```

Every set of changes implicitly creates a new, different version of your project. Therefore, **every commit marks a specific version**. It's a **snapshot** of your complete project at that specific point in time. Git knows exactly how all of your files and directories looked at the point of each commit and can therefore be used to restore the project to that specific state.

---
class: left

# What Makes a Good Commit? ~

* Commit only related changes (the staging area is your friend)
* Commit only completed work
* Commit only tested work
* Write good commit messages

## Commit Often!

A commit should only wrap related changes. For example, fixing two different bugs should produce (at the very least) two separate commits. Small commits that only contain one topic make it easier for other members of your team to understand the changes - and to possibly undo them if something went wrong.

???

* [What makes a good commit?](https://www.git-tower.com/learn/git/ebook/command-line/basics/working-on-your-project)
* [Undo (almost) anything with Git](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/)
* [Numerous undo possibilities in Git](https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/)

---
class: left

# Git Branches ~

![Git Branches](../assets/git-branches-hero.svg)

## A parallel version of a repository

???

* [Drupal Repo Diagram](https://www.drupal.org/files/repositorydiagram.png)
* [A comprehensive introduction to Git branches](https://www.atlassian.com/git/tutorials/using-branches)

---
class: left

# What is a Git Branch?

### A branch is a virtual copy of your project -- .red-text[a project within a project] -- where you can make commits freely, in isolation from whatever else may be happening in your repository.

---
class: left

![Git Feature Branches](../assets/git-feature-branches.svg)
### Working in different contexts

---
class: left

# Working with Git Branches ~

List all branches in current repository

```bash
$ git branch
```

Create new branch

```bash
$ git branch my-new-feature
```

Switch to branch

```bash
$ git checkout my-new-feature
```

Delete a branch

```bash
$ git branch -d my-new-feature
```

???

* [Git Tower: Working with Branches](https://www.git-tower.com/learn/git/ebook/command-line/branching-merging/working-with-branches#start)
* [Delete a branch (local or remote)](https://makandracards.com/makandra/621-git-delete-a-branch-local-or-remote)

---
class: left

# Git Branches

### Fast-forward merge: before merging

![Git fast-forward merge before](../assets/git-merge-fast-forward-before.svg)

---
name: git-merge-fast-forward-after
class: left

# Git Branches

### Fast-forward merge: after merging

![Git fast-forward merge after](../assets/git-merge-fast-forward-after.svg)

---
class: left

# Exercise: Version Control with Git

1) Create a new directory _inside_ of your `/betamore` directory (via command line) and name it `git-exercise`

2) Create an empty `index.html` file in your new directory (via command line)

3) Create `main.css` and `main.js` files and organize them into appropriate sub-directories

4) Put your project under version control using .red-text[Git]

5) Make arbitrary changes to **all 3 files** and .red-text[commit] these changes individually

6) Create a .red-text[new branch] named `feature1` and make **3 commits** on it

7) .red-text[Merge] `feature1` into `master` and .red-text[delete] the `feature1` branch

---
class: left

# GitHub ~

## A social and user interface built on top of Git

### Let's create our [GitHub](https://github.com/) accounts 🤓

???

* [GitHub Help](https://help.github.com/)
* [GitHub Glossary](https://help.github.com/articles/github-glossary/)

---
class: left

# Making a Pull Request ~

### Developer collaboration on GitHub, GitLab, Bitbucket, etc.

> In their simplest form, pull requests are a mechanism for a developer to notify team members that they have completed a feature.

<cite>-- Atlassian Git Tutorial</cite>

???

* [Making a Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request)

---
class: left

# More Than a Notification

### Discuss the proposed feature (post feedback)
### Tweak the feature by pushing follow-up commits
### All tracked within the pull request

---
class: left

# Anatomy of a Pull Request (aka PR)

### Requesting that another developer (the project maintainer) _pulls_ a branch from your repository into their repository requires four pieces of information:

* **Source Repository** (source repo of PR)
* **Source Branch** (source branch of PR)
* **Destination Repository** (receiving repo of PR)
* **Destination Branch** (receiving branch of PR)

### [A Visual Guide to Push/Pull Requests](../assets/push-pull-graphic.jpg)

---
name: pull-request-exercise

# Exercise: GitHub Pull Request

### ➡️ [Go to Exercise](https://github.com/betamore/fewd-pull-request-exercise)
