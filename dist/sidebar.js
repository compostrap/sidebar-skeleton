class d {
  static init() {
    const s = document.getElementById("sidebar"), e = document.getElementById("navigation"), t = document.createElement("div");
    if (t.className = "sidebar-backdrop", s && e) {
      e.after(t);
      const a = () => {
        e.classList.remove("sidebar-toggle"), t.classList.remove("show");
      }, i = window.matchMedia("(min-width: 768px)");
      s.addEventListener("click", () => {
        e.classList.toggle("sidebar-toggle"), t.classList.toggle("show", e.classList.contains("sidebar-toggle"));
      }), t.addEventListener("click", a), i.addEventListener("change", (c) => {
        c.matches && a();
      });
    }
  }
}
export {
  d as Sidebar
};
