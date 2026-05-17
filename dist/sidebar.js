class n {
  static init() {
    const t = document.getElementById("sidebar"), e = document.getElementById("navigation");
    t && e && t.addEventListener("click", () => {
      e.classList.toggle("sidebar-toggle");
    });
  }
}
export {
  n as Sidebar
};
