//#region src/sidebar.js
var e = class {
	static init() {
		let e = document.getElementById("sidebar"), t = document.getElementById("navigation");
		if (!e || !t || t.dataset.sidebarInitialized === "true") return;
		t.dataset.sidebarInitialized = "true", e.setAttribute("aria-controls", t.id);
		let n = document.createElement("div");
		n.className = "sidebar-backdrop", t.after(n);
		let r = (t) => {
			e.setAttribute("aria-expanded", String(t));
		}, i = () => t.classList.contains("sidebar-toggle");
		r(i()), n.classList.toggle("show", i());
		let a = () => {
			t.classList.remove("sidebar-toggle"), n.classList.remove("show"), r(!1);
		}, o = window.matchMedia("(min-width: 768px)");
		e.addEventListener("click", () => {
			let e = !i();
			t.classList.toggle("sidebar-toggle", e), n.classList.toggle("show", e), r(e);
		}), n.addEventListener("click", () => {
			a(), e.focus();
		}), document.addEventListener("keydown", (t) => {
			t.key === "Escape" && i() && (a(), e.focus());
		}), o.addEventListener("change", (e) => {
			e.matches && a();
		});
	}
};
//#endregion
export { e as Sidebar };
