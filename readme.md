## Sidebar Skeleton
Simple and fast sidebar skeleton built on Bootstrap 5.
Ideal for dashboards, admin panels, and any layout needing a responsive sidebar.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/sidebar-skeleton/blob/master/license.md)
[![npm version](https://badge.fury.io/js/sidebar-skeleton-compostrap.svg)](https://badge.fury.io/js/sidebar-skeleton-compostrap)
[![Build status](https://github.com/compostrap/sidebar-skeleton/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/sidebar-skeleton/actions/workflows/build.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton/badge)](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton)

## Installation
```bash
npm install --save sidebar-skeleton-compostrap
```

Version 1.x built on Bootstrap 4
Version 2.x built on Bootstrap 5

## Built on
- Bootstrap: https://getbootstrap.com

## Demo
Live demo: https://compostrap.github.io/skeleton
HTML template code: https://raw.githubusercontent.com/compostrap/sidebar-skeleton/master/demo.html

## Introduction
Simple and fast sidebar skeleton is built on Bootstrap.
You should be familiar with Bootstrap usage and have basic knowledge of Sass, npm, and optionally Grunt.

## Customize sidebar when navbar is used
When using a navbar, extend the class called wrapper:

Navbar       | Class
------------ | ----------------------
unused       | wrapper
Used         | wrapper-navbar-used
Used (fixed) | wrapper-navbar-fixed

## Other classes

Description                  | Class
---------------------------- | ---------------------------
Right top rounded in sidebar | sidebar-rounded-top-right
Fixed menu in sidebar        | sidebar-menu-fixed

## Overview of sidebar background colors
Colors match Bootstrap. Add more colors in themes/_theme.scss.

| Color | Class
| ----- | -----
| ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) | sidebar-bg-white
| ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/000000?text=+) | sidebar-bg-light
| ![#212529](https://via.placeholder.com/15/212529/ffffff?text=+) | sidebar-bg-dark
| ![#007bff](https://via.placeholder.com/15/007bff/ffffff?text=+) | sidebar-bg-blue
| ![#6f42c1](https://via.placeholder.com/15/6f42c1/ffffff?text=+) | sidebar-bg-purple
| ![#e83e8c](https://via.placeholder.com/15/e83e8c/ffffff?text=+) | sidebar-bg-pink
| ![#dc3545](https://via.placeholder.com/15/dc3545/ffffff?text=+) | sidebar-bg-red
| ![#fd7e14](https://via.placeholder.com/15/fd7e14/ffffff?text=+) | sidebar-bg-orange
| ![#28a745](https://via.placeholder.com/15/28a745/ffffff?text=+) | sidebar-bg-green
| ![#20c997](https://via.placeholder.com/15/20c997/ffffff?text=+) | sidebar-bg-teal
| ![#17a2b8](https://via.placeholder.com/15/17a2b8/ffffff?text=+) | sidebar-bg-cyan

## Sidebar menu toggle
If you want your own toggle button visible at all resolutions, update the class in sidebar.js:

Description              | Class
------------------------ | ------------------------
Visible in small devices | sidebar-toggle
Visible all resolutions  | sidebar-toggle-visible
