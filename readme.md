## Sidebar skeleton
Simple and fast sidebar skeleton.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/sidebar-skeleton/blob/master/license.md)
[![npm version](https://badge.fury.io/js/sidebar-skeleton-compostrap.svg)](https://badge.fury.io/js/sidebar-skeleton-compostrap)
[![Build Status](https://travis-ci.com/compostrap/sidebar-skeleton.svg?branch=master)](https://travis-ci.com/compostrap/sidebar-skeleton)
[![CodeFactor](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton/badge)](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton)

## Installation
```
npm install --save sidebar-skeleton-compostrap
```

Version 1x built on Bootstrap 4  
Version 2x built on Bootstrap 5

## Built on
- [Bootstrap](https://getbootstrap.com)

## Demo
https://compostrap.github.io/skeleton

## Introduction
Simple and fast sidebar skeleton is build on Bootstrap. So you should be aware of how Bootstrap itself is used.
The advantage is also knowledge of sass, npm, grunt.

## See the html template code
https://raw.githubusercontent.com/compostrap/sidebar-skeleton/master/demo.html

## Customize sidebar when navbar is used
When we use navbar, we extend the class called **wrapper**

| Navbar       | Class                  |
| ------------ | ---------------------- |
| unused       | `wrapper`              |
| Used         | `wrapper-navbar-used`  |
| Used (fixed) | `wrapper-navbar-fixed` |

## Other class
Optional classes as needed.

| Description                  | Class                       |
| ---------------------------- | --------------------------- |
| Right top rounded in sidebar | `sidebar-rounded-top-right` |
| Fixed menu in sidebar        | `sidebar-menu-fixed`        |

## Overview of sidebar background colors
Colors are the same as bootstrap. Add more colors in [colors.scss](https://github.com/compostrap/sidebar-skeleton/blob/master/scss/themes/_colors.scss)

| Color                                                           | Class               |
| --------------------------------------------------------------- | ------------------- |
| ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) | `sidebar-bg-white`  |
| ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/f8f9fa.png) | `sidebar-bg-light`  |
| ![#212529](https://via.placeholder.com/15/212529/212529.png) | `sidebar-bg-dark`   |
| ![#007bff](https://via.placeholder.com/15/007bff/007bff.png) | `sidebar-bg-blue`   |
| ![#6f42c1](https://via.placeholder.com/15/6f42c1/6f42c1.png) | `sidebar-bg-purple` |
| ![#e83e8c](https://via.placeholder.com/15/e83e8c/e83e8c.png) | `sidebar-bg-pink`   |
| ![#dc3545](https://via.placeholder.com/15/dc3545/dc3545.png) | `sidebar-bg-red`    |
| ![#fd7e14](https://via.placeholder.com/15/fd7e14/fd7e14.png) | `sidebar-bg-orange` |
| ![#28a745](https://via.placeholder.com/15/28a745/28a745.png) | `sidebar-bg-green`  |
| ![#20c997](https://via.placeholder.com/15/20c997/20c997.png) | `sidebar-bg-teal`   |
| ![#17a2b8](https://via.placeholder.com/15/17a2b8/17a2b8.png) | `sidebar-bg-cyan`   |

## jQuery toggle
If you would like to have your own toggle button visible at all resolutions, we need to change the class in [sidebar.js](https://github.com/compostrap/sidebar-skeleton/blob/master/dist/js/sidebar.js)

| Description              | Class                    |
| ------------------------ | ------------------------ |
| Visible in small devices | `sidebar-toggle`         |
| Visible all resolutions  | `sidebar-toggle-visible` |
