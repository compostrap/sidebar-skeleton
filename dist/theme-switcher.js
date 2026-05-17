class s {
  static init() {
    const e = document.getElementById("theme-toggle"), t = document.getElementById("navigation");
    if (!e || !t)
      return;
    const n = "sidebar-theme", r = "data-sidebar-theme", a = localStorage.getItem(n) || t.getAttribute(r) || "light";
    t.setAttribute(r, a), this._render(e, a), e.addEventListener("click", (o) => {
      o.preventDefault();
      const i = t.getAttribute(r) === "light" ? "dark" : "light";
      t.setAttribute(r, i), localStorage.setItem(n, i), this._render(e, i);
    });
  }
  static _render(e, t) {
    e.innerText = t === "dark" ? "Switch to light" : "Switch to dark";
  }
}
export {
  s as ThemeSwitcher
};
