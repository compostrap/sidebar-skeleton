import { Sidebar as e } from "./sidebar.js";
import { ThemeSwitcher as t } from "./theme-switcher.js";
//#region src/index.js
var n = class {
	static init() {
		e.init(), t.init();
	}
};
//#endregion
export { e as Sidebar, n as SidebarSkeleton, t as ThemeSwitcher };
