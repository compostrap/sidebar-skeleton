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
		}, i = window.matchMedia("(min-width: 768px)"), a = () => t.classList.contains("sidebar-toggle"), o = () => {
			t.inert = !i.matches && !a() && !t.classList.contains("sidebar-toggle-visible");
		};
		r(a()), n.classList.toggle("show", a()), o();
		let s = () => {
			t.classList.remove("sidebar-toggle"), n.classList.remove("show"), r(!1), o();
		};
		e.addEventListener("click", () => {
			let e = !a();
			t.classList.toggle("sidebar-toggle", e), n.classList.toggle("show", e), r(e), o(), e && !i.matches && t.querySelector("a[href], button, [tabindex=\"0\"]")?.focus({ preventScroll: !0 });
		}), document.addEventListener("focusin", (n) => {
			!i.matches && a() && n.target !== e && !t.contains(n.target) && s();
		}), n.addEventListener("click", () => {
			s(), e.focus();
		}), document.addEventListener("keydown", (t) => {
			t.key === "Escape" && a() && (s(), e.focus());
		}), i.addEventListener("change", (e) => {
			e.matches && s(), o();
		});
	}
};
//#endregion
export { e as Sidebar };
