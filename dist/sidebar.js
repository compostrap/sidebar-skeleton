//#region src/sidebar.js
var e = class {
	static init() {
		let e = document.getElementById("sidebar"), t = document.getElementById("navigation"), n = document.createElement("div");
		if (n.className = "sidebar-backdrop", e && t) {
			t.after(n);
			let r = () => {
				t.classList.remove("sidebar-toggle"), n.classList.remove("show");
			}, i = window.matchMedia("(min-width: 768px)");
			e.addEventListener("click", () => {
				t.classList.toggle("sidebar-toggle"), n.classList.toggle("show", t.classList.contains("sidebar-toggle"));
			}), n.addEventListener("click", r), i.addEventListener("change", (e) => {
				e.matches && r();
			});
		}
	}
};
//#endregion
export { e as Sidebar };
