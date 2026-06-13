class h {
  static init() {
    const t = document.getElementById("theme-toggle"), e = document.documentElement;
    if (!t)
      return;
    const n = "bootstrap-theme", r = "data-bs-theme", i = localStorage.getItem(n) || e.getAttribute(r) || "light";
    e.setAttribute(r, i), this._render(t, i), t.addEventListener("click", (s) => {
      s.preventDefault();
      const a = e.getAttribute(r) === "light" ? "dark" : "light";
      e.setAttribute(r, a), localStorage.setItem(n, a), this._render(t, a);
    });
  }
  static _render(t, e) {
    t.innerText = e === "dark" ? t.dataset.themeLightLabel || "Switch to light" : t.dataset.themeDarkLabel || "Switch to dark";
  }
}
export {
  h as ThemeSwitcher
};
