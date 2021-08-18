/*!
 * Sidebar for Bootstrap 4
 * Copyright Zdeněk Papučík
 * MIT License
 */
document.getElementById('sidebar').addEventListener('click', () => {
  const element = document.getElementById('navigation');
  element.classList.toggle('sidebar-toggle');
});
