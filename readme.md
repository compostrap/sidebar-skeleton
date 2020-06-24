<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/50230834?s=400&u=3551f498f489486fb0ee563171d5fb2d43892a17&v=4" width="100" alt="logo">
</p>

<h3 align="center">Compostrap</h3>
<p align="center">Simple and fast components build on Bootstrap 4</p>

## Sidebar skeleton
Simple and fast sidebar skeleton.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/sidebar-skeleton/blob/master/license.md)
[![npm version](https://badge.fury.io/js/sidebar-skeleton-compostrap.svg)](https://badge.fury.io/js/sidebar-skeleton-compostrap)
[![Build Status](https://travis-ci.org/compostrap/sidebar-skeleton.svg?branch=master)](https://travis-ci.org/compostrap/sidebar-skeleton)
[![CodeFactor](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton/badge)](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton)

## Installation
```
npm install --save sidebar-skeleton-compostrap
```

## Built on
- [Bootstrap 4](https://getbootstrap.com)
- [jQuery](https://jquery.com)

## Demo
[https://compostrap.github.io/skeleton](https://compostrap.github.io/skeleton)

## Introduction
Simple and fast sidebar skeleton is build on Bootstrap. So you should be aware of how Bootstrap itself is used.
The advantage is also knowledge of sass, npm, grunt.

## See the html template code
[https://raw.githubusercontent.com/compostrap/sidebar-skeleton/master/demo.html](https://raw.githubusercontent.com/compostrap/sidebar-skeleton/master/demo.html)

## Customize sidebar when navbar is used
When we use navbar, we extend the class called **wrapper**

| Navbar       | Class                  |
| ------------ | ---------------------- |
| unused       | `wrapper`              |
| Used         | `wrapper-navbar-used`  |
| Used (fixed) | `wrapper-navbar-fixed` |

## Other class
Optional classes as needed.

| Description                  | Class                        |
| ---------------------------- | ---------------------------- |
| Right top rounded in sidebar | `sidebar-rounded-top-right`  |
| Fixed menu in sidebar        | `sidebar-menu-fixed`         |

## Overview of sidebar background colors
Colors are the same as bootstrap. Add more colors in [colors.scss](https://github.com/compostrap/sidebar-skeleton/blob/master/scss/themes/_colors.scss)

| Color                                                               | Class               |
| ------------------------------------------------------------------- | ------------------- |
| ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff`  | `sidebar-bg-white`  |
| ![#f8f9fa](https://placehold.it/15/f8f9fa/000000?text=+) `#f8f9fa`  | `sidebar-bg-light`  |
| ![#212529](https://placehold.it/15/212529/000000?text=+) `#212529`  | `sidebar-bg-dark`   |
| ![#007bff](https://placehold.it/15/007bff/000000?text=+) `#007bff`  | `sidebar-bg-blue`   |
| ![#6f42c1](https://placehold.it/15/6f42c1/000000?text=+) `#6f42c1`  | `sidebar-bg-purple` |
| ![#e83e8c](https://placehold.it/15/e83e8c/000000?text=+) `#e83e8c`  | `sidebar-bg-pink`   |
| ![#dc3545](https://placehold.it/15/dc3545/000000?text=+) `#dc3545`  | `sidebar-bg-red`    |
| ![#fd7e14](https://placehold.it/15/fd7e14/000000?text=+) `#fd7e14`  | `sidebar-bg-orange` |
| ![#28a745](https://placehold.it/15/28a745/000000?text=+) `#28a745`  | `sidebar-bg-green`  |
| ![#20c997](https://placehold.it/15/20c997/000000?text=+) `#20c997`  | `sidebar-bg-teal`   |
| ![#17a2b8](https://placehold.it/15/17a2b8/000000?text=+) `#17a2b8`  | `sidebar-bg-cyan`   |

## jQuery toggle
If you would like to have your own toggle button visible at all resolutions, we need to change the class in [sidebar.js](https://github.com/compostrap/sidebar-skeleton/blob/master/dist/js/sidebar.js)

| Description              | Class                     |
| ------------------------ | ------------------------- |
| Visible in small devices | `sidebar-toggle`          |
| Visible all resolutions  | `sidebar-toggle-visible`  |
