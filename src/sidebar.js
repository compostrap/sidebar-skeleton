/*!
 * Sidebar for Bootstrap
 * Copyright Zdeněk Papučík
 * MIT License
 */
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('sidebar').addEventListener('click', () => {
		const element = document.getElementById('navigation');
		element.classList.toggle('sidebar-toggle');
	});
});