class h {
  static init() {
    const t = document.getElementById("theme-toggle"), e = document.getElementById("navigation");
    if (!t || !e)
      return;
    const i = "sidebar-theme", r = "data-sidebar-theme", n = localStorage.getItem(i) || e.getAttribute(r) || "light";
    e.setAttribute(r, n), this._render(t, n), t.addEventListener("click", (s) => {
      s.preventDefault();
      const a = e.getAttribute(r) === "light" ? "dark" : "light";
      e.setAttribute(r, a), localStorage.setItem(i, a), this._render(t, a);
    });
  }
  static _render(t, e) {
    t.innerText = e === "dark" ? t.dataset.themeLightLabel || "Switch to light" : t.dataset.themeDarkLabel || "Switch to dark";
  }
}
export {
  h as ThemeSwitcher
};
