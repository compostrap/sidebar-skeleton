document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sidebar").addEventListener("click", () => {
    document.getElementById("navigation").classList.toggle("sidebar-toggle");
  });
});
