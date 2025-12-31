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

Color      | Class
---------- | ------------------
| <svg width="15" height="15"><rect width="15" height="15" fill="#ffffff"/></svg> | sidebar-bg-white
| <svg width="15" height="15"><rect width="15" height="15" fill="#f8f9fa"/></svg> | sidebar-bg-light
| <svg width="15" height="15"><rect width="15" height="15" fill="#212529"/></svg> | sidebar-bg-dark
| <svg width="15" height="15"><rect width="15" height="15" fill="#007bff"/></svg> | sidebar-bg-blue
| <svg width="15" height="15"><rect width="15" height="15" fill="#6f42c1"/></svg> | sidebar-bg-purple
| <svg width="15" height="15"><rect width="15" height="15" fill="#e83e8c"/></svg> | sidebar-bg-pink
| <svg width="15" height="15"><rect width="15" height="15" fill="#dc3545"/></svg> | sidebar-bg-red
| <svg width="15" height="15"><rect width="15" height="15" fill="#fd7e14"/></svg> | sidebar-bg-orange
| <svg width="15" height="15"><rect width="15" height="15" fill="#28a745"/></svg> | sidebar-bg-green
| <svg width="15" height="15"><rect width="15" height="15" fill="#20c997"/></svg> | sidebar-bg-teal
| <svg width="15" height="15"><rect width="15" height="15" fill="#17a2b8"/></svg> | sidebar-bg-cyan

## Sidebar menu toggle
If you want your own toggle button visible at all resolutions, update the class in sidebar.js:

Description              | Class
------------------------ | ------------------------
Visible in small devices | sidebar-toggle
Visible all resolutions  | sidebar-toggle-visible
