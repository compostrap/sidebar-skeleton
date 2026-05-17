document.addEventListener("DOMContentLoaded", () => {
  const t = document.getElementById("theme-toggle"), e = document.getElementById("navigation"), d = "sidebar-theme", i = localStorage.getItem(d) || e.getAttribute("data-sidebar-theme") || "light";
  e.setAttribute("data-sidebar-theme", i), r(i), t.addEventListener("click", (a) => {
    a.preventDefault();
    const n = e.getAttribute("data-sidebar-theme") === "light" ? "dark" : "light";
    e.setAttribute("data-sidebar-theme", n), localStorage.setItem(d, n), r(n);
  });
  function r(a) {
    a === "dark" ? t.innerText = "Switch to light" : t.innerText = "Switch to dark";
  }
});
