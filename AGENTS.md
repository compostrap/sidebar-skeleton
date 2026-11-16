# sidebar-skeleton-compostrap

The frame of a page with a sidebar on Bootstrap 5: the sidebar (`#navigation`), its toggle (`#sidebar`), the wrapper of the content and the backgrounds of the light and dark theme. It is the base of the older compostrap packages (`sidebar-menu`, `sidebar-menu-custom`, `dashboard-skeleton`); the package `compostrap` replaces all of them, and these packages take its look without changing their markup.

## Layout

- `src/sidebar.js`: `Sidebar.init()`, the toggle, the backdrop and the behavior below md; `src/index.js` exports it with `SidebarSkeleton`.
- `src/scss/`: `utils/_variables.scss` (`$sm-width`, `$sm-top`, used by the other packages through `src/scss/utils/index`), `base/_body.scss`, `layout/_wrapper.scss`, `components/_sidebar.scss`, `themes/_theme.scss`.
- `dist/` is versioned (the demos of the other packages load it from `node_modules`); `npm run build` writes it.
- `index.html` is the demo.

## How it works

- The look follows compostrap. Projects copy the markup, so class names, ids and `data-*` attributes stay; a change of the look is made in SCSS or JavaScript only.
- `themes/_theme.scss` sets the backgrounds of both themes in neutral grays like compostrap (light: body `#fff`, secondary `#e5e5e5`, tertiary `#fafafa`; dark: body `#171717`, secondary `#262626`, tertiary `#1f1f1f`) over the Bootstrap tokens, so every package and component built on them takes them. The page is the tertiary background, the sidebar the body background.
- No shadows: the surfaces part from the page by their color only (the utility `shadow-soft` was removed).
- Below md the sidebar slides in over the page with a backdrop; while closed it is `inert`, when opened it takes the focus, and the focus leaving it, Escape or a click on the backdrop closes it.

## Commands

- `npm run dev`: the demo.
- `npm run build`: JavaScript and CSS into `dist/`.
