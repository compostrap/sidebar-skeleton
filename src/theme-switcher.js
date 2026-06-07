/**
 * Theme switcher for Sidebar
 * Persistent theme selection using localStorage
 */
export class ThemeSwitcher {
	static init() {
		const toggle = document.getElementById("theme-toggle");
		const navigation = document.getElementById("navigation");

		if (!toggle || !navigation) {
			return;
		}

		const storageKey = "sidebar-theme";
		const themeAttr = "data-sidebar-theme";

		const currentTheme =
			localStorage.getItem(storageKey) ||
			navigation.getAttribute(themeAttr) ||
			"light";

		navigation.setAttribute(themeAttr, currentTheme);
		this._render(toggle, currentTheme);

		toggle.addEventListener("click", (event) => {
			event.preventDefault();

			const nextTheme =
				navigation.getAttribute(themeAttr) === "light"
					? "dark"
					: "light";

			navigation.setAttribute(themeAttr, nextTheme);
			localStorage.setItem(storageKey, nextTheme);
			this._render(toggle, nextTheme);
		});
	}

	static _render(toggle, theme) {
		toggle.innerText =
			theme === "dark"
				? toggle.dataset.themeLightLabel || "Switch to light"
				: toggle.dataset.themeDarkLabel || "Switch to dark";
	}
}
