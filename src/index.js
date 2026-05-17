import "./scss/sidebar.scss";
import { Sidebar } from "./sidebar.js";
import { ThemeSwitcher } from "./theme-switcher.js";

export class SidebarSkeleton {
	static init() {
		Sidebar.init();
		ThemeSwitcher.init();
	}
}

export { Sidebar, ThemeSwitcher };
