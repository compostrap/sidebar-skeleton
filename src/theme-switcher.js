/**
 * Theme switcher for Sidebar
 * Persistent theme selection using localStorage
 */
document.addEventListener('DOMContentLoaded', () => {
	const themeToggle = document.getElementById('theme-toggle');
	const sidebar = document.getElementById('navigation');
	const storageKey = 'sidebar-theme';

	// Load theme from localStorage or use the current attribute as default
	const savedTheme = localStorage.getItem(storageKey) || sidebar.getAttribute('data-sidebar-theme') || 'light';
	sidebar.setAttribute('data-sidebar-theme', savedTheme);
	updateToggleButton(savedTheme);

	themeToggle.addEventListener('click', (e) => {
		e.preventDefault();
		const currentTheme = sidebar.getAttribute('data-sidebar-theme');
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';

		sidebar.setAttribute('data-sidebar-theme', newTheme);
		localStorage.setItem(storageKey, newTheme);
		updateToggleButton(newTheme);
	});

	function updateToggleButton(theme) {
		if (theme === 'dark') {
			themeToggle.innerText = 'Switch to light';
		} else {
			themeToggle.innerText = 'Switch to dark';
		}
	}
});
