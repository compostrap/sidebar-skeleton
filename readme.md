## Sidebar Skeleton
Simple and fast sidebar skeleton built on Bootstrap 5.
Ideal for dashboards, admin panels, and any layout needing a responsive sidebar.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/sidebar-skeleton/blob/master/license)
[![npm version](https://badge.fury.io/js/sidebar-skeleton-compostrap.svg)](https://badge.fury.io/js/sidebar-skeleton-compostrap)
[![Build status](https://github.com/compostrap/sidebar-skeleton/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/sidebar-skeleton/actions/workflows/build.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton/badge)](https://www.codefactor.io/repository/github/compostrap/sidebar-skeleton)

## Installation
```bash
npm npm install sidebar-skeleton-compostrap
```

## Built on
- Bootstrap 5x: https://getbootstrap.com

## Demo
Live demo: https://compostrap.github.io/skeleton
HTML template code: https://raw.githubusercontent.com/compostrap/sidebar-skeleton/master/demo.html

## Introduction
Simple and fast sidebar skeleton is built on Bootstrap.
You should be familiar with Bootstrap usage and have basic knowledge of Sass, npm.

## Customize sidebar when navbar is used
When using a navbar, extend the class called wrapper:

| Navbar       | Class                |
|--------------|----------------------|
| unused       | wrapper              |
| Used         | wrapper-navbar-used  |
| Used (fixed) | wrapper-navbar-fixed |

## Other classes

| Description                  | Class                     |
|------------------------------|---------------------------|
| Right top rounded in sidebar | sidebar-rounded-top-right |
| Fixed menu in sidebar        | sidebar-menu-fixed        |

## Overview of sidebar background colors
Colors match Bootstrap.

| Color                                                    | Class             |
|----------------------------------------------------------|-------------------|
| ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) | sidebar-bg-white  |
| ![#f8f9fa](https://placehold.co/15x15/f8f9fa/f8f9fa.png) | sidebar-bg-light  |
| ![#212529](https://placehold.co/15x15/212529/212529.png) | sidebar-bg-dark   |
| ![#007bff](https://placehold.co/15x15/007bff/007bff.png) | sidebar-bg-blue   |
| ![#6f42c1](https://placehold.co/15x15/6f42c1/6f42c1.png) | sidebar-bg-purple |
| ![#e83e8c](https://placehold.co/15x15/e83e8c/e83e8c.png) | sidebar-bg-pink   |
| ![#dc3545](https://placehold.co/15x15/dc3545/dc3545.png) | sidebar-bg-red    |
| ![#fd7e14](https://placehold.co/15x15/fd7e14/fd7e14.png) | sidebar-bg-orange |
| ![#28a745](https://placehold.co/15x15/28a745/28a745.png) | sidebar-bg-green  |
| ![#20c997](https://placehold.co/15x15/20c997/20c997.png) | sidebar-bg-teal   |
| ![#17a2b8](https://placehold.co/15x15/17a2b8/17a2b8.png) | sidebar-bg-cyan   |

## Sidebar menu toggle
If you want your own toggle button visible at all resolutions, update the class in sidebar.js:

| Description              | Class                  |
|--------------------------|------------------------|
| Visible in small devices | sidebar-toggle         |
| Visible all resolution   | sidebar-toggle-visible |
