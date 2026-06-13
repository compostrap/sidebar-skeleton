//#region src/theme-switcher.js
var e = class {
	static init() {
		let e = document.getElementById("theme-toggle"), t = document.documentElement;
		if (!e) return;
		let n = "bootstrap-theme", r = "data-bs-theme", i = localStorage.getItem(n) || t.getAttribute(r) || "light";
		t.setAttribute(r, i), this._render(e, i), e.addEventListener("click", (i) => {
			i.preventDefault();
			let a = t.getAttribute(r) === "light" ? "dark" : "light";
			t.setAttribute(r, a), localStorage.setItem(n, a), this._render(e, a);
		});
	}
	static _render(e, t) {
		e.innerText = t === "dark" ? e.dataset.themeLightLabel || "Switch to light" : e.dataset.themeDarkLabel || "Switch to dark";
	}
};
//#endregion
export { e as ThemeSwitcher };
