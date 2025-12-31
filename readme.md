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

| Color                                                           | Class
| --------------------------------------------------------------- | -------------------
| <code>#ffffff <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #ffffff; height: 15px; width: 15px;"></span></code> | sidebar-bg-white
| <code>#f8f9fa <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #f8f9fa; height: 15px; width: 15px;"></span></code> | sidebar-bg-light
| <code>#212529 <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #212529; height: 15px; width: 15px;"></span></code> | sidebar-bg-dark
| <code>#007bff <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #007bff; height: 15px; width: 15px;"></span></code> | sidebar-bg-blue
| <code>#6f42c1 <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #6f42c1; height: 15px; width: 15px;"></span></code> | sidebar-bg-purple
| <code>#e83e8c <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #e83e8c; height: 15px; width: 15px;"></span></code> | sidebar-bg-pink
| <code>#dc3545 <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #dc3545; height: 15px; width: 15px;"></span></code> | sidebar-bg-red
| <code>#fd7e14 <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #fd7e14; height: 15px; width: 15px;"></span></code> | sidebar-bg-orange
| <code>#28a745 <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #28a745; height: 15px; width: 15px;"></span></code> | sidebar-bg-green
| <code>#20c997 <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #20c997; height: 15px; width: 15px;"></span></code> | sidebar-bg-teal
| <code>#17a2b8 <span class="ml-1 d-inline-block border circle color-border-subtle" style="background-color: #17a2b8; height: 15px; width: 15px;"></span></code> | sidebar-bg-cyan

## Sidebar menu toggle
If you want your own toggle button visible at all resolutions, update the class in sidebar.js:

Description              | Class
------------------------ | ------------------------
Visible in small devices | sidebar-toggle
Visible all resolutions  | sidebar-toggle-visible
