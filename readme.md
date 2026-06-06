## Sidebar Skeleton
Simple and fast sidebar skeleton built on Bootstrap 5.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/sidebar-skeleton/blob/master/license)
[![npm version](https://badge.fury.io/js/sidebar-skeleton-compostrap.svg)](https://badge.fury.io/js/sidebar-skeleton-compostrap)
[![Build status](https://github.com/compostrap/sidebar-skeleton/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/sidebar-skeleton/actions/workflows/build.yml)

## Installation
```bash
npm install sidebar-skeleton-compostrap
```

## Usage
Import the styles and initialize the components in your JavaScript entry point:

```javascript
import 'sidebar-skeleton-compostrap/sidebar.css';
import { SidebarSkeleton } from 'sidebar-skeleton-compostrap';

// Initialize both Sidebar and ThemeSwitcher
SidebarSkeleton.init();
```

Alternatively, you can initialize components individually:

```javascript
import { Sidebar, ThemeSwitcher } from 'sidebar-skeleton-compostrap';

Sidebar.init();
ThemeSwitcher.init();
```

## Built on
- [Bootstrap 5](https://getbootstrap.com)

## Demo
- [Live demo](https://compostrap.github.io/sidebar-skeleton)

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

## Sidebar themes
The sidebar supports light and dark themes via the `data-sidebar-theme` attribute.
The theme switcher (`theme-switcher.js`) automatically persists the user's choice in the browser's `localStorage`, so the selected theme is remembered on subsequent visits.

| Theme | Attribute                    |
|-------|------------------------------|
| Light | `data-sidebar-theme="light"` |
| Dark  | `data-sidebar-theme="dark"`  |

The sidebar skeleton only changes the sidebar background. It does not change Bootstrap's global `data-bs-theme`, so it can be used as an independent layout package without affecting the rest of the page.

Packages built on top of the sidebar skeleton, such as `sidebar-menu-compostrap`, should react to the same `data-sidebar-theme` attribute when they need matching menu colors.

## Sidebar menu toggle
If you want your own toggle button visible at all resolutions, update the class in sidebar.js:

| Description              | Class                  |
|--------------------------|------------------------|
| Visible in small devices | sidebar-toggle         |
| Visible all resolution   | sidebar-toggle-visible |

On smaller screens, the sidebar opens as an overlay and does not push the page content. A backdrop is added automatically and clicking it closes the sidebar. From the `md` breakpoint up, the sidebar stays visible in the normal layout.
