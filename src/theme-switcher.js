/**
 * Theme switcher for Sidebar
 * Persistent theme selection using localStorage
 */
export class ThemeSwitcher {
	static init() {
		const toggle = document.getElementById("theme-toggle");
		const themeTarget = document.documentElement;

		if (!toggle) {
			return;
		}

		const storageKey = "bootstrap-theme";
		const themeAttr = "data-bs-theme";

		const currentTheme =
			localStorage.getItem(storageKey) ||
			themeTarget.getAttribute(themeAttr) ||
			"light";

		themeTarget.setAttribute(themeAttr, currentTheme);
		this._render(toggle, currentTheme);

		toggle.addEventListener("click", (event) => {
			event.preventDefault();

			const nextTheme =
				themeTarget.getAttribute(themeAttr) === "light"
					? "dark"
					: "light";

			themeTarget.setAttribute(themeAttr, nextTheme);
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
